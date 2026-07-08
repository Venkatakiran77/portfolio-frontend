// src/sections/WhyHireMe/WhyHireMe.jsx
import { motion } from "framer-motion";
import { Zap, GitBranch, MessageSquare, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Section.jsx";
import { Card } from "@/components/ui/Card.jsx";
import { fadeInUp } from "@/animations/variants.js";

const REASONS = [
  {
    icon: <Zap size={20} />,
    title: "Fast, Reliable Delivery",
    description:
      "I ship working software in tight iterations, not big-bang releases — so progress is visible early and often.",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Clean, Maintainable Code",
    description:
      "Code is written for the next developer to read, not just to work — clear structure, sensible naming, real tests.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Clear Communication",
    description:
      "Blockers, tradeoffs, and progress get surfaced early — no silent slippage, no surprises at the deadline.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Ownership Mindset",
    description:
      "I treat problems as mine to solve, end-to-end — from requirements through deployment and monitoring.",
  },
];

export function WhyHireMe() {
  return (
    <Section
      id="why-hire-me"
      eyebrow="Why Work With Me"
      title="What I Bring to the Table"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((reason) => (
          <motion.div key={reason.title} variants={fadeInUp}>
            <Card hoverable padding="lg" className="h-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-start)]/10 text-[var(--color-accent-start)]">
                {reason.icon}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {reason.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default WhyHireMe;
