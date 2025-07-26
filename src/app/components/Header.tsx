"use client";

import Image from "next/image";
import { useTranslations } from "../context/TranslationsContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import ProfilePicture from "../../../public/profile.jpeg";

export function Header() {
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-border fade-in visible">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={ProfilePicture}
                alt="Profile"
                width={56}
                height={56}
                className="rounded-full border-2 border-primary shadow-card transition-transform hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">
                {t.header.name}
              </h1>
              <p className="text-primary-light">{t.header.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
