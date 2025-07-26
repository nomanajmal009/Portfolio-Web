'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/translations';
import { Translation } from '@/translations/types';

type Language = keyof typeof translations;

interface TranslationsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get the language from the URL path
    const path = window.location.pathname;
    const lang = path.split('/')[1] as Language;
    if (lang && (lang === 'en' || lang === 'ar')) {
      setLanguage(lang);
    }
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
} 