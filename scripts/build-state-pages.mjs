import fs from "node:fs/promises";
import path from "node:path";

import { liveStatePages } from "../data/live-state-pages.mjs";
import { stateDirectory } from "../data/state-directory.mjs";
import {
  formatLongDate,
  getPageRoute,
  getReviewStatus,
  parseReviewDate,
  pluralize
} from "./lib/state-page-utils.mjs";

const ROOT = process.cwd();
const SITE_ORIGIN = "https://finlogichub5.com";
const GENERATED_AT = new Date();
const directoryByRoute = new Map(stateDirectory.map((entry) => [entry.route, entry]));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderBreadcrumbs(items) {
  return items
    .map((item) => {
      if (item.href) {
        return `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`;
      }

      return `<span>${escapeHtml(item.label)}</span>`;
    })
    .join('\n              <span>/</span>\n              ');
}

function renderMetrics(metrics) {
  return metrics
    .map(
      (metric) => `              <div class="metric-card">
                <strong>${escapeHtml(metric.label)}</strong>
                <span>${escapeHtml(metric.text)}</span>
              </div>`
    )
    .join("\n");
}

function renderSourceLinks(links) {
  return links
    .map(
      (link, index) => `            <li class="source-item">
              <a href="${escapeHtml(link.href)}">
                <span class="source-kicker">Official source ${index + 1}</span>
                <strong>${escapeHtml(link.label)}</strong>
              </a>
            </li>`
    )
    .join("\n");
}

function formatReviewDate(value) {
  return parseReviewDate(value).toISOString().slice(0, 10);
}

function getBadgeToneClass(tone) {
  return tone ? ` badge--${tone}` : "";
}

function renderActionCards(links) {
  return links
    .map(
      (link, index) => `            <a class="action-card" href="${escapeHtml(link.href)}">
              <span class="action-label">${index === 0 ? "Primary official source" : "Supporting official source"}</span>
              <strong>${escapeHtml(link.label)}</strong>
              <span>Open the controlling state page before filing or paying.</span>
            </a>`
    )
    .join("\n");
}

function renderQuickAnswers(entry) {
  const answerCards = [
    {
      label: "Filing label",
      text: entry.directoryComparison.obligation
    },
    {
      label: "Who should use this page",
      text: entry.directoryComparison.entityFocus
    },
    {
      label: "Headline due date",
      text: entry.directoryComparison.deadline
    },
    {
      label: "Main amount shown",
      text: entry.directoryComparison.amount
    }
  ];

  if (entry.homeComparison?.lateRule) {
    answerCards.push({
      label: "If already late",
      text: entry.homeComparison.lateRule
    });
  }

  return `        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Quick answer</p>
            <h2>What most readers need first</h2>
          </div>
          <div class="insight-grid">
${answerCards
  .map(
    (card) => `            <article class="insight-card">
              <span class="insight-label">${escapeHtml(card.label)}</span>
              <strong>${escapeHtml(card.text)}</strong>
            </article>`
  )
  .join("\n")}
          </div>
        </section>`;
}

function renderCustomerActionSection(page, entry) {
  const primaryLinks = page.sourceLinks.slice(0, 2);
  const lateRule = entry.homeComparison?.lateRule ??
    "Check the official portal, state record, or official notice for the current late consequence.";

  return `        <section class="section section--split">
          <div class="surface task-panel">
            <div class="section__head">
              <p class="eyebrow">Customer task</p>
              <h2>What to do before you file or pay</h2>
            </div>
            <div class="flow-grid flow-grid--compact">
              <article class="flow-card">
                <span class="flow-step">Check scope</span>
                <h3>Match the entity first</h3>
                <p>This page is built for ${escapeHtml(entry.directoryComparison.entityFocus)}.</p>
              </article>
              <article class="flow-card">
                <span class="flow-step">Plan the filing</span>
                <h3>Use the headline answer</h3>
                <p>Start with ${escapeHtml(entry.directoryComparison.deadline)} and ${escapeHtml(entry.directoryComparison.amount)}.</p>
              </article>
              <article class="flow-card">
                <span class="flow-step">If already late</span>
                <h3>Use the late-state rule</h3>
                <p>${escapeHtml(lateRule)}</p>
              </article>
            </div>
            <p class="section-note">
              After you file, keep the official receipt, confirmation email, or payment record from
              the state portal. If the state record gives a record-specific date, amount, or status
              that conflicts with this page, follow the official state source.
            </p>
          </div>
          <div class="surface task-panel">
            <div class="section__head">
              <p class="eyebrow">Official path</p>
              <h2>Start with the controlling source</h2>
            </div>
            <div class="action-list">
${renderActionCards(primaryLinks)}
            </div>
            <p class="section-note">
              If the state filing portal, business record, or official notice conflicts with this
              summary, follow the official state source and treat this page as the quicker first pass.
            </p>
          </div>
        </section>`;
}

