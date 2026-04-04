export type Category =
  | "politics"
  | "economy"
  | "industry"
  | "tech"
  | "lifestyle"
  | "opinion";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  categoryLabel: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl?: string;
  featured?: boolean;
}

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "日銀、金融政策の正常化に向けた新たなロードマップを公表",
    excerpt:
      "日本銀行は長期にわたる金融緩和からの段階的な出口戦略を示し、市場関係者の間で今後の利上げペースに注目が集まっている。",
    category: "economy",
    categoryLabel: "Economy",
    date: "2026-04-04",
    author: "Editorial",
    readTime: "5 min",
    featured: true,
  },
  {
    id: "2",
    title: "与党、次期総選挙に向けた経済対策パッケージを発表",
    excerpt:
      "政府は中間層向けの減税措置と子育て支援の拡充を柱とする包括的な経済対策を閣議決定した。",
    category: "politics",
    categoryLabel: "Politics",
    date: "2026-04-03",
    author: "Editorial",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "国産AIモデル、グローバルベンチマークで上位にランクイン",
    excerpt:
      "日本発の大規模言語モデルが国際的な性能評価で高い成績を記録。日本語処理能力だけでなく、多言語対応でも注目を集めている。",
    category: "tech",
    categoryLabel: "Tech & AI",
    date: "2026-04-03",
    author: "Tech Desk",
    readTime: "6 min",
    featured: true,
  },
  {
    id: "4",
    title: "半導体サプライチェーンの再編が加速、日本企業の役割拡大",
    excerpt:
      "地政学的リスクを背景に、グローバルな半導体供給網の再構築が進む中、日本企業が製造装置・素材分野で存在感を強めている。",
    category: "industry",
    categoryLabel: "Industry",
    date: "2026-04-02",
    author: "Industry Desk",
    readTime: "7 min",
  },
  {
    id: "5",
    title: "東京のウェルネスシーンに新潮流：サウナ×ワーケーション",
    excerpt:
      "都心部を中心にサウナ併設のコワーキングスペースが急増。働き方改革とウェルネス志向が融合した新しいライフスタイルが広がっている。",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "2026-04-02",
    author: "Lifestyle Desk",
    readTime: "4 min",
  },
  {
    id: "6",
    title: "デジタル円の導入は日本経済に何をもたらすか",
    excerpt:
      "中央銀行デジタル通貨（CBDC）の実証実験が最終段階に入る中、その経済的インパクトと課題を考察する。",
    category: "opinion",
    categoryLabel: "Opinion",
    date: "2026-04-01",
    author: "Guest Column",
    readTime: "8 min",
  },
  {
    id: "7",
    title: "円相場、対ドルで年初来高値を更新 — 輸出企業への影響は",
    excerpt:
      "日米金利差の縮小を背景に円高が進行。自動車・電機メーカーの業績見通しに修正の動きが広がっている。",
    category: "economy",
    categoryLabel: "Economy",
    date: "2026-04-01",
    author: "Markets Desk",
    readTime: "5 min",
  },
  {
    id: "8",
    title: "自動運転レベル4、都内で初の商用サービスが開始",
    excerpt:
      "東京都心の限定エリアで自動運転タクシーの商用運行がスタート。交通革命の新たな一歩として国内外から注目を集めている。",
    category: "tech",
    categoryLabel: "Tech & AI",
    date: "2026-03-31",
    author: "Tech Desk",
    readTime: "5 min",
  },
];
