export interface Automaker {
  slug: string;
  name: string;
  nameEn: string;
  logo: string;
  color: string;
  stockCode?: string;
  overview: string;
  financials: {
    revenue: string;
    revenueYoy: string;
    operatingProfit: string;
    opMargin: string;
    globalSales: string;
    salesYoy: string;
    fiscalYear: string;
  };
  evStrategy: {
    summary: string;
    keyModels: string[];
    target: string;
  };
  strengths: string[];
  challenges: string[];
  latestNews: {
    date: string;
    headline: string;
  }[];
}

export const automakers: Automaker[] = [
  {
    slug: "toyota",
    name: "トヨタ自動車",
    nameEn: "Toyota Motor",
    logo: "T",
    color: "#ef4444",
    stockCode: "7203",
    overview:
      "世界販売台数首位を堅持する日本最大の自動車メーカー。HEV・PHEV・BEV・FCEV・水素エンジンの「全方位戦略」を掲げ、2026年には全固体電池搭載EVの発売を目指す。静岡県裾野市の実証都市「Woven City」は2025年9月に正式オープンした。",
    financials: {
      revenue: "48兆360億円",
      revenueYoy: "+6.5%",
      operatingProfit: "4兆7,950億円",
      opMargin: "10.0%",
      globalSales: "936万2,000台",
      salesYoy: "-0.9%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "全方位戦略を維持しつつ、次世代BEVプラットフォームを2026年投入。全固体電池は2027-2028年に初搭載EV、2030年に量産化を目指す。航続距離1,000km・充電10分が目標。",
      keyModels: ["bZ4X", "次世代BEV（2026年）", "全固体電池EV（2027-28年）"],
      target: "2030年にBEV350万台（うち170万台は次世代）",
    },
    strengths: [
      "世界販売台数首位（936万台）",
      "HEVで圧倒的シェア（国内新車の54.8%がHV）",
      "全固体電池の開発リード",
      "豊富なキャッシュフローと投資余力",
    ],
    challenges: [
      "BEVラインナップで中国・欧州勢に後れ",
      "米国関税の影響（北米販売270万台）",
      "ソフトウェア開発（SDV）の遅れ",
    ],
    latestNews: [
      { date: "2025-09", headline: "Woven City が正式オープン、約300名が入居開始" },
      { date: "2025-10", headline: "住友金属鉱山と全固体電池の正極材で提携" },
      { date: "2026-02", headline: "全固体電池工場の建設計画を発表" },
    ],
  },
  {
    slug: "honda",
    name: "本田技研工業",
    nameEn: "Honda Motor",
    logo: "H",
    color: "#3b82f6",
    stockCode: "7267",
    overview:
      "四輪・二輪・パワープロダクツの3事業を展開。2026年から北米で新型EV「Honda 0 Series」を投入し、独自の「ASIMO OS」でSDV時代に挑む。2025年2月に日産との経営統合交渉が決裂し、戦略的提携に転換した。",
    financials: {
      revenue: "21兆6,887億円",
      revenueYoy: "+6.2%",
      operatingProfit: "1兆2,134億円",
      opMargin: "5.6%",
      globalSales: "約410万台",
      salesYoy: "-11.4%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "Honda 0 Seriesを2026年に北米投入、2030年までに7モデル展開。独自ASIMO OSとSDV基盤で差別化。ただし2030年グローバルEV比率目標を30%→20%に下方修正。",
      keyModels: ["Honda 0 Series（2026年〜）", "e:Ny1", "Prologue"],
      target: "2030年にEV比率20%（当初30%から下方修正）",
    },
    strengths: [
      "二輪車で世界首位",
      "収益源の多角化（四輪・二輪・パワープロダクツ）",
      "独自SDVプラットフォーム（ASIMO OS）",
    ],
    challenges: [
      "中国市場の低迷",
      "EV戦略の遅れと目標下方修正",
      "米国関税の影響（推定3,850億円）",
    ],
    latestNews: [
      { date: "2025-02", headline: "日産との経営統合交渉が決裂、戦略的提携に転換" },
      { date: "2025-05", headline: "Honda 0 Series の詳細仕様を公開" },
      { date: "2026-03", headline: "EV計画見直し：北米向け3モデルの開発を中止" },
    ],
  },
  {
    slug: "nissan",
    name: "日産自動車",
    nameEn: "Nissan Motor",
    logo: "N",
    color: "#64748b",
    stockCode: "7201",
    overview:
      "四半世紀で最大の経営危機に直面。2万人削減・7工場閉鎖の大規模リストラを断行中。Honda との統合交渉は2025年2月に決裂。LeafとAriyaのEVラインナップを持つが、生き残りが最優先課題。",
    financials: {
      revenue: "12兆6,000億円",
      revenueYoy: "--",
      operatingProfit: "698億円",
      opMargin: "0.6%",
      globalSales: "334万6,000台",
      salesYoy: "--",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "Leaf・Ariyaを継続展開するが、構造改革が最優先。EV投資よりも固定費削減と収益改善に注力。2026年度は6,500億円の最終赤字を見込む。",
      keyModels: ["Leaf", "Ariya"],
      target: "経営再建を最優先、EV拡大は凍結状態",
    },
    strengths: [
      "EV先駆者としてのブランド（Leaf）",
      "e-POWER技術（シリーズハイブリッド）",
      "Renault-Nissan-三菱アライアンス",
    ],
    challenges: [
      "四半世紀で最大の経営危機",
      "2万人削減・7工場閉鎖のリストラ中",
      "2026年度に6,500億円の最終赤字見込み",
      "米国関税の影響（2,750億円）",
    ],
    latestNews: [
      { date: "2025-02", headline: "Honda との経営統合交渉が決裂" },
      { date: "2025-05", headline: "2万人削減・7工場閉鎖の構造改革を発表" },
      { date: "2025-11", headline: "追浜工場（旗艦工場）の閉鎖を決定" },
    ],
  },
  {
    slug: "suzuki",
    name: "スズキ",
    nameEn: "Suzuki Motor",
    logo: "S",
    color: "#f59e0b",
    stockCode: "7269",
    overview:
      "インド市場で圧倒的シェアを持つ軽自動車・小型車の巨人。マルチ・スズキはインド国内累計販売3,000万台を突破。初の量産BEV「e VITARA」を2025年欧州、2026年日本で発売。",
    financials: {
      revenue: "5兆7,600億円",
      revenueYoy: "+7.2%",
      operatingProfit: "約5,700億円",
      opMargin: "9.9%",
      globalSales: "324万385台",
      salesYoy: "+2.3%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "初の量産BEV「e VITARA」を欧州（2025年9月）、日本（2026年1月）で投入。トヨタとの提携で開発。49kWh（FWD）と61kWh（FWD/AWD）の2仕様。",
      keyModels: ["e VITARA（2025-26年）"],
      target: "EV市場への本格参入（後発組）",
    },
    strengths: [
      "インド市場で圧倒的シェア（累計3,000万台）",
      "軽自動車・二輪車の強固な事業基盤",
      "低コスト製造のノウハウ",
    ],
    challenges: [
      "EV市場への参入が遅い",
      "為替変動リスク（円安影響）",
      "原材料コスト上昇",
    ],
    latestNews: [
      { date: "2025-09", headline: "e VITARA が欧州で発売開始" },
      { date: "2025-11", headline: "マルチ・スズキがインド国内累計3,000万台達成" },
      { date: "2026-01", headline: "e VITARA が日本国内で発売開始" },
    ],
  },
  {
    slug: "mazda",
    name: "マツダ",
    nameEn: "Mazda Motor",
    logo: "M",
    color: "#8b5cf6",
    stockCode: "7261",
    overview:
      "「走る歓び」を掲げるプレミアム志向の中堅メーカー。CX-5/CX-60/CX-80のSUVラインナップが主力。ロータリーエンジン搭載のMX-30 R-EVは販売不振で2年で生産終了。2026年度は営業利益が大幅減少の見通し。",
    financials: {
      revenue: "5兆189億円",
      revenueYoy: "+4.0%",
      operatingProfit: "1,861億円",
      opMargin: "3.7%",
      globalSales: "130万3,000台",
      salesYoy: "--",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "MX-30 R-EV（ロータリーレンジエクステンダー）は2年で生産終了。EZ-6（EV）を中国投入、Mazda6e（EV）を欧州投入予定。2027年にレンジエクステンダー搭載電動SUVを計画。",
      keyModels: ["EZ-6", "Mazda6e", "電動SUV（2027年）"],
      target: "段階的なEV移行（規模の制約あり）",
    },
    strengths: [
      "プレミアムブランドポジショニング",
      "SUVラインナップの充実（CX-5/60/80）",
      "独自のエンジニアリング文化",
    ],
    challenges: [
      "2026年度の営業利益が500億円に急落見通し",
      "小規模ゆえのEV開発投資の限界",
      "ロータリーEV戦略の頓挫",
    ],
    latestNews: [
      { date: "2025-05", headline: "MX-30 R-EV の生産終了を発表" },
      { date: "2025-12", headline: "EZ-6 を中国市場に投入" },
      { date: "2026-03", headline: "2026年度営業利益見通しを500億円に下方修正" },
    ],
  },
  {
    slug: "subaru",
    name: "SUBARU",
    nameEn: "Subaru Corporation",
    logo: "★",
    color: "#0ea5e9",
    stockCode: "7270",
    overview:
      "AWD（四輪駆動）技術を核に北米市場で独自のポジションを確立。米国が最大市場で2025年暦年64.4万台を販売。唯一のBEV「ソルテラ」は販売好調（前年比+40%）だが、ラインナップの拡充が急務。",
    financials: {
      revenue: "4兆6,858億円",
      revenueYoy: "-0.4%",
      operatingProfit: "4,053億円",
      opMargin: "8.6%",
      globalSales: "64万3,591台（米国）",
      salesYoy: "-3.6%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "ソルテラ（トヨタbZ4Xの兄弟車）が唯一のBEV。2024年通年で12,447台（+40%）と好調。2026年にアップデートモデル投入。追加EVモデルの開発を急ぐ。",
      keyModels: ["ソルテラ（2026年更新）"],
      target: "EVラインナップ拡充が急務",
    },
    strengths: [
      "北米市場での強固なブランド忠誠度",
      "AWD技術による差別化",
      "Crosstrek/Forester/Outbackの安定需要",
    ],
    challenges: [
      "米国市場への過度な依存と関税リスク",
      "2026年度の営業利益が半減見通し（2,000億円）",
      "EVラインナップがソルテラのみ",
    ],
    latestNews: [
      { date: "2025-12", headline: "2025年米国販売64.4万台（-3.6%）" },
      { date: "2026-03", headline: "ソルテラが月間販売記録を更新（1,736台）" },
    ],
  },
  {
    slug: "mitsubishi",
    name: "三菱自動車",
    nameEn: "Mitsubishi Motors",
    logo: "◆",
    color: "#ef4444",
    stockCode: "7211",
    overview:
      "PHEVを柱にASEAN市場で展開する。アウトランダーPHEVが主力。フィリピンで過去最高販売を記録するなどASEAN好調だが、タイ・インドネシアでは中国メーカーの台頭に苦戦。ルノー・日産・三菱アライアンスに所属。",
    financials: {
      revenue: "2兆7,882億円",
      revenueYoy: "横ばい",
      operatingProfit: "1,388億円",
      opMargin: "5.0%",
      globalSales: "84万2,000台",
      salesYoy: "+3.3%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "PHEV（プラグインハイブリッド）を主軸に据える。アウトランダーPHEVが北米でも好調。フルBEVへの移行は慎重姿勢。",
      keyModels: ["アウトランダーPHEV", "エクリプスクロスPHEV"],
      target: "PHEV中心の電動化戦略",
    },
    strengths: [
      "PHEV技術での先行（アウトランダーPHEV）",
      "ASEAN市場での存在感（フィリピン過去最高）",
      "アライアンスによるコスト分散",
    ],
    challenges: [
      "タイ・インドネシアで中国勢に苦戦",
      "2025年度上期の営業利益が-81%に急落",
      "小規模ゆえの開発リソースの制約",
    ],
    latestNews: [
      { date: "2025-03", headline: "アウトランダーPHEV が北米で過去最高の月間販売" },
      { date: "2025-04", headline: "フィリピンで過去最高の販売実績" },
    ],
  },
  {
    slug: "daihatsu",
    name: "ダイハツ工業",
    nameEn: "Daihatsu Motor",
    logo: "D",
    color: "#10b981",
    overview:
      "トヨタ完全子会社の軽自動車メーカー。2023年に約170件の認証不正が発覚し全車種が出荷停止となる危機を経験。2025年10月に軽自動車販売首位に復帰。コンパクトカー事業はトヨタ主導に移管され、経営体制を再構築中。",
    financials: {
      revenue: "1兆2,720億円",
      revenueYoy: "+8.0%",
      operatingProfit: "250億円",
      opMargin: "2.0%",
      globalSales: "約43万台（国内）",
      salesYoy: "-2.0%",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "認証不正からの回復が最優先。2026年に軽自動車向けストロングハイブリッドで燃費30km/L（WLTC）を目標。フルBEVは未定。",
      keyModels: ["ストロングHV搭載軽（2026年目標）"],
      target: "まず信頼回復、HV技術で燃費30km/L",
    },
    strengths: [
      "軽自動車市場での圧倒的シェア",
      "トヨタグループの経営基盤",
      "2025年10月に軽販売首位に復帰",
    ],
    challenges: [
      "認証不正による信頼失墜（特別損失1,110億円）",
      "32年ぶりの最終赤字（40億円）",
      "コンパクトカー事業のトヨタ移管",
    ],
    latestNews: [
      { date: "2025-10", headline: "軽自動車販売で首位に復帰" },
      { date: "2025-06", headline: "32年ぶりの最終赤字を計上" },
    ],
  },
  {
    slug: "isuzu",
    name: "いすゞ自動車",
    nameEn: "Isuzu Motors",
    logo: "I",
    color: "#6366f1",
    stockCode: "7202",
    overview:
      "商用車（トラック・バス）を主力とするグローバルメーカー。小型〜大型の商用車で世界的な存在感を持ち、タイ・ASEAN・アフリカなど新興国市場に強い。産業用エンジン事業も堅調。",
    financials: {
      revenue: "3兆2,356億円",
      revenueYoy: "--",
      operatingProfit: "2,295億円",
      opMargin: "7.1%",
      globalSales: "--",
      salesYoy: "--",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "商用車のクリーンエネルギー化を推進。BEVトラック・FCVトラックの開発を進めるが、乗用車EVとは異なるタイムラインで段階的に移行。",
      keyModels: ["BEVトラック（開発中）", "FCVトラック（開発中）"],
      target: "商用車の段階的電動化",
    },
    strengths: [
      "商用車でのグローバルプレゼンス",
      "新興国市場（ASEAN・アフリカ）に強固な基盤",
      "産業用エンジン事業の安定収益",
    ],
    challenges: [
      "タイ市場の低迷",
      "米国関税の影響",
      "商用車のクリーンエネルギー転換コスト",
    ],
    latestNews: [
      { date: "2025-05", headline: "2026年3月期の営業利益見通しを2,100億円に下方修正" },
    ],
  },
  {
    slug: "hino",
    name: "日野自動車",
    nameEn: "Hino Motors",
    logo: "日",
    color: "#78716c",
    stockCode: "7205",
    overview:
      "トヨタ子会社の大型商用車メーカー。2022年に排出ガス不正が発覚し経営危機に。2025年1月に米国当局と和解。三菱ふそうとの統合により、2026年4月に持株会社「ARCHION」を設立予定。トヨタとダイムラートラックが各25%出資。",
    financials: {
      revenue: "1兆6,972億円",
      revenueYoy: "+11.9%",
      operatingProfit: "575億円",
      opMargin: "3.4%",
      globalSales: "--",
      salesYoy: "--",
      fiscalYear: "2025年3月期",
    },
    evStrategy: {
      summary:
        "三菱ふそうとの統合（ARCHION）を通じて、商用車の電動化を共同で推進。ダイムラートラックの技術基盤を活用。",
      keyModels: ["ARCHION共同開発モデル（2026年〜）"],
      target: "ARCHION設立（2026年4月）による電動化加速",
    },
    strengths: [
      "トヨタグループの経営基盤",
      "三菱ふそう統合で規模拡大（ARCHION）",
      "ダイムラートラックの技術アクセス",
    ],
    challenges: [
      "排出ガス不正による信頼失墜",
      "米国和解に伴う巨額特別損失（最終赤字2,650億円）",
      "統合プロセスの複雑さ",
    ],
    latestNews: [
      { date: "2025-01", headline: "米国当局と排出ガス不正で和解" },
      { date: "2025-06", headline: "ARCHION設立に関する最終契約を締結" },
      { date: "2026-04", headline: "ARCHION が2026年4月1日に正式発足予定" },
    ],
  },
];

export const industryStats = {
  domesticSales2025: "456万5,777台",
  domesticSalesYoy: "+3.3%",
  hvShare: "54.8%",
  hvNote: "国内新車販売に占めるHV比率（2024年）",
  gdpShare: "2.9%",
  gdpNote: "日本GDPに占める自動車製造業の割合",
  rdSpending: "3兆9,760億円",
  rdNote: "日本自動車メーカーの合計R&D投資（2026年度）",
};
