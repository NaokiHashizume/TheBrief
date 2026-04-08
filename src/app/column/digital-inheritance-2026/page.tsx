import type { Metadata } from "next";
import { ColumnArticle, type ColumnSection } from "@/components/ColumnArticle";

const COLUMN_COLOR = "#0d9488";
const URL = "https://thebrief.info/column/digital-inheritance-2026";
const TITLE = "デジタル遺品の片付け方 — スマホの中の『見えない契約』で家族を困らせないために";
const SUMMARY =
  "国民生活センターは2024年11月、デジタル終活に関する警鐘を発表しました。故人のスマホが開けず、サブスクの請求だけが続く。ネット証券の口座があるはずなのに手がかりがない。相続放棄を考えているのに、うっかりサブスク解約でトラブルになる。今日から1分で始められるデジタル終活の最小セットを整理します。";
const SUMMARY_EN =
  "In November 2024, Japan's National Consumer Affairs Center issued a warning about 'digital end-of-life' planning. Families get stuck with a locked phone and monthly subscription charges, a suspected online brokerage account with no trace, or — worse — trigger legal trouble by canceling a subscription while considering renouncing the inheritance. Here's the one-minute starter kit you can do today.";
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
    headingJa: "デジタル遺品の4つのカテゴリ",
    headingEn: "Four Categories of Digital Estate",
    lead: {
      ja: "『デジタル遺品』という言葉は広いので、まず整理から始めます。国民生活センターの区分に沿って、大きく4つに分けるのが実務的です。",
      en: "'Digital estate' is a broad term — start by sorting it. Following the National Consumer Affairs Center's framing, four categories cover most of the ground.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "**① 端末そのもの**：スマートフォン、PC、タブレット。生体認証やパスコードで守られ、遺族がそもそもロックを解除できないケースが最も多い相談内容。",
            en: "**1. Devices themselves.** Smartphones, PCs, tablets — protected by biometrics and passcodes. Families unable to even unlock them is the single most common complaint.",
          },
          {
            ja: "**② 金銭的資産**：ネット銀行、ネット証券、暗号資産、ポイント、電子マネー。通帳も証書もないため、存在に家族が気づかず相続漏れになる危険。",
            en: "**2. Monetary assets.** Online banks, brokerages, crypto, reward points, e-money. With no paper statements, heirs may never learn the asset existed.",
          },
          {
            ja: "**③ 継続課金契約（サブスク）**：動画・音楽、クラウドストレージ、セキュリティソフト、ジム、有料メルマガ。解約されない限り請求が続く。",
            en: "**3. Recurring subscriptions.** Video, music, cloud storage, security software, gyms, paid newsletters. Charges keep running until the contract is canceled.",
          },
          {
            ja: "**④ 個人情報・SNS**：メール、写真、SNSアカウント、クラウド上のファイル。経済価値は小さいが、放置するとなりすまし被害のリスク。",
            en: "**4. Personal info and social accounts.** Email, photos, social profiles, cloud files. Low monetary value — but leaving them live invites impersonation.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "この4カテゴリのどれが自分にとって量が多いかを把握するだけで、『まず何から片付けるべきか』の優先順位が見えてきます。",
          en: "Just knowing which of these four buckets is heaviest for you already tells you where to start cleaning up first.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "いちばん多いトラブル — サブスクの請求が止まらない",
    headingEn: "The #1 Problem — Subscription Bills That Won't Stop",
    lead: {
      ja: "国民生活センターに寄せられる相談で特に多いのが、故人のクレジットカード明細に毎月載り続けるサブスクです。解約しようにも、事業者が『解約にはIDとパスワードが必要』と答え、家族が手詰まりになります。",
      en: "Among the complaints the Consumer Affairs Center receives, the most frequent is monthly subscription charges that keep landing on a deceased person's credit card. Families try to cancel, only to be told by the provider that they need the ID and password.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "典型パターン", en: "A typical case" },
        text: {
          ja: "スマートフォンのセキュリティソフト、動画配信、クラウドストレージなどが『数百円〜千円台』の少額で並んでいる。1つずつは小さいが、合計で月5,000〜10,000円になるケースも珍しくありません。",
          en: "Phone security apps, streaming video, cloud storage — each a few hundred to a couple thousand yen. Small individually, but the total often hits 5,000–10,000 yen a month.",
        },
      },
      {
        type: "p",
        text: {
          ja: "クレジットカード会社に連絡してカード自体を止めれば請求は止まりますが、**カード停止=契約解除ではありません**。契約は生きたままなので、別口座への振替や督促・信用情報への傷に発展する可能性があります。面倒でも『事業者ごとの解約手続き』が原則です。",
          en: "Calling the card issuer and canceling the card will stop the charges — but **canceling a card does not cancel the contracts themselves**. The agreements remain alive and can follow the estate as dunning notices or credit-file damage. Annoying as it is, per-provider cancellation is the right path.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "**相続放棄を検討している場合は特に要注意**。故人のサブスクを家族が解約する行為が『相続を承認した』とみなされ、相続放棄ができなくなる恐れがあります。迷ったら先に弁護士に相談を。",
          en: "**Extra caution if you're considering renouncing the inheritance.** A family member canceling a subscription can be interpreted as 'accepting' the inheritance, which blocks renunciation. When in doubt, talk to a lawyer first.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "『エンディングノート』の最小セット",
    headingEn: "The Minimum Ending-Note Kit",
    lead: {
      ja: "完璧なエンディングノートを作ろうとして結局書かない、が一番よくある失敗です。ここでは『今日5分で書ける最小セット』を提案します。紙に書いて引き出しに入れるだけで、家族の負担は劇的に減ります。",
      en: "The most common failure is trying to write a perfect ending note and finishing nothing. Here's a 'five-minute minimum' you can do today — handwritten, stashed in a drawer. It dramatically lightens the load on your family.",
    },
    blocks: [
      {
        type: "table",
        caption: { ja: "最小デジタル終活ノート 4項目", en: "Minimum digital end-of-life note — 4 items" },
        headers: [
          { ja: "項目", en: "Item" },
          { ja: "書く内容", en: "What to write" },
        ],
        rows: [
          [
            { ja: "① 端末のロック解除方法", en: "1. How to unlock devices" },
            { ja: "スマホ・PCのパスコード（生体認証のみなら緊急用の数字コード）", en: "Phone and PC passcodes (or an emergency numeric code if you only use biometrics)" },
          ],
          [
            { ja: "② 金銭が絡む主要アカウント", en: "2. Financial accounts" },
            { ja: "ネット銀行・証券・暗号資産の『サービス名』と『ログインID』のみ。パスワードは書かない", en: "Only the service names and login IDs for online banks, brokerages, crypto. Do not write passwords." },
          ],
          [
            { ja: "③ 定期課金サービスの一覧", en: "3. Subscription list" },
            { ja: "毎月・毎年の継続課金サービス名と、支払いに使っているカード", en: "Names of monthly/yearly recurring services and which card they charge to" },
          ],
          [
            { ja: "④ SNS・メールの主要アカウント", en: "4. Main email and social accounts" },
            { ja: "メインのメールアドレス、主要なSNSのユーザー名（追悼アカウント化の判断材料）", en: "Your primary email and main social handles — enough to decide on memorialization" },
          ],
        ],
      },
      {
        type: "label",
        label: { ja: "パスワードを書かない理由", en: "Why not write the passwords" },
        text: {
          ja: "紙のノートに全パスワードを書くのは盗難・紛失時のリスクが大きすぎます。『どのサービスに口座があるか』さえ家族が把握できれば、正式な相続手続きで事業者側が本人確認の上で対応してくれます。",
          en: "Writing every password on paper creates too much theft/loss risk. Once the family knows **which** services hold accounts, the providers will handle identity verification through formal inheritance procedures.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "生前に済ませておきたい『3つの整理』",
    headingEn: "Three Things to Sort While You're Alive",
    lead: {
      ja: "デジタル終活は『家族のための備え』である以上に、『自分のための棚卸し』です。使っていないサブスクを止めるだけで月数千円が浮くこともあります。",
      en: "Digital end-of-life planning is as much a personal audit as a bequest. Canceling unused subscriptions alone often frees up several thousand yen a month.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "**使っていないサブスクを止める**：クレジットカードの明細1年分を見直して、名前を忘れているものは大抵不要。年に1度の『サブスク棚卸し日』を決めるのがおすすめ。",
            en: "**Kill the unused subscriptions.** Scan a year of card statements — anything you can't recognize by name usually isn't needed. A once-a-year 'subscription audit day' works well.",
          },
          {
            ja: "**休眠ネット口座を集約する**：複数のネット銀行・証券に少額が散っているなら、主要な1〜2社に寄せる。遺族が見つけるべき口座の数を減らすだけで相続手続きは劇的に楽になる。",
            en: "**Consolidate dormant online accounts.** If small balances are scattered across multiple online banks and brokerages, bring them into one or two. Fewer accounts = dramatically easier inheritance.",
          },
          {
            ja: "**写真・データは家族と共有**：撮り溜めた写真をクラウドに閉じ込めず、家族と共有アルバムを作っておく。経済的価値はないが、いちばん『残したいもの』がここにあるケースは多い。",
            en: "**Share photos and data with family.** Don't lock accumulated photos in a personal cloud — build shared albums. No monetary value, but this is often what people most wanted to leave behind.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "デジタル終活に『正解』はありません。ただ、何もしないことの代償は、家族にとって決して小さくないということだけは確かです。今日、紙とペンを1枚取り出すところから始めましょう。",
          en: "There's no single 'correct' way to do this. What's clear is that doing nothing is not cost-free for your family. Start today — with a single sheet of paper and a pen.",
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
      categoryJa="ライフプラン / End of Life"
      categoryEn="End of Life Planning"
      chaptersJa="全 4 章"
      chaptersEn="4 chapters"
      readTimeJa="約 9 分"
      readTimeEn="~9 min read"
      subtitle="Digital End-of-Life Planning in 2026"
      titleNode={
        <>
          <span style={{ color: COLUMN_COLOR }}>デジタル遺品</span>
          <span className="text-foreground/70">の片付け方</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/70 text-[20px] sm:text-[28px]">— スマホの中の『見えない契約』で家族を困らせないために</span>
        </>
      }
      disclaimerJa="本コラムは一般的な情報提供を目的としたものであり、個別の法律・税務・相続の助言ではありません。特に相続放棄を検討している場合は、サブスク解約等の行為前に弁護士にご相談ください。"
      disclaimerEn="This column is for general information only, not individualized legal, tax, or estate advice. If you are considering renouncing an inheritance, consult a lawyer before canceling subscriptions or taking other actions."
      sections={sections}
    />
  );
}
