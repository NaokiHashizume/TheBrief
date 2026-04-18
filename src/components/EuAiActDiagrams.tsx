"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   EU AI Act Enforcement 2026 Diagrams
   ───────────────────────────────────────────── */

export function EuAiActTimelineDiagram() {
  const events = [
    {
      date: "2025-02-02",
      dateEn: "Feb 2, 2025",
      label: "禁止AIプラクティス施行",
      labelEn: "Prohibited AI Practices Enforced",
      desc: "感情認識・無差別顔認識等",
      descEn: "Emotion recognition, indiscriminate facial recognition, etc.",
      status: "done",
      color: "#94a3b8",
    },
    {
      date: "2025-08",
      dateEn: "Aug 2025",
      label: "GPAI（汎用AI）規制",
      labelEn: "GPAI (General-Purpose AI) Rules",
      desc: "基盤モデルへの透明性・リスク管理義務",
      descEn: "Transparency and risk management obligations for foundation models",
      status: "done",
      color: "#64748b",
    },
    {
      date: "2026-08-02",
      dateEn: "Aug 2, 2026",
      label: "高リスクAI全面施行",
      labelEn: "High-Risk AI Full Enforcement",
      desc: "雇用・与信・医療・教育等の適合性評価義務",
      descEn: "Conformity assessment required for employment, credit, medical, education AI",
      status: "current",
      color: "#ef4444",
    },
    {
      date: "2027-08+",
      dateEn: "Aug 2027+",
      label: "追加カテゴリ適用",
      labelEn: "Additional Category Application",
      desc: "特定の高リスクシステムへの段階的追加",
      descEn: "Phased additions for specific high-risk system categories",
      status: "upcoming",
      color: "#94a3b8",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="EU AI Act enforcement timeline"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="EU AI Act 施行タイムライン" en="EU AI Act Enforcement Timeline" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2025〜2027年の主要施行スケジュール" en="Key enforcement schedule 2025–2027" />
      </div>

      <div className="space-y-0">
        {events.map((e, i) => (
          <div
            key={e.date}
            className="relative pl-6 pb-4"
            style={{ borderLeft: `2px solid ${e.status === "current" ? e.color : e.color + "40"}` }}
          >
            <div
              className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2"
              style={{
                backgroundColor: e.status === "current" ? e.color : "transparent",
                borderColor: e.status === "current" ? e.color : e.color + "60",
              }}
            />
            <div className="text-[9px] text-foreground/40 mb-0.5">
              <T ja={e.date} en={e.dateEn} />
            </div>
            <div
              className="text-[12px] font-bold mb-0.5"
              style={{ color: e.status === "current" ? e.color : undefined }}
            >
              <T ja={e.label} en={e.labelEn} />
            </div>
            <div className="text-[10px] text-foreground/55">
              <T ja={e.desc} en={e.descEn} />
            </div>
            {e.status === "current" && (
              <div className="mt-1.5 inline-flex items-center gap-1.5 text-[8px] px-2 py-1 rounded-full bg-red-500/15 text-red-500 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <T ja="← 次のデッドライン" en="← Next deadline" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 p-3 rounded-lg bg-red-500/[0.06] border border-red-500/15">
        <div className="text-[10px] font-semibold text-red-500 mb-1">
          <T ja="制裁金（3段階）" en="Penalties (3 tiers)" />
        </div>
        <div className="space-y-1 text-[10px] text-foreground/60">
          <div><T ja="禁止行為: 最大3,500万€ または 年間売上7%" en="Prohibited acts: Up to €35M or 7% of global annual revenue" /></div>
          <div><T ja="義務違反: 最大1,500万€ または 3%" en="Obligation breach: Up to €15M or 3%" /></div>
          <div><T ja="虚偽情報: 最大750万€ または 1%" en="False information: Up to €7.5M or 1%" /></div>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: secureprivacy.ai / legalnodes.com / EU Official Journal (2026)" en="Source: secureprivacy.ai / legalnodes.com / EU Official Journal (2026)" />
      </div>
    </div>
  );
}

export function EuAiActRiskCategoriesDiagram() {
  const categories = [
    { level: "禁止", levelEn: "Prohibited", examples: "無差別顔認識・感情認識（職場等）", examplesEn: "Indiscriminate facial recognition, emotion recognition in workplaces", color: "#ef4444", bg: "#ef444410" },
    { level: "高リスク", levelEn: "High-Risk", examples: "採用AI・与信・医療診断・入試・司法", examplesEn: "Hiring AI, credit scoring, medical diagnosis, admissions, judiciary", color: "#f59e0b", bg: "#f59e0b10" },
    { level: "限定リスク", levelEn: "Limited Risk", examples: "チャットボット（透明性開示義務）", examplesEn: "Chatbots (transparency disclosure required)", color: "#3b82f6", bg: "#3b82f610" },
    { level: "最小リスク", levelEn: "Minimal Risk", examples: "スパムフィルター・AIゲーム", examplesEn: "Spam filters, AI in games", color: "#10b981", bg: "#10b98110" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="EU AI Act risk category classification"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="EU AI Act リスク分類" en="EU AI Act Risk Classification" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="「AIが何に使われるか」でリスクカテゴリが決まる" en="Risk category is determined by 'what the AI is used for'" />
      </div>

      <div className="space-y-2.5">
        {categories.map((c) => (
          <div
            key={c.level}
            className="p-3.5 rounded-lg"
            style={{ backgroundColor: c.bg, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <span className="text-[12px] font-bold" style={{ color: c.color }}>
                <T ja={c.level} en={c.levelEn} />
              </span>
            </div>
            <div className="text-[10px] text-foreground/60">
              <T ja={c.examples} en={c.examplesEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-2.5 rounded bg-foreground/[0.03] text-[10px] text-foreground/55 italic">
        <T
          ja="重要: 同じモデルでもコンテンツ生成→最小リスク、採用スクリーニング→高リスクに分類される"
          en="Key: The same model can be minimal risk for content generation but high risk for hiring screening"
        />
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: EU AI Act (Regulation 2024/1689) 公式テキスト" en="Source: EU AI Act (Regulation 2024/1689) official text" />
      </div>
    </div>
  );
}

export function EuAiActExtraterritorialDiagram() {
  const triggers = [
    {
      icon: "①",
      trigger: "EUユーザーへの影響",
      triggerEn: "Impact on EU users",
      example: "EU向けECの購買推薦AI",
      exampleEn: "Purchase recommendation AI for EU e-commerce",
      color: "#ef4444",
    },
    {
      icon: "②",
      trigger: "EU拠点取引先への提供",
      triggerEn: "Providing to EU-based partners",
      example: "EU企業への採用支援サービス",
      exampleEn: "Recruitment support services for EU companies",
      color: "#f59e0b",
    },
    {
      icon: "③",
      trigger: "日本生成・EU使用のAI出力",
      triggerEn: "AI output generated in Japan, used in EU",
      example: "EUの患者向け医療AIの診断出力",
      exampleEn: "Diagnostic output from medical AI for EU patients",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="EU AI Act extraterritorial application triggers"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="域外適用トリガー——日本企業が対象になる3つの条件" en="Extraterritorial Triggers — 3 Conditions That Apply to Japanese Companies" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="GDPRと同様の域外適用。「関係ない」と断言できる企業は少ない" en="Same extraterritorial reach as GDPR. Few companies can truly claim they're unaffected" />
      </div>

      <div className="space-y-3">
        {triggers.map((t) => (
          <div
            key={t.icon}
            className="flex gap-3 p-3.5 rounded-lg"
            style={{ backgroundColor: `${t.color}08`, borderLeft: `3px solid ${t.color}` }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
              style={{ backgroundColor: `${t.color}20`, color: t.color }}
            >
              {t.icon}
            </div>
            <div>
              <div className="text-[11px] font-bold text-foreground/80 mb-0.5">
                <T ja={t.trigger} en={t.triggerEn} />
              </div>
              <div className="text-[10px] text-foreground/50">
                <T ja={`例: ${t.example}`} en={`e.g., ${t.exampleEn}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-amber-500/[0.06] border border-amber-500/15">
        <div className="text-[10px] text-amber-500 font-semibold mb-1">
          <T ja="急務: AIシステムの棚卸し" en="Urgent: AI System Inventory" />
        </div>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="組織の過半数がAIシステムの体系的な目録を持たない（covasant.com）。まず自社のAI利用状況を把握することが第一歩。"
            en="Over half of organizations lack a systematic AI system inventory (covasant.com). The first step is understanding your own AI usage."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: fpf.org / covasant.com / EU AI Act 公式テキスト (2026)" en="Source: fpf.org / covasant.com / EU AI Act official text (2026)" />
      </div>
    </div>
  );
}

export function EuAiActJapanContrastDiagram() {
  const comparison = [
    {
      country: "EU",
      approach: "事前規制型",
      approachEn: "Pre-regulation",
      detail: "適合性評価・CE表示・EUデータベース登録を義務付け",
      detailEn: "Mandatory conformity assessment, CE marking, EU database registration",
      color: "#3b82f6",
      risk: "low",
    },
    {
      country: "韓国",
      approach: "域外適用あり基本法",
      approachEn: "Basic Act with extraterritorial reach",
      detail: "2026年1月施行「基本AI法」——リスクベース規制",
      detailEn: "AI Basic Act effective Jan 2026 — risk-based regulation",
      color: "#10b981",
      risk: "medium",
    },
    {
      country: "日本",
      approach: "イノベーション優先",
      approachEn: "Innovation-first",
      detail: "業界自主規制・事後対応型。AI推進法（2025年成立）",
      detailEn: "Industry self-regulation, post-hoc response. AI Promotion Act (2025)",
      color: "#f59e0b",
      risk: "high",
    },
    {
      country: "米国",
      approach: "自主規制主導",
      approachEn: "Voluntary compliance-led",
      detail: "行政命令ベース・各省庁ガイドライン・業界主導",
      detailEn: "Executive order-based, agency guidelines, industry-driven",
      color: "#94a3b8",
      risk: "medium",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="International AI regulation approach comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="AI規制アプローチ国際比較" en="International AI Regulation Approach Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="日本の「イノベーション優先」路線が抱える3つのリスク" en="3 risks of Japan's 'innovation-first' regulatory approach" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-3 text-foreground/40 font-semibold text-[10px] w-12">
                <T ja="国" en="Country" />
              </th>
              <th className="text-left py-2 px-2 text-foreground/40 font-semibold text-[10px]">
                <T ja="アプローチ" en="Approach" />
              </th>
              <th className="text-left py-2 pl-2 text-foreground/40 font-semibold text-[10px] hidden sm:table-cell">
                <T ja="概要" en="Overview" />
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((c) => (
              <tr key={c.country} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-2.5 pr-3">
                  <span className="font-bold" style={{ color: c.color }}>
                    {c.country}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-foreground/65">
                  <T ja={c.approach} en={c.approachEn} />
                </td>
                <td className="py-2.5 pl-2 text-foreground/50 text-[10px] hidden sm:table-cell">
                  <T ja={c.detail} en={c.detailEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-2">
        {["ブリュッセル効果", "韓国との格差拡大", "信頼性プレミアム喪失"].map((risk, i) => (
          <div key={risk} className="flex items-start gap-2 text-[10px] text-foreground/60">
            <span className="text-amber-500 font-bold flex-shrink-0">⚠{i + 1}</span>
            <T ja={risk} en={["Brussels Effect", "Growing gap with South Korea", "Loss of trustworthiness premium"][i]} />
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: EU官報 / 韓国科技部 / The Brief編集部分析 (2026-04)" en="Source: EU Official Journal / Korea MSIT / The Brief analysis (April 2026)" />
      </div>
    </div>
  );
}

export function EuAiActComplianceStepsDiagram() {
  const steps = [
    {
      step: "Step 1",
      title: "AIシステムの棚卸しと分類",
      titleEn: "AI System Inventory & Classification",
      tasks: ["全AIシステムをリスト化", "EU AI Actのリスク分類に照合", "HR・与信・医療・教育系を最優先"],
      tasksEn: ["List all AI systems", "Map to EU AI Act risk classification", "Prioritize HR, credit, medical, and education systems"],
      color: "#ef4444",
      urgency: "即時",
      urgencyEn: "Immediate",
    },
    {
      step: "Step 2",
      title: "高リスクシステムの適合性評価",
      titleEn: "Conformity Assessment for High-Risk Systems",
      tasks: ["技術文書の整備（設計・データ・指標）", "人間による監視体制の構築", "バイアス検査・精度テストの実施"],
      tasksEn: ["Prepare technical documentation (design, data, metrics)", "Build human oversight structure", "Conduct bias testing and accuracy testing"],
      color: "#f59e0b",
      urgency: "2026年6月まで",
      urgencyEn: "By June 2026",
    },
    {
      step: "Step 3",
      title: "内部ガバナンス体制の構築",
      titleEn: "Internal Governance Structure",
      tasks: ["変更管理・インシデント報告フロー整備", "EUデータベースへの登録手順確立", "EU域内担当者の指名（欧州拠点がある場合）"],
      tasksEn: ["Establish change management and incident reporting flows", "Set up EU database registration procedures", "Designate EU representative if applicable"],
      color: "#3b82f6",
      urgency: "2026年7月まで",
      urgencyEn: "By July 2026",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="EU AI Act compliance action steps"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="EU AI Act対応 3ステップアクション" en="3-Step EU AI Act Compliance Action Plan" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年8月2日デッドラインまでの企業向け実践ガイド" en="Practical guide for enterprises before the August 2, 2026 deadline" />
      </div>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="p-4 rounded-lg" style={{ backgroundColor: `${s.color}06`, borderLeft: `3px solid ${s.color}` }}>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
              <div>
                <div className="text-[9px] font-bold mb-0.5" style={{ color: s.color }}>
                  {s.step}
                </div>
                <div className="text-[12px] font-bold text-foreground/80">
                  <T ja={s.title} en={s.titleEn} />
                </div>
              </div>
              <span
                className="text-[8px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                style={{ backgroundColor: `${s.color}20`, color: s.color }}
              >
                <T ja={s.urgency} en={s.urgencyEn} />
              </span>
            </div>
            <ul className="space-y-1">
              {s.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[10px] text-foreground/60">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: s.color }}>▸</span>
                  <T ja={task} en={s.tasksEn[i]} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Baker Botts / tredence.com / EU AI Act 実装ガイド (2026)" en="Source: Baker Botts / tredence.com / EU AI Act implementation guide (2026)" />
      </div>
    </div>
  );
}

export function EuAiActStrategicViewDiagram() {
  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="EU AI Act strategic implications for Japanese companies"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="「ブリュッセル効果」——GDPRが証明した規制の世界標準化" en="The Brussels Effect — How GDPR Proved Regulation Becomes Global Standard" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="EU規制がグローバルデファクトになるまでのパス" en="Path from EU regulation to global de facto standard" />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        {[
          { label: "EU域内施行", labelEn: "EU internal enforcement", desc: "企業がEU基準に合わせて製品・サービスを調整", descEn: "Companies adjust products and services to EU standards", color: "#3b82f6" },
          { label: "グローバル展開企業の統一対応", labelEn: "Global companies apply uniform standard", desc: "地域別対応コストより全社EU基準採用が合理的", descEn: "Applying EU standards company-wide is more cost-efficient than regional variants", color: "#8b5cf6" },
          { label: "業界標準化", labelEn: "Industry standardization", desc: "取引先・調達基準にEU準拠が組み込まれる", descEn: "EU compliance gets embedded in vendor and procurement requirements", color: "#ef4444" },
        ].map((step, i) => (
          <div key={step.label}>
            <div className="flex gap-3 p-3 rounded-lg" style={{ backgroundColor: `${step.color}08`, borderLeft: `3px solid ${step.color}` }}>
              <span className="text-[11px] font-bold w-4 flex-shrink-0 mt-0.5" style={{ color: step.color }}>
                {i + 1}
              </span>
              <div>
                <div className="text-[11px] font-bold text-foreground/80">
                  <T ja={step.label} en={step.labelEn} />
                </div>
                <div className="text-[10px] text-foreground/55">
                  <T ja={step.desc} en={step.descEn} />
                </div>
              </div>
            </div>
            {i < 2 && (
              <div className="flex justify-center my-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/25">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-red-500/[0.06] border border-red-500/15">
        <div className="text-[10px] text-red-500 font-semibold mb-1">
          <T ja="特に注意が必要な日本の業種" en="Japanese Industries Requiring Extra Attention" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["HRテック", "Fintech", "医療AI"].map((sector) => (
            <span key={sector} className="text-[9px] px-2 py-0.5 rounded bg-red-500/15 text-red-500 font-semibold">
              {sector}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 / fpf.org (2026-04)" en="Source: The Brief editorial analysis / fpf.org (April 2026)" />
      </div>
    </div>
  );
}
