import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { politicsArticles } from "@/lib/politicsArticles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  JapanChallengesOverviewDiagram,
  JapanBirthsDeclineDiagram,
  JapanAgingBurdenDiagram,
  JapanFiscalDebtDiagram,
  JapanDefenseSpendingDiagram,
  JapanLaborShortageDiagram,
  JapanSelfSufficiencyDiagram,
} from "@/components/JapanChallengesDiagrams";
import {
  AprilReformsOverviewDiagram,
  AprilReformsJointCustodyDiagram,
  AprilReformsBicycleDiagram,
  AprilReformsHyakuSanjuDiagram,
  AprilReformsChildcareFundDiagram,
  AprilReformsPensionDiagram,
  AprilReformsDefenseTaxDiagram,
  AprilReformsGXETSDiagram,
} from "@/components/AprilReformsDiagrams";
import {
  NiaOverviewDiagram,
  NiaCurrentMapDiagram,
  NiaStructureDiagram,
  NiaPhase2Diagram,
  NiaInternationalDiagram,
  NiaVsNscDiagram,
  NiaStakeholdersDiagram,
} from "@/components/NiaDiagrams";
import {
  DmaOverviewDiagram,
  DmaVsCurrentDiagram,
  DmaThreeRolesDiagram,
  DmaRegionalDiagram,
  DmaInternationalDiagram,
  DmaConcernsDiagram,
} from "@/components/DmaDiagrams";
import {
  ElecOverviewDiagram,
  ElecLowerHouseDiagram,
  ElecUpperHouseDiagram,
  ElecDhondtDiagram,
  ElecDisparityDiagram,
  ElecLocalDiagram,
  ElecTurnoutDiagram,
} from "@/components/ElectoralSystemDiagrams";
import {
  Mg2yBudgetBreakdownDiagram,
  Mg2ySeatGapDiagram,
  Mg2yMarketSignalDiagram,
  Mg2yRoadmapDiagram,
  IchihyoGapNumbersDiagram,
  IchihyoLawsuitMapDiagram,
  IchihyoPrecedentCompareDiagram,
  IchihyoNextReformDiagram,
  IkuseiPurposeShiftDiagram,
  IkuseiCareerPathDiagram,
  IkuseiJapaneseReqDiagram,
  IkuseiEmployerChecklistDiagram,
} from "@/components/Politics2026Diagrams";
import ShareButton from "@/components/ShareButton";
import { RecommendedReads } from "@/components/RecommendedReads";

export function generateStaticParams() {
  return politicsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = politicsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Politics`,
    description: article.summary,
    alternates: {
      canonical: `https://thebrief.info/politics/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/politics/articles/${article.slug}`,
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
              <span className="bg-brief-red/[0.07] dark:bg-brief-red/[0.15] px-1 py-0.5 rounded">
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
  "japan-challenges-overview": JapanChallengesOverviewDiagram,
  "japan-births-decline": JapanBirthsDeclineDiagram,
  "japan-aging-burden": JapanAgingBurdenDiagram,
  "japan-fiscal-debt": JapanFiscalDebtDiagram,
  "japan-defense-spending": JapanDefenseSpendingDiagram,
  "japan-labor-shortage": JapanLaborShortageDiagram,
  "japan-self-sufficiency": JapanSelfSufficiencyDiagram,
  "april-reforms-overview": AprilReformsOverviewDiagram,
  "april-reforms-joint-custody": AprilReformsJointCustodyDiagram,
  "april-reforms-bicycle": AprilReformsBicycleDiagram,
  "april-reforms-130man": AprilReformsHyakuSanjuDiagram,
  "april-reforms-childcare-fund": AprilReformsChildcareFundDiagram,
  "april-reforms-pension": AprilReformsPensionDiagram,
  "april-reforms-defense-tax": AprilReformsDefenseTaxDiagram,
  "april-reforms-gx-ets": AprilReformsGXETSDiagram,
  "nia-overview": NiaOverviewDiagram,
  "nia-current-map": NiaCurrentMapDiagram,
  "nia-structure": NiaStructureDiagram,
  "nia-phase2": NiaPhase2Diagram,
  "nia-international": NiaInternationalDiagram,
  "nia-vs-nsc": NiaVsNscDiagram,
  "nia-stakeholders": NiaStakeholdersDiagram,
  "dma-overview": DmaOverviewDiagram,
  "dma-vs-current": DmaVsCurrentDiagram,
  "dma-three-roles": DmaThreeRolesDiagram,
  "dma-regional": DmaRegionalDiagram,
  "dma-international": DmaInternationalDiagram,
  "dma-concerns": DmaConcernsDiagram,
  "elec-overview": ElecOverviewDiagram,
  "elec-lower-house": ElecLowerHouseDiagram,
  "elec-upper-house": ElecUpperHouseDiagram,
  "elec-dhondt": ElecDhondtDiagram,
  "elec-disparity": ElecDisparityDiagram,
  "elec-local": ElecLocalDiagram,
  "elec-turnout": ElecTurnoutDiagram,
  "mg2y-budget-breakdown": Mg2yBudgetBreakdownDiagram,
  "mg2y-seat-gap": Mg2ySeatGapDiagram,
  "mg2y-market-signal": Mg2yMarketSignalDiagram,
  "mg2y-roadmap": Mg2yRoadmapDiagram,
  "ichihyo-gap-numbers": IchihyoGapNumbersDiagram,
  "ichihyo-lawsuit-map": IchihyoLawsuitMapDiagram,
  "ichihyo-precedent-compare": IchihyoPrecedentCompareDiagram,
  "ichihyo-next-reform": IchihyoNextReformDiagram,
  "ikusei-purpose-shift": IkuseiPurposeShiftDiagram,
  "ikusei-career-path": IkuseiCareerPathDiagram,
  "ikusei-japanese-req": IkuseiJapaneseReqDiagram,
  "ikusei-employer-checklist": IkuseiEmployerChecklistDiagram,
};

