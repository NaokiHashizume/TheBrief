#!/usr/bin/env node
/**
 * TheBrief 自動 X (Twitter) 投稿スクリプト
 *
 * - src/lib 配下の記事メタデータ (slug / title / tags) を正規表現で抽出
 * - 実行スロット (UTC 時刻) から決定論的に 1 件選択 → 同日に重複しにくい
 * - エンゲージメント向けテンプレでツイート文を生成
 * - X API v2 POST /2/tweets へ OAuth1.0a で投稿
 *
 * 必要な環境変数:
 *   X_API_KEY         (Consumer Key / API Key)
 *   X_API_SECRET      (Consumer Secret / API Key Secret)
 *   X_ACCESS_TOKEN
 *   X_ACCESS_SECRET
 *
 * オプション環境変数:
 *   X_DRY_RUN=1       投稿せずに生成内容のみ表示
 *   SITE_URL          既定 https://thebrief.info
 */

import { readFile, readdir } from "node:fs/promises";
import { createHmac, randomBytes } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LIB_DIR = path.join(REPO_ROOT, "src", "lib");
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

// ── 2. スロットから決定論的に選ぶ ──
// 1 日 4 スロット想定: floor(epochMinutes / (60*6)) を index 化
function pickArticle(articles) {
  if (articles.length === 0) throw new Error("記事が 1 件も読めませんでした");
  const slot = Math.floor(Date.now() / (1000 * 60 * 60 * 6));
  // 軽い撹拌
  const idx = Math.abs((slot * 2654435761) % articles.length);
  return articles[idx];
}

// ── 3. ツイート本文を組み立てる ──
const TEMPLATES = [
  ({ title, url, hashtags }) =>
    `📊 ${title}\n\n詳しくはこちら👇\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `🔍 ${title}\n\n👉 ${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `【解説】${title}\n\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `💡 ${title}\n\n背景と論点を整理しました。\n${url}\n\n${hashtags}`,
  ({ title, url, hashtags }) =>
    `📰 ${title}\n\n5分でわかる解説👇\n${url}\n\n${hashtags}`,
];

function buildTweet(article) {
  // X はハッシュタグも文字数に含む。ハッシュタグは 3 個まで、英数/日本語両方 OK
  const tagPool = (article.tags || []).filter((t) => t && t.length <= 12);
  const picked = tagPool.slice(0, 3).map((t) => `#${t.replace(/\s+/g, "")}`);
  picked.push("#TheBrief");
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

// ── 4. OAuth 1.0a 署名 → POST /2/tweets ──
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

async function postTweet(text) {
  const url = "https://api.x.com/2/tweets";
  const method = "POST";

  const consumerKey = process.env.X_API_KEY;
  const consumerSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;

  if (!consumerKey || !consumerSecret || !accessToken || !accessSecret) {
    throw new Error(
      "X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET が未設定です",
    );
  }

  const oauthParams = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: "1.0",
  };

  const authHeader = buildAuthHeader(
    method,
    url,
    oauthParams,
    consumerSecret,
    accessSecret,
  );

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(`X API ${res.status}: ${bodyText}`);
  }
  return JSON.parse(bodyText);
}

// ── main ──
async function main() {
  const articles = await loadArticles();
  console.log(`[post-to-x] loaded ${articles.length} articles`);

  const article = pickArticle(articles);
  const text = buildTweet(article);

  console.log("[post-to-x] selected:", article.url);
  console.log("[post-to-x] tweet text:\n---\n" + text + "\n---");
  console.log("[post-to-x] length:", [...text].length, "code points");

  if (process.env.X_DRY_RUN === "1") {
    console.log("[post-to-x] DRY RUN — skipping API call");
    return;
  }

  const result = await postTweet(text);
  console.log("[post-to-x] posted:", JSON.stringify(result));
}

main().catch((err) => {
  console.error("[post-to-x] FAILED:", err);
  process.exit(1);
});
