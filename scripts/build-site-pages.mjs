import fs from "node:fs/promises";
import path from "node:path";

import { liveStatePages } from "../data/live-state-pages.mjs";
import { coverageBuckets, stateDirectory } from "../data/state-directory.mjs";
import {
  formatLongDate,
  getPageRoute,
  parseReviewDate,
  pluralize
} from "./lib/state-page-utils.mjs";

const ROOT = process.cwd();
const DIRECTORY_ROUTE = "/states.html";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderSiteHead({ title, description, canonical, ogTitle, ogDescription }) {
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta
      name="description"
      content="${escapeHtml(description)}"
    />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta
      property="og:description"
      content="${escapeHtml(ogDescription)}"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://finlogichub5.com/social-preview.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;family=Source+Serif+4:wght@600;700&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/style.css" />`;
}

function renderHeader() {
  return `      <header class="site-header">
        <a class="brand" href="/">
          <span class="brand__mark">FH</span>
          <span>
            <strong>FinLogic Hub</strong>
            <small>State filing fee guides</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="${DIRECTORY_ROUTE}">States</a>
          <a href="/filing-basics.html">Filing basics</a>
          <a href="/filing-help-options.html">Help options</a>
          <a href="/about.html">About</a>
        </nav>
      </header>`;
}

function renderFooter() {
  return `      <footer class="site-footer">
        <nav class="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="${DIRECTORY_ROUTE}">States</a>
          <a href="/filing-basics.html">Filing basics</a>
          <a href="/filing-help-options.html">Help options</a>
          <a href="/about.html">About</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/contact.html">Contact</a>
          <a href="/terms.html">Terms</a>
        </nav>
        <p>&copy; 2026 FinLogic Hub. Informational only. Official state sources control.</p>
      </footer>`;
}

function renderCardMeta(entry) {
  return `Reviewed ${entry.page.lastReviewed} | ${entry.page.sourceLinks.length} official ${pluralize(
    entry.page.sourceLinks.length,
    "source"
  )}`;
}

function renderStateCards(entries, mode) {
  return entries
    .map((entry) => {
      const description =
        mode === "home" ? entry.homeCardDescription : entry.directoryCardDescription;
      const searchText = [
        entry.state,
        entry.guideLabel,
        entry.guideType,
        entry.directoryComparison.obligation,
        entry.directoryComparison.entityFocus,
        description
      ]
        .join(" ")
        .toLowerCase();

      return `            <a class="state-card" href="${escapeHtml(entry.route)}" data-guide-card data-search="${escapeHtml(searchText)}">
              <h3>${escapeHtml(entry.guideLabel)}</h3>
              <p>${escapeHtml(description)}</p>
              <span>${escapeHtml(renderCardMeta(entry))}</span>
            </a>`;
    })
    .join("\n");
}

function renderSelectOptions(entries) {
  return entries
    .map(
      (entry) =>
        `                  <option value="${escapeHtml(entry.route)}">${escapeHtml(
          entry.guideLabel
        )}</option>`
    )
    .join("\n");
}

function renderHomeComparisonRows(entries) {
  return entries
    .map(
      (entry) => `                <tr>
                  <td>${escapeHtml(entry.state)}</td>
                  <td>${escapeHtml(entry.homeComparison.focus)}</td>
                  <td>${escapeHtml(entry.homeComparison.deadline)}</td>
                  <td>${escapeHtml(entry.homeComparison.fee)}</td>
                  <td>${escapeHtml(entry.homeComparison.lateRule)}</td>
                </tr>`
    )
    .join("\n");
}

function renderDirectoryComparisonRows(entries) {
  return entries
    .map(
      (entry) => `                <tr>
                  <td>${escapeHtml(entry.state)}</td>
                  <td>${escapeHtml(entry.directoryComparison.obligation)}</td>
                  <td>${escapeHtml(entry.directoryComparison.entityFocus)}</td>
                  <td>${escapeHtml(entry.directoryComparison.deadline)}</td>
                  <td>${escapeHtml(entry.directoryComparison.amount)}</td>
                </tr>`
    )
    .join("\n");
}

function renderCoverageMetrics(bucketSummaries) {
  return bucketSummaries
    .map(
      ({ bucket, entries }) => `              <div class="metric-card">
                <strong>${escapeHtml(bucket.label)} (${entries.length})</strong>
                <span>${escapeHtml(bucket.description)}</span>
              </div>`
    )
    .join("\n");
}

