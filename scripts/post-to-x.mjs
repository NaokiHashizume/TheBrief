#!/usr/bin/env node
/**
 * TheBrief 自動 X (Twitter) 投稿スクリプト
 *
 * - src/lib 配下の記事メタデータ (slug / title / tags) を正規表現で抽出
 * - LRU ローテーションで過去投稿と重複しない記事を選択
 * - Claude API + Web 検索で「いまの日本のトレンドに乗せた」ツイート文を動的生成
 *   (ANTHROPIC_API_KEY 未設定時は静的テンプレにフォールバック)
 * - 記事ページの OGP 画像を取得して X にメディアアップロード → ツイートに添付
 * - X API v2 POST /2/tweets へ OAuth1.0a で投稿
 *
 * 必要な環境変数:
 *   X_API_KEY         (Consumer Key / API Key)
 *   X_API_SECRET      (Consumer Secret / API Key Secret)
 *   X_ACCESS_TOKEN
 *   X_ACCESS_SECRET
 *
 * オプション環境変数:
 *   ANTHROPIC_API_KEY 設定すると Claude Haiku + Web 検索で文面動的生成
 *   X_DRY_RUN=1       投稿せずに生成内容のみ表示
 *   SITE_URL          既定 https://thebrief.info
 */

import { readFile, writeFile } from "node:fs/promises";
import { createHmac, randomBytes } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LIB_DIR = path.join(REPO_ROOT, "src", "lib");
const HISTORY_FILE = path.join(__dirname, "x-post-history.json");
const SITE_URL = process.env.SITE_URL || "https://thebrief.info";

// ── どのファイルがどの URL prefix を持つか ──
// (sitemap.ts と整合)
const ARTICLE_SOURCES = [
  { file: "ai.ts", urlPrefix: "/industry/ai" },
  { file: "ict.ts", urlPrefix: "/industry/ict" },
  { file: "retail.ts", urlPrefix: "/industry/retail" },
  { file: "construction.ts", urlPrefix: "/industry/construction" },
  { file: "dining.ts", urlPrefix: "/industry/dining" },
  { file: "energy.ts", urlPrefix: "/industry/energy" },
  { file: "entertainment.ts", urlPrefix: "/industry/entertainment" },
  { file: "finance.ts", urlPrefix: "/industry/finance" },
  { file: "food.ts", urlPrefix: "/industry/food" },
  { file: "logistics.ts", urlPrefix: "/industry/logistics" },
  { file: "materials.ts", urlPrefix: "/industry/materials" },
  { file: "pharma.ts", urlPrefix: "/industry/pharma" },
  { file: "services.ts", urlPrefix: "/industry/services" },
  { file: "specialty.ts", urlPrefix: "/industry/specialty" },
  { file: "trading.ts", urlPrefix: "/industry/trading" },
  { file: "daily.ts", urlPrefix: "/industry/daily" },
  { file: "other.ts", urlPrefix: "/industry/other" },
  { file: "economyArticles.ts", urlPrefix: "/economy" },
  { file: "politicsArticles.ts", urlPrefix: "/politics/articles" },
];

