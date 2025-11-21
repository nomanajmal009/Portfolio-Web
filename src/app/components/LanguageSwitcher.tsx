"use client";

import { useTranslations } from "../context/TranslationsContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = {
    en: {
      name: "English",
      flag: "🇬🇧",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
    },
    ar: {
      name: "العربية",
      flag: "🇸🇦",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as "en" | "ar");
    setIsOpen(false);
    // Update URL to reflect language change
    const path = window.location.pathname;
    const newPath = path.replace(/^\/[a-z]{2}/, "") || "/";
    window.history.pushState({}, "", `/${newLang}${newPath}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages[language];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 group cursor-pointer overflow-hidden relative"
        style={{
          background: currentLang.gradient,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        <span className="text-xl relative z-10">{currentLang.flag}</span>
        <span className="text-sm font-semibold text-white drop-shadow-sm relative z-10">
          {currentLang.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <FaChevronDown className="text-xs text-white/90" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 py-2 w-44 bg-background backdrop-blur-xl rounded-xl shadow-xl border border-border/50 z-50 overflow-hidden"
          >
            {Object.entries(languages).map(([code, lang]) => {
              if (code === language) return null;
              return (
                <motion.button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-accent/10 transition-colors cursor-pointer flex items-center gap-3 group"
                  whileHover={{ x: 4 }}
                  style={{
                    background: code === language ? lang.gradient : "transparent",
                  }}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {lang.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
