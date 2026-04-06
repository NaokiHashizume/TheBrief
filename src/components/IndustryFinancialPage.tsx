"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { IndustryFinancial } from "@/lib/industryFinancials";

type TabType = "pl" | "bs" | "cf";

function TabNav({ slug, active }: { slug: string; active: TabType }) {
  const tabs: { key: TabType; label: string; color: string }[] = [
    { key: "pl", label: "PL", color: "#ef4444" },
    { key: "bs", label: "BS", color: "#3b82f6" },
    { key: "cf", label: "CF", color: "#10b981" },
  ];

  return (
    <div className="flex gap-2 mb-8">
      {tabs.map((t) =>
        t.key === active ? (
          <span key={t.key} className="px-4 py-2 text-sm font-bold rounded-lg text-white" style={{ backgroundColor: t.color }}>
            {t.label}
          </span>
        ) : (
          <Link key={t.key} href={`/industry/${slug}/${t.key}`} className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">
            {t.label}
          </Link>
        ),
      )}
    </div>
  );
}

// ━━━ PL Page ━━━

export function IndustryPLContent({ data }: { data: IndustryFinancial }) {
  const { locale } = useLanguage();
  const { pl, notes, topCompanies, color } = data;

  return (
    <>
      <TabNav slug={data.slug} active="pl" />

      {/* PL visual bar */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
          {locale === "ja" ? "収益構造（売上高 = 100%）" : "Revenue Structure (Revenue = 100%)"}
        </div>
        <div className="flex h-10 rounded-lg overflow-hidden text-xs font-medium">
          <div className="flex items-center justify-center text-white/90 bg-[#94a3b8]" style={{ width: `${pl.cost}%` }}>
            {locale === "ja" ? `原価 ${pl.cost}%` : `COGS ${pl.cost}%`}
          </div>
          <div className="flex items-center justify-center text-white/90 bg-[#64748b]" style={{ width: `${pl.sga}%` }}>
            {locale === "ja" ? `販管費 ${pl.sga}%` : `SGA ${pl.sga}%`}
          </div>
          <div className="flex items-center justify-center text-white/90" style={{ width: `${pl.profit}%`, backgroundColor: color }}>
            {pl.profit > 3 && (locale === "ja" ? `利益 ${pl.profit}%` : `Profit ${pl.profit}%`)}
          </div>
        </div>

        {/* Breakdown cards */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "売上原価率" : "COGS Ratio"}</div>
            <div className="text-xl font-bold tabular-nums mt-1">{pl.cost}%</div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "販管費率" : "SGA Ratio"}</div>
            <div className="text-xl font-bold tabular-nums mt-1">{pl.sga}%</div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "営業利益率" : "Operating Margin"}</div>
            <div className="text-xl font-bold tabular-nums mt-1" style={{ color }}>{pl.profit}%</div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
          {locale === "ja" ? "業界PLの特徴" : "Industry PL Characteristics"}
        </div>
        <p className="text-sm text-foreground/65 leading-[1.8]">{notes.pl}</p>
      </div>

      {/* Top companies */}
      <TopCompaniesCard companies={topCompanies} color={color} locale={locale} />
    </>
  );
}

// ━━━ BS Page ━━━

