# The Brief

> 日本の政治・経済・業界・トレンドをシンプルに届けるニュース&オピニオンメディア。

[https://thebrief.info](https://thebrief.info)

## Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, static export)
- **UI**: React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4
- **Fonts**: Noto Sans JP / Playfair Display (`next/font/google` でセルフホスト)
- **OG画像**: `next/og` (`ImageResponse`)
- **Deploy**: Cloudflare Pages (`out/` を静的配信)
- **Analytics**: Google Analytics 4 / Google AdSense (`next/script`)

## Project structure

```
src/
├── app/                # App Router pages, layouts, sitemap, robots, OG images
│   ├── politics/       # 政治セクション
│   ├── economy/        # 経済セクション
│   ├── industry/       # 業界セクション (17業界)
│   ├── university/     # 学問セクション
│   ├── column/         # コラム
│   └── ...
├── components/         # UI コンポーネント (Header, Sidebar, ShareButton, JsonLd, etc.)
└── lib/                # データレイヤ (記事、議員、業界別データなど)
public/
├── _headers            # Cloudflare Pages 用キャッシュ/セキュリティヘッダ
└── manifest.json
```

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # 静的エクスポート → out/
npm run lint         # ESLint
npm run typecheck    # TypeScript チェック
npm run test         # Vitest
```

## Deploy

Cloudflare Pages の build command を `npm run build`、output directory を `out` に設定。

```bash
npm run build
npx wrangler pages deploy out
```

## Environment variables

| 変数名 | 用途 | 必須 |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | お問い合わせフォームの送信先 (Formspree, Cloudflare Pages Functions など)。未設定の場合は `mailto:` フォールバック。 | × |

## SEO / Accessibility

- メタデータ・OGP・Twitter Card を `app/layout.tsx` で集中管理
- `JsonLd.tsx` に NewsMediaOrganization / WebSite / Article / Breadcrumb / FAQ schema
- `sitemap.xml` / `robots.txt` / `feed.xml` を動的生成
- Skip link / `aria-*` 属性 / `prefers-reduced-motion` 対応
- 多言語(ja/en)切替: `LanguageProvider` + `T` コンポーネント

## Conventions

詳細は `AGENTS.md` を参照してください。

## License

All rights reserved.
