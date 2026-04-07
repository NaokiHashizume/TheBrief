import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
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

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

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
    alternateLocale: ["en_US"],
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
    languages: {
      "ja-JP": SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "The Brief RSS Feed" }],
    },
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
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`h-full ${notoSansJp.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`min-h-full flex flex-col antialiased bg-background text-foreground ${notoSansJp.className}`}
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

        {/* Google Analytics — afterInteractive で TBT を改善 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-277DL28PJW"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-277DL28PJW');`}
        </Script>

        {/* Google AdSense — lazyOnload で初期描画をブロックしない */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6798688011773123"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
