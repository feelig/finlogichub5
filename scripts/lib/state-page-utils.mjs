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

export function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}
