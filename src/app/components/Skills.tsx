"use client";

import { Card } from "antd";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaPuzzlePiece,
  FaMicrosoft,
  FaUserFriends,
  FaTasks,
  FaComments,
  FaKeyboard,
} from "react-icons/fa";

const skillIcons: { [key: string]: { icon: React.ReactNode; color: string } } = {
  "Strong Knowledge of Computer Science Concepts - OOP, Database, Operating System and Data Structures": {
    icon: <FaLaptopCode className="text-3xl" />,
    color: "#3B82F6", // Blue
  },
  "Excellent conceptual and analytical skills": {
    icon: <FaBrain className="text-3xl" />,
    color: "#8B5CF6", // Purple
  },
  "Effective interpersonal skills": {
    icon: <FaUsers className="text-3xl" />,
    color: "#10B981", // Green
  },
  "Good Problem Solving and Logic Building": {
    icon: <FaPuzzlePiece className="text-3xl" />,
    color: "#F59E0B", // Amber
  },
  "Excellent Grip on Microsoft (Word, Excel, and PowerPoint)": {
    icon: <FaMicrosoft className="text-3xl" />,
    color: "#EF4444", // Red
  },
  "Great Team Player": {
    icon: <FaUserFriends className="text-3xl" />,
    color: "#06B6D4", // Cyan
  },
  "Great Management Skills": {
    icon: <FaTasks className="text-3xl" />,
    color: "#EC4899", // Pink
  },
  "Good communication - written and oral skills": {
    icon: <FaComments className="text-3xl" />,
    color: "#14B8A6", // Teal
  },
  "Excellent Typing Speed": {
    icon: <FaKeyboard className="text-3xl" />,
    color: "#F97316", // Orange
  },
};

export function Skills() {
  const { t } = useTranslations();
  
  // Duplicate items for seamless infinite scroll
  const skills = [...t.skills.items, ...t.skills.items];

  return (
    <section id="skills" className="py-6 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.skills.title}
      </h2>
      <div className="relative w-full">
        <div className="overflow-hidden py-2">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, `-${(100 / 3) * t.skills.items.length}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {skills.map((skill, index) => {
              const skillData = skillIcons[skill] || {
                icon: <FaLaptopCode className="text-3xl" />,
                color: "#6B7280",
              };

              return (
                <div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: "calc(33.333% - 11px)" }}
                >
                  <Card
                    hoverable
                    className="h-full transition-all duration-300 group relative"
                    styles={{
                      body: { padding: 24 },
                    }}
                    style={{
                      backgroundColor: "var(--card)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget;
                      const hoverColor = skillData.color;
                      card.style.backgroundColor = `${hoverColor}15`;
                      card.style.borderWidth = "2px";
                      card.style.borderStyle = "solid";
                      card.style.borderColor = hoverColor;
                      card.style.transform = "translateY(-4px)";
                      card.style.boxShadow = `0 8px 16px ${hoverColor}30`;
                      card.style.zIndex = "10";
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget;
                      card.style.backgroundColor = "var(--card)";
                      card.style.borderWidth = "1px";
                      card.style.borderStyle = "solid";
                      card.style.borderColor = "var(--border)";
                      card.style.transform = "translateY(0)";
                      card.style.boxShadow = "";
                      card.style.zIndex = "1";
                    }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className="transition-colors duration-300"
                        style={{ color: skillData.color }}
                      >
                        {skillData.icon}
                      </div>
                      <h3 className="font-semibold text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors">
                        {skill}
                      </h3>
                    </div>
                  </Card>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
