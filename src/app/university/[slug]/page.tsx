import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { UniversityCategoryDetail } from "@/components/UniversityCategoryDetail";
import { getUniversityCategory, universityCategories } from "@/lib/university";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return universityCategories.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getUniversityCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.label} — University`,
    description: `${category.label}の中分類と代表科目を一覧化。${category.desc}を軸に、大学で学ばれる主要領域を俯瞰できます。`,
    alternates: { canonical: `https://thebrief.info/university/${category.id}` },
  };
}

export default async function UniversityCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getUniversityCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
          { name: category.label, href: `/university/${category.id}` },
        ]}
      />

      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/university" className="hover:text-foreground transition-colors">University</Link>
        <span>/</span>
        <span>{category.label}</span>
      </div>

      <div className="mb-6">
        <Link
          href="/university"
          className="inline-flex items-center gap-2 rounded-full border border-brief-border bg-brief-card px-4 py-2 text-xs uppercase tracking-[2px] text-foreground/55 hover:text-foreground transition-colors"
        >
          <span>←</span>
          <span>Back to University</span>
        </Link>
      </div>

      <UniversityCategoryDetail category={category} />
    </div>
  );
}
