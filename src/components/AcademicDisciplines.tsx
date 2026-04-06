"use client";

import { useState } from "react";

type DisciplineCategory = {
  id: string;
  label: string;
  color: string;
  desc: string;
  subs: {
    name: string;
    items: string[];
  }[];
};

const data: DisciplineCategory[] = [
  {
    id: "formal",
    label: "形式科学",
    color: "#6366f1",
    desc: "論理・記号・構造を扱う",
    subs: [
      { name: "数学", items: ["代数学", "解析学", "幾何学", "位相幾何学", "数論", "確率論", "統計学", "離散数学"] },
      { name: "論理学", items: ["形式論理学", "数理論理学", "哲学的論理学", "計算論理学"] },
      { name: "計算機科学", items: ["アルゴリズム理論", "計算理論", "情報理論", "暗号理論", "形式言語理論"] },
      { name: "システム科学", items: ["制御理論", "サイバネティクス", "システム工学", "オペレーションズ・リサーチ"] },
    ],
  },
  {
    id: "natural",
    label: "自然科学",
    color: "#10b981",
    desc: "自然界の法則を解明する",
    subs: [
      { name: "物理学", items: ["古典力学", "量子力学", "熱力学", "電磁気学", "相対性理論", "素粒子物理学", "物性物理学", "宇宙物理学", "光学", "流体力学"] },
      { name: "化学", items: ["有機化学", "無機化学", "物理化学", "分析化学", "生化学", "高分子化学", "電気化学", "環境化学"] },
      { name: "生物学", items: ["分子生物学", "細胞生物学", "遺伝学", "生態学", "進化生物学", "微生物学", "動物学", "植物学", "神経科学", "免疫学", "発生生物学"] },
      { name: "地球科学", items: ["地質学", "気象学", "海洋学", "古生物学", "地球物理学", "火山学", "地震学", "鉱物学"] },
      { name: "天文学", items: ["恒星天文学", "銀河天文学", "宇宙論", "惑星科学", "電波天文学"] },
    ],
  },
  {
    id: "humanities",
    label: "人文科学",
    color: "#f59e0b",
    desc: "人間の精神・文化・歴史を探究する",
    subs: [
      { name: "哲学", items: ["形而上学", "認識論", "倫理学", "美学", "科学哲学", "言語哲学", "心の哲学", "政治哲学", "宗教哲学", "現象学", "実存主義"] },
      { name: "歴史学", items: ["古代史", "中世史", "近現代史", "社会史", "経済史", "文化史", "思想史", "科学史", "考古学", "史学史"] },
      { name: "文学", items: ["日本文学", "英文学", "比較文学", "文芸批評", "詩学", "修辞学", "児童文学"] },
      { name: "言語学", items: ["音声学", "音韻論", "形態論", "統語論", "意味論", "語用論", "社会言語学", "歴史言語学", "応用言語学", "認知言語学"] },
      { name: "芸術学", items: ["美術史", "音楽学", "演劇学", "映画学", "デザイン論", "写真論"] },
      { name: "宗教学", items: ["比較宗教学", "神学", "仏教学", "聖書学", "宗教社会学"] },
    ],
  },
  {
    id: "social",
    label: "社会科学",
    color: "#ef4444",
    desc: "人間社会の仕組みを分析する",
    subs: [
      { name: "経済学", items: ["ミクロ経済学", "マクロ経済学", "計量経済学", "行動経済学", "開発経済学", "労働経済学", "国際経済学", "金融経済学", "公共経済学", "環境経済学"] },
      { name: "経営学", items: ["経営戦略", "組織論", "マーケティング", "会計学", "ファイナンス", "人的資源管理", "経営情報学", "イノベーション論"] },
      { name: "法学", items: ["憲法", "民法", "刑法", "商法", "行政法", "国際法", "法哲学", "知的財産法", "労働法", "環境法"] },
      { name: "政治学", items: ["政治理論", "比較政治学", "国際関係論", "行政学", "公共政策", "政治経済学", "選挙研究", "安全保障論"] },
      { name: "社会学", items: ["社会理論", "家族社会学", "都市社会学", "犯罪社会学", "医療社会学", "教育社会学", "メディア社会学", "ジェンダー論", "社会階層論"] },
      { name: "心理学", items: ["認知心理学", "発達心理学", "社会心理学", "臨床心理学", "神経心理学", "産業・組織心理学", "教育心理学", "進化心理学", "知覚心理学"] },
      { name: "教育学", items: ["教育哲学", "教育史", "教育方法学", "カリキュラム論", "生涯教育", "特別支援教育", "比較教育学"] },
      { name: "人類学", items: ["文化人類学", "社会人類学", "自然人類学", "言語人類学", "医療人類学"] },
      { name: "地理学", items: ["自然地理学", "人文地理学", "経済地理学", "都市地理学", "GIS学"] },
    ],
  },
  {
    id: "applied",
    label: "応用科学・工学",
    color: "#3b82f6",
    desc: "科学知識を実社会に応用する",
    subs: [
      { name: "工学", items: ["機械工学", "電気工学", "電子工学", "通信工学", "土木工学", "建築学", "化学工学", "材料工学", "航空宇宙工学", "原子力工学", "ロボット工学"] },
      { name: "情報工学", items: ["ソフトウェア工学", "データベース", "コンピュータネットワーク", "人工知能", "機械学習", "コンピュータビジョン", "自然言語処理", "ヒューマンコンピュータインタラクション"] },
      { name: "医学", items: ["内科学", "外科学", "小児科学", "産婦人科学", "精神医学", "放射線医学", "救急医学", "病理学", "薬理学", "公衆衛生学", "疫学"] },
      { name: "歯学", items: ["保存修復学", "口腔外科学", "矯正歯科学", "歯周病学"] },
      { name: "薬学", items: ["薬剤学", "薬物動態学", "臨床薬学", "天然物化学", "創薬科学"] },
      { name: "農学", items: ["作物学", "園芸学", "畜産学", "林学", "水産学", "土壌学", "農業経済学", "食品科学"] },
      { name: "獣医学", items: ["獣医病理学", "獣医外科学", "獣医公衆衛生学"] },
      { name: "看護学", items: ["基礎看護学", "成人看護学", "老年看護学", "小児看護学", "地域看護学"] },
    ],
  },
  {
    id: "interdisciplinary",
    label: "学際・新領域",
    color: "#8b5cf6",
    desc: "複数領域を横断する新しい学問",
    subs: [
      { name: "環境科学", items: ["環境工学", "生態経済学", "気候変動科学", "環境政策", "サステナビリティ学"] },
      { name: "認知科学", items: ["認知神経科学", "人工知能", "認知言語学", "認知心理学", "哲学（心の哲学）"] },
      { name: "データサイエンス", items: ["統計モデリング", "ビッグデータ解析", "機械学習応用", "データ可視化", "計算社会科学"] },
      { name: "生命情報科学", items: ["バイオインフォマティクス", "ゲノム科学", "システム生物学", "合成生物学"] },
      { name: "都市・地域研究", items: ["都市計画", "地域政策", "スマートシティ", "交通工学", "防災学"] },
      { name: "メディア・情報学", items: ["情報社会学", "デジタルヒューマニティーズ", "ジャーナリズム論", "コミュニケーション学"] },
      { name: "ジェンダー・文化研究", items: ["ジェンダー学", "クィア・スタディーズ", "ポストコロニアル研究", "文化研究（カルスタ）"] },
    ],
  },
];

