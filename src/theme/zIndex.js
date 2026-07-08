// src/theme/zIndex.js

/**
 * Centralized z-index stacking design system.
 * Every z-index value in the app MUST originate from here.
 * Listed in explicit ascending stack order — do not assign arbitrary
 * z-index values in components.
 */

export const zIndex = {
  base: 0,              // normal document flow content
  cursorGlow: 1,         // ambient background effect, sits just above base content
  stickyElement: 10,     // any sticky-positioned in-page element (e.g. sticky sidebar)
  scrollProgressBar: 40, // thin top progress bar
  navbar: 50,            // sticky top navigation
  dropdown: 60,          // nav dropdowns, select menus
  tooltip: 70,           // hover tooltips (skill confidence, icon labels)
  scrollToTop: 80,       // floating scroll-to-top button
  overlay: 90,           // modal/command-palette backdrop
  commandPalette: 100,   // Cmd+K palette itself, above its own backdrop
  toast: 110,            // notification toasts (e.g. "message sent" confirmation)
};

export default zIndex;