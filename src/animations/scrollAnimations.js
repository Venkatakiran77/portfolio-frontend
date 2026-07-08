// src/animations/scrollAnimations.js

import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * useParallax — returns a motion value that moves an element vertically
 * at a fraction of normal scroll speed, for background/decorative parallax.
 *
 * @param {number} [speed=0.3] - 0 = no movement (locked to viewport), 1 = moves at full scroll speed.
 *                                Values between 0.1–0.4 read as a subtle, premium parallax.
 * @returns {{ ref: React.RefObject, y: import('framer-motion').MotionValue<number> }}
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // tracks progress as the element crosses the full viewport
  });

  // Map 0→1 scroll progress to a vertical pixel offset scaled by `speed`
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return { ref, y };
}

/**
 * useScrollFadeOut — fades and slightly scales down an element as the user
 * scrolls past it, e.g. the Hero content shrinking away as you scroll into About.
 *
 * @param {Object} [options]
 * @param {[number, number]} [options.opacityRange=[1, 0]] - opacity at scroll start vs. end
 * @param {[number, number]} [options.scaleRange=[1, 0.92]] - scale at scroll start vs. end
 * @returns {{ ref: React.RefObject, opacity: MotionValue<number>, scale: MotionValue<number> }}
 */
export function useScrollFadeOut({
  opacityRange = [1, 0],
  scaleRange = [1, 0.92],
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // tracks from element pinned at top, to fully scrolled past
  });

  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return { ref, opacity, scale };
}

/**
 * useSectionScrollProgress — exposes raw 0→1 scroll progress for a given section,
 * for any custom scroll-tied effect not covered by the helpers above
 * (e.g. rotating an icon, animating a gradient position).
 *
 * @param {Object} [options]
 * @param {[string, string]} [options.offset=['start end', 'end start']]
 * @returns {{ ref: React.RefObject, scrollYProgress: MotionValue<number> }}
 */
export function useSectionScrollProgress({ offset = ['start end', 'end start'] } = {}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, scrollYProgress };
}

/**
 * useCursorGlowSpring — smooths a raw motion value (e.g. cursor x/y) using
 * Framer Motion's spring physics rather than manual rAF lerping.
 * Provided as an alternative approach to useCursorGlow.js's manual smoothing,
 * for any component that wants Framer-native spring-smoothed values.
 *
 * Note: not used by default (useCursorGlow.js Step 33 handles this manually),
 * but available for future effects (e.g. a magnetic button that needs spring-smoothed offsets).
 */
export { useSpring as useSmoothedMotionValue } from 'framer-motion';