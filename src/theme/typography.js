// src/theme/typography.js

/**
 * Centralized typography design system.
 * Every font-family, font-size, font-weight, line-height, and letter-spacing
 * value in the app MUST originate from here.
 */

export const typography = {
    fontFamily: {
        // Primary UI/body font — clean, modern, high-legibility sans
        sans: [
            '"Inter"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'sans-serif',
        ],
        // Used ONLY in the hero code editor + inline code snippets —
        // deliberately restricted per Phase 1 (monospace should feel "earned")
        mono: [
            '"JetBrains Mono"',
            '"Fira Code"',
            'ui-monospace',
            'SFMono-Regular',
            'monospace',
        ],
        // Optional display font for large headlines if a more distinctive
        // typographic voice is desired later — falls back to sans by default
        display: [
            '"Inter"',
            '-apple-system',
            'sans-serif',
        ],
    },

    // Font sizes paired with matched line-heights (fluid-ish scale)
    fontSize: {
        xs: { size: '12px', lineHeight: '16px' },
        sm: { size: '14px', lineHeight: '20px' },
        base: { size: '16px', lineHeight: '24px' },
        lg: { size: '18px', lineHeight: '28px' },
        xl: { size: '20px', lineHeight: '30px' },
        '2xl': { size: '24px', lineHeight: '32px' },
        '3xl': { size: '30px', lineHeight: '38px' },
        '4xl': { size: '36px', lineHeight: '44px' },
        '5xl': { size: '48px', lineHeight: '56px' },
        '6xl': { size: '60px', lineHeight: '68px' },
        '7xl': { size: '72px', lineHeight: '80px' },
    },

    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },

    letterSpacing: {
        tighter: '-0.04em',   // large display headlines
        tight: '-0.02em',     // section titles
        normal: '0em',        // body copy
        wide: '0.02em',       // buttons, nav
        wider: '0.08em',      // uppercase eyebrow labels
        widest: '0.12em',     // small caps meta text
    },
}
  // Semantic text style presets — combine the above into ready-to-use styles
  // so components reference ONE token instead of composing 4 properties