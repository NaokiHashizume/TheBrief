import type { Metadata } from "next";
import Link from "next/link";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";

const dietHistory = [
  {
    year: "1868",
    tag: "明治維新",
    title: "明治維新と近代国家の出発",
    description:
      "王政復古の大号令により江戸幕府が倒れ、明治新政府が発足。五箇条の御誓文で「広ク会議ヲ興シ万機公論ニ決スベシ」と宣言し、議会制度の理念が初めて国家方針として示された。",
  },
  {
    year: "1874",
    tag: "自由民権運動",
    title: "民撰議院設立建白書",
    description:
      "板垣退助・後藤象二郎らが政府に「民撰議院設立建白書」を提出し、国民の代表による議会の開設を求めた。これを契機に自由民権運動が全国に広がり、各地で政治結社や私擬憲法が生まれた。",
  },
  {
    year: "1881",
    tag: "国会開設の勅諭",
    title: "明治天皇、国会開設を約束",
    description:
      "明治天皇が「国会開設の勅諭」を発し、1890年に国会を開くことを公約。これに応じて自由党（板垣退助）、立憲改進党（大隈重信）などの政党が結成され、近代政党政治の基盤が作られた。",
  },
  {
    year: "1889",
    tag: "大日本帝国憲法",
    title: "大日本帝国憲法の発布",
    description:
      "伊藤博文がプロイセン（ドイツ）の憲法を参考に起草した大日本帝国憲法が発布された。天皇主権のもと帝国議会（貴族院・衆議院）の設置が規定されたが、議会の権限は限定的で、天皇の統帥権や勅令による立法が認められていた。",
  },
  {
    year: "1890",
    tag: "帝国議会",
    title: "第1回帝国議会の開会",
    description:
      "アジア初の近代的議会として帝国議会が開会。衆議院は制限選挙（直接国税15円以上を納める25歳以上の男子）により選ばれた300名の議員で構成された。有権者は全人口の約1.1%に過ぎなかった。",
  },
  {
    year: "1925",
    tag: "普通選挙法",
    title: "普通選挙法の成立",
    description:
      "納税資格を撤廃し、25歳以上のすべての男子に選挙権が付与された。有権者は約330万人から約1,240万人へと約4倍に拡大。同時に治安維持法も成立し、社会運動への弾圧が強化された。",
  },
  {
    year: "1932",
    tag: "政党政治の終焉",
    title: "五・一五事件と政党内閣の崩壊",
    description:
      "海軍青年将校らが犬養毅首相を暗殺。以後、軍部の台頭により政党内閣は終わりを迎え、軍人や官僚を中心とする挙国一致内閣が続いた。帝国議会は形骸化し、軍部の意向が政策を左右する時代に突入した。",
  },
  {
    year: "1945",
    tag: "終戦と民主化",
    title: "ポツダム宣言受諾と戦後改革",
    description:
      "日本がポツダム宣言を受諾し終戦。GHQ（連合国軍最高司令官総司令部）の指導のもと民主化改革が進められた。女性参政権が認められ、1946年4月の総選挙で初めて女性が投票・立候補し、39名の女性議員が誕生した。",
  },
  {
    year: "1947",
    tag: "日本国憲法",
    title: "日本国憲法の施行と国会の誕生",
    description:
      "日本国憲法が施行され、国会は「国権の最高機関」かつ「唯一の立法機関」と位置づけられた。貴族院は廃止され参議院に替わり、主権は天皇から国民へ移った。現在の二院制がここに始まる。",
  },
  {
    year: "1955",
    tag: "55年体制",
    title: "自由民主党の結党と55年体制の成立",
    description:
      "自由党と日本民主党が合併し自由民主党が誕生（保守合同）。左右に分裂していた社会党も統一され、自民党と社会党の二大政党制（55年体制）が確立。以後38年間、自民党が一貫して政権を担い、高度経済成長を推進した。",
  },
  {
    year: "1993",
    tag: "55年体制の崩壊",
    title: "非自民連立政権の誕生",
    description:
      "自民党が分裂し、日本新党の細川護熙を首班とする非自民・非共産の連立政権が成立。55年体制が崩壊し、小選挙区比例代表並立制が導入された。以後、政党の離合集散が繰り返される流動的な政治状況が続く。",
  },
  {
    year: "2009",
    tag: "政権交代",
    title: "民主党への政権交代",
    description:
      "民主党が衆議院選挙で308議席を獲得し歴史的大勝。鳩山由紀夫内閣が発足し、戦後初の本格的な政権交代が実現した。しかし普天間基地問題、東日本大震災への対応などで支持を失い、2012年に自民党が政権を奪還。",
  },
  {
    year: "2012",
    tag: "自民党復権",
    title: "安倍内閣の発足とアベノミクス",
    description:
      "第2次安倍内閣が発足。大胆な金融緩和・機動的な財政政策・成長戦略の「三本の矢」（アベノミクス）で経済再生を推進した。安倍晋三は連続在職日数2,822日を記録し憲政史上最長の首相となったが、2020年に体調不良で辞任。",
  },
  {
    year: "2025–26",
    tag: "現在",
    title: "高市内閣と第221回国会",
    description:
      "2025年10月の自民党総裁選で高市早苗が史上初の女性総裁に選出され、第1次高市内閣が発足。2026年2月の第51回衆院選で自民党が316議席を獲得し歴史的大勝。現在、第221回特別国会が開会中。経済安全保障、防衛力強化、少子化対策が主要課題。",
  },
];

export const metadata: Metadata = {
  title: "国会 — 衆議院・参議院の構成",
  description:
    "日本の国会を構成する衆議院と参議院の役割、政党別議席数をわかりやすく解説します。",
  alternates: { canonical: "https://thebrief.info/politics/diet" },
};

