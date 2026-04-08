import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { allLectures, getLecture } from "@/lib/lectures";
import { getUniversityCategory } from "@/lib/university";

type PageProps = {
  params: Promise<{ slug: string; subject: string }>;
};

export async function generateStaticParams() {
  return allLectures.map((lecture) => ({
    slug: lecture.category,
    subject: lecture.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subject } = await params;
  const lecture = getLecture(slug, subject);
  if (!lecture) return {};
  return {
    title: `${lecture.title} — ${lecture.badge} | University`,
    description: lecture.description,
    alternates: {
      canonical: `https://thebrief.info/university/${slug}/${subject}`,
    },
  };
}

export default async function LecturePage({ params }: PageProps) {
  const { slug, subject } = await params;
  const lecture = getLecture(slug, subject);
  const category = getUniversityCategory(slug);

  if (!lecture || !category) {
    notFound();
  }

  const ACCENT = category.color;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
          { name: category.label, href: `/university/${category.id}` },
          { name: lecture.subfield, href: `/university/${slug}/${subject}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/university" className="hover:text-foreground transition-colors">University</Link>
        <span>/</span>
        <Link href={`/university/${category.id}`} className="hover:text-foreground transition-colors">
          {category.label}
        </Link>
        <span>/</span>
        <span>{lecture.subfield}</span>
      </div>

      {/* Cover */}
      <section
        className="rounded-[28px] border p-6 md:p-10"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}14, rgba(15,23,42,0.02))`,
        }}
      >
        <div
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: ACCENT,
            borderColor: `${ACCENT}33`,
            backgroundColor: `${ACCENT}12`,
          }}
        >
          Lecture Note · {lecture.badge}
        </div>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          {lecture.title}
          <br className="hidden sm:block" />
          <span className="text-foreground/60 text-2xl md:text-3xl">— {lecture.subtitle}</span>
        </h1>
        <p className="mt-5 max-w-3xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          {lecture.lead}
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {lecture.meta.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3"
            >
              <div className="text-base md:text-lg font-bold tabular-nums">{m.value}</div>
              <div className="text-[10px] uppercase tracking-[2px] text-foreground/45 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="mt-10 rounded-[24px] border border-brief-border bg-brief-card p-5 md:p-6">
        <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
          Syllabus
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold">講義の流れ</h2>
        <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {lecture.chapters.map((chapter, i) => (
            <li key={i}>
              <a
                href={`#sec-${i + 1}`}
                className="flex items-start gap-3 rounded-xl border border-foreground/[0.06] px-3 py-2.5 hover:border-foreground/20 transition-colors"
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold tabular-nums"
                  style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-medium text-foreground/80 leading-snug">
                  {chapter.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Chapters */}
      <div className="mt-10 space-y-12">
        {lecture.chapters.map((chapter, i) => (
          <section key={i} id={`sec-${i + 1}`} className="scroll-mt-24">
            <div className="flex items-baseline gap-3">
              <span
                className="font-mono text-[11px] tracking-[2px] font-bold tabular-nums"
                style={{ color: ACCENT }}
              >
                {chapter.number}
              </span>
              <span className="h-px flex-1" style={{ backgroundColor: `${ACCENT}33` }} />
            </div>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl font-bold">{chapter.title}</h2>
            <p className="mt-2 text-[13px] text-foreground/55 italic">
              <span className="font-semibold not-italic" style={{ color: ACCENT }}>
                ねらい —{" "}
              </span>
              {chapter.lead}
            </p>

            <div className="mt-6 space-y-4">
              {chapter.body.map((paragraph, j) => (
                <p key={j} className="text-[14px] leading-[1.85] text-foreground/75">
                  {paragraph}
                </p>
              ))}
            </div>

            {chapter.keyTerms.length > 0 && (
              <div
                className="mt-6 rounded-2xl border p-5"
                style={{
                  borderColor: `${ACCENT}33`,
                  background: `linear-gradient(135deg, ${ACCENT}10, rgba(15,23,42,0.02))`,
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-[2.8px]"
                  style={{ color: ACCENT }}
                >
                  Key Terms
                </div>
                <dl className="mt-3 space-y-2">
                  {chapter.keyTerms.map((kt) => (
                    <div key={kt.term} className="text-[13px]">
                      <dt className="inline font-bold text-foreground/90">{kt.term}</dt>
                      <dd className="inline text-foreground/70"> — {kt.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {chapter.callout && (
              <blockquote
                className="mt-5 rounded-xl border-l-2 px-4 py-3 text-[13px] italic text-foreground/70"
                style={{
                  borderColor: ACCENT,
                  backgroundColor: `${ACCENT}08`,
                }}
              >
                {chapter.callout}
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {/* Recap */}
      <section
        className="mt-14 rounded-[28px] border p-6 md:p-8"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}10, rgba(15,23,42,0.02))`,
        }}
      >
        <div
          className="text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{ color: ACCENT }}
        >
          Recap
        </div>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold">この講義の要点</h2>
        <ul className="mt-4 space-y-2 text-[14px] text-foreground/75 leading-relaxed">
          {lecture.summary.map((line, i) => (
            <li key={i}>・{line}</li>
          ))}
        </ul>
      </section>

      {/* Reading list */}
      <section className="mt-10 rounded-[24px] border border-brief-border bg-brief-card p-5 md:p-6">
        <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
          Further Reading
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold">次に読む本</h2>
        <ul className="mt-4 divide-y divide-foreground/[0.06]">
          {lecture.reading.map((r) => (
            <li key={r.title} className="py-3">
              <div className="font-serif text-base font-bold">{r.title}</div>
              <div className="text-[12px] text-foreground/55 mt-0.5">{r.note}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href={`/university/${category.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-brief-border bg-brief-card px-4 py-2 text-xs uppercase tracking-[2px] text-foreground/55 hover:text-foreground transition-colors"
        >
          <span>←</span>
          <span>{category.label}に戻る</span>
        </Link>
      </div>
    </div>
  );
}
