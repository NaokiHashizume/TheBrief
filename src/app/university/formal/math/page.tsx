import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "数学の基礎 — 講義ノート | University",
  description:
    "形式科学の中核である数学の基礎をレクチャー形式で解説。集合・論理から代数・解析・幾何・確率まで、大学初年度レベルの土台を一気に俯瞰します。",
  alternates: { canonical: "https://thebrief.info/university/formal/math" },
};

const ACCENT = "#6366f1";

type Section = {
  num: string;
  title: string;
  goal: string;
  body: { heading: string; text: string; example?: string }[];
  keyFormula?: { label: string; expr: string; note?: string };
};

const sections: Section[] = [
  {
    num: "01",
    title: "集合と論理 — すべての出発点",
    goal: "数学の言葉である「集合」と「論理結合子」を扱えるようになる。",
    body: [
      {
        heading: "集合とは",
        text: "集合とは、明確に区別できる対象（要素）の集まりです。要素 a が集合 A に属することを a ∈ A と書きます。代表的な集合に、自然数 ℕ、整数 ℤ、有理数 ℚ、実数 ℝ、複素数 ℂ があり、ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ という包含関係が成り立ちます。",
        example: "例: A = { x ∈ ℕ | x < 5 } = {0, 1, 2, 3, 4}",
      },
      {
        heading: "論理結合子と量化子",
        text: "「かつ ∧」「または ∨」「ならば →」「否定 ¬」を論理結合子、∀（任意の）∃（ある）を量化子と呼びます。命題 P → Q の対偶は ¬Q → ¬P で、両者は同値です。証明の基本パターン（直接証明・対偶証明・背理法）はすべてここに根拠を持ちます。",
      },
      {
        heading: "写像（関数）",
        text: "集合 A から集合 B への写像 f: A → B とは、A の各要素にちょうど1つの B の要素を対応させる規則のこと。単射（異なるものを異なるものへ）・全射（B 全体を覆う）・全単射（両方）の区別が後の代数・解析で重要になります。",
      },
    ],
    keyFormula: {
      label: "ド・モルガンの法則",
      expr: "¬(P ∧ Q) ≡ ¬P ∨ ¬Q,    ¬(P ∨ Q) ≡ ¬P ∧ ¬Q",
      note: "集合では (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ に対応する。",
    },
  },
  {
    num: "02",
    title: "代数 — 構造を抽象する",
    goal: "数や式を超えて「演算をもつ集合」という見方を身につける。",
    body: [
      {
        heading: "群・環・体",
        text: "ある集合に演算（足し算・掛け算など）が定義され、結合律・単位元・逆元といった条件を満たすとき、それを群といいます。さらに2つの演算が組み合わさった構造が環、割り算まで自由にできるものが体です。整数 ℤ は環、有理数 ℚ や実数 ℝ は体です。",
      },
      {
        heading: "ベクトル空間と線形写像",
        text: "体上のベクトル空間とは、足し算とスカラー倍ができる集合のこと。線形写像 f(ax + by) = a·f(x) + b·f(x) はベクトル空間の間の自然な対応で、行列で表現できます。固有値・固有ベクトルは「線形写像が伸ばすだけで方向を変えない軸」を捉える概念です。",
        example: "例: 2×2行列 A = [[2,1],[1,2]] の固有値は 1 と 3。",
      },
      {
        heading: "多項式と方程式",
        text: "1変数多項式 f(x) = aₙxⁿ + … + a₁x + a₀ の根を求めるのが代数方程式論の出発点。代数学の基本定理: 複素数係数の n 次多項式は重複を込めてちょうど n 個の複素数解を持つ。",
      },
    ],
    keyFormula: {
      label: "二項定理",
      expr: "(a + b)ⁿ = Σₖ₌₀ⁿ  C(n, k) · aⁿ⁻ᵏ · bᵏ",
      note: "C(n,k) は組合せの数。確率論や級数展開でも繰り返し現れる。",
    },
  },
  {
    num: "03",
    title: "解析 — 連続と極限の世界",
    goal: "極限・微分・積分の意味と道具を整理する。",
    body: [
      {
        heading: "極限の厳密な意味",
        text: "数列 {aₙ} が α に収束するとは、任意の ε > 0 に対して、ある N があって n ≥ N ならば |aₙ − α| < ε となることです。この ε–N 定義こそ大学数学の入口で、感覚的な「だんだん近づく」を厳密化します。",
      },
      {
        heading: "微分は瞬間の変化率",
        text: "関数 f(x) の点 x における微分係数は f'(x) = lim(h→0) [f(x+h) − f(x)] / h。物理では速度、経済では限界費用、機械学習では損失関数の勾配として現れます。",
        example: "例: f(x) = x² の導関数は f'(x) = 2x。",
      },
      {
        heading: "積分は和の極限",
        text: "リーマン積分は、関数 f(x) を細かい長方形で近似してその面積の極限として定義します。微分積分学の基本定理: F'(x) = f(x) のとき、∫ₐᵇ f(x) dx = F(b) − F(a)。微分と積分は逆操作の関係にある、という解析学の中心定理です。",
      },
    ],
    keyFormula: {
      label: "テイラー展開",
      expr: "f(x) = f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + … ",
      note: "なめらかな関数を、ある点のまわりで多項式に分解する道具。",
    },
  },
  {
    num: "04",
    title: "幾何 — 形と空間の言葉",
    goal: "ユークリッド幾何の枠を超え、距離・角度・連続のとらえ方を広げる。",
    body: [
      {
        heading: "ユークリッド幾何と座標",
        text: "平面・空間の点を座標で表すと、距離は √((x₁−x₂)² + (y₁−y₂)²) のように代数で書けます。ベクトルの内積 a·b = |a||b|cosθ は、角度を計算する基本道具です。",
      },
      {
        heading: "非ユークリッド幾何",
        text: "「平行線は1本だけ引ける」というユークリッドの第5公準を緩めると、球面幾何（線が交わる）や双曲幾何（線が無数にある）が現れます。一般相対性理論は時空がリーマン幾何で曲がっているという描像です。",
      },
      {
        heading: "位相幾何（トポロジー）",
        text: "長さや角度を忘れ、「連続変形で何が変わらないか」を調べる分野。コーヒーカップとドーナツが同じとされる有名な話は、穴の数（種数）という位相不変量だけを見ているからです。",
      },
    ],
    keyFormula: {
      label: "オイラーの多面体公式",
      expr: "V − E + F = 2",
      note: "凸多面体について、頂点 V・辺 E・面 F の関係。位相不変量の最初の例。",
    },
  },
  {
    num: "05",
    title: "確率と統計 — 不確実性の数学",
    goal: "確率モデル・期待値・推測統計の枠組みをつかむ。",
    body: [
      {
        heading: "確率空間",
        text: "標本空間 Ω、事象の集合 𝓕、確率測度 P の三つ組 (Ω, 𝓕, P) を確率空間と呼びます。サイコロであれば Ω = {1,…,6}、各事象に 1/6 が割り当てられます。",
      },
      {
        heading: "確率変数と期待値",
        text: "確率変数 X とは、Ω 上の関数で結果に数値を対応づけるもの。期待値 E[X] = Σ x · P(X = x) は「平均的な値」、分散 Var[X] = E[(X − E[X])²] は「ばらつき」を測ります。期待効用、リスク評価、機械学習の損失設計はすべてこの上に建ちます。",
      },
      {
        heading: "推測統計と仮説検定",
        text: "標本から母集団のパラメータを推定するのが推測統計。p 値とは「帰無仮説が正しいときに、これほど極端な結果が偶然得られる確率」。誤解されがちですが「仮説が正しい確率」ではありません。",
      },
    ],
    keyFormula: {
      label: "ベイズの定理",
      expr: "P(A | B) = P(B | A) · P(A) / P(B)",
      note: "観測 B を踏まえて仮説 A の確率を更新する。AIの推論にも直結する。",
    },
  },
  {
    num: "06",
    title: "離散数学と数論 — 計算機科学への橋",
    goal: "整数・組合せ・グラフが、現代の暗号・アルゴリズムの基礎であることを知る。",
    body: [
      {
        heading: "数論の基礎",
        text: "整数の割り算余り（mod n）の世界を扱うのが合同算術。たとえば 17 ≡ 2 (mod 5)。素数の分布、最大公約数、ユークリッド互除法など、紀元前から続くテーマが現代暗号に直結しています。",
      },
      {
        heading: "組合せ論",
        text: "n 個から k 個を選ぶ組合せ C(n, k)、順列 P(n, k)、包除原理、鳩の巣原理。アルゴリズムの計算量を見積もる際にも欠かせない道具立てです。",
      },
      {
        heading: "グラフ理論",
        text: "頂点と辺からなるグラフは、SNS・道路網・分子構造・コンパイラまで、あらゆるネットワーク的構造をモデル化します。最短経路（ダイクストラ法）、最小全域木、彩色、ネットワークフローなどが代表的問題。",
      },
    ],
    keyFormula: {
      label: "RSA暗号の核",
      expr: "M ≡ Cᵈ  (mod n),    n = p·q",
      note: "大きな素数の積 n を素因数分解する難しさが、現代の公開鍵暗号を支える。",
    },
  },
];

