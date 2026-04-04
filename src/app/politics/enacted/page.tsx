import type { Metadata } from "next";
import Link from "next/link";
import { enactedItems } from "@/lib/enacted";

export const metadata: Metadata = {
  title: "確定済 — 2026年に成立した法案・政策",
  description:
    "2026年に国会で可決・成立した法案と政策の一覧。防衛力強化、半導体支援、選挙制度改革など。",
  alternates: { canonical: "https://thebrief.info/politics/enacted" },
};

export default function EnactedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>確定済</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">確定済</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        2026年に国会で可決・成立した主要な法案と政策の一覧です。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05
      </p>

      <div className="mt-10 space-y-4">
        {enactedItems.map((item) => (
          <Link
            key={item.slug}
            href={`/politics/enacted/${item.slug}`}
            className="group block p-5 rounded-xl border border-brief-border dark:border-white/5 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-200 hover:bg-foreground/[0.01]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white bg-green-600">
                    可決・成立
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-foreground/30">
                    {item.committee}
                  </span>
                  <span className="text-[10px] tabular-nums text-foreground/25">
                    {item.enactedDate}
                  </span>
                </div>
                <h2 className="font-serif text-lg font-bold group-hover:text-green-400 transition-colors">
                  {item.title}
                </h2>
                <span className="text-[9px] tracking-[1px] uppercase text-foreground/20">
                  {item.titleEn}
                </span>
                <p className="mt-2 text-sm text-foreground/45 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>
              <div className="flex-shrink-0 mt-2 text-foreground/15 group-hover:text-green-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* Vote result bar */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5 flex">
                <div
                  className="h-full bg-green-500 rounded-l-full"
                  style={{ width: `${(item.voteResult.for / (item.voteResult.for + item.voteResult.against + (item.voteResult.abstain || 0))) * 100}%` }}
                />
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(item.voteResult.against / (item.voteResult.for + item.voteResult.against + (item.voteResult.abstain || 0))) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-foreground/30 tabular-nums flex-shrink-0">
                賛成{item.voteResult.for} / 反対{item.voteResult.against}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