function totalItems(category: DisciplineCategory) {
  return category.subs.reduce((sum, sub) => sum + sub.items.length, 0);
}

export function AcademicDisciplines() {
  const [openCat, setOpenCat] = useState<string | null>("formal");
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    if (openCat === id) {
      setOpenCat(null);
      setOpenSub(null);
      return;
    }
    setOpenCat(id);
    setOpenSub(null);
  };

  const toggleSub = (key: string) => {
    setOpenSub((current) => (current === key ? null : key));
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#1e2b48] bg-[#07111f] text-slate-100 shadow-[0_32px_80px_rgba(2,6,23,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.65),rgba(7,17,31,0.98))]" />
      <div className="relative p-5 md:p-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2.6px] text-slate-300">
              Discipline Atlas
            </span>
            <h2 className="font-serif text-2xl font-bold md:text-4xl">学問の体系図</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/80 md:text-[15px]">
              大分類から中分類、小分類までをたどる、Universityセクションの土台になる俯瞰マップです。上段のボックスで領域を開き、さらに各分野を展開すると代表的な科目が見られます。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 self-start text-center text-[11px] text-slate-300/75">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div className="text-lg font-bold text-white">{data.length}</div>
              <div>大分類</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div className="text-lg font-bold text-white">{data.reduce((sum, cat) => sum + cat.subs.length, 0)}</div>
              <div>中分類</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div className="text-lg font-bold text-white">{data.reduce((sum, cat) => sum + totalItems(cat), 0)}</div>
              <div>小分類</div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {data.map((cat) => {
            const isOpen = openCat === cat.id;
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full rounded-[22px] border px-4 py-4 text-left transition-all duration-300 md:px-5"
                  style={{
                    borderColor: isOpen ? cat.color : `${cat.color}55`,
                    background: isOpen
                      ? `linear-gradient(135deg, ${cat.color}, rgba(15, 23, 42, 0.92))`
                      : `linear-gradient(135deg, ${cat.color}22, rgba(15, 23, 42, 0.9))`,
                    boxShadow: isOpen ? `0 18px 50px ${cat.color}22` : "none",
                  }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="font-serif text-2xl font-bold md:text-[30px]"
                        style={{ color: isOpen ? "#ffffff" : cat.color }}
                      >
                        {cat.label}
                      </span>
                      <span className="text-sm text-white/70">{cat.desc}</span>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-auto">
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: isOpen ? "rgba(255,255,255,0.16)" : `${cat.color}24`,
                          color: isOpen ? "#fff" : cat.color,
                        }}
                      >
                        {cat.subs.length}分野 · {totalItems(cat)}科目
                      </span>
                      <span
                        className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                        style={{ color: isOpen ? "#fff" : cat.color }}
                      >
                        ▶
                      </span>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 rounded-[24px] border border-white/10 bg-[#0b1628] p-3 md:p-4">
                    <div className="grid gap-2">
                      {cat.subs.map((sub) => {
                        const key = `${cat.id}:${sub.name}`;
                        const subOpen = openSub === key;
                        return (
                          <div key={sub.name} className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
                            <button
                              type="button"
                              onClick={() => toggleSub(key)}
                              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-white/[0.03]"
                              style={{ boxShadow: subOpen ? `inset 3px 0 0 ${cat.color}` : undefined }}
                            >
                              <div>
                                <div className="text-base font-semibold text-slate-100">{sub.name}</div>
                                <div className="mt-0.5 text-[11px] text-slate-400">{sub.items.length}科目を収録</div>
                              </div>
                              <span className="text-sm text-slate-400">{subOpen ? "▾" : "▸"}</span>
                            </button>

                            {subOpen && (
                              <div
                                className="flex flex-wrap gap-2 border-t border-white/8 px-4 py-4"
                                style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02), ${cat.color}08)` }}
                              >
                                {sub.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full border px-3 py-1.5 text-xs font-medium"
                                    style={{
                                      borderColor: `${cat.color}55`,
                                      backgroundColor: `${cat.color}18`,
                                      color: cat.color,
                                    }}
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-slate-300/80">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-white/55">構造の読み方</div>
          <p>
            形式科学が抽象的な記号体系の基盤をつくり、自然科学が自然界の法則を明らかにし、応用科学・工学がそれを社会実装へ変換します。社会科学と人文科学は人間と制度、文化を読み解き、学際領域がそれらを横断して新しい研究テーマを生み出します。
          </p>
        </div>
      </div>
    </section>
  );
}
