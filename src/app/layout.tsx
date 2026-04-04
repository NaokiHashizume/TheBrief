import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const SITE_URL = "https://thebrief.info";
const SITE_NAME = "The Brief";
const SITE_DESCRIPTION =
  "日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&オピニオン。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Brief — Politics · Economy · Industry · Trends",
    template: "%s — The Brief",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "日本ニュース",
    "政治",
    "経済",
    "金融",
    "テクノロジー",
    "AI",
    "ビジネス",
    "ライフスタイル",
    "オピニオン",
    "Japan news",
    "politics",
    "economy",
    "technology",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "The Brief — Politics · Economy · Industry · Trends",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebrief_jp",
    creator: "@thebrief_jp",
    title: "The Brief — Politics · Economy · Industry · Trends",
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "bccfihndvBhMTMGVrpBtJrNB04_TPUlrHHWsL0iEpKg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6798688011773123"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased bg-background text-foreground"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
