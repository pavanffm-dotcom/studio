'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import englishTranslations from '@/locales/en.json';
import hindiTranslations from '@/locales/hi.json';

type Language = 'english' | 'mandarin' | 'hindi' | 'spanish' | 'arabic' | 'french';

const translations = {
  english: englishTranslations,
  hindi: hindiTranslations,
  mandarin: {}, // Add other translations when available
  spanish: {},
  arabic: {},
  french: {},
};

// Helper to get nested value from object by string path
const get = (obj: any, path: string) => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) return path; // Return key if not found
  }
  return result;
};


interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string): string => {
    const langFile = translations[language] || translations['english'];
    const fallbackLangFile = translations['english'];
    return get(langFile, key) || get(fallbackLangFile, key);
  };
  
  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
