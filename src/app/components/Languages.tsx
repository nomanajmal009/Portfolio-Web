"use client";

import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";
import { Card } from "antd";
import { FaLanguage, FaGlobe, FaComments, FaBook } from "react-icons/fa";

const languageIcons: { [key: string]: { icon: React.ReactNode; color: string; description: string } } = {
  "English": {
    icon: <FaGlobe className="text-3xl" />,
    color: "#3B82F6", // Blue
    description: "Fluent in speaking, reading, and writing",
  },
  "Urdu": {
    icon: <FaLanguage className="text-3xl" />,
    color: "#10B981", // Green
    description: "Native proficiency in all aspects",
  },
  "Punjabi": {
    icon: <FaComments className="text-3xl" />,
    color: "#F59E0B", // Amber
    description: "Native speaker with full fluency",
  },
  "Arabic": {
    icon: <FaBook className="text-3xl" />,
    color: "#EF4444", // Red
    description: "Conversational level, improving continuously",
  },
};

const getProficiencyText = (level: number) => {
  const levels = [
    "Beginner",
    "Elementary",
    "Intermediate",
    "Upper Intermediate",
    "Advanced",
    "Native/Fluent",
  ];
  return levels[level - 1] || "Unknown";
};

export function Languages() {
  const { t } = useTranslations();

  return (
    <section id="languages" className="py-6">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.languages.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.languages.items.map((lang, idx) => {
          const langData = languageIcons[lang.name] || {
            icon: <FaLanguage className="text-3xl" />,
            color: "#6B7280",
            description: "Language proficiency",
          };

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                hoverable
                className="h-full border-border transition-all duration-300 group relative overflow-hidden"
                styles={{
                  body: { padding: 24 },
                }}
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  "--hover-color": langData.color,
                } as React.CSSProperties & { "--hover-color": string }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const hoverColor = langData.color;
                  card.style.backgroundColor = `${hoverColor}15`;
                  card.style.borderColor = hoverColor;
                  card.style.transform = "translateY(-4px)";
                  card.style.boxShadow = `0 8px 16px ${hoverColor}30`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "var(--card)";
                  card.style.borderColor = "";
                  card.style.transform = "translateY(0)";
                  card.style.boxShadow = "";
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="transition-colors duration-300"
                      style={{ color: langData.color }}
                    >
                      {langData.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {getProficiencyText(lang.level)} - {lang.level}/5
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {langData.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Proficiency:</span>
                    <div className="flex gap-1 flex-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-2 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: i < lang.level ? langData.color : "#E5E7EB",
                            opacity: i < lang.level ? 1 : 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
