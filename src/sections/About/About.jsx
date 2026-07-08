// src/sections/About/About.jsx

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, CheckCircle2, Globe2 } from "lucide-react";

import { Section } from "@/components/layout/Section.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Card } from "@/components/ui/Card.jsx";

import { fadeInLeft, fadeInRight } from "@/animations/variants.js";

import { transitionBase } from "@/animations/transitions.js";

import { portfolioConfig } from "@/config/portfolio.config.js";

const TRAITS = [
  "Problem Solver",
  "Detail Oriented",
  "Fast Learner",
  "Clean Code Advocate",
];

const INFO_ITEMS = [
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: portfolioConfig.location,
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: portfolioConfig.email,
  },
  {
    icon: <Phone size={16} />,
    label: "Phone",
    value: portfolioConfig.phone,
  },
  {
    icon: <CheckCircle2 size={16} />,
    label: "Availability",
    value: "Open to opportunities",
    accent: true,
  },
  {
    icon: <Globe2 size={16} />,
    label: "Languages",
    value: portfolioConfig.languages?.join(", "),
  },
];
console.log(portfolioConfig);
export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Curious. Driven. Always Building."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr_320px] lg:items-start">
        {/* Photo */}
        <motion.div variants={fadeInLeft} transition={transitionBase}>
          <div
            className="relative aspect-square overflow-hidden rounded-2xl"
            style={{
              border: "1px solid var(--color-border-default)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-primary-muted), transparent)",
              }}
            />

            <img
              src={portfolioConfig.photo}
              alt={portfolioConfig.name}
              className="relative h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div variants={fadeInLeft} transition={transitionBase}>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            I'm a Software Engineer who loves turning ideas into real-world
            applications. I enjoy solving problems, learning new technologies,
            and building products that make a difference.
          </p>

          <p
            className="mt-4 leading-relaxed"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            I've worked on enterprise platforms, AI models, robotics
            simulations, and e-commerce solutions. I thrive in fast-paced
            environments and enjoy tackling challenging problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TRAITS.map((trait) => (
              <Badge key={trait} variant="outline">
                {trait}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div variants={fadeInRight} transition={transitionBase}>
          <Card padding="lg" className="flex flex-col gap-5">
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span
                  style={{
                    color: item.accent
                      ? "var(--color-success)"
                      : "var(--color-accent-primary)",
                  }}
                >
                  {item.icon}
                </span>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{
                      color: item.accent
                        ? "var(--color-success)"
                        : "var(--color-accent-primary)",
                    }}
                  >
                    {item.label}
                  </p>

                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
