// src/components/navigation/CommandPalette.jsx

import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft } from "lucide-react";
import { useCommandPalette } from "@/hooks/useCommandPalette.js";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll.js";
import { modalOverlay, modalContent } from "@/animations/variants.js";
import { transitionSpringSoft } from "@/animations/transitions.js";
import { cn } from "@/utils/cn.js";

export function CommandPalette() {
  const {
    isOpen,
    close,
    query,
    setQuery,
    results,
    activeIndex,
    setActiveIndex,
    handleKeyDown,
    executeAction,
  } = useCommandPalette();

  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Palette */}
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transitionSpringSoft}
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-24 z-[61] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-default)",
            }}
          >
            {/* Search */}
            <div
              className="flex items-center gap-3 px-4 py-3.5"
              style={{
                borderBottom: "1px solid var(--color-border-default)",
              }}
            >
              <Search
                size={18}
                style={{
                  color: "var(--color-text-tertiary)",
                }}
              />

              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search actions, sections..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{
                  color: "var(--color-text-primary)",
                }}
              />

              <kbd
                className="rounded px-1.5 py-0.5 text-[10px]"
                style={{
                  border: "1px solid var(--color-border-default)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li
                  className="px-3 py-6 text-center text-sm"
                  style={{
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  No results found.
                </li>
              )}

              {results.map((action, index) => {
                const active = index === activeIndex;

                return (
                  <li key={action.id}>
                    <button
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => executeAction(action)}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200",
                      )}
                      style={{
                        background: active
                          ? "var(--color-accent-primary-muted)"
                          : "transparent",
                        color: active
                          ? "var(--color-accent-primary)"
                          : "var(--color-text-secondary)",
                      }}
                    >
                      <span className="flex items-center gap-2.5">
                        {action.icon}
                        {action.label}
                      </span>

                      {active && <CornerDownLeft size={14} />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