function ChamberExplainer({
  title,
  titleEn,
  points,
}: {
  title: string;
  titleEn: string;
  points: { label: string; value: string }[];
}) {
  return (
    <div className="p-5 bg-brief-card rounded-xl">
      <h4 className="font-serif font-bold text-lg">{title}</h4>
      <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">{titleEn}</span>
      <dl className="mt-4 space-y-2">
        {points.map((p) => (
          <div key={p.label} className="flex gap-3">
            <dt className="text-xs text-foreground/55 w-24 flex-shrink-0 pt-0.5">{p.label}</dt>
            <dd className="text-sm text-foreground/70 leading-relaxed">{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function DietPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>国会</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">国会</h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        日本の国会は、衆議院（下院）と参議院（上院）の二院制で構成されています。
        両院はそれぞれ異なる役割と権限を持ち、法律の制定・予算の議決・条約の承認などを行います。
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        衆議院: 2026-02-08 第51回衆院選時点 ｜ 参議院: 2025-07-20 第27回参院選時点
      </p>

      {/* 二院制の解説 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <ChamberExplainer
          title="衆議院"
          titleEn="House of Representatives"
          points={[
            { label: "定数", value: "465議席（小選挙区289・比例代表176）" },
            { label: "任期", value: "4年（解散あり）" },
            { label: "被選挙権", value: "25歳以上" },
            { label: "優越権", value: "予算の先議権、予算・条約の承認、内閣総理大臣の指名で参議院に優越" },
            { label: "特徴", value: "解散があるため国民の最新の民意を反映しやすく、より強い権限を持つ。内閣不信任決議は衆議院のみが提出可能。" },
          ]}
        />
        <ChamberExplainer
          title="参議院"
          titleEn="House of Councillors"
          points={[
            { label: "定数", value: "248議席（選挙区148・比例代表100）" },
            { label: "任期", value: "6年（3年ごとに半数改選・解散なし）" },
            { label: "被選挙権", value: "30歳以上" },
            { label: "独自権限", value: "衆議院の解散中に緊急集会を開催可能" },
            { label: "特徴", value: "解散がなく長期的な視点で審議を行う「良識の府」。衆議院の行き過ぎを抑制するチェック機能を担う。" },
          ]}
        />
      </div>

      {/* 法案の流れ */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            法案の流れ
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            How a Bill Becomes Law
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>

      <p className="text-sm text-foreground/60 leading-relaxed mb-6">
        法案が国会に提出されてから法律として施行されるまでの流れです。
      </p>

      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {[
          { step: "1", title: "法案提出", desc: "内閣または議員が法案を国会に提出", color: "bg-foreground/10" },
          { step: "2", title: "委員会審議", desc: "専門委員会で質疑・修正・採決", color: "bg-foreground/10" },
          { step: "3", title: "衆議院 本会議", desc: "衆議院本会議で審議・採決", color: "bg-brief-red/10" },
          { step: "4", title: "参議院 本会議", desc: "参議院本会議で審議・採決", color: "bg-brief-red/10" },
          { step: "5", title: "成立", desc: "両院で可決されれば法案成立", color: "bg-amber-500/10" },
          { step: "6", title: "公布・施行", desc: "天皇が公布し、指定日に施行", color: "bg-green-500/10" },
        ].map((s, i, arr) => (
          <div key={s.step} className="flex items-center gap-3 flex-1">
            <div className={`flex-1 p-4 rounded-xl ${s.color} border border-brief-border`}>
              <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">Step {s.step}</div>
              <div className="font-serif font-bold text-sm">{s.title}</div>
              <div className="text-[10px] text-foreground/55 mt-1 leading-relaxed">{s.desc}</div>
            </div>
            {i < arr.length - 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/30 flex-shrink-0 hidden md:block">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-brief-card rounded-lg text-xs text-foreground/50 leading-relaxed">
        ※ 衆議院で可決後60日以内に参議院が議決しない場合、衆議院は参議院が否決したとみなすことができます（みなし否決）。
        衆議院で出席議員の2/3以上の多数で再び可決した場合、法律となります（衆議院の再議決権・憲法59条）。
      </div>

      {/* 衆議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            衆議院の議席構成
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            House of Representatives — Seats
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>
      <div className="p-6 border border-brief-border rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      {/* 参議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            参議院の議席構成
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            House of Councillors — Seats
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>
      <div className="p-6 border border-brief-border rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>

      {/* ━━━ 国会の歴史 ━━━ */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            国会の歴史
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            History of the National Diet
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>

      <p className="text-sm text-foreground/60 leading-relaxed mb-8">
        明治維新から現代まで、日本の議会制度は約150年の歴史を持ちます。
        自由民権運動による国会開設の要求から、帝国議会の誕生、戦後の新憲法下での国会の再出発まで、その歩みを時系列で辿ります。
      </p>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-px bg-foreground/5" />

        {dietHistory.map((era, i) => (
          <div key={era.year} className="relative pb-10 last:pb-0">
            {/* Dot */}
            <div
              className={`absolute left-[-25px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                i === 0
                  ? "bg-brief-red border-brief-red"
                  : "bg-background border-white/20"
              }`}
            >
              {i === 0 && (
                <div className="w-2 h-2 rounded-full bg-brief-card" />
              )}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold tabular-nums text-brief-red">{era.year}</span>
                <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/45 font-medium">
                  {era.tag}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold leading-snug">{era.title}</h3>
              <p className="mt-1.5 text-sm text-foreground/60 leading-relaxed">
                {era.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-brief-card rounded-lg text-xs text-foreground/50 leading-relaxed">
        ※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。
      </div>
    </div>
  );
}
