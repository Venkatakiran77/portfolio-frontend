// src/theme/index.js

import { colors, cssVarColors } from './colors.js';
import { spacing } from './spacing.js';
import { typography } from './typography.js';
import { radius } from './radius.js';
import { shadow } from './shadow.js';
import { breakpoints, mediaQueries } from './breakpoints.js';
import { animations } from './animations.js';
import { zIndex } from './zIndex.js';
import { transitions } from './transitions.js';

/**
 * Unified design system export.
 * Import this single object anywhere the design system is needed:
 *
 *   import { theme } from '@/theme';
 *   theme.colors.dark.accent.primary
 *   theme.spacing.section.paddingY.desktop
 *   theme.typography.textStyles.heroHeadline
 *
 * Individual token files can still be imported directly if only one
 * category is needed (e.g. tailwind.config.js imports each file separately
 * for clarity), but application code should prefer this barrel export.
 */
export const theme = {
  colors,
  cssVarColors,
  spacing,
  typography,
  radius,
  shadow,
  breakpoints,
  mediaQueries,
  animations,
  zIndex,
  transitions,
};

// Named re-exports for convenience / selective imports
export {
  colors,
  cssVarColors,
  spacing,
  typography,
  radius,
  shadow,
  breakpoints,
  mediaQueries,
  animations,
  zIndex,
  transitions,
};

export default theme;