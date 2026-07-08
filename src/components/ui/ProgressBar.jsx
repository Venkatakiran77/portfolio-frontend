// src/components/ui/ProgressBar.jsx
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.js";

export function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  className = "",
  barClassName = "",
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
          {label && <span>{label}</span>}
          {showValue && <span>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-surface)]">
        <motion.div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)]",
            barClassName,
          )}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
