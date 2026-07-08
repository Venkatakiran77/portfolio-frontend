// src/utils/formatDate.js

/**
 * Returns the current year as a number.
 * Used by Footer.jsx for the copyright line so it never goes stale.
 * @returns {number}
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Combines a start and end date string into a single readable range.
 * Useful if a future experience/education entry is added without a
 * pre-formatted range already baked into the data file.
 *
 * @param {string} startDate - e.g. "Jul 2024"
 * @param {string} endDate - e.g. "Jan 2026" or "Present"
 * @returns {string} e.g. "Jul 2024 – Jan 2026"
 */
export function formatDateRange(startDate, endDate) {
  if (!startDate) return '';
  if (!endDate || endDate.toLowerCase() === 'present') {
    return `${startDate} – Present`;
  }
  return `${startDate} – ${endDate}`;
}

/**
 * Formats a Date object (or ISO string) into a short human-readable
 * date, e.g. "Jul 8, 2026" — useful for a future blog/CMS feature
 * mentioned in the bonus requirements ("Blog Ready").
 *
 * @param {Date|string} date
 * @returns {string}
 */
export function formatShortDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}