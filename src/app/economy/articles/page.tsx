import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { economyArticles } from "@/lib/economyArticles";

export const metadata: Metadata = {
  title: "深掘り記事 — Economy Articles",
  description:
    "日本経済の構造的テーマを掘り下げる解説記事。税制、金融政策、財政問題、貿易構造などを網羅。",
  alternates: { canonical: "https://thebrief.info/economy/articles" },
  openGraph: {
    title: "深掘り記事 — Economy Articles",
    description: "日本経済の構造的テーマを掘り下げる解説記事。税制、金融政策、財政問題、貿易構造などを網羅。",
    url: "https://thebrief.info/economy/articles",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "深掘り記事 — Economy Articles",
    description: "日本経済の構造的テーマを掘り下げる解説記事。税制、金融政策、財政問題、貿易構造などを網羅。",
  },
};

export default function EconomyArticlesPage() {
  const sorted = [...economyArticles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
          { name: "Articles", href: "/economy/articles" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/economy" className="hover:text-foreground transition-colors">Economy</Link>
        <span>/</span>
        <span>Articles</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="深掘り記事" en="In-Depth Articles" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T
          ja="日本経済の構造的テーマを掘り下げる解説記事です。税制、金融政策、財政問題、貿易構造などを網羅しています。"
          en="In-depth articles exploring structural themes in the Japanese economy, covering taxation, monetary policy, fiscal issues, and trade."
        />
      </p>

      {/* Back to dashboard link */}
      <div className="mt-4">
        <Link href="/economy" className="text-xs text-[#f59e0b] hover:underline">
          <T ja="← 経済指標ダッシュボードに戻る" en="← Back to Economic Dashboard" />
        </Link>
      </div>

      {/* Articles list */}
      <div className="mt-8 space-y-4">
        {sorted.map((article) => (
          <Link
            key={article.slug}
            href={`/economy/${article.slug}`}
            className="block group p-5 rounded-xl border border-brief-border hover:border-[#f59e0b]/30 bg-brief-card hover:bg-foreground/[0.02] transition-all"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] font-medium">
                Economy
              </span>
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-base font-bold group-hover:text-[#f59e0b] transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="mt-2 text-[12px] text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>
            <div className="mt-3 flex items-center gap-3 text-[10px] text-foreground/40">
              <time>{article.date}</time>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
