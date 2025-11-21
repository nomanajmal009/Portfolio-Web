"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
  FaCode,
  FaMobile,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNpm,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaLaravel,
  FaPhp,
  FaAngular,
  FaVuejs,
  FaFigma,
  FaSketch,
  FaAd,
  FaChartLine,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaLock,
  FaUserShield,
  FaBug,
  FaTerminal,
  FaKeyboard,
  FaDesktop,
  FaTabletAlt,
  FaGlobe,
  FaSearch,
  FaCogs,
  FaTools,
  FaWrench,
  FaHammer,
  FaPuzzlePiece,
  FaLightbulb,
  FaBrain,
  FaRocket,
  FaFire,
  FaStar,
  FaHeart,
  FaMagic,
  FaHandSparkles,
  FaWind,
} from "react-icons/fa";
import {
  SiSharp,
  SiCplusplus,
  SiDotnet,
  SiTailwindcss,
  SiJquery,
  SiGraphql,
  SiJira,
  SiPostgresql,
  SiJenkins,
  SiR,
  SiLinux,
  SiUbuntu,
} from "react-icons/si";

// Default icons array
const defaultIcons = [
  { icon: FaReact, color: "#61DAFB" },
  { icon: FaNodeJs, color: "#339933" },
  { icon: FaPython, color: "#3776AB" },
  { icon: FaJava, color: "#ED8B00" },
  { icon: FaDocker, color: "#2496ED" },
  { icon: FaAws, color: "#FF9900" },
  { icon: FaDatabase, color: "#336791" },
  { icon: FaCode, color: "#3178C6" },
  { icon: FaMobile, color: "#FF6B6B" },
  { icon: FaServer, color: "#6C757D" },
  { icon: FaCloud, color: "#4285F4" },
  { icon: FaShieldAlt, color: "#6C757D" },
  { icon: FaHtml5, color: "#E34F26" },
  { icon: FaCss3Alt, color: "#1572B6" },
  { icon: FaJs, color: "#F7DF1E" },
  { icon: FaGitAlt, color: "#F05032" },
  { icon: FaNpm, color: "#CB3837" },
  { icon: FaSass, color: "#CC6699" },
  { icon: FaBootstrap, color: "#7952B3" },
  { icon: FaWordpress, color: "#21759B" },
  { icon: FaLaravel, color: "#FF2D20" },
  { icon: FaPhp, color: "#777BB4" },
  { icon: FaAngular, color: "#DD0031" },
  { icon: FaVuejs, color: "#4FC08D" },
  { icon: SiTailwindcss, color: "#06B6D4" },
  { icon: SiDotnet, color: "#512BD4" },
  { icon: SiSharp, color: "#239120" },
  { icon: SiPostgresql, color: "#336791" },
  { icon: SiJira, color: "#0052CC" },
  { icon: SiJenkins, color: "#D24939" },
  { icon: SiR, color: "#276DC3" },
  { icon: SiLinux, color: "#FCC624" },
  { icon: FaRobot, color: "#6C757D" },
  { icon: FaChartLine, color: "#6C757D" },
  { icon: FaBug, color: "#6C757D" },
  { icon: FaTerminal, color: "#6C757D" },
  { icon: FaGlobe, color: "#6C757D" },
  { icon: SiGraphql, color: "#E10098" },
  { icon: FaMicrochip, color: "#6C757D" },
  { icon: FaLock, color: "#6C757D" },
  { icon: FaUserShield, color: "#6C757D" },
  { icon: FaSearch, color: "#6C757D" },
  { icon: FaTools, color: "#6C757D" },
  { icon: FaWrench, color: "#6C757D" },
  { icon: FaHammer, color: "#6C757D" },
  { icon: FaPuzzlePiece, color: "#6C757D" },
  { icon: FaLightbulb, color: "#6C757D" },
  { icon: FaBrain, color: "#6C757D" },
  { icon: FaRocket, color: "#6C757D" },
  { icon: FaFire, color: "#6C757D" },
  { icon: FaStar, color: "#6C757D" },
  { icon: FaHeart, color: "#6C757D" },
  { icon: FaMagic, color: "#6C757D" },
  { icon: FaHandSparkles, color: "#6C757D" },
  { icon: FaWind, color: "#6C757D" },
];

interface IconData {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface RotatingIconsRingProps {
  icons?: IconData[];
  circleSize?: number;
  radius?: number;
  duration?: number;
}

export function RotatingIconsRing({
  icons = defaultIcons,
  circleSize = 200,
  radius = 80,
  duration = 8,
}: RotatingIconsRingProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const iconCount = icons.length;
  const angleStep = 360 / iconCount;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative w-full h-full">
        {icons.map((iconData, index) => {
          const IconComponent = iconData.icon;
          const initialAngle = index * angleStep;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'center center',
              }}
              animate={{
                rotate: [initialAngle, initialAngle - 360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) translateX(${radius}px)`,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <IconComponent
                    className="text-2xl transition-opacity duration-300 drop-shadow-lg"
                    style={{
                      color: iconData.color,
                      opacity: 0.4,
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
