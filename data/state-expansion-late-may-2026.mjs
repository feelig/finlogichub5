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

export const lateMayExpansionStatePages = [
  {
    filePath: "tools/iowa/biennial-report-deadline/index.html",
    titleTag: "Iowa Biennial Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Iowa biennial report fee and deadline guidance covering odd-versus-even filing years, corporation and LLC fee splits, nonprofit exceptions, and delinquency through August.",
    canonicalUrl: "https://finlogichub5.com/tools/iowa/biennial-report-deadline/",
    ogTitle: "Iowa Biennial Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Iowa biennial report timing, corporation and LLC fee lanes, nonprofit exceptions, and delinquency through August using Iowa Secretary of State sources.",
    state: "Iowa",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Iowa biennial report", href: null }
    ],
    heroTitle: "Iowa biennial report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Iowa biennial report deadline or filing fee. Start with the entity type because Iowa places profit corporations in even-numbered filing years and places LLCs, LLPs, and nonprofits in odd-numbered filing years.",
    heroActions: [
      {
        href: "https://sos.iowa.gov/businesses/business-entity-forms-and-fees",
        label: "Open Iowa forms and fee page",
        variant: "primary"
      },
      {
        href: "https://help.sos.iowa.gov/how-do-i-file-biennial-report",
        label: "Read Iowa filing walkthrough",
        variant: "secondary"
      }
    ],
    lastReviewed: "May 25, 2026",
    sourceBadge: "Source: Iowa Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Profit corporation lane",
        text: "Profit corporations file in even-numbered years between January 1 and April 1, with the published $60 filing fee."
      },
      {
        label: "LLC and LLP lane",
        text: "LLCs and LLPs file in odd-numbered years between January 1 and April 1, commonly at $30 online or $45 by paper."
      },
      {
        label: "If the report is missed",
        text: "Iowa sends a delinquency notice after the deadline, and if the report is still not filed by August the entity is dissolved or revoked and has to move into reinstatement work."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Iowa looks simple at first, but the entity type changes both the filing year and the
              fee lane. The safest shortcut is to split profit corporations from LLC, LLP, and
              nonprofit filings before you prepare payment.
            </p>`,
    caseCards: [
      {
        label: "Profit corporation",
        title: "Iowa corporations use the even-year lane",
        text: "Business corporations file biennial reports in even-numbered years and use the published $60 filing fee."
      },
      {
        label: "LLC or LLP",
        title: "Most Iowa pass-through entities use the odd-year lane",
        text: "Iowa LLCs and LLPs file in odd-numbered years and commonly use the lower online fee if they stay inside Fast Track Filing."
      },
      {
        label: "Nonprofit corporation",
        title: "The due window matches the LLC lane, but the fee does not",
        text: "Iowa nonprofits still file in odd-numbered years, but the state says nonprofits do not pay a filing fee for the biennial report."
      },
      {
        label: "Already late",
        title: "The real risk starts after the April window",
        text: "Once the report is missed, Iowa issues a delinquency notice and can dissolve or revoke the entity by August if the filing still is not completed."
      }
    ],
    sourceLinks: [
      {
        href: "https://sos.iowa.gov/businesses/business-entity-forms-and-fees",
        label: "Iowa business entity forms and fees"
      },
      {
        href: "https://help.sos.iowa.gov/how-do-i-file-biennial-report",
        label: "Iowa Fast Track Filing biennial report walkthrough"
      },
      {
        href: "https://sos.iowa.gov/business/faqs.html",
        label: "Iowa business FAQs"
      },
      {
        href: "https://help.sos.iowa.gov/what-happens-if-my-business-misses-deadline-file-biennial-report",
        label: "Iowa missed biennial report guidance"
      },
      {
        href: "https://filings.sos.iowa.gov/",
        label: "Iowa Fast Track Filing portal"
      },
      {
        href: "https://help.sos.iowa.gov/how-often-do-i-have-file-reports-secretary-state",
        label: "Iowa recurring report frequency help page"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/nebraska/annual-biennial-report-deadline/index.html",
    titleTag: "Nebraska Annual and Biennial Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Nebraska annual and biennial report guidance covering corporation occupation-tax reports, LLC and nonprofit biennial filings, LLP annual reports, and delinquency or reinstatement rules.",
    canonicalUrl: "https://finlogichub5.com/tools/nebraska/annual-biennial-report-deadline/",
    ogTitle: "Nebraska Annual and Biennial Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Nebraska annual and biennial report timing, entity-specific fee lanes, and reinstatement risks using Nebraska Secretary of State sources.",
    state: "Nebraska",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Nebraska annual and biennial report", href: null }
    ],
    heroTitle: "Nebraska annual and biennial report fee and deadline",
    heroSubtitle:
      "Use this page if you need the recurring Nebraska filing rule. Start with the entity type because Nebraska splits business corporations into an even-year March occupation-tax lane, places LLCs and nonprofits into an odd-year April biennial lane, and keeps LLPs on an annual April cycle.",
    heroActions: [
      {
        href: "https://sos.nebraska.gov/business-services/annualbiennial-reporting",
        label: "Open Nebraska reporting guide",
        variant: "primary"
      },
      {
        href: "https://sos.nebraska.gov/business-services/forms-and-fee-information",
        label: "Check Nebraska fee schedule",
        variant: "secondary"
      }
    ],
    lastReviewed: "May 25, 2026",
    sourceBadge: "Source: Nebraska Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Business corporation lane",
        text: "Domestic and foreign business corporations file biennial occupation tax reports in even-numbered years by March 1, and the state marks them delinquent on April 15."
      },
      {
        label: "LLC common lane",
        text: "Domestic and foreign LLCs file biennial reports in odd-numbered years by April 1, and the Secretary of State's current warning says LLCs can file online for $28."
      },
      {
        label: "Late-state risk",
        text: "If the annual or biennial report is not filed by the delinquency date, the state can administratively dissolve or revoke the entity and push the work into reinstatement."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Nebraska is best modeled as three recurring lanes, not one. The due date changes with
              the entity type, and the cleanest answer usually starts by separating corporations,
              LLCs, and LLPs before you talk about fees.
            </p>`,
    caseCards: [
      {
        label: "Business corporation",
        title: "Corporations use the even-year March lane",
        text: "Business and professional corporations use the biennial occupation tax report, not the April LLC calendar."
      },
      {
        label: "LLC or PLLC",
        title: "LLCs use the odd-year April biennial lane",
        text: "Nebraska's current SOS warning highlights the online LLC biennial report at $28, which is the cleanest current public number for this lane."
      },
      {
        label: "Nonprofit corporation",
        title: "Nebraska nonprofits match the LLC due year",
        text: "Domestic and foreign nonprofits use the odd-numbered-year April 1 biennial cycle rather than the even-year corporation lane."
      },
      {
        label: "LLP or already late",
        title: "LLPs stay annual and late records move to reinstatement",
        text: "LLPs file every year by April 1, and once any Nebraska record crosses the delinquency date the state can move it into dissolution, revocation, or reinstatement work."
      }
    ],
    sourceLinks: [
      {
        href: "https://sos.nebraska.gov/business-services/annualbiennial-reporting",
        label: "Nebraska annual and biennial reporting guide"
      },
      {
        href: "https://sos.nebraska.gov/business-services/forms-and-fee-information",
        label: "Nebraska business forms and fee information"
      },
      {
        href: "https://sos.nebraska.gov/business-services/new-business-information",
        label: "Nebraska new business information page"
      },
      {
        href: "https://sos.nebraska.gov/business-services/reinstatement-information",
        label: "Nebraska reinstatement information"
      },
      {
        href: "https://sos.nebraska.gov/sites/default/files/doc/news-releases/Media%20Release%20Third-party%20mailers%20confuse%20business%20entities%20filing%20biannual%20reports..pdf",
        label: "Nebraska SOS warning on misleading LLC biennial-report mailers"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/new-hampshire/annual-report-deadline/index.html",
    titleTag: "New Hampshire Annual Report and Annual Fee Deadline | FinLogic Hub",
    metaDescription:
      "New Hampshire annual report and annual fee guidance covering the April 1 business-entity deadline, the $50 late fee, one-click filing, and the separate five-year nonprofit report rule.",
    canonicalUrl: "https://finlogichub5.com/tools/new-hampshire/annual-report-deadline/",
    ogTitle: "New Hampshire Annual Report and Annual Fee Deadline | FinLogic Hub",
    ogDescription:
      "Review New Hampshire annual report timing, late-fee rules, one-click filing, and the separate nonprofit report cycle using New Hampshire Department of State sources.",
    state: "New Hampshire",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "New Hampshire annual report", href: null }
    ],
    heroTitle: "New Hampshire annual report and annual fee deadline",
    heroSubtitle:
      "Use this page if you need the recurring New Hampshire filing rule. Start by separating the annual report or annual fee that most business entities file by April 1 from the nonprofit report, which runs on a five-year December 31 cycle.",
    heroActions: [
      {
        href: "https://sos.nh.gov/corporation-ucc-securities/corporation/online-business-services",
        label: "Open NH annual report guidance",
        variant: "primary"
      },
      {
        href: "https://quickstart.sos.nh.gov/online/OneClickAnnualReport",
        label: "Open NH one-click filing",
        variant: "secondary"
      }
    ],
    lastReviewed: "May 25, 2026",
    sourceBadge: "Source: New Hampshire Department of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Main annual lane",
        text: "Corporations, LLCs, PLLCs, consumer cooperatives, and business trusts use an annual report or annual fee due by April 1 each year following registration."
      },
      {
        label: "Published late fee",
        text: "New Hampshire says a $50 late fee is assessed for annual reports and fees received after April 1."
      },
      {
        label: "Status consequence",
        text: "Domestic entities fall out of good standing after the miss and can be administratively dissolved after repeated non-filing, while foreign entities can be administratively suspended and nonprofits use a separate five-year report cycle."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              The trap in New Hampshire is assuming every recurring filing uses the same annual
              calendar. Most business entities do use April 1, but the nonprofit report is a
              separate five-year lane and should not be mixed into the standard corporation or LLC
              answer.
            </p>`,
    caseCards: [
      {
        label: "Corporation or LLC",
        title: "Most New Hampshire businesses use the April 1 annual lane",
        text: "The state's online guidance says the annual report and filing fee for many business entity types is due by April 1 each year following registration."
      },
      {
        label: "No-change filing",
        title: "One-click filing is available when the record has not changed",
        text: "NH QuickStart offers a one-click annual report path when there are no business or principal-information changes to update."
      },
      {
        label: "Nonprofit report",
        title: "Nonprofits use a different cycle entirely",
        text: "Domestic and foreign nonprofits file a nonprofit report and fee due by December 31 every five years, not the annual April 1 business-entity lane."
      },
      {
        label: "Already late",
        title: "New Hampshire does not let you waive the late fee",
        text: "The state says the late fee is not waived, skipped years must be cleared in order, and suspended or dissolved records should be handled before you assume the normal filing answer is enough."
      }
    ],
    sourceLinks: [
      {
        href: "https://sos.nh.gov/corporation-division",
        label: "New Hampshire Corporation Division"
      },
      {
        href: "https://sos.nh.gov/corporation-ucc-securities/corporation/online-business-services",
        label: "New Hampshire online business services and annual report FAQ"
      },
      {
        href: "https://quickstart.sos.nh.gov/online/Account/LoginPage?LoginType=FileAnnualReport",
        label: "NH QuickStart annual report login"
      },
      {
        href: "https://quickstart.sos.nh.gov/online/OneClickAnnualReport",
        label: "NH QuickStart one-click annual report"
      },
      {
        href: "https://sos.nh.gov/contact-us",
        label: "New Hampshire Department of State contact page"
      },
      {
        href: "https://sos.nh.gov/media/5t1hy1je/notarycam-inc.pdf",
        label: "New Hampshire official filing example noting the annual report and annual fee rule"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/rhode-island/annual-report-deadline/index.html",
    titleTag: "Rhode Island Annual Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "Rhode Island annual report fee and deadline guidance covering the February 1 to May 1 filing period, $50 business-entity fee lane, $20 nonprofit lane, and $25 late-penalty language.",
    canonicalUrl: "https://finlogichub5.com/tools/rhode-island/annual-report-deadline/",
    ogTitle: "Rhode Island Annual Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review Rhode Island annual report timing, LLC and corporation fee lanes, nonprofit pricing, and the published late-penalty language using Rhode Island official filing sources.",
    state: "Rhode Island",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "Rhode Island annual report", href: null }
    ],
    heroTitle: "Rhode Island annual report fee and deadline",
    heroSubtitle:
      "Use this page if you need the Rhode Island annual report deadline or fee. Start with the filing period because Rhode Island opens the annual report from February 1 through May 1, then splits the price between the standard $50 business-entity lane and the lower $20 nonprofit lane.",
    heroActions: [
      {
        href: "https://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx",
        label: "Open Rhode Island business search",
        variant: "primary"
      },
      {
        href: "https://business.sos.ri.gov/corp/asp/OnlineHelp.asp",
        label: "Read Rhode Island filing help",
        variant: "secondary"
      }
    ],
    lastReviewed: "May 25, 2026",
    sourceBadge: "Source: Rhode Island Department of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Main filing period",
        text: "Rhode Island annual reports use a February 1 through May 1 filing period."
      },
      {
        label: "Business-entity fee lane",
        text: "The current Rhode Island corporation and LLC annual report forms show a $50 filing fee."
      },
      {
        label: "If already late",
        text: "The current Rhode Island annual report forms say a $25 penalty fee applies when the report is not filed within the statutory period stated on the form."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              Rhode Island is one of the cleaner states in this batch because the current annual
              report forms spell out the filing period, fee, and late-penalty language directly on
              the official form itself.
            </p>`,
    caseCards: [
      {
        label: "Business corporation",
        title: "Corporations use the $50 annual report lane",
        text: "The current Rhode Island business and foreign corporation annual report forms both show the February 1 to May 1 filing period with a $50 filing fee."
      },
      {
        label: "LLC",
        title: "LLCs share the same seasonal filing window",
        text: "Rhode Island LLC annual report forms use the same February 1 to May 1 period as corporations and also show the $50 filing fee."
      },
      {
        label: "Nonprofit corporation",
        title: "Nonprofits still file annually, but the fee is lower",
        text: "The current Rhode Island nonprofit annual report form shows the same filing period but uses the lower $20 filing fee."
      },
      {
        label: "Online filing",
        title: "Online filing can add an access fee that is separate from the state filing fee",
        text: "Rhode Island's online filing help explains that enhanced access fees are charged by the portal vendor and are separate from the state's own filing fee."
      }
    ],
    sourceLinks: [
      {
        href: "https://business.sos.ri.gov/corp/asp/OnlineHelp.asp",
        label: "Rhode Island online filing help"
      },
      {
        href: "https://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx",
        label: "Rhode Island business search portal"
      },
      {
        href: "https://business.sos.ri.gov/CORP_DRIVE1/2025/0115/000000000/0704/backup/202562609350_1.pdf",
        label: "Rhode Island business corporation annual report form example"
      },
      {
        href: "https://business.sos.ri.gov/CORP_DRIVE1/2025/0326/000000000/9972/backup/202568318210_1.pdf",
        label: "Rhode Island LLC annual report form example"
      },
      {
        href: "https://business.sos.ri.gov/CORP_DRIVE1/2025/0418/000000000/8809/202570530310_1.pdf",
        label: "Rhode Island nonprofit annual report form example"
      },
      {
        href: "https://docs.sos.ri.gov/DocumentLibrarySearch",
        label: "Rhode Island document library"
      }
    ],
    scriptSrc: null
  },
  {
    filePath: "tools/south-dakota/annual-report-deadline/index.html",
    titleTag: "South Dakota Annual Report Fee and Deadline | FinLogic Hub",
    metaDescription:
      "South Dakota annual report fee and deadline guidance covering anniversary-month timing, current corporation and LLC paper-form fee lanes, delinquency timing, and reinstatement basics.",
    canonicalUrl: "https://finlogichub5.com/tools/south-dakota/annual-report-deadline/",
    ogTitle: "South Dakota Annual Report Fee and Deadline | FinLogic Hub",
    ogDescription:
      "Review South Dakota annual report timing, current corporation and LLC fee forms, delinquency timing, and reinstatement rules using South Dakota Secretary of State sources.",
    state: "South Dakota",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "States", href: "/states.html" },
      { label: "South Dakota annual report", href: null }
    ],
    heroTitle: "South Dakota annual report fee and deadline",
    heroSubtitle:
      "Use this page if you need the South Dakota annual report deadline or fee. Start with the anniversary month and the entity type because South Dakota lets businesses file two months early, but the current paper-form fee lane differs between corporations, LLCs, and nonprofits.",
    heroActions: [
      {
        href: "https://sdsos.gov/business-services/corporations/contact.aspx",
        label: "Open South Dakota annual report FAQ",
        variant: "primary"
      },
      {
        href: "https://sdsos.gov/general-information/filing-fees.aspx/1000",
        label: "Check South Dakota fee schedule",
        variant: "secondary"
      }
    ],
    lastReviewed: "May 25, 2026",
    sourceBadge: "Source: South Dakota Secretary of State",
    summaryTitle: "At a glance",
    metrics: [
      {
        label: "Headline due rule",
        text: "South Dakota annual reports are due every year on the first day of the anniversary month, and the state allows filing starting two months before that due date."
      },
      {
        label: "Current paper-form fees",
        text: "The current South Dakota domestic LLC form shows a $65 filing fee, while current corporation paper forms show a $70 filing fee."
      },
      {
        label: "Late-state timing",
        text: "The entity becomes delinquent if the annual report still is not filed two months after the due date, and the record can eventually move into administrative dissolution or reinstatement work."
      }
    ],
    summaryNoteHtml: `<p class="table-note">
              South Dakota is worth reading carefully right now because the state announced a 2025
              filing-fee increase and the most current form set is the safest place to confirm the
              exact amount before you pay.
            </p>`,
    caseCards: [
      {
        label: "Corporation",
        title: "Corporations use the current $70 paper-form lane",
        text: "The current South Dakota corporation annual report forms show a $70 filing fee and a separate delinquent-report amount on the form."
      },
      {
        label: "LLC",
        title: "The current LLC paper form uses a different fee lane",
        text: "The current domestic LLC annual report form shows a $65 filing fee, so the corporation amount should not be reused for LLC planning."
      },
      {
        label: "Nonprofit corporation",
        title: "Nonprofits still file, but use the low-fee lane",
        text: "South Dakota's fee schedule keeps nonprofit annual reports at $10 and the FAQ says nonprofits are exempt from the additional delinquent late fee."
      },
      {
        label: "Already late",
        title: "The two-month delinquency point matters",
        text: "Once the report remains unfiled two months after the due date, South Dakota marks the record delinquent and the entity can slide into dissolution, revocation, or reinstatement work."
      }
    ],
    sourceLinks: [
      {
        href: "https://sdsos.gov/business-services/corporations/contact.aspx",
        label: "South Dakota business services and annual report FAQ"
      },
      {
        href: "https://sdsos.gov/general-information/filing-fees.aspx/1000",
        label: "South Dakota filing fee schedule"
      },
      {
        href: "https://sdsos.gov/about-the-office/assets/Press%20Releases/BusinessServices.pdf",
        label: "South Dakota 2025 business filing fee change notice"
      },
      {
        href: "https://sdsos.gov/docs/business/domesticannualreport20250701.pdf",
        label: "South Dakota current domestic corporation annual report form"
      },
      {
        href: "https://sdsos.gov/docs/business/corpforeignannualreport20250701.pdf",
        label: "South Dakota current foreign corporation annual report form"
      },
      {
        href: "https://sdsos.gov/docs/business/llc-domestic-annualreport.pdf",
        label: "South Dakota domestic LLC annual report form"
      }
    ],
    scriptSrc: null
  }
];

