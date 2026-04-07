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

const columns: ColumnItem[] = [
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
