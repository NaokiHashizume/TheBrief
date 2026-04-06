"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-brief-border overflow-hidden text-[11px] font-medium tracking-wide">
      <button
        onClick={() => setLocale("ja")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "ja"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40 hover:text-foreground/60 hover:bg-foreground/5"
        }`}
        aria-label="日本語"
      >
        JP
      </button>
      <div className="w-px h-4 bg-brief-border" />
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-foreground/10 text-foreground"
            : "text-foreground/40 hover:text-foreground/60 hover:bg-foreground/5"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
