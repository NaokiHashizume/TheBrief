// 高市内閣 施政方針と進捗指標
// 2026年2月20日 第221回国会 施政方針演説に基づく
// ソース: kantei.go.jp, nikkei.com, jiji.com

export interface PolicyGoal {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  description: string;
  target: string;
  current: string;
  progress: number; // 0-100
  status: "on-track" | "delayed" | "at-risk" | "achieved";
  statusLabel: string;
  lastUpdated: string;
}

export interface PolicyPillar {
  title: string;
  titleEn: string;
  icon: string; // emoji-free, use label
  description: string;
  keyPoints: string[];
}

// 施政方針の3本柱
export const policyPillars: PolicyPillar[] = [
  {
    title: "責任ある積極財政",
    titleEn: "Responsible Proactive Fiscal Policy",
    icon: "fiscal",
    description:
      "長年の緊縮志向を転換し、「危機管理投資」と「成長投資」を両輪に、強い経済の実現を目指す。総合経済対策21.3兆円を決定。",
    keyPoints: [
      "総合経済対策21.3兆円（生活安全保障11.7兆 + 成長投資7.2兆 + 防衛1.7兆）",
      "食料品の消費税率を2年間限定でゼロに（国民会議で検討中）",
      "103万円の壁を123万円に引き上げ（2026年1月施行済み）",
      "17戦略分野（AI・半導体・量子・宇宙等）に多年度の別枠予算",
    ],
  },
  {
    title: "防衛力と外交力の強化",
    titleEn: "Defense & Diplomacy",
    icon: "defense",
    description:
      "防衛費GDP比2%を確実に達成し、「自由で開かれたインド太平洋」の実現に向けた外交を展開。宇宙・サイバー領域の能力も強化。",
    keyPoints: [
      "防衛費を年間11兆円規模に前倒し（当初2027年目標を2年前倒し）",
      "航空自衛隊を「航空宇宙自衛隊」に改編、宇宙作戦集団を新編",
      "国家情報局の新設（2026年7月発足目標）",
      "防衛特別法人税の施行（2026年4月〜）",
    ],
  },
  {
    title: "国民生活の安全保障",
    titleEn: "Livelihood Security",
    icon: "life",
    description:
      "少子化対策・防災・エネルギー安全保障など、国民生活を守るための投資を加速。防災庁の設立やこども政策を推進。",
    keyPoints: [
      "防災庁の設立（2026年秋目標）",
      "こども誰でも通園制度の本格実施（2026年4月〜）",
      "子ども・子育て支援金の徴収開始",
      "脱炭素電源の最大限活用とGX投資の加速",
    ],
  },
];

// 政策進捗指標
export const policyIndicators: PolicyGoal[] = [
  {
    id: "approval",
    category: "内閣",
    categoryEn: "Cabinet",
    title: "内閣支持率",
    description: "各社世論調査の平均値",
    target: "安定的な政権運営（50%以上を維持）",
    current: "58〜64%（2026年3月・各社調査）",
    progress: 72,
    status: "on-track",
    statusLabel: "高水準を維持",
    lastUpdated: "2026-03",
  },
  {
    id: "gdp",
    category: "経済",
    categoryEn: "Economy",
    title: "実質GDP成長率",
    description: "内閣府・民間予測の中央値",
    target: "2026年度 +1.5%以上（政府見通し）",
    current: "+1.0%（民間予測中央値）",
    progress: 55,
    status: "delayed",
    statusLabel: "政府目標を下回る見通し",
    lastUpdated: "2026-02",
  },
  {
    id: "wages",
    category: "経済",
    categoryEn: "Economy",
    title: "春闘賃上げ率",
    description: "連合集計による賃上げ率",
    target: "物価上昇を上回る持続的な賃上げ",
    current: "+5.45%（2026年春闘・3年連続5%台）",
    progress: 90,
    status: "on-track",
    statusLabel: "目標達成ペース",
    lastUpdated: "2026-03",
  },
  {
    id: "cpi",
    category: "経済",
    categoryEn: "Economy",
    title: "消費者物価上昇率（CPI）",
    description: "生鮮食品を除く総合（コアCPI）",
    target: "2%程度の安定的な物価上昇",
    current: "+1.3%（2026年2月・前年同月比）",
    progress: 75,
    status: "on-track",
    statusLabel: "鈍化傾向で安定化",
    lastUpdated: "2026-02",
  },
  {
    id: "food-tax",
    category: "経済",
    categoryEn: "Economy",
    title: "食料品消費税ゼロ",
    description: "2年限定で食料品の消費税率を0%に",
    target: "夏前に国民会議で中間とりまとめ → 法案提出",
    current: "国民会議で検討中",
    progress: 20,
    status: "delayed",
    statusLabel: "議論段階",
    lastUpdated: "2026-04",
  },
  {
    id: "defense",
    category: "防衛",
    categoryEn: "Defense",
    title: "防衛費GDP比2%",
    description: "防衛関係費の対GDP比",
    target: "年間11兆円規模（2027年→2025年に前倒し）",
    current: "FY2026予算案で約9兆円超",
    progress: 65,
    status: "on-track",
    statusLabel: "段階的に増額中",
    lastUpdated: "2026-03",
  },
  {
    id: "intelligence",
    category: "防衛",
    categoryEn: "Defense",
    title: "国家情報局の新設",
    description: "インテリジェンス機能を一元化する新組織",
    target: "2026年7月発足",
    current: "設置法案を国会提出済み（3月13日閣議決定）",
    progress: 50,
    status: "on-track",
    statusLabel: "国会審議中",
    lastUpdated: "2026-03",
  },
  {
    id: "disaster",
    category: "国民生活",
    categoryEn: "Livelihood",
    title: "防災庁の設立",
    description: "内閣府防災担当を独立した庁に格上げ",
    target: "2026年秋に発足",
    current: "設置法案を国会提出済み（3月6日閣議決定）",
    progress: 40,
    status: "on-track",
    statusLabel: "国会審議中",
    lastUpdated: "2026-03",
  },
  {
    id: "childcare",
    category: "国民生活",
    categoryEn: "Livelihood",
    title: "こども誰でも通園制度",
    description: "3歳未満の未就園児が保育所を利用可能に",
    target: "2026年4月本格実施",
    current: "4月1日より全国で開始",
    progress: 100,
    status: "achieved",
    statusLabel: "施行済み",
    lastUpdated: "2026-04",
  },
];
