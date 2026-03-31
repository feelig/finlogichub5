const lookupForms = document.querySelectorAll("[data-state-lookup]");

lookupForms.forEach((lookupForm) => {
  lookupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const select = lookupForm.querySelector("select");
    if (select && select.value) {
      window.location.href = select.value;
    }
  });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const guideCompareRoots = document.querySelectorAll("[data-guide-compare-root]");

guideCompareRoots.forEach((root) => {
  const compareForm = root.querySelector("[data-compare-form]");
  const modeButtons = Array.from(root.querySelectorAll("[data-compare-mode-button]"));
  const compareSelects = Array.from(root.querySelectorAll("[data-compare-select]"));
  const thirdField = root.querySelector("[data-compare-third-field]");
  const compareStatus = root.querySelector("[data-compare-status]");
  const compareTableWrap = root.querySelector("[data-compare-table-wrap]");
  const compareTable = root.querySelector("[data-compare-table]");
  const compareReset = root.querySelector("[data-compare-reset]");
  const compareResultsSection = compareStatus?.closest(".section");
  let compareMode = "2";

  if (
    !compareForm ||
    compareSelects.length < 2 ||
    !compareStatus ||
    !compareTableWrap ||
    !compareTable
  ) {
    return;
  }

  function getRequiredCount() {
    return compareMode === "3" ? 3 : 2;
  }

  function getSelectedEntry(select) {
    const option = select.options[select.selectedIndex];

    if (!option || !option.value) {
      return null;
    }

    const quickFacts = [
      [option.dataset.metricOneLabel, option.dataset.metricOneText],
      [option.dataset.metricTwoLabel, option.dataset.metricTwoText],
      [option.dataset.metricThreeLabel, option.dataset.metricThreeText],
    ]
      .filter((item) => item[0] && item[1])
      .map(([label, text]) => `${label}: ${text}`);

    return {
      state: option.dataset.state || option.textContent.trim(),
      guideLabel: option.dataset.guideLabel || "",
      guideType: option.dataset.guideType || "",
      useCase: option.dataset.useCase || "",
      obligation: option.dataset.obligation || "",
      entityFocus: option.dataset.entityFocus || "",
      summary: option.dataset.summary || "",
      deadline: option.dataset.deadline || "",
      amount: option.dataset.amount || "",
      lateRule: option.dataset.lateRule || "",
      reviewDate: option.dataset.reviewDate || "",
      sourceCount: option.dataset.sourceCount || "",
      sourceAuthority: option.dataset.sourceAuthority || "",
      quickFacts,
      route: option.value
    };
  }

  function hideComparisonTable() {
    compareTableWrap.hidden = true;
    compareTable.innerHTML = "";
  }

  function focusElement(element) {
    if (!element) {
      return;
    }

    window.requestAnimationFrame(() => {
      element.focus();
    });
  }

  function getActiveSelects() {
    return compareSelects.slice(0, getRequiredCount());
  }

  function getSelectionState() {
    const activeSelects = getActiveSelects();
    const selectedEntriesWithHoles = activeSelects.map((select) => getSelectedEntry(select));
    const selectedEntries = selectedEntriesWithHoles.filter(Boolean);
    const uniqueStates = new Set(selectedEntries.map((entry) => entry.state));
    const missingSelect = activeSelects.find((select, index) => !selectedEntriesWithHoles[index]);
    const seenStates = new Set();
    let duplicateSelect = null;

    selectedEntriesWithHoles.forEach((entry, index) => {
      if (!entry) {
        return;
      }

      if (seenStates.has(entry.state) && !duplicateSelect) {
        duplicateSelect = activeSelects[index];
        return;
      }

      seenStates.add(entry.state);
    });

    return {
      requiredCount: getRequiredCount(),
      selectedEntries,
      hasDuplicate: uniqueStates.size !== selectedEntries.length,
      missingSelect,
      duplicateSelect,
    };
  }

  function formatChoiceList(entries) {
    const states = entries.map((entry) => entry.state);

    if (states.length <= 1) {
      return states[0] || "";
    }

    if (states.length === 2) {
      return `${states[0]} and ${states[1]}`;
    }

    return `${states.slice(0, -1).join(", ")}, and ${states[states.length - 1]}`;
  }

  function setCompareStatus(selectionState = getSelectionState()) {
    const { requiredCount, selectedEntries, hasDuplicate } = selectionState;

    if (selectedEntries.length < requiredCount) {
      if (hasDuplicate) {
        compareStatus.textContent = "Choose different states and click Compare states.";
        return;
      }

      if (selectedEntries.length === 0) {
        compareStatus.textContent = `Choose ${requiredCount} states and click Compare states.`;
        return;
      }

      const remainingCount = requiredCount - selectedEntries.length;
      compareStatus.textContent = `Selected ${formatChoiceList(selectedEntries)}. Choose ${remainingCount} more state${remainingCount === 1 ? "" : "s"} and click Compare states.`;
      return;
    }

    if (hasDuplicate) {
      compareStatus.textContent = "Choose different states to compare.";
      return;
    }

    compareStatus.textContent = `Ready to compare ${selectedEntries
      .map((entry) => entry.state)
      .join(" vs ")}. Click Compare states to generate the table.`;
  }

  function renderStack(items) {
    const filteredItems = items.filter(Boolean);

    if (filteredItems.length === 0) {
      return '<span class="compare-cell-empty">See guide</span>';
    }

    return `<div class="compare-cell-stack">${filteredItems
      .map((item) => `<span class="compare-cell-item">${escapeHtml(item)}</span>`)
      .join("")}</div>`;
  }

  function renderComparisonTable(entries) {
    const rows = [
      { label: "Guide", key: "guideLabel" },
      { label: "Guide type", key: "guideType" },
      { label: "Best for", key: "useCase" },
      { label: "Filing label", key: "obligation" },
      { label: "Entity types covered", key: "entityFocus" },
      { label: "Guide summary", key: "summary" },
      { label: "Main timing rule", key: "deadline" },
      { label: "Published amount or threshold", key: "amount" },
      { label: "Late rule", key: "lateRule" },
      {
        label: "Quick facts",
        render: (entry) => renderStack(entry.quickFacts)
      },
      { label: "Last reviewed", key: "reviewDate" },
      {
        label: "Official sources checked",
        render: (entry) =>
          `${escapeHtml(entry.sourceCount)} official source${entry.sourceCount === "1" ? "" : "s"}`
      },
      { label: "Lead official source", key: "sourceAuthority" },
      { label: "Open guide", key: "route", isLink: true }
    ];

    compareTable.innerHTML = `              <thead>
                <tr>
                  <th>Compare item</th>
${entries
  .map(
    (entry) => `                  <th>${escapeHtml(entry.state)}<span class="compare-col-note">${escapeHtml(
      entry.guideLabel
    )}</span></th>`
  )
  .join("\n")}
                </tr>
              </thead>
              <tbody>
${rows
  .map(
    (row) => `                <tr>
                  <th>${escapeHtml(row.label)}</th>
${entries
  .map((entry) => {
    if (row.isLink) {
      return `                  <td><a class="inline-link" href="${escapeHtml(entry.route)}">Open guide</a></td>`;
    }

    if (row.render) {
      return `                  <td>${row.render(entry)}</td>`;
    }

    return `                  <td>${escapeHtml(entry[row.key] || "")}</td>`;
  })
  .join("\n")}
                </tr>`
  )
  .join("\n")}
              </tbody>`;
  }

  function updateComparisonUrl(entries, { replace = false } = {}) {
    const url = new URL(window.location.href);
    const routeList = entries.map((entry) => entry.route).join(",");

    url.searchParams.set("compareMode", compareMode);
    url.searchParams.set("compare", routeList);
    const historyMethod = replace ? "replaceState" : "pushState";
    window.history[historyMethod]({}, "", url);
  }

  function clearComparisonUrl({ replace = false } = {}) {
    const url = new URL(window.location.href);
    url.searchParams.delete("compareMode");
    url.searchParams.delete("compare");
    const historyMethod = replace ? "replaceState" : "pushState";
    window.history[historyMethod]({}, "", url);
  }

  function updateCompareModeButtons() {
    modeButtons.forEach((button) => {
      const isActive = button.dataset.mode === compareMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function syncCompareModeUi() {
    if (thirdField) {
      thirdField.hidden = compareMode !== "3";
    }

    if (compareMode !== "3" && compareSelects[2]) {
      compareSelects[2].value = "";
    }

    updateCompareModeButtons();
  }

  function renderComparison(entries, { updateUrl = true, replaceUrl = false } = {}) {
    compareStatus.textContent = `Comparing ${entries
      .map((entry) => entry.state)
      .join(" vs ")}.`;
    renderComparisonTable(entries);
    compareTableWrap.hidden = false;

    if (updateUrl) {
      updateComparisonUrl(entries, { replace: replaceUrl });
    }
  }

  function scrollToCompareResults() {
    compareResultsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function setPendingStatus() {
    setCompareStatus(getSelectionState());
  }

  function submitComparison() {
    const selectionState = getSelectionState();
    const { requiredCount, selectedEntries, hasDuplicate, missingSelect, duplicateSelect } =
      selectionState;

    if (selectedEntries.length < requiredCount) {
      setCompareStatus(selectionState);
      hideComparisonTable();
      focusElement(missingSelect);
      clearComparisonUrl({ replace: true });
      return false;
    }

    if (hasDuplicate) {
      setCompareStatus(selectionState);
      hideComparisonTable();
      focusElement(duplicateSelect);
      clearComparisonUrl({ replace: true });
      return false;
    }

    renderComparison(selectedEntries);
    scrollToCompareResults();
    return true;
  }

  function hydrateFromUrl() {
    const url = new URL(window.location.href);
    const modeFromUrl = url.searchParams.get("compareMode");
    const compareFromUrl = url.searchParams.get("compare");

    compareSelects.forEach((select) => {
      select.value = "";
    });

    if (modeFromUrl === "3") {
      compareMode = "3";
    } else {
      compareMode = "2";
    }

    syncCompareModeUi();

    if (!compareFromUrl) {
      hideComparisonTable();
      setPendingStatus();
      return;
    }

    const routes = compareFromUrl
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    getActiveSelects().forEach((select, index) => {
      const route = routes[index];
      if (route && Array.from(select.options).some((option) => option.value === route)) {
        select.value = route;
      }
    });

    const { requiredCount, selectedEntries, hasDuplicate } = getSelectionState();

    if (hasDuplicate || selectedEntries.length < requiredCount) {
      hideComparisonTable();
      setPendingStatus();
      return;
    }

    renderComparison(selectedEntries, { updateUrl: false });
  }

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      compareMode = button.dataset.mode || "2";
      syncCompareModeUi();
      clearComparisonUrl({ replace: true });
      hideComparisonTable();
      setPendingStatus();

      if (compareMode === "3" && compareSelects[2]) {
        focusElement(compareSelects[2]);
      }
    });
  });

  compareSelects.forEach((select) => {
    select.addEventListener("change", () => {
      clearComparisonUrl({ replace: true });
      hideComparisonTable();
      setPendingStatus();
    });
  });

  compareForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitComparison();
  });

  compareReset?.addEventListener("click", () => {
    compareSelects.forEach((select) => {
      select.value = "";
    });
    compareMode = "2";
    syncCompareModeUi();
    clearComparisonUrl({ replace: true });
    hideComparisonTable();
    setPendingStatus();
  });

  window.addEventListener("popstate", hydrateFromUrl);

  hydrateFromUrl();
});

