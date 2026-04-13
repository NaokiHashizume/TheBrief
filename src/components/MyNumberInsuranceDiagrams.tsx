"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   My Number Insurance Card — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const AMBER = "#d97706";
const PURPLE = "#7c3aed";

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

/* ── 1. Adoption Rate ── */
export function MynaAdoptionRateDiagram() {
  const data = [
    { month: "2025年4月", rate: 9.1 },
    { month: "2025年7月", rate: 12.3 },
    { month: "2025年10月", rate: 27.3 },
    { month: "2025年11月", rate: 49.5 },
    { month: "2025年12月", rate: 63.2 },
  ];
  const maxRate = 70;

  return (
    <Card
      title={
        <T
          ja="マイナ保険証 利用率の推移"
          en="My Number Insurance Card Usage Rate Trend"
        />
      }
      subtitle={
        <T
          ja="出典: 厚生労働省（2026年2月発表）"
          en="Source: Ministry of Health, Labour and Welfare (Feb 2026)"
        />
      }
    >
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.month} className="flex items-center gap-3">
            <div className="w-[90px] text-[11px] text-foreground/60 shrink-0 text-right">
              {d.month}
            </div>
            <div className="flex-1 h-7 rounded bg-foreground/[0.04] relative overflow-hidden">
              <div
                className="h-full rounded transition-all"
                style={{
                  width: `${(d.rate / maxRate) * 100}%`,
                  backgroundColor:
                    d.rate >= 60 ? GREEN : d.rate >= 30 ? AMBER : POLITICS,
                }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-bold text-foreground/70">
                {d.rate}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: POLITICS }}
          >
            <T ja="85歳以上" en="Age 85+" />
          </div>
          <div className="text-[22px] font-bold text-foreground mt-1">
            ~24%
          </div>
          <div className="text-[10px] text-foreground/50">
            <T
              ja="全国平均と約40pt差"
              en="~40pt gap from national average"
            />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: NAVY }}
          >
            <T ja="地域格差" en="Regional Gap" />
          </div>
          <div className="text-[22px] font-bold text-foreground mt-1">
            15pt+
          </div>
          <div className="text-[10px] text-foreground/50">
            <T ja="宮崎86.0% vs 沖縄70.7%" en="Miyazaki 86.0% vs Okinawa 70.7%" />
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 2. Trouble Statistics ── */
export function MynaTroubleStatsDiagram() {
  const troubles = [
    {
      label: "有効期限切れ",
      labelEn: "Expired certificates",
      pct: 31,
      count: "3,023",
    },
    {
      label: "資格情報が無効表示",
      labelEn: "Invalid qualification display",
      pct: 22,
      count: "—",
    },
    {
      label: "カードリーダー接続不良",
      labelEn: "Card reader connection failure",
      pct: 18,
      count: "—",
    },
    {
      label: "顔認証失敗",
      labelEn: "Facial recognition failure",
      pct: 14,
      count: "—",
    },
    {
      label: "保険資格未紐づけ",
      labelEn: "Unlinked insurance qualification",
      pct: 12,
      count: "—",
    },
  ];

  return (
    <Card
      title={
        <T
          ja="マイナ保険証トラブル — 医療機関調査結果"
          en="My Number Insurance Card Troubles — Medical Facility Survey"
        />
      }
      subtitle={
        <T
          ja="出典: 全国保険医団体連合会 調査（2025年, 回答9,741医療機関）"
          en="Source: National Federation of Health Insurance Associations (2025, 9,741 facilities)"
        />
      }
    >
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div
          className="p-3 rounded-lg text-center border"
          style={{
            borderColor: `${POLITICS}30`,
            backgroundColor: `${POLITICS}0a`,
          }}
        >
          <div className="text-[28px] font-bold" style={{ color: POLITICS }}>
            ~90%
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="トラブル経験あり" en="Experienced troubles" />
          </div>
        </div>
        <div
          className="p-3 rounded-lg text-center border"
          style={{
            borderColor: `${AMBER}30`,
            backgroundColor: `${AMBER}0a`,
          }}
        >
          <div className="text-[28px] font-bold" style={{ color: AMBER }}>
            12.7%
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="10割負担発生" en="Full payment required" />
          </div>
        </div>
        <div
          className="p-3 rounded-lg text-center border"
          style={{
            borderColor: `${NAVY}30`,
            backgroundColor: `${NAVY}0a`,
          }}
        >
          <div className="text-[28px] font-bold" style={{ color: NAVY }}>
            1,891
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="10割負担の件数" en="Full payment cases" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {troubles.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <div className="w-[140px] text-[11px] text-foreground/70 shrink-0">
              <T ja={t.label} en={t.labelEn} />
            </div>
            <div className="flex-1 h-5 rounded bg-foreground/[0.04] relative overflow-hidden">
              <div
                className="h-full rounded"
                style={{
                  width: `${(t.pct / 35) * 100}%`,
                  backgroundColor: `${POLITICS}aa`,
                }}
              />
            </div>
            <div className="w-10 text-[11px] font-bold text-foreground/70 text-right">
              {t.pct}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Comparison Table ── */
export function MynaComparisonDiagram() {
  const rows = [
    {
      item: "有効期限",
      myna: "電子証明書: 発行から5年",
      shikaku: "国保: 2026年7月末 / 社保: 3年",
      old: "1~2年（保険者による）",
    },
    {
      item: "顔写真",
      myna: "あり（顔認証に使用）",
      shikaku: "なし",
      old: "なし",
    },
    {
      item: "薬剤情報照会",
      myna: "可能",
      shikaku: "不可",
      old: "不可",
    },
    {
      item: "高額療養費の限度額適用",
      myna: "自動適用",
      shikaku: "別途申請が必要",
      old: "別途申請が必要",
    },
    {
      item: "紛失時のリスク",
      myna: "個人情報・暗証番号の漏洩",
      shikaku: "低い",
      old: "低い",
    },
    {
      item: "操作の難易度",
      myna: "顔認証 or 暗証番号入力",
      shikaku: "窓口に提示するだけ",
      old: "窓口に提示するだけ",
    },
  ];

  return (
    <Card
      title={
        <T
          ja="マイナ保険証 vs 資格確認書 vs 旧保険証 比較"
          en="My Number Card vs Qualification Certificate vs Old Card"
        />
      }
    >
      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-[11px]">
          <thead>
            <tr>
              <th className="text-left p-2 text-foreground/50 font-medium border-b border-brief-border">
                <T ja="項目" en="Item" />
              </th>
              <th
                className="text-left p-2 font-medium border-b"
                style={{
                  color: GREEN,
                  borderColor: `${GREEN}30`,
                }}
              >
                <T ja="マイナ保険証" en="My Number Card" />
              </th>
              <th
                className="text-left p-2 font-medium border-b"
                style={{
                  color: AMBER,
                  borderColor: `${AMBER}30`,
                }}
              >
                <T ja="資格確認書" en="Qualification Cert" />
              </th>
              <th className="text-left p-2 text-foreground/50 font-medium border-b border-brief-border">
                <T ja="旧保険証" en="Old Card" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.item}
                className="border-b border-brief-border last:border-0"
              >
                <td className="p-2 text-foreground/70 font-medium">
                  {r.item}
                </td>
                <td className="p-2 text-foreground/70">{r.myna}</td>
                <td className="p-2 text-foreground/70">{r.shikaku}</td>
                <td className="p-2 text-foreground/50">{r.old}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ── 4. Facility Readiness ── */
export function MynaFacilityReadinessDiagram() {
  return (
    <Card
      title={
        <T
          ja="医療機関のスマホ保険証対応状況"
          en="Medical Facility Readiness for Smartphone Insurance Card"
        />
      }
      subtitle={
        <T ja="2026年2月1日時点" en="As of February 1, 2026" />
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Smartphone ready */}
        <div className="relative p-5 rounded-xl border border-brief-border overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 transition-all"
            style={{
              height: "48.7%",
              backgroundColor: `${GREEN}15`,
            }}
          />
          <div className="relative">
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: GREEN }}
            >
              <T ja="スマホ保険証対応済" en="Smartphone Ready" />
            </div>
            <div className="text-[36px] font-bold text-foreground mt-2">
              48.7%
            </div>
            <div className="text-[11px] text-foreground/50 mt-1">
              <T
                ja="汎用カードリーダー導入済"
                en="Universal card reader installed"
              />
            </div>
          </div>
        </div>

        {/* Subsidy info */}
        <div className="space-y-3">
          <div
            className="p-4 rounded-lg border"
            style={{
              borderColor: `${AMBER}30`,
              backgroundColor: `${AMBER}08`,
            }}
          >
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: AMBER }}
            >
              <T ja="補助金" en="Subsidy" />
            </div>
            <div className="text-[18px] font-bold text-foreground mt-1">
              <T ja="最大7,000円" en="Up to 7,000 yen" />
            </div>
            <div className="text-[10px] text-foreground/50 mt-1">
              <T
                ja="機器購入費の50%（上限14,000円）"
                en="50% of equipment cost (max 14,000 yen)"
              />
            </div>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{
              borderColor: `${POLITICS}30`,
              backgroundColor: `${POLITICS}08`,
            }}
          >
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: POLITICS }}
            >
              <T ja="80歳以上のスマホ保有率" en="Smartphone ownership (80+)" />
            </div>
            <div className="text-[18px] font-bold text-foreground mt-1">
              ~40%
            </div>
            <div className="text-[10px] text-foreground/50 mt-1">
              <T
                ja="スマホ保険証の恩恵を受けられない層"
                en="Cannot benefit from smartphone insurance card"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Card Penetration ── */
