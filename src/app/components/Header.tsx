"use client";

import Image from "next/image";
import { useTranslations } from "../context/TranslationsContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import ProfilePicture from "../../../public/profile.jpeg";

export function Header() {
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-border fade-in visible">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Profile and Name */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <Image
                src={ProfilePicture}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full border-2 border-primary shadow-card transition-transform hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient leading-tight">
                {t.header.name}
              </h1>
              <p className="text-sm text-primary-light leading-tight">
                {t.header.title}
              </p>
            </div>
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

