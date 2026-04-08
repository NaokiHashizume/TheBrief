import type { ReactNode } from "react";
import Link from "next/link";
import { T } from "./T";

type Crumb = {
  ja: string;
  en: string;
  href?: string;
};

type Props = {
  /** Small accent eyebrow shown above the title (uppercase). */
  eyebrow: string;
  eyebrowEn?: string;
  /** Accent color for the eyebrow / left bar. */
  accent?: string;
  /** Main serif H1. Can be a string or a ReactNode for richer markup. */
  title: ReactNode;
  /** Optional English-only title row shown small under the H1. */
  titleEn?: string;
  /** Description paragraph under the title. */
  description?: ReactNode;
  descriptionEn?: ReactNode;
  /** Small footnote line under the description (e.g. "Last updated …"). */
  meta?: ReactNode;
  metaEn?: ReactNode;
  /** Breadcrumb trail. The last item is rendered as plain text. */
  breadcrumbs: Crumb[];
  /** Right-side timestamp string shown next to the eyebrow. */
  dateLabel?: string;
  /** Show a pulsing red dot in the eyebrow row to signal a live section. */
  live?: boolean;
};

/**
 * Editorial broadsheet-style masthead used at the top of every section page
 * (Industry / Economy / Politics / University). Mirrors the visual language
 * of the homepage BroadsheetHero so the whole site reads as one publication.
 */
export function PageMasthead({
  eyebrow,
  eyebrowEn,
  accent = "#c0392b",
  title,
  titleEn,
  description,
  descriptionEn,
  meta,
  metaEn,
  breadcrumbs,
  dateLabel,
  live = false,
}: Props) {
  return (
    <header className="pb-8 mb-10 border-b border-foreground/15">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/45 mb-8 font-medium tracking-wide">
        {breadcrumbs.map((c, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return (
            <span key={i} className="flex items-center gap-1.5">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-foreground/80 transition-colors">
                  <T ja={c.ja} en={c.en} />
                </Link>
              ) : (
                <span className={isLast ? "text-foreground/65" : ""}>
                  <T ja={c.ja} en={c.en} />
                </span>
              )}
              {!isLast && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-30"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </span>
          );
        })}
      </nav>

      {/* Eyebrow row: section label + (optional) live + date */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          {live && (
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: accent }}
            />
          )}
          <span
            className="text-[10px] font-bold uppercase tracking-[3px]"
            style={{ color: accent }}
          >
            <T ja={eyebrow} en={eyebrowEn ?? eyebrow} />
          </span>
        </div>
        {dateLabel && (
          <time className="text-[10px] tabular-nums text-foreground/40 uppercase tracking-[2px]">
            {dateLabel}
          </time>
        )}
      </div>

      {/* Title */}
      <h1 className="font-serif text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.08] tracking-tight">
        {title}
      </h1>
      {titleEn && (
        <p className="mt-3 text-[11px] tracking-[1.2px] text-foreground/35 font-medium uppercase">
          {titleEn}
        </p>
      )}

      {/* Description */}
      {description !== undefined && (
        <p className="mt-6 max-w-3xl text-[14px] md:text-[15px] text-foreground/65 leading-[1.85]">
          {descriptionEn !== undefined ? (
            <T ja={description} en={descriptionEn} />
          ) : (
            description
          )}
        </p>
      )}

      {/* Meta footnote */}
      {meta !== undefined && (
        <p className="mt-3 text-[11px] text-foreground/40 tabular-nums">
          {metaEn !== undefined ? <T ja={meta} en={metaEn} /> : meta}
        </p>
      )}
    </header>
  );
}
