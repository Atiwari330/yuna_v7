import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';
import { OnboardingPatient, OnboardingStatus } from '../../types/onboarding';
import onboardingService from '../../services/onboardingService';
import Badge from '../ui/badge/Badge';
import Button from '../ui/button/Button';
import Alert from '../ui/alert/Alert';

// Define component props interface
interface OnboardingTableProps {
  searchQuery: string;
  statusFilter?: OnboardingStatus | null;
  patients?: OnboardingPatient[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  onAddPatient?: () => void;
  onViewDetails?: (patientId: string) => void;
  onSendReminder?: (patientId: string) => void;
}

const OnboardingTable: React.FC<OnboardingTableProps> = ({
  searchQuery,
  statusFilter,
  patients: propPatients,
  loading: propLoading,
  error: propError,
  onRetry,
  onAddPatient,
  onViewDetails,
  onSendReminder
}) => {
  const [patients, setPatients] = useState<OnboardingPatient[]>(propPatients || []);
  const [loading, setLoading] = useState(propLoading !== undefined ? propLoading : true);
  const [error, setError] = useState<string | null>(propError || null);
  const [sortField, setSortField] = useState<keyof OnboardingPatient | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  // Check if device is mobile based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle expanded row for mobile view
  const toggleRowExpansion = (patientId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [patientId]: !prev[patientId]
    }));
  };

  // Fetch patients when search query or status filter changes
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const data = await onboardingService.getOnboardingPatients({
          searchTerm: searchQuery,
          statusFilter: statusFilter ? statusFilter as OnboardingStatus : undefined
        });
        setPatients(data);
        setError(null);
      } catch (err) {
        setError('Failed to load onboarding patients data');
        console.error('Error fetching onboarding patients:', err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search to prevent too many rapid requests
    const timer = setTimeout(() => {
      fetchPatients();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, statusFilter]);

  // Sort patients when sortField changes
  useEffect(() => {
    if (sortField) {
      const sortedPatients = [...patients].sort((a, b) => {
        const fieldA = a[sortField];
        const fieldB = b[sortField];

        // Special handling for dates
        if (
          sortField === 'startDate' ||
          sortField === 'lastActivityDate' ||
          sortField === 'estimatedCompletionDate'
        ) {
          const dateA = fieldA ? new Date(fieldA as string).getTime() : 0;
          const dateB = fieldB ? new Date(fieldB as string).getTime() : 0;
          return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
        }

        // Default comparison for strings and numbers
        if (typeof fieldA === 'string' && typeof fieldB === 'string') {
          return sortDirection === 'asc'
            ? fieldA.localeCompare(fieldB)
            : fieldB.localeCompare(fieldA);
        } else {
          // For numbers or other types
          // Handle undefined values by treating them as lowest value
          if (fieldA === undefined && fieldB === undefined) return 0;
          if (fieldA === undefined) return sortDirection === 'asc' ? -1 : 1;
          if (fieldB === undefined) return sortDirection === 'asc' ? 1 : -1;
          
          if (fieldA < fieldB) return sortDirection === 'asc' ? -1 : 1;
          if (fieldA > fieldB) return sortDirection === 'asc' ? 1 : -1;
          return 0;
        }
      });
      setPatients(sortedPatients);
    }
  }, [sortField, sortDirection, patients]);

  // Handle sorting
  const handleSort = (field: keyof OnboardingPatient) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Column sort indicator
  const renderSortIndicator = (field: keyof OnboardingPatient) => {
    if (sortField !== field) return null;
    
    return (
      <span className="ml-1 inline-block">
        {sortDirection === 'asc' ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        ) : (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        )}
      </span>
    );
  };

  // Headers with sort functionality
  const renderSortableHeader = (title: string, field: keyof OnboardingPatient) => {
    // Map our sort direction to aria-sort values
    let ariaSortValue: "none" | "ascending" | "descending" | "other" | undefined = undefined;
    if (sortField === field) {
      ariaSortValue = sortDirection === 'asc' ? 'ascending' : 'descending';
    }
    
    return (
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => handleSort(field)}
        role="button"
        tabIndex={0}
        aria-sort={ariaSortValue}
      >
        {title}
        {renderSortIndicator(field)}
      </div>
    );
  };

  // Handle loading state
  if (loading) {
    // Skeleton loader for table
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Mobile Skeleton Loader */}
        <div className="md:hidden p-4 space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-white/[0.03] rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar skeleton */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="flex-1">
                      {/* Name skeleton */}
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                      {/* Email skeleton */}
                      <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                  {/* Status badge skeleton */}
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                </div>

                {/* Grid data skeleton */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div>
                    {/* Progress label skeleton */}
                    <div className="h-3 w-14 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    {/* Progress bar skeleton */}
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    {/* Days in process label skeleton */}
                    <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    {/* Days in process value skeleton */}
                    <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Show more button skeleton */}
                <div className="flex justify-end mt-3">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Skeleton Loader */}
        <div className="hidden md:block">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-full">
              {/* Table Header Skeleton */}
              <div className="border-b border-gray-100 dark:border-white/[0.05] py-3 px-5">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${index === 0 ? 'w-1/4' : 'w-1/6'} mr-2`}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Table Body Skeleton */}
              <div className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {[...Array(5)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex py-4 px-5">
                    {/* Name Column */}
                    <div className="w-1/4 pr-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                        <div>
                          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                          <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Column */}
                    <div className="w-1/6">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Progress Column */}
                    <div className="w-1/6">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Dates Column */}
                    <div className="w-1/6">
                      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Actions Column */}
                    <div className="w-1/6">
                      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <Alert 
          variant="error"
          title="Error Loading Patients"
          message={error}
          showLink={false}
        />
        <div className="flex justify-center mt-4">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-500 text-white text-sm font-medium hover:bg-brand-600"
            onClick={onRetry}
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10"></polyline>
              <polyline points="23 20 23 14 17 14"></polyline>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
            </svg>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Handle empty state
  if (patients.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4">
            {/* Empty state icon */}
            <svg 
              className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
              />
            </svg>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Onboarding Patients Found
          </h3>
          
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
            {searchQuery || statusFilter ? 
              `We couldn't find any patients matching ${searchQuery ? `"${searchQuery}"` : ''} ${statusFilter && searchQuery ? 'with status ' : ''}${statusFilter ? `"${statusFilter}"` : ''}. Try adjusting your search criteria.` : 
              "You don't have any patients in the onboarding process yet. Add your first patient to get started."}
          </p>
          
          <div className="flex gap-3">
            {(searchQuery || statusFilter) && (
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Clear Filters
              </button>
            )}
            
            {onAddPatient && (
              <button 
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 dark:hover:bg-brand-400"
                onClick={onAddPatient}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Add New Patient
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Helper function to render status badge
  const renderStatusBadge = (status: OnboardingStatus) => {
    let color: 'success' | 'warning' | 'error' | 'primary' | 'light' = 'light';
    
    switch (status) {
      case OnboardingStatus.InProgress:
        color = 'primary';
        break;
      case OnboardingStatus.Completed:
        color = 'success';
        break;
      case OnboardingStatus.Stalled:
        color = 'warning';
        break;
      case OnboardingStatus.Abandoned:
        color = 'error';
        break;
    }
    
    return <Badge color={color} size="sm">{status}</Badge>;
  };

  // Helper function to render progress bar
  const renderProgressBar = (progress: number) => {
    let barColor = 'bg-brand-500';

    if (progress >= 80) {
      barColor = 'bg-success-500';
    } else if (progress >= 40) {
      barColor = 'bg-brand-500';
    } else if (progress >= 20) {
      barColor = 'bg-warning-500';
    } else {
      barColor = 'bg-error-500';
    }

    return (
      <div className="flex items-center gap-3">
        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
          <div 
            className={`h-2 rounded-full ${barColor}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
      </div>
    );
  };

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Helper function to calculate days since start
  const calculateDaysSinceStart = (startDate: string): number => {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Render table for desktop view
  const renderDesktopTable = () => (
    <div className="rounded-sm border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Patient', 'name')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Status', 'status')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Progress', 'progress')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Days in Process', 'startDate')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Last Activity', 'lastActivityDate')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {patient.avatar ? (
                      <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-gray-700 dark:text-brand-400">
                        {patient.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {patient.name}
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {patient.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-4">
                  {renderStatusBadge(patient.status)}
                </TableCell>
                <TableCell className="px-5 py-4">
                  {renderProgressBar(patient.progress)}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {calculateDaysSinceStart(patient.startDate)} days
                  </p>
                </TableCell>
                <TableCell className="px-5 py-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {formatDate(patient.lastActivityDate)}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-4">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => onViewDetails?.(patient.id)}
                      className="flex items-center"
                    >
                      <svg 
                        className="w-4 h-4 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      View
                    </Button>
                    
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onSendReminder?.(patient.id)}
                      className="flex items-center"
                    >
                      <svg 
                        className="w-4 h-4 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                      </svg>
                      Remind
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  // Render card list for mobile view
  const renderMobileView = () => (
    <div className="space-y-4">
      {patients.map((patient) => (
        <div 
          key={patient.id} 
          className="rounded-lg border border-gray-100 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] overflow-hidden"
        >
          <div 
            className="cursor-pointer p-4"
            onClick={() => toggleRowExpansion(patient.id)}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {patient.avatar ? (
                  <img
                    src={patient.avatar}
                    alt={patient.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-gray-700 dark:text-brand-400">
                    {patient.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    {patient.name}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {patient.email}
                  </p>
                </div>
              </div>
              <div>
                {renderStatusBadge(patient.status)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <div>
                <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Progress
                </p>
                {renderProgressBar(patient.progress)}
              </div>

              <div>
                <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Days in Process
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {calculateDaysSinceStart(patient.startDate)} days
                </p>
              </div>
            </div>

            <div className="mt-2 text-right">
              <button
                className="inline-flex items-center text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
              >
                <svg 
                  className="w-4 h-4 mr-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {expandedRows[patient.id] ? (
                    <path d="M18 15l-6-6-6 6"/>
                  ) : (
                    <path d="M6 9l6 6 6-6"/>
                  )}
                </svg>
                {expandedRows[patient.id] ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>

          {/* Expandable area */}
          <div className={expandedRows[patient.id] ? 'block' : 'hidden'}>
            <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-800 mt-1">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Start Date
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatDate(patient.startDate)}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Last Activity
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatDate(patient.lastActivityDate)}
                  </p>
                </div>

                {patient.notes && (
                  <div className="col-span-2">
                    <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                      Notes
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {patient.notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={(e?: React.MouseEvent<Element, MouseEvent>) => {
                    if (e) e.stopPropagation(); // Prevent row toggle if event exists
                    onViewDetails?.(patient.id);
                  }}
                  className="flex items-center flex-1"
                >
                  <svg 
                    className="w-4 h-4 mr-1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  View
                </Button>
                
                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e?: React.MouseEvent<Element, MouseEvent>) => {
                    if (e) e.stopPropagation(); // Prevent row toggle if event exists
                    onSendReminder?.(patient.id);
                  }}
                  className="flex items-center flex-1"
                >
                  <svg 
                    className="w-4 h-4 mr-1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                  Remind
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Render mobile or desktop view based on screen size */}
      {isMobile ? renderMobileView() : renderDesktopTable()}
    </div>
  );
};

export default OnboardingTable;
