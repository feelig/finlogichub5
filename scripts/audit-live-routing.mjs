import {
  LEGACY_GONE_ROUTES
} from "../data/route-policy.mjs";

const SITE_ORIGIN = "https://finlogichub5.com";
const UNKNOWN_ROUTE = "/this-url-should-not-exist-routing-audit";
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;

function toUrl(pathname) {
  return new URL(pathname, SITE_ORIGIN).toString();
}

async function readLiveSitemapUrls() {
  const response = await fetch(`${SITEMAP_URL}?ts=${Date.now()}`, {
    headers: {
      "cache-control": "no-cache"
    }
  });

  if (!response.ok) {
    throw new Error(`Unable to load live sitemap: ${response.status}`);
  }

  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

async function fetchHead(url) {
  const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}ts=${Date.now()}`, {
    method: "HEAD",
    headers: {
      "cache-control": "no-cache"
    },
    redirect: "manual"
  });

  return {
    url,
    status: response.status,
    robots: response.headers.get("x-robots-tag") ?? "",
    contentType: response.headers.get("content-type") ?? ""
  };
}

const liveUrls = await readLiveSitemapUrls();
const legacyUrls = LEGACY_GONE_ROUTES.map(toUrl);
const liveResults = await Promise.all(liveUrls.map(fetchHead));
const legacyResults = await Promise.all(legacyUrls.map(fetchHead));
const unknownResult = await fetchHead(toUrl(UNKNOWN_ROUTE));

const problems = [];

for (const result of liveResults) {
  if (result.status !== 200) {
    problems.push(`Live URL should return 200: ${result.url} -> ${result.status}`);
  }

  if (/noindex/i.test(result.robots)) {
    problems.push(`Live URL should not send noindex: ${result.url} -> ${result.robots}`);
  }
}

for (const result of legacyResults) {
  if (result.status !== 410) {
    problems.push(`Legacy URL should return 410: ${result.url} -> ${result.status}`);
  }

  if (!/noindex/i.test(result.robots)) {
    problems.push(`Legacy URL should send noindex: ${result.url} -> ${result.robots || "(missing)"}`);
  }
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
