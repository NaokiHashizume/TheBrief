"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Construction Robot BIM 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
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
      aria-label="建設DX・BIM・ロボット関連データ図"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${SLATE}aa` }}
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

/* ── 1. 人手不足の「正体」（construction-labor-shortage-reality） ── */
export function ConstructionLaborShortageRealityDiagram() {
  const data = [
    { label: "スキルと技術継承の断絶", labelEn: "Skill & tech succession breakdown", value: 41.3, color: RED },
    { label: "人数の不足", labelEn: "Insufficient headcount", value: 27.4, color: AMBER },
    { label: "生産性の低さ", labelEn: "Low productivity", value: 23.8, color: BLUE },
    { label: "その他", labelEn: "Other", value: 7.5, color: SLATE },
  ];

  return (
    <Card
      title={<T ja="建設業の「最も深刻な課題」（2026年調査）" en="'Most Serious Challenge' in Construction (2026 Survey)" />}
      subtitle={<T ja="人数の不足より「技術継承の断絶」が最大の問題——野原グループ調査" en="Tech succession breakdown outranks headcount shortage as the top problem — Nohara Group survey" />}
    >
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/70 w-36 shrink-0">
              <T ja={d.label} en={d.labelEn} />
            </div>
            <div className="flex-1 h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${(d.value / 41.3) * 100}%`,
                  backgroundColor: d.color,
                }}
              >
                <span className="text-[10px] font-bold text-white/90">{d.value}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="含意：採用を増やすだけでは解決しない。経験豊富な職人・施工管理者の「暗黙知」をデジタル化し、若い世代に継承できる仕組みこそが求められている"
          en="Implication: Hiring more people alone won't solve it. The need is to digitize the 'tacit knowledge' of experienced craftspeople and create systems to pass it on to younger workers"
        />
      </div>
    </Card>
  );
}

