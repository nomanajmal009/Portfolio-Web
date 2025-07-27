"use client";

import { useTranslations } from "../context/TranslationsContext";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { AnimatedContent } from "./AnimatedContent";

export function Experience({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.experience.title}
      </h2>
      <div className="grid gap-6">
        {t.experience.items.map((item, index) => (
          <div
            key={index}
            className="card p-6 hover:border-primary/20 transition-colors"
          >
            <AnimatedContent animationType="slide-up" delay={0} parentVisible={isVisible}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                  <FaBriefcase className="text-2xl text-primary mt-1" />
                  <div>
                    <AnimatedContent animationType="slide-left" delay={1} parentVisible={isVisible}>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                    </AnimatedContent>
                    <AnimatedContent animationType="slide-left" delay={2} parentVisible={isVisible}>
                      <div className="flex items-center gap-2 text-primary-light">
                        <FaBuilding className="text-sm" />
                        <p>{item.company}</p>
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
                <div className="space-y-3">
                  <p className="text-muted">{item.description}</p>
                  {item.description_2 && (
                    <p className="text-muted">{item.description_2}</p>
                  )}
                </div>
              </AnimatedContent>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </section>
  );
}
