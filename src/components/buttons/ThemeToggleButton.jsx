// src/components/buttons/ThemeToggleButton.jsx

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme.jsx";
import { Tooltip } from "@/components/ui/Tooltip.jsx";
import { cn } from "@/utils/cn.js";

export function ThemeToggleButton({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Tooltip content={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          background: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border-default)",
          color: "var(--color-text-secondary)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-accent-primary)";
          e.currentTarget.style.color = "var(--color-accent-primary)";
          e.currentTarget.style.boxShadow = "var(--shadow-glow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border-default)";
          e.currentTarget.style.color = "var(--color-text-secondary)";
          e.currentTarget.style.boxShadow = "none";
        }}
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
          className,
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.6,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex items-center justify-center"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </Tooltip>
  );
}

export default ThemeToggleButton;
