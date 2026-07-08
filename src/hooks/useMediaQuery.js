// src/hooks/useMediaQuery.js

import { useState, useEffect } from 'react';

/**
 * useMediaQuery — subscribes to a CSS media query and returns whether it currently matches.
 *
 * @param {string} query - a valid CSS media query, e.g. '(min-width: 768px)'
 * @returns {boolean} whether the query currently matches
 */
export function useMediaQuery(query) {
  const getMatch = () => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(query);

    // Set immediately in case the query string changed between renders
    setMatches(mediaQueryList.matches);

    const handleChange = (e) => setMatches(e.matches);

    // addEventListener is the modern API; addListener is a fallback for older Safari
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

/**
 * Convenience presets for common breakpoints/preferences used across the project.
 * Kept as named exports so components can write useIsMobile() instead of
 * useMediaQuery('(max-width: 767px)') everywhere — self-documenting call sites.
 */
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useHasHover = () => useMediaQuery('(hover: hover)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

export default useMediaQuery;