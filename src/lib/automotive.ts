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
      "世界販売台数6年連続首位を堅持する日本最大の自動車メーカー。2025年暦年でトヨタ・レクサス合計1,050万台（過去最高）を販売。HEV・PHEV・BEV・FCEV・水素エンジンの「全方位戦略」を掲げ、全固体電池は2027-2028年の実用化に向けパイロットライン稼働中。米国関税対策として米国製タンドラ・ハイランダー・カムリを日本に逆輸出する異例の施策を開始。",
    financials: {
      revenue: "50兆円（見通し）",
      revenueYoy: "+4.1%",
      operatingProfit: "3兆8,000億円（見通し）",
      opMargin: "7.6%",
      globalSales: "975万台（見通し）",
      salesYoy: "+4.1%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "全方位戦略を維持しつつ、次世代BEVプラットフォームを2026年投入。全固体電池は2027-2028年に初搭載EV、2030年に量産化を目指す。航続距離1,000km超・充電10分以内が目標。パイロットラインでの生産技術確立が進行中。",
      keyModels: ["bZ4X", "次世代BEV（2026年）", "全固体電池EV（2027-28年）"],
      target: "2030年にBEV350万台（うち170万台は次世代）",
    },
    strengths: [
      "世界販売台数6年連続首位（2025年暦年1,050万台・過去最高）",
      "HEVで圧倒的シェア（国内乗用車の約61%がHV）",
      "全固体電池の開発リード（パイロットライン稼働中）",
      "豊富なキャッシュフローと投資余力",
    ],
    challenges: [
      "BEVラインナップで中国・欧州勢に後れ",
      "米国関税の影響（年間1,200億円の負担）",
      "ソフトウェア開発（SDV）の遅れ",
      "国内販売が前年比2.7%減の137万台に低迷",
    ],
    latestNews: [
      { date: "2025-09", headline: "Woven City が正式オープン、約300名が入居開始" },
      { date: "2025-10", headline: "住友金属鉱山と全固体電池の正極材で提携" },
      { date: "2026-02", headline: "FY2026通期見通しを上方修正（営業利益3.8兆円）" },
      { date: "2026-03", headline: "米国製タンドラ・ハイランダーの日本逆輸出を開始" },
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
      "四輪・二輪・パワープロダクツの3事業を展開。2025年2月に日産との経営統合交渉が決裂し戦略的提携に転換したが、米国での共同開発は引き続き模索中。Honda 0 Seriesの北米投入を撤回し、0 α SUVをインド・日本から展開する方針に転換。全固体電池のパイロットラインは2025年1月に稼働開始。",
    financials: {
      revenue: "21兆1,000億円（見通し）",
      revenueYoy: "-2.7%",
      operatingProfit: "5,500億円（見通し）",
      opMargin: "2.6%",
      globalSales: "約380万台（見通し）",
      salesYoy: "-7.3%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "Honda 0 Seriesの米国生産を撤回。0 α SUVをインド生産でインド・日本から展開し、低コスト化を図る。独自ASIMO OSとSDV基盤で差別化を目指すが、EV戦略は大幅な軌道修正を余儀なくされた。全固体電池パイロットラインは2025年1月に稼働開始。",
      keyModels: ["Honda 0 α SUV（インド・日本向け）", "Prologue（米国・値下げ中）"],
      target: "2040年にEV・FCV販売比率100%（中期目標は大幅修正中）",
    },
    strengths: [
      "二輪車で世界首位",
      "収益源の多角化（四輪・二輪・パワープロダクツ）",
      "独自SDVプラットフォーム（ASIMO OS）",
      "全固体電池パイロットライン稼働開始",
    ],
    challenges: [
      "中国市場の低迷とアジアでの競争力低下",
      "EV戦略の大幅軌道修正（北米0 Series撤回）",
      "米国関税の影響（推定3,100億円）",
      "国内販売が前年比12.0%減の33万3,137台に急落",
    ],
    latestNews: [
      { date: "2025-02", headline: "日産との経営統合交渉が決裂、戦略的提携に転換" },
      { date: "2026-02", headline: "9カ月間で純利益42%減、関税とEV投資が重荷" },
      { date: "2026-03", headline: "Honda 0 Series・Acura RSXの米国生産を撤回" },
      { date: "2026-04", headline: "Prologue EVを全グレード$7,500値下げ" },
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
      "「Re:Nissan」再建計画のもと大規模リストラを断行中。7工場閉鎖・2万人削減を進め、コスト削減は当初目標2,500億円を前倒しで達成見込み。Honda との統合交渉は決裂したが、米国での共同開発は引き続き模索。新型Leafを2026年1月に投入。米国製ムラーノの日本逆輸出も計画。時価総額は約1.6兆円まで縮小。",
    financials: {
      revenue: "11兆5,000億円（見通し）",
      revenueYoy: "-8.7%",
      operatingProfit: "-600億円（見通し）",
      opMargin: "赤字",
      globalSales: "320万台（見通し）",
      salesYoy: "-4.4%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "新型Leafを2026年1月に国内投入。Ariyaも継続展開。ただし構造改革が最優先で、EV拡大投資は抑制。全固体電池は2028年度の実用化を目指し横浜工場で開発加速。FY2026は6,300億円の最終赤字を見込む。",
      keyModels: ["新型Leaf（2026年〜）", "Ariya"],
      target: "経営再建を最優先、EV拡大は段階的",
    },
    strengths: [
      "EV先駆者としてのブランド（新型Leaf投入）",
      "e-POWER技術（シリーズハイブリッド）",
      "コスト削減が計画を前倒しで進捗（1,600億円達成）",
    ],
    challenges: [
      "FY2026に6,300億円の最終赤字見込み",
      "7工場閉鎖・2万人削減のリストラ中",
      "国内販売が前年比19.0%減の22万7,277台に急落",
      "米国関税の影響（2,750億円）",
    ],
    latestNews: [
      { date: "2025-11", headline: "追浜工場（旗艦工場）の閉鎖を決定" },
      { date: "2026-01", headline: "新型Leafを国内発売" },
      { date: "2026-02", headline: "FY2026通期で6,300億円の最終赤字見通しを発表" },
      { date: "2026-03", headline: "米国製ムラーノの日本逆輸出を計画" },
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
      "インド市場で圧倒的シェアを持つ軽自動車・小型車の巨人。マルチ・スズキはインド国内累計販売3,000万台を突破し、Q3売上高は前年比29%増と絶好調。初の量産BEV「e VITARA」を欧州（2025年9月）・日本（2026年1月）で投入。インドの好調を受けFY2026通期見通しを上方修正。",
    financials: {
      revenue: "6兆2,000億円（見通し）",
      revenueYoy: "+7.6%",
      operatingProfit: "5,700億円（見通し）",
      opMargin: "9.2%",
      globalSales: "約340万台（見通し）",
      salesYoy: "+4.9%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "初の量産BEV「e VITARA」を欧州（2025年9月）、日本（2026年1月）で投入。トヨタとの提携で開発。49kWh（FWD）と61kWh（FWD/AWD）の2仕様。インドでのEV投入も視野に。",
      keyModels: ["e VITARA（2025-26年）"],
      target: "EV市場への本格参入（後発組）",
    },
    strengths: [
      "インド市場で圧倒的シェア（マルチ・スズキQ3売上高+29%）",
      "軽自動車・二輪車の強固な事業基盤",
      "低コスト製造のノウハウ",
      "FY2026通期見通しを上方修正",
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
      { date: "2026-02", headline: "インド好調でFY2026通期見通しを上方修正" },
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
      "「走る歓び」を掲げるプレミアム志向の中堅メーカー。主力の新型CX-5は2025年12月に生産開始し、FY2026 Q4から欧州・北米で展開開始。ロータリーEVは2年で生産終了。FY2026は関税影響と新型CX-5投入遅延で9カ月間で最終赤字に転落。来期のCX-5フル寄与に回復を賭ける。",
    financials: {
      revenue: "4兆8,200億円（見通し）",
      revenueYoy: "-4.0%",
      operatingProfit: "500億円（見通し）",
      opMargin: "1.0%",
      globalSales: "117万2,000台（見通し）",
      salesYoy: "-10.1%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "EZ-6（EV）を中国投入済、Mazda6e（EV）を欧州投入予定。2027年にレンジエクステンダー搭載電動SUVを計画。新型CX-5はICE/HEVが主力だが、電動化への布石も。",
      keyModels: ["EZ-6", "Mazda6e", "電動SUV（2027年）", "新型CX-5"],
      target: "段階的なEV移行（規模の制約あり）",
    },
    strengths: [
      "プレミアムブランドポジショニング",
      "新型CX-5の投入（世界販売の25%を占める主力車種）",
      "独自のエンジニアリング文化",
    ],
    challenges: [
      "FY2026の営業利益が500億円に急落（前年比-73%）",
      "9カ月間で最終赤字に転落",
      "米国関税の影響",
      "小規模ゆえのEV開発投資の限界",
    ],
    latestNews: [
      { date: "2025-12", headline: "新型CX-5の生産を開始、Q4から欧州・北米投入" },
      { date: "2025-12", headline: "EZ-6 を中国市場に投入" },
      { date: "2026-02", headline: "9カ月間で最終赤字、通期営業利益500億円の見通し維持" },
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
      "AWD（四輪駆動）技術を核に北米市場で独自のポジションを確立。米国が最大市場で9カ月間で47.9万台を販売。関税の影響が深刻で、Q3は364億円の営業赤字に転落。フォレスターのインディアナ工場生産移管やフォレスターHV投入など関税対策を急ぐ。",
    financials: {
      revenue: "4兆8,000億円（見通し）",
      revenueYoy: "+2.4%",
      operatingProfit: "1,300億円（見通し）",
      opMargin: "2.7%",
      globalSales: "92万台（見通し）",
      salesYoy: "--",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "ソルテラ（トヨタbZ4Xの兄弟車）が唯一のBEV。追加EVモデルの開発を急ぐが、関税対策と収益確保が最優先。フォレスターHVをインディアナ工場で生産開始。",
      keyModels: ["ソルテラ", "フォレスターHV（米国生産）"],
      target: "EVラインナップ拡充が急務",
    },
    strengths: [
      "北米市場での強固なブランド忠誠度",
      "AWD技術による差別化",
      "Crosstrek/Forester/Outbackの安定需要",
      "インディアナ工場での生産柔軟性",
    ],
    challenges: [
      "米国関税の影響が深刻（年間2,290億円の負担見通し）",
      "Q3で364億円の営業赤字に転落",
      "EVラインナップがソルテラのみ",
      "米国市場への過度な依存",
    ],
    latestNews: [
      { date: "2025-12", headline: "2025年米国販売64.4万台（-3.6%）" },
      { date: "2026-02", headline: "Q3営業赤字364億円、関税影響210億円" },
      { date: "2026-02", headline: "FY2026通期営業利益見通しを1,300億円に下方修正" },
      { date: "2026-03", headline: "フォレスターHVのインディアナ工場生産を開始" },
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
      "PHEVを柱にASEAN市場で展開する。アウトランダーPHEVが主力。9カ月間で営業利益が前年比69.8%減の316億円に急落。中国メーカーとの価格競争が激化するなか、新型車投入で底打ちの兆し。S&Pが格付け見通しをネガティブに変更。",
    financials: {
      revenue: "2兆9,000億円（見通し）",
      revenueYoy: "+4.0%",
      operatingProfit: "316億円（9カ月実績）",
      opMargin: "1.6%",
      globalSales: "約78万台（見通し）",
      salesYoy: "-6.0%",
      fiscalYear: "2026年3月期（見通し）",
    },
    evStrategy: {
      summary:
        "PHEV（プラグインハイブリッド）を主軸に据える。アウトランダーPHEVが主力。フルBEVへの移行は慎重姿勢。中国メーカーとの競争激化のなか、PHEVの差別化を図る。",
      keyModels: ["アウトランダーPHEV", "エクリプスクロスPHEV"],
      target: "PHEV中心の電動化戦略",
    },
    strengths: [
      "PHEV技術での先行（アウトランダーPHEV）",
      "ASEAN市場での存在感",
      "アライアンスによるコスト分散",
      "新型車投入による底打ちの兆し",
    ],
    challenges: [
      "9カ月間の営業利益が前年比-69.8%",
      "中国メーカーとの価格競争が激化",
      "S&Pが格付け見通しをネガティブに変更",
      "小規模ゆえの開発リソースの制約",
    ],
    latestNews: [
      { date: "2025-04", headline: "フィリピンで過去最高の販売実績" },
      { date: "2026-02", headline: "Q3累計で営業利益69.8%減の316億円" },
      { date: "2026-03", headline: "S&Pが格付け見通しをネガティブに変更" },
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
    stockCode: "543A（ARCHION）",
    overview:
      "トヨタ子会社の大型商用車メーカー。2022年に排出ガス不正が発覚し2025年1月に米国当局と和解。三菱ふそうとの統合により、持株会社「ARCHION」が2026年4月1日に正式発足し東証プライム市場に上場（証券コード543A）。トヨタとダイムラートラックが各25%出資。Karl Deppen氏がCEOに就任。",
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
        "ARCHION発足により三菱ふそうと共同で商用車の電動化を推進。ダイムラートラックの技術基盤を活用し、BEVトラック・FCVトラックの開発を加速。",
      keyModels: ["ARCHION共同開発モデル（2026年〜）"],
      target: "ARCHION発足（2026年4月）による電動化加速",
    },
    strengths: [
      "ARCHION発足で三菱ふそうと統合、規模拡大",
      "トヨタ・ダイムラートラック両社の支援（各25%出資）",
      "ダイムラートラックの技術アクセス",
    ],
    challenges: [
      "排出ガス不正による信頼失墜（米国和解済み）",
      "統合後の組織・文化融合",
      "商用車のクリーンエネルギー転換コスト",
    ],
    latestNews: [
      { date: "2025-01", headline: "米国当局と排出ガス不正で和解" },
      { date: "2025-06", headline: "ARCHION設立に関する最終契約を締結" },
      { date: "2026-04", headline: "ARCHION が正式発足、東証プライム上場（543A）" },
    ],
  },
];

export const industryStats = {
  domesticSales2025: "453万台",
  domesticSalesYoy: "-0.9%",
  hvShare: "約61%",
  hvNote: "国内乗用車販売に占めるHV比率（2025年）",
  gdpShare: "2.9%",
  gdpNote: "日本GDPに占める自動車製造業の割合",
  rdSpending: "3兆9,760億円",
  rdNote: "日本自動車メーカーの合計R&D投資（2026年度）",
};
