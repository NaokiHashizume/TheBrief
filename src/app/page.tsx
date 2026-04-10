import type { Metadata } from "next";
import { WebsiteJsonLd, NewsMediaOrganizationJsonLd } from "@/components/JsonLd";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "The Brief — 日本のビジネス・政治・テクノロジーを深読みする",
  description: "日本の政治・経済・産業・AIを、データと独自視点で解説するニュースメディア。",
  alternates: { canonical: "https://thebrief.info" },
  openGraph: {
    title: "The Brief — 日本のビジネス・政治・テクノロジーを深読みする",
    description: "日本の政治・経済・産業・AIを、データと独自視点で解説するニュースメディア。",
    url: "https://thebrief.info",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brief — 日本のビジネス・政治・テクノロジーを深読みする",
    description: "日本の政治・経済・産業・AIを、データと独自視点で解説するニュースメディア。",
  },
};

export default function Home() {
  return (
    <div>
      <WebsiteJsonLd />
      <NewsMediaOrganizationJsonLd />
      <HomeContent />
    </div>
  );
}
