// src/hooks/useCursorGlow.js

import { useState, useEffect, useRef } from 'react';

/**
 * useCursorGlow — tracks cursor position with light smoothing, for ambient glow effects.
 *
 * @param {Object} options
 * @param {number} [options.smoothing=0.15] - 0 = instant snap, 1 = never catches up. Lower = snappier.
 * @param {boolean} [options.disabled] - force-disable (e.g. reduced motion, touch device)
 * @returns {{ x: number, y: number, isActive: boolean }}
 */
export function useCursorGlow({ smoothing = 0.15, disabled = false } = {}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Basic touch-device check (kept local here; can be swapped for useMediaQuery('(hover: hover)') once Step 34 lands)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    !window.matchMedia('(hover: hover)').matches;

  useEffect(() => {
    if (disabled || isTouchDevice) return;

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isActive) setIsActive(true);
    };

    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    // Smoothing loop: eases currentRef toward targetRef every frame
    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * (1 - smoothing);
      current.y += (target.y - current.y) * (1 - smoothing);

      setPosition({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [disabled, isTouchDevice, smoothing, isActive]);

  return { x: position.x, y: position.y, isActive: isActive && !disabled && !isTouchDevice };
}

export default useCursorGlow;