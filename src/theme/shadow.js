// src/theme/shadow.js

/**
 * Centralized shadow / elevation design system.
 * Every box-shadow used in the app MUST originate from here.
 * Kept deliberately soft and restrained — no heavy drop shadows.
 */

export const shadow = {
  dark: {
    none: 'none',

    // Base elevation scale — soft, low-opacity, dark-mode tuned
    xs: '0 1px 2px rgba(0, 0, 0, 0.24)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.28)',
    md: '0 4px 12px rgba(0, 0, 0, 0.32)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.36)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.4)',

    // Card resting + hover states
    card: '0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.04)',
    cardHover: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',

    // Accent glow — used ONLY for primary CTA hover / focus rings
    glow: '0 0 0 1px rgba(124, 106, 239, 0.4), 0 0 24px rgba(124, 106, 239, 0.25)',
    glowStrong: '0 0 0 1px rgba(124, 106, 239, 0.6), 0 0 40px rgba(124, 106, 239, 0.35)',

    // Inner shadow for pressed/active button states
    inner: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
  },

  light: {
    none: 'none',

    xs: '0 1px 2px rgba(10, 10, 15, 0.04)',
    sm: '0 2px 4px rgba(10, 10, 15, 0.06)',
    md: '0 4px 12px rgba(10, 10, 15, 0.08)',
    lg: '0 8px 24px rgba(10, 10, 15, 0.1)',
    xl: '0 16px 48px rgba(10, 10, 15, 0.14)',

    card: '0 1px 2px rgba(10, 10, 15, 0.04), 0 0 0 1px rgba(10, 10, 15, 0.06)',
    cardHover: '0 12px 32px rgba(10, 10, 15, 0.12), 0 0 0 1px rgba(10, 10, 15, 0.1)',

    glow: '0 0 0 1px rgba(101, 82, 224, 0.3), 0 0 24px rgba(101, 82, 224, 0.18)',
    glowStrong: '0 0 0 1px rgba(101, 82, 224, 0.45), 0 0 40px rgba(101, 82, 224, 0.25)',

    inner: 'inset 0 1px 2px rgba(10, 10, 15, 0.08)',
  },
};

export default shadow;