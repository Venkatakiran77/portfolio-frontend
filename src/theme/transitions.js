// src/theme/transitions.js

import { animations } from './animations.js';

/**
 * Centralized plain-CSS transition presets.
 * Use these for simple property transitions (color, border, opacity, transform)
 * that don't require Framer Motion. Built from theme/animations.js so that
 * CSS transitions and Framer Motion animations always feel identical in speed/feel.
 */

const easingToCss = (curve) => `cubic-bezier(${curve.join(', ')})`;

export const transitions = {
  // Ready-to-use full "transition" property strings
  colors: `color ${animations.duration.fast}s ${easingToCss(animations.easing.standard)}, background-color ${animations.duration.fast}s ${easingToCss(animations.easing.standard)}, border-color ${animations.duration.fast}s ${easingToCss(animations.easing.standard)}`,

  opacity: `opacity ${animations.duration.base}s ${easingToCss(animations.easing.standard)}`,

  transform: `transform ${animations.duration.fast}s ${easingToCss(animations.easing.snappy)}`,

  shadow: `box-shadow ${animations.duration.base}s ${easingToCss(animations.easing.standard)}`,

  // Combined preset for interactive elements (buttons, cards, links)
  // covers the most common hover-state properties in one line
  interactive: `all ${animations.duration.fast}s ${easingToCss(animations.easing.standard)}`,

  // Slower, larger transitions (theme switch fade, page-level changes)
  themeSwitch: `background-color ${animations.duration.slow}s ${easingToCss(animations.easing.gentle)}, color ${animations.duration.slow}s ${easingToCss(animations.easing.gentle)}, border-color ${animations.duration.slow}s ${easingToCss(animations.easing.gentle)}`,
};

export default transitions;