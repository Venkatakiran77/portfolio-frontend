// src/sections/Testimonials/Testimonials.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "@/components/cards/TestimonialCard.jsx";
import { fadeInUp } from "@/animations/variants.js";
import { testimonialsData } from "@/data/testimonials.data.js";

export function Testimonials({ autoAdvanceMs = 6000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoAdvanceMs || testimonialsData.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, autoAdvanceMs);
    return () => clearInterval(interval);
  }, [autoAdvanceMs]);

  return (
    <motion.div variants={fadeInUp} className="flex h-full flex-col">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
        Testimonials
      </h3>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={activeIndex}
            testimonial={testimonialsData[activeIndex]}
          />
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={
              index === activeIndex
                ? "h-1.5 w-5 rounded-full bg-[var(--color-accent-start)] transition-all"
                : "h-1.5 w-1.5 rounded-full bg-[var(--color-border)] transition-all hover:bg-[var(--color-text-tertiary)]"
            }
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
