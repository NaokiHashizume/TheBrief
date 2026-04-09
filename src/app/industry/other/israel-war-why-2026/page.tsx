import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { otherArticles } from "@/lib/other";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import { RecommendedReads } from "@/components/RecommendedReads";
import { TagLink } from "@/components/TagLink";
import {
  IsraelWarTimelineDiagram,
  IsraelNetanyahuLegalDiagram,
  IsraelCoalitionStructureDiagram,
  IsraelWarCasualtiesDiagram,
  IsraelRegionalPlayersDiagram,
  IsraelJapanImpactDiagram,
  IsraelWarScenariosDiagram,
} from "@/components/IsraelWarDiagrams";

const SLUG = "israel-war-why-2026";

const diagramMap: Record<string, React.ReactNode> = {
  "israel-war-timeline": <IsraelWarTimelineDiagram />,
  "israel-netanyahu-legal": <IsraelNetanyahuLegalDiagram />,
  "israel-coalition-structure": <IsraelCoalitionStructureDiagram />,
  "israel-war-casualties": <IsraelWarCasualtiesDiagram />,
  "israel-regional-players": <IsraelRegionalPlayersDiagram />,
  "israel-japan-impact": <IsraelJapanImpactDiagram />,
  "israel-war-scenarios": <IsraelWarScenariosDiagram />,
};

export async function generateMetadata(): Promise<Metadata> {
  const article = otherArticles.find((a) => a.slug === SLUG);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — その他`,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: `https://thebrief.info/industry/other/${SLUG}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/industry/other/${SLUG}`,
      type: "article",
      locale: "ja_JP",
      siteName: "The Brief",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default function IsraelWarPage() {
  const article = otherArticles.find((a) => a.slug === SLUG);
  if (!article) notFound();

  const articleIndex = otherArticles.findIndex((a) => a.slug === SLUG);
  const prevArticle = articleIndex > 0 ? otherArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < otherArticles.length - 1
      ? otherArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author={article.author}
        url={`https://thebrief.info/industry/other/${SLUG}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "その他", href: "/industry/other" },
          { name: article.title, href: `/industry/other/${SLUG}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-8 flex-wrap">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <Link href="/industry/other" className="hover:text-foreground transition-colors">
          その他
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="category-pill text-[#8b5cf6] font-medium">
            その他
          </span>
          {article.tags.map((tag) => (
            <TagLink key={tag} tag={tag} color="#94a3b8" />
          ))}
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-foreground/60 leading-relaxed text-sm">
          {article.summary}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-foreground/45">
          <time>{article.date}</time>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div className="h-px bg-brief-border mb-10" />

      {/* Table of Contents */}
      <nav className="mb-10 p-4 rounded-xl bg-brief-card border border-brief-border">
        <h2 className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
          目次 / Contents
        </h2>
        <ol className="space-y-1.5">
          {article.sections.map((section, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className="flex items-start gap-2 text-sm text-foreground/70 hover:text-[#8b5cf6] transition-colors"
              >
                <span className="text-foreground/30 tabular-nums flex-shrink-0">
                  {i + 1}.
                </span>
                <span>{section.heading}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Article Content */}
      <article>
        {article.sections.map((section, i) => (
          <section key={i} id={`section-${i}`} className="mb-10 scroll-mt-20">
            {/* Section heading */}
            <div className="mb-4">
              <h2 className="font-serif text-xl font-bold">
                {section.heading}
              </h2>
              {section.headingEn && (
                <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/45">
                  {section.headingEn}
                </span>
              )}
            </div>

            {/* Diagram */}
            {section.diagramId && diagramMap[section.diagramId]}

            {/* Section body */}
            <div className="space-y-4">
              {section.body.split("\n\n").map((paragraph, j) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith(">")) {
                  return (
                    <blockquote
                      key={j}
                      className="pl-4 border-l-4 border-[#8b5cf6]/40 italic text-[15px] text-foreground/65 leading-[1.85]"
                    >
                      {trimmed.slice(1).trim()}
                    </blockquote>
                  );
                }

                if (trimmed.startsWith("【")) {
                  const bracketEnd = trimmed.indexOf("】");
                  const match =
                    bracketEnd > 0
                      ? [trimmed, trimmed.slice(1, bracketEnd), trimmed.slice(bracketEnd + 1)]
                      : null;
                  if (match) {
                    return (
                      <div key={j} className="pl-4 border-l-2 border-[#8b5cf6]/20">
                        <div className="text-xs font-bold text-[#8b5cf6]/80 mb-1">
                          {match[1]}
                        </div>
                        <p className="text-[15px] text-foreground/75 leading-[1.85]">
                          {match[2].trim()}
                        </p>
                      </div>
                    );
                  }
                }

                return (
                  <p
                    key={j}
                    className="text-[15px] text-foreground/75 leading-[1.85]"
                  >
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {i < article.sections.length - 1 && (
              <div className="mt-10 h-px bg-brief-border" />
            )}
          </section>
        ))}
      </article>

      {/* FAQ Structured Data */}
      <FAQJsonLd
        items={article.sections
          .flatMap((s) =>
            s.body.split("\n\n").filter((p) => p.trim().startsWith("【"))
          )
          .map((p) => {
            const end = p.indexOf("】");
            return {
              question: p.slice(1, end),
              answer: p.slice(end + 1).trim(),
            };
          })
          .slice(0, 10)}
      />

      {/* Related Articles */}
      <RelatedArticles
        currentSlug={SLUG}
        articles={otherArticles}
        basePath="/industry/other"
        accentColor="#8b5cf6"
      />

      <RecommendedReads currentSlug={SLUG} currentTags={article.tags} />

      {/* Article Navigation */}
      <div className="mt-14 pt-8 border-t border-brief-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/industry/other/${prevArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                ← 前の記事
              </div>
              <div className="text-sm font-medium group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/industry/other/${nextArticle.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-[#8b5cf6]/30 transition-colors text-right"
            >
              <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                次の記事 →
              </div>
              <div className="text-sm font-medium group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/industry/other"
            className="inline-flex items-center gap-2 text-sm text-[#8b5cf6] hover:underline"
          >
            ← その他の記事一覧へ
          </Link>
        </div>
      </div>
    </div>
  );
}
