"use client";

import { useState } from "react";
import Link from "next/link";

interface TopCompany {
  name: string;
  share: number;
}

/** PL: cost / SGA / operating profit (% of revenue, must sum to 100) */
interface PLProfile {
  cost: number;
  sga: number;
  profit: number;
}

/** BS: current/fixed assets, current/fixed liabilities, equity (% of total assets, liab+eq must sum to 100) */
interface BSProfile {
  currentAssets: number;
  fixedAssets: number;
  currentLiab: number;
  fixedLiab: number;
  equity: number;
}

/** CF: operating / investing / financing (relative scale, can be negative) */
interface CFProfile {
  operating: number;
  investing: number;
  financing: number;
}

interface IndustryData {
  slug: string;
  label: string;
  labelJa: string;
  marketSize: number;
  color: string;
  topCompanies: TopCompany[];
  pl: PLProfile;
  bs: BSProfile;
  cf: CFProfile;
}

const industries: IndustryData[] = [
  {
    slug: "retail",
    label: "Retail",
    labelJa: "小売",
    marketSize: 154.2,
    color: "#14b8a6",
    topCompanies: [
      { name: "イオン", share: 6.1 },
      { name: "セブン&アイ", share: 5.4 },
      { name: "ファーストリテイリング", share: 1.8 },
    ],
    pl: { cost: 72, sga: 25, profit: 3 },
    bs: { currentAssets: 55, fixedAssets: 45, currentLiab: 40, fixedLiab: 20, equity: 40 },
    cf: { operating: 80, investing: -40, financing: -30 },
  },
  {
    slug: "trading",
    label: "Trading & Wholesale",
    labelJa: "商社・卸売",
    marketSize: 118.5,
    color: "#78716c",
    topCompanies: [
      { name: "三菱商事", share: 15.8 },
      { name: "伊藤忠商事", share: 12.4 },
      { name: "三井物産", share: 11.7 },
    ],
    pl: { cost: 82, sga: 12, profit: 6 },
    bs: { currentAssets: 50, fixedAssets: 50, currentLiab: 30, fixedLiab: 35, equity: 35 },
    cf: { operating: 70, investing: -50, financing: -15 },
  },
  {
    slug: "automotive",
    label: "Automotive",
    labelJa: "自動車",
    marketSize: 71.5,
    color: "#ef4444",
    topCompanies: [
      { name: "トヨタ自動車", share: 45.2 },
      { name: "ホンダ", share: 14.8 },
      { name: "日産自動車", share: 10.1 },
    ],
    pl: { cost: 75, sga: 17, profit: 8 },
    bs: { currentAssets: 45, fixedAssets: 55, currentLiab: 25, fixedLiab: 30, equity: 45 },
    cf: { operating: 90, investing: -60, financing: -25 },
  },
  {
    slug: "construction",
    label: "Construction & Real Estate",
    labelJa: "建設・不動産",
    marketSize: 68.3,
    color: "#64748b",
    topCompanies: [
      { name: "大和ハウス工業", share: 5.2 },
      { name: "大林組", share: 3.1 },
      { name: "三井不動産", share: 2.9 },
    ],
    pl: { cost: 78, sga: 17, profit: 5 },
    bs: { currentAssets: 40, fixedAssets: 60, currentLiab: 25, fixedLiab: 40, equity: 35 },
    cf: { operating: 60, investing: -45, financing: -10 },
  },
  {
    slug: "finance",
    label: "Financial Institutions",
    labelJa: "金融機関",
    marketSize: 62.4,
    color: "#f59e0b",
    topCompanies: [
      { name: "三菱UFJ FG", share: 18.6 },
      { name: "三井住友 FG", share: 14.2 },
      { name: "みずほ FG", share: 11.8 },
    ],
    pl: { cost: 45, sga: 30, profit: 25 },
    bs: { currentAssets: 70, fixedAssets: 30, currentLiab: 75, fixedLiab: 15, equity: 10 },
    cf: { operating: 100, investing: -30, financing: -60 },
  },
  {
    slug: "ict",
    label: "ICT & Internet",
    labelJa: "情報通信",
    marketSize: 55.7,
    color: "#3b82f6",
    topCompanies: [
      { name: "NTT", share: 21.5 },
      { name: "KDDI", share: 9.8 },
      { name: "ソフトバンク", share: 9.2 },
    ],
    pl: { cost: 50, sga: 35, profit: 15 },
    bs: { currentAssets: 35, fixedAssets: 65, currentLiab: 20, fixedLiab: 35, equity: 45 },
    cf: { operating: 85, investing: -55, financing: -25 },
  },
  {
    slug: "pharma",
    label: "Pharma & Healthcare",
    labelJa: "医薬品・医療介護",
    marketSize: 48.2,
    color: "#10b981",
    topCompanies: [
      { name: "武田薬品工業", share: 8.4 },
      { name: "大塚 HD", share: 5.1 },
      { name: "アステラス製薬", share: 4.6 },
    ],
    pl: { cost: 40, sga: 45, profit: 15 },
    bs: { currentAssets: 45, fixedAssets: 55, currentLiab: 20, fixedLiab: 25, equity: 55 },
    cf: { operating: 75, investing: -50, financing: -20 },
  },
  {
    slug: "services",
    label: "Services",
    labelJa: "サービス",
    marketSize: 42.1,
    color: "#a855f7",
    topCompanies: [
      { name: "リクルート HD", share: 8.3 },
      { name: "セコム", share: 3.2 },
      { name: "ベネッセ HD", share: 2.1 },
    ],
    pl: { cost: 55, sga: 33, profit: 12 },
    bs: { currentAssets: 50, fixedAssets: 50, currentLiab: 25, fixedLiab: 25, equity: 50 },
    cf: { operating: 70, investing: -35, financing: -30 },
  },
  {
    slug: "food",
    label: "Food & Beverage",
    labelJa: "食品",
    marketSize: 36.4,
    color: "#84cc16",
    topCompanies: [
      { name: "JT（食品事業）", share: 6.8 },
      { name: "サントリー HD", share: 6.2 },
      { name: "アサヒグループ HD", share: 5.7 },
    ],
    pl: { cost: 60, sga: 32, profit: 8 },
    bs: { currentAssets: 40, fixedAssets: 60, currentLiab: 25, fixedLiab: 30, equity: 45 },
    cf: { operating: 75, investing: -40, financing: -30 },
  },
  {
    slug: "energy",
    label: "Resources & Energy",
    labelJa: "資源エネルギー",
    marketSize: 30.8,
    color: "#f97316",
    topCompanies: [
      { name: "ENEOS HD", share: 24.3 },
      { name: "東京電力 HD", share: 15.1 },
      { name: "関西電力", share: 9.7 },
    ],
    pl: { cost: 85, sga: 10, profit: 5 },
    bs: { currentAssets: 30, fixedAssets: 70, currentLiab: 20, fixedLiab: 45, equity: 35 },
    cf: { operating: 80, investing: -65, financing: -10 },
  },
  {
    slug: "materials",
    label: "Materials",
    labelJa: "素材",
    marketSize: 28.6,
    color: "#0ea5e9",
    topCompanies: [
      { name: "信越化学工業", share: 7.8 },
      { name: "住友化学", share: 5.2 },
      { name: "東レ", share: 4.6 },
    ],
    pl: { cost: 72, sga: 20, profit: 8 },
    bs: { currentAssets: 40, fixedAssets: 60, currentLiab: 20, fixedLiab: 35, equity: 45 },
    cf: { operating: 70, investing: -55, financing: -10 },
  },
  {
    slug: "logistics",
    label: "Logistics & Transport",
    labelJa: "物流・運輸",
    marketSize: 27.3,
    color: "#6366f1",
    topCompanies: [
      { name: "JR東日本", share: 10.2 },
      { name: "ヤマト HD", share: 7.1 },
      { name: "SGホールディングス", share: 5.8 },
    ],
    pl: { cost: 70, sga: 22, profit: 8 },
    bs: { currentAssets: 25, fixedAssets: 75, currentLiab: 20, fixedLiab: 40, equity: 40 },
    cf: { operating: 80, investing: -60, financing: -15 },
  },
  {
    slug: "dining",
    label: "Food Service",
    labelJa: "外食",
    marketSize: 26.1,
    color: "#e11d48",
    topCompanies: [
      { name: "ゼンショー HD", share: 5.2 },
      { name: "日本マクドナルド HD", share: 4.1 },
      { name: "すかいらーく HD", share: 3.4 },
    ],
    pl: { cost: 65, sga: 30, profit: 5 },
    bs: { currentAssets: 30, fixedAssets: 70, currentLiab: 30, fixedLiab: 35, equity: 35 },
    cf: { operating: 65, investing: -45, financing: -15 },
  },
  {
    slug: "specialty",
    label: "Specialty & EC",
    labelJa: "専門店・EC",
    marketSize: 20.4,
    color: "#ec4899",
    topCompanies: [
      { name: "Amazon Japan", share: 18.2 },
      { name: "楽天グループ", share: 14.5 },
      { name: "ZOZO", share: 4.8 },
    ],
    pl: { cost: 60, sga: 30, profit: 10 },
    bs: { currentAssets: 55, fixedAssets: 45, currentLiab: 35, fixedLiab: 20, equity: 45 },
    cf: { operating: 70, investing: -50, financing: -15 },
  },
  {
    slug: "daily",
    label: "Daily & Household",
    labelJa: "生活・日用品",
    marketSize: 18.1,
    color: "#06b6d4",
    topCompanies: [
      { name: "花王", share: 14.8 },
      { name: "ユニ・チャーム", share: 9.2 },
      { name: "ライオン", share: 5.6 },
    ],
    pl: { cost: 55, sga: 35, profit: 10 },
    bs: { currentAssets: 50, fixedAssets: 50, currentLiab: 25, fixedLiab: 20, equity: 55 },
    cf: { operating: 75, investing: -30, financing: -40 },
  },
  {
    slug: "entertainment",
    label: "Entertainment",
    labelJa: "エンタメ",
    marketSize: 13.5,
    color: "#d946ef",
    topCompanies: [
      { name: "ソニーG（音楽・映画）", share: 14.6 },
      { name: "任天堂", share: 11.3 },
      { name: "バンダイナムコ HD", share: 7.9 },
    ],
    pl: { cost: 50, sga: 32, profit: 18 },
    bs: { currentAssets: 55, fixedAssets: 45, currentLiab: 20, fixedLiab: 15, equity: 65 },
    cf: { operating: 80, investing: -35, financing: -40 },
  },
];

