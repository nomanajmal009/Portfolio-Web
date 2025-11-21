"use client";

import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";
import { Card } from "antd";
import {
  FaLaptopCode,
  FaTableTennis,
  FaFootballBall,
  FaMusic,
  FaPlane,
  FaGamepad,
  FaCode,
} from "react-icons/fa";

const hobbyIcons: { [key: string]: { icon: React.ReactNode; color: string; description: string } } = {
  "Technology": {
    icon: <FaLaptopCode className="text-3xl" />,
    color: "#3B82F6", // Blue
    description: "Exploring latest tech trends and innovations",
  },
  "Snooker": {
    icon: <FaTableTennis className="text-3xl" />,
    color: "#10B981", // Green
    description: "Enjoying strategic gameplay and precision",
  },
  "Football": {
    icon: <FaFootballBall className="text-3xl" />,
    color: "#F59E0B", // Amber
    description: "Passionate about the beautiful game",
  },
  "Listening Music": {
    icon: <FaMusic className="text-3xl" />,
    color: "#EC4899", // Pink
    description: "Music enthusiast across various genres",
  },
  "Traveling & Tourism": {
    icon: <FaPlane className="text-3xl" />,
    color: "#06B6D4", // Cyan
    description: "Exploring new places and cultures",
  },
  "Gaming": {
    icon: <FaGamepad className="text-3xl" />,
    color: "#8B5CF6", // Purple
    description: "Engaging in interactive gaming experiences",
  },
  "Coding": {
    icon: <FaCode className="text-3xl" />,
    color: "#EF4444", // Red
    description: "Passionate about programming and development",
  },
};

export function Hobbies({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="hobbies" className="py-6">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.hobbies.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.hobbies.items.map((hobby: string, idx: number) => {
          const hobbyData = hobbyIcons[hobby] || {
            icon: <FaCode className="text-3xl" />,
            color: "#6B7280",
            description: "Personal interest and hobby",
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
                  "--hover-color": hobbyData.color,
                } as React.CSSProperties & { "--hover-color": string }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const hoverColor = hobbyData.color;
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
                    style={{ color: hobbyData.color }}
                  >
                    {hobbyData.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {hobby}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hobbyData.description}
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
