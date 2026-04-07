import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "経済学の基礎 — 市場・価格・マクロ経済を一気に理解する講義",
  description:
    "大学1〜2年で学ぶ経済学の入門講義。希少性、需要と供給、価格メカニズム、市場の失敗、GDPと物価、金融政策までを講義資料スタイルで体系的に解説します。",
  alternates: { canonical: "https://thebrief.info/university/social/economics" },
};

const ECONOMICS_COLOR = "#ef4444";

const chapters = [
  {
    id: "intro",
    number: "第1講",
    title: "経済学とは何か — 希少性と選択の学問",
    lead: "資源は有限、欲望は無限。この緊張関係から「選ぶ」という行為が生まれ、経済学が始まります。",
    body: [
      "経済学（Economics）は、限られた資源をどのように配分するかを研究する学問です。ここでの資源とは、お金だけでなく、時間、労働力、原材料、自然環境など、人々が望むものを生み出すために必要なすべてを含みます。",
      "古典派の経済学者ライオネル・ロビンズは、経済学を「目的と希少な手段との関係における人間行動を研究する科学」と定義しました。つまり、経済学の中心には常に『トレードオフ（あちらを立てればこちらが立たず）』という構造があります。",
      "経済学はしばしば2つの層に分けて議論されます。個人・企業・市場の行動を扱う『ミクロ経済学』と、国全体の経済活動を扱う『マクロ経済学』です。本講義では、まずミクロの土台を固め、その後マクロへと視点を広げていきます。",
    ],
    keyTerms: [
      { term: "希少性 (Scarcity)", desc: "欲望に対して資源が不足している状態。すべての選択の前提。" },
      { term: "機会費用 (Opportunity Cost)", desc: "ある選択をするために諦めた次善の選択肢の価値。" },
      { term: "インセンティブ (Incentive)", desc: "人や企業の行動を変える動機づけ。経済学の分析の中核。" },
    ],
  },
  {
    id: "demand-supply",
    number: "第2講",
    title: "需要と供給 — 価格はどう決まるのか",
    lead: "市場価格は魔法ではなく、買い手と売り手それぞれの意思決定が交わる点で決まります。",
    body: [
      "需要曲線は「価格が下がれば買いたい量が増える」という右下がりの関係を表します。一方、供給曲線は「価格が上がれば作って売りたい量が増える」という右上がりの関係を表します。",
      "この2本の曲線が交わる点が『均衡』であり、そこで成立する価格を『均衡価格』、数量を『均衡取引量』と呼びます。均衡では、買いたい人と売りたい人の量がちょうど一致しており、過剰も不足もありません。",
      "もし価格が均衡より高ければ、売れ残り（超過供給）が発生し、売り手は価格を下げるインセンティブを持ちます。逆に価格が低すぎれば、品切れ（超過需要）が起きて価格が上昇します。このように市場は、見えざる手を通じて自律的に均衡へ向かう傾向を持ちます。",
    ],
    keyTerms: [
      { term: "需要の価格弾力性", desc: "価格が1%変わったとき需要量が何%変化するか。必需品は小さく、贅沢品は大きい。" },
      { term: "均衡価格", desc: "需要量と供給量が一致する価格。市場が落ち着く点。" },
      { term: "見えざる手", desc: "アダム・スミスの比喩。個々の利己的行動が結果的に社会全体の利益につながる仕組み。" },
    ],
  },
  {
    id: "market-failure",
    number: "第3講",
    title: "市場の失敗 — 見えざる手が届かないところ",
    lead: "市場は万能ではありません。外部性や情報の非対称性など、放任では最適解にならない領域があります。",
    body: [
      "市場の失敗（Market Failure）は、市場メカニズムに任せるだけでは資源配分が社会的に最適にならない状況を指します。代表例は4つあります。",
      "第一に『外部性』。工場の排煙は第三者に被害を与えますが、そのコストは製品価格に反映されません。第二に『公共財』。国防や街灯は、多くの人が同時に利用でき、料金を払わない人を排除しにくいため、民間では供給されにくいのです。",
      "第三に『情報の非対称性』。中古車市場の有名な例（レモン市場）では、買い手は車の状態を知らず、売り手だけが知っています。結果として良い中古車が市場から消えていく『逆選択』が起こります。第四に『独占・寡占』。競争が働かない市場では、価格が高止まりし、供給量が過少になります。",
      "これらに対処するために、政府は課税、補助金、規制、情報開示義務、独占禁止法などの政策ツールを用います。ここがマクロ経済学と公共経済学の接点になります。",
    ],
    keyTerms: [
      { term: "外部性 (Externality)", desc: "取引当事者以外に及ぶ便益や費用。公害は負の外部性、教育は正の外部性。" },
      { term: "公共財", desc: "非競合的かつ非排除的な財。国防、灯台、一般道路など。" },
      { term: "逆選択", desc: "情報非対称下で質の悪いものばかりが市場に残る現象。" },
    ],
  },
  {
    id: "macro",
    number: "第4講",
    title: "マクロ経済学入門 — GDP・インフレ・失業率",
    lead: "一国の経済の大きさと体温を測るための3つの指標を押さえましょう。",
    body: [
      "GDP（国内総生産）は、一定期間内に国内で生産された財・サービスの付加価値の合計です。経済の『サイズ』と『勢い』を測る最も基本的な指標であり、『生産＝支出＝分配』という三面等価の原則で理解されます。",
      "物価水準の変化はインフレ率として測定されます。消費者物価指数（CPI）やGDPデフレーターがその代表で、インフレが緩やかであれば経済は健全、急激に進むと生活が圧迫され、逆にデフレが続くと消費と投資が冷え込みます。",
      "失業率は労働市場の緊張度を表す指標です。景気が良いとき失業率は下がり、悪くなると上昇します。オークンの法則は、GDP成長率と失業率の変化の間に一定の関係があることを示しました。",
      "マクロ経済学の主要な目標は、これら3指標を安定させること。すなわち、持続的な成長、安定した物価、低い失業率の3つを同時に達成することです。",
    ],
    keyTerms: [
      { term: "名目GDPと実質GDP", desc: "名目は当期価格、実質は物価変動を除いた値。経済成長を見るなら実質。" },
      { term: "CPI", desc: "家計が購入する代表的な財・サービスのバスケット価格の変化率。" },
      { term: "自然失業率", desc: "景気とは無関係に存在する構造的・摩擦的失業の水準。" },
    ],
  },
  {
    id: "policy",
    number: "第5講",
    title: "財政政策と金融政策 — 政府と中央銀行の道具箱",
    lead: "景気が過熱したり冷え込んだりしたとき、政府と中央銀行はそれぞれ異なる道具で経済を調整します。",
    body: [
      "財政政策は、政府による歳出と税の調整です。不況期には公共投資の拡大や減税で総需要を押し上げ、景気過熱期には歳出削減や増税で需要を抑えます。乗数効果により、1兆円の公共投資は1兆円以上のGDP増加をもたらすことがあります。",
      "金融政策は、中央銀行（日本では日本銀行）による金利・マネーサプライの調整です。政策金利を下げれば借入が容易になり投資と消費が刺激され、上げればその逆になります。2000年代以降は量的緩和やマイナス金利など非伝統的手法も広く使われるようになりました。",
      "両政策の関係は、ハイウェイを走る車のアクセルとブレーキのようなものです。ただし、財政政策は政治的プロセスを経るため機動性に欠け、金融政策は効き始めるまでにタイムラグがあるという弱点を持ちます。",
      "近年の論点として、政府債務の持続可能性、中央銀行の独立性、気候変動対応に向けたグリーン財政／金融政策などが活発に議論されています。これらは『政治経済学』『公共経済学』『環境経済学』といった応用分野への入り口にもなります。",
    ],
    keyTerms: [
      { term: "乗数効果", desc: "政府支出の増加が、消費や投資を通じて波及的にGDPを押し上げる効果。" },
      { term: "政策金利", desc: "中央銀行が市場に誘導する短期金利の目標水準。" },
      { term: "ゼロ金利制約", desc: "名目金利をこれ以上下げられない状況で金融政策が効きにくくなる問題。" },
    ],
  },
];

