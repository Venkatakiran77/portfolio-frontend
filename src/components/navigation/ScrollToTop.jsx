// src/components/navigation/ScrollToTop.jsx

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress.js";

export function ScrollToTop({ showAfter = 20 }) {
  const { progress } = useScrollProgress();

  const isVisible = progress > showAfter;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 10,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 backdrop-blur-md"
          style={{
            background: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border-default)",
            color: "var(--color-text-primary)",
            boxShadow: "var(--shadow-card)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent-primary)";
            e.currentTarget.style.color = "var(--color-accent-primary)";
            e.currentTarget.style.boxShadow = "var(--shadow-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border-default)";
            e.currentTarget.style.color = "var(--color-text-primary)";
            e.currentTarget.style.boxShadow = "var(--shadow-card)";
          }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
