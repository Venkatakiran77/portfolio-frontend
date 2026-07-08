// src/components/cards/TestimonialCard.jsx

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card.jsx";
import { fadeIn } from "@/animations/variants.js";

/**
 * @param {Object} testimonial
 * @param {string} testimonial.quote
 * @param {string} testimonial.author
 * @param {string} testimonial.role
 * @param {string} [testimonial.avatar]
 */
export function TestimonialCard({ testimonial }) {
  const { quote, author, role, avatar } = testimonial;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.4 }}
    >
      <Card padding="lg" className="relative transition-all duration-300">
        {/* Quote Icon */}
        <Quote
          size={28}
          style={{
            color: "var(--color-accent-primary)",
            opacity: 0.35,
          }}
          className="mb-3"
        />

        {/* Quote */}
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {quote}
        </p>

        {/* Author */}
        <div className="mt-5 flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-bg-elevated)",
              color: "var(--color-text-primary)",
            }}
          >
            {author?.[0]}
          </span>

          <div>
            <p
              className="text-sm font-medium"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {author}
            </p>

            <p
              className="text-xs"
              style={{
                color: "var(--color-text-tertiary)",
              }}
            >
              {role}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;
