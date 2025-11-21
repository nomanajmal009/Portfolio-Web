"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 hover:from-amber-400/30 hover:to-orange-500/30 transition-all duration-300 cursor-pointer"
        aria-label="Loading theme toggle"
      >
        <div className="w-5 h-5 animate-pulse bg-amber-400/40 rounded" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-xl transition-all duration-300 group cursor-pointer overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)"
          : "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white/80 animate-pulse shadow-lg" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card text-card-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg border border-border z-50">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? [0, 360] : [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 0.5 },
          scale: { duration: 0.3 },
        }}
        className="relative z-10"
      >
        {isDark ? (
          <FaMoon className="w-5 h-5 text-white drop-shadow-lg" />
        ) : (
          <FaSun className="w-5 h-5 text-white drop-shadow-lg" />
        )}
      </motion.div>
    </motion.button>
  );
}
