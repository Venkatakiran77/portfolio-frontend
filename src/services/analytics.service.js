// src/services/analytics.service.js

/**
 * Thin analytics wrapper. Currently targets Google Analytics 4 (gtag.js),
 * expected to be loaded globally via a <script> tag in index.html (Step 82).
 * All functions safely no-op if gtag isn't present (e.g. local dev, ad blockers)
 * so analytics calls never throw or break the app.
 */

function isGtagAvailable() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Tracks a page view. Call this on route changes if using client-side routing.
 * @param {string} path - e.g. '/projects/ai-tomato-detection'
 * @param {string} [title] - optional page title
 */
export function trackPageView(path, title) {
  if (!isGtagAvailable()) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
}

/**
 * Tracks a custom event.
 * @param {string} eventName - e.g. 'project_viewed', 'contact_form_submitted', 'cv_downloaded'
 * @param {Object} [params] - additional event parameters (arbitrary key-value pairs)
 */
export function trackEvent(eventName, params = {}) {
  if (!isGtagAvailable()) return;

  window.gtag('event', eventName, params);
}

/**
 * Convenience wrappers for the most common tracked interactions on this site.
 * Using named functions instead of raw trackEvent(...) calls at each call site
 * keeps event names/params consistent and typo-proof across components.
 */
export const analytics = {
  projectViewed: (projectTitle) => trackEvent('project_viewed', { project: projectTitle }),
  cvDownloaded: () => trackEvent('cv_downloaded'),
  contactFormSubmitted: () => trackEvent('contact_form_submitted'),
  contactFormFailed: (reason) => trackEvent('contact_form_failed', { reason }),
  socialLinkClicked: (platform) => trackEvent('social_link_clicked', { platform }),
  themeToggled: (newTheme) => trackEvent('theme_toggled', { theme: newTheme }),
  commandPaletteOpened: () => trackEvent('command_palette_opened'),
};

export default analytics;