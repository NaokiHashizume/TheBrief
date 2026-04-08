"use client";

import { T } from "@/components/T";

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

/* ── 1. Why now ── */
export function NiaOverviewDiagram() {
  const reasons = [
    {
      label: "①",
      title: "中・露・北朝鮮の活動激化",
      titleEn: "Intensifying activity by China, Russia, and North Korea",
      detail: "情報司令塔の不在が顕在化",
      detailEn: "The lack of an intelligence command center has become glaring",
      color: POLITICS,
    },
    {
      label: "②",
      title: "経済安全保障",
      titleEn: "Economic security",
      detail: "技術窃取・経済スパイへの対応",
      detailEn: "Countering technology theft and economic espionage",
      color: GOLD,
    },
    {
      label: "③",
      title: "ファイブ・アイズ連携",
      titleEn: "Five Eyes partnership",
      detail: "米英の対等カウンターパート",
      detailEn: "Becoming an equal counterpart to US and UK agencies",
      color: NAVY,
    },
  ];
  return (
    <Card
      title={<T ja="なぜ今、国家情報局なのか ― 3つの背景" en="Why a National Intelligence Agency Now — 3 Drivers" />}
    >
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

/* ── 2. Current fragmented map ── */
export function NiaCurrentMapDiagram() {
  const orgs = [
    { name: "内閣情報調査室", nameEn: "Cabinet Intelligence and Research Office", parent: "内閣官房", parentEn: "Cabinet Secretariat", staff: "約400", color: POLITICS },
    { name: "公安調査庁", nameEn: "Public Security Intelligence Agency", parent: "法務省", parentEn: "Ministry of Justice", staff: "約1,700", color: NAVY },
    { name: "防衛省情報本部", nameEn: "Defense Intelligence Headquarters", parent: "防衛省", parentEn: "Ministry of Defense", staff: "約2,000+", color: "#0d9488" },
    { name: "外務省情報統括官組織", nameEn: "MOFA Intelligence and Analysis Service", parent: "外務省", parentEn: "Ministry of Foreign Affairs", staff: "約100", color: GOLD },
    { name: "警察庁外事情報部", nameEn: "NPA Foreign Affairs and Intelligence Dept.", parent: "警察庁", parentEn: "National Police Agency", staff: "非公表", color: "#7c3aed" },
  ];
  return (
    <Card
      title={<T ja="現在の日本のインテリジェンス体制" en="Japan's Current Intelligence Architecture" />}
      subtitle={<T ja="5つの省庁にバラバラ" en="Fragmented across 5 ministries" />}
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
                <T ja={o.name} en={o.nameEn} />
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                <T ja={o.parent} en={o.parentEn} />
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 tabular-nums">
              <T ja={`${o.staff}人`} en={`${o.staff} staff`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja="※統合的な「全体評価」を行う司令塔がない" en="* No overarching command center for integrated assessment" />
      </div>
    </Card>
  );
}

/* ── 3. NIA structure ── */
export function NiaStructureDiagram() {
  return (
    <Card
      title={<T ja="国家情報会議・国家情報局 の組織構造" en="National Intelligence Council (NIC) & National Intelligence Agency (NIA) — Structure" />}
      subtitle={<T ja="2026年7月発足予定" en="Planned launch: July 2026" />}
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
            <T ja="議長" en="CHAIR" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="内閣総理大臣" en="Prime Minister" />
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
            <T ja="国家情報会議（NIC） ― メンバー" en="National Intelligence Council (NIC) — Members" />
          </div>
          <div className="text-[11px] text-foreground/70 leading-relaxed">
            <T
              ja="内閣官房長官（副議長）／外務大臣／防衛大臣／警察庁長官／公安調査庁長官／防衛省情報本部長"
              en="Chief Cabinet Secretary (Vice-Chair) / Foreign Minister / Defense Minister / NPA Commissioner-General / PSIA Director-General / DIH Director-General"
            />
          </div>
        </div>
        <div className="text-center text-[18px] text-foreground/30">↓</div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}10` }}
        >
          <div className="text-[11px] font-bold" style={{ color: NAVY }}>
            <T ja="国家情報局（NIA） ― 事務局" en="National Intelligence Agency (NIA) — Secretariat" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            <T
              ja="局長（内閣情報官を改組）。情報提供要求権・横断調査命令権・同盟国IC窓口"
              en="Director-General (restructured from Cabinet Intelligence Officer). Powers: information request, cross-agency inquiry mandate, allied IC liaison"
            />
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
      titleEn: "NIA & NIC established",
      detail: "第1弾：内調を格上げ・統合",
      detailEn: "Phase 1: Cabinet intelligence office upgraded and integrated",
      color: POLITICS,
    },
    {
      year: "2027末",
      title: "対外情報庁（仮）",
      titleEn: "Foreign Intelligence Agency (tentative)",
      detail: "日本版MI6/CIA、HUMINT専門",
      detailEn: "Japan's MI6/CIA equivalent, dedicated to HUMINT",
      color: GOLD,
    },
    {
      year: "～3年内",
      title: "スパイ防止法（仮）",
      titleEn: "Counter-espionage law (tentative)",
      detail: "重罰化＋クリアランス拡張",
      detailEn: "Harsher penalties + expanded security clearance",
      color: NAVY,
    },
    {
      year: "～5年内",
      title: "情報要員養成機関",
      titleEn: "Intelligence personnel training institute",
      detail: "省庁横断のスクール新設",
      detailEn: "New cross-ministry intelligence school",
      color: GREEN,
    },
  ];
  return (
    <Card
      title={<T ja="インテリジェンス改革の二段ロケット" en="Intelligence Reform: A Two-Stage Rocket" />}
      subtitle={<T ja="2026-2030 の段階導入" en="Phased rollout 2026–2030" />}
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
                <T ja={i.title} en={i.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={i.detail} en={i.detailEn} />
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
      countryEn: "US",
      coordinator: "DNI",
      foreign: "CIA",
      sigint: "NSA",
      domestic: "FBI",
    },
    {
      country: "英国",
      countryEn: "UK",
      coordinator: "JIC",
      foreign: "MI6",
      sigint: "GCHQ",
      domestic: "MI5",
    },
    {
      country: "日本（新）",
      countryEn: "Japan (new)",
      coordinator: "NIC/NIA",
      foreign: "対外情報庁（'27～）",
      foreignEn: "Foreign Intel. Agency ('27–)",
      sigint: "防衛省情報本部",
      sigintEn: "Defense Intel. HQ",
      domestic: "公安調査庁/警察",
      domesticEn: "PSIA / Police",
    },
  ];
  return (
    <Card
      title={<T ja="米英 IC との比較 ― 日本の新体制の位置づけ" en="Comparison with US & UK Intelligence Communities" />}
      subtitle={<T ja="日本版は分析・統合・防御中心" en="Japan's model focuses on analysis, integration, and defense" />}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2 font-bold"><T ja="国" en="Country" /></th>
              <th className="text-left py-2 px-2 font-bold"><T ja="司令塔" en="Coordinator" /></th>
              <th className="text-left py-2 px-2 font-bold"><T ja="対外" en="Foreign" /></th>
              <th className="text-left py-2 px-2 font-bold"><T ja="シギント" en="SIGINT" /></th>
              <th className="text-left py-2 px-2 font-bold"><T ja="国内" en="Domestic" /></th>
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
                  <T ja={r.country} en={r.countryEn ?? r.country} />
                </td>
                <td className="py-2 px-2 text-foreground/70">{r.coordinator}</td>
                <td className="py-2 px-2 text-foreground/70">
                  {r.foreignEn ? <T ja={r.foreign} en={r.foreignEn} /> : r.foreign}
                </td>
                <td className="py-2 px-2 text-foreground/70">
                  {r.sigintEn ? <T ja={r.sigint} en={r.sigintEn} /> : r.sigint}
                </td>
                <td className="py-2 px-2 text-foreground/70">
                  {r.domesticEn ? <T ja={r.domestic} en={r.domesticEn} /> : r.domestic}
                </td>
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
      title={<T ja="NSS／NSC と NIA／NIC の機能分担" en="NSS/NSC vs. NIA/NIC — Division of Roles" />}
      subtitle={<T ja="政策の司令塔 vs 情報の司令塔" en="Policy command vs. intelligence command" />}
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
            <T ja="既存（2014年〜）" en="EXISTING (since 2014)" />
          </div>
          <div
            className="text-[14px] font-bold mt-1"
            style={{ color: NAVY }}
          >
            NSC ／ NSS
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T ja="政策決定の司令塔。「何をするか」を決める。" en="Policy decision command. Decides what to do." />
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
            <T ja="新設（2026年〜）" en="NEW (from 2026)" />
          </div>
          <div
            className="text-[14px] font-bold mt-1"
            style={{ color: POLITICS }}
          >
            NIC ／ NIA
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T ja="情報集約の司令塔。「何が起きているか」を統合分析。" en="Intelligence aggregation command. Integrates and analyzes what is happening." />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="谷内元NSS局長は「屋上屋」と批判。政府は「政策と情報は別の機能」と反論。"
          en="Former NSS Director-General Yachi called it a redundant layer. The government countered that policy and intelligence are distinct functions."
        />
      </div>
    </Card>
  );
}

/* ── 7. Stakeholders ── */
export function NiaStakeholdersDiagram() {
  const groups = [
    {
      title: "経営者",
      titleEn: "Business executives",
      detail: "クリアランス取得が政府受注の前提に",
      detailEn: "Security clearance set to become a prerequisite for government contracts",
      color: POLITICS,
    },
    {
      title: "投資家",
      titleEn: "Investors",
      detail: "防衛・サイバー銘柄に追い風",
      detailEn: "Tailwind for defense and cybersecurity stocks",
      color: NAVY,
    },
    {
      title: "メディア",
      titleEn: "Media",
      detail: "スパイ防止法と取材自由のバランス",
      detailEn: "Balancing counter-espionage law with press freedom",
      color: GOLD,
    },
    {
      title: "市民",
      titleEn: "Citizens",
      detail: "情報を扱う側への身辺調査強化",
      detailEn: "Stricter background checks for those handling sensitive information",
      color: GREEN,
    },
  ];
  return (
    <Card title={<T ja="国家情報局がステークホルダーにもたらす変化" en="What the NIA Means for Key Stakeholders" />}>
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
              <T ja={g.title} en={g.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              <T ja={g.detail} en={g.detailEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
