"use client";

import { T } from "@/components/T";

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
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${POLITICS}aa` }}
        >
          <T ja="図表" en="FIGURE" />
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
      titleEn: "Rising probability of major disasters",
      detail: "南海トラフ70-80% / 首都直下70%（30年内）",
      detailEn: "Nankai Trough 70–80% / Tokyo inland 70% (within 30 years)",
      color: POLITICS,
    },
    {
      label: "②",
      title: "既存体制の限界",
      titleEn: "Limits of the existing system",
      detail: "内閣府防災担当220人・2年異動の寄せ集め",
      detailEn: "Cabinet Office disaster unit: 220 staff, rotating every 2 years",
      color: ORANGE,
    },
    {
      label: "③",
      title: "縦割りの非効率",
      titleEn: "Inefficiency of siloed ministries",
      detail: "能登半島地震で省庁連携不足が露呈",
      detailEn: "Lack of inter-ministry coordination exposed in the Noto Peninsula earthquake",
      color: NAVY,
    },
  ];
  return (
    <Card title={<T ja="防災庁が必要となった3つの背景" en="3 Reasons Japan Needs a Disaster Management Agency" />}>
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
                <T ja={r.title} en={r.titleEn} />
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                <T ja={r.detail} en={r.detailEn} />
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
      title={<T ja="内閣府防災担当 → 防災庁" en="Cabinet Office Disaster Unit → Disaster Management Agency" />}
      subtitle={<T ja="人員1.6倍、予算1.4倍、勧告権を新設" en="Staff ×1.6, budget ×1.4, new authority to issue directives" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: "#94a3b820" }}
        >
          <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60">
            <T ja="現在" en="Current" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="内閣府防災担当" en="Cabinet Office Disaster Unit" />
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li><T ja="・定員 220人" en="- Staff: 220" /></li>
            <li><T ja="・予算 約140億円" en="- Budget: approx. ¥14 billion" /></li>
            <li><T ja="・内閣府の一部局" en="- A division of the Cabinet Office" /></li>
            <li><T ja="・勧告権なし" en="- No directive authority" /></li>
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
            <T ja="2026年〜" en="From 2026" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="防災庁" en="Disaster Management Agency" />
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li><T ja={`・定員 `} en="- Staff: " /><strong>352<T ja="人" en="" /></strong></li>
            <li><T ja={`・予算 `} en="- Budget: " /><strong><T ja="202億円" en="¥20.2 billion" /></strong></li>
            <li><T ja="・内閣直下の独立組織" en="- Independent body under the Cabinet" /></li>
            <li>・<strong><T ja="他省庁への勧告権" en="Authority to direct other ministries" /></strong></li>
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
      phaseEn: "Peacetime",
      title: "事前防災の推進",
      titleEn: "Promoting pre-disaster preparedness",
      detail: "国家戦略立案、強靭化、訓練、BCP支援",
      detailEn: "National strategy, resilience building, drills, BCP support",
      color: GREEN,
    },
    {
      phase: "発災時",
      phaseEn: "During disaster",
      title: "ワンストップ窓口",
      titleEn: "Single point of coordination",
      detail: "避難所・物資・医療・ボラ調整を一元化",
      detailEn: "Centralizing shelters, supplies, medical, and volunteer coordination",
      color: POLITICS,
    },
    {
      phase: "復興",
      phaseEn: "Recovery",
      title: "復旧から復興まで",
      titleEn: "From restoration to full recovery",
      detail: "住宅再建・産業復興・心のケアを常設指揮",
      detailEn: "Permanent command over housing, industry revival, and mental health care",
      color: NAVY,
    },
  ];
  return (
    <Card title={<T ja="防災庁の3つの役割 ― 平時・発災時・復興" en="3 Roles of the Disaster Management Agency — Peacetime, Disaster, Recovery" />}>
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
              <T ja={r.phase} en={r.phaseEn} />
            </div>
            <div className="text-[13px] font-bold text-foreground mt-1">
              <T ja={r.title} en={r.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              <T ja={r.detail} en={r.detailEn} />
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
      targetEn: "Nankai Trough megaquake",
      areas: "静岡・愛知・三重・和歌山・徳島・高知・宮崎・鹿児島",
      areasEn: "Shizuoka, Aichi, Mie, Wakayama, Tokushima, Kochi, Miyazaki, Kagoshima",
      color: POLITICS,
    },
    {
      target: "首都直下地震",
      targetEn: "Tokyo inland earthquake",
      areas: "東京・神奈川・千葉・埼玉",
      areasEn: "Tokyo, Kanagawa, Chiba, Saitama",
      color: ORANGE,
    },
    {
      target: "日本海溝・千島海溝",
      targetEn: "Japan Trench / Kuril Trench",
      areas: "北海道・青森・岩手・宮城・福島",
      areasEn: "Hokkaido, Aomori, Iwate, Miyagi, Fukushima",
      color: NAVY,
    },
  ];
  return (
    <Card
      title={<T ja="防災庁 地方拠点の対象地域" en="DMA Regional Office Coverage Areas" />}
      subtitle={<T ja="全国30以上の自治体が誘致候補" en="Over 30 local governments are candidate hosts" />}
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
              <T ja={r.target} en={r.targetEn} />
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              <T ja={r.areas} en={r.areasEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja="モデル：米国FEMAの地方事務所（全米10カ所）" en="Modeled on FEMA's 10 regional offices across the US" />
      </div>
    </Card>
  );
}

/* ── 5. FEMA vs DMA ── */
export function DmaInternationalDiagram() {
  const items = [
    { label: "職員数", labelEn: "Staff", fema: "20,000人", femaEn: "20,000", dma: "352人", dmaEn: "352", femaVal: 100, dmaVal: 1.8 },
    { label: "年間予算", labelEn: "Annual budget", fema: "4.3兆円", femaEn: "¥4.3 trillion", dma: "202億円", dmaEn: "¥20.2 billion", femaVal: 100, dmaVal: 0.5 },
    { label: "地方拠点", labelEn: "Regional offices", fema: "10カ所", femaEn: "10 locations", dma: "30+候補", dmaEn: "30+ candidates", femaVal: 33, dmaVal: 100 },
  ];
  return (
    <Card
      title={<T ja="米国FEMA vs 日本防災庁" en="US FEMA vs Japan's DMA" />}
      subtitle={<T ja="規模では桁違い、戦略では「司令塔型」" en="Orders of magnitude smaller, but sharing the command-tower model" />}
    >
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <div className="text-[11px] font-bold text-foreground/60 mb-2">
              <T ja={it.label} en={it.labelEn} />
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
                      <T ja={it.fema} en={it.femaEn} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 text-[10px] font-bold text-foreground/70">
                  <T ja="防災庁" en="DMA" />
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
                      <T ja={it.dma} en={it.dmaEn} />
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
    { num: "①", title: "屋上屋批判", titleEn: "Redundancy criticism", detail: "既存組織との重複・調整コスト", detailEn: "Overlap with existing bodies and coordination costs", color: POLITICS },
    { num: "②", title: "平時 vs 発災時", titleEn: "Peacetime vs. disaster mode", detail: "求められる組織文化が真逆", detailEn: "Organizational cultures needed are polar opposites", color: ORANGE },
    { num: "③", title: "自治体との関係", titleEn: "Relationship with local governments", detail: "主体性低下のリスク", detailEn: "Risk of reduced local autonomy", color: NAVY },
    { num: "④", title: "予算規模不足", titleEn: "Insufficient budget scale", detail: "災害本体予算は別途必要", detailEn: "Core disaster response budget still needed separately", color: "#7c3aed" },
  ];
  return (
    <Card title={<T ja="防災庁設置に対する4つの懸念" en="4 Concerns About Establishing the DMA" />}>
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
                <T ja={c.title} en={c.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={c.detail} en={c.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
