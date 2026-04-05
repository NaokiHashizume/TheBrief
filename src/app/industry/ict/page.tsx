import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ictArticles } from "@/lib/ict";

export const metadata: Metadata = {
  title: "情報通信・ネット — Industry",
  description:
    "通信キャリア、IT企業、SaaS、AI、クラウド、サイバーセキュリティなど情報通信業界の最新動向と解説記事。",
  alternates: { canonical: "https://thebrief.info/industry/ict" },
};

export default function IctPage() {
  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "情報通信・ネット", href: "/industry/ict" },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">
          Home
        </Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/industry" className="hover:text-foreground/70 transition-colors">
          Industry
        </Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <span className="text-foreground/55">ICT</span>
      </nav>

      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/35">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-[28px] sm:text-[32px] font-bold tracking-tight">情報通信・ネット</h1>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/25 font-medium">
              ICT & Internet
            </span>
          </div>
        </div>
        <p className="text-[14px] text-foreground/45 leading-[1.9] max-w-xl">
          通信キャリア、IT企業、SaaS、AI、クラウド、サイバーセキュリティなど、情報通信業界の最新動向と技術解説。
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-foreground/[0.06] via-foreground/[0.03] to-transparent mb-10" />

      {/* Articles */}
      <div className="space-y-4">
        {[...ictArticles].sort((a, b) => b.date.localeCompare(a.date)).map((article, index) => (
          <Link
            key={article.slug}
            href={`/industry/ict/${article.slug}`}
            className="group block p-5 sm:p-6 rounded-2xl border border-foreground/[0.05] hover:border-foreground/[0.1] bg-gradient-to-br from-foreground/[0.01] to-transparent transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <time className="text-[10px] tabular-nums text-foreground/30 font-medium">
                {article.date}
              </time>
              <span className="w-1 h-1 rounded-full bg-foreground/10" />
              <span className="text-[10px] text-foreground/30 font-medium">{article.author}</span>
              <span className="w-1 h-1 rounded-full bg-foreground/10" />
              <span className="text-[10px] text-foreground/30 font-medium">{article.readTime}</span>
            </div>

            <h2 className="font-serif text-[18px] sm:text-[20px] font-bold leading-snug group-hover:text-foreground/90 text-foreground/70 transition-colors tracking-tight">
              {article.title}
            </h2>

            <p className="mt-2.5 text-[13px] text-foreground/40 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2.5 py-1 rounded-md bg-foreground/[0.025] border border-foreground/[0.04] text-foreground/35 font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* More coming */}
      <div className="mt-10 py-6 text-center">
        <p className="text-[12px] text-foreground/20 font-medium tracking-wide">
          記事は順次追加されます
        </p>
      </div>
    </div>
  );
}
