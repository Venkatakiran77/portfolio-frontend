// tailwind.config.js

import { cssVarColors } from './src/theme/colors.js';
import { spacing } from './src/theme/spacing.js';
import { typography } from './src/theme/typography.js';
import { radius } from './src/theme/radius.js';
import { breakpoints } from './src/theme/breakpoints.js';
import { zIndex } from './src/theme/zIndex.js';

/**
 * Builds Tailwind's fontSize scale from theme/typography.js,
 * pairing each size with its matched line-height as Tailwind expects:
 * fontSize: { xl: ['20px', { lineHeight: '30px' }] }
 */
function buildFontSize(fontSizeTokens) {
  return Object.fromEntries(
    Object.entries(fontSizeTokens).map(([key, { size, lineHeight }]) => [
      key,
      [size, { lineHeight }],
    ])
  );
}

/**
 * Converts breakpoints.js (raw px numbers) into Tailwind's expected
 * screens format: { sm: '640px', md: '768px', ... }
 */
function buildScreens(breakpointTokens) {
  return Object.fromEntries(
    Object.entries(breakpointTokens).map(([key, value]) => [key, `${value}px`])
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggled via useTheme.js adding/removing "dark" on <html>
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: buildScreens(breakpoints),

    extend: {
      colors: cssVarColors,

      spacing: spacing.scale,

      maxWidth: spacing.container.maxWidth,

      fontFamily: typography.fontFamily,
      fontSize: buildFontSize(typography.fontSize),
      fontWeight: typography.fontWeight,
      letterSpacing: typography.letterSpacing,

      borderRadius: radius,

      // Shadows are theme-aware (dark/light) via CSS variables defined
      // in globals.css, not imported directly here — see Step 12.
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: 'var(--shadow-glow)',
        'glow-strong': 'var(--shadow-glow-strong)',
        inner: 'var(--shadow-inner)',
      },

      zIndex: Object.fromEntries(
        Object.entries(zIndex).map(([key, value]) => [key, String(value)])
      ),

      // Container width paddings, used with the `container` utility if needed
      container: {
        center: true,
        padding: {
          DEFAULT: spacing.container.paddingX.mobile,
          md: spacing.container.paddingX.tablet,
          lg: spacing.container.paddingX.desktop,
        },
      },
    },
  },
  plugins: [],
};