import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SkipLink } from "@/components/SkipLink";
import { Sidebar, SidebarProvider } from "@/components/Sidebar";

const SITE_URL = "https://thebrief.info";
const SITE_NAME = "The Brief";
const SITE_DESCRIPTION =
  "日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&オピニオン。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

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
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "The Brief — Politics · Economy · Industry · Trends",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Brief — Politics · Economy · Industry · Trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebrief_info",
    creator: "@thebrief_info",
    title: "The Brief — Politics · Economy · Industry · Trends",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-277DL28PJW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-277DL28PJW');`,
          }}
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
          <LanguageProvider>
            <SidebarProvider>
              <SkipLink />
              <Sidebar />
              <Header />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </SidebarProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
