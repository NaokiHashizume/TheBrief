import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "The Brief — Politics · Economy · Industry · Trends",
  description:
    "日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&オピニオン。",
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