// ── 1. 記事メタを正規表現で抽出 ──
async function loadArticles() {
  const all = [];
  for (const { file, urlPrefix } of ARTICLE_SOURCES) {
    let text;
    try {
      text = await readFile(path.join(LIB_DIR, file), "utf8");
    } catch {
      continue; // ファイルが無ければスキップ
    }

    // { slug: "...", title: "...",  ... tags: ["...", ...]
    // タイトルは複数行になり得ないので 1 行で OK
    const objRegex =
      /\{\s*slug:\s*"([^"]+)",\s*\n\s*title:\s*"((?:[^"\\]|\\.)*)"(?:[\s\S]*?tags:\s*\[([^\]]*)\])?/g;

    let m;
    while ((m = objRegex.exec(text)) !== null) {
      const [, slug, rawTitle, rawTags] = m;
      const tags = rawTags
        ? Array.from(rawTags.matchAll(/"([^"]+)"/g)).map((x) => x[1])
        : [];
      all.push({
        slug,
        title: rawTitle.replace(/\\"/g, '"'),
        tags,
        url: `${SITE_URL}${urlPrefix}/${slug}`,
      });
    }
  }
  return all;
}

// ── 2. 投稿履歴の読み書き ──
async function loadHistory() {
  try {
    const text = await readFile(HISTORY_FILE, "utf8");
    const data = JSON.parse(text);
    if (!Array.isArray(data.posts)) return { posts: [] };
    return data;
  } catch {
    return { posts: [] };
  }
}

async function saveHistory(history) {
  await writeFile(HISTORY_FILE, JSON.stringify(history, null, 2) + "\n", "utf8");
}

// ── 3. LRU 選択: 最も古く投稿された (or 未投稿の) 記事を順位付け ──
// 一巡するまで重複が発生しない。配列を返すことで、URL が 404 だった場合に
// 次の候補へフォールバックできる。
function rankArticlesByLRU(articles, history) {
  if (articles.length === 0) throw new Error("記事が 1 件も読めませんでした");

  const lastPostedBySlug = new Map();
  for (const entry of history.posts) {
    const prev = lastPostedBySlug.get(entry.slug);
    if (!prev || entry.postedAt > prev) {
      lastPostedBySlug.set(entry.slug, entry.postedAt);
    }
  }

  return [...articles]
    .map((a, i) => ({
      a,
      i,
      lastPosted: lastPostedBySlug.get(a.slug) || "",
    }))
    .sort((x, y) => {
      if (x.lastPosted !== y.lastPosted) {
        return x.lastPosted < y.lastPosted ? -1 : 1;
      }
      return x.i - y.i;
    })
    .map((entry) => entry.a);
}

// ── 3. ツイート本文を組み立てる ──
const TEMPLATES = [
  ({ title, url, hashtags }) =>
    `${title}👀\n\nなぜ今これが重要か——業界全体を揺るがす構造変化が起きているから。\n\n詳細が気になる人はこちら👇\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `${title}💡\n\nなぜこれが話題になっているのか？背景には多くの人がまだ気づいていない動きがある。\n\n全容はこちら→\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `${title}⚡️\n\nなぜ今これが起きているのか？その構造的な理由がわかると見方が変わる。\n\n続きはこちら👇\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `${title}🔥\n\nなぜこの動きが他の業界にも波及するのか——その理由を知ると驚く。\n\n詳しくはこちら→\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `${title}\n\nなぜ表向きの数字だけでは語れないのか。背景にある本当の理由を知ると見方が変わる。\n\n気になる人はこちら👇\n${url}\n\n${hashtags}`,
];

function buildTweet(article) {
  // X はハッシュタグも文字数に含む。記事の tags から最大 4 個。
  const tagPool = (article.tags || []).filter((t) => t && t.length <= 12);
  const picked = tagPool.slice(0, 4).map((t) => `#${t.replace(/\s+/g, "")}`);
  const hashtags = picked.join(" ");

  const slot = Math.floor(Date.now() / (1000 * 60 * 60 * 6));
  const tpl = TEMPLATES[slot % TEMPLATES.length];

  // タイトルが長すぎる場合は短縮 (X の URL は 23 文字に短縮計算される)
  const URL_WEIGHT = 23;
  const FIXED = tpl({ title: "", url: " ".repeat(URL_WEIGHT), hashtags }).length;
  const MAX = 270; // 安全マージン
  const room = MAX - FIXED;
  const safeTitle =
    article.title.length > room ? article.title.slice(0, room - 1) + "…" : article.title;

  return tpl({ title: safeTitle, url: article.url, hashtags });
}

// ── 4. X の重み計算 (twitter-text 互換) ──
// Japanese / CJK / emoji / 多くの記号は 2 weight、ASCII 等は 1 weight。
// URL は実 URL の長さに関わらず 23 weight 固定。上限は 280 weight。
const X_MAX_WEIGHT = 280;

function tweetWeight(text) {
  // URL は 23 weight として扱うため長さ 23 のダミーに置換
  const processed = text.replace(/https?:\/\/\S+/g, "x".repeat(23));
  let weight = 0;
  for (const ch of processed) {
    const cp = ch.codePointAt(0);
    if (
      (cp >= 0x0000 && cp <= 0x10ff) ||
      (cp >= 0x2000 && cp <= 0x200d) ||
      (cp >= 0x2010 && cp <= 0x201f) ||
      (cp >= 0x2032 && cp <= 0x2037)
    ) {
      weight += 1;
    } else {
      weight += 2;
    }
  }
  return weight;
}

// ── 5. Claude 応答から <tweet>...</tweet> を抽出 ──
function extractTweetFromClaude(rawText) {
  const m = rawText.match(/<tweet>([\s\S]*?)<\/tweet>/i);
  let tweet = m ? m[1] : rawText;
  tweet = tweet.trim();
  tweet = tweet.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/, "").trim();
  tweet = tweet.replace(/^["「『]+/, "").replace(/["」』]+$/, "").trim();
  return tweet;
}

// ── 6. Claude API + Web 検索でツイート文を動的生成 ──
// 重み超過時は 1 回だけリトライ。最終的にダメなら null を返してテンプレへフォールバック。
async function generateTweetWithClaude(article) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const basePrompt = `あなたは X (旧 Twitter) でサイト流入とインプレッションを最大化するプロのライターです。
以下の手順で、TheBrief の記事へのクリックを促す投稿を作成してください。

【記事】
タイトル: ${article.title}
URL: ${article.url}
タグ: ${article.tags?.join(", ") || "(なし)"}

【ステップ 1: 正確性確認 (必須)】
web_search で記事の主要キーワードを検索し、事実・数字・固有名詞が現在も正確かを確認してください。

【ステップ 2: X トレンド確認 (必須)】
web_search でこのトピックが今 X や日本のニュースで話題になっているか調べ、
旬な切り口・話題のフレームをツイートに活かしてください。

【ステップ 3: 投稿生成】
以下の 3 部構成で必ず書くこと:

① すごい (1〜2 行): 驚き・数字・インパクトで「え、何それ？」と思わせる
  良い例:
  - 「KDDI子会社で売上の99.7%が架空取引だった💥」
  - 「楽天が1兆円を通信に突っ込んだ本当の理由👀」
  - 「日本の半導体が米中対立の最前線に立たされている」
  禁止: 「〇〇についての解説です」などの平叙文

② だから (1 文): なぜ重要か・背景を一言で。ただし詳細は書かない
  良い例: 「背景には業界全体を揺るがす構造的な問題がある」
  禁止: 詳細を書き切る・全部説明する

③ CTA (1 行): 「詳細が気になる人はこちら👇」「全容はこちらで→」などの一言 + URL

◆ 地政学フック (該当する場合): ウクライナ / イラン / 中東 / 米中対立 / 半導体安保 / 台湾有事 /
  エネルギー / 日銀 / 円安 などと絡められれば ① か ② に自然に盛り込む

【このアカウントの読者傾向 (重要)】
- 地政学・国際情勢系のキーワードに強く反応する。特に ウクライナ情勢 / イラン / 中東 / 米中対立 / ロシア / 北朝鮮 / 半導体安保 / 台湾有事 など。
- 記事内容に上記関連の論点が少しでもあれば、必ずそれをフックや本文に盛り込む。
- 直接関係がなくても、グローバル経済・エネルギー・安全保障の文脈で繋げられるなら積極的に絡める。
- ただし無関係な記事に無理やりこじつけて事実を歪めるのは禁止。フックとして自然に絡められる場合のみ。

【厳守ルール】
- X 重み 250 以下 (日本語=2、URL=23固定、ASCII=1)
- 本文の最後に ${article.url} を必ず 1 回そのまま含める (変形・短縮禁止)
- ハッシュタグは 3〜4 個。具体的で検索されやすいキーワードのみ
  良い例: #ウクライナ情勢 #半導体 #米中対立 #日銀 #地政学 など
  禁止: #ニュース #日本 #経済 など一般的すぎるもの、#TheBrief
- 絵文字は 1〜2 個
- 嘘・誇張・捏造は禁止

【出力フォーマット (厳守)】
<tweet>ここに本文 ${article.url} #ハッシュタグ</tweet> の形で囲む。URL は必ずタグ内に含める。`;

  const retryPrompt = `以下の記事について、3部構成のツイートを作成してください。

タイトル: ${article.title}
URL: ${article.url}

【構成】
① すごい: 驚き・数字で「え、何それ？」と思わせる1行
② だから: なぜ重要か1文 (詳細は書かない)
③ CTA: 「詳細が気になる人はこちら👇」+ ${article.url}

ハッシュタグ 2〜3 個・X 重み 230 以下・<tweet>...</tweet> で囲む`;

  for (let attempt = 1; attempt <= 2; attempt++) {
    const prompt = attempt === 1 ? basePrompt : retryPrompt;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 512,
          tools:
            attempt === 1
              ? [
                  {
                    type: "web_search_20250305",
                    name: "web_search",
                    max_uses: 3,
                  },
                ]
              : [], // リトライ時は検索なし
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.warn(
          `[post-to-x] Claude API error (attempt ${attempt}):`,
          JSON.stringify(data),
        );
        continue;
      }
      const textBlocks = (data.content || []).filter((b) => b.type === "text");
      const joined = textBlocks.map((b) => b.text).join("\n");
      let tweet = extractTweetFromClaude(joined);

      if (!tweet) {
        console.warn(`[post-to-x] Claude attempt ${attempt}: empty extraction`);
        continue;
      }
      const baseUrl = article.url.split("?")[0];
      if (!tweet.includes(baseUrl)) {
        // URL が抜けていたら末尾に追加して再利用
        tweet = tweet.trimEnd() + `\n${article.url}`;
        console.log(`[post-to-x] Claude attempt ${attempt}: appended missing URL`);
      }
      const w = tweetWeight(tweet);
      console.log(
        `[post-to-x] Claude attempt ${attempt}: weight=${w}/${X_MAX_WEIGHT}`,
      );
      if (w <= X_MAX_WEIGHT - 10) {
        return tweet;
      }
      console.warn(
        `[post-to-x] Claude attempt ${attempt}: too long (weight=${w}), retrying`,
      );
    } catch (err) {
      console.warn(
        `[post-to-x] Claude attempt ${attempt} failed:`,
        err.message,
      );
    }
  }
  return null;
}

