"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";

export function Navigation() {
  const { t } = useTranslations();
  const [activeSection, setActiveSection] = useState<string>("profile");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Header height with padding
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'profile',
        'experience',
        'projects',
        'technical-skills',
        'education',
        'skills',
        'contact',
      ];

      const headerHeight = 100;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollPosition + headerHeight;

      // Special handling for profile section (at the top)
      const profileSection = document.getElementById('profile');
      if (profileSection) {
        const profileRect = profileSection.getBoundingClientRect();
        // If profile section is still visible at the top, it should be active
        if (scrollPosition < 200 && profileRect.bottom > headerHeight) {
          setActiveSection('profile');
          return;
        }
      }

      // Find the section that is currently most visible in the viewport
      let currentSection = 'profile';
      let bestMatch = { id: 'profile', distance: Infinity, visibleRatio: 0 };

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          
          // Check if section is in viewport
          const isInViewport = rect.top < viewportHeight && rect.bottom > headerHeight;
          
          if (isInViewport) {
            // Calculate visible portion
            const visibleTop = Math.max(headerHeight, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleRatio = visibleHeight / rect.height;
            
            // Calculate distance from trigger point
            const distance = Math.abs(rect.top - headerHeight);
            
            // Prefer sections with higher visibility and closer to header
            if (visibleRatio > bestMatch.visibleRatio || 
                (Math.abs(visibleRatio - bestMatch.visibleRatio) < 0.1 && distance < bestMatch.distance)) {
              bestMatch = { id: sectionId, distance, visibleRatio };
              currentSection = sectionId;
            }
          }
        }
      });

      // If we're near the top and no section is clearly visible, default to profile
      if (scrollPosition < 300 && bestMatch.visibleRatio < 0.3) {
        currentSection = 'profile';
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const sections = [
    { id: 'profile', label: t.header.profile },
    { id: 'experience', label: t.experience.title },
    { id: 'projects', label: t.projects.title },
    { id: 'technical-skills', label: t.technicalSkills.title },
    { id: 'education', label: t.education.title },
    { id: 'skills', label: t.skills.title },
    { id: 'contact', label: t.contact.title },
  ];

  return (
    <div className="relative w-full hidden lg:block">
      <nav
        className="flex items-center gap-1.5 text-xs font-medium overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent px-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active bubble background */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-lg backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(16, 185, 129, 0.25) 100%)",
                  }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",
                }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Text content */}
              <span
                className={`relative z-10 font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-foreground/70'
                }`}
                style={isActive ? {
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                } : {}}
              >
                {section.label}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>
      {/* Optional: fade effect on edges for better UX */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
