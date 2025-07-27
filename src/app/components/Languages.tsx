"use client";

import { useTranslations } from "../context/TranslationsContext";

export function Languages() {
  const { t } = useTranslations();

  return (
    <section id="languages" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.languages.title}
      </h2>
      <div className="flex flex-col gap-4">
        {t.languages.items.map((lang, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="font-medium w-32">{lang.name}</span>
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < lang.level ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
