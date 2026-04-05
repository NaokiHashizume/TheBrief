import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { retailArticles } from "@/lib/retail";

export const metadata: Metadata = {
  title: "小売り — Industry",
  description:
    "スーパー、コンビニ、百貨店、ドラッグストアなど小売業界全般の動向と解説記事。",
  alternates: { canonical: "https://thebrief.info/industry/retail" },
};

export default function RetailPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "小売り", href: "/industry/retail" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/industry"
          className="hover:text-foreground transition-colors"
        >
          Industry
        </Link>
        <span>/</span>
        <span>小売り</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#14b8a615", color: "#14b8a6" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              小売り
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
              Retail
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
          スーパー、コンビニ、百貨店、ドラッグストアなど、小売業界全般の最新動向とビジネスモデル解説。
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Articles */}
      <div className="space-y-4">
        {[...retailArticles].sort((a, b) => b.date.localeCompare(a.date)).map((article) => (
          <Link
            key={article.slug}
            href={`/industry/retail/${article.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-[#14b8a6]/30 bg-brief-card transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">
                {article.date}
              </time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">
                {article.readTime}
              </span>
            </div>

            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#14b8a6] transition-colors">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-[#14b8a6]/8 text-[#14b8a6]/70 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* More coming */}
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic">
          記事は順次追加されます。
        </p>
      </div>
    </div>
  );
}
