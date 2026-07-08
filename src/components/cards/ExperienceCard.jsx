// src/components/cards/ExperienceCard.jsx

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card.jsx";
import { fadeInUp } from "@/animations/variants.js";

/**
 * @param {Object} experience
 * @param {string} experience.company
 * @param {string} experience.role
 * @param {string} experience.dateRange
 * @param {string} experience.duration
 * @param {React.ReactNode} experience.logo
 * @param {string[]} experience.bullets
 * @param {boolean} [isLast=false]
 */
export function ExperienceCard({ experience, isLast = false }) {
  const { company, role, dateRange, duration, logo, bullets = [] } = experience;

  return (
    <motion.div variants={fadeInUp} className="relative flex gap-5 pb-8">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <span
          className="z-10 h-3 w-3 flex-shrink-0 rounded-full border-2"
          style={{
            borderColor: "var(--color-accent-primary)",
            background: "var(--color-bg-primary)",
          }}
        />

        {!isLast && (
          <span
            className="mt-1 w-px flex-1"
            style={{
              background: "var(--color-border-default)",
            }}
          />
        )}
      </div>

      <Card hoverable padding="md" className="flex-1">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          {/* Company */}
          <div className="flex items-start gap-3">
            <span
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold"
              style={{
                background: "var(--color-bg-elevated)",
                color: "var(--color-accent-primary)",
              }}
            >
              <img
                src={logo}
                alt={company}
                className="h-8 w-8 object-contain"
              />
            </span>

            <div>
              <h3
                className="text-sm font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                {company}
              </h3>

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

          {/* Date */}
          <div className="text-right">
            <p
              className="text-xs font-medium"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {dateRange}
            </p>

            <p
              className="text-xs"
              style={{
                color: "var(--color-text-tertiary)",
              }}
            >
              {duration}
            </p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-2 text-xs"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{
                  background: "var(--color-accent-primary)",
                }}
              />

              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export default ExperienceCard;
