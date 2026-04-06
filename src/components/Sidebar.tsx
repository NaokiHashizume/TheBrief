"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const menuItems = [
  {
    labelJa: "ホーム",
    labelEn: "Home",
    href: "/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    labelJa: "Politics",
    labelEn: "Politics",
    href: "/politics",
    color: "#e53e3e",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" />
      </svg>
    ),
    children: [
      { labelJa: "議席数", labelEn: "Diet Seats", href: "/politics/diet" },
      { labelJa: "内閣", labelEn: "Cabinet", href: "/politics/cabinet" },
      { labelJa: "審議中法案", labelEn: "Debates", href: "/politics/debates" },
      { labelJa: "可決法案", labelEn: "Passed", href: "/politics/passed" },
      { labelJa: "施行済", labelEn: "Enacted", href: "/politics/enacted" },
      { labelJa: "議員一覧", labelEn: "Legislators", href: "/politics/legislators" },
      { labelJa: "ニュース", labelEn: "News", href: "/politics/news" },
      { labelJa: "記事", labelEn: "Articles", href: "/politics/articles" },
      { labelJa: "官公庁リンク", labelEn: "Gov Links", href: "/politics/government" },
    ],
  },
  {
    labelJa: "Economy",
    labelEn: "Economy",
    href: "/economy",
    color: "#b9770e",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
      </svg>
    ),
    children: [
      { labelJa: "経済指標", labelEn: "Indicators", href: "/economy" },
      { labelJa: "ニュース", labelEn: "News", href: "/economy/news" },
      { labelJa: "深掘り記事", labelEn: "Articles", href: "/economy/articles" },
    ],
  },
  {
    labelJa: "Industry",
    labelEn: "Industry",
    href: "/industry",
    color: "#1e8449",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    children: [
      { labelJa: "業界一覧", labelEn: "Overview", href: "/industry" },
      { labelJa: "情報通信", labelEn: "ICT", href: "/industry/ict" },
      { labelJa: "AI", labelEn: "AI", href: "/industry/ai" },
      { labelJa: "自動車", labelEn: "Automotive", href: "/industry/automotive" },
      { labelJa: "金融機関", labelEn: "Finance", href: "/industry/finance" },
      { labelJa: "医薬品", labelEn: "Pharma", href: "/industry/pharma" },
      { labelJa: "エネルギー", labelEn: "Energy", href: "/industry/energy" },
      { labelJa: "物流・運輸", labelEn: "Logistics", href: "/industry/logistics" },
      { labelJa: "エンタメ", labelEn: "Entertainment", href: "/industry/entertainment" },
      { labelJa: "小売", labelEn: "Retail", href: "/industry/retail" },
      { labelJa: "外食", labelEn: "Dining", href: "/industry/dining" },
      { labelJa: "食品", labelEn: "Food", href: "/industry/food" },
      { labelJa: "建設", labelEn: "Construction", href: "/industry/construction" },
      { labelJa: "素材", labelEn: "Materials", href: "/industry/materials" },
      { labelJa: "商社", labelEn: "Trading", href: "/industry/trading" },
      { labelJa: "サービス", labelEn: "Services", href: "/industry/services" },
      { labelJa: "日用品", labelEn: "Daily", href: "/industry/daily" },
      { labelJa: "専門", labelEn: "Specialty", href: "/industry/specialty" },
    ],
  },
  {
    labelJa: "ストーリー",
    labelEn: "Stories",
    href: "/story",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    labelJa: "About",
    labelEn: "About",
    href: "/about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const pathname = usePathname();
  const { locale } = useLanguage();

  const toggleSection = (href: string) => {
    setExpandedSections((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Toggle button — fixed on left edge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 w-6 h-14 bg-brief-card border border-l-0 border-brief-border rounded-r-lg flex items-center justify-center hover:bg-foreground/5 transition-all group"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-foreground/40 group-hover:text-foreground transition-all ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-background border-r border-brief-rule z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-brief-rule px-4 py-4 flex items-center justify-between">
          <span className="text-[10px] tracking-[3px] uppercase font-bold text-foreground/50">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded hover:bg-foreground/5 transition-colors"
            aria-label="メニューを閉じる"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="py-3 px-2">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            const expanded = expandedSections.includes(item.href);
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={item.href} className="mb-0.5">
                {/* Parent item */}
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => !hasChildren && setIsOpen(false)}
                    className={`flex-1 flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      active
                        ? "bg-foreground/[0.06] font-medium"
                        : "hover:bg-foreground/[0.03] text-foreground/70"
                    }`}
                    style={active && item.color ? { color: item.color } : undefined}
                  >
                    <span className={active ? "" : "text-foreground/40"}>{item.icon}</span>
                    <span>{locale === "ja" ? item.labelJa : item.labelEn}</span>
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => toggleSection(item.href)}
                      className="p-2 rounded hover:bg-foreground/5 transition-colors"
                      aria-label={expanded ? "閉じる" : "開く"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-foreground/30 transition-transform ${expanded ? "rotate-90" : ""}`}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Children */}
                {hasChildren && expanded && (
                  <div className="ml-5 pl-3 border-l border-brief-rule mt-1 mb-2 space-y-0.5">
                    {item.children!.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-1.5 rounded text-xs transition-colors ${
                            childActive
                              ? "bg-foreground/[0.06] font-medium text-foreground"
                              : "text-foreground/55 hover:text-foreground hover:bg-foreground/[0.03]"
                          }`}
                        >
                          {locale === "ja" ? child.labelJa : child.labelEn}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
