"use client";

import { useTranslations } from "../context/TranslationsContext";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  const { t } = useTranslations();

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.projects.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {t.projects.items.map((project, index) => (
          <div key={index} className="card group">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-muted">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-sm" />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
