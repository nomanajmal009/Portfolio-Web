"use client";

import { useTranslations } from "../context/TranslationsContext";
import { AnimatedContent } from "./AnimatedContent";

export function Hobbies({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="hobbies" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.hobbies.title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {t.hobbies.items.map((hobby: string, idx: number) => (
          <AnimatedContent
            key={idx}
            animationType="scale-in"
            delay={idx}
            parentVisible={isVisible}
          >
            <span className="bg-accent/20 px-3 py-1 rounded-full text-sm">
              {hobby}
            </span>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
