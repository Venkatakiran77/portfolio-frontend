// src/components/navigation/ScrollProgressBar.jsx

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress.js";

export function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-primary-hover))",
          boxShadow: "0 0 12px var(--color-accent-primary)",
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;
