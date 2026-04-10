import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { economyArticles } from "@/lib/economyArticles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  IsraelWarTimelineDiagram,
  IsraelNetanyahuLegalDiagram,
  IsraelCoalitionStructureDiagram,
  IsraelWarCasualtiesDiagram,
  IsraelRegionalPlayersDiagram,
  IsraelJapanImpactDiagram,
  IsraelWarScenariosDiagram,
} from "@/components/IsraelWarDiagrams";
import ShareButton from "@/components/ShareButton";
import { TagLink } from "@/components/TagLink";
import { RecommendedReads } from "@/components/RecommendedReads";

const SLUG = "israel-war-why-2026";

export function generateStaticParams() {
  return [{ slug: SLUG }];
}

export async function generateMetadata(): Promise<Metadata> {
  const article = economyArticles.find((a) => a.slug === SLUG);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Economy`,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: `https://thebrief.info/economy/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/economy/${article.slug}`,
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

/* Inline rich text renderer: **bold**, 「quotes」 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return (
    <>
      {parts.map((part, k) => {
        if (k % 2 === 1) {
          return (
            <strong key={k} className="font-semibold text-foreground">
              <span className="bg-[#f59e0b]/[0.08] dark:bg-[#f59e0b]/[0.15] px-1 py-0.5 rounded">
                {part}
              </span>
            </strong>
          );
        }
        const quoteParts = part.split(/(「[^」]+」)/);
        return (
          <span key={k}>
            {quoteParts.map((qp, qi) => {
              if (qp.startsWith("「") && qp.endsWith("」")) {
                return <span key={qi} className="text-foreground/90 font-medium">{qp}</span>;
              }
              return <span key={qi}>{qp}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}

/* Diagram renderer mapped by ID */
const diagramMap: Record<string, React.FC> = {
  "israel-war-timeline": IsraelWarTimelineDiagram,
  "israel-netanyahu-legal": IsraelNetanyahuLegalDiagram,
  "israel-coalition-structure": IsraelCoalitionStructureDiagram,
  "israel-war-casualties": IsraelWarCasualtiesDiagram,
  "israel-regional-players": IsraelRegionalPlayersDiagram,
  "israel-japan-impact": IsraelJapanImpactDiagram,
  "israel-war-scenarios": IsraelWarScenariosDiagram,
};

export default function IsraelWarPage() {
  const article = economyArticles.find((a) => a.slug === SLUG);
  if (!article) notFound();

  const articleIndex = economyArticles.findIndex((a) => a.slug === SLUG);
  const prevArticle = articleIndex > 0 ? economyArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < economyArticles.length - 1
      ? economyArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author="The Brief"
        url={`https://thebrief.info/economy/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
          { name: article.title, href: `/economy/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/economy" className="hover:text-foreground/70 transition-colors">Economy</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <span className="text-foreground/60 line-clamp-1">{article.title}</span>
      </nav>

      {/* ── Hero Header ── */}
      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase font-semibold text-[#f59e0b]/60">
            Economy
          </span>
          <span className="w-px h-3 bg-[#f59e0b]/15" />
          {article.tags.map((tag) => (
            <TagLink key={tag} tag={tag} color="#b9770e" />
          ))}
        </div>

        <h1 className="font-serif text-[28px] sm:text-[36px] font-bold leading-[1.25] tracking-tight">
          {article.title}
        </h1>

        {article.titleEn && (
          <p className="mt-2 text-[11px] tracking-[1px] text-foreground/25 font-medium uppercase">
            {article.titleEn}
          </p>
        )}

        <p className="mt-6 text-[15px] text-foreground/65 leading-[1.9] border-l-2 border-[#f59e0b]/20 pl-5">
          {article.summary}
        </p>

        <div className="mt-6 flex items-center gap-5 text-[11px] text-foreground/35 font-medium">
          <time className="tabular-nums">{article.date}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/15" />
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* ── Table of Contents ── */}
      <nav className="mb-16 relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.005]" />
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.05]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-md bg-[#f59e0b]/[0.08] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#f59e0b]/50">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/30 font-semibold">Contents</span>
          </div>
          <ol className="space-y-0">
            {article.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="group flex items-center gap-4 py-2.5 text-foreground/65 hover:text-[#f59e0b] transition-colors"
                >
                  <span className="text-[11px] tabular-nums font-semibold text-[#f59e0b]/30 group-hover:text-[#f59e0b]/60 w-5 text-right transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-medium">{section.heading}</span>
                </a>
                {i < article.sections.length - 1 && (
                  <div className="ml-[30px] h-px bg-foreground/[0.03]" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ── Article Content ── */}
      <article>
        {article.sections.map((section, i) => {
          const paragraphs = section.body.split("\n\n").filter((p) => p.trim());
          const DiagramComponent = section.diagramId ? diagramMap[section.diagramId] : null;

          return (
            <section key={i} id={`section-${i}`} className="mb-20 scroll-mt-24">
              {/* Section heading */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[32px] sm:text-[40px] font-bold tabular-nums text-[#f59e0b]/[0.1] leading-none select-none font-serif">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight tracking-tight">
                      {section.heading}
                    </h2>
                    {section.headingEn && (
                      <span className="text-[10px] tracking-[2px] uppercase text-foreground/25 font-medium mt-0.5 block">
                        {section.headingEn}
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#f59e0b]/15 via-[#f59e0b]/5 to-transparent" />
              </div>

              {/* Diagram */}
              {DiagramComponent && <DiagramComponent />}

              {/* Section body */}
              <div className="space-y-6">
                {paragraphs.map((paragraph, j) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Callout box
                  if (trimmed.startsWith("> ")) {
                    const calloutText = trimmed.slice(2);
                    return (
                      <div
                        key={j}
                        className="my-8 pl-5 py-4 rounded-r-lg bg-[#f59e0b]/[0.04] dark:bg-[#f59e0b]/[0.06] border-l-3 border-[#f59e0b]/25"
                      >
                        <p className="text-[14px] text-foreground/70 leading-[1.9] italic">
                          <RichText text={calloutText} />
                        </p>
                      </div>
                    );
                  }

                  // 【bracket】labels
                  if (trimmed.startsWith("【")) {
                    const bracketEnd = trimmed.indexOf("】");
                    if (bracketEnd > 0) {
                      const label = trimmed.slice(1, bracketEnd);
                      const content = trimmed.slice(bracketEnd + 1).trim();
                      return (
                        <div key={j} className="group pl-5 py-3 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#f59e0b]/20 group-hover:bg-[#f59e0b]/35 transition-colors" />
                          <div className="text-[11px] font-bold text-[#f59e0b]/60 tracking-wide mb-1.5">
                            {label}
                          </div>
                          <p className="text-[14px] text-foreground/75 leading-[1.9]">
                            <RichText text={content} />
                          </p>
                        </div>
                      );
                    }
                  }

                  // Lead paragraph
                  const isLead = j === 0 || (j === 1 && paragraphs[0].trim().startsWith("> "));

                  return (
                    <p
                      key={j}
                      className={
                        isLead
                          ? "text-[16px] text-foreground/80 leading-[2] tracking-[0.02em] first-letter:text-[2em] first-letter:font-serif first-letter:font-bold first-letter:text-[#f59e0b]/40 first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:leading-[0.8]"
                          : "text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]"
                      }
                    >
                      <RichText text={trimmed} />
                    </p>
                  );
                })}
              </div>
            </section>
          );
        })}
      </article>

      <ShareButton title={article.title} />

      <RecommendedReads currentSlug={SLUG} currentTags={article.tags} />

      {/* Article Navigation */}
      <div className="mt-20 pt-12 border-t border-foreground/[0.04]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/economy/${prevArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-[#f59e0b]/20 transition-all hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40"><path d="M15 18l-6-6 6-6"/></svg>
                Previous
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/economy/${nextArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-[#f59e0b]/20 transition-all text-right hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/economy"
            className="inline-flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors font-medium tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Economy ダッシュボードへ
          </Link>
        </div>
      </div>
    </div>
  );
}
