// src/constants/seo.js

/**
 * Non-personal SEO technical defaults.
 * Personal SEO content (title, description, keywords) lives in
 * config/portfolio.config.js — this file only holds structural/technical
 * defaults that wouldn't change even if this project were forked.
 */

export const SEO_DEFAULTS = {
  titleSuffix: ' | Portfolio',
  defaultLocale: 'en_US',

  openGraph: {
    type: 'website',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'Portfolio preview',
  },

  twitter: {
    card: 'summary_large_image',
  },

  robots: {
    index: true,
    follow: true,
  },

  // Structured data (JSON-LD) type — used for the <script type="application/ld+json">
  // block, helps search engines understand this is a personal/professional profile
  structuredDataType: 'Person',
};

export default SEO_DEFAULTS;