// ── 7. 記事ページの到達性チェック + OGP 画像取得 ──
// 戻り値: { reachable: boolean, image: { buf, contentType, sourceUrl } | null }
//   reachable=false なら本番未デプロイ等で URL が 404 → ツイートしない方が良い
async function fetchArticlePage(articleUrl) {
  try {
    const htmlRes = await fetch(articleUrl, {
      headers: { "user-agent": "TheBrief-XPoster/1.0" },
    });
    if (!htmlRes.ok) {
      console.warn(
        `[post-to-x] article unreachable ${htmlRes.status}: ${articleUrl}`,
      );
      return { reachable: false, image: null };
    }
    const html = await htmlRes.text();
    const m = html.match(
      /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i,
    );
    if (!m) {
      console.warn("[post-to-x] og:image meta not found");
      return { reachable: true, image: null };
    }
    let imgUrl = m[1];
    if (imgUrl.startsWith("/")) imgUrl = SITE_URL + imgUrl;
    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) {
      console.warn(`[post-to-x] OGP image fetch ${imgRes.status}`);
      return { reachable: true, image: null };
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const contentType = imgRes.headers.get("content-type") || "image/png";
    return {
      reachable: true,
      image: { buf, contentType, sourceUrl: imgUrl },
    };
  } catch (err) {
    console.warn("[post-to-x] fetchArticlePage failed:", err.message);
    return { reachable: false, image: null };
  }
}

