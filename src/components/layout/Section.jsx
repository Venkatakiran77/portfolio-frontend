// src/components/layout/Section.jsx
import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce.js";
import { fadeInUp, staggerContainer } from "@/animations/variants.js";
import { transitionBase } from "@/animations/transitions.js";
import { cn } from "@/utils/cn.js";

/**
 * @param {Object} props
 * @param {string} props.id - section element id, used by Navbar/useScrollProgress for active-link tracking
 * @param {string} [props.eyebrow] - small uppercase label above the title, e.g. "ABOUT ME"
 * @param {string} [props.title] - section heading, e.g. "Curious. Driven. Always Building."
 * @param {string} [props.description]
 * @param {boolean} [props.stagger=true] - wraps children in staggerContainer for cascading child reveals
 * @param {string} [props.className]
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  stagger = true,
  className = "",
  children,
}) {
  const [ref, isInView] = useInViewOnce({ threshold: 0.1 });

  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger ? staggerContainer(0.12) : undefined}
        className="mx-auto max-w-7xl px-6"
      >
        {(eyebrow || title) && (
          <motion.div
            variants={fadeInUp}
            transition={transitionBase}
            className="mb-10"
          >
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-start)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-secondary)]">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export default Section;