function renderTrustSnapshot(page, entry) {
  const reviewStatus = getReviewStatus(parseReviewDate(page.lastReviewed), GENERATED_AT);

  return `        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Trust snapshot</p>
            <h2>Why this page is safer to rely on</h2>
          </div>
          <div class="trust-grid">
            <article class="trust-card">
              <span>Review status</span>
              <strong>${escapeHtml(reviewStatus.label)}</strong>
              <p>${escapeHtml(reviewStatus.detail)}</p>
            </article>
            <article class="trust-card">
              <span>Last reviewed</span>
              <strong>${escapeHtml(page.lastReviewed)}</strong>
              <p>Target refresh by ${escapeHtml(formatLongDate(reviewStatus.nextReviewDate))}.</p>
            </article>
            <article class="trust-card">
              <span>Official sources</span>
              <strong>${page.sourceLinks.length} linked ${pluralize(page.sourceLinks.length, "source")}</strong>
              <p>The answer points back to the controlling state pages shown below.</p>
            </article>
            <article class="trust-card">
              <span>Monitoring</span>
              <strong>Daily source scan monitored</strong>
              <p>Release checks look for stale review dates and broken official links before publishing.</p>
            </article>
          </div>
        </section>`;
}

function serializeJsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function renderStructuredData(page) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, SITE_ORIGIN).toString() : page.canonicalUrl
    }))
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.heroTitle,
    description: page.metaDescription,
    url: page.canonicalUrl,
    dateModified: formatReviewDate(page.lastReviewed),
    about: {
      "@type": "AdministrativeArea",
      name: page.state
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FinLogic Hub",
      url: SITE_ORIGIN
    }
  };

  return `\n    <script type="application/ld+json">${serializeJsonLd(breadcrumbData)}</script>\n    <script type="application/ld+json">${serializeJsonLd(webPageData)}</script>`;
}

function renderPage(page) {
  const scriptTag = page.scriptSrc ? `\n    <script src="${escapeHtml(page.scriptSrc)}"></script>` : "";
  const summaryNote = page.summaryNoteHtml ? `\n${page.summaryNoteHtml}` : "";
  const directoryEntry = directoryByRoute.get(getPageRoute(page));
  const reviewStatus = getReviewStatus(parseReviewDate(page.lastReviewed), GENERATED_AT);
  const quickAnswerSection = directoryEntry ? `\n${renderQuickAnswers(directoryEntry)}\n` : "\n";
  const customerActionSection = directoryEntry
    ? `\n${renderCustomerActionSection(page, directoryEntry)}\n`
    : "\n";
  const trustSnapshotSection = directoryEntry
    ? `\n${renderTrustSnapshot(page, directoryEntry)}\n`
    : "\n";
  const structuredData = renderStructuredData(page);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.titleTag)}</title>
    <meta
      name="description"
      content="${escapeHtml(page.metaDescription)}"
    />
    <link rel="canonical" href="${escapeHtml(page.canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(page.ogTitle)}" />
    <meta
      property="og:description"
      content="${escapeHtml(page.ogDescription)}"
    />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="https://finlogichub5.com/social-preview.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;family=Source+Serif+4:wght@600;700&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/style.css" />${structuredData}
  </head>
  <body>
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="/">
          <span class="brand__mark">FH</span>
          <span>
            <strong>FinLogic Hub</strong>
            <small>State filing fee guides</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/states.html">States</a>
          <a href="/filing-basics.html">Filing basics</a>
          <a href="/filing-help-options.html">Help options</a>
          <a href="/about.html">About</a>
        </nav>
      </header>

      <main class="page">
        <section class="hero hero--page">
          <div class="hero__copy surface">
            <div class="breadcrumbs">
              ${renderBreadcrumbs(page.breadcrumbs)}
            </div>
            <p class="eyebrow">${escapeHtml(page.state)}</p>
            <h1>${escapeHtml(page.heroTitle)}</h1>
            <p class="hero__subtitle">
              ${escapeHtml(page.heroSubtitle)}
            </p>
            <div class="badge-row">
              <span class="badge${getBadgeToneClass(reviewStatus.tone)}">${escapeHtml(reviewStatus.label)}</span>
              <span class="badge">Last reviewed: ${escapeHtml(page.lastReviewed)}</span>
              <span class="badge">Target refresh by ${escapeHtml(formatLongDate(reviewStatus.nextReviewDate))}</span>
              <span class="badge">${page.sourceLinks.length} official ${pluralize(page.sourceLinks.length, "source")}</span>
              <span class="badge">${escapeHtml(page.sourceBadge)}</span>
            </div>
          </div>

          <aside class="summary-panel surface">
            <h2>${escapeHtml(page.summaryTitle || "At a glance")}</h2>
            <div class="metric-grid">
${renderMetrics(page.metrics)}
            </div>${summaryNote}
          </aside>
        </section>${quickAnswerSection}${customerActionSection}${trustSnapshotSection}
${page.bodyHtml}

        <section class="section surface">
          <div class="section__head">
            <p class="eyebrow">Official links</p>
            <h2>Sources used for this page</h2>
          </div>
          <ul class="source-list">
${renderSourceLinks(page.sourceLinks)}
          </ul>
        </section>
      </main>

      <footer class="site-footer">
        <nav class="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/states.html">States</a>
          <a href="/filing-basics.html">Filing basics</a>
          <a href="/filing-help-options.html">Help options</a>
          <a href="/about.html">About</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/contact.html">Contact</a>
          <a href="/terms.html">Terms</a>
        </nav>
        <p>&copy; 2026 FinLogic Hub. Informational only. Official state sources control.</p>
      </footer>
    </div>${scriptTag}
  </body>
</html>
`;
}

for (const page of liveStatePages) {
  const targetFile = path.join(ROOT, page.filePath);
  await fs.mkdir(path.dirname(targetFile), { recursive: true });
  await fs.writeFile(targetFile, renderPage(page));
}

console.log(`Built ${liveStatePages.length} state pages.`);