const readingList = [
  { title: "N. グレゴリー・マンキュー『マンキュー経済学I・II』", note: "世界的ベストセラー。ミクロ・マクロとも日常例が豊富で読みやすい。" },
  { title: "ポール・クルーグマン『クルーグマン ミクロ経済学／マクロ経済学』", note: "現実の政策問題との接続を強調する教科書。" },
  { title: "伊藤元重『入門 経済学』", note: "日本語で書かれた定番入門書。まずこの一冊から始めても良い。" },
  { title: "ダロン・アセモグル他『Economics』", note: "制度・行動・市場をまたいで構造的に学びたい人向け。" },
];

export default function EconomicsLecturePage() {
  const publishedDate = "2026-04-07";
  const url = "https://thebrief.info/university/social/economics";

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
          { name: "社会科学", href: "/university/social" },
          { name: "経済学", href: "/university/social/economics" },
        ]}
      />
      <ArticleJsonLd
        title="経済学の基礎 — 市場・価格・マクロ経済を一気に理解する講義"
        description="大学1〜2年で学ぶ経済学の入門講義。希少性、需要と供給、価格メカニズム、市場の失敗、GDPと物価、金融政策までを講義資料スタイルで体系的に解説します。"
        datePublished={publishedDate}
        author="The Brief 編集部"
        url={url}
      />

      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/university" className="hover:text-foreground transition-colors">University</Link>
        <span>/</span>
        <Link href="/university/social" className="hover:text-foreground transition-colors">社会科学</Link>
        <span>/</span>
        <span>経済学</span>
      </div>

      <div className="mb-6">
        <Link
          href="/university/social"
          className="inline-flex items-center gap-2 rounded-full border border-brief-border bg-brief-card px-4 py-2 text-xs uppercase tracking-[2px] text-foreground/55 hover:text-foreground transition-colors"
        >
          <span>←</span>
          <span>Back to 社会科学</span>
        </Link>
      </div>

      <article className="space-y-10">
        <header
          className="rounded-[28px] border p-6 md:p-10"
          style={{
            borderColor: `${ECONOMICS_COLOR}33`,
            background: `linear-gradient(135deg, ${ECONOMICS_COLOR}14, rgba(15,23,42,0.02))`,
          }}
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
            style={{
              color: ECONOMICS_COLOR,
              borderColor: `${ECONOMICS_COLOR}33`,
              backgroundColor: `${ECONOMICS_COLOR}12`,
            }}
          >
            Lecture / Economics 101
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-5xl">
            経済学の基礎
            <br className="hidden sm:block" />
            — 市場・価格・マクロ経済を一気に理解する講義
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-base">
            本講義は、大学の学部1〜2年で学ぶ経済学入門を、5回の講義として再構成したものです。
            『なぜ価格は動くのか』『政府はなぜ経済に介入するのか』『日銀は何をしているのか』といった問いに、
            体系的に答えられるようになることを目標にしています。
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <dt className="text-[10px] uppercase tracking-[2px] text-foreground/45">対象</dt>
              <dd className="mt-1 font-bold">学部1〜2年</dd>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <dt className="text-[10px] uppercase tracking-[2px] text-foreground/45">講義回数</dt>
              <dd className="mt-1 font-bold">全5講</dd>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <dt className="text-[10px] uppercase tracking-[2px] text-foreground/45">前提知識</dt>
              <dd className="mt-1 font-bold">不要</dd>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <dt className="text-[10px] uppercase tracking-[2px] text-foreground/45">所要時間</dt>
              <dd className="mt-1 font-bold">約40分</dd>
            </div>
          </dl>
        </header>

        <nav className="rounded-[24px] border border-brief-border bg-brief-card p-6">
          <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45">
            Syllabus
          </div>
          <h2 className="mt-2 font-serif text-xl font-bold">シラバス（目次）</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {chapters.map((chapter) => (
              <li key={chapter.id} className="flex gap-3">
                <span
                  className="shrink-0 font-mono text-xs"
                  style={{ color: ECONOMICS_COLOR }}
                >
                  {chapter.number}
                </span>
                <a
                  href={`#${chapter.id}`}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {chapter.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className="scroll-mt-24 rounded-[24px] border border-brief-border bg-brief-card p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span
                className="font-mono text-xs font-bold uppercase tracking-[2.6px]"
                style={{ color: ECONOMICS_COLOR }}
              >
                {chapter.number}
              </span>
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                {chapter.title}
              </h2>
            </div>
            <p
              className="mt-3 text-sm font-medium md:text-base"
              style={{ color: ECONOMICS_COLOR }}
            >
              {chapter.lead}
            </p>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/80 md:text-[15px]">
              {chapter.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl border p-4"
              style={{
                borderColor: `${ECONOMICS_COLOR}33`,
                backgroundColor: `${ECONOMICS_COLOR}0d`,
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[2.6px]"
                style={{ color: ECONOMICS_COLOR }}
              >
                Key Terms
              </div>
              <dl className="mt-3 space-y-3 text-sm">
                {chapter.keyTerms.map((item) => (
                  <div key={item.term}>
                    <dt className="font-bold">{item.term}</dt>
                    <dd className="mt-0.5 text-foreground/70">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}

        <section className="rounded-[24px] border border-brief-border bg-brief-card p-6 md:p-8">
          <div
            className="text-[10px] font-bold uppercase tracking-[2.8px]"
            style={{ color: ECONOMICS_COLOR }}
          >
            Further Reading
          </div>
          <h2 className="mt-2 font-serif text-2xl font-bold">さらに学ぶために</h2>
          <p className="mt-3 text-sm text-foreground/70">
            本講義は地図のようなものです。実際に歩くには、体系的な教科書で一歩ずつ歩みを進める必要があります。
            以下は、本講義の次のステップとして推薦する代表的な入門書です。
          </p>
          <ul className="mt-5 space-y-4">
            {readingList.map((book) => (
              <li key={book.title} className="rounded-2xl border border-foreground/10 p-4">
                <div className="text-sm font-bold">{book.title}</div>
                <div className="mt-1 text-xs text-foreground/60">{book.note}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[24px] border border-brief-border bg-brief-card p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold">まとめ</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-[15px]">
            経済学は、希少性の下での意思決定を扱う学問です。ミクロでは個々の市場と価格の動き、マクロでは一国全体の景気と物価、失業を扱います。
            市場は多くの場合うまく機能しますが、外部性や情報の非対称性があると政府の役割が必要になります。
            そして、景気が過熱したり冷え込んだりする場面では、財政政策と金融政策という2本の柱が登場します。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-[15px]">
            この5回の講義で扱った概念は、今後学ぶミクロ・マクロの中級科目、計量経済学、行動経済学、環境経済学など、
            あらゆる応用分野の出発点になります。まずは日々のニュースを、本講義の言葉で読み直してみてください。
            それが最初の『演習問題』です。
          </p>
        </section>
      </article>
    </div>
  );
}
