const lookupForm = document.querySelector("[data-state-lookup]");

if (lookupForm) {
  lookupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const select = lookupForm.querySelector("select");
    if (select && select.value) {
      window.location.href = select.value;
    }
  });
}

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

const guideSearchInputs = document.querySelectorAll("[data-guide-search-input]");

guideSearchInputs.forEach((input) => {
  const section = input.closest(".section");
  if (!section) return;

  const cards = Array.from(section.querySelectorAll("[data-guide-card]"));
  const emptyState = section.querySelector("[data-guide-empty]");

  function updateResults() {
    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = !query || (card.dataset.search || "").includes(query);
      card.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  }

  input.addEventListener("input", updateResults);
  updateResults();
});
