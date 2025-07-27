"use client";

import { useTranslations } from "../context/TranslationsContext";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AnimatedContent } from "./AnimatedContent";

export function Certifications({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="certifications" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.certifications.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.certifications.items.map((cert, index) => (
          <div
            key={index}
            className="card p-6 hover:border-primary/20 transition-colors"
          >
            <AnimatedContent animationType="scale-in" delay={0} parentVisible={isVisible}>
              <div className="flex items-start gap-3 mb-4">
                <FaCertificate className="text-2xl text-primary mt-1" />
                <div>
                  <AnimatedContent animationType="slide-left" delay={1} parentVisible={isVisible}>
                    <h3 className="text-xl font-semibold text-foreground">
                      {cert.name}
                    </h3>
                  </AnimatedContent>
                  <AnimatedContent animationType="slide-left" delay={2} parentVisible={isVisible}>
                    <p className="text-primary-light">{cert.issuer}</p>
                  </AnimatedContent>
                </div>
              </div>
              {cert.date && (
                <AnimatedContent animationType="fade-in" delay={3} parentVisible={isVisible}>
                  <div className="flex items-center gap-2 text-sm text-muted mb-4">
                    <FaCalendarAlt className="text-sm" />
                    <span>{cert.date}</span>
                  </div>
                </AnimatedContent>
              )}
              {cert.link && (
                <AnimatedContent animationType="slide-right" delay={4} parentVisible={isVisible}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Certificate
                  </a>
                </AnimatedContent>
              )}
            </AnimatedContent>
          </div>
        ))}
      </div>
    </section>
  );
}
