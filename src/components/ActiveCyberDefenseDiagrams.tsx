"use client";

import { T } from "@/components/T";

/* --- Shared diagram wrapper --- */
function DiagramCard({
  label,
  labelEn,
  children,
}: {
  label: string;
  labelEn: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`Figure: ${label}`}>
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
          <T ja={label} en={labelEn} />
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

/* --- Small stat card --- */
function StatCard({
  value,
  label,
  labelEn,
  sub,
  subEn,
}: {
  value: string;
  label: string;
  labelEn: string;
  sub?: string;
  subEn?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium"><T ja={label} en={labelEn} /></div>
      {sub && subEn && (
        <div className="text-[9px] text-foreground/25 mt-0.5"><T ja={sub} en={subEn} /></div>
      )}
      {sub && !subEn && (
        <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   1. Stats Banner — Cyber Threat Scale
   ───────────────────────────────────────────── */
export function AcdStatsBannerDiagram() {
  return (
    <DiagramCard label="日本のサイバー脅威 2025年" labelEn="Japan Cyber Threat Landscape 2025">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="116件" label="ランサムウェア被害" labelEn="Ransomware Cases" sub="2025年上半期・過去最多" subEn="H1 2025, record high" />
        <StatCard value="119.6万" label="フィッシング報告" labelEn="Phishing Reports" sub="2025年上半期" subEn="H1 2025" />
        <StatCard value="32.0%" label="攻撃経験企業" labelEn="Companies Attacked" sub="帝国データバンク調査" subEn="TDB Survey 2025" />
        <StatCard value="36億円" label="KADOKAWA特損" labelEn="KADOKAWA Loss" sub="2024年6月攻撃" subEn="June 2024 attack" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   2. Legal Framework — Three Pillars
   ───────────────────────────────────────────── */
export function AcdLegalFrameworkDiagram() {
  const pillars = [
    {
      num: "01",
      title: "官民連携",
      titleEn: "Public-Private Partnership",
      items: [
        { ja: "15業種・約257社が対象", en: "15 sectors, ~257 companies" },
        { ja: "インシデント報告義務", en: "Incident reporting mandate" },
        { ja: "官民協議会の設置", en: "Joint council established" },
      ],
      color: "bg-blue-500/15 border-blue-500/25 text-blue-400/80",
    },
    {
      num: "02",
      title: "通信情報の利用",
      titleEn: "Communications Analysis",
      items: [
        { ja: "メタデータの事前分析", en: "Proactive metadata analysis" },
        { ja: "外国関連通信が中心", en: "Focus on foreign comms" },
        { ja: "監理委員会が承認", en: "Oversight commission approval" },
      ],
      color: "bg-amber-500/15 border-amber-500/25 text-amber-400/80",
    },
    {
      num: "03",
      title: "アクセス・無害化",
      titleEn: "Access & Neutralization",
      items: [
        { ja: "攻撃元サーバーへ侵入", en: "Penetrate attack servers" },
        { ja: "警察・自衛隊が実行", en: "Police & SDF execute" },
        { ja: "事前承認が原則必要", en: "Prior approval required" },
      ],
      color: "bg-red-500/15 border-red-500/25 text-red-400/80",
    },
  ];

  return (
    <DiagramCard label="能動的サイバー防御法の3本柱" labelEn="Three Pillars of Active Cyber Defense Act">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
        {pillars.map((p) => (
          <div key={p.num} className={`rounded-xl border p-4 ${p.color}`}>
            <div className="text-[10px] font-bold opacity-50 mb-1">{p.num}</div>
            <div className="text-[13px] font-bold mb-3">
              <T ja={p.title} en={p.titleEn} />
            </div>
            <div className="space-y-2">
              {p.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-50" />
                  <div className="text-[11px] text-foreground/55">
                    <T ja={item.ja} en={item.en} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span className="text-[10px] text-foreground/40 font-medium">
            <T ja="サイバー通信情報監理委員会が全体を監理" en="Cyber Communications Oversight Commission supervises all" />
          </span>
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   3. Response Flow — Attack Detection to Neutralization
   ───────────────────────────────────────────── */
export function AcdResponseFlowDiagram() {
  const steps = [
    { label: "攻撃検知", labelEn: "Detect Attack", sub: "通信情報の分析", subEn: "Comms analysis", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { label: "脅威評価", labelEn: "Assess Threat", sub: "国家 or 犯罪?", subEn: "State or criminal?", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "監理委承認", labelEn: "Commission Approval", sub: "事前承認が原則", subEn: "Prior approval rule", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { label: "実行判断", labelEn: "Execute Decision", sub: "警察 or 自衛隊", subEn: "Police or SDF", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { label: "無害化措置", labelEn: "Neutralize", sub: "攻撃元を無力化", subEn: "Disable attacker", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  ];

  return (
    <DiagramCard label="サイバー攻撃対応フロー" labelEn="Cyber Attack Response Flow">
      <div className="mt-3 space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#3b82f6]/60">
                  <path d={step.icon} />
                </svg>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-foreground/[0.06] mt-1" />
              )}
            </div>
            <div className="mb-3 flex-1 pt-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#3b82f6]/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[12px] font-semibold text-foreground/70">
                  <T ja={step.label} en={step.labelEn} />
                </span>
              </div>
              <div className="text-[10px] text-foreground/40 mt-0.5 ml-6">
                <T ja={step.sub} en={step.subEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2 justify-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-foreground/[0.06]" />
        <span className="text-[9px] text-foreground/25 font-medium">
          <T ja="緊急時は事後承認も可能" en="Post-hoc approval possible in emergencies" />
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-foreground/[0.06]" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   4. Constitutional Debate — Arguments For and Against
   ───────────────────────────────────────────── */
export function AcdConstitutionalDebateDiagram() {
  const proArgs = [
    { ja: "サイバー攻撃は国家安全保障上の脅威", en: "Cyberattacks threaten national security" },
    { ja: "公共の福祉による制限は合憲", en: "Restrictions for public welfare are constitutional" },
    { ja: "独立監理委員会が恣意性を防止", en: "Independent commission prevents arbitrary use" },
    { ja: "分析は外国関連通信に限定", en: "Analysis limited to foreign-related comms" },
  ];
  const conArgs = [
    { ja: "憲法21条2項の通信の秘密に抵触", en: "Conflicts with Art. 21-2 communications privacy" },
    { ja: "令状なし捜査は憲法35条違反", en: "Warrantless search violates Art. 35" },
    { ja: "監理委員会の独立性が不十分", en: "Commission independence insufficient" },
    { ja: "主権侵害リスクへの配慮不足", en: "Inadequate sovereignty risk mitigation" },
  ];

  return (
    <DiagramCard label="憲法論争マップ" labelEn="Constitutional Debate Map">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-4">
          <div className="text-[11px] font-bold text-green-400/70 mb-3 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
            <T ja="合憲論（政府）" en="Constitutional (Gov't)" />
          </div>
          <div className="space-y-2.5">
            {proArgs.map((arg, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-green-400/40 mt-1.5 flex-shrink-0" />
                <span className="text-[11px] text-foreground/55"><T ja={arg.ja} en={arg.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-4">
          <div className="text-[11px] font-bold text-red-400/70 mb-3 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            <T ja="違憲論（日弁連等）" en="Unconstitutional (JFBA etc.)" />
          </div>
          <div className="space-y-2.5">
            {conArgs.map((arg, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-red-400/40 mt-1.5 flex-shrink-0" />
                <span className="text-[11px] text-foreground/55"><T ja={arg.ja} en={arg.en} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-[9px] text-foreground/25">
        <T ja="附帯決議により施行後の運用検証が義務付けられている" en="Supplementary resolution mandates post-implementation review" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5. Global Comparison — Japan / US / UK
   ───────────────────────────────────────────── */
export function AcdGlobalComparisonDiagram() {
  const rows = [
    { item: "主要機関", itemEn: "Lead Agency", jp: "サイバー防衛隊 / 警察庁", jpEn: "Cyber Defense Unit / NPA", us: "USCYBERCOM / NSA", uk: "NCSC / NCF / NCA" },
    { item: "設立年", itemEn: "Established", jp: "2022年（防衛隊）", jpEn: "2022 (CDU)", us: "2009年", uk: "2016年 / 2020年" },
    { item: "人員規模", itemEn: "Personnel", jp: "約2,300人→4,000人", jpEn: "~2,300 → 4,000", us: "約6,200人", uk: "約3,500人" },
    { item: "法的根拠", itemEn: "Legal Basis", jp: "サイバー対処能力強化法", jpEn: "Cyber Response Act", us: "NDAA Sec.1642", uk: "ISA 2016 / NCA法" },
    { item: "攻撃的作戦", itemEn: "Offensive Ops", jp: "2026年10月から可能", jpEn: "From Oct 2026", us: "日常的に実施", uk: "NCFが統合運用" },
    { item: "監視機関", itemEn: "Oversight", jp: "監理委員会", jpEn: "Oversight Commission", us: "FISA裁判所", uk: "IPT / ISC" },
  ];

  return (
    <DiagramCard label="日米英サイバー防衛比較" labelEn="Japan-US-UK Cyber Defense Comparison">
      <div className="overflow-x-auto mt-3">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2 px-2 text-left w-[80px] tracking-wide">
                <T ja="項目" en="Item" />
              </th>
              <th className="text-[10px] text-red-400/60 font-semibold py-2 px-3 text-left tracking-wide">
                <T ja="日本" en="Japan" />
              </th>
              <th className="text-[10px] text-blue-400/60 font-semibold py-2 px-3 text-left tracking-wide">
                <T ja="米国" en="US" />
              </th>
              <th className="text-[10px] text-emerald-400/60 font-semibold py-2 px-3 text-left tracking-wide">
                <T ja="英国" en="UK" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-2.5 px-2 text-[10px] font-semibold text-foreground/40">
                  <T ja={row.item} en={row.itemEn} />
                </td>
                <td className="py-2.5 px-3 text-[11px] text-foreground/55">
                  <T ja={row.jp} en={row.jpEn} />
                </td>
                <td className="py-2.5 px-3 text-[11px] text-foreground/55">
                  {row.us}
                </td>
                <td className="py-2.5 px-3 text-[11px] text-foreground/55">
                  {row.uk}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center">
        <T ja="日本は法的枠組みでは追いついたが、運用実績では米英に大きな差がある" en="Japan has caught up in legal framework, but lags far behind US/UK in operational experience" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   6. Telecom Impact Matrix
   ───────────────────────────────────────────── */
export function AcdTelecomImpactDiagram() {
  const impacts = [
    { area: "通信情報提供", areaEn: "Comms Data Provision", impact: "高", impactEn: "High", desc: "メタデータの政府提供義務", descEn: "Govt metadata provision mandate", color: "bg-red-500/15 text-red-400/70" },
    { area: "報告体制", areaEn: "Reporting System", impact: "高", impactEn: "High", desc: "24/365の監視・報告フロー", descEn: "24/7 monitoring & reporting", color: "bg-red-500/15 text-red-400/70" },
    { area: "設備投資", areaEn: "CapEx", impact: "中〜高", impactEn: "Med-High", desc: "分析機器・データ保存設備", descEn: "Analysis equipment & storage", color: "bg-amber-500/15 text-amber-400/70" },
    { area: "人材確保", areaEn: "Talent", impact: "高", impactEn: "High", desc: "セキュリティ人材の争奪戦", descEn: "Security talent war", color: "bg-red-500/15 text-red-400/70" },
    { area: "顧客信頼", areaEn: "Customer Trust", impact: "中", impactEn: "Medium", desc: "プライバシー懸念への対応", descEn: "Privacy concern management", color: "bg-amber-500/15 text-amber-400/70" },
    { area: "料金転嫁", areaEn: "Price Pass-through", impact: "不明", impactEn: "Unknown", desc: "費用負担の規定が不明確", descEn: "Cost allocation unclear", color: "bg-foreground/[0.04] text-foreground/50" },
  ];

  return (
    <DiagramCard label="通信事業者への影響マトリクス" labelEn="Telecom Operator Impact Matrix">
      <div className="space-y-2 mt-3">
        {impacts.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-foreground/[0.01] border border-foreground/[0.03] px-3 py-2.5">
            <div className="w-[90px] flex-shrink-0">
              <div className="text-[11px] font-semibold text-foreground/60">
                <T ja={item.area} en={item.areaEn} />
              </div>
            </div>
            <div className={`px-2 py-0.5 rounded text-[10px] font-bold flex-shrink-0 ${item.color}`}>
              <T ja={item.impact} en={item.impactEn} />
            </div>
            <div className="text-[10px] text-foreground/40 flex-1">
              <T ja={item.desc} en={item.descEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center">
        <T ja="NTT・KDDI・ソフトバンクの大手3社が最前線に立つ" en="NTT, KDDI & SoftBank on the front line" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   7. Implementation Timeline
   ───────────────────────────────────────────── */
export function AcdTimelineDiagram() {
  const events = [
    { date: "2024.06", label: "有識者会議 提言", labelEn: "Expert Panel Proposal", desc: "能動的サイバー防御の制度化を提言", descEn: "Recommends institutionalization of ACD", color: "bg-foreground/[0.04] border-foreground/[0.06]" },
    { date: "2025.02", label: "法案 国会提出", labelEn: "Bill Submitted to Diet", desc: "サイバー対処能力強化法案・整備法案", descEn: "Cyber Response Enhancement & Preparation Bills", color: "bg-blue-500/15 border-blue-500/25" },
    { date: "2025.04", label: "衆議院 可決", labelEn: "House of Representatives Passes", desc: "衆院本会議で賛成多数で可決", descEn: "Passed by majority in lower house", color: "bg-blue-500/15 border-blue-500/25" },
    { date: "2025.05", label: "参議院 可決・成立", labelEn: "House of Councillors Passes", desc: "5月16日可決、5月23日公布", descEn: "Passed May 16, promulgated May 23", color: "bg-green-500/15 border-green-500/25" },
    { date: "2025.09", label: "基本方針 閣議決定", labelEn: "Basic Policy Cabinet Decision", desc: "施行に向けた基本方針を策定", descEn: "Basic policy for implementation", color: "bg-blue-500/15 border-blue-500/25" },
    { date: "2026.10", label: "法律 施行", labelEn: "Law Takes Effect", desc: "官民協議会・監理委員会が本格稼働", descEn: "Joint council & commission fully operational", color: "bg-red-500/15 border-red-500/25" },
    { date: "〜2031", label: "法律 見直し", labelEn: "Law Review", desc: "施行後5年以内に運用検証・改正", descEn: "Review & revise within 5 years", color: "bg-foreground/[0.04] border-foreground/[0.06]" },
  ];

  return (
    <DiagramCard label="能動的サイバー防御 実施スケジュール" labelEn="Active Cyber Defense Implementation Timeline">
      <div className="mt-3 space-y-0">
        {events.map((ev, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-[60px] text-right text-[10px] font-bold tabular-nums text-foreground/40 pt-2.5">{ev.date}</div>
            </div>
            <div className="flex flex-col items-center flex-shrink-0 mt-1">
              <div className={`w-2.5 h-2.5 rounded-full border-2 mt-1.5 ${ev.color}`} />
              {i < events.length - 1 && <div className="w-px h-full min-h-[20px] bg-foreground/[0.06] mt-0.5" />}
            </div>
            <div className={`mb-3 px-3 py-2 rounded-xl border flex-1 ${ev.color}`}>
              <div className="text-[12px] font-semibold text-foreground/70">
                <T ja={ev.label} en={ev.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/40 mt-0.5">
                <T ja={ev.desc} en={ev.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
