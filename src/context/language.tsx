"use client";
import { createContext, useState, useContext } from "react";
import { languages } from "./languages";
import type { PropsWithChildren } from "react";
import type { Language } from "../types";

type LanguageState = {
  languages: Array<Language>;
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialLanguageState: LanguageState = {
  languages,
  language: languages[0],
  setLanguage: () => undefined,
};

const LanguageContext = createContext<LanguageState>(initialLanguageState);

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);

  return (
    <LanguageContext.Provider value={{ languages, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
