const STANDARD_STATUSES = [
  {
    value: "standard",
    label: "Normal rule",
    description: "Show the normal due date and main published amount."
  },
  {
    value: "late",
    label: "Already late",
    description: "Show the late-state consequence or the urgent next official step."
  },
  {
    value: "confirm",
    label: "Need to verify",
    description: "Show what to confirm on the official record before relying on the summary."
  }
];

function decisionCase({
  value,
  label,
  deadline,
  amount,
  normalRule,
  lateRule,
  confirmRule,
  nextAction,
  sourceIndexes,
  lateSourceIndexes,
  confirmSourceIndexes
}) {
  return {
    value,
    label,
    deadline,
    amount,
    normalRule,
    lateRule,
    confirmRule,
    nextAction,
    sourceIndexes,
    lateSourceIndexes: lateSourceIndexes ?? sourceIndexes,
    confirmSourceIndexes: confirmSourceIndexes ?? sourceIndexes
  };
}

function decisionTool({ caseLabel, intro, cases }) {
  return {
    caseLabel,
    statusLabel: "What do you need right now?",
    intro,
    statuses: STANDARD_STATUSES,
    cases
  };
}

export const julyExpansionStatePages = [
  {
    filePath: "tools/new-mexico/annual-report-deadline/index.html",
    titleTag: "New Mexico Annual Report and Corporate Report Deadlines | FinLogic Hub",
    metaDescription:
      "New Mexico corporate report and annual report guidance covering biennial business-corporation reports, nonprofit annual reports, official fees, and the LLC no-standard-report answer.",
    canonicalUrl: "https://finlogichub5.com/tools/new-mexico/annual-report-deadline/",
    ogTitle: "New Mexico Annual Report and Corporate Report Deadlines | FinLogic Hub",
    ogDescription:
      "Review New Mexico business-corporation and nonprofit report deadlines, report fees, online filing requirements, and the LLC no-standard-report answer using official sources.",
    state: "New Mexico",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "New Mexico annual report and corporate report", href: null }
    ],
    heroTitle: "New Mexico annual report and corporate report deadlines",
    heroSubtitle:
      "If you searched New Mexico annual report, start with the entity type. New Mexico business corporations use biennial corporate reports, nonprofits use annual reports, and the cited New Mexico LLC materials do not create a standard recurring annual report section.",
    lastReviewed: "July 7, 2026",
    sourceBadge: "Source: New Mexico Secretary of State and New Mexico Compilation Commission",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Business corporation lane",
        text: "Initial corporate report within 30 days, then biennial corporate reports due by the 15th day of the fourth month after the taxable year ends."
      },
      {
        label: "Nonprofit lane",
        text: "Initial report within 30 days, then annual reports due by the 15th day of the fifth month after the taxable year ends."
      },
      {
        label: "Published fees",
        text: "$25 for a business-corporation corporate report or $10 for a nonprofit annual report."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              The New Mexico sources used here separate business-corporation reports from nonprofit
              reports. The LLC answer on this page is an inference from the cited New Mexico LLC and
              SOS materials because they do not publish a parallel standard annual-report section for LLCs.
            </p>`,
    caseCards: [
      {
        label: "Business corporation",
        title: "Use the biennial corporate-report lane",
        text: "Domestic and foreign business corporations file an initial report within 30 days, then a biennial corporate report tied to the fourth month after the taxable year ends."
      },
      {
        label: "Nonprofit corporation",
        title: "Use the annual-report lane",
        text: "New Mexico nonprofits still file an initial report within 30 days, but the recurring report is annual and shifts to the fifth month after the taxable year ends."
      },
      {
        label: "New Mexico LLC",
        title: "Do not assume there is a standard annual report",
        text: "The official New Mexico materials cited here do not publish the same recurring annual-report section for LLCs, so confirm whether you instead need a change filing or another portal action."
      }
    ],
    sourceLinks: [
      {
        href: "https://www.sos.nm.gov/business-services/",
        label: "New Mexico Secretary of State business services page"
      },
      {
        href: "https://www.sos.nm.gov/online-services/",
        label: "New Mexico Secretary of State online services page"
      },
      {
        href: "https://enterprise.sos.nm.gov/forms/business",
        label: "New Mexico online business forms page"
      },
      {
        href: "https://www.sos.nm.gov/business-services/statutes-governing-business-in-nm/",
        label: "New Mexico statutes governing business page"
      },
      {
        href: "https://nmonesource.com/nmos/nmsa/en/4400/1/document.do",
        label: "Current New Mexico Statutes Annotated Chapter 53 PDF"
      },
      {
        href: "https://www.sos.nm.gov/2020/02/24/sample-business-service-update/",
        label: "New Mexico SOS archived business services update on biennial corporate reports"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/ohio/annual-report-deadline/index.html",
    titleTag: "Ohio Annual Report Requirement and Biennial Filing Rules | FinLogic Hub",
    metaDescription:
      "Ohio annual report guidance covering the no-annual-report rule for most businesses, biennial filings for professional associations and LLPs, and nonprofit continued-existence filings.",
    canonicalUrl: "https://finlogichub5.com/tools/ohio/annual-report-deadline/",
    ogTitle: "Ohio Annual Report Requirement and Biennial Filing Rules | FinLogic Hub",
    ogDescription:
      "Review Ohio's no-annual-report rule for most businesses, the official $25 biennial filing fee, and the Ohio nonprofit continued-existence schedule using Ohio Secretary of State sources.",
    state: "Ohio",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Ohio annual report requirement", href: null }
    ],
    heroTitle: "Ohio annual report requirement and biennial filing rules",
    heroSubtitle:
      "If you searched Ohio annual report, the short answer is usually no annual report. Ohio says businesses generally do not file annual reports, while professional associations and LLPs file biennial reports and nonprofits file a continued-existence form every five years if no other filing was submitted.",
    lastReviewed: "July 7, 2026",
    sourceBadge: "Source: Ohio Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Most Ohio LLCs and corporations",
        text: "Ohio businesses are not required to file annual reports."
      },
      {
        label: "Biennial filing fee",
        text: "$25 for professional association and LLP biennial reports."
      },
      {
        label: "Nonprofit continued existence",
        text: "$25 every 5 years if no other filing has been submitted."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Ohio is one of the easiest states to overpay because scam mailers often imply that every
              Ohio business files an annual report. The official Ohio Secretary of State sources used here
              say that is not true.
            </p>`,
    caseCards: [
      {
        label: "Most LLCs and corporations",
        title: "Start with the no-annual-report answer",
        text: "Ohio's public warnings say businesses generally do not file annual reports, so most standard Ohio LLC and corporation searches should stop there first."
      },
      {
        label: "Professional association or LLP",
        title: "Use the $25 biennial-report lane",
        text: "Professional associations file in even-numbered years and LLPs file in odd-numbered years, both at the published $25 filing fee."
      },
      {
        label: "Nonprofit corporation",
        title: "Check the 5-year continued-existence rule",
        text: "Ohio nonprofits use a continued-existence filing every five years if no other filing was made, rather than a standard yearly annual report."
      }
    ],
    sourceLinks: [
      {
        href: "https://www.ohiosos.gov/public-integrity/protect-your-business/important-warnings",
        label: "Ohio Secretary of State business scam warnings"
      },
      {
        href: "https://www.ohiosos.gov/business/keep-your-active-status",
        label: "Ohio maintain active business status page"
      },
      {
        href: "https://www.ohiosos.gov/business/business-filing-forms",
        label: "Ohio business filing forms and fee schedule"
      },
      {
        href: "https://bsportal.ohiosos.gov/obcfiling/FormInstructions.aspx",
        label: "Ohio biennial report and continued-existence instructions"
      },
      {
        href: "https://www.ohiosos.gov/assets/520.pdf",
        label: "Ohio Form 520 biennial report PDF"
      },
      {
        href: "https://www.ohiosos.gov/assets/522.pdf",
        label: "Ohio Form 522 statement of continued existence PDF"
      },
      {
        href: "https://www.ohiosos.gov/assets/business-start-a-llc.pdf",
        label: "Ohio LLC guide PDF"
      },
      {
        href: "https://www.ohiosos.gov/assets/business-start-a-partnership.pdf",
        label: "Ohio partnership guide PDF"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/oklahoma/annual-certificate-deadline/index.html",
    titleTag: "Oklahoma Annual Certificate Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Oklahoma annual certificate guidance covering the LLC anniversary-date filing rule, the $25 fee, the 60-day good-standing cutoff, and the post-2023 franchise-tax change.",
    canonicalUrl: "https://finlogichub5.com/tools/oklahoma/annual-certificate-deadline/",
    ogTitle: "Oklahoma Annual Certificate Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Oklahoma LLC annual certificate timing, the $25 filing fee, the 60-day good-standing rule, and the current corporation franchise-tax update using official Oklahoma sources.",
    state: "Oklahoma",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Oklahoma annual certificate", href: null }
    ],
    heroTitle: "Oklahoma annual certificate fee and deadline",
    heroSubtitle:
      "Use this page if you need Oklahoma's clearest recurring business-filing rule. Domestic and foreign Oklahoma LLCs file an annual certificate on the anniversary date of registration, and Oklahoma's tax agency says the old corporate franchise-tax filing requirement ended starting with tax year 2024.",
    lastReviewed: "July 7, 2026",
    sourceBadge: "Source: Oklahoma Secretary of State and Oklahoma Tax Commission",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "LLC due rule",
        text: "Domestic and foreign Oklahoma LLCs file each year on the anniversary date of registration."
      },
      {
        label: "LLC filing fee",
        text: "$25 annual certificate filing fee."
      },
      {
        label: "Late consequence",
        text: "An LLC that misses the annual certificate for 60 days after the due date ceases to be in good standing."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Oklahoma searches often mix the Secretary of State annual certificate with the old
              corporation franchise-tax filing. The tax agency now says franchise tax returns stopped
              after tax year 2023, so the recurring Oklahoma answer is cleaner than many older pages suggest.
            </p>`,
    caseCards: [
      {
        label: "Domestic or foreign LLC",
        title: "Use the annual-certificate lane",
        text: "The Oklahoma Secretary of State's annual certificate form gives the cleanest current recurring rule: anniversary date, $25 fee, and a 60-day good-standing cutoff."
      },
      {
        label: "Corporation",
        title: "Do not rely on old franchise-tax pages",
        text: "The Oklahoma Tax Commission says franchise tax filings ended starting with tax year 2024, so confirm whether you are looking at an old rule or a different current tax obligation."
      },
      {
        label: "Already late LLC",
        title: "Check good standing before you file",
        text: "Once the annual certificate is more than 60 days late, the LLC stops being in good standing, so verify the live status before assuming the normal filing path is enough."
      }
    ],
    sourceLinks: [
      {
        href: "https://www.sos.ok.gov/business/forms.aspx",
        label: "Oklahoma Secretary of State business forms page"
      },
      {
        href: "https://www.sos.ok.gov/forms/Llcannualcertificate.PDF",
        label: "Oklahoma LLC annual certificate PDF"
      },
      {
        href: "https://oklahoma.gov/business/launch/register-your-business.html",
        label: "Oklahoma register your business guide"
      },
      {
        href: "https://oklahoma.gov/tax/businesses/other-taxes.html",
        label: "Oklahoma Tax Commission other taxes page"
      },
      {
        href: "https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/businesses/general/FRX-200.pdf",
        label: "Oklahoma FRX-200 franchise tax return PDF"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/tennessee/annual-report-deadline/index.html",
    titleTag: "Tennessee Annual Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Tennessee annual report guidance covering the first-day-of-the-fourth-month due rule, the corporation $20 fee lane, the LLC $300 minimum fee lane, and administrative-dissolution risk.",
    canonicalUrl: "https://finlogichub5.com/tools/tennessee/annual-report-deadline/",
    ogTitle: "Tennessee Annual Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Tennessee annual report due dates, corporation and LLC fee lanes, TNCaB filing requirements, and inactive-status risk using Tennessee Secretary of State and legislative sources.",
    state: "Tennessee",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Tennessee annual report", href: null }
    ],
    heroTitle: "Tennessee annual report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Tennessee annual report deadline or fee. Tennessee's key split is simple: most business entities use the first day of the fourth month after fiscal year end, but the fee changes sharply between corporation and LLC filings.",
    lastReviewed: "July 7, 2026",
    sourceBadge: "Source: Tennessee Secretary of State and Tennessee General Assembly",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Main due rule",
        text: "Annual reports are generally due on or before the first day of the fourth month after the fiscal year ends."
      },
      {
        label: "Corporation lane",
        text: "$20 annual report fee, with an additional $20 if the filing changes the registered agent or registered office."
      },
      {
        label: "LLC lane",
        text: "$300 minimum annual report fee, plus $50 for each member over 6 up to a $3,000 maximum."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Tennessee's recurring filing rule is mostly about fiscal-year timing and entity-type fees.
              The official Tennessee sources used here do not publish a flat late fee for ordinary business
              annual reports, but they do tie missed reports to inactive status and administrative dissolution or revocation.
            </p>`,
    caseCards: [
      {
        label: "Corporation or nonprofit corporation",
        title: "Use the $20 corporation lane first",
        text: "Tennessee's FAQ keeps the corporation annual report fee at $20, with an additional $20 only when the filing changes the registered agent or registered office."
      },
      {
        label: "LLC",
        title: "Use the member-count fee lane",
        text: "Tennessee LLC annual report fees begin at $300 and increase by $50 for each member over six, up to the published $3,000 cap."
      },
      {
        label: "Already inactive or late",
        title: "Confirm status before you resubmit",
        text: "The Tennessee Secretary of State ties missed annual reports to administrative dissolution or revocation, so late records should be checked in TNCaB before you rely on the standard answer."
      }
    ],
    sourceLinks: [
      {
        href: "https://sos.tn.gov/businesses",
        label: "Tennessee Secretary of State businesses page"
      },
      {
        href: "https://sos.tn.gov/businesses/services/business-forms-fees",
        label: "Tennessee business forms and fees page"
      },
      {
        href: "https://sos.tn.gov/businesses/faqs",
        label: "Tennessee business FAQs"
      },
      {
        href: "https://tncab.tnsos.gov/portal",
        label: "Tennessee TNCaB filing portal"
      },
      {
        href: "https://sos-prod.tnsosgovfiles.com/s3fs-public/document/ss-4418_1.pdf?VersionId=8GR2EXCl7I79uoVn7gbENREfPCv3izGX",
        label: "Tennessee nonprofit charter instructions PDF"
      },
      {
        href: "https://www.capitol.tn.gov/Bills/111/Bill/SB1754.pdf",
        label: "Tennessee General Assembly bill PDF covering annual report timing updates"
      },
      {
        href: "https://www.capitol.tn.gov/Bills/114/Bill/SB0037.pdf",
        label: "Tennessee General Assembly bill PDF covering LLC annual report fee updates"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/district-of-columbia/biennial-report-deadline/index.html",
    titleTag: "District of Columbia Biennial Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "District of Columbia biennial report guidance covering the April 1 due date, the first-report rule, back-report risk for foreign entities, and the current $300 fee plus $100 late fee.",
    canonicalUrl: "https://finlogichub5.com/tools/district-of-columbia/biennial-report-deadline/",
    ogTitle: "District of Columbia Biennial Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review District of Columbia biennial report deadlines, first-report timing, back-report risk, and the published fee and late fee using DLCP sources.",
    state: "District of Columbia",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "District of Columbia biennial report", href: null }
    ],
    heroTitle: "District of Columbia biennial report fee and deadline",
    heroSubtitle:
      "Use this page if you need the District of Columbia biennial report deadline. DLCP says domestic and foreign filing entities file the first report by April 1 of the next year after registration, then file again every two years after that.",
    lastReviewed: "July 7, 2026",
    sourceBadge: "Source: District of Columbia Department of Licensing and Consumer Protection",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "First report rule",
        text: "First reports are due April 1 of the very next year from the year of registration."
      },
      {
        label: "Recurring rule",
        text: "Subsequent reports are due April 1 every two years thereafter."
      },
      {
        label: "Published amount",
        text: "$300 biennial report fee plus a $100 late fee."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              District filings are easy to misread because the first report arrives faster than many
              people expect. The District also warns that foreign entities may owe back reports if they
              started doing business before registering.
            </p>`,
    caseCards: [
      {
        label: "Domestic filing entity",
        title: "Use the next-April-1 first-report rule",
        text: "Domestic LLCs, corporations, nonprofits, LLPs, LPs, and other filing entities start with the next April 1 after registration."
      },
      {
        label: "Foreign filing entity",
        title: "Check for back-report exposure",
        text: "DLCP says foreign entities might be liable for back reports if they commenced business before registration, so confirm the record history before paying."
      },
      {
        label: "Already late",
        title: "Expect the $100 late fee",
        text: "The District publishes a $100 late fee on top of the $300 biennial report fee, so late filings should be priced from the late lane first."
      }
    ],
    sourceLinks: [
      {
        href: "https://dlcp.dc.gov/page/corporations-division-business-registration-faqs",
        label: "District of Columbia corporations division business registration FAQs"
      },
      {
        href: "https://dlcp.dc.gov/node/1616716",
        label: "District of Columbia domestic LLC page"
      },
      {
        href: "https://dlcp.dc.gov/node/1619121",
        label: "District of Columbia domestic for-profit corporation page"
      },
      {
        href: "https://dlcp.dc.gov/node/1619136",
        label: "District of Columbia domestic nonprofit corporation page"
      },
      {
        href: "https://dlcp.dc.gov/node/1621921",
        label: "District of Columbia LLC fee schedule"
      },
      {
        href: "https://dlcp.dc.gov/node/1619996",
        label: "District of Columbia foreign entity fee schedule"
      },
      {
        href: "https://dlcp.dc.gov/node/1614386",
        label: "District of Columbia corporations division overview"
      }
    ],
    scriptSrc: null
  }
];

export const julyExpansionStateDirectory = [
  {
    state: "New Mexico",
    route: "/tools/new-mexico/annual-report-deadline/",
    guideLabel: "New Mexico annual report and corporate report deadlines",
    chipLabel: "NM corp reports",
    guideType: "Annual report and corporate report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "Business-corporation biennial reports, nonprofit annual reports, official fees, and the no-standard-LLC-report answer.",
    directoryCardDescription:
      "New Mexico business-corporation report timing, nonprofit annual-report timing, official fees, and the LLC no-standard-report answer.",
    homeComparison: {
      focus: "New Mexico business corporation, nonprofit corporation, or LLC",
      deadline: "Business corporations use the 15th day of the fourth month; nonprofits use the 15th day of the fifth month",
      fee: "$25 business-corporation report fee or $10 nonprofit annual report fee",
      lateRule: "Business-corporation late reports add a $200 civil penalty and 60-day cancellation notice"
    },
    directoryComparison: {
      obligation: "Biennial corporate report or annual report",
      entityFocus: "New Mexico business corporations, nonprofit corporations, and LLCs checking the recurring report answer",
      deadline:
        "Business corporations file initial reports within 30 days and biennial reports by the 15th day of the fourth month after tax year end; nonprofits use the 15th day of the fifth month",
      amount:
        "$25 for a business-corporation report or $10 for a nonprofit annual report, with no standard LLC annual-report section in the cited New Mexico materials"
    }
  },
  {
    state: "Ohio",
    route: "/tools/ohio/annual-report-deadline/",
    guideLabel: "Ohio annual report requirement and biennial filing rules",
    chipLabel: "Ohio no annual report",
    guideType: "Annual report intent guide",
    coverageBucket: "recurring-fees-and-statements",
    featuredInHomeNav: false,
    homeCardDescription:
      "Ohio's no-annual-report rule for most businesses, plus the $25 PA and LLP biennial lanes and nonprofit continued-existence filing.",
    directoryCardDescription:
      "Ohio no-annual-report guidance for most businesses, official biennial filing windows, and the nonprofit continued-existence schedule.",
    homeComparison: {
      focus: "Ohio LLC, corporation, professional association, LLP, or nonprofit",
      deadline: "Most businesses: no annual report; PAs use July in even years and LLPs use April 1 to July 1 in odd years",
      fee: "$25 only if the entity is in the PA, LLP, or nonprofit continued-existence lane",
      lateRule: "PA or LLP failures lead to cancellation; nonprofits may need reinstatement within two years"
    },
    directoryComparison: {
      obligation: "No annual report for most entities, or a biennial / continued-existence filing for special cases",
      entityFocus: "Ohio businesses checking whether they actually owe a recurring Ohio Secretary of State filing",
      deadline:
        "No annual report for most businesses, July 1 to July 30 or 31 in even years for professional associations, April 1 to July 1 in odd years for LLPs, or every five years for nonprofits if no other filing was submitted",
      amount:
        "$25 for the Ohio biennial report or nonprofit continued-existence filing when one is required"
    }
  },
  {
    state: "Oklahoma",
    route: "/tools/oklahoma/annual-certificate-deadline/",
    guideLabel: "Oklahoma annual certificate fee and deadline",
    chipLabel: "Oklahoma annual cert",
    guideType: "Annual certificate guide",
    coverageBucket: "recurring-fees-and-statements",
    featuredInHomeNav: false,
    homeCardDescription:
      "LLC anniversary-date filings, the current $25 fee, 60-day good-standing cutoff, and the updated franchise-tax context.",
    directoryCardDescription:
      "Oklahoma LLC annual certificate timing, 60-day good-standing risk, and the tax agency's franchise-tax update for corporations.",
    homeComparison: {
      focus: "Oklahoma LLC or corporation checking recurring state filings",
      deadline: "LLCs file on the anniversary date of registration",
      fee: "$25 LLC annual certificate",
      lateRule: "LLCs cease to be in good standing 60 days after the due date"
    },
    directoryComparison: {
      obligation: "Annual certificate",
      entityFocus: "Domestic and foreign Oklahoma LLCs, plus corporations checking the post-2023 franchise-tax answer",
      deadline:
        "Each year on the anniversary date of LLC registration, with the old corporate franchise-tax filing requirement ending after tax year 2023",
      amount:
        "$25 for an Oklahoma LLC annual certificate, with corporation recurring-tax answers now depending on the updated Oklahoma Tax Commission rules"
    }
  },
  {
    state: "Tennessee",
    route: "/tools/tennessee/annual-report-deadline/",
    guideLabel: "Tennessee annual report fee and deadline",
    chipLabel: "Tennessee annual report",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "First-day-of-the-fourth-month due dates, corporation versus LLC fee splits, and inactive-status risk.",
    directoryCardDescription:
      "Tennessee annual report timing, LLC member-count fees, corporation fee rules, and administrative-dissolution risk.",
    homeComparison: {
      focus: "Tennessee corporation, nonprofit corporation, or LLC",
      deadline: "First day of the fourth month after the fiscal year ends",
      fee: "$20 corporation fee or $300 minimum LLC fee",
      lateRule: "No flat SOS late fee is highlighted on the main FAQ, but missed reports can lead to administrative dissolution or revocation"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Tennessee corporations, nonprofit corporations, and LLCs",
      deadline:
        "On or before the first day of the fourth month following the end of the fiscal year",
      amount:
        "$20 for many corporation annual reports, or $300 minimum for LLC annual reports with member-based increases up to $3,000"
    }
  },
  {
    state: "District of Columbia",
    route: "/tools/district-of-columbia/biennial-report-deadline/",
    guideLabel: "District of Columbia biennial report fee and deadline",
    chipLabel: "DC biennial report",
    guideType: "Biennial report guide",
    coverageBucket: "recurring-fees-and-statements",
    featuredInHomeNav: false,
    homeCardDescription:
      "April 1 first-report timing, every-two-years renewals, back-report risk for foreign entities, and the published fee lane.",
    directoryCardDescription:
      "District of Columbia biennial report timing, back-report exposure, and the current $300 fee plus $100 late fee.",
    homeComparison: {
      focus: "District of Columbia LLC, corporation, nonprofit, LP, or LLP",
      deadline: "First April 1 after registration, then April 1 every two years",
      fee: "$300 biennial report fee",
      lateRule: "$100 late fee, with foreign entities potentially owing back reports"
    },
    directoryComparison: {
      obligation: "Biennial report",
      entityFocus: "District of Columbia domestic and foreign filing entities using DLCP CorpOnline",
      deadline:
        "April 1 of the next year after registration, then April 1 every two years thereafter",
      amount:
        "$300 biennial report fee plus a $100 late fee for many domestic and foreign filing entities"
    }
  }
];

export const julyExpansionStructuredStateContentByFilePath = {
  "tools/new-mexico/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Entity split",
      title: "New Mexico uses different recurring report lanes for corporations and nonprofits",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Domestic or foreign business corporation",
          "Initial report within 30 days, then biennial corporate reports on or before the 15th day of the fourth month after the taxable year ends",
          "$25 corporate report fee",
          "Late business-corporation reports add a $200 civil penalty and a 60-day cancellation notice."
        ],
        [
          "Domestic or foreign nonprofit corporation",
          "Initial report within 30 days, then annual reports on or before the 15th day of the fifth month after the taxable year ends",
          "$10 annual report fee",
          "Nonprofits also file a supplemental report within 30 days after certain key changes."
        ],
        [
          "New Mexico LLC",
          "No standard recurring annual-report section is published in the cited New Mexico LLC materials",
          "No standard annual-report fee cited here",
          "Use the online business forms and entity record to confirm whether you instead need a change filing or another transaction."
        ]
      ]
    }
  ],
  "tools/ohio/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Who actually files",
      title: "Ohio's recurring filing answer is usually no annual report",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Most Ohio LLCs and corporations",
          "No annual report required by the Ohio Secretary of State",
          "Not applicable",
          "Ohio specifically warns businesses not to pay scam annual-report solicitations."
        ],
        [
          "Professional association",
          "Each even-numbered year within 30 days after June 30",
          "$25 biennial report fee",
          "Failure to file results in cancellation of the professional association."
        ],
        [
          "Limited liability partnership",
          "Between April 1 and July 1 of each odd-numbered year",
          "$25 biennial report fee",
          "Failure to file results in cancellation of the LLP."
        ],
        [
          "Nonprofit corporation",
          "Every 5 years if no other filing has been submitted",
          "$25 statement of continued existence fee",
          "If the filing is missed, reinstatement timing becomes important because Ohio caps some reinstatements at two years."
        ]
      ]
    }
  ],
  "tools/oklahoma/annual-certificate-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Current recurring rule",
      title: "Oklahoma's clearest current recurring filing is the LLC annual certificate",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Domestic or foreign LLC",
          "Each year on the anniversary date of registration",
          "$25 annual certificate fee",
          "An LLC that misses the filing for 60 days after the due date ceases to be in good standing."
        ],
        [
          "Limited partnership",
          "Oklahoma's small-business guide says LPs also pay an annual SOS fee to remain active and in good standing",
          "$55 annual fee in the Oklahoma business guide",
          "Use the SOS forms page and entity record to confirm the exact filing path for the current LP record."
        ],
        [
          "Corporation checking the old franchise-tax lane",
          "The Oklahoma Tax Commission says franchise tax returns ended starting with tax year 2024",
          "Use current OTC guidance rather than an old annual franchise-tax summary",
          "Older pages and forms can still show the legacy rule, so confirm whether you are looking at a pre-2024 obligation."
        ]
      ]
    }
  ],
  "tools/tennessee/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Entity split",
      title: "Tennessee keeps one due-date formula but multiple fee lanes",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Corporation or nonprofit corporation",
          "On or before the first day of the fourth month after the fiscal year ends",
          "$20 annual report fee, plus an additional $20 if the filing changes the registered agent or registered office",
          "The Tennessee FAQ flags missing officers, missing directors, and wrong fees as common rejection reasons."
        ],
        [
          "LLC",
          "On or before the first day of the fourth month after the fiscal year ends",
          "$300 minimum annual report fee, plus $50 for each member over 6 up to $3,000",
          "The fee depends on member count, so confirm the member total before you pay."
        ],
        [
          "Already late or inactive record",
          "Use the same due-date formula, but confirm the live record first",
          "Reinstatement and tax-clearance requirements can apply once the entity becomes inactive",
          "Tennessee ties missed annual reports to administrative dissolution or revocation rather than to a simple flat late fee."
        ]
      ]
    }
  ],
  "tools/district-of-columbia/biennial-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Report timing",
      title: "District biennial reports come earlier than many first-time filers expect",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Domestic filing entity",
          "First report due April 1 of the very next year after registration, then every April 1 every two years thereafter",
          "$300 biennial report fee",
          "The first report arrives before a full two-year cycle has elapsed."
        ],
        [
          "Foreign filing entity",
          "Same April 1 biennial schedule after registration",
          "$300 biennial report fee",
          "DLCP says foreign entities might be liable for back reports if they began business before registering."
        ],
        [
          "Already late report",
          "File as soon as possible through CorpOnline",
          "$300 report fee plus a $100 late fee",
          "Late status can also push you into reinstatement or cleanup work depending on the live record."
        ]
      ]
    }
  ]
};

export const julyExpansionGuideEvidenceByRoute = {
  "/tools/new-mexico/annual-report-deadline/": {
    filingLabel: [4, 5],
    whoShouldUse: [1, 3, 4, 5],
    headlineDueDate: [5, 6],
    mainAmountShown: [5],
    ifAlreadyLate: [5]
  },
  "/tools/ohio/annual-report-deadline/": {
    filingLabel: [1, 3, 4, 5, 6],
    whoShouldUse: [1, 2, 4, 7, 8],
    headlineDueDate: [2, 4, 5, 6],
    mainAmountShown: [1, 3, 5, 6],
    ifAlreadyLate: [2, 5, 8]
  },
  "/tools/oklahoma/annual-certificate-deadline/": {
    filingLabel: [1, 2, 3, 4],
    whoShouldUse: [1, 2, 3, 4],
    headlineDueDate: [2, 4],
    mainAmountShown: [2, 3],
    ifAlreadyLate: [2, 4]
  },
  "/tools/tennessee/annual-report-deadline/": {
    filingLabel: [1, 2, 3, 4, 5, 6],
    whoShouldUse: [1, 2, 3, 4],
    headlineDueDate: [5, 6],
    mainAmountShown: [2, 3, 7],
    ifAlreadyLate: [3]
  },
  "/tools/district-of-columbia/biennial-report-deadline/": {
    filingLabel: [1, 2, 3, 4, 7],
    whoShouldUse: [1, 2, 3, 4, 7],
    headlineDueDate: [1, 2, 3, 4],
    mainAmountShown: [5, 6],
    ifAlreadyLate: [1, 5, 6]
  }
};

export const julyExpansionGuideDecisionToolByRoute = {
  "/tools/new-mexico/annual-report-deadline/": decisionTool({
    caseLabel: "Which New Mexico filing lane fits best?",
    intro:
      "New Mexico's answer changes immediately once you separate business corporations, nonprofits, and LLCs.",
    cases: [
      decisionCase({
        value: "business-corporation",
        label: "Business corporation",
        deadline: "Initial report within 30 days, then biennial reports by the 15th day of the fourth month after tax year end",
        amount: "$25 corporate report fee",
        normalRule:
          "Business corporations use the Corporate Reports Act and the fourth-month biennial filing cycle.",
        lateRule:
          "Late business-corporation reports add a $200 civil penalty and can move toward cancellation after the statutory notice period.",
        confirmRule:
          "Confirm that the entity is a business corporation and not a nonprofit before you rely on the fourth-month cycle.",
        nextAction:
          "Use the New Mexico online portal and the Chapter 53 statute source together before filing.",
        sourceIndexes: [4, 5, 6]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "Initial report within 30 days, then annual reports by the 15th day of the fifth month after tax year end",
        amount: "$10 annual report fee",
        normalRule:
          "New Mexico nonprofits use the separate annual-report lane in the Nonprofit Corporation Act.",
        lateRule:
          "If the record is late, confirm whether a supplemental report or extension issue is part of the answer before paying.",
        confirmRule:
          "Confirm that the entity is a nonprofit corporation because the due month and fee both differ from the business-corporation lane.",
        nextAction:
          "Check the nonprofit annual-report statute text and then file through the New Mexico business portal.",
        sourceIndexes: [4, 5]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "No standard recurring annual-report section is cited here",
        amount: "Confirm the needed filing in the online portal",
        normalRule:
          "The official New Mexico sources cited on this page do not publish a parallel standard annual-report section for LLCs.",
        lateRule:
          "If the LLC record already shows a problem, the right answer may be a change filing or another corrective step rather than a routine annual report.",
        confirmRule:
          "Confirm the exact entity type and the live portal options before relying on a third-party claim that New Mexico LLCs file annual reports.",
        nextAction:
          "Use the New Mexico forms page and portal search before paying for any recurring filing.",
        sourceIndexes: [1, 2, 3, 4, 5]
      })
    ]
  }),
  "/tools/ohio/annual-report-deadline/": decisionTool({
    caseLabel: "Which Ohio recurring-filing answer fits best?",
    intro:
      "Ohio's biggest trap is assuming that every business files an annual report when the official answer is narrower.",
    cases: [
      decisionCase({
        value: "most-businesses",
        label: "Most LLCs and corporations",
        deadline: "No Ohio Secretary of State annual report",
        amount: "No annual-report filing fee",
        normalRule:
          "Ohio's own scam-warning page says Ohio businesses are not required to file annual reports.",
        lateRule:
          "If a notice demands an annual-report payment for an ordinary Ohio business, treat it as suspicious and verify it against the official Ohio sources.",
        confirmRule:
          "Confirm that the entity is not actually a professional association, LLP, or nonprofit before relying on the no-annual-report answer.",
        nextAction:
          "Use the Ohio warning page and business record tools before paying any unsolicited filing demand.",
        sourceIndexes: [1, 7]
      }),
      decisionCase({
        value: "pa-or-llp",
        label: "Professional association or LLP",
        deadline: "Professional associations file in even years after June 30; LLPs file between April 1 and July 1 in odd years",
        amount: "$25 biennial report fee",
        normalRule:
          "Ohio uses a special biennial filing lane for professional associations and LLPs rather than an annual report for all businesses.",
        lateRule:
          "Failure to file results in cancellation, so late PA and LLP records should be treated as active-status problems first.",
        confirmRule:
          "Confirm whether the record is a professional association or LLP because the filing windows and cancellation rules differ from ordinary Ohio entities.",
        nextAction:
          "Use Form 520 or the Ohio filing instructions page before you file.",
        sourceIndexes: [2, 3, 4, 5, 8]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "Every 5 years if no other filing has been submitted",
        amount: "$25 statement of continued existence fee",
        normalRule:
          "Ohio nonprofits use a continued-existence filing rather than a standard annual report.",
        lateRule:
          "If the nonprofit missed the filing and was canceled, reinstatement timing matters because Ohio caps some reinstatements at two years.",
        confirmRule:
          "Confirm whether another filing was already submitted during the five-year period before you assume the continued-existence form is currently due.",
        nextAction:
          "Review Form 522 and the Ohio filing schedule before you pay or file.",
        sourceIndexes: [2, 3, 4, 6]
      })
    ]
  }),
  "/tools/oklahoma/annual-certificate-deadline/": decisionTool({
    caseLabel: "Which Oklahoma recurring-filing lane fits best?",
    intro:
      "Oklahoma is cleaner now than many old guides suggest because the LLC annual certificate stayed in place while the franchise-tax return requirement changed.",
    cases: [
      decisionCase({
        value: "llc",
        label: "Domestic or foreign LLC",
        deadline: "Each year on the anniversary date of registration",
        amount: "$25 annual certificate fee",
        normalRule:
          "The Oklahoma LLC annual certificate form says every domestic and foreign LLC files each year on the anniversary date of registration.",
        lateRule:
          "If the LLC is more than 60 days past the due date, it ceases to be in good standing and should be checked in the official record before filing.",
        confirmRule:
          "Confirm the Oklahoma registration anniversary date before you rely on the deadline.",
        nextAction:
          "Use the SOS annual certificate form or online filing path with the live entity record open.",
        sourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "corporation",
        label: "Corporation checking franchise tax",
        deadline: "Use current Oklahoma Tax Commission guidance rather than a pre-2024 annual franchise-tax assumption",
        amount: "Confirm whether any current OTC obligation still applies to the specific record",
        normalRule:
          "The Oklahoma Tax Commission says the old franchise-tax filing requirement ended starting with tax year 2024.",
        lateRule:
          "If you are cleaning up an older corporate tax year, confirm whether the question is really about a pre-2024 filing or a suspended record.",
        confirmRule:
          "Confirm the tax year before you rely on any Oklahoma franchise-tax deadline because old guidance can still appear in searches.",
        nextAction:
          "Read the current Oklahoma Tax Commission other-taxes page before filing or paying.",
        sourceIndexes: [3, 4, 5]
      })
    ]
  }),
  "/tools/tennessee/annual-report-deadline/": decisionTool({
    caseLabel: "Which Tennessee annual report lane fits best?",
    intro:
      "Tennessee's due-date formula is similar across entities, but the amount changes quickly once you separate corporations from LLCs.",
    cases: [
      decisionCase({
        value: "corporation",
        label: "Corporation or nonprofit corporation",
        deadline: "On or before the first day of the fourth month after fiscal year end",
        amount: "$20 annual report fee, with an additional $20 if registered-agent or office information changes in the filing",
        normalRule:
          "Tennessee's annual report timing runs off the fiscal year and the most common corporation amount published on the SOS FAQ is $20.",
        lateRule:
          "Tennessee ties missed annual reports to inactive status and administrative dissolution or revocation.",
        confirmRule:
          "Confirm whether the filing also changes the registered agent or registered office because that adds an additional $20 in the FAQ guidance.",
        nextAction:
          "Use TNCaB and Tennessee's FAQ guidance together before you submit the report.",
        sourceIndexes: [2, 3, 4, 5, 6]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "On or before the first day of the fourth month after fiscal year end",
        amount: "$300 minimum fee, plus $50 for each member over 6 up to $3,000",
        normalRule:
          "Tennessee LLCs use the same broad due-date formula but a very different member-count fee lane.",
        lateRule:
          "If the LLC record is already inactive, confirm the current status before paying because reinstatement and tax-clearance steps may apply.",
        confirmRule:
          "Confirm the member count that drives the LLC fee before you pay.",
        nextAction:
          "Check the Tennessee FAQ and then file in TNCaB.",
        sourceIndexes: [3, 4, 6, 7]
      })
    ]
  }),
  "/tools/district-of-columbia/biennial-report-deadline/": decisionTool({
    caseLabel: "Which District of Columbia biennial-report lane fits best?",
    intro:
      "The District keeps one broad biennial-report system, but the first-report timing and foreign back-report exposure change the practical answer fast.",
    cases: [
      decisionCase({
        value: "domestic",
        label: "Domestic filing entity",
        deadline: "First April 1 after registration, then April 1 every two years",
        amount: "$300 biennial report fee",
        normalRule:
          "DLCP says domestic filing entities use the next-April-1 first-report rule and then move to the every-two-years schedule.",
        lateRule:
          "A late filing adds the published $100 late fee on top of the $300 biennial report fee.",
        confirmRule:
          "Confirm the original registration year before you assume the report is two full years away.",
        nextAction:
          "Open CorpOnline and check the entity's filing history before paying.",
        sourceIndexes: [1, 2, 3, 4, 5, 7]
      }),
      decisionCase({
        value: "foreign",
        label: "Foreign filing entity",
        deadline: "Same April 1 biennial cycle after registration",
        amount: "$300 biennial report fee, plus any back reports or late fees that apply",
        normalRule:
          "Foreign filing entities use the same published biennial-report fee lane as domestic entities.",
        lateRule:
          "DLCP says foreign entities may owe back reports if they began business before registration, so late cleanup can involve more than one filing cycle.",
        confirmRule:
          "Confirm whether the entity began District business before the foreign registration date.",
        nextAction:
          "Use the business registration FAQ and CorpOnline record history together before filing.",
        sourceIndexes: [1, 2, 6, 7]
      })
    ]
  })
};
