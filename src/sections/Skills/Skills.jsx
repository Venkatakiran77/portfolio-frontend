// src/sections/Skills/Skills.jsx

import { motion } from "framer-motion";
import { SkillCard } from "@/components/cards/SkillCard.jsx";
import { Section } from "@/components/layout/Section.jsx";
import { staggerContainer } from "@/animations/variants.js";
import { skillCategories, SKILL_CATEGORIES_ORDER } from "@/data/skills.data.js";

// One representative icon per category header (adjust to taste)
const CATEGORY_ICONS = {
  Frontend: "react",
  Backend: "nodejs",
  Database: "mysql",
  AI: "ai",
  DevOps: "docker",
  Tools: "vscode",
  Languages: "typescript",
};

function groupSkillsByCategory(skills) {
  const grouped = {};
  skills.forEach((skill) => {
    if (!grouped[skill.category]) grouped[skill.category] = [];
    grouped[skill.category].push(skill);
  });

  return SKILL_CATEGORIES_ORDER.filter((cat) => grouped[cat]?.length).map(
    (cat) => ({
      title: cat,
      icon: CATEGORY_ICONS[cat] || "api",
      skills: grouped[cat],
    }),
  );
}

export function Skills() {
  const groupedCategories = groupSkillsByCategory(skillCategories);

  return (
    <Section
      id="skills"
      eyebrow="Skills & Technologies"
      title="Technologies I work with"
      stagger={false}
    >
      {/* <div className="mb-2 flex justify-end">
        <a
          href="#"
          className="text-sm font-medium transition-colors duration-300 hover:opacity-80 hover:underline"
          style={{ color: "var(--color-accent-primary)" }}
        >
          View All Skills →
        </a>
      </div> */}

      <motion.div
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {groupedCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </motion.div>
    </Section>
  );
}

export default Skills;
