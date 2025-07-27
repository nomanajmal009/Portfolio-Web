"use client";

import { useTranslations } from "../context/TranslationsContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatedContent } from "./AnimatedContent";

export function Projects({ isVisible = true }: { isVisible?: boolean }) {
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
              <AnimatedContent animationType="slide-up" delay={0} parentVisible={isVisible}>
                <div className="mb-4">
                  <AnimatedContent animationType="slide-left" delay={1} parentVisible={isVisible}>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.name}
                    </h3>
                  </AnimatedContent>
                  <AnimatedContent animationType="fade-in" delay={2} parentVisible={isVisible}>
                    <p className="text-muted">{project.description}</p>
                  </AnimatedContent>
                </div>
                <AnimatedContent animationType="scale-in" delay={3} parentVisible={isVisible}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <AnimatedContent 
                        key={techIndex}
                        animationType="scale-in" 
                        delay={4 + techIndex}
                        parentVisible={isVisible}
                      >
                        <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      </AnimatedContent>
                    ))}
                  </div>
                </AnimatedContent>
                <AnimatedContent animationType="slide-right" delay={5} parentVisible={isVisible}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Project
                  </a>
                </AnimatedContent>
              </AnimatedContent>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
