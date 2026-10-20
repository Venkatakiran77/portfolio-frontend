// src/sections/Projects/Projects.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/cards/ProjectCard.jsx";
import { ProjectCaseStudy } from "./ProjectCaseStudy.jsx";
import { Section } from "@/components/layout/Section.jsx";
import { staggerContainer } from "@/animations/variants.js";
import { projectsData } from "@/data/projects.data.js";

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // First three featured projects are always visible.
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  // Everything else is revealed by "Show More Projects".
  const featuredIds = new Set(featured.map((p) => p.id));
  const more = projectsData.filter((p) => !featuredIds.has(p.id));

  const visibleProjects = showAll ? [...featured, ...more] : featured;

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Things I've Built"
      stagger={false}
    >
      <motion.div
        variants={staggerContainer(0.12)}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setActiveProject}
          />
        ))}
      </motion.div>

      {more.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="rounded-md border px-5 py-2 text-sm font-medium transition-colors duration-300 hover:opacity-80"
            style={{
              color: "var(--color-accent-primary)",
              borderColor: "var(--color-accent-primary)",
            }}
          >
            {showAll ? "Show Less ↑" : `Show More Projects (${more.length}) ↓`}
          </button>
        </div>
      )}

      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Section>
  );
}

export default Projects;
