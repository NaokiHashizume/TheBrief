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

interface FinancialNotes {
  pl: string;
  bs: string;
  cf: string;
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
  notes: FinancialNotes;
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
    notes: {
      pl: "薄利多売型。原価率が高く営業利益率は3%前後と極めて薄い。PB（自社ブランド）比率の拡大が利益率改善のカギ。",
      bs: "棚卸資産（在庫）と買掛金が大きく、流動資産・流動負債の比率が高い。店舗は賃借が多くリース負債が固定負債に計上。",
      cf: "日銭商売で営業CFは安定。店舗改装・システム投資で投資CFはマイナス。自社株買い・配当で財務CFもマイナス傾向。",
    },
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
    notes: {
      pl: "仲介型で原価率が極めて高い（82%）。販管費は低く抑えられ、「口銭（マージン）」の積み上げで利益を確保する構造。",
      bs: "海外資源権益・関連会社株式が固定資産に。貿易金融に伴う売掛金・借入金が大きく、BSが膨らみやすい。",
      cf: "資源権益やM&Aへの積極投資で投資CFのマイナスが大きい。営業CFは安定しており、フリーCFで株主還元を強化。",
    },
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
    notes: {
      pl: "製造業だが原価率はやや高め。EV化に伴うR&D費が販管費を押し上げ。トヨタの営業利益率は10%超と業界突出。",
      bs: "工場・設備が固定資産に。金融子会社（自動車ローン）を連結するためBS規模が膨らむ。自己資本比率は比較的高い。",
      cf: "営業CFは潤沢。工場・EV設備投資で投資CFは大幅マイナス。自社株買い・配当で財務CFもマイナス。",
    },
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
    notes: {
      pl: "ゼネコンは工事原価率が高い（78%）。不動産デベは販管費が低く利益率が高い。業界平均では5%程度。",
      bs: "不動産（土地・建物）が固定資産の大半。開発案件の借入金で固定負債が大きく、レバレッジ経営が特徴。",
      cf: "マンション引渡し時期により営業CFが四半期で大きく変動。不動産取得で投資CFはマイナス。借入依存で財務CFは小幅。",
    },
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
    notes: {
      pl: "原価＝信用コスト（貸倒引当金）。利ざや（NIM）で稼ぐため原価率が低く、営業利益率25%と高い。人件費が販管費の大半。",
      bs: "預金（流動負債）で資金を集め貸出（流動資産）で運用するため、BSが巨大。自己資本比率は10%前後と低いが規制上は正常。",
      cf: "貸出・預金変動で営業CFは非常に大きい。投資CFは債券売買で変動。配当・劣後債償還で財務CFはマイナス。",
    },
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
    notes: {
      pl: "通信インフラの減価償却が原価に。ARPU（顧客単価）×契約数で安定収益。SaaS/SI企業は販管費（人件費）が大きい。",
      bs: "通信基地局・光ファイバーなどネットワーク設備が固定資産の大半。設備投資のための長期借入で固定負債が大きい。",
      cf: "サブスク型で営業CFが極めて安定。5G・データセンター投資で投資CFは大幅マイナス。株主還元も積極的。",
    },
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
    notes: {
      pl: "原価率が低い（40%）一方、R&D費・MR人件費が販管費を押し上げ45%。新薬上市時は利益率が急上昇（パテントクリフの逆）。",
      bs: "特許権・のれんなど無形資産が固定資産に。M&A資金の借入がある一方、自己資本比率55%と財務基盤は堅実。",
      cf: "ロイヤリティ収入で営業CFは安定。パイプライン投資・M&Aで投資CFは大幅マイナス。新薬成功で一気にCF改善。",
    },
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
    notes: {
      pl: "人件費が原価・販管費の大半を占める労働集約型。稼働率が利益率に直結。コンサルは人月単価×稼働率で収益が決まる。",
      bs: "有形資産が少なくアセットライト。のれん（M&A）や人材関連投資が中心。自己資本比率50%と健全。",
      cf: "先払い型の契約が多く営業CFは安定。大型M&A時に投資CFが急拡大。人材投資は費用計上のためBSに現れにくい。",
    },
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
    notes: {
      pl: "原材料費（農産物・包装材）が原価の大半。広告宣伝費とブランド投資が販管費に。高付加価値品シフトで利益率は改善傾向。",
      bs: "工場・製造設備が固定資産に。海外子会社ののれんも。飲料・調味料は棚卸資産回転が早く、流動性は良好。",
      cf: "ブランド力で営業CFは安定的。工場更新・海外拡大投資で投資CFはマイナス。配当性向40%前後で財務CFもマイナス。",
    },
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
    notes: {
      pl: "原油・LNG調達コストが原価の大半（85%）。市況連動で利益が大きく変動。電力は燃料費調整で一部転嫁。",
      bs: "発電所・精製プラント・鉱区権益が固定資産に（70%）。設備投資のための長期借入が固定負債を押し上げ。",
      cf: "市況好調時は営業CFが膨らむ。脱炭素投資（再エネ・水素）で投資CFは業界最大級のマイナス。",
    },
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
    notes: {
      pl: "原材料費（鉄鉱石・ナフサ等）が原価の大半。市況品は価格転嫁が難しく利益率が変動。スペシャリティ化学は高利益率。",
      bs: "高炉・化学プラントなど大規模設備が固定資産に。設備更新サイクルが長く減価償却負担が重い。",
      cf: "設備集約型で投資CFのマイナスが大きい。グリーンスチール・半導体素材への投資が今後さらに拡大見込み。",
    },
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
    notes: {
      pl: "燃料費・人件費が原価の大半。鉄道は固定費型で乗客数が損益分岐を左右。宅配は薄利多売（利益率3〜5%）。",
      bs: "線路・車両・駅舎・倉庫が固定資産の75%。インフラ投資のため固定負債が大きく、レバレッジが高い。",
      cf: "鉄道の定期券収入で営業CFは安定。車両更新・新線建設で投資CFは大幅マイナス。駅ナカ開発が非鉄道CF貢献。",
    },
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
    notes: {
      pl: "食材原価（F）＋人件費（L）のFL比率が60%超。営業利益率5%前後と薄く、客単価×回転率の最大化が生命線。",
      bs: "店舗内装・厨房設備が固定資産に。IFRS適用企業はリース負債（賃借店舗）が固定負債に計上され、BSが膨らむ。",
      cf: "日銭商売で営業CFは比較的安定。新規出店投資で投資CFはマイナス。コロナ後は出店抑制でCF改善傾向。",
    },
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
    notes: {
      pl: "EC大手は物流費が原価に。プラットフォーム型は手数料・広告収入で利益率10%。実店舗型は人件費・賃料で利益率3〜5%。",
      bs: "EC企業は倉庫・物流設備とソフトウェアが資産に。家電量販は棚卸資産が大きい。流動資産比率が比較的高い。",
      cf: "EC大手はサブスク（Prime等）で営業CFが安定。物流センター投資で投資CFはマイナス。成長投資を優先しFCFは薄い。",
    },
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
    notes: {
      pl: "原材料費は比較的低く、広告宣伝費・研究開発費が販管費の大半。ブランド力による価格プレミアムが利益率のカギ。",
      bs: "工場・製造設備と無形資産（ブランド）が固定資産に。花王・ユニ・チャームは自己資本比率55%と財務健全。",
      cf: "日用品の安定需要で営業CFはディフェンシブ。海外工場投資で投資CFはマイナス。配当・自社株買いで財務CFもマイナス。",
    },
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
    notes: {
      pl: "IP（知的財産）型で原価率が低い（50%）。ゲーム・音楽はデジタル化で限界費用がほぼゼロ。営業利益率18%と高水準。",
      bs: "IP・コンテンツ資産・のれんが固定資産に。任天堂は現預金1兆円超の無借金経営。自己資本比率65%と業界最高水準。",
      cf: "ヒット作で営業CFが急増。IP投資（ゲーム開発・映画制作）で投資CFはマイナスだが規模は限定的。株主還元に積極的。",
    },
  },
];

