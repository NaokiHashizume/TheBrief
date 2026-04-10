"use client";

import { useState } from "react";
import { T } from "@/components/T";

type Exhibition = {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  url?: string;
};

type MuseumData = {
  title: string;
  titleEn: string;
  exhibitions2026: Exhibition[];
};

interface Props {
  museums: MuseumData[];
  accent: string;
}

// Museum accent colors (order matches museums array in page.tsx)
const COLORS = [
  "#be185d", // 国立西洋美術館
  "#0d9488", // 東京都美術館
  "#7c3aed", // 上野の森美術館
  "#d97706", // 国立新美術館
  "#dc2626", // 森美術館
  "#2563eb", // アーティゾン美術館
  "#16a34a", // 京都市京セラ美術館
  "#0891b2", // ポーラ美術館
];

// Timeline: Jan 1 2026 → May 1 2027 (covers all exhibitions incl. Apr 2027 close dates)
const TSTART = new Date(2026, 0, 1).getTime();
const TEND = new Date(2027, 4, 1).getTime();
const TOTAL_MS = TEND - TSTART;
const NUM_MONTHS = 16; // Jan '26 – Apr '27

const MONTHS_JA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4"];
const MONTHS_EN = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D", "J", "F", "M", "A"];

const ROW_H = 34;   // px per exhibition row
const GAP_B = 6;    // px gap between museum groups
const LABEL_W = 96; // px for museum name column

function toPercent(date: Date): number {
  return Math.max(0, Math.min(100, ((date.getTime() - TSTART) / TOTAL_MS) * 100));
}

function parsePeriod(period: string): { start: Date; end: Date } | null {
  // Approximate fuzzy seasons
  if (/春/.test(period) && !/月/.test(period))
    return { start: new Date(2026, 2, 20), end: new Date(2026, 5, 20) };
  if (/夏/.test(period) && !/月/.test(period))
    return { start: new Date(2026, 6, 1), end: new Date(2027, 1, 28) };
  // Year-only "YYYY年予定"
  if (/^\d{4}年予定$/.test(period.trim())) return null;

  const clean = period.replace(/[（(]?予定[)）]?/g, "").trim();
  // Split on em-dash or en-dash
  const halves = clean.split(/\s*[—–]\s*/);
  if (halves.length !== 2) return null;

  const parseJp = (s: string, fy?: number): Date | null => {
    const full = s.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (full) return new Date(+full[1], +full[2] - 1, +full[3]);
    const short = s.match(/(\d{1,2})月(\d{1,2})日/);
    if (short && fy != null) return new Date(fy, +short[1] - 1, +short[2]);
    return null;
  };

  const startYearM = halves[0].match(/(\d{4})年/);
  const startYear = startYearM ? +startYearM[1] : 2026;

  const start = parseJp(halves[0]);
  if (!start) return null;

  let end = parseJp(halves[1]) ?? parseJp(halves[1], startYear);
  if (!end) return null;

  // Roll over year if end appears before start (same-year period that crosses calendar year)
  if (end.getTime() <= start.getTime()) {
    end = new Date(end.getFullYear() + 1, end.getMonth(), end.getDate());
  }

  return { start, end };
}

function museumShortLabel(title: string): string {
  // Remove trailing "美術館" for shorter labels where name is long
  const stripped = title.replace(/（[^）]*）/, "");
  return stripped.length > 7 ? stripped.replace("美術館", "").slice(0, 8) : stripped;
}

