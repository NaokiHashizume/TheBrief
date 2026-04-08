import type { Metadata } from "next";
import { ColumnArticle, type ColumnSection } from "@/components/ColumnArticle";

const COLUMN_COLOR = "#0d9488";
const URL = "https://thebrief.info/column/selective-surname-2026";
const TITLE = "選択的夫婦別姓の現在地 — 高市政権『旧姓の単記』はどこまで進むのか";
const SUMMARY =
  "高市政権は選択的夫婦別姓には反対のまま、自民・維新の連立合意に基づき『旧姓の通称使用拡大』を法制化する方針です。2026年2月、平口法相に『旧氏の単記』の検討を指示。住民票や免許証に旧姓のみを記すという新しい選択肢は、反対派・賛成派の双方から評価が分かれます。争点は何が残り、何が動いたのか。";
const SUMMARY_EN =
  "Takaichi's government still opposes selective surnames but — per the LDP-Ishin coalition agreement — plans to legalize a broader use of 'former surnames as a common name.' In February 2026 the PM instructed the Justice Minister to study allowing just the former surname on residence certificates and driver's licenses. A new middle path, or a way to stall reform? What has actually moved, and what has not.";
const DATE = "2026-04-09";

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

const sections: ColumnSection[] = [
  {
    n: "01",
    headingJa: "連立合意で決まった『通称使用の法制化』",
    headingEn: "The Coalition Deal — Legalizing the 'Common Name'",
    lead: {
      ja: "2025年末の自民党・日本維新の会の連立合意書には、夫婦同姓の原則を維持しつつ『旧姓の通称使用』を法制化するという一文が明記されました。高市早苗首相は就任直後から、関連法案を2026年の通常国会に提出する方針を明らかにしています。",
      en: "The late-2025 coalition agreement between the LDP and Ishin explicitly keeps the principle of shared marital surnames while promising to legalize 'former-surname use as a common name.' From day one, PM Sanae Takaichi has aimed to submit the bill in the 2026 ordinary Diet session.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "現行制度でも、職場や金融機関で旧姓を『通称』として使うことは広がっています。ただし法律上の根拠がなく、対応は各組織の判断に委ねられてきました。今回の法制化は、この『事実上の運用』に法的根拠を与えるものです。",
          en: "Using a former surname as a 'common name' at work or with banks is already widespread, but has lived in a legal gray zone — each organization decides whether to honor it. Legalization would give this de facto practice a statutory basis.",
        },
      },
      {
        type: "label",
        label: { ja: "政府の立場", en: "The government's position" },
        text: {
          ja: "戸籍制度は夫婦同姓のまま。旧姓は『通称』として社会生活で使える範囲を広げる。これが高市政権が一貫して示してきた線引きです。",
          en: "Leave the family register system untouched (still one surname per couple), but widen the scope in which a former surname can be used as a 'common name.' That is the line Takaichi's team has held from the start.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "選択的夫婦別姓の支持者から見れば『つぶし』、反対派から見れば『最低限の譲歩』。同じ法案が両側から異なる評価を受けているのが、いまの議論の特徴です。",
          en: "Supporters of optional separate surnames see this as sabotage; opponents see it as a minimum concession. The same bill is read very differently from each side — that is the texture of the current debate.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "『旧氏の単記』という新しい論点",
    headingEn: "The 'Former Surname Only' Option",
    lead: {
      ja: "2026年2月18日、高市首相は平口洋法相に『旧氏の使用拡大・周知を一層推し進めるとともに、旧氏の単記も可能とする基盤整備の検討』を指示しました。『単記』とは、住民票や運転免許証などに旧姓のみを表示するという意味です。",
      en: "On February 18, 2026, PM Takaichi instructed Justice Minister Hiraguchi to push the expansion of former-surname use and explore 'infrastructure to allow recording only the former surname' on documents like residence certificates and driver's licenses.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "現在の運用では、住民票や免許証に旧姓を書く場合は『戸籍名（旧姓）』のように **併記** するのが基本です。これを旧姓だけの **単記** も選べるようにする、というのが新しい論点です。",
          en: "Under current practice, documents that carry a former surname show it **alongside** the legal name — e.g. 'Legal Name (Former Name).' The new question is whether to allow **only** the former name as an alternative.",
        },
      },
      {
        type: "label",
        label: { ja: "賛成派の評価", en: "What proponents say" },
        text: {
          ja: "旧姓で働き続ける実務上の不便は、併記より単記の方が解消しやすい。『戸籍制度を動かさない』という制約の中では、一定の前進と受け止める声もあります。",
          en: "For people who want to keep working under a former name, a single-name display is more practical than a combined one. Within the constraint of not touching the family-register system, some call this modest progress.",
        },
      },
      {
        type: "label",
        label: { ja: "反対派の懸念", en: "What critics say" },
        text: {
          ja: "選択的夫婦別姓を求めてきた立場からは、『本丸の制度改正から目を逸らすための時間稼ぎ』との批判が根強くあります。住民票の表記と戸籍上の氏名が乖離することへの実務上の懸念も残ります。",
          en: "Supporters of true optional surnames call it a delay tactic that avoids the real reform. Practitioners also flag the operational risk of residence certificates and the family register showing different names.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "なぜ『選択的別姓』は通らないのか",
    headingEn: "Why Optional Separate Surnames Stay Stuck",
    lead: {
      ja: "世論調査では選択的夫婦別姓への賛成が多数を占める時期も続いていますが、国会では長年成立していません。構造的な理由は大きく3つに整理できます。",
      en: "Polls have repeatedly shown majority support for optional separate surnames, yet the Diet has never passed them. Three structural reasons explain the gap.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "**① 自民党内の党議拘束が働かない**：家族観に関わるテーマとして、自民党は正式に党の立場を一本化してこなかった。賛成派・反対派ともに党内に存在し、法案提出の主導者が常に不在。",
            en: "**1. No LDP whip.** The LDP has never unified its position on this 'family values' question, so pro- and anti- camps coexist inside the party and no one takes the lead on drafting a bill.",
          },
          {
            ja: "**② 保守系支持基盤の反対**：参政党・日本保守党に加え、自民党の保守系支持団体が選択的別姓に強く反対。選挙の集票構造の中で、反対派の声が相対的に大きく届く。",
            en: "**2. Conservative base pushback.** Sanseito, the Japan Conservative Party, and LDP-aligned conservative groups strongly oppose the reform, and their voices carry disproportionately in electoral arithmetic.",
          },
          {
            ja: "**③ 最高裁判決の存在**：最高裁は2015年・2021年の2度、夫婦同姓規定を合憲と判断。『違憲判決が出れば国会が動かざるを得ない』という外圧が働いていない。",
            en: "**3. The Supreme Court ruled the current rule constitutional** in 2015 and again in 2021. Without a ruling of unconstitutionality, the Diet faces no external force compelling it to act.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ja: "今回の『旧姓通称使用の法制化』は、この3つの制約の中で政権がひねり出した **妥協点** と見るのが自然です。本丸の戸籍制度には手を付けず、不便解消だけを前に進める——良くも悪くも、高市政権らしい現実路線と言えます。",
          en: "Seen against those three constraints, the 'common-name legalization' bill is a **compromise** the government squeezed out of what it had. It doesn't touch the family-register core and moves only on convenience — a very Takaichi-style pragmatic line, for better or worse.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "2026年通常国会で何が決まるか",
    headingEn: "What 2026's Ordinary Diet Will Actually Decide",
    lead: {
      ja: "議論の焦点は『旧姓通称使用の法制化』と『旧氏の単記』という2つの論点に絞られつつあります。選択的夫婦別姓そのものは、現政権下では採決に至らない見通しです。",
      en: "Debate is narrowing to two questions: legal recognition of former surnames as common names, and single-name display. Selective separate surnames themselves are not expected to come to a vote under this government.",
    },
    blocks: [
      {
        type: "table",
        caption: { ja: "主要論点の進捗状況（2026年4月時点）", en: "Status of key issues (April 2026)" },
        headers: [
          { ja: "論点", en: "Issue" },
          { ja: "政府方針", en: "Govt position" },
          { ja: "見通し", en: "Outlook" },
        ],
        rows: [
          [
            { ja: "通称使用の法制化", en: "Legalize common-name use" },
            { ja: "2026年通常国会に提出", en: "Bill in 2026 ordinary session" },
            { ja: "成立可能性 高", en: "Likely to pass" },
          ],
          [
            { ja: "旧氏の単記", en: "Single-name display" },
            { ja: "法相に検討指示", en: "Under MoJ study" },
            { ja: "制度設計 検討中", en: "Design in progress" },
          ],
          [
            { ja: "選択的夫婦別姓", en: "Optional separate surnames" },
            { ja: "反対", en: "Opposed" },
            { ja: "採決見込み なし", en: "No vote expected" },
          ],
          [
            { ja: "戸籍制度の変更", en: "Family-register reform" },
            { ja: "行わない", en: "None" },
            { ja: "現状維持", en: "Status quo" },
          ],
        ],
      },
      {
        type: "callout",
        text: {
          ja: "『選択肢が増える』ことと『制度が変わる』ことは別物です。今回の法案が通っても、戸籍上の夫婦同姓は維持されます。『何が決まり、何が決まらないか』を区別して読むことが、この議論を追うための最初の一歩です。",
          en: "Adding options is not the same as changing the system. Even if this bill passes, marital surname unity under the family-register system stays intact. Keeping that distinction clear is the first step to following this debate.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <ColumnArticle
      url={URL}
      title={TITLE}
      summary={SUMMARY}
      summaryEn={SUMMARY_EN}
      date={DATE}
      accent={COLUMN_COLOR}
      categoryJa="制度 / Family Law"
      categoryEn="Family Law"
      chaptersJa="全 4 章"
      chaptersEn="4 chapters"
      readTimeJa="約 9 分"
      readTimeEn="~9 min read"
      subtitle="Selective Surname Debate in 2026"
      titleNode={
        <>
          <span style={{ color: COLUMN_COLOR }}>選択的夫婦別姓</span>
          <span className="text-foreground/70">の現在地</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 高市政権『旧姓の単記』はどこまで進むのか</span>
        </>
      }
      disclaimerJa="本コラムは2026年4月時点での公開情報に基づく整理です。法案の具体的な条文・施行日は変更の可能性があり、最新の動向は国会・法務省の公式発表をご確認ください。"
      disclaimerEn="This column summarizes publicly available information as of April 2026. Specific bill language and enforcement dates may change — check Diet and Ministry of Justice announcements for the latest."
      sections={sections}
    />
  );
}
