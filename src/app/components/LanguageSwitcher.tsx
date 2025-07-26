'use client';

import { useTranslations } from '../context/TranslationsContext';
import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = {
    en: 'English',
    ar: 'العربية'
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as 'en' | 'ar');
    setIsOpen(false);
    // Update URL to reflect language change
    const path = window.location.pathname;
    const newPath = path.replace(/^\/[a-z]{2}/, '') || '/';
    window.history.pushState({}, '', `/${newLang}${newPath}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent/10 transition-colors"
      >
        <FaGlobe className="text-primary" />
        <span className="text-sm font-medium">{languages[language]}</span>
        <FaChevronDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-background backdrop-blur-sm rounded-lg shadow-lg border border-border z-50">
          {Object.entries(languages).map(([code, name]) => {
            if (code === language) return null;
            return (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-accent/10 transition-colors"
              >
                {name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
} 