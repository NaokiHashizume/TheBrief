import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#be185d";

const URL = "https://thebrief.info/column/museums-special-2026";
const TITLE = "美術館特集 2026 — 一度は訪れたい日本の美術館10選";
const SUMMARY =
  "建築・コレクション・地域性。2026年に体験したい、日本を代表する美術館10館を厳選。週末旅行やアート鑑賞のヒントに、それぞれの見どころと『なぜ今行くべきか』をまとめました。";

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

type Region = "東京" | "神奈川" | "石川" | "愛知" | "大阪" | "岡山" | "香川" | "青森";

type Museum = {
  title: string;
  titleEn: string;
  founded: number;
  region: Region;
  city: string;
  category: string;
  architect?: string;
  summary: string;
  highlight2026: string;
  why: string;
};

const museums: Museum[] = [
  {
    title: "国立新美術館",
    titleEn: "The National Art Center, Tokyo",
    founded: 2007,
    region: "東京",
    city: "港区六本木",
    category: "国立 / 企画展",
    architect: "黒川紀章",
    summary:
      "コレクションを持たず、年間を通じて多彩な企画展と公募展を開催する『展覧会のための美術館』。波打つガラスファサードと吹き抜けロビーは、東京の現代建築を代表する空間のひとつ。",
    highlight2026:
      "国際巡回展や大型回顧展のハブとして機能し、近現代美術と現代アートが交差するシーズンが続く。六本木アートトライアングル（森美術館・サントリー美術館）と組み合わせて1日で回れるのも強み。",
    why: "美術館の役割が『所蔵』から『場の編集』へと拡張する流れを、最も体感しやすい一館。",
  },
  {
    title: "森美術館",
    titleEn: "Mori Art Museum",
    founded: 2003,
    region: "東京",
    city: "港区六本木",
    category: "現代美術 / 私立",
    summary:
      "六本木ヒルズ森タワー53階に位置する、日本の現代アートシーンを牽引する美術館。アジアの新しい才能の紹介と、社会・テクノロジー・環境を主題にした企画が特徴。",
    highlight2026:
      "年2〜3本の大型企画は常に話題作。展望台『東京シティビュー』とセット券で、夜景とアートを同時に楽しめる東京観光の定番動線。",
    why: "アートが社会や経済のテーマをどう批評するかを最前線で観察できる。",
  },
  {
    title: "アーティゾン美術館",
    titleEn: "Artizon Museum",
    founded: 2020,
    region: "東京",
    city: "中央区京橋",
    category: "私立 / 印象派・近代",
    summary:
      "旧ブリヂストン美術館がリブランドして開館。石橋財団の世界有数の印象派・近代美術コレクションを、日時指定予約制でゆとりある鑑賞体験として提供する。",
    highlight2026:
      "ルノワール、セザンヌ、青木繁などを核に、現代作家とのコラボレーション企画も継続。東京駅から徒歩圏内で、出張・旅行のついでに立ち寄りやすい。",
    why: "戦後日本の財団がいかに西洋近代絵画を蓄積してきたか、文化資本の歴史が見える場所。",
  },
  {
    title: "21_21 DESIGN SIGHT",
    titleEn: "21_21 DESIGN SIGHT",
    founded: 2007,
    region: "東京",
    city: "港区赤坂",
    category: "デザイン / 私立",
    architect: "安藤忠雄",
    summary:
      "三宅一生・佐藤卓・深澤直人をディレクターに迎え、デザインを軸にした企画展を開催する東京ミッドタウン内の施設。建築は安藤忠雄、ロゴはイッセイミヤケのチーム。",
    highlight2026:
      "毎年テーマを変える企画展は、日常の道具・素材・身体感覚を問い直す視点で組まれる。デザインの社会的役割を考えるきっかけになる。",
    why: "産業デザインと現代美術の境界線を、日本独自の文脈で見ることができる稀有な施設。",
  },
  {
    title: "金沢21世紀美術館",
    titleEn: "21st Century Museum of Contemporary Art, Kanazawa",
    founded: 2004,
    region: "石川",
    city: "金沢市広坂",
    category: "現代美術 / 公立",
    architect: "妹島和世＋西沢立衛 / SANAA",
    summary:
      "円形・全面ガラス張り・回遊式という前例のない構造で、地域住民と観光客の双方に開かれた現代美術館の新しい型を提示。レアンドロ・エルリッヒの『スイミング・プール』は世界的な人気作。",
    highlight2026:
      "金沢駅から徒歩圏、兼六園・21美・鈴木大拙館を1日で巡るルートが定番化。北陸新幹線敦賀延伸で関西からのアクセスも改善した。",
    why: "公共美術館が街の経済と観光をどう変えたかの、最も成功した日本のケーススタディ。",
  },
  {
    title: "ポーラ美術館",
    titleEn: "Pola Museum of Art",
    founded: 2002,
    region: "神奈川",
    city: "足柄下郡箱根町",
    category: "私立 / 印象派・近代",
    architect: "日建設計",
    summary:
      "箱根・仙石原の森の中に埋め込まれるように建つ美術館。創業家のコレクションを核に、モネ、ルノワール、セザンヌら印象派と20世紀絵画を約1万点所蔵する。",
    highlight2026:
      "屋外の遊歩道『森の遊歩道』に現代彫刻を配し、作品鑑賞と森林浴を同時に楽しめる。箱根の温泉旅とセットで訪れるのが王道。",
    why: "化粧品メーカーの企業コレクションが、地方創生と文化振興にどう寄与しているかが分かる。",
  },
  {
    title: "大原美術館",
    titleEn: "Ohara Museum of Art",
    founded: 1930,
    region: "岡山",
    city: "倉敷市中央",
    category: "私立 / 西洋美術",
    summary:
      "倉敷紡績の社主・大原孫三郎が画家・児島虎次郎の助言で蒐集した西洋絵画を母体に、日本初の私立西洋美術館として開館。エル・グレコ『受胎告知』など歴史的名品を持つ。",
    highlight2026:
      "倉敷美観地区の中心にあり、白壁の町並みと一体化した文化観光の核。本館・分館・工芸館・東洋館と展示室が分かれ、半日かけて回りたい。",
    why: "戦前の地方産業資本が、いかに早期から西洋美術を体系的に集めていたかを知る原点。",
  },
  {
    title: "地中美術館",
    titleEn: "Chichu Art Museum",
    founded: 2004,
    region: "香川",
    city: "香川郡直島町",
    category: "現代美術 / 建築",
    architect: "安藤忠雄",
    summary:
      "瀬戸内海の直島に、建物の大半を地中に埋めて自然光のみで作品を見せる『環境型』美術館。クロード・モネの『睡蓮』、ジェームズ・タレル、ウォルター・デ・マリアの3作家の作品を恒久展示。",
    highlight2026:
      "瀬戸内国際芸術祭2025の余韻が残るタイミングで、直島・豊島・犬島の連泊観光が一段と動線として整う。完全予約制での静謐な鑑賞体験は他に代えがない。",
    why: "ベネッセによるアート×離島再生の成功例は、地域経済と文化の関係を語るうえで欠かせない事例。",
  },
  {
    title: "豊田市美術館",
    titleEn: "Toyota Municipal Museum of Art",
    founded: 1995,
    region: "愛知",
    city: "豊田市小坂本町",
    category: "公立 / 近現代",
    architect: "谷口吉生",
    summary:
      "谷口吉生の代表作のひとつとされる端正なモダン建築。日本の戦後美術と20世紀デザイン、海外現代美術を均整よく揃え、都市規模に対して質の高い企画展を打ち続けることで知られる。",
    highlight2026:
      "名古屋から電車で約1時間。日帰りでも訪ねやすく、建築・庭園・コレクションが一つの体験として設計されている希少な公立館。",
    why: "自動車産業の城下町が、文化への投資をどう続けてきたかという地方公共美術館の成熟例。",
  },
  {
    title: "青森県立美術館",
    titleEn: "Aomori Museum of Art",
    founded: 2006,
    region: "青森",
    city: "青森市安田",
    category: "公立 / 近現代",
    architect: "青木淳",
    summary:
      "隣接する三内丸山遺跡の発掘現場をモチーフにした、白い『トレンチ』型の建築が印象的。奈良美智の『あおもり犬』、シャガールのバレエ『アレコ』背景画など、空間と作品が一体化した展示が特徴。",
    highlight2026:
      "国際芸術祭やねぶた祭の時期に合わせると、東北の文化を一気に体験できる。十和田市現代美術館とのセット訪問もおすすめ。",
    why: "地域固有のモチーフを建築・コレクションに織り込んだ、地方美術館のアイデンティティ設計の好例。",
  },
];

