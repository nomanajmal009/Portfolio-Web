"use client";

import { useTranslations } from "../context/TranslationsContext";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

export function Experience() {
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
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-3">
                <FaBriefcase className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-light">
                    <FaBuilding className="text-sm" />
                    <p>{item.company}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted bg-muted/10 px-3 py-1 rounded-full">
                <FaCalendarAlt className="text-sm" />
                <span>{item.period}</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-muted">{item.description}</p>
              {item.description_2 && (
                <p className="text-muted">{item.description_2}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
