// src/hooks/useScrollProgress.js

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useScrollProgress — tracks page scroll percentage and (optionally) the
 * currently active section, based on a list of section element IDs.
 *
 * @param {Object} options
 * @param {string[]} [options.sectionIds=[]] - ordered list of section element IDs to track (e.g. ['home', 'about', 'skills'])
 * @param {number} [options.activeOffset=120] - px offset from top of viewport used when deciding which section is "active" (accounts for sticky navbar height)
 * @returns {{ progress: number, activeSection: string | null }}
 */
export function useScrollProgress({ sectionIds = [], activeOffset = 120 } = {}) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? null);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;

    requestAnimationFrame(() => {
      // --- Overall page scroll progress ---
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));

      // --- Active section detection ---
      if (sectionIds.length > 0) {
        let current = sectionIds[0];

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= activeOffset) {
            current = id;
          }
        }

        setActiveSection(current);
      }

      tickingRef.current = false;
    });
  }, [sectionIds, activeOffset]);

  useEffect(() => {
    // Run once on mount to set correct initial state (e.g. on page refresh mid-scroll)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return { progress, activeSection };
}

export default useScrollProgress;