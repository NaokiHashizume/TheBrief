"use client";

import { useState } from "react";

interface Props {
  title: string;
  /** Optional explicit URL. Defaults to window.location.href at click time. */
  url?: string;
}

function open(href: string) {
  window.open(href, "_blank", "noopener,noreferrer");
}

export default function ShareButton({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => url ?? (typeof window !== "undefined" ? window.location.href : "");

  const shareX = () => {
    const u = encodeURIComponent(getUrl());
    const t = encodeURIComponent(title);
    open(`https://x.com/intent/tweet?url=${u}&text=${t}`);
  };

  const shareFacebook = () => {
    const u = encodeURIComponent(getUrl());
    open(`https://www.facebook.com/sharer/sharer.php?u=${u}`);
  };

  const shareLine = () => {
    const u = encodeURIComponent(getUrl());
    const t = encodeURIComponent(title);
    open(`https://social-plugins.line.me/lineit/share?url=${u}&text=${t}`);
  };

  const shareHatena = () => {
    const u = encodeURIComponent(getUrl());
    const t = encodeURIComponent(title);
    open(`https://b.hatena.ne.jp/entry/panel/?url=${u}&title=${t}`);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const btn =
    "p-2 rounded-full text-foreground/45 hover:text-foreground hover:bg-foreground/5 transition-colors";

  return (
    <div
      className="flex items-center gap-1 mt-8"
      role="group"
      aria-label="この記事をシェア"
    >
      <span className="text-[10px] uppercase tracking-[2px] text-foreground/40 mr-1">
        Share
      </span>
      <button onClick={shareX} className={btn} aria-label="X (Twitter) でシェア">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>
      <button onClick={shareFacebook} className={btn} aria-label="Facebook でシェア">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </button>
      <button onClick={shareLine} className={btn} aria-label="LINE でシェア">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.365 9.89c.50 0 .906.41.906.91s-.405.91-.906.91h-1.265v.81h1.265c.5 0 .906.41.906.91s-.405.91-.906.91H17.19c-.5 0-.906-.41-.906-.91V9.07c0-.5.405-.91.906-.91h1.265c.5 0 .906.41.906.91s-.405.91-.906.91H17.19v.81h1.265zm-3.85 4.45c-.5 0-.906-.41-.906-.91V9.07c0-.5.405-.91.906-.91s.906.41.906.91v3.46h1.27c.5 0 .906.41.906.91s-.41.9-.916.9h-2.166zM12 22c-5.523 0-10-3.671-10-8.193 0-4.523 4.477-8.194 10-8.194s10 3.67 10 8.194c0 4.522-4.477 8.193-10 8.193z"/>
        </svg>
      </button>
      <button onClick={shareHatena} className={btn} aria-label="はてなブックマークに追加">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 16.8c0 .663-.537 1.2-1.2 1.2H6c-.663 0-1.2-.537-1.2-1.2v-2.4c0-.663.537-1.2 1.2-1.2h2.4c.663 0 1.2.537 1.2 1.2v2.4zm.6-6c0-.663.537-1.2 1.2-1.2h2.4c.663 0 1.2.537 1.2 1.2v6c0 .663-.537 1.2-1.2 1.2h-2.4c-.663 0-1.2-.537-1.2-1.2v-6zm9 6c0 .663-.537 1.2-1.2 1.2h-2.4c-.663 0-1.2-.537-1.2-1.2v-2.4c0-.663.537-1.2 1.2-1.2H18c.663 0 1.2.537 1.2 1.2v2.4z"/>
        </svg>
      </button>
      <button onClick={copy} className={btn} aria-label="URL をコピー">
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
