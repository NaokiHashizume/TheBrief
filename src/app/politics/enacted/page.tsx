import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { enactedItems } from "@/lib/enacted";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "施行済 — 2026年に施行された主要法令",
  description:
    "2026年に施行・発効した主要法令の一覧。政治資金規正法改正、子育て支援法、共同親権など。",
  alternates: { canonical: "https://thebrief.info/politics/enacted" },
};

export default function EnactedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "施行済", href: "/politics/enacted" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span><T ja="施行済" en="Enacted" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="施行済" en="Enacted" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T ja="2026年に施行・発効した主要な法令の一覧です。過去の国会で成立し、2026年に施行された重要法を掲載しています。" en="A list of major laws enacted and put into effect in 2026. Includes important legislation passed in previous Diet sessions and enforced in 2026." />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="2026年施行済法令一覧: 2026年4月4日時点 ｜ 投票結果は成立時の記録" en="2026 enacted laws: as of April 4, 2026 | Vote results are from the time of passage" />
      </p>

      <div className="mt-10 space-y-4">
        {[...enactedItems].sort((a, b) => b.effectiveDate.localeCompare(a.effectiveDate)).map((item) => (
          <Link
            key={item.slug}
            href={`/politics/enacted/${item.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-green-500/50 transition-all duration-200 hover:bg-brief-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white bg-green-600">
                    <T ja="施行済" en="Enacted" />
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-foreground/45">
                    {item.committee}
                  </span>
                  <span className="text-[10px] tabular-nums text-foreground/50">
                    {item.effectiveDate} <T ja="施行" en="effective" />
                  </span>
                </div>
                <h2 className="font-serif text-lg font-bold group-hover:text-green-400 transition-colors">
                  {item.title}
                </h2>
                <span className="text-[9px] tracking-[1px] uppercase text-foreground/45">
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
              <div className="flex-shrink-0 mt-2 text-foreground/30 group-hover:text-green-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>

            {/* Vote result bar */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full overflow-hidden bg-foreground/5 flex">
                <div
                  className="h-full bg-green-500 rounded-l-full"
                  style={{ width: `${(item.voteResult.for / (item.voteResult.for + item.voteResult.against + (item.voteResult.abstain || 0))) * 100}%` }}
                />
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(item.voteResult.against / (item.voteResult.for + item.voteResult.against + (item.voteResult.abstain || 0))) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-foreground/45 tabular-nums flex-shrink-0">
                <T ja="賛成" en="For" />{item.voteResult.for} / <T ja="反対" en="Against" />{item.voteResult.against}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
