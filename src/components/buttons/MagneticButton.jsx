// src/components/buttons/MagneticButton.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button.jsx";
import { transitionSpring } from "@/animations/transitions.js";
import { useHasHover } from "@/hooks/useMediaQuery.js";

/**
 * MagneticButton — a Button that subtly pulls toward the cursor on hover.
 *
 * @param {number} [strength=0.35] - how strongly the button follows the cursor (0-1)
 * @param {number} [range=80] - px distance from center within which the effect activates
 * All other props pass through to the underlying Button.
 */
export function MagneticButton({
  strength = 0.35,
  range = 80,
  children,
  ...buttonProps
}) {
  const ref = useRef(null);
  const hasHover = useHasHover();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!hasHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX ** 2 + distY ** 2);

    if (distance < range) {
      setOffset({ x: distX * strength, y: distY * strength });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      className="inline-block"
      animate={{ x: offset.x, y: offset.y }}
      transition={transitionSpring}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Button ref={ref} {...buttonProps}>
        {children}
      </Button>
    </motion.div>
  );
}

export default MagneticButton;