const maxSize = industries[0].marketSize;

/* ── Mini Financial Profile Charts ── */

function MiniPL({ pl, color, hovered }: { pl: PLProfile; color: string; hovered: boolean }) {
  const opacity = hovered ? 0.8 : 0.5;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="text-[7px] text-foreground/40 leading-none">PL</div>
      <div className="w-[40px] h-[14px] rounded-sm overflow-hidden flex" title={`原価${pl.cost}% 販管費${pl.sga}% 営業利益${pl.profit}%`}>
        <div style={{ width: `${pl.cost}%`, backgroundColor: color, opacity: opacity * 0.4 }} />
        <div style={{ width: `${pl.sga}%`, backgroundColor: color, opacity: opacity * 0.65 }} />
        <div style={{ width: `${pl.profit}%`, backgroundColor: color, opacity }} />
      </div>
      <div className="text-[7px] tabular-nums leading-none" style={{ color: hovered ? color : undefined, opacity: hovered ? 0.9 : 0.45 }}>
        {pl.profit}%
      </div>
    </div>
  );
}

function MiniBS({ bs, color, hovered }: { bs: BSProfile; color: string; hovered: boolean }) {
  const opacity = hovered ? 0.8 : 0.5;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="text-[7px] text-foreground/40 leading-none">BS</div>
      <div className="flex gap-px" title={`流動資産${bs.currentAssets}% 固定資産${bs.fixedAssets}% / 流動負債${bs.currentLiab}% 固定負債${bs.fixedLiab}% 純資産${bs.equity}%`}>
        {/* Assets side */}
        <div className="w-[18px] h-[14px] rounded-sm overflow-hidden flex flex-col">
          <div style={{ height: `${bs.currentAssets}%`, backgroundColor: color, opacity: opacity * 0.5 }} />
          <div style={{ height: `${bs.fixedAssets}%`, backgroundColor: color, opacity: opacity * 0.8 }} />
        </div>
        {/* Liabilities + Equity side */}
        <div className="w-[18px] h-[14px] rounded-sm overflow-hidden flex flex-col">
          <div style={{ height: `${bs.currentLiab}%`, backgroundColor: color, opacity: opacity * 0.35 }} />
          <div style={{ height: `${bs.fixedLiab}%`, backgroundColor: color, opacity: opacity * 0.6 }} />
          <div style={{ height: `${bs.equity}%`, backgroundColor: color, opacity }} />
        </div>
      </div>
      <div className="text-[7px] tabular-nums leading-none" style={{ color: hovered ? color : undefined, opacity: hovered ? 0.9 : 0.45 }}>
        自{bs.equity}%
      </div>
    </div>
  );
}

