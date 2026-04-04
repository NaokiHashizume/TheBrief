import type { Metadata } from "next";
import Link from "next/link";
import { debates } from "@/lib/debates";

export const metadata: Metadata = {
  title: "審議中 — 国会で審議中の法案・議題",
  description:
    "国会で現在審議されている法案・議題の一覧。予算案、AI規制法、少子化対策など主要な議論の概要と各政党の立場をまとめます。",
  alternates: { canonical: "https://thebrief.info/politics/debates" },
};

export default function DebatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>審議中</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">審議中</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        第214回通常国会（2026年）で現在審議されている主要な法案・議題の一覧です。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05
      </p>

      <div className="mt-10 space-y-4">
        {debates.map((debate) => (
          <Link
            key={debate.slug}
            href={`/politics/debates/${debate.slug}`}
            className="group block p-5 rounded-xl border border-brief-border dark:border-white/5 hover:border-brief-red/50 dark:hover:border-brief-red/50 transition-all duration-200 hover:bg-foreground/[0.01]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: debate.statusColor }}
                  >
                    {debate.status}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-foreground/30">
                    {debate.committee}
                  </span>
                </div>
                <h2 className="font-serif text-lg font-bold group-hover:text-brief-red transition-colors">
                  {debate.title}
                </h2>
                <span className="text-[9px] tracking-[1px] uppercase text-foreground/20">
                  {debate.titleEn}
                </span>
                <p className="mt-2 text-sm text-foreground/45 leading-relaxed line-clamp-2">
                  {debate.summary}
                </p>
              </div>
              <div className="flex-shrink-0 mt-2 text-foreground/15 group-hover:text-brief-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* Key points preview */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {debate.keyPoints.slice(0, 3).map((point) => (
                <span
                  key={point}
                  className="text-[10px] px-2 py-0.5 bg-foreground/[0.04] rounded-full text-foreground/35"
                >
                  {point}
                </span>
              ))}
              {debate.keyPoints.length > 3 && (
                <span className="text-[10px] px-2 py-0.5 text-foreground/25">
                  +{debate.keyPoints.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