const nevadaConfig = {
  llc: {
    title: "Nevada LLC",
    annualListFee: 150,
    businessLicenseFee: 200,
    annualListLatePenalty: 75,
    businessLicenseLatePenalty: 100,
    note: "Uses the Nevada LLC annual list fee in NRS 86.263 and the general state business license renewal fee in NRS 76.130.",
  },
  corporation: {
    title: "Nevada corporation",
    annualListFee: 150,
    businessLicenseFee: 500,
    annualListLatePenalty: 75,
    businessLicenseLatePenalty: 100,
    note: "Uses the corporation annual list fee in NRS 78.150 and the corporation renewal fee in NRS 76.130.",
  },
};

const nevadaCalculator = document.querySelector("[data-nevada-calculator]");

if (nevadaCalculator) {
  const radios = nevadaCalculator.querySelectorAll("input[name='nevada-entity']");
  const title = nevadaCalculator.querySelector("[data-nevada-title]");
  const annualListFee = nevadaCalculator.querySelector("[data-annual-list-fee]");
  const businessLicenseFee = nevadaCalculator.querySelector("[data-business-license-fee]");
  const recurringTotal = nevadaCalculator.querySelector("[data-recurring-total]");
  const lateTotal = nevadaCalculator.querySelector("[data-late-total]");
  const note = nevadaCalculator.querySelector("[data-nevada-note]");

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function updateNevadaCalculator(entityKey) {
    const config = nevadaConfig[entityKey] || nevadaConfig.llc;
    const recurring = config.annualListFee + config.businessLicenseFee;
    const late = recurring + config.annualListLatePenalty + config.businessLicenseLatePenalty;

    if (title) {
      title.textContent = config.title;
    }
    if (annualListFee) {
      annualListFee.textContent = formatCurrency(config.annualListFee);
    }
    if (businessLicenseFee) {
      businessLicenseFee.textContent = formatCurrency(config.businessLicenseFee);
    }
    if (recurringTotal) {
      recurringTotal.textContent = formatCurrency(recurring);
    }
    if (lateTotal) {
      lateTotal.textContent = formatCurrency(late);
    }
    if (note) {
      note.textContent = config.note;
    }
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        updateNevadaCalculator(radio.value);
      }
    });
  });

  const checkedRadio = Array.from(radios).find((radio) => radio.checked);
  updateNevadaCalculator(checkedRadio ? checkedRadio.value : "llc");
}

