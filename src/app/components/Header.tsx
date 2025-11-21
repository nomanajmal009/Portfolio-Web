"use client";

import Image from "next/image";
import { useTranslations } from "../context/TranslationsContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import ProfilePicture from "../../../public/profile.jpeg";
import { motion } from "framer-motion";

export function Header() {
  const { t } = useTranslations();

  const scrollToProfile = () => {
    const element = document.getElementById("profile");
    if (element) {
      const headerHeight = 80; // Header height with padding
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-border/50 backdrop-blur-xl bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Profile Picture, Name, and Portfolio Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <button
              onClick={scrollToProfile}
              className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                <Image
                  src={ProfilePicture}
                  alt="Profile"
                    width={45}
                    height={45}
                    className="rounded-full border-2 border-primary shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300"
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-gradient leading-tight group-hover:scale-105 transition-transform duration-300">
                  {t.header.name}
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.header.title}
                </p>
              </div>
            </button>
          </motion.div>

          {/* Right: Navigation and Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Navigation />
            <ThemeToggle />
            <LanguageSwitcher />
            <MobileNavigation />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
