import { PageIcon, EyeIcon, CheckCircleIcon, PieChartIcon } from "../../icons";
import { LandingPageStats } from "../../types/landingPage";

interface LandingPageMetricsProps {
  loading: boolean;
  stats: LandingPageStats | null;
}

export default function LandingPageMetrics({ 
  loading, 
  stats 
}: LandingPageMetricsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Total Active Landing Pages Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <PageIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Active Landing Pages
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                stats?.totalActivePages.toLocaleString() || '0'
              )}
            </h4>
          </div>
        </div>
      </div>

      {/* Total Views (Last 30 Days) Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <EyeIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Views (Last 30 Days)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                stats?.totalViewsLast30Days.toLocaleString() || '0'
              )}
            </h4>
          </div>
        </div>
      </div>

      {/* Total Submissions (Last 30 Days) Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <CheckCircleIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Submissions (Last 30 Days)
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                stats?.totalSubmissionsLast30Days.toLocaleString() || '0'
              )}
            </h4>
          </div>
        </div>
      </div>

      {/* Overall Conversion Rate (Last 30 Days) */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <PieChartIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Overall Conversion Rate
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                `${((stats?.overallConversionRate || 0) * 100).toFixed(1)}%`
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
