import Link from "next/link";
import { T } from "@/components/T";

export function IndustryFinancialNav({ slug }: { slug: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-4">
        <T ja="財務諸表で読み解く" en="Financial Statement Analysis" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          href={`/industry/${slug}/pl`}
          className="group p-4 rounded-xl border border-brief-border hover:border-[#ef4444]/30 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ef4444]/10 text-[#ef4444]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm group-hover:text-[#ef4444] transition-colors">PL</h3>
            <span className="text-[8px] tracking-wider uppercase text-foreground/35">Profit & Loss</span>
          </div>
          <p className="text-[10px] text-foreground/50 leading-relaxed">
            <T ja="原価率・販管費率・営業利益率" en="COGS, SGA & operating margin" />
          </p>
        </Link>

        <Link
          href={`/industry/${slug}/bs`}
          className="group p-4 rounded-xl border border-brief-border hover:border-[#3b82f6]/30 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3b82f6]/10 text-[#3b82f6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm group-hover:text-[#3b82f6] transition-colors">BS</h3>
            <span className="text-[8px] tracking-wider uppercase text-foreground/35">Balance Sheet</span>
          </div>
          <p className="text-[10px] text-foreground/50 leading-relaxed">
            <T ja="資産構成・負債・自己資本比率" en="Assets, liabilities & equity ratio" />
          </p>
        </Link>

        <Link
          href={`/industry/${slug}/cf`}
          className="group p-4 rounded-xl border border-brief-border hover:border-[#10b981]/30 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#10b981]/10 text-[#10b981]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm group-hover:text-[#10b981] transition-colors">CF</h3>
            <span className="text-[8px] tracking-wider uppercase text-foreground/35">Cash Flow</span>
          </div>
          <p className="text-[10px] text-foreground/50 leading-relaxed">
            <T ja="営業CF・投資CF・財務CF" en="Operating, investing & financing CF" />
          </p>
        </Link>
      </div>
    </div>
  );
}