export const lateMayExpansionStateDirectory = [
  {
    state: "Iowa",
    route: "/tools/iowa/biennial-report-deadline/",
    guideLabel: "Iowa biennial report fee and deadline",
    chipLabel: "Iowa biennial",
    guideType: "Biennial report guide",
    coverageBucket: "recurring-fees-and-statements",
    featuredInHomeNav: false,
    homeCardDescription:
      "Odd-versus-even Iowa filing years, current corporation and LLC fee splits, nonprofit exceptions, and the August dissolution risk.",
    directoryCardDescription:
      "Iowa biennial report timing, corporation and LLC fee lanes, nonprofit exceptions, and the delinquency path that can run into August.",
    homeComparison: {
      focus: "Iowa LLC or LLP",
      deadline: "Odd-numbered years between January 1 and April 1",
      fee: "$30 online or $45 paper",
      lateRule: "Delinquency notice after the miss, then dissolution or revocation if the report still is not filed by August"
    },
    directoryComparison: {
      obligation: "Biennial report",
      entityFocus: "Profit corporations, LLCs, LLPs, and nonprofit corporations",
      deadline: "January 1 through April 1 in an odd or even year depending on entity type",
      amount: "$60 for profit corporations, $30 online or $45 paper for many LLC and LLP filings, or no fee for nonprofits"
    }
  },
  {
    state: "Nebraska",
    route: "/tools/nebraska/annual-biennial-report-deadline/",
    guideLabel: "Nebraska annual and biennial report fee and deadline",
    chipLabel: "Nebraska split lanes",
    guideType: "Annual and biennial report guide",
    coverageBucket: "recurring-fees-and-statements",
    featuredInHomeNav: false,
    homeCardDescription:
      "Even-year corporation occupation-tax reports, odd-year LLC and nonprofit biennials, LLP annual reports, and Nebraska's dissolution or reinstatement path.",
    directoryCardDescription:
      "Nebraska annual and biennial report timing, common LLC fee lane, and the separate rules for corporations, nonprofits, and LLPs.",
    homeComparison: {
      focus: "Nebraska LLC",
      deadline: "Odd-numbered years by April 1",
      fee: "$28 online common SOS lane",
      lateRule: "Delinquent June 16, then administrative dissolution or revocation if still unresolved"
    },
    directoryComparison: {
      obligation: "Annual report, biennial report, or biennial occupation tax report",
      entityFocus: "Business corporations, LLCs, nonprofits, LLPs, and benefit corporations",
      deadline: "March 1 or April 1 depending on entity type, with separate annual-benefit-report timing for benefit corporations",
      amount: "Common $28 online Nebraska LLC biennial report lane, with separate $30 or reinstatement fee paths on other entity types"
    }
  },
  {
    state: "New Hampshire",
    route: "/tools/new-hampshire/annual-report-deadline/",
    guideLabel: "New Hampshire annual report and annual fee deadline",
    chipLabel: "NH April 1 lane",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "April 1 annual report or annual fee timing, one-click filing, the published $50 late fee, and the separate five-year nonprofit report cycle.",
    directoryCardDescription:
      "New Hampshire annual report timing, one-click filing, the $50 late fee, domestic-versus-foreign status effects, and the separate nonprofit schedule.",
    homeComparison: {
      focus: "New Hampshire corporation or LLC",
      deadline: "April 1 each year following registration",
      fee: "Common $100 annual report or annual fee lane for many business entities",
      lateRule: "$50 late fee after April 1, then not-in-good-standing, dissolution, or suspension risk"
    },
    directoryComparison: {
      obligation: "Annual report or annual fee, plus a separate five-year nonprofit report lane",
      entityFocus: "Corporations, LLCs, PLLCs, business trusts, and domestic or foreign nonprofits",
      deadline: "April 1 each year for many business entities, or December 31 every five years for nonprofits",
      amount: "Common $100 annual report or annual fee lane for many standard business entities, with the late fee added after April 1"
    }
  },
  {
    state: "Rhode Island",
    route: "/tools/rhode-island/annual-report-deadline/",
    guideLabel: "Rhode Island annual report fee and deadline",
    chipLabel: "RI annual report",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "February through May filing period, $50 business-entity lane, $20 nonprofit lane, and the current $25 penalty language on Rhode Island forms.",
    directoryCardDescription:
      "Rhode Island annual report timing, corporation and LLC fees, nonprofit pricing, and the official late-penalty language printed on current forms.",
    homeComparison: {
      focus: "Rhode Island LLC or business corporation",
      deadline: "February 1 through May 1",
      fee: "$50",
      lateRule: "$25 penalty language appears on the current annual report forms"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Business corporations, LLCs, foreign corporations, and nonprofits",
      deadline: "February 1 through May 1",
      amount: "$50 for business corporations and LLCs, or $20 for nonprofits"
    }
  },
  {
    state: "South Dakota",
    route: "/tools/south-dakota/annual-report-deadline/",
    guideLabel: "South Dakota annual report fee and deadline",
    chipLabel: "SD anniversary rule",
    guideType: "Annual report guide",
    coverageBucket: "annual-reports",
    featuredInHomeNav: false,
    homeCardDescription:
      "Anniversary-month timing, current corporation and LLC paper-form fee lanes, the two-month delinquency trigger, and South Dakota reinstatement basics.",
    directoryCardDescription:
      "South Dakota annual report due dates, current paper-form fee lanes, delinquency timing, and the dissolution or reinstatement path.",
    homeComparison: {
      focus: "South Dakota domestic LLC",
      deadline: "First day of the anniversary month",
      fee: "$65 current paper-form lane",
      lateRule: "Delinquency starts two months after the due date, and the entity can move toward dissolution if the report still is not filed"
    },
    directoryComparison: {
      obligation: "Annual report",
      entityFocus: "Corporations, LLCs, LLPs, cooperatives, and nonprofits",
      deadline: "Every year on the first day of the anniversary month, with filing available two months early",
      amount: "Current paper forms show $70 for corporations, $65 for domestic LLCs, and $10 for nonprofits"
    }
  }
];

