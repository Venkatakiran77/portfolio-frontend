// src/animations/variants.js

/**
 * Standard distance (px) used for directional fade animations.
 * Kept as a constant so all "fade up/down/left/right" variants stay visually consistent.
 */
const DISTANCE = 32;

/**
 * fadeInUp — the default scroll-reveal used across most sections and cards.
 * Element starts slightly below and transparent, settles into place.
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0 },
};

/**
 * fadeInDown — used for elements that should reveal from above,
 * e.g. section eyebrow labels or dropdown-style menus.
 */
export const fadeInDown = {
  hidden: { opacity: 0, y: -DISTANCE },
  visible: { opacity: 1, y: 0 },
};

/**
 * fadeIn — simple opacity-only reveal, no movement.
 * Used where directional motion would feel excessive (e.g. background glows, overlays).
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * fadeInLeft / fadeInRight — directional reveals for content that should
 * feel like it's sliding in from a side (e.g. About section image vs. text columns).
 */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -DISTANCE },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: DISTANCE },
  visible: { opacity: 1, x: 0 },
};

/**
 * scaleIn — used for cards, badges, and stat blocks that should
 * pop in slightly rather than slide, e.g. SkillCard icons.
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * staggerContainer — wraps a group of children (e.g. a grid of ProjectCards)
 * and staggers their individual reveal animations instead of all firing at once.
 * Apply this to the parent; apply fadeInUp (or similar) to each child.
 */
export const staggerContainer = (staggerDelay = 0.12, initialDelay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

/**
 * navUnderline — for the small active-link indicator in Navbar.jsx (Step 49)
 * that slides between nav items as the active section changes.
 */
export const navUnderline = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

/**
 * modalOverlay / modalContent — for ProjectCaseStudy.jsx and CommandPalette.jsx,
 * a backdrop fade paired with a subtle scale+fade on the modal content itself.
 */
export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

/**
 * cursorGlowFade — the subtle fade in/out of the ambient cursor glow
 * when the mouse enters/leaves the window.
 */
export const cursorGlowFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};