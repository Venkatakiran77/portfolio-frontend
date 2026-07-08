// src/components/cards/ProjectCard.jsx

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { fadeInUp } from "@/animations/variants.js";
import { hoverLift } from "@/animations/transitions.js";

/**
 * @param {Object} project
 * @param {string} project.title
 * @param {string} project.description
 * @param {string} project.coverImage
 * @param {string[]} project.tags
 * @param {string} [project.liveUrl]
 * @param {string} [project.githubUrl]
 * @param {string} [project.linkLabel]
 * @param {Function} [onViewDetails]
 */
export function ProjectCard({ project, onViewDetails }) {
  const {
    title,
    description,
    coverImage,
    tags = [],
    liveUrl,
    githubUrl,
    linkLabel = "Live Demo",
  } = project;

  return (
    <motion.div variants={fadeInUp} whileHover={hoverLift}>
      <Card
        hoverable
        padding="none"
        className="group cursor-pointer overflow-hidden"
        onClick={() => onViewDetails?.(project)}
      >
        {/* Image */}
        <div
          className="aspect-video w-full overflow-hidden"
          style={{
            background: "var(--color-bg-secondary)",
          }}
        >
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className="text-base font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            {title}
          </h3>

          <p
            className="mt-2 line-clamp-2 text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center gap-5 text-sm">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 transition-colors duration-300 hover:underline"
                style={{
                  color: "var(--color-accent-primary)",
                }}
              >
                {linkLabel}
                <ExternalLink size={13} />
              </a>
            ) : (
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  color: "var(--color-accent-primary)",
                }}
              >
                🚧 Coming Soon
              </span>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 transition-colors duration-300"
                style={{
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                }}
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
