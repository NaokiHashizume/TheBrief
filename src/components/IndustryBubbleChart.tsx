"use client";

import { useState } from "react";

interface TopCompany {
  name: string;
  share: number;
}

interface IndustryData {
  slug: string;
  label: string;
  labelJa: string;
  marketSize: number;
  color: string;
  topCompanies: TopCompany[];
}

const industries: IndustryData[] = [
  {
    slug: "retail",
    label: "Retail",
    labelJa: "小売り",
    marketSize: 154.2,
    color: "#14b8a6",
    topCompanies: [
      { name: "イオン", share: 6.1 },
      { name: "セブン&アイ", share: 5.4 },
      { name: "ファーストリテイリング", share: 1.8 },
    ],
  },
  {
    slug: "trading",
    label: "Trading & Wholesale",
    labelJa: "商社・卸売り",
    marketSize: 118.5,
    color: "#78716c",
    topCompanies: [
      { name: "三菱商事", share: 15.8 },
      { name: "伊藤忠商事", share: 12.4 },
      { name: "三井物産", share: 11.7 },
    ],
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
  },
  {
    slug: "ict",
    label: "ICT & Internet",
    labelJa: "情報通信・ネット",
    marketSize: 55.7,
    color: "#3b82f6",
    topCompanies: [
      { name: "NTT", share: 21.5 },
      { name: "KDDI", share: 9.8 },
      { name: "ソフトバンク", share: 9.2 },
    ],
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
  },
  {
    slug: "corporate",
    label: "Corporate & Earnings",
    labelJa: "企業・業績",
    marketSize: 22.8,
    color: "#475569",
    topCompanies: [
      { name: "ソニーグループ", share: 12.4 },
      { name: "日立製作所", share: 11.8 },
      { name: "パナソニック HD", share: 7.5 },
    ],
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
  },
];

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
                className="px-4 sm:px-5 py-3 transition-colors"
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
                  <div className="w-[90px] sm:w-[140px] flex-shrink-0">
                    <div
                      className="text-xs sm:text-sm font-semibold truncate"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.labelJa}
                    </div>
                    <div className="text-[9px] text-foreground/35 truncate hidden sm:block">
                      {ind.label}
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="flex-1 min-w-0">
                    <div className="h-5 sm:h-6 rounded bg-foreground/[0.03] overflow-hidden">
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
                <div className="mt-1 ml-[90px] sm:ml-[140px] pl-3 sm:pl-4 flex flex-wrap gap-x-4 gap-y-0.5">
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
