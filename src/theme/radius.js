// src/theme/radius.js

/**
 * Centralized border-radius design system.
 * Every rounded corner in the app MUST use one of these tokens.
 */

export const radius = {
  none: '0px',
  sm: '6px',      // small elements: badges, tags, input fields
  md: '10px',     // buttons, small cards
  lg: '16px',     // standard cards (project cards, skill cards)
  xl: '24px',     // large feature cards, hero code editor panel
  '2xl': '32px',  // section-level containers, modals
  full: '9999px', // pills, avatars, circular icon buttons
};

export default radius;