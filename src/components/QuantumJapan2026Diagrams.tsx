"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   1. QuantumJapanOverviewDiagram
   量子コンピュータのロードマップ（現在地と目標）
   ───────────────────────────────────────────── */
export function QuantumJapanOverviewDiagram() {
  const stats = [
    {
      value: "256",
      unit: "量子ビット",
      unitEn: "qubits",
      label: "富士通・理研 2025年達成",
      labelEn: "Fujitsu & RIKEN, achieved 2025",
      sub: "世界最大級 超伝導方式",
      subEn: "World-class superconducting",
      color: "#0ea5e9",
    },
    {
      value: "1,000",
      unit: "量子ビット",
      unitEn: "qubits",
      label: "富士通・理研 2026年目標",
      labelEn: "Fujitsu & RIKEN target 2026",
      sub: "誤り訂正対応世代へ",
      subEn: "Moving toward error correction",
      color: "#38bdf8",
    },
    {
      value: "1万+",
      unit: "量子ビット",
      unitEn: "qubits",
      label: "富士通 2030年度目標",
      labelEn: "Fujitsu target FY2030",
      sub: "実用的な量子計算へ",
      subEn: "Toward practical quantum computing",
      color: "#7dd3fc",
    },
    {
      value: "400億円+",
      valueEn: "¥40B+",
      unit: "累積政府投資",
      unitEn: "cumulative gov. investment",
      label: "量子技術関連 2025年度",
      labelEn: "Quantum tech-related, FY2025",
      sub: "METI・文科省・内閣府合計",
      subEn: "METI + MEXT + Cabinet Office",
      color: "#0284c7",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本の量子コンピュータ現状と目標"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本の量子コンピュータ 現在地と目標" en="Japan's Quantum Computing — Where We Stand" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="富士通・理研を軸とした超伝導量子コンピュータのロードマップ" en="Superconducting quantum computing roadmap centered on Fujitsu & RIKEN" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: s.color, backgroundColor: `${s.color}10` }}
          >
            <div
              className="text-2xl sm:text-3xl font-bold tabular-nums"
              style={{ color: s.color }}
            >
              <T ja={s.value} en={s.valueEn ?? s.value} />
            </div>
            <div className="text-[10px] font-bold mt-0.5" style={{ color: s.color }}>
              <T ja={s.unit} en={s.unitEn} />
            </div>
            <div className="text-[11px] font-semibold mt-1.5 text-foreground/80">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[9px] text-foreground/45 mt-0.5 leading-relaxed">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#0ea5e9]/[0.05] border border-[#0ea5e9]/15">
        <div className="text-[10px] font-bold text-[#0ea5e9]/80 mb-1">
          <T ja="2025年は「量子産業化元年」" en="2025 Declared Japan's 'Year One of Quantum Industrialization'" />
        </div>
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          <T
            ja="石破首相が宣言。2030年までに量子技術の国内利用者1,000万人、量子技術による生産額50兆円規模を目指す。"
            en="PM Ishiba's declaration targets 10 million domestic quantum technology users and ¥50 trillion in quantum-related production by 2030."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: 富士通・理研プレスリリース (2025-04-22)、内閣府統合イノベーション戦略2025" en="Source: Fujitsu/RIKEN press release (2025-04-22), Cabinet Office Integrated Innovation Strategy 2025" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. QuantumJapanPlayersDiagram
   国内外主要プレーヤー比較表
   ───────────────────────────────────────────── */
export function QuantumJapanPlayersDiagram() {
  const players = [
    {
      group: "日本 国内勢",
      groupEn: "Japan — Domestic",
      color: "#0ea5e9",
      items: [
        {
          name: "富士通 + 理研",
          tech: "超伝導方式",
          techEn: "Superconducting",
          status: "256量子ビット達成、2026年1,000量子ビット目標",
          statusEn: "256 qubits achieved; targeting 1,000 by 2026",
        },
        {
          name: "NEC",
          tech: "超伝導方式",
          techEn: "Superconducting",
          status: "量子アニーリングと量子ゲートの並行開発",
          statusEn: "Parallel development of quantum annealing and gate models",
        },
        {
          name: "大阪大学",
          tech: "超伝導・イオントラップ",
          techEn: "Superconducting / Ion trap",
          status: "純国産量子コンピュータを2025年大阪万博で公開",
          statusEn: "All-domestic quantum computer exhibited at Expo 2025",
        },
        {
          name: "NTT",
          tech: "光量子コンピュータ",
          techEn: "Photonic quantum",
          status: "IOWN構想と連携した光電融合量子計算",
          statusEn: "Photonic quantum computing integrated with IOWN vision",
        },
      ],
    },
    {
      group: "米国勢（日本と連携）",
      groupEn: "US Players (collaborating with Japan)",
      color: "#6366f1",
      items: [
        {
          name: "IBM",
          tech: "超伝導方式",
          techEn: "Superconducting",
          status: "東大・慶応と連携、日本研究機関向けQuantum Networkを提供",
          statusEn: "Partners with UTokyo & Keio; provides Quantum Network to Japanese institutions",
        },
        {
          name: "Google",
          tech: "超伝導方式",
          techEn: "Superconducting",
          status: "Willowチップで誤り訂正閾値を突破（2024年末）",
          statusEn: "Willow chip broke error correction threshold (end of 2024)",
        },
        {
          name: "IonQ",
          tech: "イオントラップ",
          techEn: "Trapped ion",
          status: "36量子ビットで医療機器シミュレーション12%高速化（2025年）",
          statusEn: "12% speedup over HPC for medical-device simulation with 36 qubits (2025)",
        },
      ],
    },
    {
      group: "中国勢",
      groupEn: "China",
      color: "#ef4444",
      items: [
        {
          name: "百度 / 阿里巴巴 / 国防科技大学",
          tech: "超伝導・光量子",
          techEn: "Superconducting / Photonic",
          status: "国家主導で急速拡大、詳細は非公開部分が多い",
          statusEn: "State-driven rapid expansion; much detail remains undisclosed",
        },
      ],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="量子コンピュータ 国内外主要プレーヤー比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="主要プレーヤー比較" en="Key Players Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="量子コンピュータ開発における国内外の主要企業・研究機関" en="Leading companies and institutions in quantum computing development" />
      </div>

      <div className="space-y-4">
        {players.map((g) => (
          <div
            key={g.group}
            className="rounded-lg overflow-hidden"
            style={{ border: `1px solid ${g.color}20` }}
          >
            <div
              className="px-4 py-2 text-[11px] font-bold"
              style={{ backgroundColor: `${g.color}15`, color: g.color }}
            >
              <T ja={g.group} en={g.groupEn} />
            </div>
            <div className="divide-y divide-foreground/[0.04]">
              {g.items.map((item) => (
                <div key={item.name} className="px-4 py-3 flex gap-3 flex-wrap sm:flex-nowrap">
                  <div className="w-full sm:w-40 flex-shrink-0">
                    <div className="text-[12px] font-semibold text-foreground/85">{item.name}</div>
                    <div
                      className="text-[9px] px-2 py-0.5 rounded-full inline-block mt-1 font-medium"
                      style={{ backgroundColor: `${g.color}15`, color: g.color }}
                    >
                      <T ja={item.tech} en={item.techEn} />
                    </div>
                  </div>
                  <div className="text-[11px] text-foreground/60 leading-relaxed">
                    <T ja={item.status} en={item.statusEn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社プレスリリース、METI量子産業室資料 (2025-2026)" en="Source: Company press releases, METI Quantum Industry Office documents (2025–2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. QuantumJapanInvestmentDiagram
   日本政府投資額の内訳と国際比較
   ───────────────────────────────────────────── */
export function QuantumJapanInvestmentDiagram() {
  const japanItems = [
    { label: "METI 量子コンピュータ産業化事業", labelEn: "METI Quantum Industrialization Program", amount: "1,009億円+", amountEn: "¥100.9B+", color: "#0ea5e9" },
    { label: "文科省 量子技術関連予算（令和7年度）", labelEn: "MEXT Quantum Budget (FY2025)", amount: "361億円", amountEn: "¥36.1B", color: "#38bdf8" },
    { label: "内閣府 量子技術イノベーション拠点", labelEn: "Cabinet Office Quantum Innovation Hubs", amount: "数十億円", amountEn: "Tens of billions yen", color: "#7dd3fc" },
  ];

  const international = [
    { country: "米国", countryEn: "USA", amount: "$3B+/年", amountEn: "$3B+/yr", note: "CHIPS法・NSF・DARPA等", noteEn: "CHIPS Act, NSF, DARPA etc.", pct: 100, color: "#6366f1" },
    { country: "中国", countryEn: "China", amount: "非公開（推定$15B+）", amountEn: "Undisclosed (est. $15B+)", note: "国家主導、複数省庁", noteEn: "State-led, multiple ministries", pct: 90, color: "#ef4444" },
    { country: "EU", countryEn: "EU", amount: "€1B（Flagship）", amountEn: "€1B (Flagship)", note: "量子フラッグシッププログラム", noteEn: "Quantum Flagship Program", pct: 60, color: "#10b981" },
    { country: "日本", countryEn: "Japan", amount: "約400億円+/年", amountEn: "~¥40B+/yr", note: "METI・文科省・内閣府合計", noteEn: "METI + MEXT + Cabinet Office", pct: 40, color: "#0ea5e9" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本政府の量子技術投資額と国際比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="投資規模 — 日本の内訳と国際比較" en="Investment Scale — Japan's Breakdown & International Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2025年度の主要量子技術投資（概算）" en="Key quantum technology investments in FY2025 (approximate)" />
      </div>

      <div className="mb-5">
        <div className="text-[11px] font-bold text-foreground/60 mb-3">
          <T ja="日本政府の主要項目" en="Japan Government Key Line Items" />
        </div>
        <div className="space-y-2">
          {japanItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between p-3 rounded-lg"
              style={{ borderLeft: `3px solid ${item.color}`, backgroundColor: `${item.color}08` }}
            >
              <div className="text-[11px] text-foreground/75 flex-1 mr-4">
                <T ja={item.label} en={item.labelEn} />
              </div>
              <div className="text-sm font-bold tabular-nums" style={{ color: item.color }}>
                <T ja={item.amount} en={item.amountEn} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[11px] font-bold text-foreground/60 mb-3">
          <T ja="国際比較（年間投資規模イメージ）" en="International Comparison (Annual Investment Scale)" />
        </div>
        <div className="space-y-3">
          {international.map((c) => (
            <div key={c.country}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[12px] font-semibold w-12">
                  <T ja={c.country} en={c.countryEn} />
                </span>
                <span className="text-[10px] font-bold tabular-nums" style={{ color: c.color }}>
                  <T ja={c.amount} en={c.amountEn} />
                </span>
                <span className="text-[9px] text-foreground/40">
                  <T ja={c.note} en={c.noteEn} />
                </span>
              </div>
              <div className="h-4 bg-foreground/[0.04] rounded overflow-hidden">
                <div
                  className="h-full rounded transition-all"
                  style={{ width: `${c.pct}%`, backgroundColor: c.color, opacity: 0.7 }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[9px] text-foreground/40">
          <T ja="※ バーは相対規模のイメージ。中国の正確な金額は非公開" en="* Bars represent relative scale. China's exact figure is not publicly disclosed." />
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: METI量子産業室 (2025-06)、文科省令和7年度予算資料、各国政府発表" en="Source: METI Quantum Industry Office (Jun 2025), MEXT FY2025 budget docs, government announcements" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. QuantumJapanUseCasesDiagram
   産業別応用ユースケース（実証中 vs 実用化済み）
   ───────────────────────────────────────────── */
export function QuantumJapanUseCasesDiagram() {
  const usecases = [
    {
      industry: "金融",
      industryEn: "Finance",
      icon: "¥",
      color: "#0ea5e9",
      piloting: ["ポートフォリオ最適化（三菱UFJ・野村HDが実証）", "デリバティブ価格計算の高速化", "リスクシミュレーションの精度向上"],
      pilotingEn: ["Portfolio optimization (MUFG & Nomura HD piloting)", "Derivative pricing speedup", "Improved risk simulation accuracy"],
      live: ["まだ本番稼働事例なし（2026年時点）"],
      liveEn: ["No production deployment yet (as of 2026)"],
    },
    {
      industry: "創薬・素材",
      industryEn: "Drug Discovery & Materials",
      icon: "⚗",
      color: "#10b981",
      piloting: ["分子シミュレーションによる候補化合物絞り込み", "触媒反応の量子化学計算", "素材設計の組み合わせ爆発問題"],
      pilotingEn: ["Candidate compound screening via molecular simulation", "Quantum chemistry for catalytic reactions", "Combinatorial explosion in materials design"],
      live: ["IonQによる医療機器シミュレーション（2025年、12%高速化確認）"],
      liveEn: ["IonQ medical device simulation (2025, confirmed 12% speedup vs HPC)"],
    },
    {
      industry: "物流・製造",
      industryEn: "Logistics & Manufacturing",
      icon: "⊛",
      color: "#f59e0b",
      piloting: ["配送経路最適化（量子アニーリング活用）", "工場スケジューリング問題", "サプライチェーンの在庫最適化"],
      pilotingEn: ["Delivery route optimization (quantum annealing)", "Factory scheduling problems", "Supply chain inventory optimization"],
      live: ["富士通のデジタルアニーラによる配送最適化（商用稼働中）"],
      liveEn: ["Fujitsu Digital Annealer for delivery optimization (commercially operational)"],
    },
    {
      industry: "エネルギー",
      industryEn: "Energy",
      icon: "⚡",
      color: "#8b5cf6",
      piloting: ["電力グリッド最適化", "核融合プラズマ制御シミュレーション", "太陽電池材料の量子計算探索"],
      pilotingEn: ["Power grid optimization", "Fusion plasma control simulation", "Quantum search for solar cell materials"],
      live: ["なし（研究・実証段階）"],
      liveEn: ["None (research and pilot phase only)"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="産業別量子コンピュータ応用ユースケース"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="産業別ユースケース" en="Industry Use Cases" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="実証中（Pilot）と実用化済み（Live）の区分で整理" en="Categorized by Pilot (in-progress) vs Live (commercially deployed)" />
      </div>

      <div className="flex gap-4 text-[9px] mb-4">
        <span className="flex items-center gap-1.5 text-foreground/50">
          <span className="w-3 h-3 rounded-sm bg-foreground/10 border border-foreground/20" />
          <T ja="実証中" en="Pilot" />
        </span>
        <span className="flex items-center gap-1.5 text-foreground/50">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#0ea5e9", opacity: 0.7 }} />
          <T ja="実用化済み" en="Live" />
        </span>
      </div>

      <div className="space-y-4">
        {usecases.map((u) => (
          <div
            key={u.industry}
            className="rounded-lg overflow-hidden"
            style={{ border: `1px solid ${u.color}20` }}
          >
            <div
              className="px-4 py-2 flex items-center gap-2 text-[12px] font-bold"
              style={{ backgroundColor: `${u.color}15`, color: u.color }}
            >
              <span className="text-base">{u.icon}</span>
              <T ja={u.industry} en={u.industryEn} />
            </div>
            <div className="p-3 grid sm:grid-cols-2 gap-3">
              <div>
                <div className="text-[9px] font-bold text-foreground/40 mb-1.5 tracking-wider uppercase">
                  <T ja="実証中" en="Pilot" />
                </div>
                <ul className="space-y-1">
                  {u.piloting.map((p, i) => (
                    <li key={i} className="text-[11px] text-foreground/65 flex gap-1.5">
                      <span className="text-foreground/25 flex-shrink-0">·</span>
                      <T ja={p} en={u.pilotingEn[i]} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="text-[9px] font-bold mb-1.5 tracking-wider uppercase"
                  style={{ color: u.color }}
                >
                  <T ja="実用化済み" en="Live" />
                </div>
                <ul className="space-y-1">
                  {u.live.map((l, i) => (
                    <li
                      key={i}
                      className="text-[11px] flex gap-1.5"
                      style={{ color: u.live[0].includes("なし") || u.live[0].includes("None") ? "#6b7280" : u.color }}
                    >
                      <span className="flex-shrink-0">·</span>
                      <T ja={l} en={u.liveEn[i]} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: METI量子産業室、各社発表、IonQ (2025)、富士通デジタルアニーラ事例" en="Source: METI Quantum Industry Office, company announcements, IonQ (2025), Fujitsu Digital Annealer cases" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. QuantumJapanGapDiagram
   日本 vs 米国 vs 中国の技術・応用ギャップ
   ───────────────────────────────────────────── */
export function QuantumJapanGapDiagram() {
  const dimensions = [
    {
      label: "量子ビット数（最大）",
      labelEn: "Max. qubit count",
      japan: 40,
      usa: 90,
      china: 70,
      japanNote: "256（富士通・理研）",
      japanNoteEn: "256 (Fujitsu/RIKEN)",
      usaNote: "1,000+（IBM Condor）",
      usaNoteEn: "1,000+ (IBM Condor)",
      chinaNote: "非公開（推定数百）",
      chinaNoteEn: "Undisclosed (est. hundreds)",
    },
    {
      label: "誤り訂正技術",
      labelEn: "Error correction",
      japan: 30,
      usa: 80,
      china: 50,
      japanNote: "研究段階",
      japanNoteEn: "Research phase",
      usaNote: "Willow等で閾値突破",
      usaNoteEn: "Willow crossed threshold",
      chinaNote: "部分的に実証",
      chinaNoteEn: "Partially demonstrated",
    },
    {
      label: "産業応用エコシステム",
      labelEn: "Industrial application ecosystem",
      japan: 25,
      usa: 85,
      china: 55,
      japanNote: "実証実験多数、実用化は限定的",
      japanNoteEn: "Many pilots, limited deployment",
      usaNote: "IBM・Google等が商用展開",
      usaNoteEn: "IBM/Google commercially deployed",
      chinaNote: "国内向けに急拡大中",
      chinaNoteEn: "Rapidly expanding domestically",
    },
    {
      label: "量子人材の厚み",
      labelEn: "Depth of quantum talent",
      japan: 20,
      usa: 90,
      china: 65,
      japanNote: "年間数十人規模の輩出",
      japanNoteEn: "Producing only dozens per year",
      usaNote: "大学・企業で数千人規模",
      usaNoteEn: "Thousands across academia & industry",
      chinaNote: "国家主導で急速育成",
      chinaNoteEn: "State-driven rapid cultivation",
    },
    {
      label: "スタートアップ数",
      labelEn: "Number of startups",
      japan: 15,
      usa: 95,
      china: 60,
      japanNote: "数社程度（Q-STAR等）",
      japanNoteEn: "Only a handful (Q-STAR etc.)",
      usaNote: "IonQ・Quantinuum等多数",
      usaNoteEn: "IonQ, Quantinuum, and many more",
      chinaNote: "国家系が中心",
      chinaNoteEn: "Mostly state-affiliated",
    },
  ];

  const bars = [
    { key: "japan", label: "日本", labelEn: "Japan", color: "#0ea5e9" },
    { key: "usa", label: "米国", labelEn: "USA", color: "#6366f1" },
    { key: "china", label: "中国", labelEn: "China", color: "#ef4444" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本・米国・中国の量子コンピュータ技術・応用ギャップ比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="技術・応用ギャップ比較" en="Technology & Application Gap Analysis" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="日本 vs 米国 vs 中国（相対評価、100=最高水準）" en="Japan vs USA vs China (relative scale, 100 = top tier)" />
      </div>

      <div className="flex gap-4 text-[9px] mb-5">
        {bars.map((b) => (
          <span key={b.key} className="flex items-center gap-1.5 text-foreground/60">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: b.color }} />
            <T ja={b.label} en={b.labelEn} />
          </span>
        ))}
      </div>

      <div className="space-y-5">
        {dimensions.map((d) => (
          <div key={d.label}>
            <div className="text-[12px] font-semibold mb-2">
              <T ja={d.label} en={d.labelEn} />
            </div>
            <div className="space-y-1.5">
              {bars.map((b) => {
                const score = d[b.key as keyof typeof d] as number;
                const note = d[`${b.key}Note` as keyof typeof d] as string;
                const noteEn = d[`${b.key}NoteEn` as keyof typeof d] as string;
                return (
                  <div key={b.key} className="flex items-center gap-2">
                    <div className="w-8 text-[9px] text-foreground/50 text-right flex-shrink-0">
                      <T ja={b.label} en={b.labelEn} />
                    </div>
                    <div className="flex-1 h-5 bg-foreground/[0.04] rounded overflow-hidden">
                      <div
                        className="h-full rounded flex items-center justify-end pr-1.5"
                        style={{ width: `${score}%`, backgroundColor: b.color, opacity: 0.75 }}
                      >
                        <span className="text-[9px] font-bold text-white">{score}</span>
                      </div>
                    </div>
                    <div className="text-[9px] text-foreground/40 w-40 hidden sm:block">
                      <T ja={note} en={noteEn} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#0ea5e9]/[0.05] border border-[#0ea5e9]/15">
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          <T
            ja="日本が負けているのは量子ビット数だけでなく、応用開発スピード・人材・スタートアップエコシステムの三重苦。政府投資額の多寡より、民間がどれだけ追随するかが今後の分岐点。"
            en="Japan's deficit isn't just qubit count — it's a triple deficit in application speed, talent, and startup ecosystem. The key question is how much the private sector follows government investment."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: 編集部独自分析（各社公開情報・政府資料を基に相対評価）" en="Source: Editorial analysis based on public company data and government documents (relative scale)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. QuantumJapanTimelineDiagram
   日本の量子技術ロードマップ（2026-2030）
   ───────────────────────────────────────────── */
export function QuantumJapanTimelineDiagram() {
  const milestones = [
    {
      year: "2025",
      label: "量子産業化元年",
      labelEn: "Year One of Quantum Industrialization",
      detail: "石破首相宣言。富士通・理研が256量子ビット達成。大阪万博で純国産量子コンピュータ公開。G7サミットで量子技術推進を共同声明に盛り込む。",
      detailEn: "PM Ishiba's declaration. Fujitsu/RIKEN achieve 256 qubits. All-domestic quantum computer shown at Expo 2025. G7 summit includes quantum tech in joint statement.",
      color: "#0ea5e9",
      status: "完了",
      statusEn: "Done",
    },
    {
      year: "2026",
      label: "1,000量子ビット & 大型実証",
      labelEn: "1,000 Qubits & Large-Scale Pilots",
      detail: "富士通・理研が1,000量子ビット目標。METI主導の産業ユースケース大型実証開始。G-QuAT（量子技術者育成）拡充。誤り訂正の実用化研究加速。",
      detailEn: "Fujitsu/RIKEN target 1,000 qubits. METI-led large-scale industry use case pilots begin. G-QuAT talent program expanded. Error correction R&D accelerates.",
      color: "#38bdf8",
      status: "進行中",
      statusEn: "In progress",
    },
    {
      year: "2027-2028",
      label: "誤り訂正実用化・エコシステム拡大",
      labelEn: "Error Correction & Ecosystem Expansion",
      detail: "論理量子ビットによる誤り訂正を実用レベルで実現。製薬・金融・製造分野で最初の商用量子優位を確認。国内量子スタートアップが20社超を目指す。",
      detailEn: "Error correction via logical qubits reaches practical levels. First commercial quantum advantage confirmed in pharma, finance, and manufacturing. Domestic quantum startups aim to exceed 20 companies.",
      color: "#7dd3fc",
      status: "目標",
      statusEn: "Target",
    },
    {
      year: "2029-2030",
      label: "汎用量子コンピュータへの前哨戦",
      labelEn: "Prelude to General-Purpose Quantum Computing",
      detail: "富士通が1万物理量子ビット目標。特定業務での量子優位が複数分野で定着。国内利用者1,000万人・生産額50兆円の目標達成可否が問われる。",
      detailEn: "Fujitsu targets 10,000 physical qubits. Quantum advantage in specific tasks established across multiple sectors. Whether Japan meets its 10M users / ¥50T production target will be clear.",
      color: "#0284c7",
      status: "目標",
      statusEn: "Target",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本の量子技術ロードマップ 2026-2030"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本の量子技術ロードマップ" en="Japan's Quantum Technology Roadmap" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2025〜2030年の主要マイルストーン" en="Key milestones from 2025 through 2030" />
      </div>

      <div className="space-y-2">
        {milestones.map((m, i) => (
          <div
            key={m.year}
            className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg"
            style={{ backgroundColor: `${m.color}08`, borderLeft: `3px solid ${m.color}` }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
              style={{ backgroundColor: m.color }}
            >
              {i + 1}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-bold" style={{ color: m.color }}>
                  {m.year}
                </span>
                <span className="text-[12px] font-semibold text-foreground/85">
                  <T ja={m.label} en={m.labelEn} />
                </span>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${m.color}20`, color: m.color }}
                >
                  <T ja={m.status} en={m.statusEn} />
                </span>
              </div>
              <div className="mt-1 text-[11px] text-foreground/60 leading-relaxed">
                <T ja={m.detail} en={m.detailEn} />
              </div>
            </div>
            {i < milestones.length - 1 && (
              <div className="absolute -bottom-2 left-7 text-foreground/20 text-xs z-10">↓</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 富士通・理研ロードマップ、内閣府統合イノベーション戦略2025、METI量子産業室" en="Source: Fujitsu/RIKEN roadmap, Cabinet Office Integrated Innovation Strategy 2025, METI Quantum Industry Office" />
      </div>
    </div>
  );
}
