"use client";

/* ────────────────────────────────────────────────────────────
   National Intelligence Agency (NIA) — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";
const NAVY = "#1e3a8a";
const GOLD = "#b45309";
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

/* ── 1. Why now ── */
export function NiaOverviewDiagram() {
  const reasons = [
    {
      label: "①",
      title: "中・露・北朝鮮の活動激化",
      detail: "情報司令塔の不在が顕在化",
      color: POLITICS,
    },
    {
      label: "②",
      title: "経済安全保障",
      detail: "技術窃取・経済スパイへの対応",
      color: GOLD,
    },
    {
      label: "③",
      title: "ファイブ・アイズ連携",
      detail: "米英の対等カウンターパート",
      color: NAVY,
    },
  ];
  return (
    <Card title="なぜ今、国家情報局なのか ― 3つの背景">
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

/* ── 2. Current fragmented map ── */
export function NiaCurrentMapDiagram() {
  const orgs = [
    { name: "内閣情報調査室", parent: "内閣官房", staff: "約400", color: POLITICS },
    { name: "公安調査庁", parent: "法務省", staff: "約1,700", color: NAVY },
    { name: "防衛省情報本部", parent: "防衛省", staff: "約2,000+", color: "#0d9488" },
    { name: "外務省情報統括官組織", parent: "外務省", staff: "約100", color: GOLD },
    { name: "警察庁外事情報部", parent: "警察庁", staff: "非公表", color: "#7c3aed" },
  ];
  return (
    <Card
      title="現在の日本のインテリジェンス体制"
      subtitle="5つの省庁にバラバラ"
    >
      <div className="space-y-2">
        {orgs.map((o) => (
          <div
            key={o.name}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${o.color}08` }}
          >
            <div
              className="w-1 h-10 rounded-full shrink-0"
              style={{ backgroundColor: o.color }}
            />
            <div className="flex-1">
              <div
                className="text-[12px] font-bold"
                style={{ color: o.color }}
              >
                {o.name}
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                {o.parent}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 tabular-nums">
              {o.staff}人
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※統合的な「全体評価」を行う司令塔がない
      </div>
    </Card>
  );
}

/* ── 3. NIA structure ── */
export function NiaStructureDiagram() {
  return (
    <Card
      title="国家情報会議・国家情報局 の組織構造"
      subtitle="2026年7月発足予定"
    >
      <div className="space-y-3">
        <div
          className="p-4 rounded-lg border-2 text-center"
          style={{
            borderColor: POLITICS,
            backgroundColor: `${POLITICS}0d`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: POLITICS }}
          >
            議長
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            内閣総理大臣
          </div>
        </div>
        <div className="text-center text-[18px] text-foreground/30">↓</div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${POLITICS}08` }}
        >
          <div
            className="text-[11px] font-bold mb-2"
            style={{ color: POLITICS }}
          >
            国家情報会議（NIC） ― メンバー
          </div>
          <div className="text-[11px] text-foreground/70 leading-relaxed">
            内閣官房長官（副議長）／外務大臣／防衛大臣／警察庁長官／公安調査庁長官／防衛省情報本部長
          </div>
        </div>
        <div className="text-center text-[18px] text-foreground/30">↓</div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}10` }}
        >
          <div className="text-[11px] font-bold" style={{ color: NAVY }}>
            国家情報局（NIA） ― 事務局
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            局長（内閣情報官を改組）。情報提供要求権・横断調査命令権・同盟国IC窓口
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 4. Phase 2 ── */
export function NiaPhase2Diagram() {
  const items = [
    {
      year: "2026-07",
      title: "国家情報局・国家情報会議",
      detail: "第1弾：内調を格上げ・統合",
      color: POLITICS,
    },
    {
      year: "2027末",
      title: "対外情報庁（仮）",
      detail: "日本版MI6/CIA、HUMINT専門",
      color: GOLD,
    },
    {
      year: "～3年内",
      title: "スパイ防止法（仮）",
      detail: "重罰化＋クリアランス拡張",
      color: NAVY,
    },
    {
      year: "～5年内",
      title: "情報要員養成機関",
      detail: "省庁横断のスクール新設",
      color: GREEN,
    },
  ];
  return (
    <Card
      title="インテリジェンス改革の二段ロケット"
      subtitle="2026-2030 の段階導入"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.year}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[11px] font-bold tabular-nums w-16 shrink-0"
              style={{ color: i.color }}
            >
              {i.year}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-bold text-foreground">
                {i.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {i.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. International comparison ── */
export function NiaInternationalDiagram() {
  const rows = [
    {
      country: "米国",
      coordinator: "DNI",
      foreign: "CIA",
      sigint: "NSA",
      domestic: "FBI",
    },
    {
      country: "英国",
      coordinator: "JIC",
      foreign: "MI6",
      sigint: "GCHQ",
      domestic: "MI5",
    },
    {
      country: "日本（新）",
      coordinator: "NIC/NIA",
      foreign: "対外情報庁（'27～）",
      sigint: "防衛省情報本部",
      domestic: "公安調査庁/警察",
    },
  ];
  return (
    <Card
      title="米英 IC との比較 ― 日本の新体制の位置づけ"
      subtitle="日本版は分析・統合・防御中心"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2 font-bold">国</th>
              <th className="text-left py-2 px-2 font-bold">司令塔</th>
              <th className="text-left py-2 px-2 font-bold">対外</th>
              <th className="text-left py-2 px-2 font-bold">シギント</th>
              <th className="text-left py-2 px-2 font-bold">国内</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.country}
                className="border-t border-brief-border"
                style={
                  i === 2 ? { backgroundColor: `${POLITICS}0d` } : {}
                }
              >
                <td className="py-2 px-2 font-bold text-foreground">
                  {r.country}
                </td>
                <td className="py-2 px-2 text-foreground/70">{r.coordinator}</td>
                <td className="py-2 px-2 text-foreground/70">{r.foreign}</td>
                <td className="py-2 px-2 text-foreground/70">{r.sigint}</td>
                <td className="py-2 px-2 text-foreground/70">{r.domestic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ── 6. NIA vs NSC ── */
export function NiaVsNscDiagram() {
  return (
    <Card
      title="NSS／NSC と NIA／NIC の機能分担"
      subtitle="政策の司令塔 vs 情報の司令塔"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: NAVY }}
          >
            既存（2014年〜）
          </div>
          <div
            className="text-[14px] font-bold mt-1"
            style={{ color: NAVY }}
          >
            NSC ／ NSS
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            政策決定の司令塔。「何をするか」を決める。
          </div>
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
            新設（2026年〜）
          </div>
          <div
            className="text-[14px] font-bold mt-1"
            style={{ color: POLITICS }}
          >
            NIC ／ NIA
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            情報集約の司令塔。「何が起きているか」を統合分析。
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        谷内元NSS局長は「屋上屋」と批判。政府は「政策と情報は別の機能」と反論。
      </div>
    </Card>
  );
}

/* ── 7. Stakeholders ── */
export function NiaStakeholdersDiagram() {
  const groups = [
    {
      title: "経営者",
      detail: "クリアランス取得が政府受注の前提に",
      color: POLITICS,
    },
    {
      title: "投資家",
      detail: "防衛・サイバー銘柄に追い風",
      color: NAVY,
    },
    {
      title: "メディア",
      detail: "スパイ防止法と取材自由のバランス",
      color: GOLD,
    },
    {
      title: "市民",
      detail: "情報を扱う側への身辺調査強化",
      color: GREEN,
    },
  ];
  return (
    <Card title="国家情報局がステークホルダーにもたらす変化">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${g.color}0d` }}
          >
            <div
              className="text-[12px] font-bold"
              style={{ color: g.color }}
            >
              {g.title}
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              {g.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
