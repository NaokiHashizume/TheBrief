export function NewsMediaOrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "The Brief",
    url: "https://thebrief.info",
    logo: {
      "@type": "ImageObject",
      url: "https://thebrief.info/icon.svg",
    },
    sameAs: ["https://x.com/thebrief_info"],
    description:
      "日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&オピニオン。",
    foundingDate: "2026",
    actionableFeedbackPolicy: "https://thebrief.info/contact",
    publishingPrinciples: "https://thebrief.info/about",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Brief",
    url: "https://thebrief.info",
    description:
      "日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&オピニオン。",
    publisher: {
      "@type": "Organization",
      name: "The Brief",
      url: "https://thebrief.info",
      sameAs: ["https://x.com/thebrief_info"],
    },
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "The Brief",
      url: "https://thebrief.info",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://thebrief.info${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
