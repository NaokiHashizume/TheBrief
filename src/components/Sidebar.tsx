"use client";

import { createContext, useContext, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

/* ── Sidebar context ── */
interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

/* ── Menu data ── */
const menuItems = [
  {
    labelJa: "Home",
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
      { labelJa: "日本が抱える課題", labelEn: "Japan's Challenges", href: "/politics/challenges" },
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
    labelJa: "University",
    labelEn: "University",
    href: "/university",
    color: "#6366f1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8 12 4l9 4-9 4-9-4Z" />
        <path d="M7 10.5V15c0 1 2.2 3 5 3s5-2 5-3v-4.5" />
        <path d="M21 9v6" />
      </svg>
    ),
    children: [
      { labelJa: "学問の体系図", labelEn: "Discipline Map", href: "/university" },
      { labelJa: "形式科学", labelEn: "Formal Sciences", href: "/university/formal" },
      { labelJa: "自然科学", labelEn: "Natural Sciences", href: "/university/natural" },
      { labelJa: "社会科学", labelEn: "Social Sciences", href: "/university/social" },
      { labelJa: "学際領域", labelEn: "Interdisciplinary", href: "/university/interdisciplinary" },
    ],
  },
  {
    labelJa: "Column",
    labelEn: "Column",
    href: "/column",
    color: "#0d9488",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    children: [
      { labelJa: "コラム一覧", labelEn: "All Columns", href: "/column" },
      { labelJa: "4〜6月の残業がダメな理由", labelEn: "Why No Overtime in Apr–Jun", href: "/column/overtime-april-june" },
    ],
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

/* ── Sidebar component ── */
export function Sidebar() {
  const { isOpen, close } = useSidebar();
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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={close}
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
            onClick={close}
            className="p-1.5 rounded-lg hover:bg-foreground/5 transition-colors"
            aria-label="メニューを閉じる"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
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
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => !hasChildren && close()}
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

                {hasChildren && expanded && (
                  <div className="ml-5 pl-3 border-l border-brief-rule mt-1 mb-2 space-y-0.5">
                    {item.children!.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={close}
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
