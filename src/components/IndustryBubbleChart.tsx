"use client";

import { useState } from "react";

interface TopCompany {
  name: string;
  share: number; // %
}

interface IndustryData {
  slug: string;
  label: string;
  labelJa: string;
  marketSize: number; // 兆円
  color: string;
  topCompanies: TopCompany[];
}

const industries: IndustryData[] = [
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
  },
  {
    slug: "finance",
    label: "Finance",
    labelJa: "金融",
    marketSize: 58.2,
    color: "#f59e0b",
    topCompanies: [
      { name: "三菱UFJ FG", share: 18.6 },
      { name: "三井住友 FG", share: 14.2 },
      { name: "みずほ FG", share: 11.8 },
    ],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    labelJa: "不動産",
    marketSize: 46.8,
    color: "#64748b",
    topCompanies: [
      { name: "三井不動産", share: 8.4 },
      { name: "三菱地所", share: 7.1 },
      { name: "住友不動産", share: 5.8 },
    ],
  },
  {
    slug: "retail",
    label: "Retail / EC",
    labelJa: "小売・EC",
    marketSize: 44.3,
    color: "#14b8a6",
    topCompanies: [
      { name: "イオン", share: 12.5 },
      { name: "セブン&アイ", share: 10.8 },
      { name: "Amazon Japan", share: 7.2 },
    ],
  },
  {
    slug: "energy",
    label: "Energy",
    labelJa: "エネルギー",
    marketSize: 29.5,
    color: "#f97316",
    topCompanies: [
      { name: "ENEOS", share: 24.3 },
      { name: "東京電力 HD", share: 15.1 },
      { name: "関西電力", share: 9.7 },
    ],
  },
  {
    slug: "pharma",
    label: "Pharma",
    labelJa: "医薬品",
    marketSize: 14.8,
    color: "#10b981",
    topCompanies: [
      { name: "武田薬品工業", share: 17.9 },
      { name: "大塚 HD", share: 10.4 },
      { name: "アステラス製薬", share: 9.2 },
    ],
  },
  {
    slug: "media",
    label: "Media",
    labelJa: "メディア",
    marketSize: 12.1,
    color: "#ec4899",
    topCompanies: [
      { name: "ソニーG（音楽・映画）", share: 14.6 },
      { name: "任天堂", share: 11.3 },
      { name: "日本テレビ HD", share: 5.8 },
    ],
  },
  {
    slug: "ai",
    label: "AI / Tech",
    labelJa: "AI・テック",
    marketSize: 8.4,
    color: "#8b5cf6",
    topCompanies: [
      { name: "NTTデータ", share: 15.2 },
      { name: "富士通", share: 12.8 },
      { name: "NEC", share: 9.5 },
    ],
  },
  {
    slug: "semiconductors",
    label: "Semiconductors",
    labelJa: "半導体",
    marketSize: 7.2,
    color: "#06b6d4",
    topCompanies: [
      { name: "東京エレクトロン", share: 22.1 },
      { name: "ルネサスエレクトロニクス", share: 14.5 },
      { name: "キオクシア", share: 11.3 },
    ],
  },
];

// Already sorted by marketSize descending

const maxSize = industries[0].marketSize;

export function IndustryBubbleChart() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mt-8 mb-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45">
            Market Size & Top Players
          </span>
          <span className="text-[10px] text-foreground/35 ml-2">
            (日本国内市場規模・兆円)
          </span>
        </div>
        <span className="text-[10px] text-foreground/35">
          2026年4月5日時点
        </span>
      </div>

      <div className="rounded-xl border border-brief-border bg-brief-card overflow-hidden">
        <div className="divide-y divide-brief-border">
          {industries.map((ind) => {
            const barWidth = (ind.marketSize / maxSize) * 100;
            const isHovered = hovered === ind.slug;

            return (
              <div
                key={ind.slug}
                className="px-4 sm:px-5 py-3.5 transition-colors"
                style={{
                  backgroundColor: isHovered
                    ? `${ind.color}08`
                    : "transparent",
                }}
                onMouseEnter={() => setHovered(ind.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Row: Label + Bar + Value */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Industry name */}
                  <div className="w-[100px] sm:w-[130px] flex-shrink-0">
                    <div
                      className="text-xs sm:text-sm font-semibold truncate"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.labelJa}
                    </div>
                    <div className="text-[9px] text-foreground/35 truncate">
                      {ind.label}
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="flex-1 min-w-0">
                    <div className="h-6 sm:h-7 rounded bg-foreground/[0.03] overflow-hidden">
                      <div
                        className="h-full rounded transition-all duration-300"
                        style={{
                          width: `${barWidth}%`,
                          backgroundColor: ind.color,
                          opacity: isHovered ? 0.3 : 0.15,
                        }}
                      />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="w-[60px] sm:w-[70px] text-right flex-shrink-0">
                    <span
                      className="text-sm sm:text-base font-bold tabular-nums"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.marketSize}
                    </span>
                    <span className="text-[9px] text-foreground/40 ml-0.5">
                      兆円
                    </span>
                  </div>
                </div>

                {/* Top 3 companies */}
                <div className="mt-1.5 ml-[100px] sm:ml-[130px] pl-3 sm:pl-4 flex flex-wrap gap-x-4 gap-y-0.5">
                  {ind.topCompanies.map((company, i) => (
                    <span
                      key={company.name}
                      className="text-[10px] text-foreground/45 whitespace-nowrap"
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
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-[10px] text-foreground/35 text-right">
        出典: 各業界団体・経済産業省・各社IR資料（2026年4月5日時点推計）
      </p>
    </div>
  );
}
