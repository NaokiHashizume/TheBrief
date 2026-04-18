import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { otherArticles } from "@/lib/other";

export const metadata: Metadata = {
  title: "その他 — Industry",
  description:
    "特定業界に限定されないクロスセクター分析、経済圏戦争、地政学リスクなど、業界横断的なテーマの最新動向と解説記事。",
  alternates: { canonical: "https://thebrief.info/industry/other" },
  openGraph: {
    title: "その他 — Industry",
    description:
      "特定業界に限定されないクロスセクター分析、経済圏戦争、地政学リスクなど、業界横断的なテーマの最新動向と解説記事。",
    url: "https://thebrief.info/industry/other",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "その他 — Industry",
    description:
      "特定業界に限定されないクロスセクター分析、経済圏戦争、地政学リスクなど、業界横断的なテーマの最新動向と解説記事。",
  },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function OtherPage() {
  const sortedArticles = [...otherArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "その他", href: "/industry/other" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <span>その他</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#8b5cf615", color: "#8b5cf6" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">その他</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Cross-Sector Analysis
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
          特定業界に限定されないクロスセクター分析、経済圏戦争、地政学リスク、グローバル経済の構造変化など、業界横断的なテーマの解説記事。
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Articles */}
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/industry/other/${article.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 bg-brief-card transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">
                {article.date}
              </time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.author}</span>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>

            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#8b5cf6] transition-colors">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-[#8b5cf6]/8 text-[#8b5cf6]/70 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
