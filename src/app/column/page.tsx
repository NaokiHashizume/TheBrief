import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Column — 暮らしとお金の小話",
  description:
    "Politics・Economy・Industry・Universityでは拾いきれない、暮らしとお金にまつわる小話をコラム形式でまとめます。",
  alternates: { canonical: "https://thebrief.info/column" },
};

const COLUMN_COLOR = "#0d9488";

type ColumnItem = {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
};

type SpecialItem = {
  slug: string;
  label: string;
  title: string;
  description: string;
  count: string;
  accent: string;
};

const specials: SpecialItem[] = [
  {
    slug: "movies-special",
    label: "Special / Movies",
    title: "映画特集 — 政治・経済・社会を読み解く名作10選",
    description:
      "金融危機、報道の自由、企業倫理、戦争と政治。TheBriefが扱うテーマを物語として体験できる映画10本を厳選しました。",
    count: "10 films",
    accent: "#7c3aed",
  },
  {
    slug: "reading-special",
    label: "Special / Reading",
    title: "読書特集 — 政治・経済・社会を考えるための10冊",
    description:
      "経済学、行動科学、政治哲学、ジャーナリズム。ニュースの背景にある思想と歴史を学ぶ定番と新定番の10冊。",
    count: "10 books",
    accent: "#d97706",
  },
];

const columns: ColumnItem[] = [
  {
    slug: "salaryman-tax-saving",
    title: "社会人のための節税方法 — 知らないと損する7つの制度",
    titleEn: "A Salaryman's Guide to Tax Saving in 2026",
    summary:
      "会社員でも使える節税策は意外と多い。ふるさと納税・iDeCo・新NISA・医療費控除・生命保険料控除・住宅ローン控除・特定支出控除の7つを、2026年現在の制度に沿って整理します。",
    date: "2026-04-07",
    readTime: "約 10 分",
    tags: ["税金", "節税", "ライフハック"],
  },
  {
    slug: "overtime-april-june",
    title: "なぜ4月から6月は残業したらダメなのか",
    titleEn: "Why You Shouldn't Work Overtime from April to June",
    summary:
      "「4〜6月の残業は損」とよく言われる理由を、社会保険料の仕組み（標準報酬月額と定時決定）から分かりやすく解説。仕組みを知ると、1年間の手取りが変わります。",
    date: "2026-04-07",
    readTime: "約 8 分",
    tags: ["社会保険", "給与", "ライフハック"],
  },
];

export default function ColumnIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>Column</span>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-[30px] border px-6 py-10 md:px-10 md:py-14"
        style={{
          borderColor: `${COLUMN_COLOR}33`,
          background: `linear-gradient(135deg, ${COLUMN_COLOR}12, ${COLUMN_COLOR}05, rgba(255,255,255,0.6))`,
        }}
      >
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: COLUMN_COLOR,
            borderColor: `${COLUMN_COLOR}40`,
            backgroundColor: `${COLUMN_COLOR}12`,
          }}
        >
          Column
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          暮らしとお金の、
          <br className="hidden sm:block" />
          小さな気づきノート
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          Politics・Economy・Industry・University では拾いきれない、日々の暮らしや働き方、お金の仕組みについての短い読み物をコラムとしてまとめます。ちょっとした工夫で得をすることや、知らないと損する制度を中心に。
        </p>
      </section>

      {/* Specials */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">特集</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {specials.length} specials
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {specials.map((s) => (
            <Link
              key={s.slug}
              href={`/column/${s.slug}`}
              className="group block p-6 rounded-2xl border border-brief-border bg-brief-card transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${s.accent}10, rgba(255,255,255,0.4))`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold uppercase tracking-[2px]"
                  style={{
                    color: s.accent,
                    backgroundColor: `${s.accent}14`,
                  }}
                >
                  {s.label}
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{s.count}</span>
              </div>

              <h3
                className="font-serif text-lg md:text-xl font-bold leading-snug transition-colors group-hover:text-[color:var(--hover-color)]"
                style={{ ["--hover-color" as string]: s.accent }}
              >
                {s.title}
              </h3>

              <p className="mt-3 text-sm text-foreground/60 leading-relaxed line-clamp-3">
                {s.description}
              </p>

              <p
                className="mt-4 text-xs font-semibold"
                style={{ color: s.accent }}
              >
                特集を読む →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Column list */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">最新のコラム</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {columns.length} {columns.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div className="space-y-4">
          {columns.map((c) => (
            <Link
              key={c.slug}
              href={`/column/${c.slug}`}
              className="group block p-6 rounded-2xl border border-brief-border bg-brief-card transition-all hover:-translate-y-0.5"
              style={{ transition: "border-color 0.2s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide"
                  style={{
                    color: COLUMN_COLOR,
                    backgroundColor: `${COLUMN_COLOR}12`,
                  }}
                >
                  Column
                </span>
                <time className="text-[10px] tabular-nums text-foreground/45">{c.date}</time>
                <span className="text-[10px] text-foreground/30">·</span>
                <span className="text-[10px] text-foreground/45">{c.readTime}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug transition-colors group-hover:text-[color:var(--hover-color)]"
                style={{ ["--hover-color" as string]: COLUMN_COLOR }}
              >
                {c.title}
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
                {c.titleEn}
              </p>

              <p className="mt-3 text-sm text-foreground/60 leading-relaxed line-clamp-3">
                {c.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      color: COLUMN_COLOR,
                      backgroundColor: `${COLUMN_COLOR}10`,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-xl border border-dashed border-brief-border text-center">
          <p className="text-sm text-foreground/45 italic">コラムは順次追加されます。</p>
        </div>
      </section>
    </div>
  );
}
