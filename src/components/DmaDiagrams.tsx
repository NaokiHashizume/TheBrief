"use client";

/* ────────────────────────────────────────────────────────────
   Disaster Management Agency (DMA) — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";
const ORANGE = "#ea580c";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";

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
          style={{ color: `${POLITICS}aa` }}
        >
          Figure
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

/* ── 1. Why DMA - background ── */
export function DmaOverviewDiagram() {
  const reasons = [
    {
      label: "①",
      title: "大規模災害の確度上昇",
      detail: "南海トラフ70-80% / 首都直下70%（30年内）",
      color: POLITICS,
    },
    {
      label: "②",
      title: "既存体制の限界",
      detail: "内閣府防災担当220人・2年異動の寄せ集め",
      color: ORANGE,
    },
    {
      label: "③",
      title: "縦割りの非効率",
      detail: "能登半島地震で省庁連携不足が露呈",
      color: NAVY,
    },
  ];
  return (
    <Card title="防災庁が必要となった3つの背景">
      <div className="space-y-3">
        {reasons.map((r) => (
          <div
            key={r.label}
            className="flex items-start gap-3 p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0d` }}
          >
            <div
              className="text-[20px] font-bold tabular-nums shrink-0"
              style={{ color: r.color }}
            >
              {r.label}
            </div>
            <div>
              <div
                className="text-[13px] font-bold"
                style={{ color: r.color }}
              >
                {r.title}
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                {r.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Before vs After ── */
export function DmaVsCurrentDiagram() {
  return (
    <Card
      title="内閣府防災担当 → 防災庁"
      subtitle="人員1.6倍、予算1.4倍、勧告権を新設"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: "#94a3b820" }}
        >
          <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60">
            現在
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            内閣府防災担当
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・定員 220人</li>
            <li>・予算 約140億円</li>
            <li>・内閣府の一部局</li>
            <li>・勧告権なし</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: POLITICS,
            backgroundColor: `${POLITICS}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: POLITICS }}
          >
            2026年〜
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            防災庁
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・定員 <strong>352人</strong></li>
            <li>・予算 <strong>202億円</strong></li>
            <li>・内閣直下の独立組織</li>
            <li>・<strong>他省庁への勧告権</strong></li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

/* ── 3. Three roles ── */
export function DmaThreeRolesDiagram() {
  const roles = [
    {
      phase: "平時",
      title: "事前防災の推進",
      detail: "国家戦略立案、強靭化、訓練、BCP支援",
      color: GREEN,
    },
    {
      phase: "発災時",
      title: "ワンストップ窓口",
      detail: "避難所・物資・医療・ボラ調整を一元化",
      color: POLITICS,
    },
    {
      phase: "復興",
      title: "復旧から復興まで",
      detail: "住宅再建・産業復興・心のケアを常設指揮",
      color: NAVY,
    },
  ];
  return (
    <Card title="防災庁の3つの役割 ― 平時・発災時・復興">
      <div className="space-y-3">
        {roles.map((r) => (
          <div
            key={r.phase}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0d` }}
          >
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: r.color }}
            >
              {r.phase}
            </div>
            <div className="text-[13px] font-bold text-foreground mt-1">
              {r.title}
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              {r.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Regional offices ── */
export function DmaRegionalDiagram() {
  const regions = [
    {
      target: "南海トラフ巨大地震",
      areas: "静岡・愛知・三重・和歌山・徳島・高知・宮崎・鹿児島",
      color: POLITICS,
    },
    {
      target: "首都直下地震",
      areas: "東京・神奈川・千葉・埼玉",
      color: ORANGE,
    },
    {
      target: "日本海溝・千島海溝",
      areas: "北海道・青森・岩手・宮城・福島",
      color: NAVY,
    },
  ];
  return (
    <Card
      title="防災庁 地方拠点の対象地域"
      subtitle="全国30以上の自治体が誘致候補"
    >
      <div className="space-y-3">
        {regions.map((r) => (
          <div
            key={r.target}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0d` }}
          >
            <div
              className="text-[12px] font-bold"
              style={{ color: r.color }}
            >
              {r.target}
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              {r.areas}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        モデル：米国FEMAの地方事務所（全米10カ所）
      </div>
    </Card>
  );
}

/* ── 5. FEMA vs DMA ── */
export function DmaInternationalDiagram() {
  const items = [
    { label: "職員数", fema: "20,000人", dma: "352人", femaVal: 100, dmaVal: 1.8 },
    { label: "年間予算", fema: "4.3兆円", dma: "202億円", femaVal: 100, dmaVal: 0.5 },
    { label: "地方拠点", fema: "10カ所", dma: "30+候補", femaVal: 33, dmaVal: 100 },
  ];
  return (
    <Card
      title="米国FEMA vs 日本防災庁"
      subtitle="規模では桁違い、戦略では「司令塔型」"
    >
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <div className="text-[11px] font-bold text-foreground/60 mb-2">
              {it.label}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-12 text-[10px] font-bold text-foreground/70">
                  FEMA
                </div>
                <div className="flex-1 h-5 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full flex items-center justify-end pr-2"
                    style={{
                      width: `${it.femaVal}%`,
                      backgroundColor: NAVY,
                    }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {it.fema}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 text-[10px] font-bold text-foreground/70">
                  防災庁
                </div>
                <div className="flex-1 h-5 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full flex items-center justify-end pr-2"
                    style={{
                      width: `${Math.max(it.dmaVal, 5)}%`,
                      backgroundColor: POLITICS,
                      minWidth: "60px",
                    }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {it.dma}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Concerns ── */
export function DmaConcernsDiagram() {
  const concerns = [
    { num: "①", title: "屋上屋批判", detail: "既存組織との重複・調整コスト", color: POLITICS },
    { num: "②", title: "平時 vs 発災時", detail: "求められる組織文化が真逆", color: ORANGE },
    { num: "③", title: "自治体との関係", detail: "主体性低下のリスク", color: NAVY },
    { num: "④", title: "予算規模不足", detail: "災害本体予算は別途必要", color: "#7c3aed" },
  ];
  return (
    <Card title="防災庁設置に対する4つの懸念">
      <div className="space-y-2">
        {concerns.map((c) => (
          <div
            key={c.num}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${c.color}0a` }}
          >
            <div
              className="text-[18px] font-bold tabular-nums shrink-0"
              style={{ color: c.color }}
            >
              {c.num}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-bold" style={{ color: c.color }}>
                {c.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {c.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