function renderCustomerFlow() {
  const steps = [
    {
      step: "1",
      title: "Pick the exact filing label",
      text: "Choose the page that matches the actual state filing type, not just the state name."
    },
    {
      step: "2",
      title: "Match the entity type",
      text: "Check whether the state treats LLCs, corporations, nonprofits, or foreign entities differently."
    },
    {
      step: "3",
      title: "Use the due date and published amount",
      text: "Get the first practical answer fast before opening the official filing screen."
    },
    {
      step: "4",
      title: "Finish on the official source",
      text: "Use the linked state portal, fee schedule, or FAQ as the controlling source before you file."
    }
  ];

  return steps
    .map(
      (item) => `            <article class="flow-card">
              <span class="flow-step">${escapeHtml(item.step)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>`
    )
    .join("\n");
}

function renderSearchPanel(title, description) {
  return `          <div class="filter-bar">
            <div>
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(description)}</span>
            </div>
            <label class="field field--search">
              <span>Search live guides</span>
              <input
                type="search"
                placeholder="Type a state, filing type, or entity"
                data-guide-search-input
              />
            </label>
          </div>`;
}

function renderStartPathCards() {
  const cards = [
    {
      href: "#stateGuideSelect",
      kicker: "I know the state",
      label: "Open the right guide fast",
      text: "Use the quick state lookup when you already know the state and filing label."
    },
    {
      href: DIRECTORY_ROUTE,
      kicker: "I need to compare",
      label: "Compare live state guides",
      text: "Use the directory if you are checking more than one state, entity type, or filing label."
    },
    {
      href: "/filing-help-options.html",
      kicker: "I need help options",
      label: "Review self-serve and assisted paths",
      text: "Compare the official filing path with help options before paying a third-party service."
    }
  ];

  return cards
    .map(
      (card) => `            <a class="action-card" href="${escapeHtml(card.href)}">
              <span class="action-label">${escapeHtml(card.kicker)}</span>
              <strong>${escapeHtml(card.label)}</strong>
              <span>${escapeHtml(card.text)}</span>
            </a>`
    )
    .join("\n");
}

