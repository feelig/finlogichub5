import { execFile as execFileCallback } from "node:child_process";
import { promisify } from "node:util";
import {
  LEGACY_GONE_ROUTES
} from "../data/route-policy.mjs";

const SITE_ORIGIN = "https://finlogichub5.com";
const UNKNOWN_ROUTE = "/this-url-should-not-exist-routing-audit";
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
const FETCH_TIMEOUT_MS = 12000;
const MAX_CONCURRENT_REQUESTS = 6;
const RETRY_DELAYS_MS = [400, 1200, 2400];
const CURL_MAX_TIME_SECONDS = 20;
const execFile = promisify(execFileCallback);

function toUrl(pathname) {
  return new URL(pathname, SITE_ORIGIN).toString();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function shouldRetryResponse(response) {
  return response.status === 429 || response.status >= 500;
}

function parseCurlHeaderBlock(rawHeaders) {
  const normalized = rawHeaders.replace(/\r\n/g, "\n");
  const blocks = normalized
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);
  const headerBlock = [...blocks].reverse().find((block) => block.startsWith("HTTP/"));

  if (!headerBlock) {
    throw new Error("Unable to parse curl response headers.");
  }

  const lines = headerBlock.split("\n");
  const statusLine = lines.shift() ?? "";
  const statusMatch = statusLine.match(/^HTTP\/\S+\s+(\d{3})/);

  if (!statusMatch) {
    throw new Error(`Unable to parse curl status line: ${statusLine}`);
  }

  const headers = new Map();

  for (const line of lines) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const name = line.slice(0, separatorIndex).trim().toLowerCase();
    const value = line.slice(separatorIndex + 1).trim();
    headers.set(name, value);
  }

  return {
    status: Number(statusMatch[1]),
    headers
  };
}

async function readTextWithCurl(url) {
  const { stdout } = await execFile("curl", [
    "-fsSL",
    "--retry",
    "3",
    "--retry-delay",
    "1",
    "--retry-all-errors",
    "--connect-timeout",
    String(FETCH_TIMEOUT_MS / 1000),
    "--max-time",
    String(CURL_MAX_TIME_SECONDS),
    "-H",
    "cache-control: no-cache",
    url
  ]);

  return stdout;
}

async function headWithCurl(url) {
  const { stdout } = await execFile("curl", [
    "-sS",
    "-o",
    "/dev/null",
    "-D",
    "-",
    "-X",
    "HEAD",
    "--retry",
    "3",
    "--retry-delay",
    "1",
    "--retry-all-errors",
    "--connect-timeout",
    String(FETCH_TIMEOUT_MS / 1000),
    "--max-time",
    String(CURL_MAX_TIME_SECONDS),
    "-H",
    "cache-control: no-cache",
    url
  ]);

  return parseCurlHeaderBlock(stdout);
}

async function fetchWithRetry(url, options = {}) {
  let lastError = null;

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
      });

      if (shouldRetryResponse(response) && attempt < RETRY_DELAYS_MS.length) {
        await sleep(RETRY_DELAYS_MS[attempt]);
        continue;
      }

      return response;
    } catch (error) {
      lastError = error;

      if (attempt >= RETRY_DELAYS_MS.length) {
        break;
      }

      await sleep(RETRY_DELAYS_MS[attempt]);
    }
  }

  throw lastError ?? new Error(`Fetch failed for ${url}`);
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  const workerCount = Math.min(limit, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

async function readLiveSitemapUrls() {
  let xml = "";

  try {
    const response = await fetchWithRetry(`${SITEMAP_URL}?ts=${Date.now()}`, {
      headers: {
        "cache-control": "no-cache"
      }
    });

    if (!response.ok) {
      throw new Error(`Unable to load live sitemap: ${response.status}`);
    }

    xml = await response.text();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Fetch sitemap failed, retrying with curl: ${message}`);
    xml = await readTextWithCurl(`${SITEMAP_URL}?ts=${Date.now()}`);
  }

  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

async function fetchHead(url) {
  try {
    const response = await fetchWithRetry(
      `${url}${url.includes("?") ? "&" : "?"}ts=${Date.now()}`,
      {
        method: "HEAD",
        headers: {
          "cache-control": "no-cache"
        },
        redirect: "manual"
      }
    );

    return {
      url,
      status: response.status,
      robots: response.headers.get("x-robots-tag") ?? "",
      contentType: response.headers.get("content-type") ?? "",
      error: ""
    };
  } catch (error) {
    const fetchError = error instanceof Error ? error.message : String(error);

    try {
      const response = await headWithCurl(
        `${url}${url.includes("?") ? "&" : "?"}ts=${Date.now()}`
      );

      return {
        url,
        status: response.status,
        robots: response.headers.get("x-robots-tag") ?? "",
        contentType: response.headers.get("content-type") ?? "",
        error: ""
      };
    } catch (curlError) {
      const curlMessage = curlError instanceof Error ? curlError.message : String(curlError);

      return {
        url,
        status: 0,
        robots: "",
        contentType: "",
        error: `fetch: ${fetchError}; curl: ${curlMessage}`
      };
    }
  }
}

const liveUrls = await readLiveSitemapUrls();
const legacyUrls = LEGACY_GONE_ROUTES.map(toUrl);
const liveResults = await mapWithConcurrency(liveUrls, MAX_CONCURRENT_REQUESTS, fetchHead);
const legacyResults = await mapWithConcurrency(legacyUrls, MAX_CONCURRENT_REQUESTS, fetchHead);
const unknownResult = await fetchHead(toUrl(UNKNOWN_ROUTE));

const problems = [];

for (const result of liveResults) {
  if (result.error) {
    problems.push(`Live URL could not be checked: ${result.url} -> ${result.error}`);
    continue;
  }

  if (result.status !== 200) {
    problems.push(`Live URL should return 200: ${result.url} -> ${result.status}`);
  }

  if (/noindex/i.test(result.robots)) {
    problems.push(`Live URL should not send noindex: ${result.url} -> ${result.robots}`);
  }
}

for (const result of legacyResults) {
  if (result.error) {
    problems.push(`Legacy URL could not be checked: ${result.url} -> ${result.error}`);
    continue;
  }

  if (result.status !== 410) {
    problems.push(`Legacy URL should return 410: ${result.url} -> ${result.status}`);
  }

  if (!/noindex/i.test(result.robots)) {
    problems.push(`Legacy URL should send noindex: ${result.url} -> ${result.robots || "(missing)"}`);
  }
}

if (unknownResult.error) {
  problems.push(`Unknown URL could not be checked: ${unknownResult.url} -> ${unknownResult.error}`);
}

if (unknownResult.status !== 404) {
  problems.push(`Unknown URL should return 404: ${unknownResult.url} -> ${unknownResult.status}`);
}

if (!/noindex/i.test(unknownResult.robots)) {
  problems.push(
    `Unknown URL should send noindex: ${unknownResult.url} -> ${unknownResult.robots || "(missing)"}`
  );
}

console.log(`Live URLs checked: ${liveResults.length}`);
console.log(`Legacy URLs checked: ${legacyResults.length}`);
console.log(`Unknown URL checked: ${unknownResult.url}`);

if (problems.length === 0) {
  console.log("Live routing audit passed.");
} else {
  console.log("");
  console.log("Live routing issues:");
  for (const issue of problems) {
    console.log(`- ${issue}`);
  }
  process.exitCode = 1;
}
