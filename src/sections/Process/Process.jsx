// src/sections/Process/Process.jsx

import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  Code2,
  TestTube2,
  Rocket,
  TrendingUp,
} from "lucide-react";

import { Section } from "@/components/layout/Section.jsx";
import { Card } from "@/components/ui/Card.jsx";
import { fadeInUp } from "@/animations/variants.js";

const STEPS = [
  {
    num: "01",
    icon: <Search size={18} />,
    title: "Understand",
    description: "Research & analyze user needs",
  },
  {
    num: "02",
    icon: <ClipboardList size={18} />,
    title: "Plan",
    description: "Design architecture & plan features",
  },
  {
    num: "03",
    icon: <Code2 size={18} />,
    title: "Develop",
    description: "Write clean code & build solution",
  },
  {
    num: "04",
    icon: <TestTube2 size={18} />,
    title: "Test",
    description: "Test thoroughly for quality",
  },
  {
    num: "05",
    icon: <Rocket size={18} />,
    title: "Deploy",
    description: "Deploy to production & monitor",
  },
  {
    num: "06",
    icon: <TrendingUp size={18} />,
    title: "Optimize",
    description: "Improve performance & scale",
  },
];

export function Process() {
  return (
    <Section id="process" eyebrow="My Process" title="How I Build Products">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {STEPS.map((step) => (
          <motion.div key={step.num} variants={fadeInUp}>
            <Card hoverable padding="md" className="flex h-full flex-col gap-3">
              {/* Icon */}
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  background: "var(--color-accent-primary-muted)",
                  color: "var(--color-accent-primary)",
                }}
              >
                {step.icon}
              </span>

              <div>
                {/* Step Number */}
                <p
                  className="text-xs font-semibold"
                  style={{
                    color: "var(--color-accent-primary)",
                  }}
                >
                  {step.num}.
                </p>

                {/* Title */}
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p
                  className="mt-1 text-xs leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Process;
