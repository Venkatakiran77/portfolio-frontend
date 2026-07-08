// src/theme/colors.js

/**
 * Centralized color design system.
 * Every color used anywhere in the app MUST originate from this file.
 * Do not hardcode hex/rgb values in components — import tokens from here instead.
 */

export const colors = {
  dark: {
    // Base surfaces
    background: {
      primary: '#0A0A0F',      // page background
      secondary: '#0F0F17',    // section alt background
      elevated: '#13131C',     // cards, panels
      overlay: 'rgba(10, 10, 15, 0.85)', // modals, command palette backdrop
    },

    // Borders & dividers
    border: {
      subtle: 'rgba(255, 255, 255, 0.06)',
      default: 'rgba(255, 255, 255, 0.1)',
      strong: 'rgba(255, 255, 255, 0.16)',
    },

    // Text
    text: {
      primary: '#F5F5F7',      // headlines
      secondary: '#A1A1AA',    // body copy
      tertiary: '#6B6B76',     // muted / meta text
      inverse: '#0A0A0F',      // text on light/accent surfaces
    },

    // Accent — single restrained accent, used sparingly per Phase 1 guidance
    accent: {
      primary: '#7C6AEF',      // violet — primary brand accent
      primaryHover: '#8E7FF2',
      primaryMuted: 'rgba(124, 106, 239, 0.12)', // tinted backgrounds/badges
      gradientFrom: '#7C6AEF',
      gradientTo: '#5B8DEF',   // subtle violet -> blue, used ONLY in hero headline/CTA
    },

    // Semantic states
    state: {
      success: '#3DD68C',
      successMuted: 'rgba(61, 214, 140, 0.12)',
      warning: '#E8B94E',
      warningMuted: 'rgba(232, 185, 78, 0.12)',
      error: '#F0625E',
      errorMuted: 'rgba(240, 98, 94, 0.12)',
      info: '#5B8DEF',
      infoMuted: 'rgba(91, 141, 239, 0.12)',
    },
  },

  light: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F7F7F9',
      elevated: '#FFFFFF',
      overlay: 'rgba(255, 255, 255, 0.85)',
    },

    border: {
      subtle: 'rgba(10, 10, 15, 0.06)',
      default: 'rgba(10, 10, 15, 0.1)',
      strong: 'rgba(10, 10, 15, 0.16)',
    },

    text: {
      primary: '#0A0A0F',
      secondary: '#4B4B55',
      tertiary: '#8A8A94',
      inverse: '#F5F5F7',
    },

    accent: {
      primary: '#6552E0',
      primaryHover: '#5642D6',
      primaryMuted: 'rgba(101, 82, 224, 0.08)',
      gradientFrom: '#6552E0',
      gradientTo: '#4A7CE0',
    },

    state: {
      success: '#1FA971',
      successMuted: 'rgba(31, 169, 113, 0.1)',
      warning: '#C8940F',
      warningMuted: 'rgba(200, 148, 15, 0.1)',
      error: '#D3413D',
      errorMuted: 'rgba(211, 65, 61, 0.1)',
      info: '#4A7CE0',
      infoMuted: 'rgba(74, 124, 224, 0.1)',
    },
  },
};

/**
 * Flat token list for Tailwind config consumption.
 * Tailwind needs static values at build time, so we expose both themes
 * as CSS custom properties (see globals.css) and reference those here
 * via var() so Tailwind classes stay theme-reactive without a rebuild.
 */
export const cssVarColors = {
  background: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    elevated: 'var(--color-bg-elevated)',
    overlay: 'var(--color-bg-overlay)',
  },
  border: {
    subtle: 'var(--color-border-subtle)',
    DEFAULT: 'var(--color-border-default)',
    strong: 'var(--color-border-strong)',
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    inverse: 'var(--color-text-inverse)',
  },
  accent: {
    primary: 'var(--color-accent-primary)',
    hover: 'var(--color-accent-primary-hover)',
    muted: 'var(--color-accent-primary-muted)',
  },
  success: {
    DEFAULT: 'var(--color-success)',
    muted: 'var(--color-success-muted)',
  },
  warning: {
    DEFAULT: 'var(--color-warning)',
    muted: 'var(--color-warning-muted)',
  },
  error: {
    DEFAULT: 'var(--color-error)',
    muted: 'var(--color-error-muted)',
  },
  info: {
    DEFAULT: 'var(--color-info)',
    muted: 'var(--color-info-muted)',
  },
};

export default colors;