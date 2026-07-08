// src/utils/scroll.js

/**
 * Height (in px) reserved for the sticky navbar, used as a scroll offset
 * so that scrolling to a section doesn't tuck its heading underneath
 * the fixed navbar. Kept here rather than importing from theme/spacing.js
 * to avoid a circular concern between layout math and design tokens —
 * this is a fixed layout constant, not a themeable design value.
 */
const NAVBAR_OFFSET = 80;

/**
 * Smoothly scrolls to a section by its element id (without the "#").
 * Accounts for the sticky navbar height so the section isn't hidden.
 *
 * @param {string} sectionId - e.g. "about" (not "#about")
 */
export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - NAVBAR_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Smoothly scrolls the page back to the very top.
 * Used by ScrollToTop.jsx.
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Returns the current scroll progress as a percentage (0-100).
 * Used by useScrollProgress.js to drive the ScrollProgressBar width.
 *
 * @returns {number}
 */
export function getScrollPercentage() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
}

/**
 * Parses a nav href like "#about" into a plain section id "about".
 * Used by Navbar.jsx / CommandPalette.jsx before calling scrollToSection.
 *
 * @param {string} href - e.g. "#about"
 * @returns {string} e.g. "about"
 */
export function parseSectionId(href) {
  return href.startsWith('#') ? href.slice(1) : href;
}