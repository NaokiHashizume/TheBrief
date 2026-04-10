"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   LLM Token Guide — Diagrams
   ──────────────────────────────────────────────────────────── */

const ACCENT = "#6366f1";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#d97706";
const PURPLE = "#7c3aed";
const TEAL = "#0d9488";

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

/* ── 1. Token Overview — what a token is ── */
export function TokenOverviewDiagram() {
  const examples = [
    { text: "Hello world", tokens: 2, lang: "英語", langEn: "English", color: GREEN },
    { text: "tokenization", tokens: 2, lang: "英語（分割）", langEn: "English (split)", color: BLUE },
    { text: "こんにちは世界", tokens: "6〜8", lang: "日本語", langEn: "Japanese", color: AMBER },
    { text: "1000トークン", tokens: "≈750語", lang: "英語換算", langEn: "English equiv.", color: PURPLE },
    { text: "1000トークン", tokens: "≈500〜700字", lang: "日本語換算", langEn: "Japanese equiv.", color: RED },
  ];
  return (
    <Card
      title={<T ja="トークンの基本 — 言語ごとのトークン換算" en="Token Basics — Token Count by Language" />}
      subtitle={<T ja="LLMは文字ではなくトークン（断片）を処理する" en="LLMs process tokens (fragments), not characters" />}
    >
      <div className="space-y-2.5">
        {examples.map((ex) => (
          <div
            key={ex.text}
            className="flex items-center justify-between gap-3 p-3 rounded-xl border border-brief-border"
            style={{ borderLeftColor: ex.color, borderLeftWidth: 3 }}
          >
            <div className="flex-1 min-w-0">
              <code
                className="text-[13px] font-mono font-semibold"
                style={{ color: ex.color }}
              >
                {ex.text}
              </code>
              <span className="text-[10px] text-foreground/40 ml-2">
                <T ja={ex.lang} en={ex.langEn} />
              </span>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-[15px] font-bold tabular-nums" style={{ color: ex.color }}>
                {ex.tokens}
              </span>
              <span className="text-[10px] text-foreground/40 ml-1">
                <T ja="トークン" en="tokens" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-foreground/40 mt-3">
        <T ja="※ トークン数はモデル・トークナイザーにより変動" en="* Token counts vary by model and tokenizer" />
      </p>
    </Card>
  );
}

/* ── 2. BPE Flow ── */
export function TokenBpeDiagram() {
  const steps = [
    {
      step: "01",
      title: "初期語彙",
      titleEn: "Initial vocabulary",
      desc: "すべての文字（またはバイト）を個別のトークンとして開始",
      descEn: "Start with every character (or byte) as its own token",
      example: "l o w e r, n e w e s t …",
      color: ACCENT,
    },
    {
      step: "02",
      title: "頻度カウント",
      titleEn: "Frequency count",
      desc: "テキスト全体で隣接トークンペアの出現頻度を計測",
      descEn: "Count frequency of adjacent token pairs across all text",
      example: '"e"+"s" → 8回, "e"+"r" → 6回, …',
      color: BLUE,
    },
    {
      step: "03",
      title: "最頻ペアをマージ",
      titleEn: "Merge most frequent pair",
      desc: "最も多いペアを新しい単一トークンとして語彙に追加",
      descEn: "Add the most frequent pair as a new single token",
      example: '"e"+"s" → "es" が新トークンに',
      color: GREEN,
    },
    {
      step: "04",
      title: "繰り返し",
      titleEn: "Repeat",
      desc: "目標語彙サイズ（通常3.2万〜10万）に達するまで2〜3を繰り返す",
      descEn: "Repeat steps 2-3 until target vocabulary size (32K–100K) is reached",
      example: '"new"+"est" → "newest" が1トークン',
      color: PURPLE,
    },
  ];
  return (
    <Card
      title={<T ja="BPE（バイトペア符号化）のアルゴリズム" en="BPE (Byte Pair Encoding) Algorithm" />}
      subtitle={<T ja="GPT・Claudeが使うトークン化手法の基礎" en="Foundation of tokenization used in GPT and Claude" />}
    >
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s.step} className="flex gap-3">
            <div
              className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold mt-0.5"
              style={{ backgroundColor: s.color }}
            >
              {s.step}
            </div>
            <div className="flex-1 pb-3 border-b border-brief-border/50 last:border-0">
              <div className="font-semibold text-[13px] mb-0.5">
                <T ja={s.title} en={s.titleEn} />
              </div>
              <div className="text-[12px] text-foreground/60 leading-relaxed mb-1.5">
                <T ja={s.desc} en={s.descEn} />
              </div>
              <code className="text-[11px] text-foreground/40 font-mono">{s.example}</code>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. CJK Token Disadvantage ── */
export function TokenCjkDiagram() {
  const langs = [
    { lang: "英語", langEn: "English", multiplier: 1, bar: 25, color: GREEN, example: '"Hello world" = 2 tokens' },
    { lang: "韓国語", langEn: "Korean", multiplier: 1.5, bar: 38, color: AMBER, example: '"안녕하세요 세계" = 3〜6 tokens' },
    { lang: "日本語", langEn: "Japanese", multiplier: 2.5, bar: 62, color: RED, example: '"こんにちは世界" = 6〜8 tokens' },
    { lang: "中国語", langEn: "Chinese", multiplier: 4, bar: 100, color: PURPLE, example: '"你好世界" = 6〜12 tokens' },
  ];
  return (
    <Card
      title={<T ja="CJK言語のトークン非効率 — 同じ意味でも英語の最大4倍" en="CJK Token Inefficiency — Up to 4× vs. English for Same Meaning" />}
      subtitle={<T ja="BPEが英語データ中心で学習された構造的問題" en="A structural consequence of BPE trained on English-dominant data" />}
    >
      <div className="space-y-3 mb-4">
        {langs.map((l) => (
          <div key={l.lang}>
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="text-[13px] font-semibold">
                  <T ja={l.lang} en={l.langEn} />
                </span>
                <span className="text-[10px] text-foreground/40 ml-2 font-mono">{l.example}</span>
              </div>
              <span className="font-bold tabular-nums text-[13px]" style={{ color: l.color }}>
                {l.multiplier === 1 ? "基準" : `×${l.multiplier}`}
              </span>
            </div>
            <div className="h-2.5 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded"
                style={{ width: `${l.bar}%`, backgroundColor: l.color, opacity: 0.75 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border border-brief-border/50 bg-foreground/[0.02]">
        <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-1.5">
          <T ja="実務への影響" en="Practical impact" />
        </div>
        <p className="text-[12px] text-foreground/60 leading-relaxed">
          <T
            ja="同じコードレビュー依頼を日本語で送ると英語の約2.7倍のAPIコストがかかる。Anthropicのissue #26401では「日本語ユーザーが英語話者の2〜3倍速く週次利用上限に達する」という問題が報告されている"
            en="The same code review request in Japanese costs ~2.7× more in API fees. Anthropic issue #26401 reports Japanese/CJK users hitting weekly usage caps 2–3× faster than English speakers for identical work"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 4. Context Window Growth Timeline ── */
export function TokenContextDiagram() {
  const models = [
    { year: "2020", model: "GPT-3", tokens: "4,096", bar: 2, color: BLUE },
    { year: "2022", model: "GPT-3.5 Turbo", tokens: "16,384", bar: 6, color: TEAL },
    { year: "2023", model: "Claude 1", tokens: "100,000", bar: 12, color: PURPLE },
    { year: "2024", model: "GPT-4 Turbo", tokens: "128,000", bar: 15, color: ACCENT },
    { year: "2024", model: "Claude 3 Opus", tokens: "200,000", bar: 20, color: GREEN },
    { year: "2025", model: "Claude Opus 4.6", tokens: "1,000,000", bar: 55, color: AMBER },
    { year: "2024", model: "Gemini 1.5 Pro", tokens: "2,000,000", bar: 100, color: RED },
  ];
  return (
    <Card
      title={<T ja="コンテキストウィンドウの拡大 — 4,096→200万トークン（500倍）" en="Context Window Expansion — 4,096 → 2M Tokens (500×)" />}
      subtitle={<T ja="2020〜2025年の4年間で。ただし「実用上限」は公称値の60〜80%" en="Over 4 years 2020–2025. But 'reliable limit' is 60–80% of advertised size" />}
    >
      <div className="space-y-2.5">
        {models.map((m) => (
          <div key={`${m.year}-${m.model}`}>
            <div className="flex items-center justify-between mb-1 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] tabular-nums text-foreground/35 w-8 shrink-0">{m.year}</span>
                <span className="text-[12px] font-medium text-foreground/75">{m.model}</span>
              </div>
              <span className="font-bold tabular-nums text-[12px] shrink-0" style={{ color: m.color }}>{m.tokens}</span>
            </div>
            <div className="h-2 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded"
                style={{ width: `${m.bar}%`, backgroundColor: m.color, opacity: 0.7 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50">
        <p className="text-[11px] text-foreground/55 leading-relaxed">
          <T
            ja="⚠ コンテキスト崩壊: モデルはコンテキストの「中間」部分への注意が薄れる「Lost in the Middle」問題がある。重要情報は先頭か末尾に配置するのがベストプラクティス"
            en="⚠ Context rot: Models underweight information in the 'middle' of long contexts (Lost in the Middle problem). Best practice: place critical info at the start or end"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 5. Pricing Comparison ── */
export function TokenPricingDiagram() {
  const providers = [
    {
      provider: "Anthropic",
      models: [
        { name: "Claude Haiku 4.5", input: 1.00, output: 5.00, color: BLUE },
        { name: "Claude Sonnet 4.6", input: 3.00, output: 15.00, color: ACCENT },
        { name: "Claude Opus 4.6", input: 5.00, output: 25.00, color: PURPLE },
      ],
    },
    {
      provider: "OpenAI",
      models: [
        { name: "GPT-5 Nano", input: 0.05, output: 0.40, color: GREEN },
        { name: "GPT-5.2", input: 1.75, output: 14.00, color: TEAL },
        { name: "GPT-5.2 Pro", input: 21.00, output: 168.00, color: RED },
      ],
    },
    {
      provider: "Google",
      models: [
        { name: "Gemini 3 Flash", input: 0.50, output: 3.00, color: GREEN },
        { name: "Gemini 3.1 Pro", input: 2.00, output: 12.00, color: AMBER },
      ],
    },
  ];
  return (
    <Card
      title={<T ja="主要LLMのトークン価格比較 2026" en="Major LLM Token Pricing Comparison 2026" />}
      subtitle={<T ja="百万トークンあたり（USD）。2023年比で約10倍の価格下落" en="Per million tokens (USD). ~10× price drop vs. 2023" />}
    >
      <div className="space-y-5">
        {providers.map((p) => (
          <div key={p.provider}>
            <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-2">{p.provider}</div>
            <div className="space-y-1.5">
              {p.models.map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: m.color, opacity: 0.8 }} />
                  <span className="text-[12px] text-foreground/70 flex-1">{m.name}</span>
                  <span className="text-[11px] tabular-nums font-semibold" style={{ color: m.color }}>
                    ${m.input.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-foreground/30">/</span>
                  <span className="text-[11px] tabular-nums font-semibold text-foreground/50">
                    ${m.output.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-[10px] text-foreground/35 pt-1 border-t border-brief-border/40">
          <T ja="左がInput価格、右がOutput価格（百万トークンあたりUSD）" en="Left = input price, right = output price (USD per million tokens)" />
        </div>
      </div>
    </Card>
  );
}

/* ── 6. Future: BLT Architecture ── */
export function TokenFutureDiagram() {
  return (
    <Card
      title={<T ja="Meta BLT — トークンなき次世代アーキテクチャ" en="Meta BLT — The Next-Gen Tokenizer-Free Architecture" />}
      subtitle={<T ja="Byte Latent Transformer（2024年12月発表、ACL 2025）" en="Byte Latent Transformer (announced Dec 2024, presented at ACL 2025)" />}
    >
      <div className="space-y-4">
        {/* Architecture diagram */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: "生テキスト（バイト列）", labelEn: "Raw text (bytes)", color: ACCENT },
            { label: "→", color: "transparent" },
            { label: "ローカルエンコーダ（小型）", labelEn: "Local Encoder (small)", color: BLUE },
            { label: "→", color: "transparent" },
            { label: "潜在グローバルTransformer（大型）", labelEn: "Latent Global Transformer (large)", color: PURPLE },
            { label: "→", color: "transparent" },
            { label: "ローカルデコーダ（小型）", labelEn: "Local Decoder (small)", color: GREEN },
          ].map((item, i) => (
            item.label === "→" ? (
              <span key={i} className="text-foreground/25 text-[16px]">→</span>
            ) : (
              <div
                key={i}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-white"
                style={{ backgroundColor: item.color }}
              >
                <T ja={item.label} en={item.labelEn!} />
              </div>
            )
          ))}
        </div>

        {/* Key advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: "⚡",
              title: "推論FLOP 50%削減",
              titleEn: "50% fewer inference FLOPs",
              desc: "Llama 3と同等性能をFLOPsの半分で達成",
              descEn: "Matches Llama 3 performance at half the FLOPs",
              color: GREEN,
            },
            {
              icon: "🌏",
              title: "言語バイアスなし",
              titleEn: "No language bias",
              desc: "日本語・中国語が英語と構造的に対等に処理される",
              descEn: "Japanese/Chinese processed on equal structural footing as English",
              color: BLUE,
            },
            {
              icon: "🔡",
              title: "文字操作タスクで強い",
              titleEn: "Superior on character tasks",
              desc: "スペル・文字操作・コードでLlamaを上回る",
              descEn: "Outperforms Llama on spelling, manipulation, code",
              color: ACCENT,
            },
            {
              icon: "⚠️",
              title: "現状は研究段階",
              titleEn: "Still research-stage",
              desc: "2026年現在、Metaから実用化スケジュールの発表なし",
              descEn: "As of 2026, Meta has not announced a productization timeline",
              color: AMBER,
            },
          ].map((item) => (
            <div key={item.title} className="p-3 rounded-xl border border-brief-border" style={{ borderTopColor: item.color, borderTopWidth: 2 }}>
              <div className="flex items-center gap-2 mb-1">
                <span>{item.icon}</span>
                <span className="font-semibold text-[12px]">
                  <T ja={item.title} en={item.titleEn} />
                </span>
              </div>
              <p className="text-[11px] text-foreground/55 leading-relaxed">
                <T ja={item.desc} en={item.descEn} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
