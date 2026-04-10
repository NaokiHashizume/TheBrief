"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Semiconductor Materials — Diagrams
   ──────────────────────────────────────────────────────────── */

const MAT = "#0ea5e9";
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
          style={{ color: `${MAT}cc` }}
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

/* ── 1. Overview ── */
export function SemiMatOverviewDiagram() {
  return (
    <Card
      title={<T ja="半導体材料の世界市場と日本のシェア" en="Global Semiconductor Materials Market and Japan's Share" />}
      subtitle={<T ja="本体は9%、材料は55%" en="Chip devices: 9% / Materials: 55%" />}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="半導体本体" en="Chip devices" /></div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            9%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="日本シェア" en="Japan's share" /></div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="半導体材料" en="Semiconductor materials" /></div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            55%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="日本シェア" en="Japan's share" /></div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>世界市場 約<strong>650億ドル</strong>（10兆円規模）／本体市場の約1/6</>}
          en={<>Global market approx. <strong>$65 billion</strong> / about 1/6 of the chip device market</>}
        />
      </div>
    </Card>
  );
}

/* ── 2. Share by item ── */
export function SemiMatShareDiagram() {
  const items = [
    { name: "EUV用フォトレジスト", nameEn: "EUV photoresist", pct: 100, color: GREEN },
    { name: "フォトレジスト全体", nameEn: "Photoresist (all types)", pct: 90, color: GREEN },
    { name: "フォトマスクブランクス", nameEn: "Photomask blanks", pct: 75, color: GREEN },
    { name: "シリコンウェハー", nameEn: "Silicon wafers", pct: 60, color: ECON },
    { name: "CMPスラリー", nameEn: "CMP slurry", pct: 40, color: ECON },
    { name: "特殊ガス", nameEn: "Specialty gases", pct: 35, color: ECON },
  ];
  return (
    <Card
      title={<T ja="品目別 ― 日本企業の世界シェア" en="Japan's Global Market Share by Product Category" />}
      subtitle={<T ja="フォトレジスト分野で圧倒" en="Dominant in photoresist" />}
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={i.name} en={i.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: i.color }}
              >
                {i.pct}%
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${i.pct}%`, backgroundColor: i.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>EUV用最先端フォトレジストは <strong>日本企業がほぼ独占</strong></>}
          en={<>Japanese firms hold a <strong>near-monopoly</strong> in cutting-edge EUV photoresist</>}
        />
      </div>
    </Card>
  );
}

/* ── 3. Why Japan ── */
export function SemiMatWhyDiagram() {
  const reasons = [
    {
      num: "①",
      title: "歴史的蓄積",
      titleEn: "Historical accumulation",
      sub: "戦後復興期からの精密化学",
      subEn: "Precision chemistry built since postwar reconstruction",
      color: NAVY,
    },
    {
      num: "②",
      title: "顧客との長期関係",
      titleEn: "Long-term customer relationships",
      sub: "5-10年の評価期間が参入障壁",
      subEn: "5–10 year qualification periods create high barriers to entry",
      color: GREEN,
    },
    {
      num: "③",
      title: "高純度・微量管理",
      titleEn: "Ultra-high purity and trace-level control",
      sub: "ppt（兆分の一）レベルの不純物管理",
      subEn: "Impurity control at the ppt (parts per trillion) level",
      color: ECON,
    },
  ];
  return (
    <Card
      title={<T ja="日本が圧勝する3つの理由" en="3 Reasons Japan Dominates" />}
      subtitle={<T ja="精密化学と品質の蓄積" en="Precision chemistry and quality heritage" />}
    >
      <div className="space-y-2">
        {reasons.map((r) => (
          <div
            key={r.num}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0a` }}
          >
            <div
              className="text-[18px] font-bold tabular-nums shrink-0"
              style={{ color: r.color }}
            >
              {r.num}
            </div>
            <div>
              <div
                className="text-[12px] font-bold"
                style={{ color: r.color }}
              >
                <T ja={r.title} en={r.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/65 mt-0.5">
                <T ja={r.sub} en={r.subEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Companies ── */
export function SemiMatCompaniesDiagram() {
  const cos = [
    {
      name: "信越化学工業",
      sales: "2.4兆円",
      salesEn: "¥2.4 trillion",
      margin: "30%",
      strength: "シリコンウェハー世界1位",
      strengthEn: "#1 globally in silicon wafers",
      color: NAVY,
    },
    {
      name: "SUMCO",
      sales: "4,200億円",
      salesEn: "¥420 billion",
      margin: "—",
      strength: "シリコンウェハー世界2位",
      strengthEn: "#2 globally in silicon wafers",
      color: MAT,
    },
    {
      name: "JSR",
      sales: "4,000億円",
      salesEn: "¥400 billion",
      margin: "—",
      strength: "EUVフォトレジスト最先端",
      strengthEn: "Leading-edge EUV photoresist",
      color: GREEN,
    },
    {
      name: "東京応化工業",
      sales: "1,800億円",
      salesEn: "¥180 billion",
      margin: "—",
      strength: "EUVフォトレジスト",
      strengthEn: "EUV photoresist",
      color: ECON,
    },
  ];
  return (
    <Card
      title={<T ja="主要日本企業 4社" en="4 Major Japanese Companies" />}
      subtitle={<T ja="売上・利益率・強み" en="Revenue, margin, and strengths" />}
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div
            key={c.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${c.color}0d` }}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <div className="text-[13px] font-bold" style={{ color: c.color }}>
                {c.name}
              </div>
              <div className="flex gap-3 text-[10px] tabular-nums">
                <span className="text-foreground/65"><T ja="売上 " en="Revenue: " />{<T ja={c.sales} en={c.salesEn} />}</span>
                <span
                  className="font-bold"
                  style={{ color: c.color }}
                >
                  <T ja="利益率 " en="Margin: " />{c.margin}
                </span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60"><T ja={c.strength} en={c.strengthEn} /></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Geopolitics ── */
export function SemiMatGeopoliticsDiagram() {
  return (
    <Card
      title={<T ja="地政学リスクと機会" en="Geopolitical Risks and Opportunities" />}
      subtitle={<T ja="米中対立下の半導体材料" en="Semiconductor materials amid US–China rivalry" />}
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: RED }}>
            <T ja="リスク" en="Risks" />
          </div>
          <ul className="space-y-1 text-[11px] text-foreground/70">
            <li><T ja="• 中国の国産化加速" en="• China accelerating domestic production" /></li>
            <li><T ja="• 対中輸出規制の拡大" en="• Expanding export controls on China" /></li>
            <li><T ja="• 技術者高齢化" en="• Aging of skilled engineers" /></li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: GREEN }}>
            <T ja="機会" en="Opportunities" />
          </div>
          <ul className="space-y-1 text-[11px] text-foreground/70">
            <li><T ja="• 脱中国SCMで需要増" en="• Rising demand from China-exit supply chains" /></li>
            <li>• CHIPS Act / EU Chips Act</li>
            <li><T ja={`• 「特定重要物資」指定`} en={`• Designated "critical materials"`} /></li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        <T
          ja={<>日本は <strong>「中国でも米国でもない第三極」</strong> ― 両陣営から必要とされる</>}
          en={<>Japan as a <strong>&quot;third pole, neither China nor the US&quot;</strong> — indispensable to both sides</>}
        />
      </div>
    </Card>
  );
}

/* ── 6. 2030 ── */
export function SemiMat2030Diagram() {
  const bets = [
    {
      title: "EUV領域の死守",
      titleEn: "Defending EUV dominance",
      sub: "Rapidusも主要顧客に",
      subEn: "Rapidus becomes a key customer",
      color: NAVY,
    },
    {
      title: "電池材料への横展開",
      titleEn: "Expanding into battery materials",
      sub: "シリコン負極材・正極材・電解液",
      subEn: "Silicon anodes, cathodes, electrolytes",
      color: GREEN,
    },
  ];
  return (
    <Card
      title={<T ja="2030年戦略 ― 二兎を追う" en="2030 Strategy — Chasing Two Goals" />}
      subtitle={<T ja="EUVと電池材料" en="EUV materials and battery materials" />}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        {bets.map((b) => (
          <div
            key={b.title}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${b.color}0d` }}
          >
            <div
              className="text-[12px] font-bold"
              style={{ color: b.color }}
            >
              <T ja={b.title} en={b.titleEn} />
            </div>
            <div className="text-[10px] text-foreground/65 mt-1">
              <T ja={b.sub} en={b.subEn} />
            </div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${ECON}0d` }}
      >
        <T
          ja={<>電池材料の世界市場は2030年までに <strong>10兆円超</strong> へ</>}
          en={<>The global battery materials market is set to surpass <strong>¥10 trillion</strong> by 2030</>}
        />
      </div>
    </Card>
  );
}
