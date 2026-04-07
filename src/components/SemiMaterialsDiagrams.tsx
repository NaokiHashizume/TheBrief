"use client";

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
          style={{ color: `${MAT}cc` }}
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
export function SemiMatOverviewDiagram() {
  return (
    <Card
      title="半導体材料の世界市場と日本のシェア"
      subtitle="本体は9%、材料は55%"
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">半導体本体</div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            9%
          </div>
          <div className="text-[10px] text-foreground/60">日本シェア</div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60">半導体材料</div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            55%
          </div>
          <div className="text-[10px] text-foreground/60">日本シェア</div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        世界市場 約<strong>650億ドル</strong>（10兆円規模）／
        本体市場の約1/6
      </div>
    </Card>
  );
}

/* ── 2. Share by item ── */
export function SemiMatShareDiagram() {
  const items = [
    { name: "EUV用フォトレジスト", pct: 100, color: GREEN },
    { name: "フォトレジスト全体", pct: 90, color: GREEN },
    { name: "フォトマスクブランクス", pct: 75, color: GREEN },
    { name: "シリコンウェハー", pct: 60, color: ECON },
    { name: "CMPスラリー", pct: 40, color: ECON },
    { name: "特殊ガス", pct: 35, color: ECON },
  ];
  return (
    <Card
      title="品目別 ― 日本企業の世界シェア"
      subtitle="フォトレジスト分野で圧倒"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{i.name}</span>
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
        EUV用最先端フォトレジストは <strong>日本企業がほぼ独占</strong>
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
      sub: "戦後復興期からの精密化学",
      color: NAVY,
    },
    {
      num: "②",
      title: "顧客との長期関係",
      sub: "5-10年の評価期間が参入障壁",
      color: GREEN,
    },
    {
      num: "③",
      title: "高純度・微量管理",
      sub: "ppt（兆分の一）レベルの不純物管理",
      color: ECON,
    },
  ];
  return (
    <Card
      title="日本が圧勝する3つの理由"
      subtitle="精密化学と品質の蓄積"
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
                {r.title}
              </div>
              <div className="text-[10px] text-foreground/65 mt-0.5">
                {r.sub}
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
      margin: "30%",
      strength: "シリコンウェハー世界1位",
      color: NAVY,
    },
    {
      name: "SUMCO",
      sales: "4,200億円",
      margin: "—",
      strength: "シリコンウェハー世界2位",
      color: MAT,
    },
    {
      name: "JSR",
      sales: "4,000億円",
      margin: "—",
      strength: "EUVフォトレジスト最先端",
      color: GREEN,
    },
    {
      name: "東京応化工業",
      sales: "1,800億円",
      margin: "—",
      strength: "EUVフォトレジスト",
      color: ECON,
    },
  ];
  return (
    <Card
      title="主要日本企業 4社"
      subtitle="売上・利益率・強み"
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
                <span className="text-foreground/65">売上 {c.sales}</span>
                <span
                  className="font-bold"
                  style={{ color: c.color }}
                >
                  利益率 {c.margin}
                </span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/60">{c.strength}</div>
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
      title="地政学リスクと機会"
      subtitle="米中対立下の半導体材料"
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: RED }}>
            リスク
          </div>
          <ul className="space-y-1 text-[11px] text-foreground/70">
            <li>• 中国の国産化加速</li>
            <li>• 対中輸出規制の拡大</li>
            <li>• 技術者高齢化</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[11px] font-bold mb-2" style={{ color: GREEN }}>
            機会
          </div>
          <ul className="space-y-1 text-[11px] text-foreground/70">
            <li>• 脱中国SCMで需要増</li>
            <li>• CHIPS法・EU Chips Act</li>
            <li>• 「特定重要物資」指定</li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${MAT}0d` }}
      >
        日本は <strong>「中国でも米国でもない第三極」</strong> ― 両陣営から必要とされる
      </div>
    </Card>
  );
}

/* ── 6. 2030 ── */
export function SemiMat2030Diagram() {
  const bets = [
    {
      title: "EUV領域の死守",
      sub: "Rapidusも主要顧客に",
      color: NAVY,
    },
    {
      title: "電池材料への横展開",
      sub: "シリコン負極材・正極材・電解液",
      color: GREEN,
    },
  ];
  return (
    <Card
      title="2030年戦略 ― 二兎を追う"
      subtitle="EUVと電池材料"
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
              {b.title}
            </div>
            <div className="text-[10px] text-foreground/65 mt-1">
              {b.sub}
            </div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${ECON}0d` }}
      >
        電池材料の世界市場は2030年までに <strong>10兆円超</strong> へ
      </div>
    </Card>
  );
}
