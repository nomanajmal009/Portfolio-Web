"use client";

import { useTranslations } from "../context/TranslationsContext";

export function Hobbies() {
  const { t } = useTranslations();

  return (
    <section id="hobbies" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.hobbies.title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {t.hobbies.items.map((hobby: string, idx: number) => (
          <span
            key={idx}
            className="bg-accent/20 px-3 py-1 rounded-full text-sm"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
