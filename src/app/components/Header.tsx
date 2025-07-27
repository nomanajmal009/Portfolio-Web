"use client";

import { useTranslations } from "../context/TranslationsContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-border fade-in visible">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Portfolio Title */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xl font-bold text-gradient leading-tight">
              Portfolio
            </h1>
          </div>

          {/* Right: Navigation and Controls */}
          <div className="flex items-center gap-4">
            <Navigation />
            <ThemeToggle />
            <LanguageSwitcher />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}

