import { useState, useEffect } from 'react';
import PageMeta from '../../components/common/PageMeta';
import callService from '../../services/callService';
import CallsMetrics from '../../components/calls/CallsMetrics';
import CallsTable from '../../components/calls/CallsTable';
import InitiateCallModal from '../../components/calls/InitiateCallModal';
import Select from '../../components/form/Select';
import Button from '../../components/ui/button/Button';
import Alert from '../../components/ui/alert/Alert';
import { PlusIcon, ArrowRightIcon } from '../../icons';

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

export default function CallsDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    completedToday: 0,
    scheduled: 0,
    sentimentBreakdown: { positive: 0, neutral: 0, negative: 0 }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [isInitiateModalOpen, setIsInitiateModalOpen] = useState(false);

  // Debounce search term to avoid too many requests
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Call type filter options
  const callTypeOptions = [
    { value: '', label: 'All Types' },
    { value: 'Intake', label: 'Intake' },
    { value: 'Eligibility & Benefits', label: 'Eligibility & Benefits' },
    { value: 'Reminder', label: 'Reminder' },
    { value: 'Follow-up', label: 'Follow-up' },
  ];

  // Call status filter options
  const callStatusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Scheduled', label: 'Scheduled' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Failed', label: 'Failed' },
    { value: 'Canceled', label: 'Canceled' },
  ];

  // Fetch calls data on component mount
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const statsData = await callService.getCallStats();
      setStats(statsData);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard statistics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (callId: string) => {
    // This will be implemented in Task 6 - Call Details Modal
    console.log('View details for call:', callId);
  };

  const handleOpenInitiateModal = () => {
    setIsInitiateModalOpen(true);
  };

  const handleCloseInitiateModal = () => {
    setIsInitiateModalOpen(false);
  };

  const handleCallInitiated = () => {
    // Refresh stats and table data
    fetchStats();
  };

  return (
    <>
      <PageMeta
        title="AI Calls Dashboard | YUNA"
        description="AI Calls management dashboard for YUNA platform"
      />

      {/* Initiate Call Modal */}
      <InitiateCallModal 
        isOpen={isInitiateModalOpen}
        onClose={handleCloseInitiateModal}
        onCallInitiated={handleCallInitiated}
      />

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        {/* Page Header */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-gray-900 dark:text-white">
            AI Calls Dashboard
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button 
              onClick={handleOpenInitiateModal}
              className="flex items-center justify-center"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Initiate AI Call
            </Button>
          </div>
        </div>

        {/* Summary Metrics Section */}
        <div className="mb-6">
          {error ? (
            <div className="mb-4">
              <Alert 
                variant="error"
                title="Error Loading Dashboard"
                message={error}
                showLink={false}
              />
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={fetchStats} 
                  className="flex items-center"
                  variant="outline"
                >
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Retry
                </Button>
              </div>
            </div>
          ) : (
            <CallsMetrics 
              loading={loading}
              totalCalls={stats.total}
              completedToday={stats.completedToday}
              scheduledCalls={stats.scheduled}
            />
          )}
        </div>

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
              placeholder="Search clients..."
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-10 pr-4 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="sm:w-48">
              <Select 
                options={callTypeOptions}
                placeholder="Filter by Type"
                onChange={setTypeFilter}
              />
            </div>
            <div className="sm:w-48">
              <Select 
                options={callStatusOptions}
                placeholder="Filter by Status"
                onChange={setStatusFilter}
              />
            </div>
          </div>
        </div>

        {/* Call Management Table Section */}
        <CallsTable 
          searchQuery={debouncedSearchTerm}
          statusFilter={statusFilter}
          typeFilter={typeFilter}
          onViewDetails={handleViewDetails}
        />
      </div>
    </>
  );
}