export const lateMayExpansionStructuredStateContentByFilePath = {
  "tools/iowa/biennial-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Odd-year and even-year split",
      title: "Iowa changes both the filing year and the fee lane by entity type",
      headers: ["Entity type", "Filing year and window", "Published amount", "What to watch"],
      rows: [
        [
          "Profit corporation",
          "Even-numbered years between January 1 and April 1",
          "$60",
          "This is the cleanest Iowa corporation lane and it does not share the LLC or nonprofit calendar."
        ],
        [
          "LLC or LLP",
          "Odd-numbered years between January 1 and April 1",
          "$30 online or $45 paper",
          "The online lane is cheaper, but the filing year still changes with the entity type."
        ],
        [
          "Nonprofit corporation",
          "Odd-numbered years between January 1 and April 1",
          "No filing fee",
          "The due window matches the LLC and LLP lane, but the state says nonprofits do not owe the report fee."
        ],
        [
          "Already-delinquent record",
          "Resolve the missed filing before August if possible",
          "Current report fee plus any reinstatement work later if the record is dissolved or revoked",
          "Iowa sends a delinquency notice after the deadline and warns that the record can be dissolved or revoked by August."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Late and filing-path notes",
      title: "Iowa's real traps are skipped years and the August cutoff",
      cards: [
        {
          title: "You cannot jump ahead to the current report and ignore the missed one",
          text: "Iowa's online guidance says a prior missed biennial report must be filed first before you can clear the current report."
        },
        {
          title: "The delinquency notice is not the end of the problem",
          text: "If the report still is not filed after the state's delinquency notice, Iowa says the entity will be dissolved or revoked in August."
        },
        {
          title: "Fast Track Filing is the simplest official path",
          text: "The state points filers to Fast Track Filing for biennial reports, and the same portal helps pull the correct report type before payment."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Iowa biennial report details",
      headers: ["Question", "Iowa answer used here"],
      rows: [
        [
          "What if the business is a professional corporation?",
          "Iowa's forms-and-fees page says professional corporations file the biennial report with the required statement under oath."
        ],
        [
          "Does paper filing cost more?",
          "Yes. Iowa's guidance says many LLC and LLP biennial reports cost $30 online or $45 by paper."
        ],
        [
          "Who gets the zero-dollar lane?",
          "The state says nonprofit corporations do not have to pay a filing fee for the biennial report."
        ],
        [
          "Where should you file?",
          "Use the Iowa Fast Track Filing portal or the report form generated from the state walkthrough if you need the paper path."
        ]
      ]
    }
  ],
  "tools/nebraska/annual-biennial-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Three recurring lanes",
      title: "Nebraska uses different due dates for corporations, LLCs, nonprofits, and LLPs",
      headers: ["Entity type", "Due rule", "Published amount used here", "What to watch"],
      rows: [
        [
          "Business corporation or professional corporation",
          "Biennial occupation tax report in even-numbered years by March 1, delinquent April 15",
          "Check the current corporation fee schedule and occupation tax lane",
          "This is not the April LLC calendar, and missing the delinquency date can move the record toward revocation or dissolution."
        ],
        [
          "LLC or PLLC",
          "Biennial report in odd-numbered years by April 1, delinquent June 16",
          "$28 online common SOS lane for LLC filings",
          "Nebraska's current warning about misleading mailers uses this $28 online number directly."
        ],
        [
          "Domestic or foreign nonprofit corporation",
          "Biennial report in odd-numbered years by April 1, delinquent June 16",
          "Use the current nonprofit fee schedule lane",
          "Nonprofits match the LLC calendar, not the even-year corporation lane."
        ],
        [
          "Domestic or foreign LLP",
          "Annual report every year by April 1, delinquent June 16",
          "Use the current LLP annual report fee lane",
          "LLPs stay annual even though Nebraska puts many other entities on biennial cycles."
        ],
        [
          "Benefit corporation",
          "Annual benefit report due within 120 days after the fiscal year end",
          "$30 in-office or $25 online",
          "Nebraska benefit corporations use their own annual report lane rather than the regular corporation occupation-tax cycle."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Late and notice traps",
      title: "Nebraska's official guidance centers on delinquency and reinstatement",
      cards: [
        {
          title: "Missing the delinquency date can end active status",
          text: "Nebraska says a company that does not file its annual or biennial report by the delinquency date can be administratively dissolved or revoked."
        },
        {
          title: "The LLC online fee is a useful current anchor number",
          text: "Nebraska's warning about deceptive LLC report mailers says LLCs can file their biennial report online for $28 through the official site."
        },
        {
          title: "Reinstatement is a separate project, not just a late report",
          text: "Nebraska's reinstatement guidance says dissolved or revoked records must use the reinstatement path to get authority back, and some late reinstatement lanes are much more expensive."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Nebraska recurring-filing details",
      headers: ["Question", "Nebraska answer used here"],
      rows: [
        [
          "How do you know whether the report is annual or biennial?",
          "Use the entity type first: business corporations are even-year biennial filers, LLCs and nonprofits are odd-year biennial filers, and LLPs file annual reports."
        ],
        [
          "Where does the common LLC online price come from?",
          "The Secretary of State's current warning on misleading biennial-report mailers says Nebraska LLCs can file online for $28."
        ],
        [
          "What if the record is already dissolved or revoked?",
          "Use Nebraska's reinstatement information page before paying because the regular report answer is no longer enough by itself."
        ],
        [
          "What happens if the registered agent information is stale?",
          "Nebraska's new-business guidance says keeping the registered agent current matters because reporting notices and good-standing problems flow through that record."
        ]
      ]
    }
  ],
  "tools/new-hampshire/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Annual lane versus nonprofit lane",
      title: "New Hampshire separates standard business annual reports from the five-year nonprofit report",
      headers: ["Entity lane", "Due rule", "Amount used here", "What to watch"],
      rows: [
        [
          "Corporation, professional corporation, LLC, PLLC, consumer cooperative, or business trust",
          "Annual report or annual fee due by April 1 each year following registration",
          "Common $100 annual report or annual fee lane for many business entities",
          "The state says the full fee must accompany the report and the late fee is assessed after April 1."
        ],
        [
          "Domestic nonprofit corporation",
          "Nonprofit report and fee due by December 31 every five years",
          "Use the current nonprofit fee on the state report form",
          "This is not the same cycle as the annual corporation or LLC lane."
        ],
        [
          "Foreign nonprofit corporation",
          "Nonprofit report and fee due by December 31 every five years",
          "Use the current foreign nonprofit report fee lane",
          "Foreign nonprofits move toward administrative suspension instead of using the ordinary annual-report answer."
        ],
        [
          "Already past due",
          "Clear prior-year reports before you rely on the current-year answer",
          "Current fee plus the published $50 late fee",
          "New Hampshire says you cannot skip a year and the late fee is not waived."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Late and filing-path notes",
      title: "The safest New Hampshire shortcuts are one-click filing and not skipping prior years",
      cards: [
        {
          title: "One-click filing works for no-change records",
          text: "NH QuickStart offers a one-click annual report option when there are no business or principal-information changes to update."
        },
        {
          title: "The late fee is not waived",
          text: "New Hampshire's online business services FAQ says the annual report is due by April 1 and the $50 late fee is not waived."
        },
        {
          title: "Domestic and foreign status penalties are different",
          text: "The state says domestic records move into not-in-good-standing and then dissolution after repeated misses, while foreign records can be suspended after the missed annual report or annual fee remains unresolved."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful New Hampshire annual report details",
      headers: ["Question", "New Hampshire answer used here"],
      rows: [
        [
          "What if nothing changed since last year?",
          "The state says you still must file a completed annual report with full information as of January 1 and cannot simply reference the prior year."
        ],
        [
          "Can you pay later after filing the report?",
          "No. New Hampshire says the annual report must be accompanied by the full fee due."
        ],
        [
          "How do you get a paper report form?",
          "The state directs users to request a paper annual report, annual fee, or nonprofit report through the Corporation Division or NH QuickStart."
        ],
        [
          "Where should you file online?",
          "Use the NH QuickStart annual report login or the one-click annual report path when the record qualifies."
        ]
      ]
    }
  ],
  "tools/rhode-island/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Common filing period",
      title: "Rhode Island annual report forms keep the season simple but split the fee by entity type",
      headers: ["Entity type", "Filing period", "Published amount", "What to watch"],
      rows: [
        [
          "Business corporation",
          "February 1 through May 1",
          "$50",
          "The current business corporation form also states the $25 penalty language for late filing."
        ],
        [
          "Foreign business corporation",
          "February 1 through May 1",
          "$50",
          "The foreign corporation form uses the same seasonal window and the same penalty language."
        ],
        [
          "LLC",
          "February 1 through May 1",
          "$50",
          "The LLC form mirrors the business corporation filing season and the same $25 late-penalty language."
        ],
        [
          "Nonprofit corporation",
          "February 1 through May 1",
          "$20",
          "The nonprofit form keeps the same filing period but uses the lower fee lane."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Penalty and portal notes",
      title: "Rhode Island's filing forms are the strongest source set for timing and penalties",
      cards: [
        {
          title: "The current forms state the filing period directly",
          text: "Rhode Island's current annual report forms for corporations, LLCs, and nonprofits all print the February 1 through May 1 filing period on the form."
        },
        {
          title: "The same forms also print the late-penalty language",
          text: "The current forms say a $25 penalty fee applies when the annual report is not filed within the statutory period stated on the form."
        },
        {
          title: "Online filing can add a vendor access charge",
          text: "Rhode Island's online filing help says enhanced access fees are charged to support the RI.gov service and are separate from the state's own filing fee."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful Rhode Island annual report details",
      headers: ["Question", "Rhode Island answer used here"],
      rows: [
        [
          "Where do you confirm the live record before filing?",
          "Use the Rhode Island business search portal to review the entity record and filing history before you start the annual report."
        ],
        [
          "How do online filings get paid?",
          "Rhode Island's online filing help says online filings that carry a fee are paid by credit card."
        ],
        [
          "Can you avoid the extra online access charge?",
          "Yes. Rhode Island says paper filing by mail or in person is available if you do not want to use the online filing path."
        ],
        [
          "Which fee lane is different from the main business-entity answer?",
          "The nonprofit corporation form uses a $20 filing fee rather than the $50 lane shown on current corporation and LLC forms."
        ]
      ]
    }
  ],
  "tools/south-dakota/annual-report-deadline/index.html": [
    {
      type: "table",
      eyebrow: "Anniversary-month rule",
      title: "South Dakota annual reports keep the same timing rule but not the same fee lane",
      headers: ["Entity type", "Due rule", "Current amount used here", "What to watch"],
      rows: [
        [
          "Domestic or foreign corporation",
          "Every year on the first day of the anniversary month, with filing open two months early",
          "$70 on the current corporation paper form",
          "The current corporation form also prints a separate delinquent-report amount."
        ],
        [
          "Domestic LLC",
          "Every year on the first day of the anniversary month, with filing open two months early",
          "$65 on the current domestic LLC paper form",
          "The LLC lane should not be assumed to match the corporation paper-form fee."
        ],
        [
          "LLP",
          "Every year on the first day of the anniversary month, with filing open two months early",
          "Use the current LLP fee lane from the fee schedule and report form",
          "The annual due rule is the same, but the entity-specific fee should still be confirmed from the matching form."
        ],
        [
          "Nonprofit corporation",
          "Every year on the first day of the anniversary month",
          "$10 fee schedule lane",
          "The FAQ says nonprofits must still file annual reports but are exempt from the additional delinquent late fee."
        ]
      ]
    },
    {
      type: "detailCards",
      eyebrow: "Delinquency and fee-change notes",
      title: "The practical South Dakota issues are timing, delinquency, and form freshness",
      cards: [
        {
          title: "The record becomes delinquent two months after the due date",
          text: "South Dakota's annual report FAQ says the business becomes delinquent and starts incurring late fees if the report still is not filed two months after the due date."
        },
        {
          title: "South Dakota announced a 2025 fee increase",
          text: "The Secretary of State's June 27, 2025 notice says annual report and amended annual report filing fees increased by $5 beginning July 1, 2025, which is why the current forms are the safest fee source."
        },
        {
          title: "Continued non-filing can turn into dissolution or reinstatement",
          text: "South Dakota says a delinquent entity that keeps missing annual reports can be administratively dissolved or revoked and then must use the reinstatement path."
        }
      ]
    },
    {
      type: "table",
      eyebrow: "Practical notes",
      title: "Useful South Dakota annual report details",
      headers: ["Question", "South Dakota answer used here"],
      rows: [
        [
          "When can the report be filed?",
          "South Dakota says the annual report can be filed starting two months before the anniversary-month due date."
        ],
        [
          "Who does not file an annual report?",
          "The FAQ says limited partnerships and business trusts are not required to file annual reports."
        ],
        [
          "How do nonprofits fit into the late-fee rule?",
          "South Dakota says nonprofits are exempt from the additional delinquent annual-report fee, even though they still must file the annual report itself."
        ],
        [
          "Why should you trust the latest form more than an older summary page?",
          "South Dakota announced a mid-2025 annual report filing-fee increase, so the current entity-matched form is the safest place to confirm the exact amount before payment."
        ]
      ]
    }
  ]
};

export const lateMayExpansionGuideEvidenceByRoute = {
  "/tools/iowa/biennial-report-deadline/": {
    filingLabel: [1, 2],
    whoShouldUse: [1, 2, 3],
    headlineDueDate: [1, 2, 6],
    mainAmountShown: [1, 2],
    ifAlreadyLate: [3, 4]
  },
  "/tools/nebraska/annual-biennial-report-deadline/": {
    filingLabel: [1, 2, 3],
    whoShouldUse: [1, 3],
    headlineDueDate: [1],
    mainAmountShown: [2, 5],
    ifAlreadyLate: [1, 4]
  },
  "/tools/new-hampshire/annual-report-deadline/": {
    filingLabel: [1, 2, 6],
    whoShouldUse: [1, 2],
    headlineDueDate: [2, 6],
    mainAmountShown: [2, 6],
    ifAlreadyLate: [2]
  },
  "/tools/rhode-island/annual-report-deadline/": {
    filingLabel: [3, 4, 5],
    whoShouldUse: [1, 2, 3, 4, 5],
    headlineDueDate: [3, 4, 5],
    mainAmountShown: [3, 4, 5],
    ifAlreadyLate: [3, 4, 5]
  },
  "/tools/south-dakota/annual-report-deadline/": {
    filingLabel: [1, 4, 5, 6],
    whoShouldUse: [1, 4, 5, 6],
    headlineDueDate: [1],
    mainAmountShown: [2, 3, 4, 5, 6],
    ifAlreadyLate: [1, 4, 5]
  }
};

export const lateMayExpansionGuideDecisionToolByRoute = {
  "/tools/iowa/biennial-report-deadline/": decisionTool({
    caseLabel: "Which Iowa biennial report lane fits best?",
    intro:
      "Iowa's core split is entity type. The practical first step is deciding whether the business is a profit corporation in an even year or an LLC, LLP, or nonprofit in an odd year.",
    cases: [
      decisionCase({
        value: "profit-corporation",
        label: "Profit corporation",
        deadline: "Even-numbered years between January 1 and April 1",
        amount: "$60",
        normalRule:
          "Iowa profit corporations use the even-numbered-year biennial report lane and the published $60 filing fee.",
        lateRule:
          "If the corporation misses the April filing window, Iowa sends a delinquency notice and can dissolve or revoke the record by August if the report still is not filed.",
        confirmRule:
          "Confirm that the entity is actually a profit corporation and not an LLC or nonprofit before relying on the even-year Iowa rule.",
        nextAction:
          "Use Iowa's forms-and-fees page and Fast Track Filing before paying.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [3, 4],
        confirmSourceIndexes: [1, 3]
      }),
      decisionCase({
        value: "llc-or-llp",
        label: "LLC or LLP",
        deadline: "Odd-numbered years between January 1 and April 1",
        amount: "$30 online or $45 paper",
        normalRule:
          "Iowa LLCs and LLPs use the odd-numbered-year biennial report lane and commonly pay the lower online fee through Fast Track Filing.",
        lateRule:
          "Once the Iowa LLC or LLP report is missed, the delinquency notice and possible August dissolution or revocation become the next practical problem.",
        confirmRule:
          "Confirm both the entity type and the filing year before relying on the Iowa LLC or LLP fee lane.",
        nextAction:
          "Open Fast Track Filing and the Iowa biennial report walkthrough before filing.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [3, 4],
        confirmSourceIndexes: [1, 6]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "Odd-numbered years between January 1 and April 1",
        amount: "$0 filing fee",
        normalRule:
          "Iowa nonprofit corporations still file biennial reports in odd-numbered years, but the state says nonprofits do not pay the filing fee.",
        lateRule:
          "A missed Iowa nonprofit biennial report can still run into delinquency and later dissolution even though the report itself does not carry the standard fee.",
        confirmRule:
          "Confirm that the business is a nonprofit corporation before relying on the no-fee Iowa answer.",
        nextAction:
          "Use Iowa's forms-and-fees page and report-frequency help page before filing.",
        sourceIndexes: [1, 3, 6],
        lateSourceIndexes: [3, 4],
        confirmSourceIndexes: [1, 6]
      }),
      decisionCase({
        value: "already-late",
        label: "Already late",
        deadline: "Resolve the missed report before Iowa reaches the August dissolution or revocation stage",
        amount: "Current report fee plus any reinstatement work later if the record is already dissolved or revoked",
        normalRule:
          "Once the Iowa report is already overdue, the normal odd-year or even-year answer is no longer enough by itself because the delinquency notice is already in motion.",
        lateRule:
          "Iowa says an unresolved biennial report miss can end in dissolution or revocation in August, so overdue records should be corrected before assuming the problem is only a small late fee.",
        confirmRule:
          "Check whether the business is only delinquent or already dissolved or revoked before paying the normal report lane.",
        nextAction:
          "Use Iowa's missed-report guidance and Fast Track Filing before submitting anything.",
        sourceIndexes: [3, 4, 5],
        lateSourceIndexes: [3, 4],
        confirmSourceIndexes: [3, 4]
      })
    ]
  }),
  "/tools/nebraska/annual-biennial-report-deadline/": decisionTool({
    caseLabel: "Which Nebraska recurring filing lane fits best?",
    intro:
      "Nebraska is easiest to get right when you split the answer into corporation, LLC or nonprofit, and LLP lanes before you talk about dates or amounts.",
    cases: [
      decisionCase({
        value: "corporation-occupation-tax",
        label: "Business or professional corporation",
        deadline: "Even-numbered years by March 1, delinquent April 15",
        amount: "Use the current corporation occupation-tax fee lane",
        normalRule:
          "Nebraska business and professional corporations use the even-numbered-year biennial occupation tax report rather than the April LLC or nonprofit calendar.",
        lateRule:
          "If the corporation misses the March 1 deadline and the April 15 delinquency date, Nebraska can move the record into administrative revocation or dissolution and later reinstatement work.",
        confirmRule:
          "Confirm that the entity is actually a business or professional corporation before relying on the Nebraska occupation-tax lane.",
        nextAction:
          "Use Nebraska's annual and biennial reporting guide plus the forms-and-fee page before filing.",
        sourceIndexes: [1, 2, 3],
        lateSourceIndexes: [1, 4],
        confirmSourceIndexes: [1, 3]
      }),
      decisionCase({
        value: "llc-biennial",
        label: "LLC or PLLC",
        deadline: "Odd-numbered years by April 1, delinquent June 16",
        amount: "$28 online common Nebraska SOS lane",
        normalRule:
          "Nebraska LLCs and PLLCs file biennial reports in odd-numbered years, and the Secretary of State's current warning uses $28 as the online LLC filing number.",
        lateRule:
          "Once the Nebraska LLC misses the June 16 delinquency date, the record can be dissolved or revoked and later need reinstatement instead of a simple catch-up filing.",
        confirmRule:
          "Confirm that the entity is an LLC or PLLC and not a corporation or LLP before relying on the April 1 biennial lane.",
        nextAction:
          "Use the Nebraska reporting guide and the SOS warning on misleading mailers before paying.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [1, 4],
        confirmSourceIndexes: [1, 5]
      }),
      decisionCase({
        value: "nonprofit-biennial",
        label: "Nonprofit corporation",
        deadline: "Odd-numbered years by April 1, delinquent June 16",
        amount: "Use the current nonprofit biennial fee lane",
        normalRule:
          "Nebraska nonprofits match the odd-year April 1 biennial cycle used by LLCs rather than the even-year corporation occupation-tax lane.",
        lateRule:
          "A missed Nebraska nonprofit biennial report can still move the organization into administrative dissolution or revocation if the report remains unresolved after delinquency.",
        confirmRule:
          "Confirm that the record is a nonprofit corporation before using the odd-year April lane and the nonprofit fee schedule.",
        nextAction:
          "Open Nebraska's reporting guide and forms-and-fee page before filing.",
        sourceIndexes: [1, 2],
        lateSourceIndexes: [1, 4],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "llp-annual",
        label: "LLP annual report",
        deadline: "Every year by April 1, delinquent June 16",
        amount: "Use the current Nebraska LLP annual report fee lane",
        normalRule:
          "Nebraska LLPs use an annual report every year rather than a biennial cycle, even though many other entity types in the state are biennial.",
        lateRule:
          "If the LLP stays unresolved through the delinquency date, Nebraska can revoke or dissolve the record and force the problem into reinstatement work.",
        confirmRule:
          "Confirm that the business is actually an LLP before relying on the annual April rule instead of a biennial lane.",
        nextAction:
          "Use Nebraska's annual and biennial reporting guide before preparing the filing.",
        sourceIndexes: [1, 2],
        lateSourceIndexes: [1, 4],
        confirmSourceIndexes: [1]
      }),
      decisionCase({
        value: "already-late",
        label: "Already dissolved or revoked",
        deadline: "Start reinstatement review immediately",
        amount: "Current report plus Nebraska reinstatement fees, with some late reinstatement lanes far higher than standard filing fees",
        normalRule:
          "Once Nebraska has already removed the record from active status, the ordinary annual or biennial report answer is no longer enough by itself.",
        lateRule:
          "Nebraska's reinstatement guidance says dissolved or revoked records need the reinstatement path, and late reinstatement can become materially more expensive.",
        confirmRule:
          "Check whether the business is only delinquent or is already dissolved or revoked before sending payment.",
        nextAction:
          "Use Nebraska's reinstatement page before filing or mailing anything.",
        sourceIndexes: [4, 5],
        lateSourceIndexes: [4],
        confirmSourceIndexes: [1, 4]
      })
    ]
  }),
  "/tools/new-hampshire/annual-report-deadline/": decisionTool({
    caseLabel: "Which New Hampshire recurring filing lane fits best?",
    intro:
      "New Hampshire trips people up when they mix the normal April 1 annual report lane with the separate five-year nonprofit report lane or assume a missed year can be skipped.",
    cases: [
      decisionCase({
        value: "corporation-or-llc",
        label: "Corporation, LLC, or similar annual filer",
        deadline: "April 1 each year following registration",
        amount: "Common $100 annual report or annual fee lane for many business entities",
        normalRule:
          "New Hampshire's online guidance says many standard business entities use an annual report or annual fee due by April 1 each year following registration.",
        lateRule:
          "If the report or fee arrives after April 1, the state says a $50 late fee is assessed and the record falls out of good standing.",
        confirmRule:
          "Confirm that the record is one of the regular annual business-entity filers and not a nonprofit on the five-year report cycle.",
        nextAction:
          "Use the NH QuickStart annual report login or one-click filing path before paying.",
        sourceIndexes: [1, 2, 3, 4, 6],
        lateSourceIndexes: [2],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "nonprofit-five-year",
        label: "Domestic or foreign nonprofit",
        deadline: "December 31 every five years",
        amount: "Use the current nonprofit report fee lane from the state's report path",
        normalRule:
          "New Hampshire says domestic and foreign nonprofits use a nonprofit report and fee due by December 31 every five years rather than the standard April 1 annual lane.",
        lateRule:
          "If the nonprofit report is not filed, the state says the nonprofit can be administratively dissolved or suspended.",
        confirmRule:
          "Confirm that the entity is a nonprofit before relying on the five-year report cycle instead of the annual business-entity answer.",
        nextAction:
          "Use the online business services page and the Corporation Division before filing.",
        sourceIndexes: [1, 2, 5],
        lateSourceIndexes: [2],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "already-late-domestic",
        label: "Domestic record already late",
        deadline: "File the missed report as soon as possible",
        amount: "Current annual fee plus the $50 late fee",
        normalRule:
          "A domestic New Hampshire entity that misses the annual report or annual fee moves into not-in-good-standing status before the state later dissolves the record for repeated misses.",
        lateRule:
          "New Hampshire says domestic records fall out of good standing after the miss and can be administratively dissolved after failing to file for two consecutive years.",
        confirmRule:
          "Confirm whether the domestic entity is only late or is already dissolved before you rely on the ordinary annual filing path.",
        nextAction:
          "Use NH QuickStart, the annual report FAQ, and the annual reports contact path before filing.",
        sourceIndexes: [2, 3, 5],
        lateSourceIndexes: [2],
        confirmSourceIndexes: [2, 5]
      }),
      decisionCase({
        value: "already-late-foreign",
        label: "Foreign record already late",
        deadline: "Resolve the report or annual fee before the record is suspended further",
        amount: "Current annual fee plus the $50 late fee",
        normalRule:
          "Foreign New Hampshire registrations that require the annual report or annual fee follow the same April 1 rule as many domestic records.",
        lateRule:
          "The state says a foreign record that fails to file the current year's annual report or annual fee will be administratively suspended.",
        confirmRule:
          "Confirm that the registration is foreign and not domestic before relying on the suspension language instead of the domestic-dissolution track.",
        nextAction:
          "Use the online business services FAQ and NH QuickStart before making payment.",
        sourceIndexes: [2, 3],
        lateSourceIndexes: [2],
        confirmSourceIndexes: [2]
      })
    ]
  }),
  "/tools/rhode-island/annual-report-deadline/": decisionTool({
    caseLabel: "Which Rhode Island annual report lane fits best?",
    intro:
      "Rhode Island uses one main filing season, but the cleaner answer still starts with the entity type because the current forms split the fee between the standard business-entity lane and the lower nonprofit lane.",
    cases: [
      decisionCase({
        value: "business-corporation",
        label: "Business or foreign corporation",
        deadline: "February 1 through May 1",
        amount: "$50",
        normalRule:
          "The current Rhode Island corporation annual report forms use the February 1 through May 1 filing period and the $50 filing fee.",
        lateRule:
          "The current corporation forms say a $25 penalty fee applies when the annual report is not filed within the statutory period printed on the form.",
        confirmRule:
          "Confirm whether the record is a business corporation or a nonprofit before relying on the $50 Rhode Island corporation lane.",
        nextAction:
          "Use the Rhode Island business search and the current corporation form before filing.",
        sourceIndexes: [2, 3],
        lateSourceIndexes: [3],
        confirmSourceIndexes: [2, 3]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "February 1 through May 1",
        amount: "$50",
        normalRule:
          "The current Rhode Island LLC annual report form uses the same February 1 through May 1 filing period and the same $50 filing fee as the standard corporation lane.",
        lateRule:
          "The current LLC form says a $25 penalty fee applies when the Rhode Island annual report is not filed within the statutory period shown on the form.",
        confirmRule:
          "Confirm that the record is an LLC before relying on the Rhode Island LLC annual report form and fee lane.",
        nextAction:
          "Open the Rhode Island business search portal and the current LLC form before filing.",
        sourceIndexes: [2, 4],
        lateSourceIndexes: [4],
        confirmSourceIndexes: [2, 4]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "February 1 through May 1",
        amount: "$20",
        normalRule:
          "The current Rhode Island nonprofit annual report form uses the same seasonal filing period but a lower $20 filing fee.",
        lateRule:
          "The current nonprofit form also prints a $25 penalty fee for late filing under the statute cited on the form.",
        confirmRule:
          "Confirm that the entity is a nonprofit corporation before using the lower Rhode Island fee lane.",
        nextAction:
          "Use the current nonprofit form and the Rhode Island business portal before filing.",
        sourceIndexes: [2, 5],
        lateSourceIndexes: [5],
        confirmSourceIndexes: [2, 5]
      }),
      decisionCase({
        value: "online-filing",
        label: "Need the online filing path",
        deadline: "Use the same February 1 through May 1 reporting season",
        amount: "State filing fee plus any Rhode Island portal access charge",
        normalRule:
          "Rhode Island's online filing help says online filings use the same filing requirements as paper but can add an enhanced access fee through the portal vendor.",
        lateRule:
          "The online access charge is not the same thing as the late penalty, so overdue businesses should still confirm the statutory late amount from the current annual report form.",
        confirmRule:
          "Check whether you want the convenience of online filing or prefer paper filing without the extra portal access charge.",
        nextAction:
          "Read Rhode Island's online filing help before entering payment information.",
        sourceIndexes: [1, 6],
        lateSourceIndexes: [1, 3, 4, 5],
        confirmSourceIndexes: [1]
      })
    ]
  }),
  "/tools/south-dakota/annual-report-deadline/": decisionTool({
    caseLabel: "Which South Dakota annual report lane fits best?",
    intro:
      "South Dakota keeps the same anniversary-month timing rule for most business entities, but the filing amount and cleanup path still change with the entity type and whether the report is already delinquent.",
    cases: [
      decisionCase({
        value: "corporation",
        label: "Corporation",
        deadline: "Every year on the first day of the anniversary month",
        amount: "$70 on the current corporation paper form",
        normalRule:
          "South Dakota corporations file annual reports every year on the first day of the anniversary month, and the state opens filing two months before that date.",
        lateRule:
          "If the corporation report is still missing two months after the due date, South Dakota says the record becomes delinquent and later can move toward administrative dissolution or reinstatement.",
        confirmRule:
          "Confirm that the record is actually a corporation and use the current matched form because South Dakota updated annual report filing fees in 2025.",
        nextAction:
          "Use the South Dakota annual report FAQ and the current corporation form before paying.",
        sourceIndexes: [1, 3, 4, 5],
        lateSourceIndexes: [1, 4, 5],
        confirmSourceIndexes: [1, 3, 4]
      }),
      decisionCase({
        value: "llc",
        label: "LLC",
        deadline: "Every year on the first day of the anniversary month",
        amount: "$65 on the current domestic LLC paper form",
        normalRule:
          "South Dakota LLCs follow the same anniversary-month rule as corporations, but the current domestic LLC paper form shows a different filing-fee lane.",
        lateRule:
          "An overdue South Dakota LLC can become delinquent two months after the due date and later move into dissolution or reinstatement work if the report stays unresolved.",
        confirmRule:
          "Confirm that the entity is an LLC and use the current LLC form rather than assuming the corporation amount applies.",
        nextAction:
          "Open the South Dakota LLC annual report form before payment.",
        sourceIndexes: [1, 3, 6],
        lateSourceIndexes: [1, 6],
        confirmSourceIndexes: [1, 6]
      }),
      decisionCase({
        value: "nonprofit",
        label: "Nonprofit corporation",
        deadline: "Every year on the first day of the anniversary month",
        amount: "$10 fee schedule lane",
        normalRule:
          "South Dakota nonprofits still file annual reports every year, but the fee schedule keeps them on the lower $10 filing lane.",
        lateRule:
          "The FAQ says nonprofits are exempt from the additional delinquent annual-report fee even though they still must file the annual report itself.",
        confirmRule:
          "Confirm that the entity is a nonprofit corporation before relying on the lower South Dakota fee lane and the no-extra-late-fee note.",
        nextAction:
          "Use the South Dakota FAQ and fee schedule before filing.",
        sourceIndexes: [1, 2],
        lateSourceIndexes: [1],
        confirmSourceIndexes: [1, 2]
      }),
      decisionCase({
        value: "already-late",
        label: "Already delinquent or dissolved",
        deadline: "Clear the delinquent report and reinstatement work as soon as possible",
        amount: "Current report fees plus South Dakota delinquent or reinstatement charges",
        normalRule:
          "Once the annual report is already past due, the ordinary anniversary-month answer is no longer enough because South Dakota's delinquency and reinstatement path has already started.",
        lateRule:
          "South Dakota says delinquent annual reports continue accumulating late-state consequences and an entity that stays unresolved can be administratively dissolved or revoked.",
        confirmRule:
          "Check whether the record is only delinquent or is already dissolved before sending payment so you do not rely on the normal report amount alone.",
        nextAction:
          "Use South Dakota's annual report FAQ and the current entity form before filing.",
        sourceIndexes: [1, 2, 4, 5, 6],
        lateSourceIndexes: [1, 2, 4, 5],
        confirmSourceIndexes: [1, 3]
      })
    ]
  })
};
