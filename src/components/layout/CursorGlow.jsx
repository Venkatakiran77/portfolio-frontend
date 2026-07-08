// src/components/layout/CursorGlow.jsx
import { motion } from "framer-motion";
import { useCursorGlow } from "@/hooks/useCursorGlow.js";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery.js";
import { cursorGlowFade } from "@/animations/variants.js";

/**
 * @param {Object} [props]
 * @param {number} [props.size=500] - diameter of the glow in px
 * @param {string} [props.color] - CSS color/gradient stop for the glow center (defaults to theme accent)
 */
export function CursorGlow({
  size = 500,
  color = "var(--color-accent-start)",
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { x, y, isActive } = useCursorGlow({ disabled: prefersReducedMotion });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      variants={cursorGlowFade}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          left: x - size / 2,
          top: y - size / 2,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color}22 0%, ${color}00 70%)`,
          willChange: "transform",
        }}
      />
    </motion.div>
  );
}

export default CursorGlow;
