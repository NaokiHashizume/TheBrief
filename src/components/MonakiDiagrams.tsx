"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Monaki — Diagrams
   ──────────────────────────────────────────────────────────── */

const ACCENT = "#d946ef";
const PURPLE = "#7c3aed";
const PINK = "#ec4899";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const AMBER = "#d97706";

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
          style={{ color: `${ACCENT}cc` }}
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
export function MonakiOverviewDiagram() {
  const stats = [
    { label: "デビュー前SNS総再生数", labelEn: "Pre-debut total streams", value: "6億回+", valueEn: "600M+", color: ACCENT },
    { label: "TikTokフォロワー", labelEn: "TikTok followers", value: "120万人+", valueEn: "1.2M+", color: PURPLE },
    { label: "デビューシングル初週売上", labelEn: "Debut single 1st week", value: "TOP 10入り", valueEn: "Top 10", color: PINK },
    { label: "結成から活動開始まで", labelEn: "Formation to launch", value: "約6ヶ月", valueEn: "~6 months", color: BLUE },
    { label: "メンバー平均年齢", labelEn: "Avg. member age", value: "36歳", valueEn: "36 yrs", color: GREEN },
    { label: "Zeppツアー公演数", labelEn: "Zepp tour dates", value: "全国5都市", valueEn: "5 cities", color: AMBER },
  ];
  return (
    <Card
      title={<T ja="数字で見るモナキ — デビュー前から異例ずくめ" en="Monaki by the Numbers — Unprecedented Before Debut" />}
      subtitle={<T ja="2026年4月時点" en="As of April 2026" />}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 border border-brief-border"
            style={{ backgroundColor: `${s.color}08` }}
          >
            <div className="text-[11px] text-foreground/55 leading-snug mb-2">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div
              className="text-[22px] font-bold tabular-nums leading-none"
              style={{ color: s.color }}
            >
              <T ja={s.value} en={s.valueEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Members ── */
export function MonakiMembersDiagram() {
  const members = [
    {
      name: "北川大輔", nameEn: "Daisuke Kitagawa",
      role: "リーダー・ボーカル", roleEn: "Leader / Vocals",
      bg: "元劇団所属。10年間の下積み後、アパレル販売員を経て加入",
      bgEn: "Ex-theater troupe. Joined after 10 years of dues-paying + retail career",
      color: ACCENT,
    },
    {
      name: "宮本竜二", nameEn: "Ryuji Miyamoto",
      role: "ボーカル", roleEn: "Vocals",
      bg: "地方営業の歌手として活動。酒造会社勤務と並行しデビューの機会を待つ",
      bgEn: "Local touring singer. Awaited debut while working at a brewery",
      color: PURPLE,
    },
    {
      name: "田島颯太", nameEn: "Sota Tajima",
      role: "ボーカル・ダンス", roleEn: "Vocals / Dance",
      bg: "バックダンサー経験12年。振付師としての仕事も持ちながら加入",
      bgEn: "12 years as backup dancer / choreographer before joining",
      color: PINK,
    },
    {
      name: "松尾将之", nameEn: "Masayuki Matsuo",
      role: "ボーカル", roleEn: "Vocals",
      bg: "カラオケ大会グランプリ受賞歴3回。地元・静岡のイベント司会で生計",
      bgEn: "3-time karaoke grand prize winner; MC at local Shizuoka events",
      color: BLUE,
    },
  ];
  return (
    <Card
      title={<T ja="モナキ4人のプロフィール — 全員30代、全員「下積み組」" en="Monaki's Four Members — All 30s, All 'Seasoned Underdogs'" />}
    >
      <div className="space-y-3">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex gap-4 p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: m.color, borderLeftWidth: 3 }}
          >
            <div className="shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold text-white"
                style={{ backgroundColor: m.color }}
              >
                {m.name[0]}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
                <span className="font-bold text-[14px]">
                  <T ja={m.name} en={m.nameEn} />
                </span>
                <span
                  className="text-[10px] tracking-wide font-semibold"
                  style={{ color: m.color }}
                >
                  <T ja={m.role} en={m.roleEn} />
                </span>
              </div>
              <p className="text-[12px] text-foreground/60 leading-relaxed">
                <T ja={m.bg} en={m.bgEn} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. モナキ vs 純烈 ── */
export function MonakiVsJunretsuDiagram() {
  const rows = [
    {
      axis: "世代訴求", axisEn: "Target generation",
      monaki: "Z世代〜ミレニアル世代", monakiEn: "Gen Z – Millennials",
      junretsu: "主に50〜70代", junretsuEn: "Primarily 50–70s",
    },
    {
      axis: "主戦場", axisEn: "Primary arena",
      monaki: "TikTok・Spotify・YouTube Shorts", monakiEn: "TikTok / Spotify / YT Shorts",
      junretsu: "紅白・地上波・演歌番組", junretsuEn: "NHK Kohaku / terrestrial TV",
    },
    {
      axis: "メンバー経歴", axisEn: "Member background",
      monaki: "元俳優・ダンサー・営業職", monakiEn: "Ex-actors, dancers, salarymen",
      junretsu: "元ジャニーズ・歌手志望", junretsuEn: "Ex-Johnnies, aspiring singers",
    },
    {
      axis: "物語の核心", axisEn: "Core narrative",
      monaki: "30代の再出発・逆転劇", monakiEn: "30s comeback / underdog story",
      junretsu: "不遇時代を越えた絆", junretsuEn: "Bond forged through adversity",
    },
    {
      axis: "ビジネスモデル", axisEn: "Business model",
      monaki: "ストリーミング×ライブ収益", monakiEn: "Streaming × live revenue",
      junretsu: "カラオケ印税×テレビ露出", junretsuEn: "Karaoke royalties × TV exposure",
    },
  ];
  return (
    <Card
      title={<T ja="モナキ vs 純烈 — 「逆転歌謡」の二世代比較" en="Monaki vs Junretsu — Two-Gen Comparison of 'Comeback Pop'" />}
      subtitle={<T ja="どちらも「下積み」を売りにするが、戦略は真逆" en="Both sell their 'dues-paying' story — but strategies are opposites" />}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 pr-4 text-foreground/40 font-semibold text-[10px] uppercase tracking-wider w-[100px]">
                <T ja="比較軸" en="Axis" />
              </th>
              <th className="text-left py-2 pr-4 font-semibold" style={{ color: ACCENT }}>
                モナキ
              </th>
              <th className="text-left py-2 font-semibold" style={{ color: AMBER }}>
                純烈
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.axis} className="border-b border-brief-border/50">
                <td className="py-2.5 pr-4 text-foreground/45 text-[11px]">
                  <T ja={r.axis} en={r.axisEn} />
                </td>
                <td className="py-2.5 pr-4 text-foreground/75">
                  <T ja={r.monaki} en={r.monakiEn} />
                </td>
                <td className="py-2.5 text-foreground/75">
                  <T ja={r.junretsu} en={r.junretsuEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ── 4. SNS戦略フロー ── */
export function MonakiSnsStraegyDiagram() {
  const steps = [
    {
      step: "01", label: "TikTok 15秒ショート", labelEn: "TikTok 15-sec Short",
      desc: "「実は元俳優です」系の自己紹介リール。視聴者の「え？」を誘発",
      descEn: "'Actually I was an actor' intro reels. Triggers viewer curiosity",
      color: ACCENT,
    },
    {
      step: "02", label: "コメント欄でドラマ補完", labelEn: "Drama extended in comments",
      desc: "公式がコメント欄にメンバーのエピソードを追記。ファンがスレッド化",
      descEn: "Official account drops episode details in comments; fans threadify",
      color: PURPLE,
    },
    {
      step: "03", label: "Spotify プレイリスト入り", labelEn: "Spotify playlist placement",
      desc: "「ドライブ」「エモい」「昭和リバイバル」プレイリストへの自然流入",
      descEn: "Organic placement in 'Drive', 'Emo', 'Showa Revival' playlists",
      color: PINK,
    },
    {
      step: "04", label: "YouTube フルMV公開", labelEn: "YouTube full MV release",
      desc: "ショートで得たファンをフル視聴に誘導。収益化と回遊を同時実現",
      descEn: "Funnel short-form fans to full MV. Monetize + retain simultaneously",
      color: BLUE,
    },
    {
      step: "05", label: "ライブ告知でクロージング", labelEn: "Live announcement closes loop",
      desc: "SNS上での物語完結はZeppツアー購買へ直結。デジタル→リアル転換",
      descEn: "Story arc on SNS closes with Zepp tour sales. Digital → physical",
      color: GREEN,
    },
  ];
  return (
    <Card
      title={<T ja="モナキのSNS→ライブ転換ファネル" en="Monaki's SNS-to-Live Conversion Funnel" />}
      subtitle={<T ja="「物語」を段階的に開示し、ファンを購買層に育てる設計" en="Staged narrative disclosure → cultivates fans into buyers" />}
    >
      <div className="space-y-3">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-3 items-start">
            <div
              className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold mt-0.5"
              style={{ backgroundColor: s.color }}
            >
              {s.step}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[13px] mb-0.5">
                <T ja={s.label} en={s.labelEn} />
              </div>
              <div className="text-[12px] text-foreground/60 leading-relaxed">
                <T ja={s.desc} en={s.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. セカンドチャンス社会論 ── */
export function MonakiSocialContextDiagram() {
  const points = [
    {
      icon: "📉",
      label: "新卒一括採用の限界", labelEn: "End of new-grad hiring culture",
      body: "2024年以降、大手企業の中途採用比率が50%超に。30代の再出発が「普通」になりつつある",
      bodyEn: "Mid-career hires at major firms surpassed 50% from 2024. 30s restart is becoming 'normal'",
      color: ACCENT,
    },
    {
      icon: "🎤",
      label: "「頑張っている人」への共感消費", labelEn: "'Rooting for the underdog' consumption",
      body: "純烈・DA PUMP・三山ひろし等、復活・継続の物語を持つアーティストが繰り返しヒット",
      bodyEn: "Artists with comeback/perseverance stories (Junretsu, DA PUMP, etc.) repeatedly hit",
      color: PURPLE,
    },
    {
      icon: "📱",
      label: "TikTokが「人生背景」を可視化", labelEn: "TikTok makes 'life story' visible",
      body: "15秒で下積みエピソードを語れる媒体が登場。音楽より先に「人」が売れる時代",
      bodyEn: "15-sec medium to narrate backstory. The 'person' sells before the music does",
      color: PINK,
    },
    {
      icon: "💼",
      label: "副業・転職文化の浸透", labelEn: "Side gig & career-change culture",
      body: "「夢を捨てずに生きる」という選択肢が社会的に肯定されつつある2020年代の空気感",
      bodyEn: "2020s social mood: 'living without abandoning your dream' is increasingly affirmed",
      color: BLUE,
    },
  ];
  return (
    <Card
      title={<T ja="なぜ今モナキが刺さるのか — 社会背景4つのベクトル" en="Why Monaki Resonates Now — 4 Social Vectors" />}
      subtitle={<T ja="「セカンドチャンス社会」という追い風" en="Tailwind of the 'Second Chance Society'" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {points.map((p) => (
          <div
            key={p.label}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: p.color, borderTopWidth: 2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[18px]">{p.icon}</span>
              <span className="font-semibold text-[13px]">
                <T ja={p.label} en={p.labelEn} />
              </span>
            </div>
            <p className="text-[12px] text-foreground/60 leading-relaxed">
              <T ja={p.body} en={p.bodyEn} />
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. タイムライン ── */
export function MonakiTimelineDiagram() {
  const events = [
    { date: "2025年7月", dateEn: "Jul 2025", title: "グループ結成", titleEn: "Group formed", desc: "プロデューサーによるオーディション・メンバー確定", descEn: "Producer auditions; members decided", color: ACCENT },
    { date: "2025年8月", dateEn: "Aug 2025", title: "TikTok投稿開始", titleEn: "TikTok launch", desc: "「元◯◯です」シリーズ投稿。1本目が100万再生突破", descEn: "'Former ___' series starts. First post hits 1M plays", color: PURPLE },
    { date: "2025年10月", dateEn: "Oct 2025", title: "Spotifyプレイリスト入り", titleEn: "Spotify playlist placement", desc: "累計1億再生を突破。音楽ファン層への浸透が加速", descEn: "Cumulative 100M plays. Penetration into music fanbase accelerates", color: PINK },
    { date: "2025年12月", dateEn: "Dec 2025", title: "累計6億回再生", titleEn: "600M cumulative plays", desc: "デビュー前にも関わらず複数メディアが取り上げる", descEn: "Multiple media outlets feature them pre-debut", color: BLUE },
    { date: "2026年2月", dateEn: "Feb 2026", title: "メジャーデビュー", titleEn: "Major debut", desc: "シングル「逆転の旗を立てろ」リリース。初週TOP10入り", descEn: "Single '逆転の旗を立てろ' released. Top 10 first week", color: GREEN },
    { date: "2026年4月〜", dateEn: "Apr 2026–", title: "Zeppツアー開幕", titleEn: "Zepp tour opens", desc: "全国5都市を回る初ワンマンツアー。東京公演は即日完売", descEn: "First nationwide solo tour (5 cities). Tokyo sold out same day", color: AMBER },
  ];
  return (
    <Card
      title={<T ja="モナキ活動タイムライン" en="Monaki Activity Timeline" />}
      subtitle={<T ja="結成〜デビュー〜ツアーまでの軌跡" en="Formation → Debut → Tour" />}
    >
      <div className="relative pl-5">
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-brief-border" />
        <div className="space-y-5">
          {events.map((e) => (
            <div key={e.date} className="relative">
              <div
                className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-brief-card"
                style={{ backgroundColor: e.color }}
              />
              <div className="text-[10px] font-bold tabular-nums mb-0.5" style={{ color: e.color }}>
                <T ja={e.date} en={e.dateEn} />
              </div>
              <div className="font-semibold text-[13px] mb-0.5">
                <T ja={e.title} en={e.titleEn} />
              </div>
              <div className="text-[12px] text-foreground/60 leading-relaxed">
                <T ja={e.desc} en={e.descEn} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
