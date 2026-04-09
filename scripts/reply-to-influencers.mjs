#!/usr/bin/env node
/**
 * TheBrief インフルエンサーリプライスクリプト
 *
 * 政治・経済・AI 分野のインフルエンサーの最新ツイートを検索し、
 * Claude API で関連性の高い返信を生成して投稿する。
 *
 * 必要な環境変数:
 *   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
 *   ANTHROPIC_API_KEY  (必須: Claude でリプライ文を生成)
 *   X_BEARER_TOKEN     (オプション: タイムライン検索用)
 *
 * オプション環境変数:
 *   X_DRY_RUN=1  投稿せずに生成内容のみ表示
 */

import { createHmac, randomBytes } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HISTORY_FILE = path.join(__dirname, "x-reply-history.json");

// ── エンゲージメント対象アカウント ──
// X Analytics で高パフォーマンスが確認された分野ごとのインフルエンサー
const TARGET_ACCOUNTS = [
  // 政治・経済
  { username: "ds_nakajima",    topic: "政治・選挙",    lang: "ja" },
  { username: "masaki_finance", topic: "金融・マクロ経済", lang: "ja" },
  { username: "econ_watch",     topic: "経済統計",      lang: "ja" },
  { username: "poli_analyst",   topic: "政策分析",      lang: "ja" },
  // テック・AI
  { username: "masahirochaen",  topic: "AI・テック",    lang: "ja" },
  { username: "daifukujinji",   topic: "テクノロジー",  lang: "ja" },
  // 追加候補（コメントアウトで管理）
  // { username: "om_patel5",      topic: "startup",      lang: "en" },
];

// ── TheBrief 関連トピック（リプライ対象の判断基準） ──
const RELEVANT_TOPICS = [
  "政治", "国会", "閣議", "法案", "日銀", "金利", "円安", "株価",
  "AI", "ChatGPT", "Claude", "半導体", "TSMC", "トヨタ", "自動車",
  "中東", "ウクライナ", "地政学", "経済", "インフレ", "GDP",
];

// ── OAuth 1.0a ──
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
  const baseString = `${method.toUpperCase()}&${percentEncode(url)}&${percentEncode(paramString)}`;
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;
  const signature = createHmac("sha1", signingKey).update(baseString).digest("base64");

  const headerParams = { ...params, oauth_signature: signature };
  return (
    "OAuth " +
    Object.keys(headerParams)
      .filter((k) => k.startsWith("oauth_"))
      .sort()
      .map((k) => `${percentEncode(k)}="${percentEncode(headerParams[k])}"`)
      .join(", ")
  );
}

function getOAuthParams() {
  const consumerKey = process.env.X_API_KEY;
  const consumerSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;

  if (!consumerKey || !consumerSecret || !accessToken || !accessSecret) {
    throw new Error("X API 環境変数が未設定です");
  }
  return {
    consumerSecret,
    accessSecret,
    oauthBase: {
      oauth_consumer_key: consumerKey,
      oauth_signature_method: "HMAC-SHA1",
      oauth_token: accessToken,
      oauth_version: "1.0",
    },
  };
}

function freshOAuth(base) {
  return {
    ...base,
    oauth_nonce: randomBytes(16).toString("hex"),
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  };
}

// ── 履歴管理（同じツイートに二重リプライしない） ──
async function loadReplyHistory() {
  try {
    const text = await readFile(HISTORY_FILE, "utf8");
    const data = JSON.parse(text);
    return Array.isArray(data.replied) ? data : { replied: [] };
  } catch {
    return { replied: [] };
  }
}

async function saveReplyHistory(history) {
  // 直近 500 件だけ保持
  if (history.replied.length > 500) {
    history.replied = history.replied.slice(-500);
  }
  await writeFile(HISTORY_FILE, JSON.stringify(history, null, 2) + "\n", "utf8");
}

// ── X API: ユーザーの最新ツイートを取得 (v2) ──
async function fetchUserTweets(username) {
  const bearerToken = process.env.X_BEARER_TOKEN;
  if (!bearerToken) {
    console.warn(`[reply] X_BEARER_TOKEN 未設定 — @${username} のツイート取得をスキップ`);
    return [];
  }

  // まずユーザーID を取得
  const userRes = await fetch(
    `https://api.x.com/2/users/by/username/${username}?user.fields=id,name`,
    { headers: { Authorization: `Bearer ${bearerToken}` } },
  );
  if (!userRes.ok) {
    console.warn(`[reply] user lookup failed for @${username}: ${userRes.status}`);
    return [];
  }
  const userData = await userRes.json();
  const userId = userData?.data?.id;
  if (!userId) return [];

  // 最新5件のツイートを取得
  const tweetsRes = await fetch(
    `https://api.x.com/2/users/${userId}/tweets?max_results=5&tweet.fields=id,text,created_at&exclude=retweets,replies`,
    { headers: { Authorization: `Bearer ${bearerToken}` } },
  );
  if (!tweetsRes.ok) {
    console.warn(`[reply] timeline fetch failed for @${username}: ${tweetsRes.status}`);
    return [];
  }
  const tweetsData = await tweetsRes.json();
  return (tweetsData?.data || []).map((t) => ({
    id: t.id,
    text: t.text,
    username,
    createdAt: t.created_at,
  }));
}

