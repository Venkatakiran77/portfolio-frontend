// src/components/cards/ValueCard.jsx

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card.jsx";
import { useCountUp } from "@/hooks/useCountUp.js";
import { fadeInUp } from "@/animations/variants.js";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.icon
 * @param {number} props.value
 * @param {string} [props.suffix='+']
 * @param {string} props.label
 * @param {number} [props.decimals=0]
 */
export function ValueCard({ icon, value, suffix = "+", label, decimals = 0 }) {
  const [countRef, count] = useCountUp({
    end: value,
    decimals,
  });

  return (
    <motion.div variants={fadeInUp}>
      <Card
        padding="md"
        className="flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-1"
      >
        <span
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            background: "var(--color-accent-primary-muted)",
            color: "var(--color-accent-primary)",
          }}
        >
          {icon}
        </span>

        <div ref={countRef}>
          <p
            className="text-lg font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {count}
            {suffix}
          </p>

          <p
            className="text-xs"
            style={{
              color: "var(--color-text-tertiary)",
            }}
          >
            {label}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default ValueCard;
