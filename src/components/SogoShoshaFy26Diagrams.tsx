"use client";

const ACCENT = "#f59e0b";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">
          Figure
        </div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

export function ShoshaFy26RankingDiagram() {
  const rows = [
    { name: "伊藤忠商事", profit: 5003, delta: "+14.1%", up: true },
    { name: "三井物産", profit: 4237, delta: "通期上方修正", up: true },
    { name: "三菱商事", profit: 3558, delta: "-42.4%", up: false },
    { name: "丸紅", profit: 3055, delta: "+28.3%", up: true },
    { name: "住友商事", profit: 3012, delta: "+18.6%", up: true },
  ];
  const max = 5100;
  return (
    <Card title="5大商社 FY26 中間純利益ランキング（億円）">
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-24 text-[12px] font-semibold text-foreground/80">
              {r.name}
            </div>
            <div className="flex-1 h-7 bg-foreground/[0.04] rounded overflow-hidden">
              <div
                className="h-full flex items-center justify-end pr-2"
                style={{
                  width: `${(r.profit / max) * 100}%`,
                  backgroundColor: r.up ? `${ACCENT}33` : "#ef444433",
                }}
              >
                <span
                  className="text-[11px] font-bold tabular-nums"
                  style={{ color: r.up ? ACCENT : "#ef4444" }}
                >
                  {r.profit.toLocaleString()}億円
                </span>
              </div>
            </div>
            <div
              className="w-24 text-right text-[11px] font-bold tabular-nums"
              style={{ color: r.up ? ACCENT : "#ef4444" }}
            >
              {r.delta}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        出典: 各社 FY2026 中間決算説明資料
      </div>
    </Card>
  );
}

export function ShoshaMitsubishiDropDiagram() {
  const items = [
    { label: "ローソン持分法化", share: 35, desc: "連結→持分法で利益寄与縮小" },
    { label: "海外資源の減損", share: 25, desc: "プロジェクト単位で数百億円規模" },
    { label: "資源価格の循環下落", share: 25, desc: "石炭・金属の価格低下" },
    { label: "その他（為替等）", share: 15, desc: "円高局面と費用計上" },
  ];
  return (
    <Card title="三菱商事 −42.4%の要因分解（推定）">
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border">
            <div className="flex items-baseline justify-between mb-1.5">
              <div className="text-[13px] font-bold text-foreground/90">{it.label}</div>
              <div
                className="text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {it.share}%
              </div>
            </div>
            <div className="h-1.5 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${it.share}%`, backgroundColor: ACCENT }}
              />
            </div>
            <div className="text-[11px] text-foreground/55 mt-1.5">{it.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ShoshaItochuStrengthDiagram() {
  const segments = [
    { name: "生活消費関連", pct: 32, color: ACCENT },
    { name: "食料（ファミマ他）", pct: 22, color: "#22c55e" },
    { name: "金属・エネルギー", pct: 20, color: "#64748b" },
    { name: "機械・情報金融", pct: 16, color: "#8b5cf6" },
    { name: "繊維・住生活", pct: 10, color: "#ec4899" },
  ];
  return (
    <Card title="伊藤忠のセグメント別利益構成（概算）">
      <div className="flex h-6 rounded-full overflow-hidden mb-4">
        {segments.map((s, i) => (
          <div
            key={i}
            style={{ width: `${s.pct}%`, backgroundColor: s.color }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: s.color }}
            />
            <div className="text-[11px] text-foreground/75 flex-1">{s.name}</div>
            <div className="text-[11px] font-bold tabular-nums text-foreground/60">
              {s.pct}%
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45">
        非資源（生活消費＋食料＋機械・情報金融＋繊維・住生活）= 約80% と、5社で最も厚い。
      </div>
    </Card>
  );
}

export function ShoshaBuffettEffectDiagram() {
  const items = [
    { y: "2020", e: "バークシャー、5社を一斉取得（各社〜5%）" },
    { y: "2023", e: "保有比率を 7.4% 前後まで引き上げ" },
    { y: "2024", e: "各社 約9% 台前半で『長期保有』明言" },
    { y: "2025", e: "総還元性向 50〜60%、自社株買い拡大" },
    { y: "2026", e: "伊藤忠が時価総額で首位。バフェット効果は継続" },
  ];
  return (
    <Card title="バフェット効果の6年 — 保有と株主還元の軌跡">
      <ol className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <div
              className="text-[11px] font-bold tabular-nums w-14 shrink-0 pt-0.5"
              style={{ color: ACCENT }}
            >
              {it.y}
            </div>
            <div className="text-[12px] text-foreground/75 leading-relaxed">
              {it.e}
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