// ── 関連性チェック ──
function isRelevant(tweetText) {
  return RELEVANT_TOPICS.some((topic) => tweetText.includes(topic));
}

// ── Claude API でリプライ文を生成 ──
async function generateReply(tweet, account) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY が未設定です");

  const prompt = `あなたは TheBrief (thebrief.info) の公式アカウントのソーシャルメディア担当です。
以下のツイートに対して、自然で知的なリプライを 1 つ作成してください。

【元ツイート】
@${tweet.username}: ${tweet.text}

【このアカウントのトピック】${account.topic}

【リプライ作成ルール】
- 日本語、60〜100文字以内
- 話題に価値を付加する視点・補足情報・データを 1 つ提供する
- 「私たちも記事にしています」「TheBrief では〜」等の宣伝は禁止
- 反論・批判・上から目線は禁止。共感・補完・深掘りの姿勢で
- 絵文字は使わない
- 自然な会話口調（ですます体 or 普通体どちらでも可）
- ハッシュタグは付けない
- 事実と異なる内容を書かない（不確かなら断定しない）

<reply>ここにリプライ本文のみを書く</reply>`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`Claude API error: ${JSON.stringify(data)}`);

  const textBlocks = (data.content || []).filter((b) => b.type === "text");
  const joined = textBlocks.map((b) => b.text).join("\n");
  const m = joined.match(/<reply>([\s\S]*?)<\/reply>/i);
  const reply = m ? m[1].trim() : joined.trim();
  return reply;
}

// ── X API v2: リプライ投稿 ──
async function postReply(text, inReplyToId) {
  const url = "https://api.x.com/2/tweets";
  const auth = getOAuthParams();
  const oauthParams = freshOAuth(auth.oauthBase);

  const authHeader = buildAuthHeader("POST", url, oauthParams, auth.consumerSecret, auth.accessSecret);

  const body = {
    text,
    reply: { in_reply_to_tweet_id: inReplyToId },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: authHeader, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const bodyText = await res.text();
  if (!res.ok) throw new Error(`X API ${res.status}: ${bodyText}`);
  return JSON.parse(bodyText);
}

// ── main ──
async function main() {
  const dryRun = process.env.X_DRY_RUN === "1";
  const history = await loadReplyHistory();
  const repliedSet = new Set(history.replied.map((r) => r.tweetId));

  let totalReplied = 0;
  const MAX_REPLIES_PER_RUN = 3; // 1実行あたりの最大リプライ数

  for (const account of TARGET_ACCOUNTS) {
    if (totalReplied >= MAX_REPLIES_PER_RUN) break;

    console.log(`\n[reply] checking @${account.username} (${account.topic})`);
    const tweets = await fetchUserTweets(account.username);

    for (const tweet of tweets) {
      if (totalReplied >= MAX_REPLIES_PER_RUN) break;
      if (repliedSet.has(tweet.id)) {
        console.log(`  [skip] already replied to ${tweet.id}`);
        continue;
      }
      if (!isRelevant(tweet.text)) {
        console.log(`  [skip] not relevant: "${tweet.text.slice(0, 40)}..."`);
        continue;
      }

      console.log(`  [target] "${tweet.text.slice(0, 60)}..."`);

      let replyText;
      try {
        replyText = await generateReply(tweet, account);
      } catch (err) {
        console.warn(`  [warn] Claude failed: ${err.message}`);
        continue;
      }

      console.log(`  [reply text] ${replyText}`);

      if (!dryRun) {
        try {
          const result = await postReply(replyText, tweet.id);
          const postedId = result?.data?.id;
          console.log(`  ✅ posted reply id: ${postedId}`);

          history.replied.push({
            tweetId: tweet.id,
            replyId: postedId,
            username: account.username,
            postedAt: new Date().toISOString(),
          });
          repliedSet.add(tweet.id);
          totalReplied++;

          // レートリミット対策
          await new Promise((r) => setTimeout(r, 1000));
        } catch (err) {
          console.error(`  ❌ post failed: ${err.message}`);
        }
      } else {
        console.log(`  [DRY RUN] skipping post`);
        totalReplied++;
      }
    }
  }

  if (!dryRun && totalReplied > 0) {
    await saveReplyHistory(history);
    console.log(`\n[reply] done. replied to ${totalReplied} tweets.`);
  } else {
    console.log(`\n[reply] done. no new replies (dry_run=${dryRun}, count=${totalReplied})`);
  }
}

main().catch((err) => {
  console.error("[reply-to-influencers] FAILED:", err);
  process.exit(1);
});
