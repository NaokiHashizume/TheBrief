"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer
      className="bg-brief-dark text-white border-t-[6px] border-brief-red mt-16"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="opacity-90">
              <Logo light />
            </div>
            <p className="mt-4 text-white/40 text-xs leading-relaxed max-w-xs">
              Politics · Economy · Industry · University
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://x.com/thebrief_info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow @thebrief_info on X"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@TheBrief-info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@thebrief.info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              {t("footer.sections")}
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/politics" className="hover:text-white transition-colors">Politics</Link></li>
              <li><Link href="/economy" className="hover:text-white transition-colors">Economy</Link></li>
              <li><Link href="/industry" className="hover:text-white transition-colors">Industry</Link></li>
              <li><Link href="/university" className="hover:text-white transition-colors">University</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              {t("footer.more")}
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><span className="text-white/30 cursor-default">Lifestyle</span></li>
              <li><span className="text-white/30 cursor-default">Opinion</span></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              Account
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>&copy; {new Date().getFullYear()} The Brief. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
