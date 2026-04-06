import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getUniversityCounts, universityCategories } from "@/lib/university";

export const metadata: Metadata = {
  title: "University — 学問体系と研究領域",
  description:
    "大学・研究の世界を大分類から俯瞰。形式科学、自然科学、人文科学、社会科学、応用科学、学際領域まで、主要な学問分野を一覧できます。",
  alternates: { canonical: "https://thebrief.info/university" },
};

export default function UniversityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
        ]}
      />

      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>University</span>
      </div>

      <section className="relative overflow-hidden rounded-[30px] border border-brief-rule bg-[linear-gradient(135deg,rgba(99,102,241,0.08),rgba(59,130,246,0.05),rgba(255,255,255,0.8))] px-6 py-8 md:px-8 md:py-10 dark:bg-[linear-gradient(135deg,rgba(99,102,241,0.12),rgba(15,23,42,0.98),rgba(2,6,23,1))]">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="relative">
          <span className="inline-flex rounded-full border border-[#6366f1]/20 bg-[#6366f1]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px] text-[#4f46e5] dark:border-[#818cf8]/30 dark:bg-[#818cf8]/10 dark:text-[#c7d2fe]">
            University
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
            学問の地図を、
            <br className="hidden sm:block" />
            一枚で見渡す。
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-[15px]">
            Politics、Economy、Industryに続く第4のセクションとして、Universityを新設しました。研究と教育の入口として、学問分野を大分類から俯瞰し、各領域の中分類と代表科目まで辿れる構造にしています。
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-bold">主要6領域</h2>
          <p className="mt-1 text-sm text-foreground/60">
            それぞれをクリックすると、次のページで中分類と代表科目の詳細を見られます。
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
                  <h3 className="mt-2 font-serif text-2xl font-bold">{category.label}</h3>
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
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">{category.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-foreground/45">
                <span>{counts.subCount}分野</span>
                <span>•</span>
                <span>{counts.itemCount}科目</span>
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
        <h2 className="mt-3 font-serif text-2xl font-bold">このセクションの見方</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65">
          形式科学が抽象的な基盤をつくり、自然科学が法則を発見し、応用科学・工学が実装へつなぎます。社会科学と人文科学は人間と制度、文化を読み解き、学際領域がそれらを横断して新しい研究テーマを生み出します。
        </p>
      </section>
    </div>
  );
}
