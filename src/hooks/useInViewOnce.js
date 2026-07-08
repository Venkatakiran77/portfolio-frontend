// src/hooks/useInViewOnce.js

import { useState, useRef, useEffect } from 'react';

/**
 * Detects when an element enters the viewport and returns `true`
 * permanently after the first time it does (never resets to false).
 * Used to trigger scroll-reveal animations and count-up animations
 * exactly once per page load.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.15] - fraction of element visible to trigger
 * @param {string} [options.rootMargin='0px 0px -60px 0px'] - triggers slightly
 *   before the element is fully in view, matching how Linear/Vercel-style
 *   reveal animations feel slightly anticipatory rather than lagging
 * @returns {[React.RefObject, boolean]} [ref to attach, isInView]
 */
export function useInViewOnce({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isInView) return;

    // Respect reduced-motion users by revealing immediately, no animation delay
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // fire once, then stop observing
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isInView, threshold, rootMargin]);

  return [ref, isInView];
}

export default useInViewOnce;