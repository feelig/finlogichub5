const MONTH_INDEX = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};

export const DEFAULT_STALE_REVIEW_DAYS = 45;
export const REVIEW_SOON_DAYS = 30;
export const MIN_RECOMMENDED_SOURCE_COUNT = 5;

export function parseReviewDate(value) {
  const match = String(value).match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);

  if (!match) {
    throw new Error(`Unsupported review date: ${value}`);
  }

  const [, monthName, dayText, yearText] = match;
  const month = MONTH_INDEX[monthName];

  if (month === undefined) {
    throw new Error(`Unsupported month in review date: ${value}`);
  }

  return new Date(Date.UTC(Number(yearText), month, Number(dayText)));
}

export function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}

export function getPageRoute(page) {
  return new URL(page.canonicalUrl).pathname;
}

export function differenceInDays(olderDate, newerDate) {
  const milliseconds = newerDate.getTime() - olderDate.getTime();
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
}

export function addDays(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export function getReviewStatus(
  reviewDate,
  referenceDate,
  {
    staleReviewDays = DEFAULT_STALE_REVIEW_DAYS,
    reviewSoonDays = REVIEW_SOON_DAYS
  } = {}
) {
  const ageInDays = differenceInDays(reviewDate, referenceDate);
  const nextReviewDate = addDays(reviewDate, staleReviewDays);

  if (ageInDays > staleReviewDays) {
    return {
      tone: "overdue",
      label: "Manual review overdue",
      detail: "Refresh this page against official sources now.",
      ageInDays,
      nextReviewDate
    };
  }

  if (ageInDays >= reviewSoonDays) {
    return {
      tone: "soon",
      label: "Priority refresh soon",
      detail: "Review the official sources again before this page ages out.",
      ageInDays,
      nextReviewDate
    };
  }

  return {
    tone: "fresh",
    label: "Fresh manual review",
    detail: "This page is still within the current review window.",
    ageInDays,
    nextReviewDate
  };
}

export function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}