export default async function PoliticsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = politicsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = politicsArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? politicsArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < politicsArticles.length - 1
      ? politicsArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author="The Brief"
        url={`https://thebrief.info/politics/articles/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "Articles", href: "/politics/articles" },
          { name: article.title, href: `/politics/articles/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/politics" className="hover:text-foreground/70 transition-colors">Politics</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/politics/articles" className="hover:text-foreground/70 transition-colors">Articles</Link>
      </nav>

      {/* ── Hero Header ── */}
      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase font-semibold text-brief-red/60">
            Politics
          </span>
          <span className="w-px h-3 bg-brief-red/15" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-md bg-brief-red/[0.06] text-brief-red/70 font-medium tracking-wide border border-brief-red/[0.1]"
            >
              {tag}
            </span>
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

        <p className="mt-6 text-[15px] text-foreground/65 leading-[1.9] border-l-2 border-brief-red/20 pl-5">
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
            <div className="w-6 h-6 rounded-md bg-brief-red/[0.08] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brief-red/50">
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
                  className="group flex items-center gap-4 py-2.5 text-foreground/65 hover:text-brief-red transition-colors"
                >
                  <span className="text-[11px] tabular-nums font-semibold text-brief-red/30 group-hover:text-brief-red/60 w-5 text-right transition-colors">
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
                  <span className="text-[32px] sm:text-[40px] font-bold tabular-nums text-brief-red/[0.1] leading-none select-none font-serif">
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
                <div className="h-px bg-gradient-to-r from-brief-red/15 via-brief-red/5 to-transparent" />
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
                        className="my-8 pl-5 py-4 rounded-r-lg bg-brief-red/[0.04] dark:bg-brief-red/[0.06] border-l-3 border-brief-red/25"
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
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-brief-red/20 group-hover:bg-brief-red/35 transition-colors" />
                          <div className="text-[11px] font-bold text-brief-red/60 tracking-wide mb-1.5">
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
                          ? "text-[16px] text-foreground/80 leading-[2] tracking-[0.02em] first-letter:text-[2em] first-letter:font-serif first-letter:font-bold first-letter:text-brief-red/40 first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:leading-[0.8]"
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

      <RecommendedReads currentSlug={slug} currentTags={article.tags} />

      {/* Article Navigation */}
      <div className="mt-20 pt-12 border-t border-foreground/[0.04]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/politics/articles/${prevArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-brief-red/20 transition-all hover:bg-foreground/[0.01]"
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
              href={`/politics/articles/${nextArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-brief-red/20 transition-all text-right hover:bg-foreground/[0.01]"
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
            href="/politics/articles"
            className="inline-flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors font-medium tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            記事一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