export function MynaCardPenetrationDiagram() {
  const prefectures = [
    { name: "宮崎", rate: 86.0, color: GREEN },
    { name: "鹿児島", rate: 85.2, color: GREEN },
    { name: "秋田", rate: 84.8, color: GREEN },
    { name: "全国平均", rate: 81.2, color: NAVY },
    { name: "東京", rate: 79.5, color: AMBER },
    { name: "神奈川", rate: 79.1, color: AMBER },
    { name: "沖縄", rate: 70.7, color: POLITICS },
  ];

  return (
    <Card
      title={
        <T
          ja="マイナンバーカード保有率 — 地域差の実態"
          en="My Number Card Ownership Rate — Regional Disparities"
        />
      }
      subtitle={
        <T ja="2026年1月末時点" en="As of end of January 2026" />
      }
    >
      <div className="flex items-center justify-center mb-5">
        <div className="text-center">
          <div className="text-[42px] font-bold text-foreground">81.2%</div>
          <div className="text-[11px] text-foreground/50">
            <T ja="全国平均保有率" en="National average ownership rate" />
          </div>
          <div className="text-[11px] text-foreground/40 mt-1">
            <T ja="累計発行: 1億枚超" en="Cumulative: over 100 million cards" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {prefectures.map((p) => (
          <div key={p.name} className="flex items-center gap-3">
            <div
              className="w-[60px] text-[11px] shrink-0 text-right font-medium"
              style={{
                color:
                  p.name === "全国平均" ? NAVY : "var(--foreground-70, rgba(0,0,0,0.7))",
              }}
            >
              {p.name}
            </div>
            <div className="flex-1 h-6 rounded bg-foreground/[0.04] relative overflow-hidden">
              <div
                className="h-full rounded transition-all"
                style={{
                  width: `${((p.rate - 65) / 25) * 100}%`,
                  backgroundColor: `${p.color}cc`,
                }}
              />
            </div>
            <div
              className="w-14 text-[12px] font-bold text-right"
              style={{ color: p.color }}
            >
              {p.rate}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Vulnerable Groups ── */
export function MynaVulnerableDiagram() {
  const groups = [
    {
      group: "85歳以上の高齢者",
      groupEn: "Elderly (85+)",
      issue: "暗証番号管理・顔認証操作・カード携行が困難",
      icon: "👴",
    },
    {
      group: "認知症患者",
      groupEn: "Dementia patients",
      issue: "暗証番号の失念・カード紛失・本人確認不可",
      icon: "🧠",
    },
    {
      group: "障害のある方",
      groupEn: "People with disabilities",
      issue: "顔認証不通過・カードリーダー操作困難",
      icon: "♿",
    },
    {
      group: "DV被害者",
      groupEn: "DV survivors",
      issue: "住所秘匿の必要性とマイナカードの住民票紐づけ",
      icon: "🛡️",
    },
    {
      group: "在留外国人",
      groupEn: "Foreign residents",
      issue: "在留カードとの情報連携の齟齬",
      icon: "🌏",
    },
  ];

  return (
    <Card
      title={
        <T
          ja="デジタル化で取り残されるリスクのある層"
          en="Groups at Risk of Being Left Behind"
        />
      }
    >
      <div className="space-y-3">
        {groups.map((g) => (
          <div
            key={g.group}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
          >
            <div className="text-[20px] shrink-0 mt-0.5">{g.icon}</div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-foreground">
                <T ja={g.group} en={g.groupEn} />
              </div>
              <div className="text-[11px] text-foreground/60 mt-1">
                {g.issue}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70 text-center"
        style={{ backgroundColor: `${POLITICS}0a` }}
      >
        <T
          ja="利用率63%は「成功」ではなく、37%が取り残されている現実"
          en="63% usage is not 'success' — 37% are still left behind"
        />
      </div>
    </Card>
  );
}

/* ── 7. Roadmap Timeline ── */
export function MynaRoadmapDiagram() {
  const milestones = [
    {
      date: "2024年12月",
      event: "健康保険証の新規発行停止",
      status: "done" as const,
    },
    {
      date: "2025年9月",
      event: "スマホ保険証の運用開始",
      status: "done" as const,
    },
    {
      date: "2025年12月",
      event: "従来型保険証が原則無効化",
      status: "done" as const,
    },
    {
      date: "2026年7月",
      event: "特例措置終了 / 資格確認書の一律送付見直し",
      status: "current" as const,
    },
    {
      date: "2026年秋",
      event: "Androidスマホにマイナカード基本4情報搭載",
      status: "future" as const,
    },
    {
      date: "2026年度中",
      event: "公費負担医療の受給者証をマイナカード対応（全国拡大）",
      status: "future" as const,
    },
    {
      date: "2028年度",
      event: "次期マイナンバーカード導入（暗号刷新・デザイン一新）",
      status: "future" as const,
    },
  ];

  return (
    <Card
      title={
        <T
          ja="マイナ保険証・マイナンバーカード ロードマップ"
          en="My Number Insurance Card Roadmap"
        />
      }
    >
      <div className="relative pl-6">
        <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-foreground/[0.08]" />
        {milestones.map((m, i) => (
          <div key={i} className="relative flex items-start gap-4 pb-5 last:pb-0">
            <div
              className="absolute left-[-15px] top-[6px] w-[12px] h-[12px] rounded-full border-2"
              style={{
                borderColor:
                  m.status === "done"
                    ? GREEN
                    : m.status === "current"
                      ? AMBER
                      : `${PURPLE}60`,
                backgroundColor:
                  m.status === "done"
                    ? `${GREEN}30`
                    : m.status === "current"
                      ? `${AMBER}30`
                      : "transparent",
              }}
            />
            <div className="flex-1">
              <div
                className="text-[10px] font-bold tracking-wider"
                style={{
                  color:
                    m.status === "done"
                      ? GREEN
                      : m.status === "current"
                        ? AMBER
                        : `${PURPLE}99`,
                }}
              >
                {m.date}
              </div>
              <div
                className="text-[13px] font-medium mt-0.5"
                style={{
                  color:
                    m.status === "future"
                      ? "var(--foreground-50, rgba(0,0,0,0.5))"
                      : "var(--foreground, #000)",
                }}
              >
                {m.event}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
