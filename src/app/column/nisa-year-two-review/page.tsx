import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/nisa-year-two-review";
const TITLE = "新NISA 2年目の見直し方 — つみたて枠と成長投資枠の最適配分";
const SUMMARY =
  "2024年に始まった新NISAは2年目（2025年）を終え、3年目に入ろうとしています。最初の年は『とりあえず始めた』人が多かったはず。生涯非課税枠1,800万円、年間360万円という巨大な箱の中で、今あらためて何を見直すべきかを整理します。";
const DATE = "2026-04-08";

export const metadata: Metadata = {
  title: `${TITLE} — Column | The Brief`,
  description: SUMMARY,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: SUMMARY,
    url: URL,
    type: "article",
    locale: "ja_JP",
    siteName: "The Brief",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SUMMARY,
  },
};

type Section = {
  n: string;
  heading: string;
  headingEn: string;
  lead?: string;
  blocks: Block[];
};

type Block =
  | { type: "p"; text: string }
  | { type: "label"; label: string; text: string }
  | { type: "callout"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

const sections: Section[] = [
  {
    n: "01",
    heading: "新NISAの基本構造をあらためて整理する",
    headingEn: "The Two-Bucket Design",
    lead: "2024年スタートの新NISAは、つみたて投資枠と成長投資枠という2つの箱からできています。",
    blocks: [
      {
        type: "p",
        text: "新NISAは旧つみたてNISA／一般NISAを統合・恒久化した制度です。最大の特徴は『つみたて投資枠（年120万円）』と『成長投資枠（年240万円）』の併用が可能で、合計年360万円・生涯1,800万円までの非課税投資ができることです。売却して空いた枠は翌年以降に再利用できる『簿価管理』方式が採られました。",
      },
      {
        type: "table",
        caption: "新NISAの基本枠（2026年4月時点）",
        headers: ["区分", "年間上限", "対象商品", "生涯枠の上限"],
        rows: [
          ["つみたて投資枠", "120万円", "金融庁基準を満たす投信・ETF", "1,800万円のうち枠制限なし"],
          ["成長投資枠", "240万円", "上場株式・投信・ETF（一部除外）", "1,800万円のうち1,200万円まで"],
          ["合計", "360万円", "—", "1,800万円"],
        ],
      },
      {
        type: "callout",
        text: "ポイントは『簿価管理＋枠の再利用』。一度買ってしまえば終わりではなく、ライフイベントに応じて売却→再投資ができる柔軟な制度になった。",
      },
    ],
  },
  {
    n: "02",
    heading: "1年目によくある『無自覚オーバーウェイト』",
    headingEn: "Common Year-One Mistakes",
    lead: "1年目は『とりあえず満額』が多い分、ポートフォリオが意図せず偏っているケースが目立ちます。",
    blocks: [
      {
        type: "label",
        label: "①オルカン1本のつもりが、実は米国株80%",
        text: "もっとも人気のeMAXIS Slim 全世界株式（オール・カントリー）は、構成上およそ60%が米国株です。さらにS&P500ファンドも併せて持っている人は、結果的にポートフォリオの80%以上が米国株、ということが珍しくありません。『分散したつもり』が一極集中になっています。",
      },
      {
        type: "label",
        label: "②成長投資枠で個別株を雰囲気買い",
        text: "成長投資枠で『話題の銘柄を試しに』買った株が、知らぬ間にポートフォリオの中で大きな比率を占めているケース。半導体、AI関連、米国大型ハイテクなど、トレンドに乗った銘柄は短期では強くても、長期の最適解とは限りません。",
      },
      {
        type: "label",
        label: "③現預金とのバランスを忘れる",
        text: "新NISAに毎月10万円を入れた結果、生活防衛資金が足りないことに後から気づくケース。投資資金は『生活費6ヶ月分＋3年以内に使う予定のお金』を確保したうえで、残りを充てるのが鉄則です。",
      },
    ],
  },
  {
    n: "03",
    heading: "2年目以降に確認すべき5つの数字",
    headingEn: "Five Numbers to Check",
    lead: "ポートフォリオの健康診断は、年1回・5つの数字を見るだけで十分です。",
    blocks: [
      {
        type: "list",
        items: [
          "①生涯非課税枠の使用率（残り何万円）",
          "②つみたて投資枠と成長投資枠の比率",
          "③日本株／米国株／その他の地域別比率",
          "④株式／債券／現預金の資産クラス比率",
          "⑤生活防衛資金の月数（手取りの何ヶ月分）",
        ],
      },
      {
        type: "p",
        text: "①は使い切り目標があるなら逆算します。年間360万円フル活用でも生涯枠1,800万円を埋めるには5年。ペースが落ちている場合、つみたて額の自動引き上げを検討します。",
      },
      {
        type: "p",
        text: "③④はリバランスの判断材料です。米国株が大きく上昇した結果、ポートフォリオの90%が米国株になっているなら、追加投資先を欧州・新興国・債券に振り向けることでリスクを下げられます。新NISAは売却すると非課税枠を消費するため、リバランスは『新規買付の配分を変える』方が合理的です。",
      },
      {
        type: "callout",
        text: "新NISAでのリバランスは『売る』のではなく『次の買付方向を変える』が基本。売却は枠の再利用が翌年なので、年末年始のタイミングを意識する。",
      },
    ],
  },
  {
    n: "04",
    heading: "つみたて枠 vs 成長投資枠の役割分担",
    headingEn: "Role Allocation",
    lead: "2つの枠は性質が違います。役割を意識して配分するだけで、リスク管理が一段安定します。",
    blocks: [
      {
        type: "table",
        caption: "枠の特性比較",
        headers: ["観点", "つみたて投資枠", "成長投資枠"],
        rows: [
          ["年間上限", "120万円", "240万円"],
          ["対象商品", "金融庁基準クリア投信のみ", "ほぼ全ての上場株・投信"],
          ["買付方法", "積立のみ", "積立／一括どちらも可"],
          ["向いている用途", "コア（長期分散）", "サテライト（個別株・テーマ・配当）"],
          ["心理的な扱い", "触らない", "見直し可"],
        ],
      },
      {
        type: "label",
        label: "推奨の役割分担",
        text: "つみたて投資枠は『絶対に売らない・絶対に手を出さないコア資産』。eMAXIS Slim オルカン or S&P500を毎月10万円の自動積立に設定し、忘れる。成長投資枠は『年1回見直すサテライト』。高配当ETF、新興国株、リート、金、必要に応じて個別株などを少量ずつ組み合わせます。",
      },
      {
        type: "p",
        text: "成長投資枠の生涯上限は1,200万円です。つまり最大でもポートフォリオの2/3まで。残り600万円以上は必ずつみたて投資枠で埋まる計算で、自然と『コア＞サテライト』のバランスに収まる設計になっています。",
      },
    ],
  },
  {
    n: "05",
    heading: "ライフステージ別・見直しの方向性",
    headingEn: "Life Stage Tactics",
    lead: "同じ新NISAでも、年齢・収入・家族構成によって最適解は変わります。",
    blocks: [
      {
        type: "label",
        label: "20代・30代独身 — 攻めて良い時期",
        text: "投資期間が30年以上あるので、株式100%でも問題ない時期です。つみたて投資枠でオルカン or S&P500、成長投資枠で米国成長株や新興国株を組み合わせる『株式フル投資』で長期リターンを取りに行く判断は合理的。生活防衛資金（6ヶ月分）を確保したうえでなら、月10万円の積立も無理筋ではありません。",
      },
      {
        type: "label",
        label: "30代・40代子育て世代 — 教育費との両立",
        text: "子どもの教育費（特に大学入学時のまとまった出費）が10年以内に控えている場合、その分を新NISAから出すかどうかで判断が変わります。新NISAは流動性が高いので教育資金の置き場としても使えますが、相場が悪い時期に取り崩すと損失確定のリスクがあります。教育費は別途、定期預金や個人向け国債で確保しておくのが安全策。",
      },
      {
        type: "label",
        label: "40代・50代 — 退職後を逆算",
        text: "退職後の取り崩しを意識し、株式比率を徐々に下げる『グライドパス』の考え方が有効になってきます。50歳で株式70%・債券30%、60歳で50%・50%というように、リスク資産を段階的に減らします。新NISAでは債券ファンド、バランスファンド、高配当ETFなどが選択肢になります。",
      },
      {
        type: "label",
        label: "50代後半・60代 — 取り崩しフェーズの設計",
        text: "新NISAの強みは、配当・分配金・売却益すべてが非課税であること。退職後は4%ルール（毎年資産の4%を取り崩す）を参考に、生活費の補完として活用できます。iDeCo・年金との合算で月収の見通しを立てましょう。",
      },
    ],
  },
  {
    n: "06",
    heading: "やってはいけない3つのこと",
    headingEn: "Three Things to Avoid",
    lead: "最後に、新NISAでやりがちな3つの落とし穴をまとめます。",
    blocks: [
      {
        type: "label",
        label: "①レバレッジ型・インバース型を買う",
        text: "成長投資枠ではレバレッジ型（日経レバ等）・インバース型は対象外です。にもかかわらず、似た商品名のレバナス系投信を『成長型』と勘違いして買うケースがあります。長期・複利の前提に合わず、長期投資の選択肢としては推奨されません。",
      },
      {
        type: "label",
        label: "②高配当株を毎月『取り崩し』する",
        text: "高配当ETFの分配金を毎月生活費に充てる戦略は、出口設計としては理解できますが、現役世代のうちは『再投資』した方が複利が効きます。配当再投資をオフにした瞬間、長期リターンは目減りします。",
      },
      {
        type: "label",
        label: "③相場急落時に売却して枠を消費する",
        text: "新NISAの非課税枠は売却しても翌年以降に復活しますが、その年の年間枠（360万円）は復活しません。相場急落で恐怖売りすると『安値で売って高値で買い直す』最悪パターンに陥りがち。下落局面ほど淡々と積立を続けることが、長期リターンを最大化します。",
      },
      {
        type: "callout",
        text: "新NISAは『買って忘れる』が9割、『年1回見直す』が残り1割。それだけで十分機能する制度設計になっている。",
      },
    ],
  },
];

export default function NisaYearTwoReviewPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={TITLE}
        description={SUMMARY}
        datePublished={DATE}
        dateModified={DATE}
        author="The Brief"
        url={URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: TITLE, href: URL },
        ]}
      />

      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-10 font-medium tracking-wide flex-wrap">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">/</span>
        <Link href="/column" className="hover:text-foreground/70 transition-colors">Column</Link>
        <span className="opacity-30">/</span>
        <span className="text-foreground/60 line-clamp-1">{TITLE}</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-semibold px-2.5 py-1 rounded-md border"
            style={{
              color: COLUMN_COLOR,
              borderColor: `${COLUMN_COLOR}33`,
              backgroundColor: `${COLUMN_COLOR}10`,
            }}
          >
            Column
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
            投資 / NISA
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <span style={{ color: COLUMN_COLOR }}>新NISA</span>
          <span className="text-foreground/70">2年目の見直し方</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/70 text-[20px] sm:text-[28px]">— つみたて枠と成長投資枠の最適配分</span>
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          New NISA — A Year-Two Tune-up
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          {SUMMARY}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>約 10 分</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>全 6 章</span>
        </div>
      </header>

      <nav className="mb-16 relative">
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.015]">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${COLUMN_COLOR}14`, color: COLUMN_COLOR }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/40 font-semibold">
              Contents
            </span>
          </div>
          <ol className="space-y-0">
            {sections.map((s, i) => (
              <li key={s.n}>
                <a
                  href={`#section-${s.n}`}
                  className="group flex items-center gap-4 py-2.5 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <span
                    className="text-[11px] tabular-nums font-semibold w-5 text-right"
                    style={{ color: `${COLUMN_COLOR}90` }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[13px] font-medium">{s.heading}</span>
                </a>
                {i < sections.length - 1 && (
                  <div className="ml-[30px] h-px bg-foreground/[0.04]" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article>
        {sections.map((s) => (
          <section key={s.n} id={`section-${s.n}`} className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-[36px] sm:text-[44px] font-bold tabular-nums leading-none select-none font-serif"
                  style={{ color: `${COLUMN_COLOR}1A` }}
                >
                  {s.n}
                </span>
                <div className="flex-1">
                  <h2 className="font-serif text-[22px] sm:text-[28px] font-bold leading-tight tracking-tight">
                    {s.heading}
                  </h2>
                  <span className="mt-0.5 block text-[10px] tracking-[2px] uppercase text-foreground/30 font-medium">
                    {s.headingEn}
                  </span>
                </div>
              </div>
              <div
                className="h-px"
                style={{
                  background: `linear-gradient(to right, ${COLUMN_COLOR}30, ${COLUMN_COLOR}08, transparent)`,
                }}
              />
            </div>

            {s.lead && (
              <p className="text-[16px] text-foreground/85 leading-[2] tracking-[0.02em] mb-6">
                {s.lead}
              </p>
            )}

            <div className="space-y-5">
              {s.blocks.map((b, j) => {
                if (b.type === "p") {
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "label") {
                  return (
                    <div key={j} className="group pl-5 py-3 relative">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                        style={{ backgroundColor: `${COLUMN_COLOR}33` }}
                      />
                      <div
                        className="text-[11px] font-bold tracking-wide mb-1.5"
                        style={{ color: `${COLUMN_COLOR}CC` }}
                      >
                        {b.label}
                      </div>
                      <p className="text-[14.5px] text-foreground/75 leading-[1.95]">{b.text}</p>
                    </div>
                  );
                }
                if (b.type === "callout") {
                  return (
                    <div
                      key={j}
                      className="my-2 pl-5 py-4 rounded-r-lg border-l-[3px]"
                      style={{
                        backgroundColor: `${COLUMN_COLOR}0D`,
                        borderColor: `${COLUMN_COLOR}55`,
                      }}
                    >
                      <p className="text-[14px] text-foreground/80 leading-[1.9] italic">
                        {b.text}
                      </p>
                    </div>
                  );
                }
                if (b.type === "list") {
                  return (
                    <ul key={j} className="space-y-2 pl-1">
                      {b.items.map((it, k) => (
                        <li key={k} className="flex gap-3 text-[14.5px] text-foreground/75 leading-[1.9]">
                          <span
                            className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: COLUMN_COLOR }}
                          />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "table") {
                  return (
                    <div key={j} className="my-4">
                      {b.caption && (
                        <div className="text-[11px] text-foreground/45 mb-2">{b.caption}</div>
                      )}
                      <div className="overflow-x-auto rounded-xl border border-foreground/[0.06]">
                        <table className="w-full text-[13px]">
                          <thead>
                            <tr style={{ backgroundColor: `${COLUMN_COLOR}0D` }}>
                              {b.headers.map((h, k) => (
                                <th
                                  key={k}
                                  className="px-3 py-2.5 text-left font-semibold"
                                  style={{ color: COLUMN_COLOR }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                className="border-t border-foreground/[0.05]"
                              >
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-2.5 text-foreground/75">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>
        ))}
      </article>

      <div
        className="mt-6 rounded-2xl border p-5"
        style={{
          borderColor: `${COLUMN_COLOR}22`,
          backgroundColor: `${COLUMN_COLOR}08`,
        }}
      >
        <div
          className="text-[10px] font-bold uppercase tracking-[2.5px] mb-2"
          style={{ color: COLUMN_COLOR }}
        >
          Disclaimer
        </div>
        <p className="text-[12.5px] text-foreground/60 leading-[1.9]">
          本コラムは2026年4月時点の制度の一般的な解説を目的としており、特定の投資商品の推奨や投資助言ではありません。投資判断はご自身の責任で行ってください。NISA制度の詳細・対象商品は金融庁・各証券会社の最新情報をご確認ください。
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <ShareButton title={TITLE} />
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/column"
          className="inline-flex items-center gap-2 text-[12px] text-foreground/40 hover:text-foreground/70 transition-colors font-medium tracking-wide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          コラム一覧に戻る
        </Link>
      </div>
    </div>
  );
}
