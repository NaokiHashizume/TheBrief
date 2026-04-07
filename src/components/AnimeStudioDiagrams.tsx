"use client";

/* ────────────────────────────────────────────────────────────
   Anime Studio Economics — Diagrams
   ──────────────────────────────────────────────────────────── */

const ANIME = "#ec4899";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";
const PURPLE = "#8b5cf6";

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={title}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ANIME}cc` }}
        >
          図表
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

/* ── 1. Overview ── */
export function AnimeOverviewDiagram() {
  const segs = [
    { name: "海外売上", value: 17000, color: NAVY },
    { name: "商品化", value: 7000, color: GREEN },
    { name: "配信", value: 4000, color: PURPLE },
    { name: "パチンコ", value: 3000, color: ECON },
    { name: "ライブ・興行", value: 2000, color: ANIME },
  ];
  const max = 17000;
  return (
    <Card
      title="アニメ産業 3.3兆円の内訳"
      subtitle="2024年実績（億円）"
    >
      <div className="space-y-2">
        {segs.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{s.name}</span>
              <span
                className="tabular-nums font-bold"
                style={{ color: s.color }}
              >
                {s.value.toLocaleString()}億円
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(s.value / max) * 100}%`,
                  backgroundColor: s.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        市場 <strong>3.3兆円</strong> ／ 制作会社全体の売上 <strong>約3,000億円</strong>
      </div>
    </Card>
  );
}

/* ── 2. Production committee ── */
export function AnimeCommitteeDiagram() {
  const members = [
    { name: "原作（出版社）", share: "原作料・コミックス収入", color: NAVY },
    { name: "テレビ局", share: "放映権・CM収益", color: GREEN },
    { name: "配信会社", share: "配信権", color: PURPLE },
    { name: "玩具・グッズ", share: "商品化権", color: ECON },
    { name: "レコード会社", share: "音楽収入", color: ANIME },
    { name: "制作スタジオ", share: "制作費（原価＋微利）", color: RED },
  ];
  return (
    <Card
      title="製作委員会方式 ― 利益分配"
      subtitle="制作スタジオの取り分は最小"
    >
      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-baseline justify-between gap-2 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${m.color}0a` }}
          >
            <div className="text-[12px] font-bold" style={{ color: m.color }}>
              {m.name}
            </div>
            <div className="text-[10px] text-foreground/65 text-right">
              {m.share}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <strong>制作会社の出資比率</strong>：通常 0〜10%／作品がヒットしてもスタジオへの配当はわずか
      </div>
    </Card>
  );
}

/* ── 3. Studio P&L ── */
export function AnimeStudioPlDiagram() {
  const costs = [
    { name: "原画", pct: 33, color: NAVY },
    { name: "動画・仕上げ", pct: 22, color: PURPLE },
    { name: "演出・脚本", pct: 10, color: GREEN },
    { name: "音響・録音", pct: 7, color: ECON },
    { name: "美術背景", pct: 8, color: ANIME },
    { name: "制作管理・諸経費", pct: 17, color: "#94a3b8" },
    { name: "スタジオ利益", pct: 3, color: RED },
  ];
  return (
    <Card
      title="制作スタジオのコスト構造"
      subtitle="営業利益率は1〜5%"
    >
      <div className="space-y-1.5">
        {costs.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70">{c.name}</span>
              <span
                className="tabular-nums font-bold"
                style={{ color: c.color }}
              >
                {c.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${c.pct * 3}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <strong>動画マンの年収</strong>：100〜200万円／時給換算で最低賃金以下のケースも
      </div>
    </Card>
  );
}

/* ── 4. Three studios ── */
export function AnimeThreeStudiosDiagram() {
  const studios = [
    {
      name: "MAPPA",
      works: "呪術廻戦・チェンソーマン・進撃の巨人",
      strategy: "攻めの量産型",
      color: NAVY,
    },
    {
      name: "ufotable",
      works: "鬼滅の刃・Fate",
      strategy: "選択と集中＋IP保有型",
      color: GREEN,
    },
    {
      name: "京都アニメーション",
      works: "けいおん！・ヴァイオレット・エヴァーガーデン",
      strategy: "自社養成・自社IPの職人型",
      color: ECON,
    },
  ];
  return (
    <Card
      title="3スタジオ比較"
      subtitle="戦略と代表作"
    >
      <div className="space-y-2">
        {studios.map((s) => (
          <div
            key={s.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="text-[14px] font-bold" style={{ color: s.color }}>
              {s.name}
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              {s.works}
            </div>
            <div
              className="text-[10px] mt-1 font-semibold"
              style={{ color: s.color }}
            >
              {s.strategy}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Streaming ── */
export function AnimeStreamingDiagram() {
  return (
    <Card
      title="海外配信プラットフォームの台頭"
      subtitle="製作委員会 vs 直接発注"
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: NAVY }}>
            製作委員会
          </div>
          <ul className="space-y-1 text-[10px] text-foreground/70">
            <li>• IP共有・上振れ可能</li>
            <li>• 制作費は薄利</li>
            <li>• 多様な権利者</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: GREEN }}>
            直接発注（Netflix型）
          </div>
          <ul className="space-y-1 text-[10px] text-foreground/70">
            <li>• 制作費が直接入金</li>
            <li>• 利益率は改善</li>
            <li>• IP は配信会社が保有</li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${PURPLE}0d` }}
      >
        Crunchyroll（Sony傘下）は世界最大級のアニメ配信。米国・欧州市場の窓口
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function AnimeFutureDiagram() {
  const items = [
    { num: "①", title: "労働環境の改善", color: GREEN },
    { num: "②", title: "IP保有モデル拡大", color: NAVY },
    { num: "③", title: "AI・デジタル化", color: PURPLE },
    { num: "④", title: "海外配信との交渉力強化", color: ECON },
  ];
  return (
    <Card
      title="次の10年 ― 4つの課題"
      subtitle="持続可能なアニメ産業へ"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              {i.title}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
