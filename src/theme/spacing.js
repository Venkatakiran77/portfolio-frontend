// src/theme/spacing.js

/**
 * Centralized spacing design system.
 * Every margin, padding, and gap value in the app should originate from here.
 * Do not hardcode arbitrary spacing values (e.g. "mt-[37px]") in components.
 */

export const spacing = {
  // Base spacing scale (in px, mapped to rem in tailwind config)
  scale: {
    px: '1px',
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },

  // Section-level vertical rhythm — the backbone of consistent page flow
  section: {
    paddingY: {
      mobile: '64px',   // spacing.scale[16]
      tablet: '96px',   // spacing.scale[24]
      desktop: '128px', // spacing.scale[32]
    },
    gapBetween: {
      mobile: '0px',    // sections butt against each other, padding handles separation
      desktop: '0px',
    },
  },

  // Container widths — keeps every section's max-width identical
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',   // primary content max-width, matches reference design
      '2xl': '1320px',
    },
    paddingX: {
      mobile: '20px',
      tablet: '32px',
      desktop: '48px',
    },
  },

  // Grid/card gaps — used by all grid layouts (Skills, Projects, WhyHireMe, etc.)
  grid: {
    gapSmall: '16px',
    gapMedium: '24px',
    gapLarge: '32px',
  },

  // Component-internal spacing (card padding, button padding)
  component: {
    cardPadding: {
      sm: '20px',
      md: '24px',
      lg: '32px',
    },
    buttonPadding: {
      sm: '10px 16px',
      md: '12px 24px',
      lg: '16px 32px',
    },
  },
};

export default spacing;