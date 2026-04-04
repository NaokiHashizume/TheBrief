import type { Category, IndustrySubcategory } from "./articles";

export interface StoryEpisode {
  id: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
  content?: string;
}

export interface Story {
  slug: string;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  industrySubcategory?: IndustrySubcategory;
  industryLabel?: string;
  status: "ongoing" | "concluded";
  lastUpdated: string;
  episodes: StoryEpisode[];
}

export const sampleStories: Story[] = [
  {
    slug: "boj-normalization",
    title: "日銀の金融政策正常化",
    description:
      "異次元緩和からの出口戦略。YCC修正、マイナス金利解除、そして段階的利上げへ。日本の金融政策の大転換を追う。",
    category: "economy",
    categoryLabel: "Economy",
    status: "ongoing",
    lastUpdated: "2026-04-04",
    episodes: [
      {
        id: "boj-1",
        title: "YCC修正の決断 — 長期金利の上限を事実上撤廃",
        summary:
          "日銀は10年間続けたイールドカーブ・コントロールの運用を柔軟化。長期金利の上限を事実上撤廃し、市場に大きな衝撃を与えた。",
        date: "2023-07-28",
        author: "Editorial",
        readTime: "6 min",
      },
      {
        id: "boj-2",
        title: "マイナス金利解除 — 17年ぶりの利上げ",
        summary:
          "日銀はマイナス金利政策を解除し、短期政策金利を0〜0.1%に引き上げ。2007年以来17年ぶりの利上げとなり、異次元緩和の時代に終止符を打った。",
        date: "2024-03-19",
        author: "Editorial",
        readTime: "7 min",
      },
      {
        id: "boj-3",
        title: "追加利上げ0.25%へ — 正常化の加速",
        summary:
          "日銀は政策金利を0.25%に引き上げ。植田総裁は「経済・物価見通しが実現すれば、引き続き利上げしていく」と発言し、さらなる正常化への道筋を示した。",
        date: "2024-07-31",
        author: "Editorial",
        readTime: "5 min",
      },
      {
        id: "boj-4",
        title: "0.5%到達 — 新たなロードマップ公表",
        summary:
          "日銀は政策金利を0.5%に引き上げるとともに、今後の正常化に向けたロードマップを公表。市場は次の利上げ時期に注目している。",
        date: "2026-04-04",
        author: "Editorial",
        readTime: "5 min",
      },
    ],
  },
  {
    slug: "semiconductor-war",
    title: "半導体戦争と日本の立ち位置",
    description:
      "米中対立を背景にしたグローバル半導体サプライチェーンの再編。日本は製造装置・素材の強みを活かし、再び半導体大国への道を歩み始めた。",
    category: "industry",
    categoryLabel: "Industry",
    industrySubcategory: "semiconductors",
    industryLabel: "Semiconductors",
    status: "ongoing",
    lastUpdated: "2026-04-02",
    episodes: [
      {
        id: "semi-1",
        title: "米国、対中半導体輸出規制を大幅強化",
        summary:
          "バイデン政権は先端半導体および製造装置の対中輸出規制を発表。日本・オランダにも同調を要請し、地政学的な半導体戦争が本格化した。",
        date: "2022-10-07",
        author: "Industry Desk",
        readTime: "6 min",
      },
      {
        id: "semi-2",
        title: "TSMC熊本工場が正式決定 — 日本の半導体復活の狼煙",
        summary:
          "台湾TSMCが熊本県に先端半導体工場の建設を正式発表。日本政府は最大4,760億円の補助金を拠出し、国内半導体製造基盤の再構築に動き出した。",
        date: "2023-02-24",
        author: "Industry Desk",
        readTime: "7 min",
      },
      {
        id: "semi-3",
        title: "ラピダス、2nm半導体の試作に成功",
        summary:
          "日本の次世代半導体企業ラピダスが2nmプロセスの試作に成功。IBMとの技術提携を活かし、2027年の量産開始に向けて開発が加速している。",
        date: "2025-06-15",
        author: "Industry Desk",
        readTime: "5 min",
      },
      {
        id: "semi-4",
        title: "サプライチェーン再編が加速、日本企業の役割拡大",
        summary:
          "地政学的リスクを背景に、グローバルな半導体供給網の再構築が進む中、日本企業が製造装置・素材分野で存在感を強めている。",
        date: "2026-04-02",
        author: "Industry Desk",
        readTime: "7 min",
      },
    ],
  },
  {
    slug: "autonomous-driving-japan",
    title: "自動運転、日本の挑戦",
    description:
      "レベル4自動運転の実用化に向けた法整備、技術開発、そして社会実装。日本のモビリティ革命を追う。",
    category: "industry",
    categoryLabel: "Industry",
    industrySubcategory: "automotive",
    industryLabel: "Automotive / Mobility",
    status: "ongoing",
    lastUpdated: "2026-03-31",
    episodes: [
      {
        id: "auto-1",
        title: "改正道路交通法施行 — レベル4が法的に可能に",
        summary:
          "改正道路交通法が施行され、特定条件下での完全自動運転（レベル4）が日本国内で法的に認められた。",
        date: "2023-04-01",
        author: "Industry Desk",
        readTime: "4 min",
      },
      {
        id: "auto-2",
        title: "地方自治体での自動運転バス実証が拡大",
        summary:
          "過疎地域の交通課題解決を目指し、全国20以上の自治体で自動運転バスの実証実験が開始された。",
        date: "2024-09-12",
        author: "Industry Desk",
        readTime: "5 min",
      },
      {
        id: "auto-3",
        title: "都内で初の商用自動運転タクシーが開始",
        summary:
          "東京都心の限定エリアで自動運転タクシーの商用運行がスタート。交通革命の新たな一歩として国内外から注目を集めている。",
        date: "2026-03-31",
        author: "Industry Desk",
        readTime: "5 min",
      },
    ],
  },
];