// ── 6. OAuth 1.0a 署名 → POST /2/tweets ──
function percentEncode(str) {
  return encodeURIComponent(str).replace(
    /[!*'()]/g,
    (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
  );
}

function buildAuthHeader(method, url, params, consumerSecret, tokenSecret) {
  const sortedKeys = Object.keys(params).sort();
  const paramString = sortedKeys
    .map((k) => `${percentEncode(k)}=${percentEncode(params[k])}`)
    .join("&");
  const baseString =
    `${method.toUpperCase()}&${percentEncode(url)}&${percentEncode(paramString)}`;
  const signingKey =
    `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;
  const signature = createHmac("sha1", signingKey)
    .update(baseString)
    .digest("base64");

  const headerParams = { ...params, oauth_signature: signature };
  const header =
    "OAuth " +
    Object.keys(headerParams)
      .filter((k) => k.startsWith("oauth_"))
      .sort()
      .map((k) => `${percentEncode(k)}="${percentEncode(headerParams[k])}"`)
      .join(", ");
  return header;
}

function getOAuthParams() {
  const consumerKey = process.env.X_API_KEY;
  const consumerSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;

  if (!consumerKey || !consumerSecret || !accessToken || !accessSecret) {
    throw new Error(
      "X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET が未設定です",
    );
  }

  return {
    consumerKey,
    consumerSecret,
    accessToken,
    accessSecret,
    oauthBase: {
      oauth_consumer_key: consumerKey,
      oauth_signature_method: "HMAC-SHA1",
      oauth_token: accessToken,
      oauth_version: "1.0",
    },
  };
}

function freshOAuthParams(base) {
  return {
    ...base,
    oauth_nonce: randomBytes(16).toString("hex"),
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  };
}

async function uploadMedia(image) {
  // X v1.1 media upload (single-shot, OAuth 1.0a, multipart/form-data)
  const url = "https://upload.twitter.com/1.1/media/upload.json";
  const auth = getOAuthParams();
  const oauthParams = freshOAuthParams(auth.oauthBase);

  // multipart/form-data の場合、ボディフィールドは署名ベースに含めない
  const authHeader = buildAuthHeader(
    "POST",
    url,
    oauthParams,
    auth.consumerSecret,
    auth.accessSecret,
  );

  const form = new FormData();
  const blob = new Blob([image.buf], { type: image.contentType });
  const ext = image.contentType.includes("jpeg") ? "jpg" : "png";
  form.append("media", blob, `image.${ext}`);

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: authHeader },
    body: form,
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Media upload ${res.status}: ${text}`);
  }
  const data = JSON.parse(text);
  return data.media_id_string;
}

