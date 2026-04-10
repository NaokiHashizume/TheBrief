import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { PageMasthead } from "@/components/PageMasthead";
import { getUniversityCounts, universityCategories } from "@/lib/university";

export const metadata: Metadata = {
  title: "University — 学問体系と研究領域",
  description:
    "大学・研究の世界を大分類から俯瞰。形式科学、自然科学、人文科学、社会科学、応用科学、学際領域まで、主要な学問分野を一覧できます。",
  alternates: { canonical: "https://thebrief.info/university" },
  openGraph: {
    title: "University — 学問体系と研究領域",
    description: "大学・研究の世界を大分類から俯瞰。形式科学、自然科学、人文科学、社会科学、応用科学、学際領域まで、主要な学問分野を一覧できます。",
    url: "https://thebrief.info/university",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "University — 学問体系と研究領域",
    description: "大学・研究の世界を大分類から俯瞰。形式科学、自然科学、人文科学、社会科学、応用科学、学際領域まで、主要な学問分野を一覧できます。",
  },
};

export default function UniversityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
        ]}
      />

      <PageMasthead
        breadcrumbs={[
          { ja: "Home", en: "Home", href: "/" },
          { ja: "University", en: "University" },
        ]}
        eyebrow="Lecture Library"
        eyebrowEn="Lecture Library"
        accent="#6366f1"
        title={
          <T
            ja={<>学問の地図を、<br className="hidden sm:block" />一枚で見渡す。</>}
            en={
              <>
                The map of academia,
                <br className="hidden sm:block" />
                on a single page.
              </>
            }
          />
        }
        titleEn="University — 6 domains, 42 fields"
        description={
          <T
            ja="Politics、Economy、Industryに続く第4のセクションとして、Universityを新設しました。研究と教育の入口として、学問分野を大分類から俯瞰し、各領域の中分類と代表科目まで辿れる構造にしています。"
            en="University is the fourth section after Politics, Economy, and Industry. As an entry point to research and education, it surveys academic disciplines from broad categories down to sub-fields and representative courses."
          />
        }
      />

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-bold">
            <T ja="主要6領域" en="Six Core Domains" />
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            <T
              ja="それぞれをクリックすると、次のページで中分類と代表科目の詳細を見られます。"
              en="Click any domain to explore its sub-fields and representative courses."
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {universityCategories.map((category) => {
            const counts = getUniversityCounts(category);
            return (
            <Link
              key={category.id}
              href={`/university/${category.id}`}
              className="group rounded-[24px] border border-brief-border bg-brief-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2.8px]" style={{ color: category.color }}>
                    Discipline
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-bold">
                    <T ja={category.label} en={category.labelEn} />
                  </h3>
                </div>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                  style={{
                    color: category.color,
                    borderColor: `${category.color}33`,
                    backgroundColor: `${category.color}12`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7h16" />
                    <path d="M4 12h10" />
                    <path d="M4 17h7" />
                    <path d="M17 10l3 2-3 2" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                <T ja={category.desc} en={category.descEn} />
              </p>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-foreground/45">
                <span>
                  <T ja={`${counts.subCount}分野`} en={`${counts.subCount} fields`} />
                </span>
                <span>•</span>
                <span>
                  <T ja={`${counts.itemCount}科目`} en={`${counts.itemCount} courses`} />
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[2px] text-foreground/40">
                <span>Open Detail</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          )})}
        </div>
      </section>

      <section className="mt-8 rounded-[24px] border border-brief-border bg-brief-card p-6">
        <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
          Structure Guide
        </div>
        <h2 className="mt-3 font-serif text-2xl font-bold">
          <T ja="このセクションの見方" en="How to read this section" />
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65">
          <T
            ja="形式科学が抽象的な基盤をつくり、自然科学が法則を発見し、応用科学・工学が実装へつなぎます。社会科学と人文科学は人間と制度、文化を読み解き、学際領域がそれらを横断して新しい研究テーマを生み出します。"
            en="Formal sciences build the abstract foundations, natural sciences uncover the laws, and applied sciences and engineering bring them into implementation. Social sciences and humanities read human institutions and culture, while interdisciplinary fields cross all of these to generate new research themes."
          />
        </p>
      </section>
    </div>
  );
}