const maxSize = industries[0].marketSize;

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
                    <div className="text-[9px] text-foreground/45 truncate hidden sm:block">
                      {ind.label}
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="flex-1 min-w-0">
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
                  <div className="w-[60px] sm:w-[70px] text-right flex-shrink-0">
                    <span
                      className="text-sm sm:text-base font-bold tabular-nums"
                      style={{ color: isHovered ? ind.color : undefined }}
                    >
                      {ind.marketSize}
                    </span>
                    <span className="text-[9px] text-foreground/50 ml-0.5">
                      兆円
                    </span>
                  </div>
                </div>

                {/* Top 3 companies */}
                <div className="mt-1 ml-[90px] sm:ml-[140px] pl-3 sm:pl-4 flex flex-wrap gap-x-4 gap-y-0.5">
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

/* ══════════════════════════════════════════════════════════════
   Standalone Financial Profiles Section (PL / BS / CF)
   ══════════════════════════════════════════════════════════════ */

function PLChart({ pl, color }: { pl: PLProfile; color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-semibold text-foreground/60">PL 損益構造</div>
      <div className="w-full h-6 rounded-md overflow-hidden flex">
        <div
          className="h-full flex items-center justify-center text-[8px] font-medium text-white/80"
          style={{ width: `${pl.cost}%`, backgroundColor: color, opacity: 0.3 }}
        >
          {pl.cost >= 20 ? `原価 ${pl.cost}%` : ""}
        </div>
        <div
          className="h-full flex items-center justify-center text-[8px] font-medium text-white/80"
          style={{ width: `${pl.sga}%`, backgroundColor: color, opacity: 0.55 }}
        >
          {pl.sga >= 15 ? `販管費 ${pl.sga}%` : ""}
        </div>
        <div
          className="h-full flex items-center justify-center text-[8px] font-bold text-white"
          style={{ width: `${pl.profit}%`, backgroundColor: color, opacity: 0.85 }}
        >
          {pl.profit >= 8 ? `利益 ${pl.profit}%` : `${pl.profit}%`}
        </div>
      </div>
      <div className="flex justify-between text-[9px] text-foreground/45">
        <span>売上原価</span>
        <span>販管費</span>
        <span className="font-medium" style={{ color }}>営業利益率 {pl.profit}%</span>
      </div>
    </div>
  );
}

