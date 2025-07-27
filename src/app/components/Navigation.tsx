"use client";

import React from "react";
import { useTranslations } from "../context/TranslationsContext";

export function Navigation() {
  const { t } = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'education', label: t.education.title },
    { id: 'experience', label: t.experience.title },
    { id: 'projects', label: t.projects.title },
    { id: 'technical-skills', label: t.technicalSkills.title },
    { id: 'skills', label: t.skills.title },
    { id: 'contact', label: t.contact.title },
  ];

  return (
    <div className="relative w-full">
      <nav
        className="flex items-center gap-2 text-xs font-medium overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent px-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors duration-200"
          >
            {section.label}
          </button>
        ))}
      </nav>
      {/* Optional: fade effect on edges for better UX */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
} 