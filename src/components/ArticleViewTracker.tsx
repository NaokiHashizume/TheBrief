"use client";

import { useEffect } from "react";

type Props = {
  href: string;
  title: string;
  titleEn?: string;
  category: string;
  readTime?: string;
};

const KEY = "thebrief.recent-reads";
const MAX = 6;

export function ArticleViewTracker({ href, title, titleEn, category, readTime }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(KEY);
      const list: Array<{
        href: string;
        title: string;
        titleEn?: string;
        category: string;
        readTime?: string;
        ts: number;
      }> = raw ? JSON.parse(raw) : [];
      const filtered = list.filter((it) => it.href !== href);
      filtered.unshift({ href, title, titleEn, category, readTime, ts: Date.now() });
      window.localStorage.setItem(KEY, JSON.stringify(filtered.slice(0, MAX)));
    } catch {
      // ignore
    }
  }, [href, title, titleEn, category, readTime]);

  return null;
}
