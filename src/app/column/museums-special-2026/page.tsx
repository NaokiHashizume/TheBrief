import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#be185d";

const URL = "https://thebrief.info/column/museums-special-2026";
const TITLE = "美術館特集 2026 — 一度は訪れたい日本の美術館8選";
const SUMMARY =
  "建築・コレクション・地域性。2026年に体験したい、日本を代表する美術館8館を厳選。各館の見どころと、2026年に開催される企画展ラインナップを一覧で紹介します。";

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

type Region = "東京" | "神奈川" | "京都";

type Exhibition = {
  title: string;
  period: string;
  description: string;
};

type Museum = {
  title: string;
  titleEn: string;
  founded: number;
  region: Region;
  city: string;
  category: string;
  architect?: string;
  summary: string;
  why: string;
  note?: string;
  exhibitions2026: Exhibition[];
};

const museums: Museum[] = [
  {
    title: "国立西洋美術館",
    titleEn: "The National Museum of Western Art (NMWA)",
    founded: 1959,
    region: "東京",
    city: "台東区上野公園",
    category: "国立 / 西洋美術",
    architect: "ル・コルビュジエ（本館）",
    summary:
      "日本で唯一、ル・コルビュジエが設計した本館を持つ国立美術館。松方コレクションを核にした中世末期から20世紀初頭までの西洋美術コレクションは国内随一で、本館は2016年に世界文化遺産に登録された。",
    why: "印象派と西洋古典の二本柱で、いまの日本美術館史を語るうえで避けて通れない『基準館』。2026年は北欧・印象派・近代版画と分野を横断する大型展が連続する。",
    exhibitions2026: [
      {
        title: "チュルリョーニス展 内なる星図",
        period: "2026年3月28日 — 6月14日",
        description:
          "リトアニアを代表する画家・作曲家ミカロユス・コンスタンティナス・チュルリョーニスの大回顧展。象徴主義と音楽が交差する独特の宇宙観を、東欧美術の文脈とともに紹介する日本初の本格展。",
      },
      {
        title: "版画家レンブラント — 挑戦、継承、インパクト",
        period: "2026年7月7日 — 9月23日",
        description:
          "油彩で知られるレンブラントを『版画家』として再定義する企画。エッチングの技術革新と、後世の版画家たちへのインパクトを、版下と摺りの比較で具体的に追う。",
      },
      {
        title: "テート美術館 ターナー展 — 崇高の絵画、現代美術との対話",
        period: "2026年10月24日 — 2027年2月21日",
        description:
          "テート所蔵のターナー作品を軸に、19世紀英国の『崇高』の美学が現代美術にどう受け継がれているかを、現代作家とのカップリングで示す野心的な構成。",
      },
      {
        title: "井内コレクション 葛飾北斎『冨嶽三十六景』一挙公開",
        period: "2026年予定",
        description:
          "井内コレクションから国立西洋美術館に寄託された北斎『冨嶽三十六景』全揃を、まとめて公開する小特集。西洋美術の館で日本美術の名品をどう見るか、というキュレーションの問いを孕む。",
      },
    ],
  },
  {
    title: "東京都美術館",
    titleEn: "Tokyo Metropolitan Art Museum",
    founded: 1926,
    region: "東京",
    city: "台東区上野公園",
    category: "公立 / 総合",
    architect: "前川國男（1975年再建）",
    summary:
      "1926年開館、日本初の公立美術館。前川國男によるレンガ壁の現本館は、日本のモダニズム建築の代表作。海外からの大型巡回展、公募展、教育普及プログラムを並行して走らせる『総合型美術館』の原型。",
    why: "2026年は開館100周年のメモリアルイヤー。海外巡回展・公募展・地域連携事業が同時に走る、日本の公立美術館の到達点を体感できる稀有な一年。",
    note: "2026年は開館100周年。特別展に加え、アーカイブズ資料展示やシンポジウムなど100周年記念事業が年間を通じて展開される。",
    exhibitions2026: [
      {
        title: "スウェーデン絵画 北欧の光、日常のかがやき",
        period: "2026年1月27日 — 4月12日",
        description:
          "スウェーデン国立美術館の全面協力で実現する、19世紀末から20世紀初頭のスウェーデン絵画黄金期の特別展。北欧特有の光と『日常』を描くことの意味を、日本でまとめて見られる貴重な機会。",
      },
      {
        title: "都美セレクション グループ展 2026",
        period: "2026年6月10日 — 7月1日",
        description:
          "公募で選ばれた若手・中堅作家のグループ展。海外巡回展とは別の、日本の現代美術の足元を見る企画として東京都美術館の伝統的なプログラム。",
      },
      {
        title: "この場所の風景 〜 上野・大牟田・ブエノスアイレス",
        period: "2026年7月23日 — 10月7日",
        description:
          "上野（東京）、大牟田（福岡）、ブエノスアイレス（アルゼンチン）という三つの都市を『場所』というキーワードで横断する企画展。100周年記念事業のひとつとして、地域と美術館の関係を問い直す。",
      },
      {
        title: "大英博物館日本美術コレクション 百花繚乱 〜 海を越えた江戸絵画",
        period: "2026年7月25日 — 10月18日",
        description:
          "大英博物館が所蔵する日本美術コレクションから、海を渡った江戸絵画の名品を里帰り展示する特別展。鈴木春信から葛飾北斎、伊藤若冲まで、英国に渡った日本美の歴史を辿る。",
      },
      {
        title: "オルセー美術館所蔵 いまを生きる歓び",
        period: "2026年11月14日 — 2027年3月28日",
        description:
          "オルセー美術館コレクションを軸にした特別展。19世紀末から20世紀初頭、近代化のなかで人々が日常の歓びをどう描いたかをテーマに、ナビ派・印象派の名品が一堂に並ぶ100周年締めくくりの大型展。",
      },
    ],
  },
  {
    title: "上野の森美術館",
    titleEn: "The Ueno Royal Museum",
    founded: 1972,
    region: "東京",
    city: "台東区上野公園",
    category: "私立 / 企画展・公募展",
    summary:
      "公益財団法人日本美術協会が運営する私立美術館。固定的なコレクションを持たず、国際的な大型企画展と若手登竜門の公募展（VOCA展、上野の森美術館大賞展ほか）を両輪で展開する、上野公園内のもう一つの拠点。",
    why: "国立館とは違うフットワークで、現代の動向と海外巡回展を組み合わせる私立美術館のスタイルが見える。混雑必至の話題展は時間帯を選んで訪れたい。",
    exhibitions2026: [
      {
        title: "VOCA展 2026 — 現代美術の展望 新しい平面の作家たち",
        period: "2026年春",
        description:
          "全国の学芸員・美術評論家の推薦で選ばれた40歳以下の若手作家による平面作品の展覧会。現代日本の絵画・写真・新メディアの最前線を、毎年の定点観測として追える同館の看板公募展。",
      },
      {
        title: "大ゴッホ展 夜のカフェテラス",
        period: "2026年5月29日 — 8月12日",
        description:
          "クレラー＝ミュラー美術館所蔵の傑作『夜のカフェテラス』を中心に、ゴッホの代表作と関連資料を集めた大型企画展。アルル時代の色彩と筆致の革新を、油彩・素描・書簡で立体的に紹介する。",
      },
      {
        title: "シンシナティ美術館展 — アメリカに渡ったヨーロッパの至宝",
        period: "2026年10月10日 — 2027年1月10日",
        description:
          "米国オハイオ州のシンシナティ美術館コレクションから、欧州絵画の名品を紹介する特別展。米国の財団とコレクターが20世紀にどのように欧州美術を蓄積したかが見える、文化資本の地政学を読む展覧会。",
      },
      {
        title: "第44回 上野の森美術館大賞展 / 第39回 日本の自然を描く展",
        period: "2026年予定",
        description:
          "同館を象徴する公募展2本。『大賞展』は写実から抽象まで現代日本の絵画を広く掬い、『日本の自然を描く展』は風景画というクラシックな主題で全国の作家を集める。日本のアマチュア／プロの裾野を知る窓口。",
      },
    ],
  },
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
    why: "美術館の役割が『所蔵』から『場の編集』へと拡張する流れを、最も体感しやすい一館。2026年度は『多様な美術表現』と『女性のクリエーション』をテーマに5本の大型企画が並ぶ。",
    exhibitions2026: [
      {
        title: "テート美術館 — YBA & BEYOND 世界を変えた90s 英国アート",
        period: "2026年2月11日 — 5月11日",
        description:
          "ダミアン・ハースト、トレイシー・エミン、サラ・ルーカスら『Young British Artists（YBA）』と1990年代以降の英国現代美術を、テート・コレクションから一望する大型企画展。",
      },
      {
        title: "生誕100年 森英恵 ヴァイタル・タイプ",
        period: "2026年4月15日 — 7月6日",
        description:
          "戦後日本のファッションを世界に押し上げたデザイナー・森英恵の生誕100年を記念する大規模回顧展。代表作の衣装、写真、映像で創作の全貌に迫る。",
      },
      {
        title: "ピカソ meets ポール・スミス 遊び心の冒険へ",
        period: "2026年予定",
        description:
          "20世紀美術の巨匠ピカソと、英国を代表するファッションデザイナー、ポール・スミスをクロスオーバーさせる異色の企画。色彩と遊び心という共通項で2人の創造を読み解く。",
      },
      {
        title: "ルーヴル美術館展 ルネサンス",
        period: "2026年9月9日 — 12月13日",
        description:
          "ルーヴル美術館の至宝を紹介するシリーズ最新章。日本初公開となるレオナルド・ダ・ヴィンチの作品を含むイタリア・ルネサンスの傑作群が一堂に並ぶ、2026年の目玉。",
      },
      {
        title: "少女漫画・インフィニティ 萩尾望都×山岸凉子×大和和紀 三人展",
        period: "2026年10月28日 — 2027年2月8日",
        description:
          "1970年代に少女漫画を芸術へと押し上げた3人の女性作家の原画と関連資料を網羅。漫画とアートの境界を更新する、世代を越えて訪れたい展覧会。",
      },
    ],
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
    why: "アートが社会や経済のテーマをどう批評するかを最前線で観察できる。2026年度は『時間と人間の本質を問う』ことをテーマに、海外の巨匠と日本の重要作家の個展が並ぶ。",
    exhibitions2026: [
      {
        title: "ロン・ミュエク展",
        period: "2026年4月29日 — 9月23日",
        description:
          "等身大を超えるハイパーリアリズム彫刻で知られるオーストラリア出身の作家、ロン・ミュエクの日本では16年ぶりとなる個展。生・老・死をめぐる作品が、人間の身体感覚を揺さぶる。",
      },
      {
        title: "森万里子展",
        period: "2026年10月31日 — 2027年3月28日",
        description:
          "国内では2002年の東京都現代美術館『森万里子ピュアランド』以来24年ぶりの大規模美術館個展。インスタレーション、彫刻、映像、ドローイング、パフォーマンスなど30年以上の実践から約80点が一堂に会する。",
      },
    ],
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
    why: "戦後日本の財団がいかに西洋近代絵画を蓄積してきたか、文化資本の歴史が見える場所。2026年は印象派の巨匠と日本の前衛、現代アーティストとの対話が交差する一年。",
    exhibitions2026: [
      {
        title: "クロード・モネ — 風景への問いかけ",
        period: "2026年2月7日 — 5月24日",
        description:
          "印象派の中核としてのモネを『風景画家』として再考する企画展。没後100年に合わせ、石橋財団コレクションと国内外の名品で、モネが生涯にわたり問い続けた『見ること』を辿る。",
      },
      {
        title: "瀧口修造 書くことと描くこと",
        period: "2026年6月23日 — 10月4日",
        description:
          "戦後日本の前衛詩人にしてシュルレアリスム最大の理論的支柱、瀧口修造の言葉と造形を横断する大型企画。詩・批評・デカルコマニーまで全方位的にその仕事を再評価する。",
      },
      {
        title: "エトランゼたち（仮題）",
        period: "2026年10月24日 — 2027年1月31日",
        description:
          "『異邦人』としての視点をテーマに、20世紀以降の作家たちが土地と所属の境界をどう描いたかを問う企画。同時代の越境的な美術史を組み立て直す試み。",
      },
      {
        title: "エットレ・ソットサス（仮題） / ジャム・セッション 藤井光",
        period: "2026年夏 — 2027年初頭",
        description:
          "日本初の本格回顧展となるイタリアのデザイナー、エットレ・ソットサス展に加え、現代美術家・藤井光と石橋財団コレクションを掛け合わせる『ジャム・セッション』の2本も予定。",
      },
    ],
  },
  {
    title: "京都市京セラ美術館",
    titleEn: "Kyoto City KYOCERA Museum of Art",
    founded: 1933,
    region: "京都",
    city: "京都市左京区岡崎",
    category: "公立 / 近現代",
    architect: "前田健二郎（1933年）／青木淳・西澤徹夫（2020年リニューアル）",
    summary:
      "1933年開館の旧京都市美術館。2020年に青木淳・西澤徹夫の設計でリニューアルし、地下に新エントランス『ガラス・リボン』を設けて公園と一体化させた。京都市現代美術コレクションを核に、近代日本画から海外巡回展まで横断的に扱う関西最大級の総合美術館。",
    why: "戦前のクラシカルな本館と、令和のリノベーション建築が同居する稀有な空間。2026年はジブリ・浮世絵・写真祭・YBA英国アートと、ポップから現代美術まで振れ幅の大きい一年。",
    exhibitions2026: [
      {
        title: "KYOTOGRAPHIE 京都国際写真祭 2026",
        period: "2026年4月18日 — 5月17日",
        description:
          "京都市内全域を会場に開催される国際写真祭のメイン会場のひとつ。海外作家の初公開作と日本人若手のキュレーション展示が並び、写真というメディアの『いま』を一気に俯瞰できる毎春の定点観測。",
      },
      {
        title: "テート美術館 — YBA & BEYOND 世界を変えた90s 英国アート",
        period: "2026年6月3日 — 9月6日",
        description:
          "国立新美術館（東京）と巡回する大型企画の関西会場。ダミアン・ハースト、トレイシー・エミンらYBA世代と1990年代以降の英国現代美術を、テート・コレクションから一望できる。",
      },
      {
        title: "浮世絵スーパークリエイター 歌川国芳展",
        period: "2026年7月18日 — 9月23日",
        description:
          "幕末江戸の鬼才・歌川国芳の大規模回顧展。武者絵、戯画、洋風表現、猫絵まで国芳の振り幅の広さを総覧し、現代マンガ・アニメへの影響まで射程に入れる構成。",
      },
      {
        title: "生誕140年記念 染織家 山鹿清華 — 宙翔ぶイマジネーション",
        period: "2026年9月19日 — 12月20日",
        description:
          "京都を拠点に近代日本の染織界を牽引した山鹿清華の生誕140年を期する大規模個展。京都ならではの工芸文脈で、デザイン史とテクスチャーの革新を辿る。",
      },
      {
        title: "禅とジブリ展",
        period: "2026年10月3日 — 12月6日",
        description:
          "スタジオジブリと禅文化を交差させる企画展。京都という土地で『禅』のイメージとジブリ作品の絵づくりを照らし合わせ、日本のアニメーションと宗教美術の関係を掘る話題作。",
      },
    ],
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
    why: "化粧品メーカーの企業コレクションが、地方創生と文化振興にどう寄与しているかが分かる。2026年は開館25周年、モネ没後100年というふたつの節目が重なる特別な一年。",
    exhibitions2026: [
      {
        title: "SPRING わきあがる鼓動",
        period: "2025年12月13日 — 2026年5月31日",
        description:
          "アートにおける『飛躍する力』をテーマに、絵画・彫刻・工芸・インスタレーションを横断的に紹介。私たちの存在と感性を揺さぶる作品群で『生命のリズム』を体感する企画。",
      },
      {
        title: "開館25周年記念 没後100年 モネ×現代アート（仮）",
        period: "2026年6月17日 — 2027年4月7日（予定）",
        description:
          "ポーラ美術館の開館25周年と、クロード・モネ没後100年を記念する大型企画。世界有数の質を誇るポーラのモネ・コレクションを一堂に展観し、現代アーティストとの対話を通じてモネが現代に投げかける問いを浮かび上がらせる。",
      },
    ],
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
          日本の美術館8選
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          建築・コレクション・地域性。2026年に体験したい日本の美術館を、上野・京橋・六本木から京都・箱根まで8館に絞って紹介します。各館の見どころに加え、2026年に開催される企画展のラインナップを一覧でまとめました。
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
          ※ 開館時間・休館日・企画展のスケジュールは2026年4月時点で公表されている情報をもとに編集しています。会期・名称は変更される可能性があるため、訪問前に各館の公式情報をご確認ください。
        </p>
      </section>

      {/* Museums */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">セレクト8館</h2>
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

              <div className="mt-3 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">{m.why}</p>
              </div>

              {m.note && (
                <div
                  className="mt-3 p-3 rounded-lg border text-[11px] leading-relaxed"
                  style={{
                    borderColor: `${ACCENT}33`,
                    backgroundColor: `${ACCENT}08`,
                    color: "rgb(var(--foreground) / 0.7)",
                  }}
                >
                  <span className="font-semibold mr-1" style={{ color: ACCENT }}>
                    Note
                  </span>
                  {m.note}
                </div>
              )}

              {/* 2026 exhibitions */}
              <div className="mt-5">
                <div className="flex items-baseline justify-between mb-2">
                  <p
                    className="text-[10px] uppercase tracking-[1.8px] font-bold"
                    style={{ color: ACCENT }}
                  >
                    2026 Exhibitions
                  </p>
                  <span className="text-[10px] text-foreground/40 tabular-nums">
                    {m.exhibitions2026.length} 本
                  </span>
                </div>

                <ol className="space-y-3">
                  {m.exhibitions2026.map((ex, j) => (
                    <li
                      key={`${m.titleEn}-ex-${j}`}
                      className="p-3 rounded-lg border border-brief-border"
                      style={{ backgroundColor: `${ACCENT}06` }}
                    >
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span
                          className="text-[10px] tabular-nums font-bold"
                          style={{ color: ACCENT }}
                        >
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-[13px] md:text-sm font-bold leading-snug text-foreground/90">
                          {ex.title}
                        </h4>
                      </div>
                      <p
                        className="text-[10px] tabular-nums mb-1.5"
                        style={{ color: ACCENT }}
                      >
                        会期: {ex.period}
                      </p>
                      <p className="text-[12px] text-foreground/65 leading-relaxed">
                        {ex.description}
                      </p>
                    </li>
                  ))}
                </ol>
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
