import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { PlusIcon } from '../../icons';
import Select from '../../components/form/Select';
import { OnboardingStatus, OnboardingPatient } from '../../types/onboarding';
import OnboardingTable from '../../components/onboarding/OnboardingTable';
import { getOnboardingPatients } from '../../services/onboardingService';

// Custom debounce function to avoid lodash dependency
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function OnboardingDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OnboardingStatus | null>(null);
  const [loading, setLoading] = useState(true); // Start with loading state true
  const [error, setError] = useState<string | null>(null);
  const [patients, setPatients] = useState<OnboardingPatient[]>([]);
  
  // Use our custom debounce hook
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Status filter options
  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: OnboardingStatus.InProgress, label: 'In Progress' },
    { value: OnboardingStatus.Completed, label: 'Completed' },
    { value: OnboardingStatus.Stalled, label: 'Stalled' },
    { value: OnboardingStatus.Abandoned, label: 'Abandoned' },
  ];

  // Fetch onboarding patients based on filters
  const fetchPatients = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getOnboardingPatients({
        searchTerm: debouncedSearchTerm,
        statusFilter: statusFilter
      });
      setPatients(data);
      setError(null);
    } catch (err) {
      setError('Failed to load onboarding patients. Please try again.');
      console.error('Error fetching onboarding patients:', err);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm, statusFilter]);

  // Fetch patients when filters change
  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle status filter change
  const handleStatusChange = (value: string) => {
    setStatusFilter(value === '' ? null : value as OnboardingStatus);
  };

  // Handle retry on error
  const handleRetry = () => {
    fetchPatients();
  };

  // Handle opening Add Patient modal
  const handleAddPatient = () => {
    console.log('Add patient clicked');
    // Future implementation: open Add Patient modal
  };

  // Handle viewing patient details
  const handleViewDetails = (patientId: string) => {
    console.log('View details for patient:', patientId);
    // Future implementation: navigate to patient details page
  };

  // Handle sending a reminder to a patient
  const handleSendReminder = (patientId: string) => {
    console.log('Send reminder to patient:', patientId);
    // Future implementation: display confirmation or open reminder modal
    alert(`Reminder sent to patient ID: ${patientId}`);
  };

  return (
    <>
      <Helmet>
        <title>Onboarding Hub - YUNA Dashboard</title>
      </Helmet>

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-gray-900 dark:text-white">
            Onboarding Hub
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-sm focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full sm:w-40">
              <Select
                options={statusOptions}
                defaultValue=""
                onChange={handleStatusChange}
                placeholder="Status"
              />
            </div>
            <button
              onClick={handleAddPatient}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 dark:hover:bg-brand-400"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Patient</span>
            </button>
          </div>
        </div>

        <OnboardingTable
          patients={patients}
          loading={loading}
          error={error}
          onRetry={handleRetry}
          onAddPatient={handleAddPatient}
          onViewDetails={handleViewDetails}
          onSendReminder={handleSendReminder}
          searchQuery={searchTerm}
          statusFilter={statusFilter}
        />
      </div>
    </>
  );
}