function renderHomePage({ entries, latestReviewText, uniqueSourceCount }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
${renderSiteHead({
  title: "State Filing Deadlines and Recurring Business Fees | FinLogic Hub",
  description:
    "Official-state-source guides for annual report deadlines, franchise tax due dates, recurring filing fees, and late-payment rules for selected U.S. business entities.",
  canonical: "https://finlogichub5.com/",
  ogTitle: "State Filing Deadlines and Recurring Business Fees | FinLogic Hub",
  ogDescription:
    "Official state guidance summaries for filing deadlines, fee tables, annual taxes, and late-payment rules for selected U.S. business entities."
})}
  </head>
  <body>
    <div class="site-shell">
${renderHeader()}

      <main class="page">
        <section class="hero hero--home">
          <div class="hero__copy surface">
            <p class="eyebrow">Official-state-source summaries</p>
            <h1>Find the right filing deadline, annual fee, or recurring business tax fast.</h1>
            <p class="hero__subtitle">
              Every live guide is tied to official state sources, carries a manual review date, and
              sits behind a daily source-health scan. Every live guide now targets at least five
              official sources so customers can see what is due, when it is due, and what it costs
              without wading through clutter.
            </p>
            <div class="notice-bar">
              <strong>Important:</strong>
              <span>Informational only. Official state instructions and filing portals still control.</span>
            </div>
            <div class="stat-grid">
              <div class="stat-card">
                <strong>${entries.length} live state guides</strong>
                <span>Entity-specific pages for annual reports, annual fees, statements, and franchise-tax filings.</span>
              </div>
              <div class="stat-card">
                <strong>Latest manual review: ${escapeHtml(latestReviewText)}</strong>
                <span>Every live guide shows a dated review stamp.</span>
              </div>
              <div class="stat-card">
                <strong>${uniqueSourceCount} official source links monitored</strong>
                <span>Daily scans flag broken links or pages that need a fresh review.</span>
              </div>
            </div>
          </div>

          <aside class="hero__panel surface">
            <h2>Quick state lookup</h2>
            <p>Open the live guide for the state and filing rule you need.</p>
            <form class="lookup-form" data-state-lookup>
              <label class="field" for="stateGuideSelect">
                <span>Choose a live guide</span>
                <select id="stateGuideSelect" name="state-guide">
                  <option value="">Select a guide</option>
${renderSelectOptions(entries)}
                </select>
              </label>
              <button class="button button--primary" type="submit">Open guide</button>
            </form>
          </aside>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Start here</p>
            <h2>Choose the fastest path for what you need</h2>
            <p>
              The site is organized for three common jobs: opening the right guide fast, comparing
              states before filing, or checking help options before paying someone else.
            </p>
          </div>
          <div class="action-list action-list--triple">
${renderStartPathCards()}
          </div>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Customer path</p>
            <h2>What most visitors need in the first minute</h2>
            <p>
              The site is built to answer the same decision sequence every time, so customers can
              move from confusion to the official filing source quickly.
            </p>
          </div>
          <div class="flow-grid">
${renderCustomerFlow()}
          </div>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Live guides</p>
            <h2>Current state coverage</h2>
            <p>
              Each card below is a live guide designed to answer the first customer questions:
              what is due, when it is due, what the published amount is, and which official source
              backs the answer.
            </p>
          </div>
${renderSearchPanel(
  "Start with the closest match",
  "Search by state, filing label, or entity type before scanning the full grid."
)}
          <div class="state-grid">
${renderStateCards(entries, "home")}
          </div>
          <p class="empty-state" hidden data-guide-empty>No matching live guide yet. Try a state name, entity type, or filing label.</p>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Comparison snapshot</p>
            <h2>Fast comparison of the live states</h2>
            <p>
              Use this table to spot the right guide quickly. If a state splits by entity type, use
              the detailed page before filing or paying.
            </p>
          </div>
          <div class="table-scroll">
            <table class="summary-table">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Main entity covered here</th>
                  <th>Deadline</th>
                  <th>Published fee</th>
                  <th>Late rule shown on live page</th>
                </tr>
              </thead>
              <tbody>
${renderHomeComparisonRows(entries)}
              </tbody>
            </table>
          </div>
        </section>

        <section class="section section--split">
          <div class="surface">
            <div class="section__head">
              <p class="eyebrow">How to use this site</p>
              <h2>What a customer should do first</h2>
            </div>
            <ul class="checklist">
              <li>Choose the state guide that matches the filing label, not just the state name.</li>
              <li>Check whether the page is separating LLC, corporation, partnership, or foreign-entity rules.</li>
              <li>Use the quick summary first, then the detailed table if the state has split rules.</li>
              <li>Finish by confirming on the official state link shown on the page.</li>
            </ul>
          </div>
          <div class="surface">
            <div class="section__head">
              <p class="eyebrow">Trust signals</p>
              <h2>Why these pages stay cleaner and more credible</h2>
            </div>
            <ul class="checklist">
              <li>Official state sources only for deadlines, fees, and penalty math.</li>
              <li>Every live guide shows a specific manual review date.</li>
              <li>Entity-type differences stay separated instead of being blended into one answer.</li>
              <li>Daily source-health scans catch broken links and stale review cycles.</li>
            </ul>
          </div>
        </section>
      </main>

${renderFooter()}
    </div>
    <script src="/script.js"></script>
  </body>
</html>
`;
}

function renderStatesPage({ entries, latestReviewText, bucketSummaries }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
${renderSiteHead({
  title: "State Filing Guides | FinLogic Hub",
  description:
    "Browse official-state-source guides for annual report deadlines, franchise tax due dates, annual taxes, recurring business fees, and late-payment rules by state.",
  canonical: `https://finlogichub5.com${DIRECTORY_ROUTE}`,
  ogTitle: "State Filing Guides | FinLogic Hub",
  ogDescription:
    "State-by-state filing guides covering annual reports, franchise tax due dates, annual taxes, recurring fees, and official filing links."
})}
  </head>
  <body>
    <div class="site-shell">