const readingList = [
  { title: "数学序説", author: "吉田洋一・赤攝也", note: "一冊で大学数学の地図が見える古典。" },
  { title: "解析入門 I・II", author: "杉浦光夫", note: "ε–δ から始まる本格派。読み切れば微分積分は揺るがない。" },
  { title: "線型代数入門", author: "齋藤正彦", note: "ベクトル空間・固有値の標準教科書。" },
  { title: "確率論", author: "伊藤清", note: "公理的確率論の基礎を、簡潔かつ厳密に。" },
];

export default function MathLecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
          { name: "形式科学", href: "/university/formal" },
          { name: "数学", href: "/university/formal/math" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/university" className="hover:text-foreground transition-colors">University</Link>
        <span>/</span>
        <Link href="/university/formal" className="hover:text-foreground transition-colors">形式科学</Link>
        <span>/</span>
        <span>数学</span>
      </div>

      {/* Cover */}
      <section
        className="rounded-[28px] border p-6 md:p-10"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}14, rgba(15,23,42,0.02))`,
        }}
      >
        <div
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: ACCENT,
            borderColor: `${ACCENT}33`,
            backgroundColor: `${ACCENT}12`,
          }}
        >
          Lecture Note · Mathematics 101
        </div>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          数学の基礎
          <br className="hidden sm:block" />
          <span className="text-foreground/60 text-2xl md:text-3xl">
            — 集合から確率まで、大学数学の地図を1講で
          </span>
        </h1>
        <p className="mt-5 max-w-3xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          本講では、形式科学の中核である数学の土台をレクチャー形式で俯瞰します。集合と論理から始め、代数・解析・幾何・確率・離散数学までを最短経路で結び、それぞれの分野が「なぜ存在し、何を可能にするのか」を講義ノート形式でまとめました。各章末の Key Formula は、その分野で最も繰り返し使う1本の式です。
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
            <div className="text-xl font-bold tabular-nums">90</div>
            <div className="text-[10px] uppercase tracking-[2px] text-foreground/45 mt-1">分・読了目安</div>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
            <div className="text-xl font-bold tabular-nums">{sections.length}</div>
            <div className="text-[10px] uppercase tracking-[2px] text-foreground/45 mt-1">講義セクション</div>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
            <div className="text-xl font-bold tabular-nums">6</div>
            <div className="text-[10px] uppercase tracking-[2px] text-foreground/45 mt-1">Key Formulas</div>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
            <div className="text-xl font-bold tabular-nums">大学1年</div>
            <div className="text-[10px] uppercase tracking-[2px] text-foreground/45 mt-1">対象レベル</div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="mt-10 rounded-[24px] border border-brief-border bg-brief-card p-5 md:p-6">
        <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
          Syllabus
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold">講義の流れ</h2>
        <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sections.map((s) => (
            <li key={s.num}>
              <a
                href={`#sec-${s.num}`}
                className="flex items-start gap-3 rounded-xl border border-foreground/[0.06] px-3 py-2.5 hover:border-foreground/20 transition-colors"
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold tabular-nums"
                  style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                >
                  {s.num}
                </span>
                <span className="text-[13px] font-medium text-foreground/80 leading-snug">
                  {s.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Sections */}
      <div className="mt-10 space-y-12">
        {sections.map((s) => (
          <section key={s.num} id={`sec-${s.num}`} className="scroll-mt-24">
            <div className="flex items-baseline gap-3">
              <span
                className="font-mono text-[11px] tracking-[2px] font-bold tabular-nums"
                style={{ color: ACCENT }}
              >
                LECTURE {s.num}
              </span>
              <span className="h-px flex-1" style={{ backgroundColor: `${ACCENT}33` }} />
            </div>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl font-bold">{s.title}</h2>
            <p className="mt-2 text-[13px] text-foreground/55 italic">
              <span className="font-semibold not-italic" style={{ color: ACCENT }}>到達目標 — </span>
              {s.goal}
            </p>

            <div className="mt-6 space-y-5">
              {s.body.map((b) => (
                <div key={b.heading}>
                  <h3 className="font-serif text-lg font-bold">{b.heading}</h3>
                  <p className="mt-2 text-[14px] leading-[1.85] text-foreground/75">{b.text}</p>
                  {b.example && (
                    <p
                      className="mt-2 rounded-lg border-l-2 px-3 py-2 text-[12.5px] font-mono text-foreground/65"
                      style={{
                        borderColor: ACCENT,
                        backgroundColor: `${ACCENT}08`,
                      }}
                    >
                      {b.example}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {s.keyFormula && (
              <figure
                className="mt-6 rounded-2xl border p-5"
                style={{
                  borderColor: `${ACCENT}33`,
                  background: `linear-gradient(135deg, ${ACCENT}10, rgba(15,23,42,0.02))`,
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-[2.8px]"
                  style={{ color: ACCENT }}
                >
                  Key Formula · {s.keyFormula.label}
                </div>
                <div className="mt-3 font-mono text-base md:text-lg text-foreground/85 break-words">
                  {s.keyFormula.expr}
                </div>
                {s.keyFormula.note && (
                  <div className="mt-2 text-[12px] text-foreground/55">{s.keyFormula.note}</div>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>

      {/* Recap */}
      <section
        className="mt-14 rounded-[28px] border p-6 md:p-8"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}10, rgba(15,23,42,0.02))`,
        }}
      >
        <div className="text-[10px] font-bold uppercase tracking-[2.8px]" style={{ color: ACCENT }}>
          Recap
        </div>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold">この講義の要点</h2>
        <ul className="mt-4 space-y-2 text-[14px] text-foreground/75 leading-relaxed">
          <li>・数学の言葉は「集合・論理・写像」。すべての分野はその上に建つ。</li>
          <li>・代数は構造を抽象化し、解析は連続と極限を扱い、幾何は空間の不変量を測る。</li>
          <li>・確率と統計は不確実性の数学であり、現代AI・経済学・実験科学の共通言語。</li>
          <li>・離散数学・数論は計算機科学と暗号の土台で、現代社会のインフラを支える。</li>
        </ul>
      </section>

      {/* Reading list */}
      <section className="mt-10 rounded-[24px] border border-brief-border bg-brief-card p-5 md:p-6">
        <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
          Further Reading
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold">次に読む本</h2>
        <ul className="mt-4 divide-y divide-foreground/[0.06]">
          {readingList.map((b) => (
            <li key={b.title} className="py-3">
              <div className="font-serif text-base font-bold">{b.title}</div>
              <div className="text-[12px] text-foreground/55 mt-0.5">
                {b.author} — {b.note}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/university/formal"
          className="inline-flex items-center gap-2 rounded-full border border-brief-border bg-brief-card px-4 py-2 text-xs uppercase tracking-[2px] text-foreground/55 hover:text-foreground transition-colors"
        >
          <span>←</span>
          <span>形式科学に戻る</span>
        </Link>
      </div>
    </div>
  );
}
