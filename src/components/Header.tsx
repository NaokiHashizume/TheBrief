"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const categories = [
  { label: "Politics", href: "/category/politics" },
  { label: "Economy", href: "/category/economy" },
  { label: "Industry", href: "/category/industry" },
  { label: "Tech & AI", href: "/category/tech" },
  { label: "Lifestyle", href: "/category/lifestyle" },
  { label: "Opinion", href: "/category/opinion" },
];

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="border-b border-brief-border dark:border-white/10">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center gap-6 py-3 text-[11px] tracking-[2px] uppercase text-foreground/50 whitespace-nowrap">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="hover:text-foreground transition-colors"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
