/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale, TranslationKey } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ja",
  setLocale: () => {},
  t: (key) => translate(key, "ja"),
});

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "ja";
  try {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "ja") return saved;
  } catch {
    /* ignore */
  }
  return "ja";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR では常に "ja"。クライアント初回描画では遅延初期化で stored 値を読む
  const [locale, setLocaleState] = useState<Locale>("ja");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration safety: SSR は "ja" 固定で描画し、マウント後に保存値へ切替
    const saved = readStoredLocale();
    setMounted(true);
    if (saved !== "ja") setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translate(key, locale),
    [locale]
  );

  // Prevent hydration mismatch: render ja on server, switch after mount
  const contextValue: LanguageContextType = {
    locale: mounted ? locale : "ja",
    setLocale,
    t: mounted ? t : (key) => translate(key, "ja"),
  };

  return (
    <LanguageContext value={contextValue}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