const categories = Array.from(new Set(museums.map((m) => m.category)));
const regions = Array.from(new Set(museums.map((m) => m.region)));

function RegionBadge({ region }: { region: Region }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md text-[10px] font-bold tracking-wide px-2 py-1"
      style={{
        backgroundColor: `${ACCENT}14`,
        color: ACCENT,
      }}
    >
      {region}
    </span>
  );
}

export default function MuseumsSpecial2026Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: "美術館特集 2026", href: "/column/museums-special-2026" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span>美術館特集 2026</span>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-[30px] border px-6 py-10 md:px-10 md:py-14"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}14, ${COLUMN_COLOR}08, rgba(255,255,255,0.6))`,
        }}
      >
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: ACCENT,
            borderColor: `${ACCENT}40`,
            backgroundColor: `${ACCENT}12`,
          }}
        >
          Special / Museums 2026
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          一度は訪れたい、
          <br className="hidden sm:block" />
          日本の美術館10選
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          建築・コレクション・地域性。2026年に体験したい日本の美術館を、東京・京橋から直島・青森まで10館に絞って紹介します。週末の小旅行や出張のついでに、暮らしの解像度をひとつ上げる時間を。
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
              style={{
                color: ACCENT,
                backgroundColor: `${ACCENT}12`,
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
            掲載エリア
          </span>
          {regions.map((r) => (
            <RegionBadge key={r} region={r} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-foreground/50 leading-relaxed">
          ※ 開館時間・休館日・企画展のスケジュールは2026年4月時点の一般情報です。訪問前に各館の公式情報をご確認ください。
        </p>
      </section>

      {/* Museums */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">セレクト10館</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {museums.length} museums
          </span>
        </div>

        <div className="space-y-4">
          {museums.map((m, i) => (
            <article
              key={m.titleEn}
              className="p-6 rounded-2xl border border-brief-border bg-brief-card"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide"
                  style={{
                    color: ACCENT,
                    backgroundColor: `${ACCENT}12`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold"
                  style={{
                    color: COLUMN_COLOR,
                    backgroundColor: `${COLUMN_COLOR}12`,
                  }}
                >
                  {m.category}
                </span>
                <RegionBadge region={m.region} />
                <span className="text-[10px] tabular-nums text-foreground/45">
                  開館 {m.founded}
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                {m.title}
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {m.titleEn} · {m.city}
                {m.architect ? ` · 設計: ${m.architect}` : ""}
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{m.summary}</p>

              <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${ACCENT}08` }}>
                <p className="text-[11px] uppercase tracking-[1.5px] mb-1" style={{ color: ACCENT }}>
                  2026 Highlight
                </p>
                <p className="text-xs text-foreground/70 leading-relaxed">{m.highlight2026}</p>
              </div>

              <div className="mt-3 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">{m.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          特集は不定期で更新します。映画・読書・ドキュメンタリー特集もあわせてどうぞ。
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/column/movies-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            映画特集 →
          </Link>
          <Link
            href="/column"
            className="text-xs font-semibold underline underline-offset-4 text-foreground/60"
          >
            Columnへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