const decisionToolRoots = document.querySelectorAll("[data-decision-tool-root]");

decisionToolRoots.forEach((root) => {
  const caseSelect = root.querySelector("[data-decision-case]");
  const statusSelect = root.querySelector("[data-decision-status]");
  const cards = Array.from(root.querySelectorAll("[data-decision-card]"));

  if (!caseSelect || !statusSelect || cards.length === 0) {
    return;
  }

  function showBestMatch() {
    const selectedCase = caseSelect.value;
    const selectedStatus = statusSelect.value;
    let activeCard = cards.find(
      (card) =>
        card.dataset.case === selectedCase && card.dataset.status === selectedStatus
    );

    if (!activeCard) {
      activeCard = cards.find((card) => card.dataset.case === selectedCase) || cards[0];
    }

    cards.forEach((card) => {
      card.hidden = card !== activeCard;
    });
  }

  caseSelect.addEventListener("change", showBestMatch);
  statusSelect.addEventListener("change", showBestMatch);
  showBestMatch();
});

const guideDirectoryRoots = document.querySelectorAll("[data-guide-directory-root]");

guideDirectoryRoots.forEach((root) => {
  const searchInputs = Array.from(root.querySelectorAll("[data-guide-search-input]"));
  const bucketSelects = Array.from(root.querySelectorAll("[data-guide-bucket-select]"));
  const cards = Array.from(root.querySelectorAll("[data-guide-card]"));
  const emptyStates = Array.from(root.querySelectorAll("[data-guide-empty]"));
  const resultCounts = Array.from(root.querySelectorAll("[data-guide-results-count]"));

  if (cards.length === 0) {
    return;
  }

  function syncValue(elements, source) {
    elements.forEach((element) => {
      if (element !== source) {
        element.value = source.value;
      }
    });
  }

  function updateResults() {
    const query = (searchInputs[0]?.value || "").trim().toLowerCase();
    const selectedBucket = bucketSelects[0]?.value || "";
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesQuery = !query || (card.dataset.search || "").includes(query);
      const matchesBucket =
        !selectedBucket || card.dataset.guideBucket === selectedBucket;
      const matches = matchesQuery && matchesBucket;

      card.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    emptyStates.forEach((emptyState) => {
      emptyState.hidden = visibleCount !== 0;
    });

    resultCounts.forEach((resultCount) => {
      if (visibleCount === cards.length) {
        resultCount.textContent = `Showing all ${cards.length} guides.`;
        return;
      }

      resultCount.textContent = `Showing ${visibleCount} of ${cards.length} guides.`;
    });
  }

  searchInputs.forEach((input) => {
    input.addEventListener("input", () => {
      syncValue(searchInputs, input);
      updateResults();
    });
  });

  bucketSelects.forEach((select) => {
    select.addEventListener("change", () => {
      syncValue(bucketSelects, select);
      updateResults();
    });
  });

  updateResults();
});
