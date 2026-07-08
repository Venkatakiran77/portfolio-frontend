// src/pages/ProjectDetailPage.jsx

import { useParams, Link, Navigate } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { projectsData } from "@/data/projects.data.js";

export function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Back */}
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm transition-colors duration-300"
        style={{
          color: "var(--color-text-secondary)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-accent-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-text-secondary)";
        }}
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>

      {/* Hero Image */}
      <div
        className="aspect-video overflow-hidden rounded-2xl"
        style={{
          border: "1px solid var(--color-border-default)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title */}
      <h1
        className="mt-8 text-3xl font-bold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {project.title}
      </h1>

      {/* Description */}
      <p
        className="mt-4 leading-relaxed"
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
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" iconRight={<ExternalLink size={14} />}>
              Live Demo
            </Button>
          </a>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" iconLeft={<Github size={14} />}>
              View Code
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
