// src/sections/Projects/ProjectCaseStudy.jsx

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll.js";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { modalOverlay, modalContent } from "@/animations/variants.js";
import { transitionSpringSoft } from "@/animations/transitions.js";

/**
 * @param {Object|null} project
 * @param {Function} onClose
 */
export function ProjectCaseStudy({ project, onClose }) {
  const isOpen = !!project;

  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transitionSpringSoft}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed left-1/2 top-1/2 z-[61] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-default)",
            }}
          >
            <div className="max-h-[85vh] overflow-y-auto">
              {/* Image */}
              <div className="relative aspect-video w-full">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2
                  id="case-study-title"
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--color-text-primary)",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {project.fullDescription || project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tags || []).map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      iconRight={<ExternalLink size={15} />}
                    >
                      Live Demo
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      iconLeft={<Github size={15} />}
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectCaseStudy;