function BSChart({ bs, color }: { bs: BSProfile; color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-semibold text-foreground/60">BS 財務構造</div>
      <div className="flex gap-1">
        {/* Assets */}
        <div className="flex-1">
          <div className="text-[8px] text-foreground/40 text-center mb-0.5">資産</div>
          <div className="h-16 rounded-md overflow-hidden flex flex-col">
            <div
              className="w-full flex items-center justify-center text-[8px] font-medium text-white/80"
              style={{ height: `${bs.currentAssets}%`, backgroundColor: color, opacity: 0.4 }}
            >
              流動 {bs.currentAssets}%
            </div>
            <div
              className="w-full flex items-center justify-center text-[8px] font-medium text-white/80"
              style={{ height: `${bs.fixedAssets}%`, backgroundColor: color, opacity: 0.65 }}
            >
              固定 {bs.fixedAssets}%
            </div>
          </div>
        </div>
        {/* Liabilities + Equity */}
        <div className="flex-1">
          <div className="text-[8px] text-foreground/40 text-center mb-0.5">負債・純資産</div>
          <div className="h-16 rounded-md overflow-hidden flex flex-col">
            <div
              className="w-full flex items-center justify-center text-[8px] font-medium text-white/80"
              style={{ height: `${bs.currentLiab}%`, backgroundColor: color, opacity: 0.3 }}
            >
              流動負債 {bs.currentLiab}%
            </div>
            <div
              className="w-full flex items-center justify-center text-[8px] font-medium text-white/80"
              style={{ height: `${bs.fixedLiab}%`, backgroundColor: color, opacity: 0.5 }}
            >
              固定負債 {bs.fixedLiab}%
            </div>
            <div
              className="w-full flex items-center justify-center text-[8px] font-bold text-white"
              style={{ height: `${bs.equity}%`, backgroundColor: color, opacity: 0.85 }}
            >
              純資産 {bs.equity}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CFChart({ cf, color }: { cf: CFProfile; color: string }) {
  const maxAbs = Math.max(Math.abs(cf.operating), Math.abs(cf.investing), Math.abs(cf.financing));
  const barH = (v: number) => `${Math.max(8, (Math.abs(v) / maxAbs) * 100)}%`;
  const items = [
    { label: "営業CF", value: cf.operating },
    { label: "投資CF", value: cf.investing },
    { label: "財務CF", value: cf.financing },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-semibold text-foreground/60">CF キャッシュフロー</div>
      <div className="flex items-end gap-2 h-16">
        {items.map((item) => {
          const isPositive = item.value >= 0;
          return (
            <div key={item.label} className="flex-1 flex flex-col items-center h-full justify-end">
              <div
                className="w-full rounded-md"
                style={{
                  height: barH(item.value),
                  backgroundColor: color,
                  opacity: isPositive ? 0.7 : 0.25,
                  border: isPositive ? "none" : `1px dashed ${color}`,
                }}
              />
              <div className="text-[8px] text-foreground/50 mt-1 text-center leading-tight">
                {item.label}
              </div>
              <div
                className="text-[9px] font-bold tabular-nums text-center"
                style={{ color: isPositive ? color : undefined, opacity: isPositive ? 0.8 : 0.4 }}
              >
                {item.value > 0 ? "+" : ""}{item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function IndustryFinancialProfiles() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mt-10 mb-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
            Financial Profiles by Industry
          </span>
          <span className="text-[10px] text-foreground/45 ml-2">
            (業界別 財務構造の特徴)
          </span>
        </div>
        <div className="flex gap-4 text-[9px] text-foreground/40">
          <span><span className="inline-block w-2 h-2 rounded-sm bg-foreground/20 mr-1" />PL = 損益計算書</span>
          <span><span className="inline-block w-2 h-2 rounded-sm bg-foreground/40 mr-1" />BS = 貸借対照表</span>
          <span><span className="inline-block w-2 h-2 rounded-sm bg-foreground/60 mr-1" />CF = キャッシュフロー</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind) => {
          const isHovered = hovered === ind.slug;
          return (
            <div
              key={ind.slug}
              className="rounded-xl border border-brief-border bg-brief-card p-4 transition-all"
              style={{
                borderColor: isHovered ? `${ind.color}40` : undefined,
                boxShadow: isHovered ? `0 0 0 1px ${ind.color}20` : undefined,
              }}
              onMouseEnter={() => setHovered(ind.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-brief-border">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: ind.color }}
                />
                <div className="text-sm font-semibold" style={{ color: isHovered ? ind.color : undefined }}>
                  {ind.labelJa}
                </div>
                <div className="text-[9px] text-foreground/40 ml-auto">
                  {ind.marketSize}兆円
                </div>
              </div>

              {/* PL */}
              <div className="mb-3">
                <PLChart pl={ind.pl} color={ind.color} />
                <p className="mt-1.5 text-[10px] text-foreground/45 leading-relaxed">{ind.notes.pl}</p>
              </div>

              {/* BS + CF side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <BSChart bs={ind.bs} color={ind.color} />
                  <p className="mt-1.5 text-[10px] text-foreground/45 leading-relaxed">{ind.notes.bs}</p>
                </div>
                <div>
                  <CFChart cf={ind.cf} color={ind.color} />
                  <p className="mt-1.5 text-[10px] text-foreground/45 leading-relaxed">{ind.notes.cf}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-[10px] text-foreground/45 text-right">
        出典: 各社IR資料・有価証券報告書より業界平均を算出（2026年4月5日時点推計）
      </p>
    </div>
  );
}
