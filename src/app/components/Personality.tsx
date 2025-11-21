"use client";

import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";
import { Card } from "antd";
import {
  FaComments,
  FaLightbulb,
  FaExchangeAlt,
  FaPuzzlePiece,
  FaRocket,
  FaClock,
  FaFolderOpen,
  FaBrain,
  FaCalendarCheck,
} from "react-icons/fa";

const personalityIcons: { [key: string]: { icon: React.ReactNode; color: string; description: string } } = {
  "Communicative": {
    icon: <FaComments className="text-3xl" />,
    color: "#3B82F6", // Blue
    description: "Excellent communication skills with team members and stakeholders",
  },
  "Creativity": {
    icon: <FaLightbulb className="text-3xl" />,
    color: "#F59E0B", // Amber
    description: "Innovative thinking and creative problem-solving approaches",
  },
  "Flexibility/adaptability": {
    icon: <FaExchangeAlt className="text-3xl" />,
    color: "#10B981", // Green
    description: "Adaptable to changing requirements and new technologies",
  },
  "Problem-solving": {
    icon: <FaPuzzlePiece className="text-3xl" />,
    color: "#8B5CF6", // Purple
    description: "Strong analytical skills and systematic approach to challenges",
  },
  "Self-motivated": {
    icon: <FaRocket className="text-3xl" />,
    color: "#EF4444", // Red
    description: "Proactive and driven to achieve goals independently",
  },
  "Punctuality": {
    icon: <FaClock className="text-3xl" />,
    color: "#06B6D4", // Cyan
    description: "Consistent in meeting deadlines and commitments",
  },
  "Organized": {
    icon: <FaFolderOpen className="text-3xl" />,
    color: "#F97316", // Orange
    description: "Well-structured workflow and systematic organization",
  },
  "Critical thinking": {
    icon: <FaBrain className="text-3xl" />,
    color: "#EC4899", // Pink
    description: "Analytical reasoning and thoughtful decision-making",
  },
  "Time management": {
    icon: <FaCalendarCheck className="text-3xl" />,
    color: "#14B8A6", // Teal
    description: "Efficient prioritization and effective task scheduling",
  },
};

export function Personality({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="personality" className="py-6">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.personality.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.personality.items.map((trait, idx) => {
          const traitData = personalityIcons[trait] || {
            icon: <FaBrain className="text-3xl" />,
            color: "#6B7280",
            description: "Personal trait and characteristic",
          };

          return (
            <motion.div
            key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
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
                  "--hover-color": traitData.color,
                } as React.CSSProperties & { "--hover-color": string }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const hoverColor = traitData.color;
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
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="transition-colors duration-300"
                    style={{ color: traitData.color }}
                  >
                    {traitData.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {trait}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {traitData.description}
                    </p>
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
