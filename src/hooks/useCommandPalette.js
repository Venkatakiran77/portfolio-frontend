// src/hooks/useCommandPalette.js

import { useState, useEffect, useMemo, useCallback } from 'react';
import { COMMAND_PALETTE_ACTIONS } from '@/constants/nav.js';
import { useTheme } from '@/hooks/useTheme.jsx';

/**
 * useCommandPalette — full open/search/navigate/select logic for the ⌘K command palette.
 *
 * @returns {{
 *   isOpen: boolean,
 *   close: Function,
 *   open: Function,
 *   query: string,
 *   setQuery: Function,
 *   results: Array,
 *   activeIndex: number,
 *   setActiveIndex: Function,
 *   handleKeyDown: Function,
 *   executeAction: Function,
 * }}
 */
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleTheme } = useTheme();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  // Global ⌘K / Ctrl+K shortcut listener, plus Escape to close
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';

      if (isShortcut) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, close]);

  // Filter COMMAND_PALETTE_ACTIONS by the current query (matches label or keywords)
  const results = useMemo(() => {
    if (!query.trim()) return COMMAND_PALETTE_ACTIONS;

    const q = query.trim().toLowerCase();
    return COMMAND_PALETTE_ACTIONS.filter((action) => {
      const inLabel = action.label.toLowerCase().includes(q);
      const inKeywords = (action.keywords || []).some((k) => k.toLowerCase().includes(q));
      return inLabel || inKeywords;
    });
  }, [query]);

  // Reset the active (highlighted) index whenever the result set changes
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  /**
   * executeAction — runs the actual behavior for a given command action,
   * then closes the palette. Handles built-in types ('scroll', 'theme', 'link')
   * and falls back to a custom onRun handler if the action defines one.
   */
  const executeAction = useCallback(
    (action) => {
      if (!action) return;

      switch (action.type) {
        case 'scroll': {
          const el = document.getElementById(action.targetId);
          el?.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case 'theme': {
          toggleTheme();
          break;
        }
        case 'link': {
          window.open(action.href, action.external ? '_blank' : '_self');
          break;
        }
        default: {
          action.onRun?.();
        }
      }

      close();
    },
    [toggleTheme, close]
  );

  // Keyboard navigation within the open palette: ArrowUp/Down + Enter
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(results.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeAction(results[activeIndex]);
      }
    },
    [results, activeIndex, executeAction]
  );

  return {
    isOpen,
    open,
    close,
    query,
    setQuery,
    results,
    activeIndex,
    setActiveIndex,
    handleKeyDown,
    executeAction,
  };
}

export default useCommandPalette;