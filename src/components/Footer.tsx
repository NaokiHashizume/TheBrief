"use client";

import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brief-dark text-white border-t-[6px] border-brief-red mt-16">
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8">
        {/* Newsletter section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-14 mb-14 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              {t("footer.newsletter.title")}
            </h3>
            <p className="text-white/50 text-sm">
              {t("footer.newsletter.desc")}
            </p>
          </div>
          <div className="w-full md:w-auto">
            <NewsletterForm compact dark />
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="opacity-90 invert brightness-200">
              <Logo />
            </div>
            <p className="mt-4 text-white/40 text-xs leading-relaxed max-w-xs">
              Politics · Economy · Industry · Trends
            </p>
            <a
              href="https://x.com/thebrief_info"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @thebrief_info on X"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @thebrief_info
            </a>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              {t("footer.sections")}
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="/politics" className="hover:text-white transition-colors">Politics</a></li>
              <li><a href="/economy" className="hover:text-white transition-colors">Economy</a></li>
              <li><a href="/industry" className="hover:text-white transition-colors">Industry</a></li>
              <li><span className="text-white/30 cursor-default">University</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              {t("footer.more")}
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><span className="text-white/30 cursor-default">Lifestyle</span></li>
              <li><span className="text-white/30 cursor-default">Opinion</span></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/politics/government" className="hover:text-white transition-colors">官公庁リンク集</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-white/40 font-bold mb-4">
              Account
            </h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>&copy; {new Date().getFullYear()} The Brief. All rights reserved.</span>
          <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