function MiniCF({ cf, color, hovered }: { cf: CFProfile; color: string; hovered: boolean }) {
  const maxAbs = Math.max(Math.abs(cf.operating), Math.abs(cf.investing), Math.abs(cf.financing));
  const scale = (v: number) => Math.abs(v) / maxAbs;
  const barH = 14;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="text-[7px] text-foreground/40 leading-none">CF</div>
      <div className="flex items-end gap-px" style={{ height: barH }} title={`営業CF ${cf.operating > 0 ? "+" : ""}${cf.operating} 投資CF ${cf.investing > 0 ? "+" : ""}${cf.investing} 財務CF ${cf.financing > 0 ? "+" : ""}${cf.financing}`}>
        {[cf.operating, cf.investing, cf.financing].map((v, i) => {
          const h = Math.max(2, scale(v) * barH);
          const isPositive = v >= 0;
          return (
            <div
              key={i}
              className="w-[10px] rounded-sm"
              style={{
                height: h,
                backgroundColor: color,
                opacity: hovered ? (isPositive ? 0.8 : 0.35) : (isPositive ? 0.5 : 0.2),
                alignSelf: isPositive ? "flex-end" : "flex-start",
              }}
            />
          );
        })}
      </div>
      <div className="text-[7px] tabular-nums leading-none" style={{ color: hovered ? color : undefined, opacity: hovered ? 0.9 : 0.45 }}>
        営{cf.operating > 0 ? "+" : ""}{cf.operating}
      </div>
    </div>
  );
}

