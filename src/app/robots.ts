import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/industry/*/bs",
          "/industry/*/pl",
          "/industry/*/cf",
        ],
      },
    ],
    sitemap: "https://thebrief.info/sitemap.xml",
  };
}
