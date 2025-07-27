"use client";

import { useTranslations } from "../context/TranslationsContext";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { AnimatedContent } from "./AnimatedContent";

export function Education({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="education" className="py-12 mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.education.title}
      </h2>
      <div className="grid gap-6">
        {t.education.items.map((item, index) => (
          <div
            key={index}
            className="card p-6 hover:border-primary/20 transition-colors"
          >
            <AnimatedContent animationType="slide-up" delay={0} parentVisible={isVisible}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-2xl text-primary mt-1" />
                  <div>
                    <AnimatedContent animationType="slide-left" delay={1} parentVisible={isVisible}>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                    </AnimatedContent>
                    <AnimatedContent animationType="slide-left" delay={2} parentVisible={isVisible}>
                      <div className="flex items-center gap-2 text-primary-light">
                        <FaUniversity className="text-sm" />
                        <p>{item.institution}</p>
                      </div>
                    </AnimatedContent>
                  </div>
                </div>
                <AnimatedContent animationType="slide-right" delay={3} parentVisible={isVisible}>
                  <div className="flex items-center gap-2 text-sm text-muted bg-muted/10 px-3 py-1 rounded-full">
                    <FaCalendarAlt className="text-sm" />
                    <span>{item.period}</span>
                  </div>
                </AnimatedContent>
              </div>
              <AnimatedContent animationType="fade-in" delay={4} parentVisible={isVisible}>
                <p className="text-muted">{item.description}</p>
              </AnimatedContent>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </section>
  );
}
