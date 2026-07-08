// src/theme/breakpoints.js

/**
 * Centralized responsive breakpoint design system.
 * These values MUST be used by both tailwind.config.js (for CSS breakpoints)
 * and hooks/useMediaQuery.js (for JS-driven responsive logic), so the two
 * never disagree about where a breakpoint falls.
 */

export const breakpoints = {
  xs: 400,    // small phones
  sm: 640,    // large phones
  md: 768,    // tablets (portrait)
  lg: 1024,   // tablets (landscape) / small laptops
  xl: 1280,   // desktops
  '2xl': 1536, // large desktops
};

/**
 * Pre-built media query strings for direct use in JS (e.g. window.matchMedia)
 * or CSS-in-JS contexts, derived from the breakpoints above.
 */
export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  '2xl': `(min-width: ${breakpoints['2xl']}px)`,

  // Common semantic aliases used throughout the app
  isMobile: `(max-width: ${breakpoints.md - 1}px)`,
  isTablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  isDesktop: `(min-width: ${breakpoints.lg}px)`,

  // Used to disable cursor-glow / heavy motion on touch devices
  hasHover: '(hover: hover) and (pointer: fine)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

export default breakpoints;