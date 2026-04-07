export type UniversityCategory = {
  id: string;
  label: string;
  color: string;
  desc: string;
  lead: string;
  subs: {
    name: string;
    items: string[];
    href?: string;
  }[];
};

export const universityCategories: UniversityCategory[] = [
  {
    id: "formal",
    label: "形式科学",
    color: "#6366f1",
    desc: "論理・記号・構造を扱う",
    lead: "抽象的なルールや構造を扱い、他分野の基盤言語にもなる領域です。数式、論理、計算、システム設計の考え方がここに集まります。",
    subs: [
      { name: "数学", items: ["代数学", "解析学", "幾何学", "位相幾何学", "数論", "確率論", "離散数学"], href: "/university/formal/math" },
      { name: "統計学", items: ["記述統計", "確率分布", "推測統計", "回帰分析", "ベイズ統計"], href: "/university/formal/statistics" },
      { name: "論理学", items: ["形式論理学", "数理論理学", "哲学的論理学", "計算論理学"], href: "/university/formal/logic" },
      { name: "計算機科学", items: ["アルゴリズム理論", "計算理論", "情報理論", "暗号理論", "形式言語理論"], href: "/university/formal/computer-science" },
      { name: "システム科学", items: ["制御理論", "サイバネティクス", "システム工学", "オペレーションズ・リサーチ"], href: "/university/formal/systems-science" },
    ],
  },
  {
    id: "natural",
    label: "自然科学",
    color: "#10b981",
    desc: "自然界の法則を解明する",
    lead: "物質、生命、地球、宇宙を対象に、再現可能な法則やメカニズムを明らかにする学問群です。観測と実験が中心になります。",
    subs: [
      { name: "物理学", items: ["古典力学", "量子力学", "熱力学", "電磁気学", "相対性理論", "素粒子物理学", "物性物理学", "宇宙物理学", "光学", "流体力学"], href: "/university/natural/physics" },
      { name: "化学", items: ["有機化学", "無機化学", "物理化学", "分析化学", "生化学", "高分子化学", "電気化学", "環境化学"], href: "/university/natural/chemistry" },
      { name: "生物学", items: ["分子生物学", "細胞生物学", "遺伝学", "生態学", "進化生物学", "微生物学", "動物学", "植物学", "神経科学", "免疫学", "発生生物学"], href: "/university/natural/biology" },
      { name: "地球科学", items: ["地質学", "気象学", "海洋学", "古生物学", "地球物理学", "火山学", "地震学", "鉱物学"], href: "/university/natural/earth-science" },
      { name: "天文学", items: ["恒星天文学", "銀河天文学", "宇宙論", "惑星科学", "電波天文学"], href: "/university/natural/astronomy" },
    ],
  },
  {
    id: "humanities",
    label: "人文科学",
    color: "#f59e0b",
    desc: "人間の精神・文化・歴史を探究する",
    lead: "人間が何を考え、どう表現し、どのような歴史や文化を築いてきたかを読み解く学問です。解釈、批評、文脈理解が中心になります。",
    subs: [
      { name: "哲学", items: ["形而上学", "認識論", "倫理学", "美学", "科学哲学", "言語哲学", "心の哲学", "政治哲学", "宗教哲学", "現象学", "実存主義"], href: "/university/humanities/philosophy" },
      { name: "歴史学", items: ["古代史", "中世史", "近現代史", "社会史", "経済史", "文化史", "思想史", "科学史", "考古学", "史学史"], href: "/university/humanities/history" },
      { name: "文学", items: ["日本文学", "英文学", "比較文学", "文芸批評", "詩学", "修辞学", "児童文学"], href: "/university/humanities/literature" },
      { name: "言語学", items: ["音声学", "音韻論", "形態論", "統語論", "意味論", "語用論", "社会言語学", "歴史言語学", "応用言語学", "認知言語学"], href: "/university/humanities/linguistics" },
      { name: "芸術学", items: ["美術史", "音楽学", "演劇学", "映画学", "デザイン論", "写真論"], href: "/university/humanities/arts" },
      { name: "宗教学", items: ["比較宗教学", "神学", "仏教学", "聖書学", "宗教社会学"], href: "/university/humanities/religious-studies" },
    ],
  },
  {
    id: "social",
    label: "社会科学",
    color: "#ef4444",
    desc: "人間社会の仕組みを分析する",
    lead: "制度、市場、政治、教育、心理、地域など、人間社会を構成する仕組みを分析する領域です。政策や実務との接続も強い分野です。",
    subs: [
      { name: "経済学", items: ["ミクロ経済学", "マクロ経済学", "計量経済学", "行動経済学", "開発経済学", "労働経済学", "国際経済学", "金融経済学", "公共経済学", "環境経済学"], href: "/university/social/economics" },
      { name: "経営学", items: ["経営戦略", "組織論", "マーケティング", "ファイナンス", "人的資源管理", "経営情報学", "イノベーション論"], href: "/university/social/business" },
      { name: "会計学", items: ["複式簿記", "財務会計", "原価計算", "管理会計", "IFRS", "サステナビリティ会計"], href: "/university/social/accounting" },
      { name: "法学", items: ["憲法", "民法", "刑法", "商法", "行政法", "国際法", "法哲学", "知的財産法", "労働法", "環境法"], href: "/university/social/law" },
      { name: "政治学", items: ["政治理論", "比較政治学", "行政学", "公共政策", "政治経済学", "選挙研究", "安全保障論"], href: "/university/social/political-science" },
      { name: "国際関係論", items: ["リアリズム", "リベラリズム", "コンストラクティビズム", "国際政治経済", "グローバルガバナンス", "経済安全保障"], href: "/university/social/international-relations" },
      { name: "社会学", items: ["社会理論", "家族社会学", "都市社会学", "犯罪社会学", "医療社会学", "教育社会学", "メディア社会学", "ジェンダー論", "社会階層論"], href: "/university/social/sociology" },
      { name: "心理学", items: ["認知心理学", "発達心理学", "社会心理学", "臨床心理学", "神経心理学", "産業・組織心理学", "教育心理学", "進化心理学", "知覚心理学"], href: "/university/social/psychology" },
      { name: "教育学", items: ["教育哲学", "教育史", "教育方法学", "カリキュラム論", "生涯教育", "特別支援教育", "比較教育学"], href: "/university/social/education" },
      { name: "人類学", items: ["文化人類学", "社会人類学", "自然人類学", "言語人類学", "医療人類学"], href: "/university/social/anthropology" },
      { name: "地理学", items: ["自然地理学", "人文地理学", "経済地理学", "都市地理学", "GIS学"], href: "/university/social/geography" },
    ],
  },
  {
    id: "applied",
    label: "応用科学・工学",
    color: "#3b82f6",
    desc: "科学知識を実社会に応用する",
    lead: "科学的知見を技術、医療、農業、看護などの形で社会実装する領域です。産業やインフラとの距離が近く、実践的な学問が並びます。",
    subs: [
      { name: "工学", items: ["機械工学", "電気工学", "電子工学", "通信工学", "土木工学", "建築学", "化学工学", "材料工学", "航空宇宙工学", "原子力工学", "ロボット工学"], href: "/university/applied/engineering" },
      { name: "情報工学", items: ["ソフトウェア工学", "データベース", "コンピュータネットワーク", "人工知能", "機械学習", "コンピュータビジョン", "自然言語処理", "ヒューマンコンピュータインタラクション"], href: "/university/applied/informatics" },
      { name: "医学", items: ["内科学", "外科学", "小児科学", "産婦人科学", "精神医学", "放射線医学", "救急医学", "病理学", "薬理学", "公衆衛生学", "疫学"], href: "/university/applied/medicine" },
      { name: "歯学", items: ["保存修復学", "口腔外科学", "矯正歯科学", "歯周病学"], href: "/university/applied/dentistry" },
      { name: "薬学", items: ["薬剤学", "薬物動態学", "臨床薬学", "天然物化学", "創薬科学"], href: "/university/applied/pharmacy" },
      { name: "農学", items: ["作物学", "園芸学", "畜産学", "林学", "水産学", "土壌学", "農業経済学", "食品科学"], href: "/university/applied/agriculture" },
      { name: "獣医学", items: ["獣医病理学", "獣医外科学", "獣医公衆衛生学"], href: "/university/applied/veterinary" },
      { name: "看護学", items: ["基礎看護学", "成人看護学", "老年看護学", "小児看護学", "地域看護学"], href: "/university/applied/nursing" },
    ],
  },
  {
    id: "interdisciplinary",
    label: "学際・新領域",
    color: "#8b5cf6",
    desc: "複数領域を横断する新しい学問",
    lead: "既存の分野の境界を横断し、社会課題や新技術に対応するために生まれた領域です。複数分野の言語を行き来するのが前提になります。",
    subs: [
      { name: "環境科学", items: ["環境工学", "生態経済学", "気候変動科学", "環境政策", "サステナビリティ学"], href: "/university/interdisciplinary/environmental-science" },
      { name: "認知科学", items: ["認知神経科学", "人工知能", "認知言語学", "認知心理学", "哲学（心の哲学）"], href: "/university/interdisciplinary/cognitive-science" },
      { name: "データサイエンス", items: ["統計モデリング", "ビッグデータ解析", "機械学習応用", "データ可視化", "計算社会科学"], href: "/university/interdisciplinary/data-science" },
      { name: "生命情報科学", items: ["バイオインフォマティクス", "ゲノム科学", "システム生物学", "合成生物学"], href: "/university/interdisciplinary/bioinformatics" },
      { name: "都市・地域研究", items: ["都市計画", "地域政策", "スマートシティ", "交通工学", "防災学"], href: "/university/interdisciplinary/urban-studies" },
      { name: "メディア・情報学", items: ["情報社会学", "デジタルヒューマニティーズ", "ジャーナリズム論", "コミュニケーション学"], href: "/university/interdisciplinary/media-studies" },
      { name: "ジェンダー・文化研究", items: ["ジェンダー学", "クィア・スタディーズ", "ポストコロニアル研究", "文化研究（カルスタ）"], href: "/university/interdisciplinary/gender-studies" },
    ],
  },
];

export function getUniversityCategory(id: string) {
  return universityCategories.find((category) => category.id === id);
}

export function getUniversityCounts(category: UniversityCategory) {
  return {
    subCount: category.subs.length,
    itemCount: category.subs.reduce((sum, sub) => sum + sub.items.length, 0),
  };
}
