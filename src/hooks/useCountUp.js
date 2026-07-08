// src/hooks/useCountUp.js

import { useState, useEffect, useRef } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce.js';

/**
 * Eases a linear progress value (0-1) using an ease-out curve,
 * so the count starts fast and settles gently at the end.
 */
function easeOutQuad(t) {
  return t * (2 - t);
}

/**
 * useCountUp — animates a number from `start` to `end` once the returned ref is in view.
 *
 * @param {Object} options
 * @param {number} options.end - target value to count up to
 * @param {number} [options.start=0] - starting value
 * @param {number} [options.duration=1500] - animation duration in ms
 * @param {number} [options.decimals=0] - decimal places to round to (e.g. 1 for "4.5")
 * @param {number} [options.threshold=0.5] - IntersectionObserver threshold to trigger the count
 * @returns {[React.RefObject, number]} [ref to attach to the visible element, current animated value]
 */
export function useCountUp({
  end,
  start = 0,
  duration = 1500,
  decimals = 0,
  threshold = 0.5,
} = {}) {
  const [ref, isInView] = useInViewOnce({ threshold });
  const [value, setValue] = useState(start);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);

      const current = start + (end - start) * eased;
      const rounded = Number(current.toFixed(decimals));

      setValue(rounded);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end); // snap exactly to end value, avoiding float rounding drift
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, start, end, duration, decimals]);

  return [ref, value];
}

export default useCountUp;