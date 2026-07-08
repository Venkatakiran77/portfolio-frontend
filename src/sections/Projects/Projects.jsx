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

  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Things I've Built"
      stagger={false}
    >
      {/* <div className="mb-2 flex justify-end">
        <a
          href="#"
          className="text-sm font-medium transition-colors duration-300 hover:opacity-80 hover:underline"
          style={{
            color: "var(--color-accent-primary)",
          }}
        >
          View All Projects →
        </a>
      </div> */}

      <motion.div
        variants={staggerContainer(0.12)}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featured.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setActiveProject}
          />
        ))}
      </motion.div>

      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Section>
  );
}

export default Projects;