export function IndustryBSContent({ data }: { data: IndustryFinancial }) {
  const { locale } = useLanguage();
  const { bs, notes, topCompanies, color } = data;

  return (
    <>
      <TabNav slug={data.slug} active="bs" />

      {/* BS visual */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
          {locale === "ja" ? "貸借対照表の構成（総資産 = 100%）" : "Balance Sheet Structure (Total Assets = 100%)"}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Assets */}
          <div>
            <div className="text-[9px] text-foreground/40 mb-1">{locale === "ja" ? "資産の部" : "Assets"}</div>
            <div className="flex h-10 rounded-lg overflow-hidden text-xs font-medium">
              <div className="flex items-center justify-center text-white/90 bg-[#60a5fa]" style={{ width: `${bs.currentAssets}%` }}>
                {locale === "ja" ? `流動 ${bs.currentAssets}%` : `Current ${bs.currentAssets}%`}
              </div>
              <div className="flex items-center justify-center text-white/90 bg-[#3b82f6]" style={{ width: `${bs.fixedAssets}%` }}>
                {locale === "ja" ? `固定 ${bs.fixedAssets}%` : `Fixed ${bs.fixedAssets}%`}
              </div>
            </div>
          </div>

          {/* Liabilities & Equity */}
          <div>
            <div className="text-[9px] text-foreground/40 mb-1">{locale === "ja" ? "負債・純資産の部" : "Liabilities & Equity"}</div>
            <div className="flex h-10 rounded-lg overflow-hidden text-xs font-medium">
              <div className="flex items-center justify-center text-white/90 bg-[#94a3b8]" style={{ width: `${bs.currentLiab}%` }}>
                {bs.currentLiab >= 15 && (locale === "ja" ? `流動 ${bs.currentLiab}%` : `CL ${bs.currentLiab}%`)}
              </div>
              <div className="flex items-center justify-center text-white/90 bg-[#64748b]" style={{ width: `${bs.fixedLiab}%` }}>
                {bs.fixedLiab >= 12 && (locale === "ja" ? `固定 ${bs.fixedLiab}%` : `FL ${bs.fixedLiab}%`)}
              </div>
              <div className="flex items-center justify-center text-white/90" style={{ width: `${bs.equity}%`, backgroundColor: color }}>
                {bs.equity >= 10 && `${bs.equity}%`}
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4">
          <BSStatCard label={locale === "ja" ? "流動資産" : "Current Assets"} value={`${bs.currentAssets}%`} />
          <BSStatCard label={locale === "ja" ? "固定資産" : "Fixed Assets"} value={`${bs.fixedAssets}%`} />
          <BSStatCard label={locale === "ja" ? "流動負債" : "Current Liab."} value={`${bs.currentLiab}%`} />
          <BSStatCard label={locale === "ja" ? "固定負債" : "Fixed Liab."} value={`${bs.fixedLiab}%`} />
          <BSStatCard label={locale === "ja" ? "自己資本" : "Equity"} value={`${bs.equity}%`} color={color} />
        </div>
      </div>

      {/* Notes */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
          {locale === "ja" ? "業界BSの特徴" : "Industry BS Characteristics"}
        </div>
        <p className="text-sm text-foreground/65 leading-[1.8]">{notes.bs}</p>
      </div>

      <TopCompaniesCard companies={topCompanies} color={color} locale={locale} />
    </>
  );
}

// ━━━ CF Page ━━━

export function IndustryCFContent({ data }: { data: IndustryFinancial }) {
  const { locale } = useLanguage();
  const { cf, notes, topCompanies, color } = data;

  const maxAbs = Math.max(Math.abs(cf.operating), Math.abs(cf.investing), Math.abs(cf.financing));

  const bars = [
    { label: locale === "ja" ? "営業CF" : "Operating CF", value: cf.operating, color: "#10b981" },
    { label: locale === "ja" ? "投資CF" : "Investing CF", value: cf.investing, color: "#3b82f6" },
    { label: locale === "ja" ? "財務CF" : "Financing CF", value: cf.financing, color: "#f59e0b" },
  ];

  return (
    <>
      <TabNav slug={data.slug} active="cf" />

      {/* CF visual */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
          {locale === "ja" ? "キャッシュフローバランス（相対比較）" : "Cash Flow Balance (Relative Scale)"}
        </div>

        <div className="space-y-3">
          {bars.map((b) => {
            const pct = Math.abs(b.value) / maxAbs * 100;
            const isNeg = b.value < 0;
            return (
              <div key={b.label} className="flex items-center gap-3">
                <span className="text-xs text-foreground/50 w-16 text-right flex-shrink-0">{b.label}</span>
                <div className="flex-1 relative h-8 flex items-center">
                  {isNeg ? (
                    <div className="w-full flex justify-end">
                      <div className="h-full rounded-l flex items-center justify-end pr-2 text-white/80 text-xs font-medium" style={{ width: `${pct}%`, backgroundColor: b.color, opacity: 0.7 }}>
                        {b.value}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full rounded-r flex items-center pl-2 text-white/80 text-xs font-medium" style={{ width: `${pct}%`, backgroundColor: b.color }}>
                      +{b.value}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "営業CF" : "Operating CF"}</div>
            <div className="text-lg font-bold tabular-nums mt-1 text-[#10b981]">+{cf.operating}</div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "投資CF" : "Investing CF"}</div>
            <div className="text-lg font-bold tabular-nums mt-1 text-[#ef4444]">{cf.investing}</div>
          </div>
          <div className="p-3 rounded-lg bg-foreground/[0.03]">
            <div className="text-[10px] text-foreground/45">{locale === "ja" ? "財務CF" : "Financing CF"}</div>
            <div className="text-lg font-bold tabular-nums mt-1" style={{ color: cf.financing >= 0 ? "#10b981" : "#ef4444" }}>
              {cf.financing >= 0 ? `+${cf.financing}` : cf.financing}
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="rounded-xl border border-brief-border bg-brief-card p-5 mb-6">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
          {locale === "ja" ? "業界CFの特徴" : "Industry CF Characteristics"}
        </div>
        <p className="text-sm text-foreground/65 leading-[1.8]">{notes.cf}</p>
      </div>

      <TopCompaniesCard companies={topCompanies} color={color} locale={locale} />
    </>
  );
}

// ━━━ Shared ━━━

function BSStatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="p-2.5 rounded-lg bg-foreground/[0.03]">
      <div className="text-[10px] text-foreground/45">{label}</div>
      <div className="text-lg font-bold tabular-nums mt-1" style={color ? { color } : undefined}>{value}</div>
    </div>
  );
}

function TopCompaniesCard({ companies, color, locale }: { companies: IndustryFinancial["topCompanies"]; color: string; locale: string }) {
  return (
    <div className="rounded-xl border border-brief-border bg-brief-card p-5">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
        {locale === "ja" ? "主要企業（市場シェア）" : "Top Companies (Market Share)"}
      </div>
      <div className="flex flex-wrap gap-3">
        {companies.map((c) => (
          <div key={c.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-foreground/[0.03]">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-sm font-medium">{c.name}</span>
            <span className="text-xs text-foreground/45 tabular-nums">{c.share}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
