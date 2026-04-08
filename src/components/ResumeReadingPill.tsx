"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

type Item = {
  href: string;
  title: string;
  titleEn?: string;
  category: string;
  readTime?: string;
  ts: number;
};

const KEY = "thebrief.recent-reads";

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

export function ResumeReadingPill() {
  const { locale } = useLanguage();
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  let item: Item | null = null;
  if (raw) {
    try {
      const list: Item[] = JSON.parse(raw);
      if (list.length > 0) item = list[0];
    } catch {
      // ignore
    }
  }

  if (!item || dismissed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[min(560px,calc(100vw-24px))] px-3 sm:px-0">
      <div className="flex items-center gap-3 rounded-full border border-brief-border bg-brief-card/95 backdrop-blur-md px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <span className="hidden sm:flex h-7 w-7 items-center justify-center rounded-full bg-brief-red/10 text-brief-red text-xs flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[9px] uppercase tracking-[2px] text-foreground/45 font-semibold">
            {locale === "ja" ? "続きを読む" : "Resume reading"}
          </div>
          <Link
            href={item.href}
            className="block truncate text-[13px] font-semibold leading-tight headline-hover"
          >
            {locale === "ja" ? item.title : item.titleEn ?? item.title}
          </Link>
        </div>
        <Link
          href={item.href}
          className="hidden sm:inline-flex flex-shrink-0 text-[10px] uppercase tracking-[1.6px] font-bold bg-foreground text-background px-3 py-1.5 rounded-full hover:bg-brief-red transition-colors"
        >
          {locale === "ja" ? "開く" : "Open"}
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={locale === "ja" ? "閉じる" : "Dismiss"}
          className="flex-shrink-0 text-foreground/40 hover:text-foreground transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
