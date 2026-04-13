"use client";

import type { ArticleSource } from "@/lib/ict";

export function ArticleReferences({ sources }: { sources?: ArticleSource[] }) {
  if (!sources?.length) return null;

  return (
    <div className="mt-12 pt-10 border-t border-foreground/[0.04]">
      <div className="flex items-center gap-2.5 mb-5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground/30"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/35 font-semibold">
          参考文献・データ出典
        </span>
      </div>
      <ol className="space-y-2.5">
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[11px] tabular-nums font-medium text-foreground/25 mt-0.5 min-w-[20px] text-right shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-foreground/55 hover:text-foreground/85 transition-colors underline underline-offset-2 decoration-foreground/20 leading-relaxed"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
