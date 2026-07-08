// src/theme/animations.js

/**
 * Centralized animation timing design system.
 * Every Framer Motion transition and CSS animation duration/easing
 * in the app MUST originate from here.
 *
 * Philosophy: subtle, fast, purposeful. Never flashy or bouncy.
 * Modeled after Linear/Vercel's restrained motion language.
 */

export const animations = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    base: 0.35,
    slow: 0.5,
    slower: 0.8,
    slowest: 1.2,
  },

  // Easing curves — cubic-bezier arrays, Framer Motion compatible
  easing: {
    // Default UI easing — smooth deceleration, no overshoot
    standard: [0.4, 0, 0.2, 1],
    // Snappy entrance — used for hover/press micro-interactions
    snappy: [0.16, 1, 0.3, 1],
    // Gentle for large reveals (section fade-ins, page transitions)
    gentle: [0.25, 0.1, 0.25, 1],
    // Linear — used only for continuous/looping motion (marquees, spinners)
    linear: [0, 0, 1, 1],
  },

  // Stagger timing for grids/lists (cards appearing in sequence)
  stagger: {
    tight: 0.05,
    base: 0.08,
    loose: 0.12,
  },

  // Named delay presets for sequenced reveals
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },

  // Spring physics presets (for magnetic button, drag interactions)
  spring: {
    soft: { type: 'spring', stiffness: 150, damping: 20, mass: 0.5 },
    snappy: { type: 'spring', stiffness: 300, damping: 24, mass: 0.6 },
    bouncy: { type: 'spring', stiffness: 400, damping: 15, mass: 0.8 },
  },
};

export default animations;