${renderHeader()}

      <main class="page">
        <section class="hero hero--page">
          <div class="hero__copy surface">
            <div class="breadcrumbs">
              <a href="/">Home</a>
              <span>/</span>
              <span>State filing guides</span>
            </div>
            <p class="eyebrow">State directory</p>
            <h1>Pick the right live state guide quickly</h1>
            <p class="hero__subtitle">
              This directory is intentionally selective. A state appears here only after we can tie
              the key deadline, fee, and filing rule back to official state sources and add a manual
              review stamp.
            </p>
            <div class="badge-row">
              <span class="badge">${entries.length} live guides</span>
              <span class="badge">Latest manual review: ${escapeHtml(latestReviewText)}</span>
              <span class="badge">Daily source scan enabled</span>
            </div>
          </div>

          <aside class="summary-panel surface">
            <h2>Coverage pattern</h2>
            <div class="metric-grid">
${renderCoverageMetrics(bucketSummaries)}
            </div>
          </aside>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Live guides</p>
            <h2>Current state coverage</h2>
            <p>
              Each card below links to a live page with official-source links, a review date, and a
              narrow scope. If a state treats entity types differently, the page should keep those
              rules separate instead of compressing them.
            </p>
          </div>
${renderSearchPanel(
  "Search the directory",
  "Filter the live guides by state, filing label, or the entity type you care about."
)}
          <div class="state-grid">
${renderStateCards(entries, "directory")}
          </div>
          <p class="empty-state" hidden data-guide-empty>No matching live guide yet. Try a state, obligation, or entity type.</p>
        </section>

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Comparison snapshot</p>
            <h2>Fast comparison of the live states</h2>
            <p>
              This is a directory aid. Use the detailed state page before filing, paying, or
              choosing a compliance service.
            </p>
          </div>
          <div class="table-scroll">
            <table class="summary-table">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Main obligation covered</th>
                  <th>Entity focus</th>
                  <th>Headline due date</th>
                  <th>Main published amount shown</th>
                </tr>
              </thead>
              <tbody>
${renderDirectoryComparisonRows(entries)}
              </tbody>
            </table>
          </div>
        </section>

        <section class="section section--split">
          <div class="surface">
            <div class="section__head">
              <p class="eyebrow">Publishing rule</p>
              <h2>What counts as a live page</h2>
            </div>
            <ul class="checklist">
              <li>The page starts from an official state source or statute.</li>
              <li>The page shows a clear review date.</li>
              <li>The page avoids inventing a flat late fee when the source does not publish one.</li>
              <li>The page separates entity types when the state treats them differently.</li>
              <li>The page keeps a direct path back to the controlling filing page, portal, or statute.</li>
            </ul>
          </div>
          <div class="surface">
            <div class="section__head">
              <p class="eyebrow">Daily monitoring</p>
              <h2>How updates are handled</h2>
            </div>
            <ul class="checklist">
              <li>Every live guide targets at least five official state sources.</li>
              <li>Automated scans check official source links every day.</li>
              <li>The scan also flags pages whose manual review date has gone stale.</li>
              <li>Broken links trigger a report instead of silently leaving bad data live.</li>
              <li>Live copy still changes only after a human source review.</li>
            </ul>
          </div>
        </section>
      </main>

${renderFooter()}
    </div>
    <script src="/script.js"></script>
  </body>
</html>
`;
}

const pagesByRoute = new Map(liveStatePages.map((page) => [getPageRoute(page), page]));

const entries = stateDirectory.map((entry) => {
  const page = pagesByRoute.get(entry.route);

  if (!page) {
    throw new Error(`Missing live page data for route: ${entry.route}`);
  }

  return {
    ...entry,
    page
  };
});

const latestReviewDate = new Date(
  Math.max(...entries.map((entry) => parseReviewDate(entry.page.lastReviewed).getTime()))
);
const latestReviewText = formatLongDate(latestReviewDate);
const uniqueSourceCount = new Set(
  entries.flatMap((entry) => entry.page.sourceLinks.map((link) => link.href))
).size;
const bucketSummaries = coverageBuckets.map((bucket) => ({
  bucket,
  entries: entries.filter((entry) => entry.coverageBucket === bucket.key)
}));

await fs.writeFile(
  path.join(ROOT, "index.html"),
  renderHomePage({ entries, latestReviewText, uniqueSourceCount })
);

await fs.writeFile(
  path.join(ROOT, "states.html"),
  renderStatesPage({ entries, latestReviewText, bucketSummaries })
);

console.log(`Built site pages for ${entries.length} live guides.`);
