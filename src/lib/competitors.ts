import type { PLDetail, BSDetail, CFDetail } from "./automotive";

export interface Competitor {
  slug: string;
  name: string;
  nameEn: string;
  logo: string;
  color: string;
  stockCode?: string;
  overview: string;
  financials: {
    revenue: string;
    revenueYoy: string;
    operatingProfit: string;
    opMargin: string;
    keyMetric?: string;
    keyMetricLabel?: string;
    keyMetricYoy?: string;
    fiscalYear: string;
  };
  pl: PLDetail;
  bs: BSDetail;
  cf: CFDetail;
  strategy: {
    title: string;
    summary: string;
    keyPoints: string[];
    target: string;
  };
  strengths: string[];
  challenges: string[];
  latestNews: { date: string; headline: string }[];
}
