import { useState, useEffect } from 'react';
import PageMeta from '../../components/common/PageMeta';
import LandingPageMetrics from '../../components/landing-pages/LandingPageMetrics';
import LandingPagesTable from '../../components/landing-pages/LandingPagesTable';
import Alert from '../../components/ui/alert/Alert';
import Select from '../../components/form/Select';
import landingPageService from '../../services/landingPageService';
import { LandingPage, LandingPageStats } from '../../types/landingPage';

// Custom debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function LandingPageDashboard() {
  // State for stats data
  const [stats, setStats] = useState<LandingPageStats | null>(null);
  const [loadingStats, setLoadingStats] = useState<boolean>(true);
  const [errorStats, setErrorStats] = useState<string | null>(null);

  // State for landing pages data
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [loadingPages, setLoadingPages] = useState<boolean>(true);
  const [errorPages, setErrorPages] = useState<string | null>(null);
  
  // Filter and search states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Debounce search term to avoid too many requests
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  // Status filter options
  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  // Function to fetch landing page statistics
  const fetchLandingPageStats = async () => {
    setLoadingStats(true);
    setErrorStats(null);
    
    try {
      const statsData = await landingPageService.getLandingPageStats();
      setStats(statsData);
    } catch (err: any) {
      console.error('Error fetching landing page stats:', err);
      setErrorStats(err.message || 'Failed to load landing page statistics');
    } finally {
      setLoadingStats(false);
    }
  };
  
  // Function to fetch landing pages data
  const fetchLandingPages = async () => {
    setLoadingPages(true);
    setErrorPages(null);
    
    try {
      const pagesData = await landingPageService.getLandingPages({
        searchTerm: debouncedSearchTerm,
        statusFilter
      });
      setPages(pagesData);
    } catch (err: any) {
      console.error('Error fetching landing pages:', err);
      setErrorPages(err.message || 'Failed to load landing pages');
    } finally {
      setLoadingPages(false);
    }
  };

  // Fetch stats data when component mounts
  useEffect(() => {
    fetchLandingPageStats();
  }, []);
  
  // Fetch pages data when filters change
  useEffect(() => {
    fetchLandingPages();
  }, [debouncedSearchTerm, statusFilter]);

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <PageMeta 
        title="Landing Pages | YUNA" 
        description="Landing pages performance tracking and management" 
      />
      
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">Landing Page Performance</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Track and manage your landing pages performance metrics
        </p>
      </div>
      
      {/* Metrics Section */}
      <div className="mb-6">
        <LandingPageMetrics loading={loadingStats} stats={stats} />
      </div>
      
      {/* Error Alert for Stats */}
      {errorStats && (
        <div className="mb-6">
          <Alert 
            variant="error" 
            title="Error Loading Statistics" 
            message={errorStats}
          />
          <div className="mt-4">
            <button
              onClick={fetchLandingPageStats}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {/* Search and Filters */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative md:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg 
              className="h-5 w-5 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search landing pages..."
            className="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-10 pr-4 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="sm:w-48">
            <Select 
              options={statusOptions}
              placeholder="Filter by Status"
              onChange={setStatusFilter}
            />
          </div>
        </div>
      </div>
      
      {/* Error Alert for Pages */}
      {errorPages && (
        <div className="mb-6">
          <Alert 
            variant="error" 
            title="Error Loading Landing Pages" 
            message={errorPages}
          />
          <div className="mt-4">
            <button
              onClick={fetchLandingPages}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {/* Landing Pages Table */}
      <LandingPagesTable 
        pages={pages} 
        loading={loadingPages} 
        error={errorPages} 
        onRetry={fetchLandingPages}
      />
    </div>
  );
}
