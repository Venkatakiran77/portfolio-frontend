// src/sections/Hero/Hero.jsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { MagneticButton } from "@/components/buttons/MagneticButton.jsx";
import { ValueCard } from "@/components/cards/ValueCard.jsx";
import { CodeEditor } from "./CodeEditor.jsx";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/animations/variants.js";
import {
  transitionSlow,
  withDelay,
  transitionBase,
} from "@/animations/transitions.js";
import { useInViewOnce } from "@/hooks/useInViewOnce.js";
import { portfolioConfig } from "@/config/portfolio.config.js";

const TRAITS = [
  { icon: <Code2 size={14} />, label: "Full Stack Developer" },
  { icon: <Lightbulb size={14} />, label: "Problem Solver" },
  { icon: <Rocket size={14} />, label: "Quick Learner" },
  { icon: <Users size={14} />, label: "Team Player" },
];

const STATS = [
  {
    icon: <Code2 size={18} />,
    value: 3,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <Rocket size={18} />,
    value: 10,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <Lightbulb size={18} />,
    value: 1000,
    suffix: "+",
    label: "Hours of Coding",
  },
  {
    icon: <Users size={18} />,
    value: 5,
    suffix: "+",
    label: "Technologies Mastered",
  },
  { icon: <Rocket size={18} />, value: 100, suffix: "%", label: "Commitment" },
];

const SOCIALS = [
  {
    icon: <Github size={16} />,
    href: portfolioConfig.social?.github,
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: portfolioConfig.social?.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: `mailto:${portfolioConfig.email}`,
    label: "Email",
  },
  {
    icon: <Twitter size={16} />,
    href: portfolioConfig.social?.twitter,
    label: "Twitter",
  },
];

export function Hero() {
  const [ref, isInView] = useInViewOnce({ threshold: 0.1 });

  return (
    <section id="home" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer(0.15)}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <motion.div variants={fadeInLeft} transition={transitionSlow}>
            <Badge variant="accent" dot className="mb-5">
              AVAILABLE FOR OPPORTUNITIES
            </Badge>

            <h1 className="text-4xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-5xl">
              I Build What Compiles.{" "}
              <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-primary-hover)] bg-clip-text text-transparent whitespace-nowrap">
                I Ship What Works.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[var(--color-text-secondary)]">
              From enterprise applications at Infor to AI-powered computer
              vision systems and scalable e-commerce platforms, I turn complex
              ideas into production-ready products.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {TRAITS.map((trait) => (
                <span
                  key={trait.label}
                  className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]"
                >
                  {/* Fixed: Updated icon theme color */}
                  <span className="text-[var(--color-accent-primary)]">
                    {trait.icon}
                  </span>
                  {trait.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={16} />}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </MagneticButton>
              <Button
                variant="secondary"
                size="lg"
                iconRight={<Mail size={15} />}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
              </Button>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs text-[var(--color-text-tertiary)]">
                Find me on
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    /* Fixed: Configured borders and interactions to respond to the primary purple accent token */
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent-primary)]/40 hover:text-[var(--color-accent-primary)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — code editor */}
          <motion.div
            variants={fadeInRight}
            transition={withDelay(transitionSlow, 0.15)}
          >
            <CodeEditor />
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          variants={staggerContainer(0.08, 0.4)}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-5"
        >
          {STATS.map((stat) => (
            <ValueCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
