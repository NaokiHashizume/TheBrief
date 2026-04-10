import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";
import { RecommendedReads } from "@/components/RecommendedReads";

export type Bilingual = { ja: string; en: string };
export type ColumnBlock =
  | { type: "p"; text: Bilingual }
  | { type: "label"; label: Bilingual; text: Bilingual }
  | { type: "callout"; text: Bilingual }
  | { type: "list"; items: Bilingual[] }
  | { type: "table"; caption?: Bilingual; headers: Bilingual[]; rows: Bilingual[][] };
export type ColumnSection = {
  n: string;
  headingJa: string;
  headingEn: string;
  lead?: Bilingual;
  blocks: ColumnBlock[];
};

type Props = {
  url: string;
  title: string;
  summary: string;
  summaryEn: string;
  date: string;
  accent: string;
  categoryJa: string;
  categoryEn: string;
  tags?: string[];
  chaptersJa: string;
  chaptersEn: string;
  readTimeJa: string;
  readTimeEn: string;
  titleNode: React.ReactNode;
  subtitle: string;
  disclaimerJa: string;
  disclaimerEn: string;
  sections: ColumnSection[];
};

function renderRich(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {p}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function ColumnArticle(props: Props) {
  const { url, title, summary, summaryEn, date, accent, sections } = props;
  const slug = url.split("/").pop() ?? "";
  return (
    <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={title}
        description={summary}
        datePublished={date}
        dateModified={date}
        author="The Brief"
        url={url}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: title, href: url },
        ]}
      />

      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-10 font-medium tracking-wide flex-wrap">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">/</span>
        <Link href="/column" className="hover:text-foreground/70 transition-colors">Column</Link>
        <span className="opacity-30">/</span>
        <span className="text-foreground/60 line-clamp-1">{title}</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-semibold px-2.5 py-1 rounded-md border"
            style={{
              color: accent,
              borderColor: `${accent}33`,
              backgroundColor: `${accent}10`,
            }}
          >
            Column
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
            <T ja={props.categoryJa} en={props.categoryEn} />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          {props.titleNode}
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          {props.subtitle}
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${accent}40` }}
        >
          <T ja={summary} en={summaryEn} />
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{date}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja={props.readTimeJa} en={props.readTimeEn} /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja={props.chaptersJa} en={props.chaptersEn} /></span>
        </div>
      </header>

      <article>
        {sections.map((s) => (
          <section key={s.n} id={`section-${s.n}`} className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-[36px] sm:text-[44px] font-bold tabular-nums leading-none select-none font-serif"
                  style={{ color: `${accent}1A` }}
                >
                  {s.n}
                </span>
                <div className="flex-1">
                  <h2 className="font-serif text-[22px] sm:text-[28px] font-bold leading-tight tracking-tight">
                    <T ja={s.headingJa} en={s.headingEn} />
                  </h2>
                  <span className="mt-0.5 block text-[10px] tracking-[2px] uppercase text-foreground/30 font-medium">
                    {s.headingEn}
                  </span>
                </div>
              </div>
              <div
                className="h-px"
                style={{
                  background: `linear-gradient(to right, ${accent}30, ${accent}08, transparent)`,
                }}
              />
            </div>

            {s.lead && (
              <p className="text-[16px] text-foreground/85 leading-[2] tracking-[0.02em] mb-6">
                <T ja={s.lead.ja} en={s.lead.en} />
              </p>
            )}

            <div className="space-y-5">
              {s.blocks.map((b, j) => {
                if (b.type === "p") {
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      <T ja={<>{renderRich(b.text.ja)}</>} en={<>{renderRich(b.text.en)}</>} />
                    </p>
                  );
                }
                if (b.type === "label") {
                  return (
                    <div key={j} className="group pl-5 py-3 relative">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                        style={{ backgroundColor: `${accent}33` }}
                      />
                      <div
                        className="text-[11px] font-bold tracking-wide mb-1.5"
                        style={{ color: `${accent}CC` }}
                      >
                        <T ja={b.label.ja} en={b.label.en} />
                      </div>
                      <p className="text-[14.5px] text-foreground/75 leading-[1.95]">
                        <T ja={<>{renderRich(b.text.ja)}</>} en={<>{renderRich(b.text.en)}</>} />
                      </p>
                    </div>
                  );
                }
                if (b.type === "callout") {
                  return (
                    <div
                      key={j}
                      className="my-2 pl-5 py-4 rounded-r-lg border-l-[3px]"
                      style={{
                        backgroundColor: `${accent}0D`,
                        borderColor: `${accent}55`,
                      }}
                    >
                      <p className="text-[14px] text-foreground/80 leading-[1.9] italic">
                        <T ja={b.text.ja} en={b.text.en} />
                      </p>
                    </div>
                  );
                }
                if (b.type === "list") {
                  return (
                    <ul key={j} className="space-y-2 pl-1">
                      {b.items.map((it, k) => (
                        <li key={k} className="flex gap-3 text-[14.5px] text-foreground/75 leading-[1.9]">
                          <span
                            className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: accent }}
                          />
                          <span><T ja={it.ja} en={it.en} /></span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "table") {
                  return (
                    <div key={j} className="my-4">
                      {b.caption && (
                        <div className="text-[11px] text-foreground/45 mb-2">
                          <T ja={b.caption.ja} en={b.caption.en} />
                        </div>
                      )}
                      <div className="overflow-x-auto rounded-xl border border-foreground/[0.06]">
                        <table className="w-full text-[13px]">
                          <thead>
                            <tr style={{ backgroundColor: `${accent}0D` }}>
                              {b.headers.map((h, k) => (
                                <th
                                  key={k}
                                  className="px-3 py-2.5 text-left font-semibold"
                                  style={{ color: accent }}
                                >
                                  <T ja={h.ja} en={h.en} />
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((row, ri) => (
                              <tr key={ri} className="border-t border-foreground/[0.05]">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-2.5 text-foreground/75 tabular-nums">
                                    <T ja={cell.ja} en={cell.en} />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>
        ))}
      </article>

      <div
        className="mt-6 rounded-2xl border p-5"
        style={{ borderColor: `${accent}22`, backgroundColor: `${accent}08` }}
      >
        <div
          className="text-[10px] font-bold uppercase tracking-[2.5px] mb-2"
          style={{ color: accent }}
        >
          Disclaimer
        </div>
        <p className="text-[12.5px] text-foreground/60 leading-[1.9]">
          <T ja={props.disclaimerJa} en={props.disclaimerEn} />
        </p>
      </div>

      <RecommendedReads currentSlug={slug} currentTags={props.tags ?? []} />

      <div className="mt-8 flex justify-center">
        <ShareButton title={title} />
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/column"
          className="inline-flex items-center gap-2 text-[12px] text-foreground/40 hover:text-foreground/70 transition-colors font-medium tracking-wide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <T ja="コラム一覧に戻る" en="Back to columns" />
        </Link>
      </div>
    </div>
  );
}
