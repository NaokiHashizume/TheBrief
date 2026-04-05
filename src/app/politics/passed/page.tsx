import type { Metadata } from "next";
import Link from "next/link";
import { passedItems } from "@/lib/passed";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "成立済 — 成立したが未施行の主要法令",
  description:
    "国会で可決・成立したが、まだ施行されていない主要法令の一覧。日本版DBS、民事訴訟IT化など。",
  alternates: { canonical: "https://thebrief.info/politics/passed" },
};

export default function PassedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "成立済", href: "/politics/passed" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>成立済</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">成立済</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        国会で可決・成立したが、2026年4月時点でまだ施行されていない主要法令の一覧です。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        成立済法令一覧: 2026年4月4日時点 ｜ 施行予定日は各法令による
      </p>

      <div className="mt-10 space-y-4">
        {passedItems.map((item) => {
          const daysUntil = Math.ceil(
            (new Date(item.effectiveDate).getTime() - new Date("2026-04-04").getTime()) /
              (1000 * 60 * 60 * 24)
          );

          return (
            <Link
              key={item.slug}
              href={`/politics/passed/${item.slug}`}
              className="group block p-5 rounded-xl border border-brief-border hover:border-amber-500/50 transition-all duration-200 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white bg-amber-600">
                      成立済・未施行
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-foreground/30">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h2>
                  <span className="text-[9px] tracking-[1px] uppercase text-foreground/20">
                    {item.titleEn}
                  </span>
                  <p className="mt-2 text-sm text-foreground/45 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                  <div className="mt-2 flex items-start gap-1.5">
                    <span className="text-brief-red text-[10px] font-bold mt-0.5 flex-shrink-0">WHY</span>
                    <p className="text-xs text-foreground/45 leading-relaxed">{item.impact}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2 text-foreground/15 group-hover:text-amber-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              {/* Timeline bar */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-2 text-[10px] text-foreground/30 tabular-nums flex-shrink-0">
                  <span>{item.enactedDate} 成立</span>
                  <span className="text-foreground/15">→</span>
                  <span>{item.effectiveDate} 施行予定</span>
                </div>
                <div className="flex-1" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 tabular-nums">
                  あと{daysUntil}日
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
