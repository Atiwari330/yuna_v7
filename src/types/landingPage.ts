// Define status options for landing pages
export type LandingPageStatus = 'Active' | 'Inactive';

// Interface for landing page performance metrics
export interface LandingPagePerformanceMetrics {
  viewsLast30Days: number;
  submissionsLast30Days: number;
  totalViews: number;
  totalSubmissions: number;
  conversionRate: number;
}

// Main interface for landing page data
export interface LandingPage {
  id: string;
  name: string;
  referralSourceOrCampaign: string;
  url: string;
  status: LandingPageStatus;
  createdAt: string; // ISO date string
  performance: LandingPagePerformanceMetrics;
  description?: string; // Optional description
  thumbnailUrl?: string; // Optional thumbnail image URL
}

// Interface for aggregated landing page statistics
export interface LandingPageStats {
  totalActivePages: number;
  totalViewsLast30Days: number;
  totalSubmissionsLast30Days: number;
  overallConversionRate: number;
}
