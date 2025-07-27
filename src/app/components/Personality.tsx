"use client";

import { useTranslations } from "../context/TranslationsContext";
import { AnimatedContent } from "./AnimatedContent";

export function Personality({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="personality" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.personality.title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {t.personality.items.map((trait, idx) => (
          <AnimatedContent
            key={idx}
            animationType="scale-in"
            delay={idx}
            parentVisible={isVisible}
          >
            <span className="bg-accent/20 px-3 py-1 rounded-full text-sm">
              {trait}
            </span>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
