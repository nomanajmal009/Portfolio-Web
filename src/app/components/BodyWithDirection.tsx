"use client";

import { useTranslations } from "../context/TranslationsContext";
import { useEffect } from "react";

export function BodyWithDirection({ children }: { children: React.ReactNode }) {
  const { language } = useTranslations();

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