async function postTweet(text, mediaIds) {
  const url = "https://api.x.com/2/tweets";
  const auth = getOAuthParams();
  const oauthParams = freshOAuthParams(auth.oauthBase);

  const authHeader = buildAuthHeader(
    "POST",
    url,
    oauthParams,
    auth.consumerSecret,
    auth.accessSecret,
  );

  const body =
    mediaIds && mediaIds.length > 0
      ? { text, media: { media_ids: mediaIds } }
      : { text };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(`X API ${res.status}: ${bodyText}`);
  }
  return JSON.parse(bodyText);
}

// ── main ──
async function main() {
  // カスタムツイートモード: X_CUSTOM_TWEET が設定されている場合は記事選択をスキップ
  const customTweet = process.env.X_CUSTOM_TWEET;
  if (customTweet) {
    console.log("[post-to-x] custom tweet mode");
    console.log("[post-to-x] tweet text:\n---\n" + customTweet + "\n---");
    if (process.env.X_DRY_RUN === "1") {
      console.log("[post-to-x] DRY RUN — skipping API call");
      return;
    }
    const result = await postTweet(customTweet, []);
    console.log("[post-to-x] posted:", JSON.stringify(result));
    return;
  }

  const articles = await loadArticles();
  console.log(`[post-to-x] loaded ${articles.length} articles`);

  const history = await loadHistory();
  console.log(`[post-to-x] history entries: ${history.posts.length}`);

  // ── LRU 順に最大 5 件試行: 404 (本番未デプロイ等) はスキップ ──
  const ranked = rankArticlesByLRU(articles, history);
  const MAX_TRIES = 5;
  let article = null;
  let image = null;
  for (const candidate of ranked.slice(0, MAX_TRIES)) {
    console.log(`[post-to-x] candidate: ${candidate.url}`);
    const fetched = await fetchArticlePage(candidate.url);
    if (fetched.reachable) {
      article = candidate;
      image = fetched.image;
      break;
    }
    console.log(`[post-to-x] skipping (unreachable): ${candidate.slug}`);
  }
  if (!article) {
    throw new Error(
      `LRU 上位 ${MAX_TRIES} 件すべて到達不可。本番デプロイ状況を確認してください`,
    );
  }
  console.log("[post-to-x] selected:", article.url);

  // ── ツイート文生成 (Claude → fallback テンプレ) ──
  let text = await generateTweetWithClaude(article);
  let textSource;
  if (text) {
    textSource = "claude";
    console.log("[post-to-x] text source: Claude (web_search)");
  } else {
    text = buildTweet(article);
    textSource = "template";
    console.log("[post-to-x] text source: template fallback");
  }
  console.log("[post-to-x] tweet text:\n---\n" + text + "\n---");
  console.log(
    `[post-to-x] length: ${[...text].length} code points / weight ${tweetWeight(text)}/${X_MAX_WEIGHT}`,
  );

  if (image) {
    console.log(
      `[post-to-x] OGP image: ${image.sourceUrl} (${image.buf.length}B, ${image.contentType})`,
    );
  } else {
    console.log("[post-to-x] OGP image: none — will post text only");
  }

  if (process.env.X_DRY_RUN === "1") {
    console.log("[post-to-x] DRY RUN — skipping API call & history write");
    return;
  }

  // ── メディアアップロード (失敗してもテキスト投稿は続行) ──
  let mediaIds;
  if (image) {
    try {
      const id = await uploadMedia(image);
      mediaIds = [id];
      console.log("[post-to-x] uploaded media id:", id);
    } catch (err) {
      console.warn("[post-to-x] media upload failed, posting text-only:", err.message);
    }
  }

  // ── 本投稿 ──
  const result = await postTweet(text, mediaIds);
  console.log("[post-to-x] posted:", JSON.stringify(result));

  // ── 履歴更新 ──
  const tweetId = result?.data?.id || null;
  history.posts.push({
    slug: article.slug,
    url: article.url,
    tweetId,
    postedAt: new Date().toISOString(),
    hasMedia: !!mediaIds,
    textSource,
  });
  await saveHistory(history);
  console.log(`[post-to-x] history updated (${history.posts.length} entries)`);
}

main().catch((err) => {
  console.error("[post-to-x] FAILED:", err);
  process.exit(1);
});
