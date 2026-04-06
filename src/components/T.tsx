"use client";

import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

/**
 * Inline translated text component.
 * Use in Server Components for specific translatable strings.
 */
export function T({ k, ja, en }: { k?: TranslationKey; ja?: string; en?: string }) {
  const { locale, t } = useLanguage();
  if (k) return <>{t(k)}</>;
  return <>{locale === "en" ? (en ?? ja ?? "") : (ja ?? "")}</>;
}

/**
 * Show content only when locale matches.
 */
export function LangOnly({ lang, children }: { lang: "ja" | "en"; children: React.ReactNode }) {
  const { locale } = useLanguage();
  if (locale !== lang) return null;
  return <>{children}</>;
}
