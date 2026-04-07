"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useSidebar } from "./Sidebar";

const categories = [
  { label: "Politics", href: "/politics", color: "hover:text-[#e53e3e]" },
  { label: "Economy", href: "/economy", color: "hover:text-[#b9770e]" },
  { label: "Industry", href: "/industry", color: "hover:text-[#1e8449]" },
  { label: "University", href: "/university", color: "hover:text-[#6366f1]" },
  { label: "Column", href: "/column", color: "hover:text-[#0d9488]" },
];

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="bg-background border-b border-brief-rule sticky top-0 z-40">
      {/* Utility bar */}
      <div className="border-b border-brief-rule bg-background">
        <div className="max-w-[1400px] mx-auto px-6 h-7 flex items-center justify-between text-[10px] text-foreground/50 uppercase tracking-[2px] font-medium">
          <span className="hidden sm:inline">Politics · Economy · Industry · University · Column</span>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://x.com/thebrief_info"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="Follow us on X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@TheBrief-info"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@thebrief.info"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center relative">
        {/* Hamburger menu button — left side */}
        <button
          onClick={toggle}
          className="absolute left-6 p-2 -ml-2 rounded-lg hover:bg-foreground/5 transition-colors group"
          aria-label="メニューを開く"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50 group-hover:text-foreground transition-colors">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Logo — centered */}
        <div className="flex-1 flex flex-col items-center">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo className="items-center" />
          </Link>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="max-w-[1400px] mx-auto px-6 flex justify-center gap-10 border-t border-brief-rule py-2">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className={`nav-link text-[11px] tracking-[2.5px] uppercase font-medium text-foreground/60 ${cat.color} transition-colors`}
          >
            {cat.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
