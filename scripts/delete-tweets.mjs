#!/usr/bin/env node
/**
 * 問題のあるツイートを X API v2 で削除するスクリプト
 *
 * 使い方:
 *   node scripts/delete-tweets.mjs
 *
 * 必要な環境変数:
 *   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
 *
 * X_DRY_RUN=1 にすると削除せずIDのみ表示
 */

import { createHmac, randomBytes } from "node:crypto";

// ── 削除対象ツイートID ──
const TWEET_IDS_TO_DELETE = [
  { id: "2041266763061739892", reason: "侮辱的発言 (「THE 老害」)" },
  { id: "2041666189416632575", reason: "フォロバ勧誘" },
  { id: "2041489022380626237", reason: "個人的なつぶやき (コナン)" },
  { id: "2041655125715128525", reason: "他社製品批判 (Gemini弱い)" },
  { id: "2041486859822612888", reason: "個人的なつぶやき (Locally AI)" },
];

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
    throw new Error("X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_SECRET が未設定です");
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

async function deleteTweet(tweetId) {
  const url = `https://api.x.com/2/tweets/${tweetId}`;
  const auth = getOAuthParams();
  const oauthParams = {
    ...auth.oauthBase,
    oauth_nonce: randomBytes(16).toString("hex"),
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  };

  const authHeader = buildAuthHeader("DELETE", url, oauthParams, auth.consumerSecret, auth.accessSecret);

  const res = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: authHeader },
  });

  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(`X API ${res.status}: ${bodyText}`);
  }
  return JSON.parse(bodyText);
}

async function main() {
  const dryRun = process.env.X_DRY_RUN === "1";

  console.log(`削除対象ツイート: ${TWEET_IDS_TO_DELETE.length} 件`);
  if (dryRun) console.log("[DRY RUN] 実際には削除しません\n");

  for (const { id, reason } of TWEET_IDS_TO_DELETE) {
    const twitterUrl = `https://x.com/thebrief_info/status/${id}`;
    console.log(`\n--- ID: ${id} ---`);
    console.log(`理由: ${reason}`);
    console.log(`URL: ${twitterUrl}`);

    if (dryRun) {
      console.log("[SKIP] DRY RUN");
      continue;
    }

    try {
      const result = await deleteTweet(id);
      const deleted = result?.data?.deleted;
      if (deleted) {
        console.log("✅ 削除成功");
      } else {
        console.log("⚠️  レスポンス:", JSON.stringify(result));
      }
    } catch (err) {
      console.error(`❌ 削除失敗: ${err.message}`);
    }

    // レートリミット対策: 500ms 待機
    await new Promise((r) => setTimeout(r, 500));
  }
}

main().catch((err) => {
  console.error("[delete-tweets] FAILED:", err);
  process.exit(1);
});
