"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(name: string, params: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

// スクロール深度トラッキング (25 / 50 / 75 / 100%)
function useScrollDepth(pathname: string) {
  const milestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    milestones.current = new Set();

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.floor((scrolled / total) * 100);

      for (const threshold of [25, 50, 75, 100]) {
        if (pct >= threshold && !milestones.current.has(threshold)) {
          milestones.current.add(threshold);
          sendEvent("scroll_depth", {
            percent_scrolled: threshold,
            page_path: pathname,
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}

// 記事ページ到達時に article_read イベントを送出 (75%スクロール後)
function useArticleRead(pathname: string) {
  const fired = useRef(false);

  useEffect(() => {
    fired.current = false;
    const isArticle =
      pathname.includes("/column/") ||
      pathname.includes("/politics/articles/") ||
      pathname.includes("/politics/debates/") ||
      pathname.includes("/economy/") ||
      pathname.includes("/industry/") ||
      /\/university\/[^/]+\/[^/]+/.test(pathname);

    if (!isArticle) return;

    function onScroll() {
      if (fired.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.75) {
        fired.current = true;
        sendEvent("article_read", { page_path: pathname });
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  useScrollDepth(pathname);
  useArticleRead(pathname);
  return null;
}