export function ExhibitionCalendar({ museums, accent }: Props) {
  const [active, setActive] = useState<{ mi: number; ei: number } | null>(null);

  const todayPct = toPercent(new Date());

  // Pre-parse all periods
  const parsedPeriods = museums.map(m =>
    m.exhibitions2026.map(ex => parsePeriod(ex.period))
  );

  return (
    <div className="rounded-xl border border-brief-border bg-brief-card overflow-hidden">
      {/* Card header */}
      <div className="px-5 py-3 border-b border-brief-border flex items-baseline justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[2px] font-bold" style={{ color: accent }}>
            <T ja="企画展カレンダー 2026" en="Exhibition Calendar 2026" />
          </p>
          <p className="text-[10px] text-foreground/45 mt-0.5">
            <T ja="8館 · 横軸: 2026年1月 — 2027年4月" en="8 museums · Jan 2026 — Apr 2027" />
          </p>
        </div>
        <p className="text-[9px] text-foreground/35 text-right hidden sm:block">
          <T ja="バーをホバーで詳細表示" en="Hover / tap a bar for details" />
        </p>
      </div>

      {/* Scrollable Gantt */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: 600, padding: "12px 16px 14px" }}>

          {/* Month header */}
          <div style={{ display: "flex", marginLeft: LABEL_W }}>
            {/* Year label 2026 */}
            <div
              style={{ flex: 12, position: "relative", display: "flex" }}
            >
              <div
                className="absolute text-[8px] text-foreground/30 font-semibold"
                style={{ top: -2, left: 2 }}
              >
                2026
              </div>
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="border-l border-brief-border/40 text-center"
                  style={{ flex: 1, fontSize: 8.5, color: "rgb(var(--foreground) / 0.35)", paddingTop: 12, paddingBottom: 5 }}
                >
                  <T ja={MONTHS_JA[i]} en={MONTHS_EN[i]} />
                </div>
              ))}
            </div>
            {/* Year label 2027 */}
            <div
              style={{ flex: 4, position: "relative", display: "flex" }}
            >
              <div
                className="absolute text-[8px] text-foreground/30 font-semibold"
                style={{ top: -2, left: 2 }}
              >
                2027
              </div>
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="border-l border-brief-border/40 text-center"
                  style={{ flex: 1, fontSize: 8.5, color: "rgb(var(--foreground) / 0.35)", paddingTop: 12, paddingBottom: 5 }}
                >
                  <T ja={MONTHS_JA[12 + i]} en={MONTHS_EN[12 + i]} />
                </div>
              ))}
            </div>
          </div>

          {/* Museum rows */}
          {museums.map((museum, mi) => {
            const color = COLORS[mi % COLORS.length];
            const exList = museum.exhibitions2026;
            const groupH = exList.length * ROW_H;

            return (
              <div
                key={mi}
                style={{ display: "flex", marginBottom: GAP_B }}
              >
                {/* Museum label */}
                <div
                  style={{
                    width: LABEL_W,
                    flexShrink: 0,
                    paddingRight: 8,
                    paddingTop: 8,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color,
                      lineHeight: 1.4,
                      wordBreak: "break-all",
                    }}
                  >
                    <T
                      ja={museumShortLabel(museum.title)}
                      en={museum.titleEn.split("(")[0].split(",")[0].trim().split(" ").slice(0, 3).join(" ")}
                    />
                  </span>
                </div>

                {/* Gantt area */}
                <div style={{ flex: 1, position: "relative", height: groupH }}>
                  {/* Month grid lines */}
                  {Array.from({ length: NUM_MONTHS }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${(i / NUM_MONTHS) * 100}%`,
                        width: 1,
                        backgroundColor: "rgb(var(--foreground) / 0.06)",
                      }}
                    />
                  ))}

                  {/* Today line */}
                  {todayPct > 0 && todayPct < 100 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${todayPct}%`,
                        width: 2,
                        backgroundColor: accent,
                        opacity: 0.55,
                        zIndex: 2,
                      }}
                    />
                  )}

                  {/* Exhibition bars */}
                  {exList.map((ex, ei) => {
                    const p = parsedPeriods[mi][ei];
                    const isActive = active?.mi === mi && active?.ei === ei;

                    const leftPct = p ? toPercent(p.start) : 0;
                    const widthPct = p
                      ? Math.max(0.8, toPercent(p.end) - leftPct)
                      : 100;
                    const isUnknown = p === null;

                    return (
                      <div
                        key={ei}
                        style={{
                          position: "absolute",
                          top: ei * ROW_H,
                          height: ROW_H,
                          left: 0,
                          right: 0,
                          zIndex: 3,
                        }}
                      >
                        {ex.url ? (
                          <a
                            href={ex.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={museum.title + " — " + ex.title}
                            style={{
                              display: "block",
                              position: "absolute",
                              top: 5,
                              height: ROW_H - 10,
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              backgroundColor: color,
                              opacity: isActive ? 1 : 0.74,
                              borderRadius: 4,
                              overflow: "hidden",
                              cursor: "pointer",
                              transition: "opacity 0.12s",
                              outline: isActive ? `2px solid ${color}` : "none",
                              outlineOffset: 1,
                              textDecoration: "none",
                              ...(isUnknown && {
                                backgroundImage:
                                  "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.18) 4px, rgba(255,255,255,0.18) 8px)",
                              }),
                            }}
                            onMouseEnter={() => setActive({ mi, ei })}
                            onMouseLeave={() => setActive(null)}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: 8,
                                color: "white",
                                fontWeight: 600,
                                lineHeight: `${ROW_H - 10}px`,
                                paddingLeft: 5,
                                paddingRight: 4,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <T ja={ex.title} en={ex.titleEn} />
                            </span>
                          </a>
                        ) : (
                          <div
                            role="button"
                            aria-label={museum.title + " — " + ex.title}
                            style={{
                              position: "absolute",
                              top: 5,
                              height: ROW_H - 10,
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              backgroundColor: color,
                              opacity: isActive ? 1 : 0.74,
                              borderRadius: 4,
                              overflow: "hidden",
                              cursor: "pointer",
                              transition: "opacity 0.12s",
                              outline: isActive ? `2px solid ${color}` : "none",
                              outlineOffset: 1,
                              ...(isUnknown && {
                                backgroundImage:
                                  "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.18) 4px, rgba(255,255,255,0.18) 8px)",
                              }),
                            }}
                            onMouseEnter={() => setActive({ mi, ei })}
                            onMouseLeave={() => setActive(null)}
                            onClick={() => setActive(isActive ? null : { mi, ei })}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: 8,
                                color: "white",
                                fontWeight: 600,
                                lineHeight: `${ROW_H - 10}px`,
                                paddingLeft: 5,
                                paddingRight: 4,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <T ja={ex.title} en={ex.titleEn} />
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div
            className="flex items-center gap-4 flex-wrap pt-2 border-t border-brief-border/40"
            style={{ marginLeft: LABEL_W, marginTop: 4 }}
          >
            <div className="flex items-center gap-1.5">
              <div style={{ width: 14, height: 2, backgroundColor: accent, opacity: 0.6, borderRadius: 1 }} />
              <span className="text-[9px] text-foreground/45">
                <T ja="本日" en="Today" />
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                style={{
                  width: 14,
                  height: 10,
                  borderRadius: 2,
                  backgroundColor: "#888",
                  opacity: 0.4,
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)",
                }}
              />
              <span className="text-[9px] text-foreground/45">
                <T ja="日程未確定" en="Date TBD" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Active exhibition detail panel */}
      {active !== null && (() => {
        const { mi, ei } = active;
        const ex = museums[mi].exhibitions2026[ei];
        const color = COLORS[mi % COLORS.length];
        const museum = museums[mi];
        return (
          <div
            className="px-5 py-4 border-t border-brief-border"
            style={{ backgroundColor: `${color}0d` }}
          >
            <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
              <span
                className="text-[10px] font-bold"
                style={{ color }}
              >
                <T ja={museum.title} en={museum.titleEn.split("(")[0].trim()} />
              </span>
              <span className="text-[10px] tabular-nums text-foreground/50">
                <T ja={ex.period} en={ex.periodEn} />
              </span>
            </div>
            <p className="text-[13px] font-bold text-foreground/90 leading-snug mb-2">
              <T ja={ex.title} en={ex.titleEn} />
            </p>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja={ex.description} en={ex.descriptionEn} />
            </p>
            {ex.url && (
              <a
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-[10px] font-semibold underline underline-offset-2"
                style={{ color }}
              >
                <T ja="公式サイト →" en="Official site →" />
              </a>
            )}
          </div>
        );
      })()}
    </div>
  );
}