/* ── 2. 建設RXコンソーシアムの取り組み（construction-rx-consortium） ── */
export function ConstructionRxConsortiumDiagram() {
  const robots = [
    {
      name: "マシンガイダンス搭載掘削機",
      nameEn: "Machine guidance excavator",
      desc: "GPS・センサーで自動的に掘削深度・角度を制御。オペレーターの熟練度に依存しない施工精度を実現",
      descEn: "GPS and sensors auto-control excavation depth and angle — precision independent of operator skill",
      icon: "🦺",
    },
    {
      name: "内装ボード自動搬送ロボット",
      nameEn: "Interior board auto-transport robot",
      desc: "重量物を自動搬送し、鳶職の身体的負担を大幅に軽減。現場での転落・腰痛リスクを低減",
      descEn: "Auto-transports heavy materials, significantly reducing ironworkers' physical burden and fall/injury risk",
      icon: "🤖",
    },
    {
      name: "鉄骨溶接ロボット",
      nameEn: "Steel welding robot",
      desc: "精度と品質の均一化を実現。特に困難な上向き溶接を自動化し、熟練工依存を低減",
      descEn: "Uniform precision and quality. Automates overhead welding — the most difficult type — reducing skilled-worker dependency",
      icon: "⚙️",
    },
    {
      name: "配筋検査AIシステム",
      nameEn: "Rebar inspection AI system",
      desc: "カメラ画像で鉄筋の配置を自動検査。品質記録を自動生成し、検査時間を従来の1/3に短縮",
      descEn: "Auto-inspects rebar placement from camera images; auto-generates quality records, cutting inspection time by 2/3",
      icon: "📸",
    },
  ];

  return (
    <Card
      title={<T ja="建設RXコンソーシアム：4種ロボット協働施工（虎ノ門実証）" en="Construction RX Consortium: 4-Robot Collaborative Construction (Toranomon Demo)" />}
      subtitle={<T ja="鹿島・清水・竹中など大手16社が競合を超えて協力する業界横断コンソーシアムの成果" en="Results from the cross-industry consortium where 16 major firms including Kajima, Shimizu, and Takenaka collaborate across competitive lines" />}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {robots.map((r) => (
          <div
            key={r.name}
            className="p-4 rounded-xl border border-brief-border bg-foreground/[0.01]"
          >
            <div className="text-xl mb-2">{r.icon}</div>
            <div className="text-[13px] font-bold text-foreground mb-1">
              <T ja={r.name} en={r.nameEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={r.desc} en={r.descEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="注目：大林組・大成建設は不参加で独自開発路線を継続。「標準化vs.差別化」という業界の戦略的分岐が鮮明に"
          en="Notable: Obayashi and Taisei opted out to pursue proprietary development. The 'standardization vs. differentiation' strategic divide in the industry is sharpening"
        />
      </div>
    </Card>
  );
}

/* ── 3. BIM普及状況（construction-bim-adoption） ── */
export function ConstructionBimAdoptionDiagram() {
  const surveys = [
    {
      label: "施工BIMで「現場が改善する」",
      labelEn: "施工BIM 'improves the worksite'",
      prev: 30,
      current: 60,
      change: "+30pt",
    },
    {
      label: "「技術継承に役立つ」",
      labelEn: "'Useful for tech succession'",
      prev: null,
      current: 69.3,
      change: "新設問",
      changeEn: "New item",
    },
    {
      label: "「DXの効果が実感できる」",
      labelEn: "'DX benefits felt'",
      prev: 35,
      current: 58,
      change: "+23pt",
    },
    {
      label: "「BIM/CIMの課題が解消された」",
      labelEn: "'BIM/CIM barriers resolved'",
      prev: 18,
      current: 31,
      change: "+13pt",
    },
  ];

  return (
    <Card
      title={<T ja="BIM・DX効果の実感：建設従事者調査（2025年11月 野原グループ）" en="Perceived BIM/DX Impact: Construction Worker Survey (Nov 2025, Nohara Group)" />}
      subtitle={<T ja="「施工BIMで現場が改善する」回答者が前回調査の約30%から60%に倍増" en="'Construction BIM improves the worksite' responses doubled from ~30% to 60% compared to previous survey" />}
    >
      <div className="space-y-4">
        {surveys.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="text-[11px] text-foreground/70">
                <T ja={s.label} en={s.labelEn} />
              </div>
              <div
                className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
              >
                <T ja={s.change} en={s.changeEn ?? s.change} />
              </div>
            </div>
            <div className="flex gap-2">
              {s.prev !== null && (
                <div className="flex items-center gap-1 flex-1">
                  <div className="text-[10px] text-foreground/40 w-12 shrink-0"><T ja="前回" en="Previous" /></div>
                  <div className="flex-1 h-4 bg-foreground/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full opacity-50" style={{ width: `${s.prev}%`, backgroundColor: SLATE }} />
                  </div>
                  <div className="text-[10px] text-foreground/50 w-8 text-right">{s.prev}%</div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <div className="text-[10px] w-12 shrink-0" style={{ color: GREEN }}><T ja="今回" en="Current" /></div>
              <div className="flex-1 h-4 bg-foreground/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${s.current}%`, backgroundColor: GREEN }} />
              </div>
              <div className="text-[10px] font-bold w-10 text-right" style={{ color: GREEN }}>{s.current}%</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${BLUE}10` }}>
        <T
          ja="BIMによる技術継承の仕組み：3Dモデルで施工手順を「見える化」し、ベテランの「経験と勘」を若手でも実行可能なチェックリストに変換する"
          en="BIM's tech succession mechanism: 3D models 'visualize' construction procedures, converting veterans' 'experience and intuition' into checklists that less experienced workers can execute"
        />
      </div>
    </Card>
  );
}

/* ── 4. デジタル化格差（construction-digital-divide） ── */
export function ConstructionDigitalDivideDiagram() {
  const metrics = [
    { metric: "BIM活用率", metricEn: "BIM utilization", major: 78, sme: 12 },
    { metric: "ドローン測量", metricEn: "Drone surveying", major: 88, sme: 18 },
    { metric: "AI安全監視", metricEn: "AI safety monitoring", major: 65, sme: 8 },
    { metric: "クラウド図面共有", metricEn: "Cloud drawing sharing", major: 92, sme: 38 },
    { metric: "デジタル日報", metricEn: "Digital daily reports", major: 75, sme: 29 },
  ];

  return (
    <Card
      title={<T ja="建設DX活用率：大手5社 vs 中堅・中小（2026年）" en="Construction DX Utilization: Top-5 Contractors vs. Mid-Size/SMEs (2026)" />}
      subtitle={<T ja="あらゆる指標で40〜70ポイントの格差。都市部大手と地方中小の二重構造が固定化しつつある" en="40–70 point gaps across all metrics. A two-tier structure of urban majors vs. regional SMEs is hardening" />}
    >
      <div className="space-y-4">
        {metrics.map((m) => (
          <div key={m.metric}>
            <div className="text-[11px] text-foreground/60 mb-1.5">
              <T ja={m.metric} en={m.metricEn} />
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-[10px] w-20 shrink-0" style={{ color: BLUE }}>
                <T ja="大手5社" en="Top-5 firms" />
              </div>
              <div className="flex-1 h-4 bg-foreground/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.major}%`, backgroundColor: BLUE }} />
              </div>
              <div className="text-[10px] font-bold w-8 text-right" style={{ color: BLUE }}>{m.major}%</div>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="text-[10px] w-20 shrink-0" style={{ color: RED }}>
                <T ja="中堅・中小" en="Mid/SME" />
              </div>
              <div className="flex-1 h-4 bg-foreground/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.sme}%`, backgroundColor: RED }} />
              </div>
              <div className="text-[10px] font-bold w-8 text-right" style={{ color: RED }}>{m.sme}%</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="大手と中小の格差拡大の構造：①R&D投資額が100倍以上の差、②大手が指定するBIMソフトへの対応コスト、③DX専任人材が大手に集中"
          en="Widening gap drivers: ①100× R&D investment differential ②Cost of adapting to BIM software mandated by major contractors ③DX specialist talent concentrated at majors"
        />
      </div>
    </Card>
  );
}

/* ── 5. 採用・処遇改善の取り組み（construction-recruitment-reform） ── */
export function ConstructionRecruitmentReformDiagram() {
  const reforms = [
    {
      reform: "週休2日の確保",
      reformEn: "Securing two days off per week",
      detail: "大手元請けが「4週8休以上」を施主に求めるよう義務化。下請けへの普及が課題",
      detailEn: "Major prime contractors required to demand 4-week/8-day-off minimum from clients; diffusing to subcontractors remains a challenge",
      status: "大手：進捗中 / 中小：課題",
      statusEn: "Majors: in progress / SMEs: challenge",
      color: GREEN,
    },
    {
      reform: "技能者給与の改善",
      reformEn: "Skilled worker pay improvements",
      detail: "国交省が「建設技能者評価システム」を整備し経験・技能に見合った賃金体系を構築",
      detailEn: "MLIT developed a 'Construction Skill Evaluation System' to build compensation aligned with experience and skills",
      status: "制度整備済み・普及段階",
      statusEn: "System established; adoption phase",
      color: AMBER,
    },
    {
      reform: "外国人材の活用",
      reformEn: "Foreign worker utilization",
      detail: "2024年の制度改正で「育成就労」制度に移行。建設業は外国人材活用の主要分野",
      detailEn: "2024 reform transitioned to a 'Skill Development Employment' system; construction is a priority sector for foreign workers",
      status: "制度移行済み",
      statusEn: "System transition complete",
      color: BLUE,
    },
    {
      reform: "3K改善・安全強化",
      reformEn: "3K image reform & safety enhancement",
      detail: "AI安全監視・ウェアラブルセンサーで死亡事故削減。IoT活用で「ダーティ」イメージ払拭",
      detailEn: "AI safety monitoring and wearable sensors reduce fatalities. IoT use tackles the 'dirty' image",
      status: "継続的取り組み",
      statusEn: "Ongoing effort",
      color: PURPLE,
    },
  ];

  return (
    <Card
      title={<T ja="建設業の採用・処遇改善：主要施策（2024〜2026年）" en="Construction Industry Recruitment & Pay Reforms: Key Initiatives (2024–2026)" />}
      subtitle={<T ja="3K改善・賃上げ・制度改革の三本柱で「若者が選ぶ業界」への変革を目指す" en="Targeting transformation into an 'industry young people choose' via 3K improvement, wage hikes, and regulatory reform" />}
    >
      <div className="space-y-3">
        {reforms.map((r) => (
          <div
            key={r.reform}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: r.color, borderLeftWidth: "3px" }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[13px] font-bold text-foreground">
                <T ja={r.reform} en={r.reformEn} />
              </span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${r.color}15`, color: r.color }}
              >
                <T ja={r.status} en={r.statusEn} />
              </span>
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={r.detail} en={r.detailEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. 戦略的視点（construction-strategic-view） ── */
export function ConstructionStrategicViewDiagram() {
  const framework = [
    {
      approach: "代替的発想（旧来）",
      approachEn: "Substitution mindset (old)",
      desc: "ロボット・AIで人間を代替する。人手不足の「数の問題」を技術で埋める",
      descEn: "Replace humans with robots and AI. Fill the labor shortage 'numbers problem' with technology",
      outcome: "効率化はするが、技術の断絶は続く",
      outcomeEn: "Improves efficiency but does not prevent tech succession breakdown",
      icon: "⬇️",
      color: SLATE,
    },
    {
      approach: "増幅的発想（新しい視点）",
      approachEn: "Amplification mindset (new)",
      desc: "職人の知恵をデジタルで移植し、より多くの人間が活用できる形にする。「1人の知恵を1万人に届ける」",
      descEn: "Transplant craftsperson wisdom into digital form accessible to more people. 'Deliver one person's wisdom to 10,000'",
      outcome: "技術継承と生産性向上を同時に実現",
      outcomeEn: "Achieves both tech succession and productivity improvement simultaneously",
      icon: "⬆️",
      color: GREEN,
    },
  ];

  return (
    <Card
      title={<T ja="建設DXの本質的な問い：代替か増幅か" en="The Essential Question of Construction DX: Substitution or Amplification?" />}
      subtitle={<T ja="「ロボットが人間を代替する」ではなく「職人の知恵を民主化する」発想が建設の未来を切り開く" en="The key is not 'robots replacing humans' but 'democratizing craftsperson wisdom' — that's the vision that will open up construction's future" />}
    >
      <div className="space-y-4 mb-5">
        {framework.map((f) => (
          <div
            key={f.approach}
            className="p-4 rounded-xl border border-brief-border"
            style={{ backgroundColor: `${f.color}05` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{f.icon}</span>
              <span className="text-[13px] font-bold" style={{ color: f.color }}>
                <T ja={f.approach} en={f.approachEn} />
              </span>
            </div>
            <div className="text-[12px] text-foreground/70 mb-2">
              <T ja={f.desc} en={f.descEn} />
            </div>
            <div
              className="text-[11px] font-medium px-2 py-1 rounded"
              style={{ backgroundColor: `${f.color}15`, color: f.color }}
            >
              → <T ja={f.outcome} en={f.outcomeEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/65" style={{ backgroundColor: `${GREEN}10`, borderLeft: `3px solid ${GREEN}` }}>
        <T
          ja="建設RXコンソーシアムが示す方向性：個別企業の技術開発限界を超えるために「競合が協力する」業界横断の仕組みが必要。建設業の未来は技術の民主化と知の永続化にある"
          en="Direction shown by Construction RX Consortium: cross-industry frameworks where rivals collaborate are needed to transcend individual firm R&D limits. Construction's future lies in democratizing technology and perpetuating knowledge"
        />
      </div>
    </Card>
  );
}
