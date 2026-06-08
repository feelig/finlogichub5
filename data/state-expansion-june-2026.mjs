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

export const juneExpansionStatePages = [
  {
    filePath: "tools/idaho/annual-report-deadline/index.html",
    titleTag: "Idaho Annual Report Deadline and Paper Filing Surcharge | FinLogic Hub",
    metaDescription:
      "Idaho annual report deadline guidance covering anniversary-month timing, SOSBiz filing steps, the published $20 paper-processing surcharge, and late-status risk.",
    canonicalUrl: "https://finlogichub5.com/tools/idaho/annual-report-deadline/",
    ogTitle: "Idaho Annual Report Deadline and Paper Filing Surcharge | FinLogic Hub",
    ogDescription:
      "Review Idaho annual report timing, the SOSBiz filing path, and the published paper-filing surcharge using Idaho Secretary of State and Idaho Legislature sources.",
    state: "Idaho",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Idaho annual report", href: null }
    ],
    heroTitle: "Idaho annual report deadline and paper filing path",
    heroSubtitle:
      "Use this page if you need the Idaho annual report deadline. Idaho's clearest published recurring rule is the anniversary-month deadline, and the clearest published dollar amount is the $20 manual-processing surcharge for paper filings that could have been completed online.",
    lastReviewed: "June 8, 2026",
    sourceBadge: "Source: Idaho Secretary of State and Idaho Legislature",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Main due rule",
        text: "The annual report is due each year before the end of the month in which formation, qualification, or registration became effective."
      },
      {
        label: "Published fee signal",
        text: "Idaho publishes a $20 manual-processing surcharge for paper filings that could otherwise be completed online."
      },
      {
        label: "Filing path",
        text: "SOSBiz describes the annual report as a simple verification process, and Idaho says paper annual reports can only be completed in its office."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Idaho's public guidance is stronger on the deadline and filing path than on a standalone
              online annual-report charge. The safest practical answer is to start in SOSBiz, use the
              anniversary month from the record, and treat paper filing as the exception because the
              state publishes a manual-processing surcharge for paper submissions.
            </p>`,
    sourceLinks: [
      {
        href: "https://legislature.idaho.gov/statutesrules/idstat/title30/t30ch21/sect30-21-213/",
        label: "Idaho Code section 30-21-213 annual report statute"
      },
      {
        href: "https://sos.idaho.gov/business-forms/",
        label: "Idaho business forms page"
      },
      {
        href: "https://sos.idaho.gov/business-services-resources/business-entities-faq/",
        label: "Idaho business entities FAQ"
      },
      {
        href: "https://sos.idaho.gov/sosbiz-help/",
        label: "Idaho SOSBiz help for annual reports"
      },
      {
        href: "https://sosbiz.idaho.gov/annual-reports/",
        label: "Idaho SOSBiz annual report portal"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/illinois/annual-report-deadline/index.html",
    titleTag: "Illinois Annual Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Illinois annual report fee and deadline guidance covering corporation, LLC, and nonprofit filing rules, anniversary-month timing, franchise-tax complications, and late penalties.",
    canonicalUrl: "https://finlogichub5.com/tools/illinois/annual-report-deadline/",
    ogTitle: "Illinois Annual Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Illinois annual report timing, corporation and LLC fee lanes, nonprofit rules, and late penalties using Illinois Secretary of State sources.",
    state: "Illinois",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Illinois annual report", href: null }
    ],
    heroTitle: "Illinois annual report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Illinois annual report deadline or filing fee. Start with the entity type because Illinois puts corporations, LLCs, and nonprofits on anniversary-month timing but uses different fee and late-penalty rules for each lane.",
    lastReviewed: "June 8, 2026",
    sourceBadge: "Source: Illinois Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Corporation lane",
        text: "$75 annual report filing fee, plus annual franchise tax and any accrued late charges."
      },
      {
        label: "LLC lane",
        text: "$75 filing fee, with a $100 late penalty if the report is not filed within 60 days after the due date."
      },
      {
        label: "Nonprofit lane",
        text: "$10 if filed on time, with a statutory $3 late penalty if filed after the due date."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Illinois looks like one anniversary-month system at first, but the practical answer
              changes fast when you separate corporations, LLCs, and nonprofits. Corporations also
              bring franchise-tax math into the filing, while LLCs and nonprofits use cleaner flat-fee
              annual-report lanes.
            </p>`,
    sourceLinks: [
      {
        href: "https://www.ilsos.gov/departments/business_services/annual_reports/home.html",
        label: "Illinois annual report overview"
      },
      {
        href: "https://www.ilsos.gov/content/dam/publications/pdf_publications/bca1405d.pdf",
        label: "Illinois domestic corporation annual report form"
      },
      {
        href: "https://www.ilsos.gov/publications/pdf_publications/c216.pdf",
        label: "Illinois guide for qualifying foreign corporations"
      },
      {
        href: "https://www.ilsos.gov/publications/pdf_publications/llc501.pdf",
        label: "Illinois LLC annual report form"
      },
      {
        href: "https://www.ilsos.gov/publications/pdf_publications/c334.pdf",
        label: "Illinois domestic LLC guide"
      },
      {
        href: "https://www.ilsos.gov/publications/pdf_publications/nfp11405.pdf",
        label: "Illinois nonprofit annual report form"
      },
      {
        href: "https://www.ilsos.gov/departments/business_services/annual_reports/corp_instructions.html",
        label: "Illinois corporation annual report online instructions"
      },
      {
        href: "https://www.ilsos.gov/departments/business-services/annual-reports/llc-instructions.html",
        label: "Illinois LLC annual report online instructions"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/missouri/annual-registration-report-deadline/index.html",
    titleTag: "Missouri Annual Registration Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Missouri annual registration report guidance covering corporation and nonprofit due dates, current online-versus-paper fee splits, and the published 30-day late-fee rule.",
    canonicalUrl: "https://finlogichub5.com/tools/missouri/annual-registration-report-deadline/",
    ogTitle: "Missouri Annual Registration Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Missouri annual registration report timing, corporation and nonprofit fee lanes, and late-report consequences using Missouri Secretary of State sources.",
    state: "Missouri",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Missouri annual registration report", href: null }
    ],
    heroTitle: "Missouri annual registration report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Missouri annual registration report deadline. Missouri's cleanest split is for-profit corporation versus nonprofit corporation because the fee tables differ and nonprofits use the separate August 31 reporting rule.",
    lastReviewed: "June 8, 2026",
    sourceBadge: "Source: Missouri Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "For-profit corporation lane",
        text: "Common current fee lane is $20 online or $45 by paper, with the report due at the end of the incorporation or qualification month for most modern corporations."
      },
      {
        label: "Nonprofit lane",
        text: "Missouri nonprofits file by August 31 each year, commonly at $10 online or $15 by paper."
      },
      {
        label: "Late rule",
        text: "Late reports are subject to an additional $15 fee for each 30-day period."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Missouri's recurring filing is best modeled as a corporation report, not a generic
              all-entity annual report. The Secretary of State's current fee schedule and filing pages
              are especially useful here because they show the online-versus-paper price split clearly.
            </p>`,
    sourceLinks: [
      {
        href: "https://www.sos.mo.gov/business/corporations/generalInfo",
        label: "Missouri corporations general information"
      },
      {
        href: "https://www.sos.mo.gov/business/corporations/filings.asp",
        label: "Missouri corporation filings and annual reports page"
      },
      {
        href: "https://www.sos.mo.gov/CMSImages/Business/fees.pdf?v=2025",
        label: "Missouri schedule of corporation fees and charges"
      },
      {
        href: "https://www.sos.mo.gov/forms/corp/corp52.pdf",
        label: "Missouri nonprofit corporation instruction sheet"
      },
      {
        href: "https://www.sos.mo.gov/fileonline/reports",
        label: "Missouri annual and biennial registration reports portal"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/south-carolina/annual-report-deadline/index.html",
    titleTag: "South Carolina Annual Report and License Fee Deadline | FinLogic Hub",
    metaDescription:
      "South Carolina annual report and license fee guidance covering C-corporation and S-corporation due dates, CL-1 startup filing, and annual license-fee rules.",
    canonicalUrl: "https://finlogichub5.com/tools/south-carolina/annual-report-deadline/",
    ogTitle: "South Carolina Annual Report and License Fee Deadline | FinLogic Hub",
    ogDescription:
      "Review South Carolina annual report timing, annual license-fee rules, CL-1 startup requirements, and reinstatement steps using South Carolina Department of Revenue sources.",
    state: "South Carolina",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "South Carolina annual report", href: null }
    ],
    heroTitle: "South Carolina annual report and license fee deadline",
    heroSubtitle:
      "Use this page if you need South Carolina's recurring corporation filing rule. South Carolina folds the annual report into the Department of Revenue filing, changes the due date with the tax year, and pairs the report with a corporate license fee rather than a flat Secretary of State annual-report price.",
    lastReviewed: "June 8, 2026",
    sourceBadge: "Source: South Carolina Department of Revenue",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "C corporation lane",
        text: "The annual report is included with SC1120 and is due April 15 for calendar-year filers or the 15th day of the fourth month after tax year end."
      },
      {
        label: "S corporation lane",
        text: "SC1120S is due March 15 for calendar-year filers or the 15th day of the third month after tax year end."
      },
      {
        label: "License fee rule",
        text: "South Carolina publishes a license fee of 0.1% of capital stock and paid-in surplus plus $15, with a $25 minimum."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              South Carolina is not a normal Secretary of State annual-report state. The recurring
              report is tied to the Department of Revenue return, and the more useful first split is
              C corporation versus S corporation, not just domestic versus foreign status.
            </p>`,
    sourceLinks: [
      {
        href: "https://dor.sc.gov/business-income-taxes/corporate/corporate-faqs",
        label: "South Carolina corporate FAQs"
      },
      {
        href: "https://dor.sc.gov/business-income-taxes/corporate/c-corporation",
        label: "South Carolina C corporation filing requirements"
      },
      {
        href: "https://dor.sc.gov/tax-index/corporate/s-corp",
        label: "South Carolina S corporation filing requirements"
      },
      {
        href: "https://dor.sc.gov/forms-site/Forms/CL1_2025.pdf",
        label: "South Carolina CL-1 initial annual report form"
      },
      {
        href: "https://dor.sc.gov/forms-site/Forms/SC1120_2025.pdf",
        label: "South Carolina SC1120 corporate return form"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/vermont/annual-report-deadline/index.html",
    titleTag: "Vermont Annual Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Vermont annual report fee and deadline guidance covering corporation, LLC, and LLP filing rules, fiscal-year deadlines, statutory fees, and reinstatement consequences.",
    canonicalUrl: "https://finlogichub5.com/tools/vermont/annual-report-deadline/",
    ogTitle: "Vermont Annual Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Vermont corporation, LLC, and LLP annual report timing, fee lanes, and late-status consequences using Vermont statute sources.",
    state: "Vermont",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Vermont annual report", href: null }
    ],
    heroTitle: "Vermont annual report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Vermont annual report deadline or fee. Vermont splits the rule by entity type: corporations use a report due within two and one-half months after fiscal year end, LLCs use three months, and LLPs use the January-through-April annual window.",
    lastReviewed: "June 8, 2026",
    sourceBadge: "Source: Vermont Legislature",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Corporation lane",
        text: "Domestic corporations pay $60 and foreign corporations pay $250, with the report due within two and one-half months after fiscal year end."
      },
      {
        label: "LLC lane",
        text: "Domestic LLCs pay $45 and foreign LLCs pay $170, with the report due within three months after fiscal year end."
      },
      {
        label: "LLP lane",
        text: "Domestic LLPs pay $30 and foreign LLPs pay $170, with annual reports filed between January 1 and April 1."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Vermont rewards an entity-type-first answer. Corporations and LLCs both use fiscal-year
              deadlines, but they do not use the same month count or the same reinstatement fee, and
              LLPs stay on a separate January-to-April schedule.
            </p>`,
    sourceLinks: [
      {
        href: "https://legislature.vermont.gov/statutes/section/11A/016/00016.22",
        label: "Vermont corporation annual report statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11A/001/00001.22",
        label: "Vermont corporation fee and reinstatement statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11A/014/00014.20",
        label: "Vermont corporation involuntary termination statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11/025/04033",
        label: "Vermont LLC annual report statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11/025/04012",
        label: "Vermont LLC fee statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11/025/04034",
        label: "Vermont LLC termination and reinstatement statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11/022/03293",
        label: "Vermont LLP annual report statute"
      },
      {
        href: "https://legislature.vermont.gov/statutes/section/11/022/03310",
        label: "Vermont LLP fee statute"
      }
    ],
    scriptSrc: null
  }
];

export const juneExpansionStateDirectory = [
  {
    state: "Idaho",
    route: "/tools/idaho/annual-report-deadline/",
    guideLabel: "Idaho annual report deadline and filing path",
    chipLabel: "Idaho annual report",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "Anniversary-month due dates, SOSBiz filing flow, the published paper-filing surcharge, and what to verify on late records.",
    directoryCardDescription:
      "Idaho annual report timing, SOSBiz workflow, the published $20 paper surcharge, and forfeiture-related status questions.",
    homeComparison: {
      focus: "Domestic or foreign entity with an Idaho annual report",
      deadline: "Before the end of the anniversary month",
      fee: "Published $20 paper manual-processing surcharge",
      lateRule: "Check whether the record has already fallen out of good standing or become forfeited"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Domestic filing entities, domestic LLPs, and registered foreign entities",
      deadline:
        "Each year before the end of the month in which formation, qualification, or registration became effective",
      amount:
        "Published $20 surcharge for paper filings that could have been completed online, with SOSBiz as the primary filing path"
    }
  },
  {
    state: "Illinois",
    route: "/tools/illinois/annual-report-deadline/",
    guideLabel: "Illinois annual report fee and deadline",
    chipLabel: "Illinois anniversary lane",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "Corporation, LLC, and nonprofit anniversary-month timing with the current $75, $75, and $10 fee lanes.",
    directoryCardDescription:
      "Illinois annual report timing, corporation franchise-tax complications, LLC late penalties, and nonprofit fee rules.",
    homeComparison: {
      focus: "Illinois corporation, LLC, or nonprofit",
      deadline: "Prior to the first day of the anniversary month",
      fee: "$75 for corporations and LLCs, or $10 for nonprofits",
      lateRule: "LLCs add a $100 late penalty after 60 days; nonprofits add a $3 statutory late penalty"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Business corporations, LLCs, and nonprofit corporations",
      deadline: "Prior to the first day of the anniversary month each year",
      amount:
        "$75 for corporations, $75 for LLCs, or $10 for nonprofits, with separate late and franchise-tax rules by entity type"
    }
  },
  {
    state: "Missouri",
    route: "/tools/missouri/annual-registration-report-deadline/",
    guideLabel: "Missouri annual registration report fee and deadline",
    chipLabel: "Missouri registration",
    guideType: "Annual registration guide",
    coverageBucket: "annual-registration-and-tax",
    featuredInHomeNav: false,
    homeCardDescription:
      "For-profit corporation month-end due dates, nonprofit August 31 timing, online fee savings, and the published 30-day late fee.",
    directoryCardDescription:
      "Missouri annual registration report timing, corporation versus nonprofit fee splits, and the current late-fee rule.",
    homeComparison: {
      focus: "Missouri corporation filing an annual registration report",
      deadline: "End of the report month, or August 31 for nonprofits",
      fee: "$20 online or $45 paper for many for-profit corporations",
      lateRule: "$15 additional fee for each 30-day late period"
    },
    directoryComparison: {
      obligation: "Annual registration report",
      entityFocus: "For-profit and nonprofit corporations using the Missouri registration-report system",
      deadline:
        "End of the incorporation or qualification month for many corporations, or August 31 for nonprofits",
      amount:
        "$20 online or $45 paper for many for-profit corporations, or $10 online or $15 paper for nonprofits"
    }
  },
  {
    state: "South Carolina",
    route: "/tools/south-carolina/annual-report-deadline/",
    guideLabel: "South Carolina annual report and license fee deadline",
    chipLabel: "SC corporate report",
    guideType: "Annual report plus license fee guide",
    coverageBucket: "annual-registration-and-tax",
    featuredInHomeNav: false,
    homeCardDescription:
      "C-corporation and S-corporation due dates, CL-1 startup timing, and the published annual license-fee formula.",
    directoryCardDescription:
      "South Carolina annual report timing through the Department of Revenue, annual license-fee rules, and reinstatement cleanup steps.",
    homeComparison: {
      focus: "South Carolina corporation filing with SCDOR",
      deadline: "March 15 or April 15 for calendar-year filers, depending on tax classification",
      fee: "0.1% of capital and paid-in surplus plus $15, minimum $25",
      lateRule: "Administrative dissolutions require tax-compliance cleanup before SOS reinstatement"
    },
    directoryComparison: {
      obligation: "Annual report plus corporate license fee",
      entityFocus: "Domestic and foreign corporations filing with the South Carolina Department of Revenue",
      deadline:
        "15th day of the third or fourth month after tax year end, depending on the corporate return type",
      amount:
        "License fee of 0.1% of capital stock and paid-in surplus plus $15, subject to a $25 minimum"
    }
  },
  {
    state: "Vermont",
    route: "/tools/vermont/annual-report-deadline/",
    guideLabel: "Vermont annual report fee and deadline",
    chipLabel: "Vermont entity split",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "Corporation, LLC, and LLP annual report timing with Vermont's current domestic-versus-foreign fee splits.",
    directoryCardDescription:
      "Vermont annual report deadlines, current statutory fees, and reinstatement consequences for corporations, LLCs, and LLPs.",
    homeComparison: {
      focus: "Vermont corporation, LLC, or LLP",
      deadline: "Depends on entity type: 2.5 months, 3 months, or January 1 to April 1",
      fee: "$60 to $250 for corporations, $45 to $170 for LLCs, or $30 to $170 for LLPs",
      lateRule: "Missed reports can terminate or revoke the record and trigger separate reinstatement fees"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Corporations, LLCs, and LLPs",
      deadline:
        "Within two and one-half months, within three months, or between January 1 and April 1 depending on entity type",
      amount:
        "Domestic-versus-foreign fee lanes of $60/$250 for corporations, $45/$170 for LLCs, and $30/$170 for LLPs"
    }
  }
];

export const juneExpansionStructuredStateContentByFilePath = {
  "tools/idaho/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Anniversary-month rule",
      title: "Idaho keeps the timing rule simple, then pushes most filers into SOSBiz",
      headers: ["Entity lane", "Due rule", "Amount used here", "What to watch"],
      rows: [
        [
          "Domestic filing entity",
          "Before the end of the month in which the public organic record became effective, then each year by the close of business on the final day of that month",
          "Start with the SOSBiz online filing path",
          "The safest date check is the formation month shown on the Idaho record."
        ],
        [
          "Domestic LLP",
          "Before the end of the month in which the statement of qualification became effective",
          "Start with the SOSBiz online filing path",
          "Idaho's statute places domestic LLPs in the same anniversary-month filing lane."
        ],
        [
          "Registered foreign entity",
          "Before the end of the month in which the foreign entity registered to do business in Idaho",
          "Start with the SOSBiz online filing path",
          "Use the Idaho registration-effective month rather than the home-state formation date."
        ],
        [
          "Paper annual report path",
          "Use the same due rule as the online filing",
          "Published $20 manual-processing surcharge if the filing could have been completed online",
          "Idaho says paper annual reports can only be completed in its office."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Practical filing path",
      title: "The useful Idaho shortcuts are deadline-first and portal-first",
      cards: [
        {
          title: "Idaho treats the annual report as a verification process",
          text: "The SOSBiz help page describes the annual report as a simple verification process to confirm the entity details already on file."
        },
        {
          title: "Paper filing is the exception",
          text: "Idaho's forms guidance says paper annual reports can only be completed in the office, and paper filings that could have been completed online typically add the published $20 manual-processing surcharge."
        },
        {
          title: "Late status can turn into a good-standing problem",
          text: "The Idaho business entities FAQ explains that failure to file the annual report can cause a corporation to fall out of good standing and become forfeited, so late records should be checked in the official system before relying on a normal filing answer."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Idaho annual report details",
      headers: ["Question", "Idaho answer used here"],
      rows: [
        [
          "Where should you file first?",
          "Use the SOSBiz annual report portal because Idaho's help content and forms page both direct standard annual-report work into the online system."
        ],
        [
          "What is the clearest published fee number?",
          "Idaho publicly states the $20 manual-processing surcharge for a paper filing that could otherwise be completed online."
        ],
        [
          "How should you think about the due date?",
          "Use the effective month from the Idaho filing or registration record and file before the final day of that month each year."
        ],
        [
          "What if the record may already be late?",
          "Check the Idaho business record first because the FAQ connects missed annual reports with loss of good standing and forfeiture status."
        ]
      ]
    }
  ],
  "tools/illinois/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Entity split",
      title: "Illinois uses one anniversary-month concept but three different fee lanes",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Business corporation",
          "Prior to the first day of the anniversary month each year",
          "$75 annual report filing fee, plus annual franchise tax and any accrued late amounts",
          "Corporation filings can also require franchise-tax math, and the online path carries immediate payment requirements."
        ],
        [
          "LLC",
          "Prior to the due date shown on the annual report, using the anniversary-month cycle",
          "$75 filing fee",
          "If the LLC annual report is not filed within 60 days after the due date, the form states that a $100 late penalty applies."
        ],
        [
          "Nonprofit corporation",
          "Prior to the first day of the anniversary month each year",
          "$10 on time, plus a $3 statutory late penalty if filed later",
          "The nonprofit form uses a much smaller fee lane than the corporation or LLC path."
        ],
        [
          "Need to file online as a corporation",
          "Use the same anniversary-month due rule",
          "Current amounts due at filing, with the report processed immediately online",
          "The online corporation path has eligibility limits and requires payment of filing fee, franchise tax, and any penalties at submission."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Late and filing-path notes",
      title: "Illinois gets harder when the record is late or when online eligibility breaks",
      cards: [
        {
          title: "Corporations cannot always use the online annual report",
          text: "Illinois says corporations cannot file online in several common situations, including property or business activity outside Illinois or changes in shares or paid-in capital."
        },
        {
          title: "LLC late penalties are cleaner and faster",
          text: "The Illinois LLC annual report form states that a $100 late filing penalty applies if the report is not filed within 60 days after the due date."
        },
        {
          title: "Nonprofit late math stays simple",
          text: "The Illinois nonprofit annual report form says the on-time filing fee is $10 and a statutory $3 penalty must be added if the filing is late."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Illinois annual report details",
      headers: ["Question", "Illinois answer used here"],
      rows: [
        [
          "Can the annual report itself change the registered agent or registered office?",
          "No. The corporation, LLC, and nonprofit forms all direct filers to use a separate change form for registered-agent or registered-office updates."
        ],
        [
          "Who must sign the filing?",
          "Illinois requires the filing to be made by an officer or other authorized signer named in the report path for the entity."
        ],
        [
          "When do late costs get paid online?",
          "Illinois online instructions say all penalties incurred as of the current date must be paid along with the filing fee during the filing process."
        ],
        [
          "What is the cleanest deadline shortcut?",
          "Use the anniversary month from the Illinois record and treat the filing as due before the first day of that month unless the entity-specific form states the due date directly."
        ]
      ]
    }
  ],
  "tools/missouri/annual-registration-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Corporation and nonprofit split",
      title: "Missouri uses different due-date logic for standard corporations and nonprofits",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "For-profit corporation incorporated or qualified on or after July 1, 2003",
          "Due at the end of the month in which the corporation incorporated or qualified",
          "$20 online or $45 paper",
          "Missouri highlights the online filing savings directly on its annual-report guidance."
        ],
        [
          "Older corporation with a legacy report month",
          "Due at the end of the month shown on the last annual report",
          "$20 online or $45 paper",
          "Older corporations should not assume the incorporation month if the state already established a different report month."
        ],
        [
          "Nonprofit corporation",
          "Due by August 31 each year",
          "$10 online or $15 paper",
          "Missouri's nonprofit instruction sheet says the corporation will not remain in good standing if the report is not filed."
        ],
        [
          "Already late report",
          "File as soon as possible using the correct annual-report form or portal path",
          "$15 additional fee for each 30-day late period",
          "The late fee stacks by 30-day periods, and continued failure to file can move the record into administrative dissolution or revocation."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Portal and penalty notes",
      title: "Missouri's current filing guidance is strongest on fees, online savings, and late exposure",
      cards: [
        {
          title: "Online filing saves money",
          text: "Missouri's general annual-report guidance says online filing saves $25 per for-profit corporate report, and the current fee schedule also shows lower nonprofit online pricing."
        },
        {
          title: "Late reports add a recurring fee",
          text: "Missouri says late reports are subject to an additional $15 fee for each 30-day period."
        },
        {
          title: "Failure to file becomes a status problem",
          text: "Missouri's corporations pages tie missed annual registration reports to administrative dissolution for domestic corporations and revocation for foreign corporations."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Missouri registration-report details",
      headers: ["Question", "Missouri answer used here"],
      rows: [
        [
          "Where do you file online?",
          "Use the Missouri annual and biennial registration reports portal, which now requires a user account tied to a valid email address."
        ],
        [
          "How do you get a paper report?",
          "Missouri says you may contact the office for the form or print the registration report through the online system."
        ],
        [
          "What if you filed online last year?",
          "Missouri's annual-report guidance says the next online report already includes the prior year's information, which makes review and edits faster."
        ],
        [
          "How should a nonprofit think about the deadline?",
          "Use August 31 each year rather than the standard month-end corporation rule."
        ]
      ]
    }
  ],
  "tools/south-carolina/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Recurring report lanes",
      title: "South Carolina ties the annual report to the corporate tax return",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "C corporation",
          "April 15 for a calendar-year filer, or the 15th day of the fourth month after tax year end",
          "Annual license fee of 0.1% of capital stock and paid-in surplus plus $15, minimum $25",
          "The annual report is included as Schedule D with SC1120 rather than filed as a separate Secretary of State report."
        ],
        [
          "S corporation",
          "March 15 for a calendar-year filer, or the 15th day of the third month after tax year end",
          "Published corporate license-fee framework applies, subject to the state's minimum rules",
          "South Carolina's FAQ table keeps S corporations on a different due-date lane from C corporations."
        ],
        [
          "Newly registered corporation",
          "Within 60 days of doing business or using capital in South Carolina",
          "One-time $25 initial corporate license fee on CL-1",
          "This startup filing is separate from the recurring annual return and annual report cycle."
        ],
        [
          "Administratively dissolved corporation",
          "Clear tax delinquencies before pursuing SOS reinstatement",
          "$60 Certificate of Tax Compliance request before the Secretary of State reinstatement step",
          "South Carolina requires tax-compliance cleanup before the dissolved corporation can finish reinstatement with the Secretary of State."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "How the annual report actually works",
      title: "The biggest South Carolina trap is treating this like a flat-fee Secretary of State filing",
      cards: [
        {
          title: "The annual report is part of the tax return",
          text: "South Carolina's corporate guidance says the annual report is included in Schedule D, which is part of the SC1120 filing path for corporations."
        },
        {
          title: "The first-year CL-1 is real and separate",
          text: "The Department of Revenue says corporations must file the Initial Annual Report of Corporations and pay the one-time $25 initial corporate license fee within 60 days of doing business or using capital in the state."
        },
        {
          title: "Late cleanup starts with tax compliance",
          text: "If the corporation is already administratively dissolved, South Carolina directs the business to request a Certificate of Tax Compliance from the Department of Revenue before filing the reinstatement application with the Secretary of State."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful South Carolina filing details",
      headers: ["Question", "South Carolina answer used here"],
      rows: [
        [
          "Where do you file the recurring return?",
          "South Carolina recommends filing corporate returns online through MyDORWAY or another approved electronic path."
        ],
        [
          "Does the corporation still file if there was no activity?",
          "Yes. South Carolina says C corporations file annually regardless of income or business in the accounting period."
        ],
        [
          "When should the first recurring return be marked specially?",
          "South Carolina directs new corporations to check the Initial Return box on the first return after the CL-1 setup step."
        ],
        [
          "Is there an extension of time to pay?",
          "South Carolina's corporate guidance says there is no extension of time to pay, even if more time to file is requested."
        ]
      ]
    }
  ],
  "tools/vermont/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Entity split",
      title: "Vermont changes both the deadline and the fee by entity type",
      headers: ["Entity lane", "Due rule", "Published amount", "What to watch"],
      rows: [
        [
          "Corporation",
          "Within two and one-half months after the expiration of the corporation's fiscal year",
          "$60 for a domestic corporation or $250 for a foreign corporation",
          "Vermont also collects a separate $50 reinstatement fee for each missed corporate annual report year after involuntary termination."
        ],
        [
          "LLC",
          "Within three months after the expiration of the company's fiscal year",
          "$45 for a domestic LLC or $170 for a foreign LLC",
          "If the LLC is terminated for missed annual reports, Vermont also collects the annual report fee and a $35 reinstatement fee for each missed year."
        ],
        [
          "LLP",
          "Between January 1 and April 1 each year following the qualification year",
          "$30 for a domestic LLP or $170 for a foreign LLP",
          "The Secretary of State may revoke the LLP statement of qualification after notice if the annual report or fee is not filed."
        ],
        [
          "Already late record",
          "Move into the entity-specific reinstatement or revocation-cleanup path",
          "Current annual report fee plus the applicable reinstatement fee",
          "Vermont uses different late consequences for corporations, LLCs, and LLPs, so the entity type must be confirmed first."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Late and reinstatement notes",
      title: "Vermont's cleanup path changes with the chapter that governs the entity",
      cards: [
        {
          title: "Corporations can be involuntarily terminated",
          text: "Vermont's corporation statutes pair the annual-report fee with a separate $50 reinstatement fee for each year the corporation failed to file after involuntary termination."
        },
        {
          title: "LLCs use a lower reinstatement fee",
          text: "Vermont's LLC statutes use a different late path and collect the annual report filing fee together with a $35 reinstatement fee for each year the company failed to file."
        },
        {
          title: "LLP revocation does not dissolve the partnership",
          text: "Vermont's LLP annual-report statute says revocation affects the partnership's limited liability partnership status, but is not itself an event of dissolution of the partnership."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Vermont annual report details",
      headers: ["Question", "Vermont answer used here"],
      rows: [
        [
          "What is the cleanest deadline shortcut?",
          "Use the entity type first: corporations use two and one-half months after fiscal year end, LLCs use three months, and LLPs use January 1 through April 1."
        ],
        [
          "Why does domestic versus foreign status matter more in Vermont?",
          "The annual-report fee changes sharply between domestic and foreign entities across corporations, LLCs, and LLPs."
        ],
        [
          "How long can a revoked Vermont LLP seek reinstatement?",
          "The Vermont LLP statute gives a revoked partnership two years after the effective date of revocation to apply for reinstatement."
        ],
        [
          "What should you confirm before paying?",
          "Confirm both the governing Vermont entity chapter and whether the entity is already in a termination or revocation status, because the annual fee and reinstatement fee are chapter-specific."
        ]
      ]
    }
  ]
};

export const juneExpansionGuideEvidenceByRoute = {
  "/tools/idaho/annual-report-deadline/": {
    filingLabel: [1, 2],
    whoShouldUse: [1, 3],
    headlineDueDate: [1],
    mainAmountShown: [2, 3, 4],
    ifAlreadyLate: [3]
  },
  "/tools/illinois/annual-report-deadline/": {
    filingLabel: [1, 2, 4, 6],
    whoShouldUse: [1, 2, 4, 6],
    headlineDueDate: [3, 4, 6],
    mainAmountShown: [2, 4, 6],
    ifAlreadyLate: [2, 4, 6, 7, 8]
  },
  "/tools/missouri/annual-registration-report-deadline/": {
    filingLabel: [1, 2, 5],
    whoShouldUse: [1, 2, 4],
    headlineDueDate: [1, 2, 4],
    mainAmountShown: [1, 3, 4],
    ifAlreadyLate: [1, 2, 4]
  },
  "/tools/south-carolina/annual-report-deadline/": {
    filingLabel: [1, 2],
    whoShouldUse: [1, 2, 3],
    headlineDueDate: [1, 2],
    mainAmountShown: [1, 2, 3],
    ifAlreadyLate: [1, 2]
  },
  "/tools/vermont/annual-report-deadline/": {
    filingLabel: [1, 4, 7],
    whoShouldUse: [1, 4, 7],
    headlineDueDate: [1, 4, 7],
    mainAmountShown: [2, 5, 8],
    ifAlreadyLate: [2, 3, 6, 7, 8]
  }
};

export const juneExpansionGuideDecisionToolByRoute = {
  "/tools/idaho/annual-report-deadline/": decisionTool({
    caseLabel: "Which Idaho annual report lane fits best?",
    intro:
      "Idaho's normal answer starts with the same anniversary-month rule for domestic and foreign records, then changes mostly when the filing has to move into a paper or late-status path.",
    cases: [
      decisionCase({
        value: "domestic-entity",
        label: "Domestic filing entity or domestic LLP",
        deadline: "Before the end of the anniversary month each year",
        amount: "Use SOSBiz first; paper filings that could be done online add the published $20 surcharge",
        normalRule:
          "Idaho requires domestic filing entities and domestic LLPs to deliver the annual report before the end of the month in which the Idaho filing became effective.",
        lateRule:
          "If the entity is already past the month-end deadline, check the business record first because Idaho's FAQ connects missed annual reports with loss of good standing and forfeiture risk.",
        confirmRule:
          "Confirm the Idaho effective month from the entity record before relying on the anniversary-month deadline.",
        nextAction:
          "Open SOSBiz and confirm the report that is available for filing.",
        sourceIndexes: [1, 4, 5],
        lateSourceIndexes: [1, 3],
        confirmSourceIndexes: [1, 5]
      }),
      decisionCase({
        value: "foreign-entity",
        label: "Registered foreign entity",
        deadline: "Before the end of the month in which the Idaho registration became effective",
        amount: "Use SOSBiz first; paper filings that could be done online add the published $20 surcharge",
        normalRule:
          "Idaho places registered foreign entities in the same annual-report statute, but the key month is the Idaho registration month rather than the home-state formation month.",
        lateRule:
          "If the foreign registration is late, verify the current Idaho status before paying because the normal annual-report answer may no longer be enough by itself.",
        confirmRule:
          "Confirm that the date you are using is the Idaho registration-effective date and not an earlier out-of-state formation date.",
        nextAction:
          "Use the Idaho annual report portal and record search together before filing.",
        sourceIndexes: [1, 4, 5],
        lateSourceIndexes: [1, 3],
        confirmSourceIndexes: [1, 5]
      }),
      decisionCase({
        value: "paper-filing",
        label: "Need or want a paper filing",
        deadline: "Use the same month-end deadline as the online filing",
        amount: "Published $20 manual-processing surcharge if the filing could have been completed online",
        normalRule:
          "Idaho's forms guidance says paper annual reports can be completed only in the office and paper filings that could otherwise be completed online typically incur the published $20 surcharge.",
        lateRule:
          "A paper filing does not extend the deadline, so already-late records should be checked before you rely on the ordinary annual-report path.",
        confirmRule:
          "Confirm that you truly need the paper path because Idaho pushes standard annual-report work into SOSBiz.",
        nextAction:
          "Read the forms page and SOSBiz help page before choosing paper instead of the online filing.",
        sourceIndexes: [2, 4],
        lateSourceIndexes: [2, 3],
        confirmSourceIndexes: [2, 4]
      }),
      decisionCase({
        value: "already-late",
        label: "Already late or status unclear",
        deadline: "Check the record and resolve the report as soon as possible",
        amount: "Confirm the live filing path; paper/manual routes can add the published $20 surcharge",
        normalRule:
          "Once the Idaho record has moved out of the normal annual-report cycle, the simple deadline answer stops being enough by itself.",
        lateRule:
          "The Idaho FAQ explains that failure to file the annual report can cause a corporation to become forfeited, so the first step is confirming the current status in the official system.",
        confirmRule:
          "Confirm whether the entity is only late or whether it already shows a status problem that changes the filing path.",
        nextAction:
          "Use Idaho business search and SOSBiz together before submitting the filing.",
        sourceIndexes: [3, 5],
        lateSourceIndexes: [3],
        confirmSourceIndexes: [3, 5]
      })
    ]
  }),
  "/tools/illinois/annual-report-deadline/": decisionTool({
    caseLabel: "Which Illinois annual report lane fits best?",
    intro:
      "Illinois becomes much easier once you separate corporations, LLCs, and nonprofits. The anniversary-month concept stays visible across the state, but the fee math and late rules do not match.",
    cases: [
      decisionCase({
        value: "corporation",
        label: "Business corporation",
        deadline: "Prior to the first day of the anniversary month",
        amount: "$75 annual report filing fee, plus annual franchise tax and any late amounts",
        normalRule:
          "Illinois corporations file annual reports before the first day of the anniversary month and must account for both the annual report filing fee and any annual franchise tax due.",
        lateRule:
          "Illinois online corporation guidance says all penalties and interest incurred as of the current date must be paid at filing, and the corporation may need paper filing if it falls outside the online eligibility rules.",
        confirmRule:
          "Confirm that the business is a corporation and not an LLC or nonprofit before relying on the corporation fee and franchise-tax lane.",
        nextAction:
          "Use the Illinois corporation annual report instructions and the current corporation form before paying.",
        sourceIndexes: [2, 3, 7],
        lateSourceIndexes: [2, 7],
        confirmSourceIndexes: [1, 2, 3]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "Prior to the due date shown on the annual report, using the anniversary-month cycle",
        amount: "$75 filing fee",
        normalRule:
          "Illinois LLCs use the annual report form and the standard $75 filing fee, with the due date tied to the company's recurring report cycle.",
        lateRule:
          "The Illinois LLC annual report form states that a $100 late filing penalty applies if the report is not filed within 60 days after the due date.",
        confirmRule:
          "Confirm that the business is an LLC and not a corporation or nonprofit before relying on the LLC late-penalty rule.",
        nextAction:
          "Use the Illinois LLC annual report form or online instructions before filing.",
        sourceIndexes: [4, 5, 8],
        lateSourceIndexes: [4, 5, 8],
        confirmSourceIndexes: [1, 4, 5]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "Prior to the first day of the anniversary month",
        amount: "$10 on time, plus a $3 statutory late penalty if late",
        normalRule:
          "Illinois nonprofits file annual reports before the first day of the anniversary month and use the lower $10 on-time fee lane.",
        lateRule:
          "The Illinois nonprofit annual report form says a statutory $3 penalty must be added if the filing is late.",
        confirmRule:
          "Confirm that the entity is a nonprofit corporation before using the lower Illinois fee lane.",
        nextAction:
          "Use the current nonprofit annual report form before paying.",
        sourceIndexes: [6],
        lateSourceIndexes: [6],
        confirmSourceIndexes: [1, 6]
      }),
      decisionCase({
        value: "already-late-or-ineligible-online",
        label: "Already late or cannot use online filing",
        deadline: "Resolve the current report as soon as possible",
        amount: "Current fee plus entity-specific late amounts",
        normalRule:
          "Illinois still expects the annual report to be filed, but the correct path may switch to paper or a reinstatement-style cleanup when the record is late or not eligible for online filing.",
        lateRule:
          "Corporations and LLCs must pay penalties that have accrued as of the filing date, and online eligibility rules can force the filing into a paper path.",
        confirmRule:
          "Confirm both the entity type and whether the record remains in good standing before relying on the ordinary online filing answer.",
        nextAction:
          "Check the Illinois instructions for the specific entity and use the matching form path before payment.",
        sourceIndexes: [2, 4, 7, 8],
        lateSourceIndexes: [2, 4, 6, 7, 8],
        confirmSourceIndexes: [1, 2, 4, 6]
      })
    ]
  }),
  "/tools/missouri/annual-registration-report-deadline/": decisionTool({
    caseLabel: "Which Missouri registration-report lane fits best?",
    intro:
      "Missouri's recurring filing answer starts by separating standard corporations from nonprofits. The state publishes the online-versus-paper fee split clearly, and the late fee works the same way across the report paths.",
    cases: [
      decisionCase({
        value: "for-profit-corporation",
        label: "For-profit corporation",
        deadline: "End of the incorporation or qualification month, or the month already assigned on the last annual report",
        amount: "$20 online or $45 paper",
        normalRule:
          "Missouri corporations use the annual registration report, and the current fee schedule shows a lower online price than the paper form.",
        lateRule:
          "Late reports add a $15 fee for each 30-day period, and continued failure to file can lead to administrative dissolution or revocation.",
        confirmRule:
          "Confirm whether the corporation uses the modern incorporation-month rule or an older legacy report month shown on the last annual report.",
        nextAction:
          "Use the Missouri annual-report portal or the filings page before paying.",
        sourceIndexes: [1, 2, 3, 5],
        lateSourceIndexes: [1, 2],
        confirmSourceIndexes: [1, 2, 5]
      }),
      decisionCase({
        value: "nonprofit-corporation",
        label: "Nonprofit corporation",
        deadline: "August 31 each year",
        amount: "$10 online or $15 paper",
        normalRule:
          "Missouri's nonprofit instruction sheet says nonprofits file an annual report each year by August 31 and the current fee schedule shows the lower nonprofit fee lane.",
        lateRule:
          "If the nonprofit misses the report, the same published $15 late fee per 30-day period applies and the corporation stops remaining in good standing.",
        confirmRule:
          "Confirm that the entity is a nonprofit corporation before using the August 31 Missouri due date and the lower fee lane.",
        nextAction:
          "Use the nonprofit instruction sheet and current fee schedule together before filing.",
        sourceIndexes: [3, 4, 5],
        lateSourceIndexes: [1, 4],
        confirmSourceIndexes: [3, 4]
      }),
      decisionCase({
        value: "legacy-report-month",
        label: "Older corporation with an assigned report month",
        deadline: "End of the month shown on the last annual report",
        amount: "$20 online or $45 paper",
        normalRule:
          "Missouri says corporations existing before July 1, 2003 use the month shown on the last annual report rather than always defaulting to the original incorporation month.",
        lateRule:
          "Once that assigned month is missed, the same $15 per 30-day late fee applies and the record can move toward administrative action.",
        confirmRule:
          "Confirm the last report month from the Missouri record before relying on the standard corporation month-end answer.",
        nextAction:
          "Check the Missouri corporation record and then use the state report portal.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [1, 2],
        confirmSourceIndexes: [1, 2, 5]
      }),
      decisionCase({
        value: "already-late",
        label: "Already late or checking online eligibility",
        deadline: "Resolve the report as soon as possible",
        amount: "$15 additional fee for each 30-day period, plus the filing fee",
        normalRule:
          "If the entity is still in the ordinary filing window, Missouri's online system is usually the cheapest path and can prefill prior-year information.",
        lateRule:
          "A missed Missouri report keeps adding the published $15 fee for each 30-day period and can push the corporation into dissolution or revocation trouble.",
        confirmRule:
          "Confirm whether the system shows an annual or biennial report option and whether the record is still eligible for the normal online path.",
        nextAction:
          "Use the Missouri portal and the corporation filings page before submitting payment.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [1, 2],
        confirmSourceIndexes: [2, 5]
      })
    ]
  }),
  "/tools/south-carolina/annual-report-deadline/": decisionTool({
    caseLabel: "Which South Carolina corporate filing lane fits best?",
    intro:
      "South Carolina's recurring answer starts with the tax-return type. The state does not use one flat annual-report fee, so the more useful split is C corporation, S corporation, or first-year setup work.",
    cases: [
      decisionCase({
        value: "c-corporation",
        label: "C corporation",
        deadline: "April 15 for a calendar-year filer, or the 15th day of the fourth month after tax year end",
        amount: "License fee of 0.1% of capital stock and paid-in surplus plus $15, minimum $25",
        normalRule:
          "South Carolina says the annual report is part of the SC1120 filing path for C corporations and is due with the corporate return.",
        lateRule:
          "If the corporation falls into administrative dissolution, South Carolina requires tax-compliance cleanup before the Secretary of State reinstatement step can be completed.",
        confirmRule:
          "Confirm that the entity files as a C corporation and not an S corporation before using the fourth-month due date.",
        nextAction:
          "Use the South Carolina C corporation filing-requirements page and SC1120 materials before filing.",
        sourceIndexes: [1, 2, 4],
        lateSourceIndexes: [1, 2],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "s-corporation",
        label: "S corporation",
        deadline: "March 15 for a calendar-year filer, or the 15th day of the third month after tax year end",
        amount: "Published corporate license-fee framework, subject to South Carolina's minimum rules",
        normalRule:
          "South Carolina's corporate FAQ table places S corporations on the SC1120S lane and uses the third-month deadline rather than the C-corporation fourth-month deadline.",
        lateRule:
          "Once the corporation is late enough to create a status problem, the cleanup path shifts from a simple annual-report answer to compliance and reinstatement work.",
        confirmRule:
          "Confirm that the corporation is taxed as an S corporation before using the third-month South Carolina deadline.",
        nextAction:
          "Use the South Carolina corporate FAQ table before preparing the return.",
        sourceIndexes: [1],
        lateSourceIndexes: [1],
        confirmSourceIndexes: [1]
      }),
      decisionCase({
        value: "first-year-cl1",
        label: "Newly registered corporation or first-year filer",
        deadline: "Within 60 days of doing business or using capital in South Carolina for CL-1, then move into the recurring annual return cycle",
        amount: "One-time $25 initial corporate license fee on CL-1",
        normalRule:
          "South Carolina requires the CL-1 initial annual report and the one-time initial corporate license fee before the recurring annual-report-and-return pattern becomes the main issue.",
        lateRule:
          "If the setup work is missed, the business can quickly move into compliance problems that complicate the first recurring filing.",
        confirmRule:
          "Confirm whether you are still in the first-year setup stage or already in the recurring annual return cycle.",
        nextAction:
          "Use the South Carolina CL-1 and the corporate setup guidance before filing.",
        sourceIndexes: [2, 3],
        lateSourceIndexes: [1, 2, 3],
        confirmSourceIndexes: [2, 3]
      }),
      decisionCase({
        value: "already-dissolved",
        label: "Already administratively dissolved",
        deadline: "Start with tax-compliance cleanup as soon as possible",
        amount: "$60 Certificate of Tax Compliance request, then Secretary of State reinstatement work",
        normalRule:
          "Once the corporation is already dissolved, the ordinary South Carolina annual-report answer is no longer enough by itself.",
        lateRule:
          "South Carolina's corporate FAQ says the dissolved corporation must request a Certificate of Tax Compliance from the Department of Revenue before it can finish reinstatement with the Secretary of State.",
        confirmRule:
          "Confirm that the record is administratively dissolved rather than merely late before relying on the reinstatement path.",
        nextAction:
          "Use the South Carolina corporate FAQ and tax-compliance request process first.",
        sourceIndexes: [1, 2],
        lateSourceIndexes: [1, 2],
        confirmSourceIndexes: [1]
      })
    ]
  }),
  "/tools/vermont/annual-report-deadline/": decisionTool({
    caseLabel: "Which Vermont annual report lane fits best?",
    intro:
      "Vermont works best when you start with the entity type. Corporations, LLCs, and LLPs all file annual reports, but the deadline, fee, and late-status consequence all change with the governing chapter.",
    cases: [
      decisionCase({
        value: "corporation",
        label: "Corporation",
        deadline: "Within two and one-half months after fiscal year end",
        amount: "$60 domestic or $250 foreign",
        normalRule:
          "Vermont corporations must deliver the annual report within two and one-half months after the expiration of the fiscal year, and the fee statute separates domestic and foreign corporation pricing.",
        lateRule:
          "If the corporation is involuntarily terminated for failure to file its annual report, Vermont collects the annual report filing fee for each missed year plus a separate $50 reinstatement fee.",
        confirmRule:
          "Confirm both the entity type and whether the corporation is domestic or foreign before relying on the Vermont corporation fee lane.",
        nextAction:
          "Use the Vermont corporation annual-report and fee statutes together before filing.",
        sourceIndexes: [1, 2],
        lateSourceIndexes: [2, 3],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "Within three months after fiscal year end",
        amount: "$45 domestic or $170 foreign",
        normalRule:
          "Vermont LLCs file annual reports within three months after the fiscal year ends, and the fee statute uses a separate domestic-versus-foreign pricing split for LLCs.",
        lateRule:
          "If the LLC has already been terminated for missed annual reports, Vermont collects the annual report filing fee and the $35 reinstatement fee for each missed year.",
        confirmRule:
          "Confirm whether the record is a domestic or foreign Vermont LLC before using the fee lane.",
        nextAction:
          "Use the Vermont LLC annual-report and fee statutes together before paying.",
        sourceIndexes: [4, 5],
        lateSourceIndexes: [5, 6],
        confirmSourceIndexes: [4, 5]
      }),
      decisionCase({
        value: "llp",
        label: "LLP",
        deadline: "Between January 1 and April 1 each year",
        amount: "$30 domestic or $170 foreign",
        normalRule:
          "Vermont LLPs do not use the corporation or LLC fiscal-year timing. They file between January 1 and April 1 each year, and the separate fee statute sets the domestic and foreign annual-report fees.",
        lateRule:
          "The Secretary of State may revoke the LLP statement of qualification after notice if the annual report or fee is not filed, and the partnership then uses the LLP reinstatement path.",
        confirmRule:
          "Confirm that the entity is an LLP and not an LLC before relying on the January-to-April Vermont filing window.",
        nextAction:
          "Use the Vermont LLP annual-report and fee statutes before filing.",
        sourceIndexes: [7, 8],
        lateSourceIndexes: [7, 8],
        confirmSourceIndexes: [7, 8]
      }),
      decisionCase({
        value: "already-late",
        label: "Already late or already terminated",
        deadline: "Use the entity-specific reinstatement or revocation path",
        amount: "Current annual report fee plus the applicable Vermont reinstatement fee",
        normalRule:
          "Once a Vermont entity is already outside the normal annual-report lane, the chapter-specific reinstatement consequences matter more than the ordinary deadline answer.",
        lateRule:
          "Corporations, LLCs, and LLPs all have different statutory late-status consequences, so the entity type has to be confirmed before you can rely on the cleanup amount.",
        confirmRule:
          "Confirm whether the entity is a corporation, LLC, or LLP and whether it is terminated or revoked before paying.",
        nextAction:
          "Use the governing Vermont chapter first, then the matching fee and reinstatement statute.",
        sourceIndexes: [2, 3, 6, 7, 8],
        lateSourceIndexes: [2, 3, 6, 7, 8],
        confirmSourceIndexes: [1, 4, 7]
      })
    ]
  })
};
