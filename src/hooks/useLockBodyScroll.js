// src/hooks/useLockBodyScroll.js

import { useEffect, useRef } from 'react';

// Module-level counter so multiple overlays (e.g. command palette opened
// while mobile nav is also open) can lock/unlock without stepping on each other.
let lockCount = 0;
let originalBodyOverflow = '';
let originalBodyPaddingRight = '';

/**
 * useLockBodyScroll — locks <body> scroll while `isLocked` is true.
 *
 * @param {boolean} isLocked - whether the scroll lock should currently be active
 */
export function useLockBodyScroll(isLocked = true) {
  const hasLockedRef = useRef(false);

  useEffect(() => {
    if (!isLocked) return;

    // Only apply the lock (and save original styles) once per "layer" of locking
    if (lockCount === 0) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      originalBodyOverflow = document.body.style.overflow;
      originalBodyPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      // Compensate for the scrollbar disappearing so page content doesn't shift right
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    lockCount += 1;
    hasLockedRef.current = true;

    return () => {
      if (!hasLockedRef.current) return;
      hasLockedRef.current = false;

      lockCount = Math.max(0, lockCount - 1);

      // Only restore original styles once the LAST lock is released
      if (lockCount === 0) {
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
      }
    };
  }, [isLocked]);
}

export default useLockBodyScroll;