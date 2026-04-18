"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Japan Enterprise AI Adoption 2026 Diagrams
   ───────────────────────────────────────────── */

export function JapanAiInvestmentGapDiagram() {
  const stats = [
    { label: "生成AI業務利用率", labelEn: "Generative AI work usage", value: "55.2%", sub: "メール・議事録・資料作成", subEn: "Email, meeting notes, document creation", color: "#10b981" },
    { label: "完全展開済み企業", labelEn: "Fully deployed enterprises", value: "8%", sub: "企業全体として展開", subEn: "Company-wide deployment", color: "#ef4444" },
    { label: "PoC段階で停止", labelEn: "Stuck in PoC stage", value: "42%", sub: "概念実証から先に進まない", subEn: "Cannot move beyond proof of concept", color: "#f59e0b" },
  ];

  const countries = [
    { country: "米国", countryEn: "USA", rate: 73, color: "#3b82f6" },
    { country: "ドイツ", countryEn: "Germany", rate: 68, color: "#10b981" },
    { country: "世界平均", countryEn: "Global avg.", rate: 60, color: "#8b5cf6" },
    { country: "日本", countryEn: "Japan", rate: 51, color: "#ef4444" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan AI investment vs results gap diagram"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本のAI投資と実績の乖離" en="Japan's AI Investment vs Results Gap" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="55億ドル超の投資→完全展開わずか8%。BCG: 世界平均に大幅後れ" en="$5.5B+ investment → only 8% fully deployed. BCG: Far behind global average" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {stats.map((s) => (
          <div key={s.label} className="p-2.5 rounded-lg text-center" style={{ backgroundColor: `${s.color}08`, borderTop: `2px solid ${s.color}` }}>
            <div className="text-[20px] font-bold" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-[9px] text-foreground/50 mt-0.5">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[8px] text-foreground/35 mt-0.5">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="業務AI活用率 国際比較（BCG 2026）" en="AI Work Usage Rate — International Comparison (BCG 2026)" />
      </div>
      <div className="space-y-2">
        {countries.map((c) => (
          <div key={c.country}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-foreground/65">
                <T ja={c.country} en={c.countryEn} />
              </span>
              <span className="text-[10px] font-bold" style={{ color: c.color }}>
                {c.rate}%
              </span>
            </div>
            <div className="h-3 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${c.rate}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: IDC Japan / JIPDEC 2026年3月調査 / BCG Japan" en="Source: IDC Japan / JIPDEC March 2026 survey / BCG Japan" />
      </div>
    </div>
  );
}

export function JapanAiBarriersDiagram() {
  const barriers = [
    { barrier: "AI推進できる人材がいない", barrierEn: "No talent to lead AI initiatives", pct: 48.3, color: "#ef4444" },
    { barrier: "投資対効果が不明確", barrierEn: "Unclear ROI", pct: 38.7, color: "#f59e0b" },
    { barrier: "セキュリティ・情報漏洩リスク", barrierEn: "Security and data leak risks", pct: 36.2, color: "#f97316" },
    { barrier: "経営層のコミットメント不足", barrierEn: "Lack of management commitment", pct: 29.4, color: "#8b5cf6" },
    { barrier: "予算不足", barrierEn: "Budget constraints", pct: 22.1, color: "#3b82f6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan AI adoption barriers survey results"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="AI推進を阻む障壁ランキング（管理職1,008名調査）" en="AI Adoption Barriers Ranking (Survey of 1,008 Managers)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="最大障壁は「資金不足」ではなく「人材不足」" en="The biggest barrier is not 'budget' but 'talent shortage'" />
      </div>

      <div className="space-y-3">
        {barriers.map((b, i) => (
          <div key={b.barrier}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-foreground/30 w-4">{i + 1}.</span>
                <span className="text-[11px] text-foreground/70">
                  <T ja={b.barrier} en={b.barrierEn} />
                </span>
              </div>
              <span className="text-[11px] font-bold" style={{ color: b.color }}>
                {b.pct}%
              </span>
            </div>
            <div className="h-3 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${b.pct}%`, backgroundColor: b.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-red-500/[0.06] border border-red-500/15">
        <div className="text-[10px] text-red-500 font-semibold mb-1">
          <T ja="「管理職の壁」問題の本質" en="The 'Middle Management Wall' Root Cause" />
        </div>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="一般社員のAI活用意欲は高い。問題は課長・リーダー職のAIリテラシー不足。「ボトムでもトップでもなく、ミドルで詰まる」日本特有の構造。"
            en="Front-line workers are eager to use AI. The problem is AI literacy deficiency among managers and team leads — a uniquely Japanese 'clog in the middle' structure."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: commercepick.com 管理職調査 (2026)" en="Source: commercepick.com manager survey (2026)" />
      </div>
    </div>
  );
}

export function JapanAiTalentShortageDiagram() {
  const policies = [
    { policy: "リスキリング補助金拡充", policyEn: "Reskilling subsidy expansion", budget: "2,500億円規模", budgetEn: "~¥250B scale", timeline: "2026年度", timelineEn: "FY2026", color: "#10b981" },
    { policy: "AI・DS教育の大学必修化", policyEn: "AI/DS university curriculum mandate", budget: "カリキュラム改革", budgetEn: "Curriculum reform", timeline: "2026〜2028", timelineEn: "2026–2028", color: "#3b82f6" },
    { policy: "高度IT人材ビザ拡大", policyEn: "Skilled IT worker visa expansion", budget: "制度拡充", budgetEn: "Program expansion", timeline: "2026年度", timelineEn: "FY2026", color: "#8b5cf6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan IT talent shortage projection and policy response"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2030年 IT人材79万人不足——政府の対応策" en="2030: 790,000 IT Talent Shortage — Government Response" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="経産省推計。生成AI・LLM人材は特に深刻なセグメント" en="METI estimate. Generative AI / LLM talent is an especially acute shortage segment" />
      </div>

      <div className="mb-4 p-4 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center">
        <div className="text-[40px] font-bold text-red-500/80">79万人</div>
        <div className="text-[11px] text-foreground/50 mt-1">
          <T ja="2030年のIT人材不足予測（経産省）" en="2030 IT talent shortage projection (METI)" />
        </div>
        <div className="text-[10px] text-foreground/40 mt-0.5">
          <T ja="うち生成AI関連は最も深刻なセグメント" en="Generative AI talent is among the most acute segments" />
        </div>
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="政府の主要対策" en="Key Government Measures" />
      </div>
      <div className="space-y-2">
        {policies.map((p) => (
          <div key={p.policy} className="flex items-start gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
              style={{ backgroundColor: p.color }}
            />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <span className="text-[11px] font-semibold text-foreground/75">
                  <T ja={p.policy} en={p.policyEn} />
                </span>
                <span className="text-[9px] text-foreground/40">{p.timeline}</span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                <T ja={p.budget} en={p.budgetEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-2.5 rounded bg-amber-500/[0.06] border border-amber-500/15 text-[10px] text-foreground/55">
        <T
          ja="政策効果が現場に届くまで3〜5年。2026〜2028年の人材ギャップは既存のリスキリングで埋めるしかない。"
          en="Policy effects take 3–5 years to reach the front line. The 2026–2028 talent gap must be bridged through existing reskilling efforts."
        />
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: 経済産業省 DX推進指標 / OECD (2026)" en="Source: METI DX Promotion Index / OECD (2026)" />
      </div>
    </div>
  );
}

export function JapanAiSuccessCasesDiagram() {
  const cases = [
    { domain: "コールセンター", domainEn: "Call Center", result: "処理時間32%短縮", resultEn: "32% reduction in handling time", example: "通信大手", exampleEn: "Major telecom operator", color: "#10b981" },
    { domain: "製造業品質管理", domainEn: "Manufacturing QC", result: "不良品検出精度98.7%", resultEn: "98.7% defect detection accuracy", example: "自動車部品メーカー", exampleEn: "Auto parts manufacturer", color: "#3b82f6" },
    { domain: "法務・契約レビュー", domainEn: "Legal Review", result: "初期レビュー85%削減", resultEn: "85% reduction in initial review time", example: "大手商社", exampleEn: "Major trading company", color: "#f59e0b" },
    { domain: "HR採用", domainEn: "HR Recruitment", result: "JD生成・一次スクリーニング自動化", resultEn: "JD generation and first-screen automation", example: "リクルート・エージェント各社", exampleEn: "Recruit, staffing agencies", color: "#8b5cf6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japanese enterprise AI success cases by domain"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="成果事例——「業務特定型」実装が共通点" en="Success Cases — 'Task-Specific' Implementation Is the Common Thread" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="PwC Japan調査: 成果を上げた企業の85%が「特定の業務プロセスに集中」" en="PwC Japan survey: 85% of successful companies 'focused on specific business processes'" />
      </div>

      <div className="space-y-2.5">
        {cases.map((c) => (
          <div
            key={c.domain}
            className="p-3.5 rounded-lg"
            style={{ borderLeft: `3px solid ${c.color}`, backgroundColor: `${c.color}08` }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <div className="text-[11px] font-bold text-foreground/80">
                  <T ja={c.domain} en={c.domainEn} />
                </div>
                <div className="text-[9px] text-foreground/40 mt-0.5">
                  <T ja={c.example} en={c.exampleEn} />
                </div>
              </div>
              <div
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${c.color}20`, color: c.color }}
              >
                <T ja={c.result} en={c.resultEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-2.5 rounded bg-red-500/[0.04] border border-red-500/10 text-[10px] text-foreground/55">
        <T
          ja="失敗パターン：「AI基盤を全社導入したが活用方法が定まらない」——ツールから入るアプローチが最大の失敗要因。"
          en="Failure pattern: 'Company-wide AI platform deployed but no defined use cases' — leading with tools instead of use cases is the top failure driver."
        />
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: PwC Japan 生成AI活用調査 (2025〜2026)" en="Source: PwC Japan Generative AI Utilization Survey (2025–2026)" />
      </div>
    </div>
  );
}

export function JapanAiPocToScaleDiagram() {
  const conditions = [
    {
      num: "①",
      title: "データ品質の確保",
      titleEn: "Data Quality Assurance",
      desc: "紙・FAX・非構造化データのデジタル化コストが最大の隠れコスト",
      descEn: "Digitization costs for paper, fax, and unstructured data are the biggest hidden cost",
      color: "#ef4444",
    },
    {
      num: "②",
      title: "業務プロセスの再設計",
      titleEn: "Business Process Redesign",
      desc: "AIを追加するのではなく、業務フロー自体をシンプル化する「リデザイン思考」",
      descEn: "Not adding AI to existing processes, but simplifying workflows through 'redesign thinking'",
      color: "#f59e0b",
    },
    {
      num: "③",
      title: "継続的フィードバックループ",
      titleEn: "Continuous Feedback Loop",
      desc: "AI運用担当の配置。品質チェック・モデル更新・パラメータ調整を継続的に実施",
      descEn: "Assign an AI operations owner. Continuously conduct quality checks, model updates, and parameter tuning",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="PoC to production scale conditions for Japan enterprises"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="PoC→本番展開の壁を越える3条件" en="3 Conditions to Cross the PoC-to-Production Wall" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="PwC Japan: 「効果が期待を下回る」企業が増加傾向" en="PwC Japan: Growing trend of companies reporting results below expectations" />
      </div>

      <div className="mb-4 flex items-center justify-between p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06]">
        <div className="text-center">
          <div className="text-[14px] font-bold text-[#8b5cf6]">PoC</div>
          <div className="text-[9px] text-foreground/40 mt-0.5">
            <T ja="概念実証" en="Proof of Concept" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center gap-1 mx-3">
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="text-[9px] text-red-400 font-semibold px-1">
            <T ja="壁" en="Wall" />
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>
        <div className="text-center">
          <div className="text-[14px] font-bold text-[#10b981]">
            <T ja="本番" en="Production" />
          </div>
          <div className="text-[9px] text-foreground/40 mt-0.5">
            <T ja="全社展開" en="Company-wide" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {conditions.map((c) => (
          <div
            key={c.num}
            className="flex gap-3 p-3.5 rounded-lg"
            style={{ backgroundColor: `${c.color}07`, borderLeft: `3px solid ${c.color}` }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
              style={{ backgroundColor: `${c.color}20`, color: c.color }}
            >
              {c.num}
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground/80 mb-0.5">
                <T ja={c.title} en={c.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/55">
                <T ja={c.desc} en={c.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: PwC Japan / BCG Japan 生成AI活用調査 (2025〜2026)" en="Source: PwC Japan / BCG Japan Generative AI Surveys (2025–2026)" />
      </div>
    </div>
  );
}

export function JapanAiStrategicViewDiagram() {
  const companies = [
    { name: "リクルート", approach: "管理職向けAIリテラシー研修＋試行文化醸成", approachEn: "AI literacy training for managers + fostering trial culture", color: "#10b981" },
    { name: "富士通", approach: "全管理職へのAI活用ロールプレイ研修", approachEn: "AI application role-play training for all managers", color: "#3b82f6" },
    { name: "KDDI", approach: "失敗許容の「AIラボ」制度化", approachEn: "Institutionalized 'AI Lab' with failure tolerance", color: "#8b5cf6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan enterprise AI strategic view - middle management reskilling"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="「ミドルの壁」を突破した企業の共通解" en="Common Solution Among Companies That Broke Through the 'Middle Management Wall'" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="管理職へのAIリテラシー研修 × 失敗許容文化の組み合わせ" en="AI literacy training for managers × failure-tolerant culture" />
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2 text-center">
        {[
          { level: "経営層", levelEn: "C-Suite", ability: "「投資を増やせ」と指示できる", abilityEn: "Can instruct 'increase investment'", color: "#10b981" },
          { level: "管理職", levelEn: "Managers", ability: "判断基準を持てない", abilityEn: "Cannot form judgment criteria", color: "#ef4444" },
          { level: "現場社員", levelEn: "Front-line", ability: "「使いたい」と試行できる", abilityEn: "Can try and test tools", color: "#3b82f6" },
        ].map((l) => (
          <div
            key={l.level}
            className="p-2.5 rounded-lg"
            style={{ backgroundColor: `${l.color}08`, borderTop: `2px solid ${l.color}` }}
          >
            <div className="text-[11px] font-bold mb-1" style={{ color: l.color }}>
              <T ja={l.level} en={l.levelEn} />
            </div>
            <div className="text-[9px] text-foreground/55">
              <T ja={l.ability} en={l.abilityEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <div className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-semibold">
          <T ja="↑ ここを解決すると全社展開が加速" en="↑ Solving this accelerates company-wide deployment" />
        </div>
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="突破企業の具体的アプローチ" en="Specific Approaches from Successful Breakthroughs" />
      </div>
      <div className="space-y-2">
        {companies.map((c) => (
          <div
            key={c.name}
            className="flex items-start gap-3 p-3 rounded-lg"
            style={{ borderLeft: `3px solid ${c.color}`, backgroundColor: `${c.color}07` }}
          >
            <span className="text-[11px] font-bold flex-shrink-0" style={{ color: c.color }}>
              {c.name}
            </span>
            <span className="text-[10px] text-foreground/60">
              <T ja={c.approach} en={c.approachEn} />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.06] border border-[#8b5cf6]/15">
        <div className="text-[10px] text-[#8b5cf6] font-semibold mb-1">
          <T ja="2026年のAI競争の本質" en="The Core of 2026 AI Competition" />
        </div>
        <div className="text-[11px] text-foreground/65">
          <T
            ja="「どのAIを使うか」ではなく「誰がAI活用を意思決定できる組織か」が差別化要因になる。"
            en="The differentiator is not 'which AI to use' but 'whether the organization has people who can decide how to leverage AI.'"
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 / PwC Japan / BCG Japan (2026-04)" en="Source: The Brief editorial analysis / PwC Japan / BCG Japan (April 2026)" />
      </div>
    </div>
  );
}
