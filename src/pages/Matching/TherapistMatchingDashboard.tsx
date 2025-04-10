import React, { useState, useEffect } from 'react';
import PageMeta from '../../components/common/PageMeta';
import Button from '../../components/ui/button/Button';
import Alert from '../../components/ui/alert/Alert';
import MatchingMetrics from '../../components/matching/MatchingMetrics';
import { PlusIcon, ArrowRightIcon } from '../../icons';
import therapistMatchingService from '../../services/therapistMatchingService';

// Define tab types
type TabType = 'queue' | 'therapists' | 'results';

const TherapistMatchingDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState({
    patientsAwaitingMatch: 0,
    availableTherapists: 0,
    successfulMatchesLast30Days: 0
  });
  // Add active tab state - default to queue
  const [activeTab, setActiveTab] = useState<TabType>('queue');

  // Handler for Add Therapist button
  const handleAddTherapist = () => {
    console.log('Add Therapist clicked');
  };

  // Fetch metrics data on component mount
  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      setError(null);
      const metricsData = await therapistMatchingService.getMatchingMetrics();
      setMetrics({
        patientsAwaitingMatch: metricsData.patientsAwaitingMatch,
        availableTherapists: metricsData.availableTherapists,
        successfulMatchesLast30Days: metricsData.successfulMatchesLast30Days
      });
    } catch (err) {
      console.error('Error fetching metrics data:', err);
      setError('Failed to load matching metrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get tab button class based on active state
  const getTabClass = (tab: TabType) => {
    return activeTab === tab
      ? 'border-brand-500 text-brand-500 dark:border-brand-400 dark:text-brand-400 border-b-2 font-medium'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700 border-b-2';
  };

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'queue':
        return (
          <div className="p-6 bg-white dark:bg-white/[0.03] rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Matching Queue</h3>
            <p className="text-gray-500 dark:text-gray-400">
              This section will display patients waiting to be matched with therapists.
            </p>
          </div>
        );
      case 'therapists':
        return (
          <div className="p-6 bg-white dark:bg-white/[0.03] rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Therapist Profiles</h3>
            <p className="text-gray-500 dark:text-gray-400">
              This section will display all therapist profiles and their availability status.
            </p>
          </div>
        );
      case 'results':
        return (
          <div className="p-6 bg-white dark:bg-white/[0.03] rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Match Results</h3>
            <p className="text-gray-500 dark:text-gray-400">
              This section will display the history and status of all therapist-patient matches.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageMeta
        title="Therapist Matching | YUNA"
        description="Therapist matching and management dashboard for YUNA platform"
      />

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        {/* Page Header */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-gray-900 dark:text-white">
            Therapist Matching
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button 
              onClick={handleAddTherapist}
              className="flex items-center justify-center"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Therapist
            </Button>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-6">
          {error ? (
            <div className="mb-4">
              <Alert 
                variant="error"
                title="Error Loading Metrics"
                message={error}
                showLink={false}
              />
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={fetchMetrics} 
                  className="flex items-center"
                  variant="outline"
                >
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Retry
                </Button>
              </div>
            </div>
          ) : (
            <MatchingMetrics 
              loading={loading}
              patientsAwaitingMatch={metrics.patientsAwaitingMatch}
              availableTherapists={metrics.availableTherapists}
              successfulMatchesLast30Days={metrics.successfulMatchesLast30Days}
            />
          )}
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('queue')}
              className={`py-4 px-1 text-sm font-medium ${getTabClass('queue')}`}
            >
              Matching Queue
            </button>
            <button
              onClick={() => setActiveTab('therapists')}
              className={`py-4 px-1 text-sm font-medium ${getTabClass('therapists')}`}
            >
              Therapist Profiles
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-1 text-sm font-medium ${getTabClass('results')}`}
            >
              Match Results
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </>
  );
};

export default TherapistMatchingDashboard;
