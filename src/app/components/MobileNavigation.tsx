"use client";

import { useState } from "react";
import { useTranslations } from "../context/TranslationsContext";

export function MobileNavigation() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
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
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg z-50">
          <nav className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-xs font-medium text-foreground/70 hover:text-primary transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-primary/10 text-left"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
} 