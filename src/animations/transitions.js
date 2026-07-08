// src/animations/transitions.js

/**
 * easeStandard — the default "ease-out" style curve used across most reveals.
 * Fast start, gentle settle — matches the feel of easeOutQuad used in useCountUp.js.
 */
export const easeStandard = [0.22, 1, 0.36, 1];

/**
 * easeSharp — a snappier curve for small, quick UI feedback (buttons, badges, toggles).
 */
export const easeSharp = [0.4, 0, 0.2, 1];

/**
 * easeSoft — a gentler, slower-settling curve for large hero/section-level content.
 */
export const easeSoft = [0.16, 1, 0.3, 1];

/**
 * transitionBase — default transition for most scroll-reveal elements
 * (paired with fadeInUp, fadeInLeft, etc. from variants.js).
 */
export const transitionBase = {
  duration: 0.6,
  ease: easeStandard,
};

/**
 * transitionFast — quick transitions for small interactive elements:
 * buttons, badges, tooltips, nav underline.
 */
export const transitionFast = {
  duration: 0.25,
  ease: easeSharp,
};

/**
 * transitionSlow — for large, attention-anchoring content like the Hero headline
 * or section titles, where a slightly longer reveal feels more deliberate/premium.
 */
export const transitionSlow = {
  duration: 0.9,
  ease: easeSoft,
};

/**
 * transitionSpring — a springy, physical-feeling transition for elements that
 * should feel tactile/bouncy: MagneticButton press states, card hover lifts,
 * modal content entrance.
 */
export const transitionSpring = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
  mass: 0.8,
};

/**
 * transitionSpringSoft — a gentler spring for larger elements (modal content,
 * command palette) where a stiff bounce would feel out of place.
 */
export const transitionSpringSoft = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 1,
};

/**
 * withDelay — helper to quickly produce a transition object with a custom delay,
 * useful for manually staggering a small fixed number of elements (e.g. Hero's
 * headline vs. subtext vs. buttons) without needing the full staggerContainer setup.
 *
 * @param {Object} base - a base transition object (e.g. transitionBase)
 * @param {number} delay - delay in seconds
 */
export const withDelay = (base, delay = 0) => ({
  ...base,
  delay,
});

/**
 * hoverLift — transition + style pairing for card/button hover states
 * that lift slightly on hover (used with whileHover in card components).
 */
export const hoverLift = {
  y: -6,
  transition: transitionSpring,
};

/**
 * tapScale — transition + style pairing for press/tap feedback
 * (used with whileTap on buttons).
 */
export const tapScale = {
  scale: 0.96,
  transition: { duration: 0.15, ease: easeSharp },
};