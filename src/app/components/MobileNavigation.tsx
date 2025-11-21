"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "../context/TranslationsContext";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNavigation() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
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
    <div className="lg:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors duration-200 cursor-pointer"
        aria-label="Toggle navigation menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
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
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl z-50"
          >
            <nav className="container mx-auto px-4 py-3">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="relative text-xs font-medium transition-all duration-300 px-3 py-2 rounded-lg text-left cursor-pointer overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active bubble background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNavBackground"
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
                        className={`relative z-10 transition-colors duration-300 ${
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
                          className="absolute -bottom-0.5 left-3 w-1.5 h-1.5 rounded-full"
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
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
