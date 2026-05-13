import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type LanguageCode } from "./translations";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: Dictionary;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on SSR + first client render to avoid hydration mismatch.
  const [lang, setLangState] = useState<LanguageCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && saved in dictionaries) setLangState(saved);
    } catch {
      // ignore
    }
  }, []);

  const setLang = (l: LanguageCode) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