export function IndustryBubbleChart() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mt-8 mb-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
            Market Size & Top Players
          </span>
          <span className="text-[10px] text-foreground/45 ml-2">
            (日本国内市場規模・兆円)
          </span>
        </div>
        <span className="text-[10px] text-foreground/45">
          2026年4月5日時点
        </span>
      </div>

      <div className="rounded-xl border border-brief-border bg-brief-card overflow-hidden">
        <div className="divide-y divide-brief-border">
          {industries.map((ind) => {
            const barWidth = (ind.marketSize / maxSize) * 100;
            const isHovered = hovered === ind.slug;

            return (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                className="block px-4 sm:px-5 py-3 transition-colors cursor-pointer"
                style={{
                  backgroundColor: isHovered
                    ? `${ind.color}08`
                    : "transparent",
                }}
                onMouseEnter={() => setHovered(ind.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Row: Label + Bar + Value + Financial Profiles */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Industry name */}
                  <div className="w-[70px] sm:w-[120px] flex-shrink-0">
                    <div
                      className="text-xs sm:text-sm font-semibold truncate"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.labelJa}
                    </div>
                    <div className="text-[9px] text-foreground/45 truncate hidden sm:block">
                      {ind.label}
                    </div>
                  </div>

                  {/* Bar (narrowed) */}
                  <div className="flex-1 min-w-0 max-w-[40%]">
                    <div className="h-5 sm:h-6 rounded bg-foreground/[0.04] overflow-hidden">
                      <div
                        className="h-full rounded transition-all duration-300"
                        style={{
                          width: `${barWidth}%`,
                          backgroundColor: ind.color,
                          opacity: isHovered ? 0.55 : 0.35,
                        }}
                      />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="w-[50px] sm:w-[60px] text-right flex-shrink-0">
                    <span
                      className="text-sm sm:text-base font-bold tabular-nums"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.marketSize}
                    </span>
                    <span className="text-[9px] text-foreground/50 ml-0.5 hidden sm:inline">
                      兆円
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="w-px h-6 bg-foreground/10 flex-shrink-0 hidden sm:block" />

                  {/* PL / BS / CF mini charts */}
                  <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                    <MiniPL pl={ind.pl} color={ind.color} hovered={isHovered} />
                    <MiniBS bs={ind.bs} color={ind.color} hovered={isHovered} />
                    <MiniCF cf={ind.cf} color={ind.color} hovered={isHovered} />
                  </div>
                </div>

                {/* Top 3 companies */}
                <div className="mt-1 ml-[70px] sm:ml-[120px] pl-2 sm:pl-3 flex flex-wrap gap-x-4 gap-y-0.5">
                  {ind.topCompanies.map((company, i) => (
                    <span
                      key={company.name}
                      className="text-[10px] text-foreground/55 whitespace-nowrap"
                    >
                      <span
                        className="font-medium"
                        style={{
                          color: isHovered ? ind.color : undefined,
                          opacity: isHovered ? 0.8 : 1,
                        }}
                      >
                        {i + 1}.
                      </span>{" "}
                      {company.name}{" "}
                      <span className="tabular-nums font-medium text-foreground/55">
                        {company.share}%
                      </span>
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-[10px] text-foreground/45 text-right">
        出典: 各業界団体・経済産業省・各社IR資料（2026年4月5日時点推計）
      </p>
    </div>
  );
}
