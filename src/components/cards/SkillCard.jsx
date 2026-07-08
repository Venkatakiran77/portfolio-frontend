// src/components/cards/SkillCard.jsx

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card.jsx";
import { scaleIn } from "@/animations/variants.js";
import { getSkillIcon, getSkillColor } from "@/utils/iconMap.jsx";

/**
 * @param {Object} category
 * @param {string} category.title
 * @param {React.ReactNode} category.icon
 * @param {{ name: string, icon: React.ReactNode }[]} category.skills
 */
export function SkillCard({ category }) {
  const { title, icon, skills = [] } = category;

  return (
    <motion.div variants={scaleIn}>
      <Card hoverable padding="md" className="h-full">
        {/* Header */}
        <div
          className="mb-4 flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          <span
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-sm"
            style={{
              color: "var(--color-accent-primary)",
              background: "var(--color-bg-secondary)",
            }}
          >
            {getSkillIcon(icon)}
          </span>
          {title}
        </div>

        {/* Skills — flat wrap layout, no boxes */}
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {skills.map((skill) => (
            <div
              key={skill?.name || skill}
              className="flex items-center gap-1.5 text-xs font-medium transition-transform duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <span
                className="flex-shrink-0 text-base"
                style={{ color: getSkillColor(skill?.icon) }}
              >
                {getSkillIcon(skill?.icon)}
              </span>
              <span>{skill?.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default SkillCard;
