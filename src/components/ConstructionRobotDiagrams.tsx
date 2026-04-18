"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Construction Robot × BIM 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
const INDIGO = "#4f46e5";

function Card({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Construction robot and BIM diagram"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${INDIGO}aa` }}
        >
          <T ja="図" en="FIGURE" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          {title}
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. 人手不足の実態 ── */
export function ConstructionLaborShortageRealityDiagram() {
  const issues = [
    { label: "人数の不足", pct: 27.4, color: AMBER },
    { label: "スキルと技術継承の断絶", pct: 41.3, color: RED },
    { label: "生産性の低さ", pct: 23.8, color: SLATE },
    { label: "その他", pct: 7.5, color: INDIGO },
  ];

  return (
    <Card
      title={<T ja="「人手不足」の正体——建設従事者調査（2026年版）" en="The Real Face of Labour Shortage: Construction Worker Survey 2026" />}
      subtitle={<T ja="野原グループ調査。最大の課題はスキル・技術継承の断絶" en="Nohara Group survey. Top concern: skills and knowledge transfer breakdown" />}
    >
      <div className="space-y-3">
        {issues.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] text-foreground/75 font-medium">{item.label}</span>
              <span className="text-[13px] font-bold tabular-nums" style={{ color: item.color }}>
                {item.pct}%
              </span>
            </div>
            <div className="h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.pct}%`, backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="人手不足実感67.3%。しかし「頭数」ではなく「スキル継承の断絶」が最大の課題"
          en="67.3% feel the labour shortage. But the biggest issue isn't headcount — it's the breakdown of skills transfer"
        />
      </div>
    </Card>
  );
}

/* ── 2. 建設RXコンソーシアム ── */
export function ConstructionRxConsortiumDiagram() {
  const robots = [
    { name: "マシンガイダンス掘削機", desc: "GPS・センサーで掘削深度・角度を自動制御", icon: "🚜" },
    { name: "内装ボード自動搬送", desc: "重量物を自動搬送し鳶職の身体負担を軽減", icon: "📦" },
    { name: "溶接ロボット", desc: "鉄骨溶接の精度向上と省人化を同時実現", icon: "🔧" },
    { name: "配筋検査AIシステム", desc: "カメラ画像で鉄筋配置を自動検査・記録生成", icon: "📷" },
  ];

  const nonMembers = ["大林組", "大成建設"];

  return (
    <Card
      title={<T ja="建設RXコンソーシアム——競合16社が協働するロボット標準化" en="Construction RX Consortium: 16 Rivals Collaborating on Robot Standards" />}
      subtitle={<T ja="虎ノ門の実証現場で4種類のロボットが協働稼働" en="Four robot types working in sync at the Toranomon demonstration site" />}
    >
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        {robots.map((r) => (
          <div
            key={r.name}
            className="p-3 rounded-xl border border-brief-border"
            style={{ borderLeftColor: INDIGO, borderLeftWidth: "3px" }}
          >
            <div className="text-xl mb-1">{r.icon}</div>
            <div className="text-[12px] font-bold text-foreground mb-0.5">{r.name}</div>
            <div className="text-[10px] text-foreground/60 leading-snug">{r.desc}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px]" style={{ backgroundColor: `${AMBER}10` }}>
        <span className="font-bold text-foreground/80">非参加（独自路線）：</span>
        <span className="text-foreground/65">{nonMembers.join("・")}——標準化vs.差別化という業界の戦略的分岐</span>
      </div>
    </Card>
  );
}

/* ── 3. BIM普及状況 ── */
export function ConstructionBimAdoptionDiagram() {
  const stats = [
    { label: "施工BIMで「現場が改善する」", before: 30, after: 60, color: GREEN },
    { label: "「技術継承に役立つ」", before: null, after: 69.3, color: INDIGO },
  ];

  const benefits = [
    { label: "施工手順の「見える化」", desc: "ベテランの暗黙知を若手でも実行可能なチェックリストに変換" },
    { label: "知識の永続化", desc: "担当者が変わっても過去のノウハウがモデルデータとして蓄積" },
    { label: "品質管理の標準化", desc: "経験2〜3年の技術者がベテランと同等水準を実現可能に" },
  ];

  return (
    <Card
      title={<T ja="BIMが「技術継承ツール」に——DX効果が6割に倍増" en="BIM as a Knowledge-Transfer Tool: DX Effectiveness Doubles to 60%" />}
      subtitle={<T ja="野原グループ2025年11月調査。2023年比で倍増" en="Nohara Group survey, Nov 2025. Doubled compared to 2023" />}
    >
      <div className="space-y-4 mb-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-[12px] text-foreground/70 mb-2">{s.label}</div>
            <div className="flex gap-3 items-center">
              {s.before && (
                <div className="flex-1">
                  <div className="text-[10px] text-foreground/40 mb-1">2023年</div>
                  <div className="h-6 bg-foreground/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full flex items-center px-2" style={{ width: `${s.before}%`, backgroundColor: SLATE }}>
                      <span className="text-[10px] font-bold text-white">{s.before}%</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex-1">
                {s.before && <div className="text-[10px] text-foreground/40 mb-1">2025年</div>}
                <div className="h-6 bg-foreground/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full flex items-center px-2" style={{ width: `${s.after}%`, backgroundColor: s.color }}>
                    <span className="text-[10px] font-bold text-white">{s.after}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {benefits.map((b) => (
          <div key={b.label} className="flex items-start gap-2 text-[11px]">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: INDIGO }} />
            <div>
              <span className="font-bold text-foreground/80">{b.label}：</span>
              <span className="text-foreground/60">{b.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. デジタル格差 ── */
export function ConstructionDigitalDivideDiagram() {
  const comparison = [
    {
      type: "大手ゼネコン（5社）",
      typeEn: "Major contractors",
      rdBudget: "100〜200億円/社",
      bim: "義務化対応済み",
      robot: "建設RX等で開発中",
      color: BLUE,
    },
    {
      type: "中堅・中小ゼネコン",
      typeEn: "Mid-size & small",
      rdBudget: "なし〜数千万円",
      bim: "導入コスト1,000〜3,000万円の壁",
      robot: "導入困難",
      color: RED,
    },
  ];

  return (
    <Card
      title={<T ja="デジタル化格差——大手と中小の二重構造が固定化" en="Digitalisation Gap: The Growing Divide Between Large and Small Firms" />}
      subtitle={<T ja="政府のBIM普及促進が「大手だけの恩恵」に終わるリスク" en="Risk that government BIM promotion benefits only the top firms" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {comparison.map((c) => (
          <div
            key={c.type}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: c.color, borderTopWidth: "3px" }}
          >
            <div className="text-[13px] font-bold mb-3" style={{ color: c.color }}>{c.type}</div>
            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-foreground/40">R&D投資：</span>
                <span className="text-foreground/80 font-medium">{c.rdBudget}</span>
              </div>
              <div>
                <span className="text-foreground/40">BIM：</span>
                <span className="text-foreground/80 font-medium">{c.bim}</span>
              </div>
              <div>
                <span className="text-foreground/40">ロボット：</span>
                <span className="text-foreground/80 font-medium">{c.robot}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="地方の小規模建設会社では「DXどころではない」という声が多い。都市部大手と地方中小の二重構造が固定化"
          en="Many small regional firms say 'DX is a luxury we can't afford.' The urban-large vs. rural-small digital divide is becoming entrenched"
        />
      </div>
    </Card>
  );
}

/* ── 5. 採用・処遇改善 ── */
export function ConstructionRecruitmentReformDiagram() {
  const reforms = [
    { title: "週休2日の確保", desc: "元請け「4週8休以上」義務化。下請けへの波及が課題", icon: "📅", color: GREEN },
    { title: "技能者給与の改善", desc: "建設技能者評価システムで経験・技能に見合った賃金体系", icon: "💰", color: BLUE },
    { title: "外国人材の活用", desc: "2024年「育成就労」制度移行。建設業が主要分野に", icon: "🌏", color: INDIGO },
  ];

  return (
    <Card
      title={<T ja="建設業の処遇改善——採用難に応じた構造改革" en="Construction Sector Reforms: Structural Changes to Address Recruitment Challenges" />}
      subtitle={<T ja="2024年4月の残業上限規制施行を機に処遇改善が加速" en="Overtime caps enforced from April 2024 accelerate compensation reform" />}
    >
      <div className="space-y-3 mb-4">
        {reforms.map((r) => (
          <div
            key={r.title}
            className="p-4 rounded-xl border border-brief-border flex items-start gap-3"
            style={{ borderLeftColor: r.color, borderLeftWidth: "3px" }}
          >
            <span className="text-xl shrink-0">{r.icon}</span>
            <div>
              <div className="text-[13px] font-bold text-foreground mb-1">{r.title}</div>
              <div className="text-[11px] text-foreground/65">{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="3K（きつい・汚い・危険）イメージの改善には10年単位の取り組みが必要。即効策は存在しない"
          en="Overcoming the '3-K' (tough, dirty, dangerous) image requires a decade-long effort. There is no quick fix"
        />
      </div>
    </Card>
  );
}

/* ── 6. 戦略視点 ── */
export function ConstructionStrategicViewDiagram() {
  return (
    <Card
      title={<T ja="「職人の知恵をデジタルで移植する」発想が建設を変える" en="'Digitally Transplanting Craftsmen's Wisdom' — The Idea Transforming Construction" />}
      subtitle={<T ja="代替ではなく増幅——DX×技術継承の本質" en="Amplification, not replacement — the true purpose of DX × skills transfer" />}
    >
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        <div className="p-4 rounded-xl border border-brief-border" style={{ borderTopColor: RED, borderTopWidth: "3px" }}>
          <div className="text-[11px] font-bold text-foreground/50 mb-2">従来発想</div>
          <div className="text-[13px] font-bold text-foreground">「ロボットが人間を代替する」</div>
          <div className="text-[11px] text-foreground/60 mt-1">技術＝人手不足の補完</div>
        </div>
        <div className="p-4 rounded-xl border border-brief-border" style={{ borderTopColor: GREEN, borderTopWidth: "3px" }}>
          <div className="text-[11px] font-bold text-foreground/50 mb-2">The Brief視点</div>
          <div className="text-[13px] font-bold text-foreground">「職人の知恵を永続化・民主化する」</div>
          <div className="text-[11px] text-foreground/60 mt-1">技術＝スキル継承の増幅装置</div>
        </div>
      </div>
      <div className="p-4 rounded-xl border border-brief-border" style={{ borderLeftColor: INDIGO, borderLeftWidth: "3px" }}>
        <div className="text-[12px] font-bold text-foreground mb-2">建設RXが示す「競合が協力する」モデル</div>
        <div className="text-[11px] text-foreground/65 leading-relaxed">
          個別企業の技術開発限界を超えるには業界横断の仕組みが不可欠。
          建設RXコンソーシアムは「競争する部分」と「協力する部分」の峻別を実践している。
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${INDIGO}10` }}>
        <T
          ja="経験2〜3年の技術者がBIM×AIで熟練施工管理者と同等の品質管理を実現——これが技術継承×DXの本質的価値"
          en="A 2–3-year engineer matching a veteran's quality control via BIM + AI: that is the essential value of skills transfer × DX"
        />
      </div>
    </Card>
  );
}
