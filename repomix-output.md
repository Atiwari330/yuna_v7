This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**, package.json
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
package.json
src/App.tsx
src/components/auth/SignInForm.tsx
src/components/auth/SignUpForm.tsx
src/components/calls/CallDetailsModal.tsx
src/components/calls/CallsMetrics.tsx
src/components/calls/CallsTable.tsx
src/components/calls/InitiateCallModal.tsx
src/components/calls/SentimentIndicator.tsx
src/components/charts/bar/BarChartOne.tsx
src/components/charts/line/LineChartOne.tsx
src/components/clients/AddClientModal.tsx
src/components/clients/ClientsTable.tsx
src/components/common/ChartTab.tsx
src/components/common/ComponentCard.tsx
src/components/common/GridShape.tsx
src/components/common/PageBreadCrumb.tsx
src/components/common/PageMeta.tsx
src/components/common/ScrollToTop.tsx
src/components/common/ThemeToggleButton.tsx
src/components/common/ThemeTogglerTwo.tsx
src/components/ecommerce/CountryMap.tsx
src/components/ecommerce/DemographicCard.tsx
src/components/ecommerce/EcommerceMetrics.tsx
src/components/ecommerce/MonthlySalesChart.tsx
src/components/ecommerce/MonthlyTarget.tsx
src/components/ecommerce/RecentOrders.tsx
src/components/ecommerce/StatisticsChart.tsx
src/components/form/date-picker.tsx
src/components/form/form-elements/CheckboxComponents.tsx
src/components/form/form-elements/DefaultInputs.tsx
src/components/form/form-elements/DropZone.tsx
src/components/form/form-elements/FileInputExample.tsx
src/components/form/form-elements/InputGroup.tsx
src/components/form/form-elements/InputStates.tsx
src/components/form/form-elements/RadioButtons.tsx
src/components/form/form-elements/SelectInputs.tsx
src/components/form/form-elements/TextAreaInput.tsx
src/components/form/form-elements/ToggleSwitch.tsx
src/components/form/Form.tsx
src/components/form/group-input/PhoneInput.tsx
src/components/form/input/Checkbox.tsx
src/components/form/input/FileInput.tsx
src/components/form/input/InputField.tsx
src/components/form/input/Radio.tsx
src/components/form/input/RadioSm.tsx
src/components/form/input/TextArea.tsx
src/components/form/Label.tsx
src/components/form/MultiSelect.tsx
src/components/form/Select.tsx
src/components/form/switch/Switch.tsx
src/components/header/Header.tsx
src/components/header/NotificationDropdown.tsx
src/components/header/UserDropdown.tsx
src/components/onboarding/OnboardingTable.tsx
src/components/tables/BasicTables/BasicTableOne.tsx
src/components/ui/alert/Alert.tsx
src/components/ui/avatar/Avatar.tsx
src/components/ui/badge/Badge.tsx
src/components/ui/button/Button.tsx
src/components/ui/dropdown/Dropdown.tsx
src/components/ui/dropdown/DropdownItem.tsx
src/components/ui/images/ResponsiveImage.tsx
src/components/ui/images/ThreeColumnImageGrid.tsx
src/components/ui/images/TwoColumnImageGrid.tsx
src/components/ui/modal/index.tsx
src/components/ui/table/index.tsx
src/components/ui/videos/AspectRatioVideo.tsx
src/components/ui/videos/FourIsToThree.tsx
src/components/ui/videos/OneIsToOne.tsx
src/components/ui/videos/SixteenIsToNine.tsx
src/components/ui/videos/TwentyOneIsToNine.tsx
src/components/UserProfile/UserAddressCard.tsx
src/components/UserProfile/UserInfoCard.tsx
src/components/UserProfile/UserMetaCard.tsx
src/context/SidebarContext.tsx
src/context/ThemeContext.tsx
src/hooks/useGoBack.ts
src/hooks/useModal.ts
src/icons/alert-hexa.svg
src/icons/alert.svg
src/icons/angle-down.svg
src/icons/angle-up.svg
src/icons/arrow-down.svg
src/icons/arrow-right.svg
src/icons/arrow-up.svg
src/icons/audio.svg
src/icons/bolt.svg
src/icons/box-cube.svg
src/icons/box-line.svg
src/icons/box.svg
src/icons/calendar.svg
src/icons/calender-line.svg
src/icons/chat.svg
src/icons/check-circle.svg
src/icons/check-line.svg
src/icons/chevron-down.svg
src/icons/chevron-left.svg
src/icons/chevron-up.svg
src/icons/close-line.svg
src/icons/close.svg
src/icons/copy.svg
src/icons/docs.svg
src/icons/dollar-line.svg
src/icons/download.svg
src/icons/envelope.svg
src/icons/eye-close.svg
src/icons/eye.svg
src/icons/file.svg
src/icons/folder.svg
src/icons/grid.svg
src/icons/group.svg
src/icons/horizontal-dots.svg
src/icons/index.ts
src/icons/info-error.svg
src/icons/info-hexa.svg
src/icons/info.svg
src/icons/list.svg
src/icons/lock.svg
src/icons/mail-line.svg
src/icons/moredot.svg
src/icons/page.svg
src/icons/paper-plane.svg
src/icons/pencil.svg
src/icons/pie-chart.svg
src/icons/plug-in.svg
src/icons/plus.svg
src/icons/shooting-star.svg
src/icons/table.svg
src/icons/task-icon.svg
src/icons/time.svg
src/icons/trash.svg
src/icons/user-circle.svg
src/icons/user-line.svg
src/icons/videos.svg
src/index.css
src/layout/AppHeader.tsx
src/layout/AppLayout.tsx
src/layout/AppSidebar.tsx
src/layout/Backdrop.tsx
src/layout/SidebarWidget.tsx
src/main.tsx
src/mockData/mockCallData.ts
src/pages/AuthPages/AuthPageLayout.tsx
src/pages/AuthPages/SignIn.tsx
src/pages/AuthPages/SignUp.tsx
src/pages/Blank.tsx
src/pages/Calendar.tsx
src/pages/Calls/CallsDashboard.tsx
src/pages/Charts/BarChart.tsx
src/pages/Charts/LineChart.tsx
src/pages/Clients/ClientsPatients.tsx
src/pages/Dashboard/Home.tsx
src/pages/Forms/FormElements.tsx
src/pages/Onboarding/OnboardingDashboard.tsx
src/pages/OtherPage/NotFound.tsx
src/pages/Tables/BasicTables.tsx
src/pages/UiElements/Alerts.tsx
src/pages/UiElements/Avatars.tsx
src/pages/UiElements/Badges.tsx
src/pages/UiElements/Buttons.tsx
src/pages/UiElements/Images.tsx
src/pages/UiElements/Videos.tsx
src/pages/UserProfiles.tsx
src/services/callService.ts
src/services/clientService.ts
src/services/onboardingService.ts
src/svg.d.ts
src/types/callRecord.ts
src/types/client.ts
src/types/onboarding.ts
src/vite-env.d.ts
```

# Files

## File: src/components/onboarding/OnboardingTable.tsx
```typescript
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
```

## File: src/pages/Onboarding/OnboardingDashboard.tsx
```typescript
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
```

## File: src/services/onboardingService.ts
```typescript
import { OnboardingPatient, OnboardingStatus, OnboardingFilters } from '../types/onboarding';

// Mock data array of onboarding patients
const mockOnboardingPatients: OnboardingPatient[] = [
  {
    id: 'onb-001',
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    avatar: '/images/user/user-17.jpg',
    status: OnboardingStatus.InProgress,
    progress: 75,
    startDate: '2025-03-28T10:30:00Z',
    lastActivityDate: '2025-04-04T14:20:00Z',
    estimatedCompletionDate: '2025-04-12T00:00:00Z',
    assignedTo: 'Dr. Sarah Chen',
    notes: 'Responsive to emails. Completing onboarding forms on schedule.',
    tags: ['Priority', 'New Patient']
  },
  {
    id: 'onb-002',
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
    avatar: '/images/user/user-18.jpg',
    status: OnboardingStatus.InProgress,
    progress: 30,
    startDate: '2025-04-01T14:15:00Z',
    lastActivityDate: '2025-04-04T11:30:00Z',
    estimatedCompletionDate: '2025-04-18T00:00:00Z',
    assignedTo: 'Dr. Michael Rodriguez',
    notes: 'Some delays in completing insurance verification forms.',
    tags: ['Insurance Pending']
  },
  {
    id: 'onb-003',
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    avatar: '/images/user/user-19.jpg',
    status: OnboardingStatus.Stalled,
    progress: 15,
    startDate: '2025-03-22T11:45:00Z',
    lastActivityDate: '2025-03-25T09:10:00Z',
    assignedTo: 'Dr. James Williams',
    notes: 'Not responding to follow-up emails. Needs phone call.',
    tags: ['Follow-up Required']
  },
  {
    id: 'onb-004',
    name: 'Noah Davis',
    email: 'noah.davis@example.com',
    status: OnboardingStatus.Completed,
    progress: 100,
    startDate: '2025-03-15T08:20:00Z',
    lastActivityDate: '2025-03-30T16:30:00Z',
    estimatedCompletionDate: '2025-04-01T00:00:00Z',
    assignedTo: 'Dr. Emily Johnson',
    notes: 'Completed all steps ahead of schedule. Ready for first appointment.',
    tags: ['Ready for Intake']
  },
  {
    id: 'onb-005',
    name: 'Sophia Miller',
    email: 'sophia.miller@example.com',
    avatar: '/images/user/user-20.jpg',
    status: OnboardingStatus.InProgress,
    progress: 50,
    startDate: '2025-03-25T13:10:00Z',
    lastActivityDate: '2025-04-03T10:45:00Z',
    estimatedCompletionDate: '2025-04-15T00:00:00Z',
    assignedTo: 'Dr. Sarah Chen',
    notes: 'Making steady progress. Several forms still pending completion.',
    tags: ['Needs Insurance Verification']
  },
  {
    id: 'onb-006',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    status: OnboardingStatus.InProgress,
    progress: 85,
    startDate: '2025-03-20T09:45:00Z',
    lastActivityDate: '2025-04-05T08:30:00Z',
    estimatedCompletionDate: '2025-04-10T00:00:00Z',
    assignedTo: 'Dr. Michael Rodriguez',
    notes: 'Nearly complete with onboarding process. Final review pending.',
    tags: ['Priority']
  },
  {
    id: 'onb-007',
    name: 'Charlotte Anderson',
    email: 'charlotte.anderson@example.com',
    avatar: '/images/user/user-21.jpg',
    status: OnboardingStatus.Abandoned,
    progress: 20,
    startDate: '2025-03-10T10:30:00Z',
    lastActivityDate: '2025-03-15T14:20:00Z',
    assignedTo: 'Dr. James Williams',
    notes: 'Multiple attempts to contact with no response. Marked as abandoned after 20 days.',
    tags: ['Inactive']
  },
  {
    id: 'onb-008',
    name: 'Mason Thompson',
    email: 'mason.thompson@example.com',
    status: OnboardingStatus.Completed,
    progress: 100,
    startDate: '2025-03-18T11:15:00Z',
    lastActivityDate: '2025-04-02T15:45:00Z',
    estimatedCompletionDate: '2025-04-05T00:00:00Z',
    assignedTo: 'Dr. Emily Johnson',
    notes: 'All onboarding steps completed and verified. First appointment scheduled.',
    tags: ['Appointment Scheduled']
  },
  {
    id: 'onb-009',
    name: 'Ava Martin',
    email: 'ava.martin@example.com',
    avatar: '/images/user/user-22.jpg',
    status: OnboardingStatus.InProgress,
    progress: 60,
    startDate: '2025-03-27T13:30:00Z',
    lastActivityDate: '2025-04-04T12:15:00Z',
    estimatedCompletionDate: '2025-04-14T00:00:00Z',
    assignedTo: 'Dr. Sarah Chen',
    notes: 'Good progress so far. Insurance verification in process.',
    tags: ['New Patient']
  },
  {
    id: 'onb-010',
    name: 'William Robinson',
    email: 'william.robinson@example.com',
    status: OnboardingStatus.Stalled,
    progress: 40,
    startDate: '2025-03-20T09:30:00Z',
    lastActivityDate: '2025-03-28T11:20:00Z',
    estimatedCompletionDate: '2025-04-20T00:00:00Z',
    assignedTo: 'Dr. Michael Rodriguez',
    notes: 'Stalled at insurance verification step. Needs assistance.',
    tags: ['Insurance Issue']
  },
  {
    id: 'onb-011',
    name: 'Harper Lee',
    email: 'harper.lee@example.com',
    avatar: '/images/user/user-23.jpg',
    status: OnboardingStatus.InProgress,
    progress: 25,
    startDate: '2025-04-02T11:00:00Z',
    lastActivityDate: '2025-04-05T09:45:00Z',
    estimatedCompletionDate: '2025-04-22T00:00:00Z',
    assignedTo: 'Dr. James Williams',
    notes: 'Just started onboarding process. Very responsive to requests.',
    tags: ['New Patient']
  },
  {
    id: 'onb-012',
    name: 'Elijah Garcia',
    email: 'elijah.garcia@example.com',
    status: OnboardingStatus.InProgress,
    progress: 10,
    startDate: '2025-04-04T14:30:00Z',
    lastActivityDate: '2025-04-05T10:15:00Z',
    estimatedCompletionDate: '2025-04-25T00:00:00Z',
    assignedTo: 'Dr. Emily Johnson',
    notes: 'Recently initiated onboarding. First set of forms sent.',
    tags: ['New Patient']
  },
  {
    id: 'onb-013',
    name: 'Mia Lewis',
    email: 'mia.lewis@example.com',
    avatar: '/images/user/user-24.jpg',
    status: OnboardingStatus.InProgress,
    progress: 70,
    startDate: '2025-03-23T13:15:00Z',
    lastActivityDate: '2025-04-03T16:30:00Z',
    estimatedCompletionDate: '2025-04-12T00:00:00Z',
    assignedTo: 'Dr. Sarah Chen',
    notes: 'Making excellent progress. Only final documentation remaining.',
    tags: ['Priority']
  },
  {
    id: 'onb-014',
    name: 'Benjamin Clark',
    email: 'benjamin.clark@example.com',
    status: OnboardingStatus.Completed,
    progress: 100,
    startDate: '2025-03-15T10:45:00Z',
    lastActivityDate: '2025-03-29T11:30:00Z',
    estimatedCompletionDate: '2025-04-01T00:00:00Z',
    assignedTo: 'Dr. Michael Rodriguez',
    notes: 'Completed all onboarding steps. Ready for initial assessment.',
    tags: ['Ready for Intake']
  },
  {
    id: 'onb-015',
    name: 'Evelyn Rodriguez',
    email: 'evelyn.rodriguez@example.com',
    avatar: '/images/user/user-25.jpg',
    status: OnboardingStatus.Abandoned,
    progress: 5,
    startDate: '2025-03-05T09:00:00Z',
    lastActivityDate: '2025-03-06T14:20:00Z',
    assignedTo: 'Dr. James Williams',
    notes: 'Only completed initial registration form before abandoning process.',
    tags: ['Inactive']
  },
  {
    id: 'onb-016',
    name: 'Daniel Martinez',
    email: 'daniel.martinez@example.com',
    status: OnboardingStatus.InProgress,
    progress: 45,
    startDate: '2025-03-29T15:30:00Z',
    lastActivityDate: '2025-04-04T13:15:00Z',
    estimatedCompletionDate: '2025-04-18T00:00:00Z',
    assignedTo: 'Dr. Emily Johnson',
    notes: 'Working through medical history forms. Responsive to emails.',
    tags: ['Medical History Pending']
  },
  {
    id: 'onb-017',
    name: 'Scarlett White',
    email: 'scarlett.white@example.com',
    avatar: '/images/user/user-26.jpg',
    status: OnboardingStatus.InProgress,
    progress: 90,
    startDate: '2025-03-18T11:30:00Z',
    lastActivityDate: '2025-04-05T10:45:00Z',
    estimatedCompletionDate: '2025-04-08T00:00:00Z',
    assignedTo: 'Dr. Sarah Chen',
    notes: 'Final review stage. All forms submitted and being processed.',
    tags: ['Priority', 'Almost Complete']
  },
  {
    id: 'onb-018',
    name: 'Henry Jackson',
    email: 'henry.jackson@example.com',
    status: OnboardingStatus.Stalled,
    progress: 55,
    startDate: '2025-03-25T09:15:00Z',
    lastActivityDate: '2025-03-30T11:30:00Z',
    estimatedCompletionDate: '2025-04-20T00:00:00Z',
    assignedTo: 'Dr. Michael Rodriguez',
    notes: 'Stalled during insurance verification. Waiting for additional documentation.',
    tags: ['Insurance Issue']
  }
];

// Onboarding service with simulated API functions
const onboardingService = {
  // Get all onboarding patients with optional filtering
  getOnboardingPatients(filters?: OnboardingFilters): Promise<OnboardingPatient[]> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (500-1500ms)
      const delay = Math.floor(Math.random() * 1000) + 500;
      
      // Simulate random error (10% of requests)
      const shouldError = Math.random() < 0.1;
      
      setTimeout(() => {
        if (shouldError) {
          reject(new Error('Failed to fetch onboarding patients. Please try again.'));
          return;
        }
        
        let filteredPatients = [...mockOnboardingPatients];
        
        // Apply filters if provided
        if (filters) {
          // Filter by search term (name or email)
          if (filters.searchTerm) {
            const lowercasedTerm = filters.searchTerm.toLowerCase();
            filteredPatients = filteredPatients.filter(
              (patient) =>
                patient.name.toLowerCase().includes(lowercasedTerm) ||
                patient.email.toLowerCase().includes(lowercasedTerm)
            );
          }
          
          // Filter by status
          if (filters.statusFilter) {
            filteredPatients = filteredPatients.filter(
              (patient) => patient.status === filters.statusFilter
            );
          }
          
          // Sort by progress (highest first)
          filteredPatients.sort((a, b) => b.progress - a.progress);
        }
        
        // Default sort by lastActivityDate (most recent first) when no filters
        else {
          filteredPatients.sort((a, b) => 
            new Date(b.lastActivityDate).getTime() - new Date(a.lastActivityDate).getTime()
          );
        }
        
        resolve(filteredPatients);
      }, delay);
    });
  },
  
  // Get a specific onboarding patient by ID
  getOnboardingPatientById(id: string): Promise<OnboardingPatient | undefined> {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 500) + 300;
      
      setTimeout(() => {
        const patient = mockOnboardingPatients.find((p) => p.id === id);
        resolve(patient);
      }, delay);
    });
  },
  
  // Add a new onboarding patient (in a real app, this would send a POST request)
  addOnboardingPatient(patient: Omit<OnboardingPatient, 'id'>): Promise<OnboardingPatient> {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 500) + 700;
      
      setTimeout(() => {
        const newPatient = {
          ...patient,
          id: Math.random().toString(36).substring(2, 9), // Generate a random ID
          lastActivityDate: new Date().toISOString(),
        };
        // In a real app, this would make a POST request and update the database
        resolve(newPatient as OnboardingPatient);
      }, delay);
    });
  },
  
  // Update an onboarding patient (in a real app, this would send a PUT request)
  updateOnboardingPatient(id: string, updates: Partial<OnboardingPatient>): Promise<OnboardingPatient | undefined> {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 500) + 700;
      
      setTimeout(() => {
        const patientIndex = mockOnboardingPatients.findIndex((p) => p.id === id);
        if (patientIndex !== -1) {
          const updatedPatient = {
            ...mockOnboardingPatients[patientIndex],
            ...updates,
            lastActivityDate: new Date().toISOString(),
          };
          // In a real app, this would make a PUT request and update the database
          resolve(updatedPatient);
        } else {
          resolve(undefined);
        }
      }, delay);
    });
  },
  
  // Send a reminder to a patient (would be an actual email in production)
  sendReminder(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 500) + 500;
      
      setTimeout(() => {
        const patientIndex = mockOnboardingPatients.findIndex((p) => p.id === id);
        if (patientIndex !== -1) {
          // In a real app, this would trigger an email send via API
          console.log(`Reminder sent to ${mockOnboardingPatients[patientIndex].email}`);
          resolve(true);
        } else {
          reject(new Error('Patient not found'));
        }
      }, delay);
    });
  },
};

// Export functions individually for named imports
export const {
  getOnboardingPatients,
  getOnboardingPatientById,
  addOnboardingPatient,
  updateOnboardingPatient,
  sendReminder,
} = onboardingService;

// Export the entire service as default for backward compatibility
export default onboardingService;
```

## File: src/types/onboarding.ts
```typescript
// Define onboarding status options
export enum OnboardingStatus {
  InProgress = 'In Progress',
  Completed = 'Completed',
  Stalled = 'Stalled',
  Abandoned = 'Abandoned'
}

// Main interface for onboarding patient data
export interface OnboardingPatient {
  id: string;
  name: string;
  email: string;
  avatar?: string; // Optional avatar image URL
  status: OnboardingStatus;
  progress: number; // Percentage from 0-100
  startDate: string; // ISO date string when onboarding started
  lastActivityDate: string; // ISO date string of last patient activity
  estimatedCompletionDate?: string; // Optional estimated completion date
  assignedTo?: string; // Optional staff member assigned to patient
  notes?: string; // Optional notes about the onboarding process
  tags?: string[]; // Optional tags for categorization
}

// Interface for filtering onboarding patients
export interface OnboardingFilters {
  searchTerm?: string;
  statusFilter?: OnboardingStatus | null;
  dateRange?: {
    startDate: string;
    endDate: string;
  };
  progressRange?: {
    min: number;
    max: number;
  };
}
```

## File: src/components/auth/SignInForm.tsx
```typescript
import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="21"
                  className="fill-current"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
                </svg>
                Sign in with X
              </button>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                  Or
                </span>
              </div>
            </div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="info@gmail.com" />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/calls/CallDetailsModal.tsx
```typescript
import { useEffect, useState } from 'react';
import { Modal } from '../ui/modal';
import Button from '../ui/button/Button';
import Badge from '../ui/badge/Badge';
import SentimentIndicator from './SentimentIndicator';
import { CallRecord, CallStatus } from '../../types/callRecord';
import callService from '../../services/callService';
import { TimeIcon, EyeIcon, EyeCloseIcon } from '../../icons';

interface CallDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  callId: string;
}

export const CallDetailsModal: React.FC<CallDetailsModalProps> = ({
  isOpen,
  onClose,
  callId,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [callDetails, setCallDetails] = useState<CallRecord | null>(null);
  const [notes, setNotes] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Fetch call details when modal opens
  useEffect(() => {
    if (isOpen && callId) {
      fetchCallDetails();
    } else {
      // Reset state when modal closes
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen, callId]);

  // Simulate audio playback progress
  useEffect(() => {
    let interval: number;
    
    if (isPlaying && callDetails && currentTime < duration) {
      interval = window.setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isPlaying, currentTime, duration, callDetails]);

  const fetchCallDetails = async () => {
    try {
      setLoading(true);
      const { callRecord, notes } = await callService.getCallDetails(callId);
      
      if (callRecord) {
        setCallDetails(callRecord);
        setNotes(notes);
        // Set duration from call record for the audio player
        setDuration(callRecord.duration);
      } else {
        setError('Call details not found');
      }
    } catch (err) {
      setError('Failed to load call details');
      console.error('Error fetching call details:', err);
    } finally {
      setLoading(false);
    }
  };

  // Format date string to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format seconds to MM:SS format
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get status badge color based on call status
  const getStatusBadgeColor = (status: CallStatus): 'primary' | 'success' | 'error' | 'warning' | 'info' => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Scheduled':
        return 'primary';
      case 'In Progress':
        return 'info';
      case 'Failed':
        return 'error';
      case 'Canceled':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="max-w-2xl p-6 mx-auto"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Call Details
        </h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-brand-500 animate-spin dark:border-gray-700 dark:border-t-brand-400"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading call details...</p>
          </div>
        ) : error ? (
          <div className="py-8 text-center">
            <div className="text-error-500 dark:text-error-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{error}</h3>
            <div className="mt-4">
              <Button onClick={fetchCallDetails}>Try Again</Button>
            </div>
          </div>
        ) : callDetails ? (
          <>
            {/* Call Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{callDetails.clientName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Call Type</h3>
                  <p className="text-base text-gray-800 dark:text-gray-200">{callDetails.callType}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time</h3>
                  <p className="text-base text-gray-800 dark:text-gray-200">{formatDate(callDetails.dateTime)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h3>
                  <p className="text-base text-gray-800 dark:text-gray-200">{formatTime(callDetails.duration)}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h3>
                  <div className="mt-1">
                    <Badge color={getStatusBadgeColor(callDetails.status as CallStatus)}>
                      {callDetails.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Sentiment Analysis</h3>
                  <div className="mt-2">
                    <SentimentIndicator 
                      score={callDetails.sentimentScore} 
                      category={callDetails.sentimentCategory} 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Call Recording</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={togglePlayPause}
                    className="h-10 w-10 p-1 flex items-center justify-center"
                  >
                    {isPlaying ? 
                      <EyeCloseIcon className="w-5 h-5" /> : 
                      <EyeIcon className="w-5 h-5" />
                    }
                  </Button>
                  
                  <div className="flex-1 mx-4">
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <TimeIcon className="w-3.5 h-3.5 mr-1" />
                          <span>{formatTime(currentTime)}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {formatTime(duration)}
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-gray-300 dark:bg-gray-700">
                        <div 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-500 dark:bg-brand-600 transition-all duration-300"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  File: {callDetails.recordingUrl || 'recording_' + callDetails.id + '.mp3'}
                </div>
              </div>
            </div>

            {/* Call Notes */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Call Notes</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 whitespace-pre-line text-gray-800 dark:text-gray-200">
                {notes || 'No notes available for this call.'}
              </div>
            </div>
          </>
        ) : (
          <div className="py-8 text-center text-gray-500 dark:text-gray-400">
            No call details found.
          </div>
        )}

        <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button 
            variant="outline" 
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CallDetailsModal;
```

## File: src/components/calls/CallsMetrics.tsx
```typescript
import { ChatIcon, CheckCircleIcon, CalenderIcon } from "../../icons";

interface CallsMetricsProps {
  loading: boolean;
  totalCalls: number;
  completedToday: number;
  scheduledCalls: number;
}

export default function CallsMetrics({ 
  loading, 
  totalCalls, 
  completedToday, 
  scheduledCalls 
}: CallsMetricsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {/* Total Calls Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <ChatIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Calls
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                totalCalls.toLocaleString()
              )}
            </h4>
          </div>
        </div>
      </div>

      {/* Completed Today Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <CheckCircleIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Completed Today
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                completedToday.toLocaleString()
              )}
            </h4>
          </div>
        </div>
      </div>

      {/* Scheduled Calls Metric */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <CalenderIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Scheduled Calls
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {loading ? (
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
              ) : (
                scheduledCalls.toLocaleString()
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/calls/CallsTable.tsx
```typescript
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';
import { CallRecord, CallStatus } from '../../types/callRecord';
import callService from '../../services/callService';
import Badge from '../ui/badge/Badge';
import Button from '../ui/button/Button';
import Avatar from '../ui/avatar/Avatar';
import SentimentIndicator from './SentimentIndicator';
import CallDetailsModal from './CallDetailsModal';
import { EyeIcon, ChevronUpIcon } from '../../icons';
import Alert from '../ui/alert/Alert';

interface CallsTableProps {
  searchQuery: string;
  statusFilter?: string;
  typeFilter?: string;
  onViewDetails?: (callId: string) => void;
}

const CallsTable: React.FC<CallsTableProps> = ({ 
  searchQuery, 
  statusFilter,
  typeFilter,
  onViewDetails,
}) => {
  const [calls, setCalls] = useState<CallRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCallId, setSelectedCallId] = useState<string>('');

  // Fetch calls when search query or filters change
  useEffect(() => {
    fetchCalls();
  }, [searchQuery, statusFilter, typeFilter]);

  // Fetch calls from API
  const fetchCalls = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get calls with filters
      const data = await callService.getCalls({
        searchTerm: searchQuery,
        status: statusFilter,
        callType: typeFilter
      });
      
      setCalls(data);
    } catch (err) {
      console.error('Error fetching calls:', err);
      setError('Failed to load calls. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Toggle row expansion for mobile view
  const toggleRowExpansion = (callId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [callId]: !prev[callId]
    }));
  };

  // Handle view details button click
  const handleViewDetails = (callId: string) => {
    setSelectedCallId(callId);
    setIsModalOpen(true);
    
    // If parent component has provided a handler, call it too
    if (onViewDetails) {
      onViewDetails(callId);
    }
  };

  // Format date string to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format duration from seconds to MM:SS
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Get status badge color
  const getStatusColor = (status: CallStatus): 'primary' | 'success' | 'error' | 'warning' | 'info' => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Scheduled':
        return 'primary';
      case 'In Progress':
        return 'info';
      case 'Failed':
        return 'error';
      case 'Canceled':
        return 'warning';
      default:
        return 'primary';
    }
  };

  // Render error state
  if (error) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <Alert 
          variant="error"
          title="Error Loading Calls"
          message={error}
          showLink={false}
        />
        <div className="flex justify-center mt-4">
          <Button onClick={fetchCalls} className="flex items-center">
            <ChevronUpIcon className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    // Skeleton loader for table
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Mobile Skeleton Loader */}
        <div className="md:hidden p-4 space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  {/* Client skeleton */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  <div className="flex-1">
                    {/* Client name skeleton */}
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    {/* Call type skeleton */}
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  {/* Status skeleton */}
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  {/* Date skeleton */}
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  {/* Duration skeleton */}
                  <div className="h-3 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
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
                    {/* Client Column */}
                    <div className="w-1/4 pr-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                        <div>
                          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Column */}
                    <div className="w-1/5">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Date Column */}
                    <div className="w-1/5">
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Duration Column */}
                    <div className="w-1/5">
                      <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Actions Column */}
                    <div className="w-1/5 flex justify-end">
                      <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
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

  // If no calls and not loading, show empty state
  if (calls.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5 text-center dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="py-8">
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No calls found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {searchQuery || statusFilter || typeFilter ? 
              'Try adjusting your search or filters to find what you\'re looking for.' : 
              'No calls have been made or scheduled yet.'}
          </p>
          {(searchQuery || statusFilter || typeFilter) && (
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: render the populated table
  return (
    <>
      {/* Call Details Modal */}
      <CallDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        callId={selectedCallId} 
      />
      
      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-white/[0.03]">
        {calls.map((call) => (
          <div 
            key={call.id} 
            className="cursor-pointer p-4"
            onClick={() => toggleRowExpansion(call.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar src={`/avatar-placeholder.png`} alt={call.clientName} size="small" />
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    {call.clientName}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {call.callType}
                  </p>
                </div>
              </div>
              <Badge color={getStatusColor(call.status as CallStatus)}>
                {call.status}
              </Badge>
            </div>
            
            {/* Expandable area */}
            <div className={`mt-2 ${expandedRows[call.id] ? 'block' : 'hidden'}`}>
              <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Date:</span>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {formatDate(call.dateTime)}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {formatDuration(call.duration)}
                    </p>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Sentiment:</span>
                    <div className="mt-1">
                      <SentimentIndicator 
                        score={call.sentimentScore} 
                        category={call.sentimentCategory}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={(e?: React.MouseEvent<Element, MouseEvent>) => {
                      if (e) e.stopPropagation(); // Prevent row toggle if event exists
                      handleViewDetails(call.id);
                    }}
                    className="w-full"
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <tr>
                <TableCell className="py-6 px-6 text-left font-bold">
                  Client
                </TableCell>
                <TableCell className="py-6 px-6 text-left font-bold">
                  Status
                </TableCell>
                <TableCell className="py-6 px-6 text-left font-bold">
                  Date & Time
                </TableCell>
                <TableCell className="py-6 px-6 text-left font-bold">
                  Duration
                </TableCell>
                <TableCell className="py-6 px-6 text-left font-bold">
                  Sentiment
                </TableCell>
                <TableCell className="py-6 px-6 text-right font-bold">
                  Actions
                </TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {calls.map((call) => (
                <TableRow key={call.id}>
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar src={`/avatar-placeholder.png`} alt={call.clientName} size="small" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {call.clientName}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {call.callType}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Badge color={getStatusColor(call.status as CallStatus)}>
                      {call.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    {formatDate(call.dateTime)}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    {formatDuration(call.duration)}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <SentimentIndicator 
                      score={call.sentimentScore} 
                      category={call.sentimentCategory}
                    />
                  </TableCell>
                  <TableCell className="py-4 px-6 text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails(call.id)}
                    >
                      <EyeIcon className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CallsTable;
```

## File: src/components/calls/InitiateCallModal.tsx
```typescript
import { useState, useEffect } from 'react';
import { Modal } from '../ui/modal';
import Button from '../ui/button/Button';
import Select from '../form/Select';
import Label from '../form/Label';
import callService from '../../services/callService';
import { getAllClients } from '../../services/clientService';
import { Client } from '../../types/client';
import { PlusIcon } from '../../icons';

interface InitiateCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCallInitiated?: () => void;
}

const InitiateCallModal: React.FC<InitiateCallModalProps> = ({
  isOpen,
  onClose,
  onCallInitiated
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [clients, setClients] = useState<Client[]>([]);
  const [loadingClients, setLoadingClients] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    clientId: '',
    callType: ''
  });

  // Form validation
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Fetch clients when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchClients();
    }
  }, [isOpen]);

  // Fetch clients for dropdown
  const fetchClients = async () => {
    try {
      setLoadingClients(true);
      const clientsData = await getAllClients();
      setClients(clientsData);
    } catch (err) {
      console.error('Error fetching clients:', err);
    } finally {
      setLoadingClients(false);
    }
  };

  // Handle form field changes
  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear success/error messages when form is edited
    if (successMessage || errorMessage) {
      setSuccessMessage('');
      setErrorMessage('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {[key: string]: string} = {};
    if (!formData.clientId) newErrors.clientId = 'Please select a client';
    if (!formData.callType) newErrors.callType = 'Please select a call type';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      setSuccessMessage('');
      
      const result = await callService.initiateAICall(
        formData.clientId,
        formData.callType
      );
      
      if (result.success) {
        setSuccessMessage(result.message);
        // Reset form
        setFormData({
          clientId: '',
          callType: ''
        });
        
        // Close modal after short delay to show success message
        setTimeout(() => {
          if (onCallInitiated) onCallInitiated();
          onClose();
        }, 2000);
      } else {
        setErrorMessage(result.message || 'Failed to initiate call');
      }
    } catch (err) {
      setErrorMessage('An error occurred while initiating the call');
      console.error('Error initiating call:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Call type options
  const callTypeOptions = [
    { value: '', label: 'Select Call Type' },
    { value: 'Intake', label: 'Intake' },
    { value: 'Eligibility & Benefits', label: 'Eligibility & Benefits' },
    { value: 'Reminder', label: 'Reminder' },
    { value: 'Follow-up', label: 'Follow-up' },
  ];

  // Determine client dropdown class based on error state
  const clientSelectClass = errors.clientId ? 'border-error-500 dark:border-error-500' : '';
  const callTypeSelectClass = errors.callType ? 'border-error-500 dark:border-error-500' : '';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-lg p-6 mx-auto"
    >
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Initiate AI Call
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Start an automated AI call with a client
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Client Selection */}
          <div>
            <Label htmlFor="client-select">Client</Label>
            <Select
              options={[
                { value: '', label: loadingClients ? 'Loading clients...' : 'Select Client' },
                ...clients.map(client => ({
                  value: client.id,
                  label: client.name
                }))
              ]}
              placeholder={loadingClients ? 'Loading clients...' : 'Select a client'}
              onChange={(value) => handleChange('clientId', value)}
              className={clientSelectClass}
            />
            {errors.clientId && (
              <p className="mt-1 text-sm text-error-500 dark:text-error-400">{errors.clientId}</p>
            )}
          </div>

          {/* Call Type Selection */}
          <div>
            <Label htmlFor="call-type-select">Call Type</Label>
            <Select
              options={callTypeOptions}
              placeholder="Select Call Type"
              onChange={(value) => handleChange('callType', value)}
              className={callTypeSelectClass}
            />
            {errors.callType && (
              <p className="mt-1 text-sm text-error-500 dark:text-error-400">{errors.callType}</p>
            )}
          </div>

          {/* Success/Error Messages */}
          {successMessage && (
            <div className="p-3 rounded-md bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-400">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="p-3 rounded-md bg-error-50 text-error-700 dark:bg-error-900/20 dark:text-error-400">
              {errorMessage}
            </div>
          )}

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              onClick={onClose}
              className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Cancel
            </Button>
            <Button 
              onClick={isSubmitting ? undefined : () => handleSubmit(new Event('submit') as unknown as React.FormEvent)}
              className={`flex items-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Initiating...
                </>
              ) : (
                <>
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Initiate Call
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default InitiateCallModal;
```

## File: src/components/calls/SentimentIndicator.tsx
```typescript
interface SentimentIndicatorProps {
  score: number; // Score from 0 to 1
  category: 'Positive' | 'Neutral' | 'Negative';
}

const SentimentIndicator: React.FC<SentimentIndicatorProps> = ({ score, category }) => {
  // Determine color based on sentiment category
  const getColor = () => {
    switch (category) {
      case 'Positive':
        return 'bg-success-500 dark:bg-success-600';
      case 'Neutral':
        return 'bg-gray-400 dark:bg-gray-500';
      case 'Negative':
        return 'bg-error-500 dark:bg-error-600';
      default:
        return 'bg-gray-400 dark:bg-gray-500';
    }
  };

  // Determine width based on score (0-1)
  const getWidth = () => {
    // Convert score to percentage (0-100)
    const percentage = Math.round(score * 100);
    return `${percentage}%`;
  };

  return (
    <div className="flex flex-col">
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
        {category} ({Math.round(score * 100)}%)
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${getColor()}`} 
          style={{ width: getWidth() }}
        ></div>
      </div>
    </div>
  );
};

export default SentimentIndicator;
```

## File: src/components/clients/AddClientModal.tsx
```typescript
import { useState } from 'react';
import { Modal } from '../ui/modal';
import Button from '../ui/button/Button';
import Input from '../form/input/InputField';
import Label from '../form/Label';
import { Client, ClientStatus, InsuranceStatus, ProviderType, PatientType } from '../../types/client';
import { addClient } from '../../services/clientService';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClientAdded: () => void;
}

export const AddClientModal: React.FC<AddClientModalProps> = ({
  isOpen,
  onClose,
  onClientAdded
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'Active',
    insuranceStatus: 'Pending',
    insuranceVerificationDate: '',
    providerType: 'Family Support',
    patientType: 'Client',
    specialtyFocus: '',
    notes: ''
  });

  // Form validation
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      
      const newClient: Partial<Client> = {
        name: formData.name,
        email: formData.email,
        avatar: undefined,
        status: formData.status as ClientStatus,
        completion: 0,
        timeline: {
          days: 30,
          averageDays: 45
        },
        insurance: {
          status: formData.insuranceStatus as InsuranceStatus,
          verificationDate: formData.insuranceVerificationDate || undefined
        },
        provider: {
          type: formData.providerType as ProviderType,
          patientType: formData.patientType as PatientType,
          specialtyFocus: formData.specialtyFocus || undefined
        },
        lastUpdated: new Date().toISOString(),
        tags: []
      };
      
      await addClient(newClient);
      
      setSuccessMessage('Client added successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        status: 'Active',
        insuranceStatus: 'Pending',
        insuranceVerificationDate: '',
        providerType: 'Family Support',
        patientType: 'Client',
        specialtyFocus: '',
        notes: ''
      });
      
      // Notify parent component
      setTimeout(() => {
        onClientAdded();
      }, 1500);
      
    } catch (error) {
      console.error('Error adding client:', error);
      setErrorMessage('Failed to add client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const closeModal = () => {
    // Reset form state
    setFormData({
      name: '',
      email: '',
      phone: '',
      status: 'Active',
      insuranceStatus: 'Pending',
      insuranceVerificationDate: '',
      providerType: 'Family Support',
      patientType: 'Client',
      specialtyFocus: '',
      notes: ''
    });
    setErrors({});
    setSuccessMessage('');
    setErrorMessage('');
    
    // Close modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-8">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Add New Client
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Enter client details to add them to your client list.
          </p>
        </div>
        
        {successMessage && (
          <div className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/30 dark:text-green-200">
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{successMessage}</span>
            </div>
          </div>
        )}
        
        {errorMessage && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-200">
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="custom-scrollbar max-h-[450px] overflow-y-auto px-2 pb-3">
            <div className="mb-6">
              <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                Client Information
              </h5>
              
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-600"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                Insurance Details
              </h5>
              
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="insuranceStatus">Insurance Status</Label>
                  <select
                    id="insuranceStatus"
                    name="insuranceStatus"
                    value={formData.insuranceStatus}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-600"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Verified">Verified</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                
                <div className="col-span-2 lg:col-span-1">
                  <Label htmlFor="insuranceVerificationDate">Insurance Verification Date</Label>
                  <Input 
                    id="insuranceVerificationDate"
                    name="insuranceVerificationDate"
                    type="date"
                    value={formData.insuranceVerificationDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                Care Details
              </h5>
              
              <div className="grid grid-cols-1 gap-x-6 gap-y-4">
                <div>
                  <Label htmlFor="providerType">Provider Type</Label>
                  <select
                    id="providerType"
                    name="providerType"
                    value={formData.providerType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-600"
                  >
                    <option value="Family Support">Family Support</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Medical">Medical</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="patientType">Patient Type</Label>
                  <select
                    id="patientType"
                    name="patientType"
                    value={formData.patientType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-600"
                  >
                    <option value="Client">Client</option>
                    <option value="Patient">Patient</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="specialtyFocus">Specialty Focus</Label>
                  <Input 
                    id="specialtyFocus"
                    name="specialtyFocus"
                    type="text"
                    value={formData.specialtyFocus}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:focus:border-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-2 mt-5 lg:justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={closeModal} 
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add Client'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
```

## File: src/components/clients/ClientsTable.tsx
```typescript
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Client } from '../../types/client';
import clientService from '../../services/clientService';
import Badge from '../ui/badge/Badge';
import Button from '../ui/button/Button';

interface ClientsTableProps {
  searchQuery: string;
  clients?: Client[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  onAddClient?: () => void;
}

const ClientsTable: React.FC<ClientsTableProps> = ({ 
  searchQuery, 
  clients: propClients, 
  loading: propLoading, 
  error: propError,
  onRetry,
  onAddClient
 }) => {
  const [clients, setClients] = useState<Client[]>(propClients || []);
  const [loading, setLoading] = useState(propLoading !== undefined ? propLoading : true);
  const [error, setError] = useState<string | null>(propError || null);
  const [sortField, setSortField] = useState<keyof Client | string | null>(null);
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
  const toggleRowExpansion = (clientId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [clientId]: !prev[clientId]
    }));
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await clientService.getClients(searchQuery);
        setClients(data);
        setError(null);
      } catch (err) {
        setError('Failed to load clients data');
        console.error('Error fetching clients:', err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search to prevent too many rapid requests
    const timer = setTimeout(() => {
      fetchClients();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Sort clients when sortField changes
  useEffect(() => {
    if (sortField) {
      const sortedClients = [...clients].sort((a: any, b: any) => {
        // Handle nested fields (e.g., timeline.days)
        const fieldA = sortField.toString().includes('.') 
          ? sortField.toString().split('.').reduce((obj, key) => obj[key], a)
          : a[sortField as keyof Client];
        const fieldB = sortField.toString().includes('.')
          ? sortField.toString().split('.').reduce((obj, key) => obj[key], b)
          : b[sortField as keyof Client];

        if (fieldA < fieldB) return sortDirection === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      setClients(sortedClients);
    }
  }, [sortField, sortDirection, clients]);

  // Handle sorting
  const handleSort = (field: keyof Client | string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  if (loading) {
    // Skeleton loader for table
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Mobile Skeleton Loader */}
        <div className="md:hidden p-4 space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  {/* Avatar skeleton */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  <div className="flex-1">
                    {/* Name skeleton */}
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    {/* Email skeleton */}
                    <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  {/* Status skeleton */}
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
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
                  {[...Array(7)].map((_, index) => (
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
                    
                    {/* Completion Column */}
                    <div className="w-1/6">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Timeline Column */}
                    <div className="w-1/6">
                      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Insurance Column */}
                    <div className="w-1/6">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-1"></div>
                      <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Provider Column */}
                    <div className="w-1/6">
                      <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Actions Column */}
                    <div className="w-1/6">
                      <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
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

  if (error) {
    return (
      <div className="p-5 text-center text-red-500">
        <p>{error}</p>
        <button 
          className="mt-3 px-4 py-2 text-sm bg-brand-500 text-white rounded-lg hover:bg-brand-600"
          onClick={onRetry}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center bg-white dark:bg-gray-800/30 rounded-lg border border-gray-100 dark:border-white/[0.05] shadow-sm">
        <div className="w-full max-w-[300px] mb-4">
          {/* Empty state illustration */}
          <img 
            src="/images/illustration/empty-search.svg" 
            alt="No clients found" 
            className="w-full h-auto dark:hidden"
          />
          <img 
            src="/images/illustration/empty-search-dark.svg" 
            alt="No clients found" 
            className="w-full h-auto hidden dark:block"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-2">
          No Clients Found
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
          {searchQuery ? 
            `We couldn't find any clients matching "${searchQuery}". Try adjusting your search criteria.` : 
            "You don't have any clients yet. Add your first client to get started."}
        </p>
        
        <div className="flex gap-3">
          {searchQuery && (
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to All Clients
            </button>
          )}
          
          <button 
            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 dark:hover:bg-brand-400"
            onClick={onAddClient}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mr-2"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
            Add New Client
          </button>
        </div>
      </div>
    );
  }

  // Helper function to render status badge
  const renderStatusBadge = (status: Client['status']) => {
    let color: 'success' | 'warning' | 'error' | 'primary' | 'light' = 'light';
    
    switch (status) {
      case 'Active':
        color = 'success';
        break;
      case 'Pending':
        color = 'warning';
        break;
      case 'At Risk':
        color = 'error';
        break;
      case 'On Hold':
        color = 'light';
        break;
      case 'Completed':
        color = 'primary';
        break;
    }
    
    return <Badge color={color} size="sm">{status}</Badge>;
  };

  // Helper function to render completion progress bar
  const renderCompletionBar = (completion: number) => {
    let barColor = 'bg-blue-400';

    if (completion >= 80) {
      barColor = 'bg-success-500';
    } else if (completion >= 40) {
      barColor = 'bg-brand-500';
    } else if (completion >= 20) {
      barColor = 'bg-warning-500';
    } else {
      barColor = 'bg-error-500';
    }

    return (
      <div className="flex items-center gap-3">
        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
          <div 
            className={`h-2 rounded-full ${barColor}`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{completion}%</span>
      </div>
    );
  };

  // Helper function to render timeline with icon
  const renderTimeline = (days: number, averageDays: number) => {
    const isAboveAverage = days > averageDays;
    const iconColor = isAboveAverage ? 'text-warning-500' : 'text-success-500';
    
    return (
      <div className="flex items-center gap-2">
        <div className={`${iconColor}`}>
          {isAboveAverage ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          )}
        </div>
        <div>
          <span className="font-medium block">{days} days</span>
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <span>Avg: {averageDays} days</span>
            {isAboveAverage && (
              <span className="text-warning-500">({Math.round((days - averageDays) / averageDays * 100)}% above avg)</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper function to render insurance verification
  const renderInsurance = (insurance: Client['insurance']) => {
    return (
      <div>
        <Badge
          size="sm"
          color={
            insurance.status === 'Verified'
              ? 'success'
              : insurance.status === 'Pending'
              ? 'warning'
              : 'error'
          }
        >
          {insurance.status}
        </Badge>
        {insurance.verificationDate && (
          <div className="text-xs mt-1 text-gray-500 dark:text-gray-400">
            {new Date(insurance.verificationDate).toLocaleDateString()}
          </div>
        )}
        {insurance.status === 'Pending' && (
          <Button 
            size="sm" 
            variant="outline"
            className="mt-2 py-1 px-2 text-xs"
            startIcon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a9.001 9.001 0 0112.993 7.257 9.003 9.003 0 01-3.338 8.705 9.002 9.002 0 01-12.465-3.299 9 9 0 013.17-12.29" />
              </svg>
            }
          >
            Verify
          </Button>
        )}
      </div>
    );
  };

  // Helper function to render provider and patient type
  const renderProvider = (provider: Client['provider']) => {
    const patientTypeColors: Record<string, string> = {
      'Patient': 'info',
      'Client': 'primary',
      'Family': 'warning',
      'Group': 'success'
    };
    
    const color = patientTypeColors[provider.patientType] || 'light';
    
    return (
      <div>
        <span className="block font-medium mb-1">{provider.type}</span>
        <div className="flex gap-2 flex-wrap">
          <Badge
            size="sm"
            variant="light"
            color={color as any}
          >
            {provider.patientType}
          </Badge>
          {provider.specialtyFocus && (
            <Badge size="sm" variant="light" color="light">
              {provider.specialtyFocus}
            </Badge>
          )}
        </div>
      </div>
    );
  };

  // Helper function to render action buttons based on client status
  const renderActionButtons = (client: Client) => {
    return (
      <div className="flex flex-col gap-2">
        {/* YUNA Insights Button - always present */}
        <Button 
          size="sm" 
          variant="primary"
          className="py-1.5 text-xs"
          startIcon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          }
        >
          YUNA Insights
        </Button>
        
        {/* Status-specific action button */}
        {client.status === 'Pending' && (
          <Button 
            size="sm" 
            variant="outline"
            className="py-1.5 text-xs"
            startIcon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            }
          >
            Approve
          </Button>
        )}
        
        {client.status === 'At Risk' && (
          <Button 
            size="sm" 
            variant="outline"
            className="py-1.5 text-xs text-error-500 border-error-300 hover:bg-error-50 dark:border-error-800 dark:hover:bg-error-900/20"
            startIcon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            }
          >
            Escalate
          </Button>
        )}
        
        {client.status === 'Active' && (
          <Button 
            size="sm" 
            variant="outline"
            className="py-1.5 text-xs"
            startIcon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            }
          >
            Update
          </Button>
        )}
        
        {/* View Details button - always present */}
        <button className="text-brand-500 hover:text-brand-600 underline text-xs flex items-center gap-1">
          <svg 
            width="14" 
            height="14" 
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
          View Details
        </button>
      </div>
    );
  };

  // Column sort indicator
  const renderSortIndicator = (field: keyof Client | string) => {
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
  const renderSortableHeader = (title: string, field: keyof Client | string) => {
    return (
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => handleSort(field)}
      >
        {title}
        {renderSortIndicator(field)}
      </div>
    );
  };

  // Render mobile view card for each client
  const renderMobileClientCard = (client: Client) => {
    const isExpanded = expandedRows[client.id] || false;
    
    return (
      <div key={client.id} className="mb-4 bg-white rounded-lg shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        {/* Main always-visible content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-700">
                {client.avatar ? (
                  <img
                    width={40}
                    height={40}
                    src={client.avatar}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                    {client.name.substring(0, 1)}
                  </span>
                )}
              </div>
              <div>
                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {client.name}
                </span>
                <a 
                  href={`mailto:${client.email}`} 
                  className="block text-gray-500 text-theme-xs dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400"
                >
                  {client.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {renderStatusBadge(client.status)}
              <button 
                onClick={() => toggleRowExpansion(client.id)} 
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Expandable content */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
            <div className="grid grid-cols-1 gap-4">
              {/* Completion */}
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Completion</span>
                {renderCompletionBar(client.completion)}
              </div>
              
              {/* Timeline */}
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Timeline</span>
                {renderTimeline(client.timeline.days, client.timeline.averageDays)}
              </div>
              
              {/* Insurance */}
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Insurance</span>
                {renderInsurance(client.insurance)}
              </div>
              
              {/* Provider */}
              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">Provider</span>
                {renderProvider(client.provider)}
              </div>
              
              {/* Actions */}
              <div className="mt-2">
                {renderActionButtons(client)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Mobile View */}
      {isMobile && (
        <div className="p-2 md:hidden">
          {clients.map(renderMobileClientCard)}
        </div>
      )}

      {/* Desktop View */}
      <div className={`max-w-full overflow-x-auto ${isMobile ? 'hidden' : 'block'}`}>
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Name', 'name')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Status', 'status')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Completion', 'completion')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Timeline', 'timeline.days')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Insurance', 'insurance.status')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                {renderSortableHeader('Provider', 'provider.type')}
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {clients.map((client) => (
              <TableRow key={client.id}>
                {/* Name & Email Column (Enhanced) */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-700">
                      {client.avatar ? (
                        <img
                          width={40}
                          height={40}
                          src={client.avatar}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                          {client.name.substring(0, 1)}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {client.name}
                      </span>
                      <a 
                        href={`mailto:${client.email}`} 
                        className="block text-gray-500 text-theme-xs dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400"
                      >
                        {client.email}
                      </a>
                    </div>
                  </div>
                </TableCell>
                
                {/* Status Column */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderStatusBadge(client.status)}
                </TableCell>
                
                {/* Completion Column with Progress Bar */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderCompletionBar(client.completion)}
                </TableCell>
                
                {/* Timeline Column - Enhanced */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderTimeline(client.timeline.days, client.timeline.averageDays)}
                </TableCell>
                
                {/* Insurance Column - Enhanced */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderInsurance(client.insurance)}
                </TableCell>
                
                {/* Provider Column - Enhanced */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderProvider(client.provider)}
                </TableCell>
                
                {/* Action Buttons Column - Enhanced */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {renderActionButtons(client)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClientsTable;
```

## File: src/components/common/ScrollToTop.tsx
```typescript
import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
```

## File: src/components/common/ThemeTogglerTwo.tsx
```typescript
import { useTheme } from "../../context/ThemeContext";

export default function ThemeTogglerTwo() {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-brand-500 hover:bg-brand-600"
    >
      <svg
        className="hidden dark:block"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="dark:hidden"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
```

## File: src/components/ecommerce/RecentOrders.tsx
```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for the table rows
interface Product {
  id: number; // Unique identifier for each product
  name: string; // Product name
  variants: string; // Number of variants (e.g., "1 Variant", "2 Variants")
  category: string; // Category of the product
  price: string; // Price of the product (as a string with currency symbol)
  // status: string; // Status of the product
  image: string; // URL or path to the product image
  status: "Delivered" | "Pending" | "Canceled"; // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 13”",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    image: "/images/product/product-01.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    image: "/images/product/product-02.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    image: "/images/product/product-03.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    image: "/images/product/product-04.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    image: "/images/product/product-05.jpg", // Replace with actual image URL
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Products
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.name}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.variants}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.price}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.category}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      product.status === "Delivered"
                        ? "success"
                        : product.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
```

## File: src/components/form/date-picker.tsx
```typescript
import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import Label from "./Label";
import { CalenderIcon } from "../../icons";
import Hook = flatpickr.Options.Hook;
import DateOption = flatpickr.Options.DateOption;

type PropsType = {
  id: string;
  mode?: "single" | "multiple" | "range" | "time";
  onChange?: Hook | Hook[];
  defaultDate?: DateOption;
  label?: string;
  placeholder?: string;
};

export default function DatePicker({
  id,
  mode,
  onChange,
  label,
  defaultDate,
  placeholder,
}: PropsType) {
  useEffect(() => {
    const flatPickr = flatpickr(`#${id}`, {
      mode: mode || "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "Y-m-d",
      defaultDate,
      onChange,
    });

    return () => {
      if (!Array.isArray(flatPickr)) {
        flatPickr.destroy();
      }
    };
  }, [mode, onChange, id, defaultDate]);

  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}

      <div className="relative">
        <input
          id={id}
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700  dark:focus:border-brand-800"
        />

        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
          <CalenderIcon className="size-6" />
        </span>
      </div>
    </div>
  );
}
```

## File: src/context/ThemeContext.tsx
```typescript
"use client";

import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "light"; // Default to light theme

    setTheme(initialTheme);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

## File: src/hooks/useGoBack.ts
```typescript
import { useNavigate } from "react-router";

const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go back to the previous page
    } else {
      navigate("/"); // Redirect to home if no history exists
    }
  };

  return goBack;
};

export default useGoBack;
```

## File: src/hooks/useModal.ts
```typescript
import { useState, useCallback } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openModal, closeModal, toggleModal };
};
```

## File: src/icons/alert-hexa.svg
```
<svg className="size-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.9497 3.875C13.0836 2.375 10.9186 2.375 10.0525 3.875L2.54699 16.875C1.68096 18.375 2.76349 20.25 4.49554 20.25H19.5067C21.2387 20.25 22.3212 18.375 21.4552 16.875L13.9497 3.875ZM11.3516 4.625C11.6403 4.125 12.3619 4.125 12.6506 4.625L20.1562 17.625C20.4448 18.125 20.084 18.75 19.5067 18.75H4.49554C3.91819 18.75 3.55735 18.125 3.84603 17.625L11.3516 4.625ZM12.0018 8.56075C12.416 8.56075 12.7518 8.89653 12.7518 9.31075V13.5303C12.7518 13.9445 12.416 14.2803 12.0018 14.2803C11.5876 14.2803 11.2518 13.9445 11.2518 13.5303V9.31075C11.2518 8.89653 11.5876 8.56075 12.0018 8.56075ZM11.0009 16.0803C11.0009 15.528 11.4486 15.0803 12.0009 15.0803H12.0016C12.5539 15.0803 13.0016 15.528 13.0016 16.0803C13.0016 16.6326 12.5539 17.0803 12.0016 17.0803H12.0009C11.4486 17.0803 11.0009 16.6326 11.0009 16.0803Z" fill="#DC6803"/>
</svg>
```

## File: src/icons/arrow-down.svg
```
<svg
          class="fill-current"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
            fill=""
          />
        </svg>
```

## File: src/icons/arrow-right.svg
```
<svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z"
              fill=""
            />
          </svg>
```

## File: src/icons/arrow-up.svg
```
<svg
              className="fill-current"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.06462 1.62393C6.20193 1.47072 6.40135 1.37432 6.62329 1.37432C6.6236 1.37432 6.62391 1.37432 6.62422 1.37432C6.81631 1.37415 7.00845 1.44731 7.15505 1.5938L10.1551 4.5918C10.4481 4.88459 10.4483 5.35946 10.1555 5.65246C9.86273 5.94546 9.38785 5.94562 9.09486 5.65283L7.37329 3.93247L7.37329 10.125C7.37329 10.5392 7.03751 10.875 6.62329 10.875C6.20908 10.875 5.87329 10.5392 5.87329 10.125L5.87329 3.93578L4.15516 5.65281C3.86218 5.94561 3.3873 5.94546 3.0945 5.65248C2.8017 5.35949 2.80185 4.88462 3.09484 4.59182L6.06462 1.62393Z"
                fill=""
              />
            </svg>
```

## File: src/icons/audio.svg
```
<svg
              class="fill-current"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.4166 4.00001C21.4166 3.77689 21.3173 3.56536 21.1456 3.42287C20.9739 3.28039 20.7477 3.22173 20.5284 3.26285L8.52841 5.51285C8.17368 5.57936 7.91663 5.88909 7.91663 6.25001V9.98484C7.91644 9.99437 7.91644 10.0039 7.91663 10.0135V14.4585C7.3716 14.1636 6.72327 14 6.04163 14C5.16738 14 4.34794 14.2691 3.73094 14.7392C3.11333 15.2098 2.66663 15.9138 2.66663 16.75C2.66663 17.5862 3.11333 18.2902 3.73094 18.7608C4.34794 19.2309 5.16738 19.5 6.04163 19.5C6.91587 19.5 7.73532 19.2309 8.35231 18.7608C8.95774 18.2995 9.39893 17.6139 9.41611 16.7993C9.41645 16.79 9.41663 16.7806 9.41663 16.7712V16.75V10.62L19.9166 8.60938V12.2085C19.3716 11.9136 18.7233 11.75 18.0416 11.75C17.1674 11.75 16.3479 12.0191 15.7309 12.4892C15.1133 12.9598 14.6666 13.6638 14.6666 14.5C14.6666 15.3362 15.1133 16.0402 15.7309 16.5108C16.3479 16.9809 17.1674 17.25 18.0416 17.25C18.9159 17.25 19.7353 16.9809 20.3523 16.5108C20.9577 16.0495 21.3989 15.3639 21.4161 14.5493C21.4165 14.54 21.4166 14.5306 21.4166 14.5212V14.5V4.00001ZM19.9166 14.5C19.9166 14.2316 19.7757 13.9357 19.4432 13.6824C19.1102 13.4286 18.6171 13.25 18.0416 13.25C17.4661 13.25 16.9731 13.4286 16.64 13.6824C16.3076 13.9357 16.1666 14.2316 16.1666 14.5C16.1666 14.7684 16.3076 15.0643 16.64 15.3176C16.9731 15.5714 17.4661 15.75 18.0416 15.75C18.6171 15.75 19.1102 15.5714 19.4432 15.3176C19.7757 15.0643 19.9166 14.7684 19.9166 14.5ZM7.44325 15.9324C7.7757 16.1857 7.91663 16.4816 7.91663 16.75C7.91663 17.0184 7.7757 17.3143 7.44325 17.5676C7.11018 17.8214 6.61713 18 6.04163 18C5.46613 18 4.97307 17.8214 4.64 17.5676C4.30755 17.3143 4.16663 17.0184 4.16663 16.75C4.16663 16.4816 4.30755 16.1857 4.64 15.9324C4.97307 15.6786 5.46613 15.5 6.04163 15.5C6.61713 15.5 7.11018 15.6786 7.44325 15.9324ZM19.9166 7.08212V4.9037L9.41663 6.87245V9.09276L19.9166 7.08212Z"
                fill="currentColor"
              />
            </svg>
```

## File: src/icons/box-cube.svg
```
<svg
               
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.665 3.75618C11.8762 3.65061 12.1247 3.65061 12.3358 3.75618L18.7807 6.97853L12.3358 10.2009C12.1247 10.3064 11.8762 10.3064 11.665 10.2009L5.22014 6.97853L11.665 3.75618ZM4.29297 8.19199V16.0946C4.29297 16.3787 4.45347 16.6384 4.70757 16.7654L11.25 20.0365V11.6512C11.1631 11.6205 11.0777 11.5843 10.9942 11.5425L4.29297 8.19199ZM12.75 20.037L19.2933 16.7654C19.5474 16.6384 19.7079 16.3787 19.7079 16.0946V8.19199L13.0066 11.5425C12.9229 11.5844 12.8372 11.6207 12.75 11.6515V20.037ZM13.0066 2.41453C12.3732 2.09783 11.6277 2.09783 10.9942 2.41453L4.03676 5.89316C3.27449 6.27429 2.79297 7.05339 2.79297 7.90563V16.0946C2.79297 16.9468 3.27448 17.7259 4.03676 18.1071L10.9942 21.5857L11.3296 20.9149L10.9942 21.5857C11.6277 21.9024 12.3732 21.9024 13.0066 21.5857L19.9641 18.1071C20.7264 17.7259 21.2079 16.9468 21.2079 16.0946V7.90563C21.2079 7.05339 20.7264 6.27429 19.9641 5.89316L13.0066 2.41453Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/box-line.svg
```
<svg
           
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.665 3.75621C11.8762 3.65064 12.1247 3.65064 12.3358 3.75621L18.7807 6.97856L12.3358 10.2009C12.1247 10.3065 11.8762 10.3065 11.665 10.2009L5.22014 6.97856L11.665 3.75621ZM4.29297 8.19203V16.0946C4.29297 16.3787 4.45347 16.6384 4.70757 16.7654L11.25 20.0366V11.6513C11.1631 11.6205 11.0777 11.5843 10.9942 11.5426L4.29297 8.19203ZM12.75 20.037L19.2933 16.7654C19.5474 16.6384 19.7079 16.3787 19.7079 16.0946V8.19202L13.0066 11.5426C12.9229 11.5844 12.8372 11.6208 12.75 11.6516V20.037ZM13.0066 2.41456C12.3732 2.09786 11.6277 2.09786 10.9942 2.41456L4.03676 5.89319C3.27449 6.27432 2.79297 7.05342 2.79297 7.90566V16.0946C2.79297 16.9469 3.27448 17.726 4.03676 18.1071L10.9942 21.5857L11.3296 20.9149L10.9942 21.5857C11.6277 21.9024 12.3732 21.9024 13.0066 21.5857L19.9641 18.1071C20.7264 17.726 21.2079 16.9469 21.2079 16.0946V7.90566C21.2079 7.05342 20.7264 6.27432 19.9641 5.89319L13.0066 2.41456Z"
              fill="currentColor"
            />
          </svg>
```

## File: src/icons/box.svg
```
<svg
     
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.77692 3.24224C9.91768 3.17186 10.0834 3.17186 10.2241 3.24224L15.3713 5.81573L10.3359 8.33331C10.1248 8.43888 9.87626 8.43888 9.66512 8.33331L4.6298 5.81573L9.77692 3.24224ZM3.70264 7.0292V13.4124C3.70264 13.6018 3.80964 13.775 3.97903 13.8597L9.25016 16.4952L9.25016 9.7837C9.16327 9.75296 9.07782 9.71671 8.99432 9.67496L3.70264 7.0292ZM10.7502 16.4955V9.78396C10.8373 9.75316 10.923 9.71683 11.0067 9.67496L16.2984 7.0292V13.4124C16.2984 13.6018 16.1914 13.775 16.022 13.8597L10.7502 16.4955ZM9.41463 17.4831L9.10612 18.1002C9.66916 18.3817 10.3319 18.3817 10.8949 18.1002L16.6928 15.2013C17.3704 14.8625 17.7984 14.17 17.7984 13.4124V6.58831C17.7984 5.83076 17.3704 5.13823 16.6928 4.79945L10.8949 1.90059C10.3319 1.61908 9.66916 1.61907 9.10612 1.90059L9.44152 2.57141L9.10612 1.90059L3.30823 4.79945C2.63065 5.13823 2.20264 5.83076 2.20264 6.58831V13.4124C2.20264 14.17 2.63065 14.8625 3.30823 15.2013L9.10612 18.1002L9.41463 17.4831Z"
        fill="currentColor"
      />
    </svg>
```

## File: src/icons/calender-line.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z" fill="currentColor"/>
</svg>
```

## File: src/icons/chat.svg
```
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 12.0957C4.00002 7.67742 7.58174 4.0957 12 4.0957C16.4183 4.0957 20 7.67742 20 12.0957C20 16.514 16.4183 20.0957 12 20.0957H5.06068L6.34317 18.8132C6.48382 18.6726 6.56284 18.4818 6.56284 18.2829C6.56284 18.084 6.48382 17.8932 6.34317 17.7526C4.89463 16.304 4.00002 14.305 4.00002 12.0957ZM12 2.5957C6.75332 2.5957 2.50002 6.849 2.50002 12.0957C2.50002 14.4488 3.35633 16.603 4.77303 18.262L2.71969 20.3154C2.50519 20.5299 2.44103 20.8525 2.55711 21.1327C2.6732 21.413 2.94668 21.5957 3.25002 21.5957H12C17.2467 21.5957 21.5 17.3424 21.5 12.0957C21.5 6.849 17.2467 2.5957 12 2.5957ZM7.62502 10.8467C6.93467 10.8467 6.37502 11.4063 6.37502 12.0967C6.37502 12.787 6.93467 13.3467 7.62502 13.3467H7.62512C8.31548 13.3467 8.87512 12.787 8.87512 12.0967C8.87512 11.4063 8.31548 10.8467 7.62512 10.8467H7.62502ZM10.75 12.0967C10.75 11.4063 11.3097 10.8467 12 10.8467H12.0001C12.6905 10.8467 13.2501 11.4063 13.2501 12.0967C13.2501 12.787 12.6905 13.3467 12.0001 13.3467H12C11.3097 13.3467 10.75 12.787 10.75 12.0967ZM16.375 10.8467C15.6847 10.8467 15.125 11.4063 15.125 12.0967C15.125 12.787 15.6847 13.3467 16.375 13.3467H16.3751C17.0655 13.3467 17.6251 12.787 17.6251 12.0967C17.6251 11.4063 17.0655 10.8467 16.3751 10.8467H16.375Z" fill="currentColor"/>
</svg>
```

## File: src/icons/check-line.svg
```
<svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
```

## File: src/icons/chevron-down.svg
```
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## File: src/icons/chevron-left.svg
```
<svg
             
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
```

## File: src/icons/chevron-up.svg
```
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8333 12.7083L10.6249 7.5L5.41658 12.7083" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## File: src/icons/close-line.svg
```
<svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.05394 4.78033C3.76105 4.48744 3.76105 4.01256 4.05394 3.71967C4.34684 3.42678 4.82171 3.42678 5.1146 3.71967L8.33437 6.93944L11.5521 3.72173C11.845 3.42883 12.3199 3.42883 12.6127 3.72173C12.9056 4.01462 12.9056 4.48949 12.6127 4.78239L9.39503 8.0001L12.6127 11.2178C12.9056 11.5107 12.9056 11.9856 12.6127 12.2785C12.3198 12.5713 11.845 12.5713 11.5521 12.2785L8.33437 9.06076L5.11462 12.2805C4.82173 12.5734 4.34685 12.5734 4.05396 12.2805C3.76107 11.9876 3.76107 11.5127 4.05396 11.2199L7.27371 8.0001L4.05394 4.78033Z"
                fill="currentColor"
              />
            </svg>
```

## File: src/icons/copy.svg
```
<svg
                            
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.58822 4.58398C6.58822 4.30784 6.81207 4.08398 7.08822 4.08398H15.4154C15.6915 4.08398 15.9154 4.30784 15.9154 4.58398L15.9154 12.9128C15.9154 13.189 15.6916 13.4128 15.4154 13.4128H7.08821C6.81207 13.4128 6.58822 13.189 6.58822 12.9128V4.58398ZM7.08822 2.58398C5.98365 2.58398 5.08822 3.47942 5.08822 4.58398V5.09416H4.58496C3.48039 5.09416 2.58496 5.98959 2.58496 7.09416V15.4161C2.58496 16.5207 3.48039 17.4161 4.58496 17.4161H12.9069C14.0115 17.4161 14.9069 16.5207 14.9069 15.4161L14.9069 14.9128H15.4154C16.52 14.9128 17.4154 14.0174 17.4154 12.9128L17.4154 4.58398C17.4154 3.47941 16.52 2.58398 15.4154 2.58398H7.08822ZM13.4069 14.9128H7.08821C5.98364 14.9128 5.08822 14.0174 5.08822 12.9128V6.59416H4.58496C4.30882 6.59416 4.08496 6.81801 4.08496 7.09416V15.4161C4.08496 15.6922 4.30882 15.9161 4.58496 15.9161H12.9069C13.183 15.9161 13.4069 15.6922 13.4069 15.4161L13.4069 14.9128Z"
                              fill="currentColor"
                            />
                          </svg>
```

## File: src/icons/docs.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5 19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V19.75ZM17.25 20.5C17.6642 20.5 18 20.1642 18 19.75V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.49913C12.2518 8.7424 11.2442 9.75073 10.0009 9.75073H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25ZM7.05913 8.25073L10.7488 4.55876L10.7509 7.5002C10.7512 7.91462 10.4153 8.25073 10.0009 8.25073H7.05913ZM8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75H15C15.4142 13.75 15.75 14.0858 15.75 14.5C15.75 14.9142 15.4142 15.25 15 15.25H9C8.58579 15.25 8.25 14.9142 8.25 14.5ZM8.25 17.5C8.25 17.0858 8.58579 16.75 9 16.75H12C12.4142 16.75 12.75 17.0858 12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25H9C8.58579 18.25 8.25 17.9142 8.25 17.5Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/dollar-line.svg
```
<svg
            
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4164 2.79175C13.4164 2.37753 13.0806 2.04175 12.6664 2.04175C12.2522 2.04175 11.9164 2.37753 11.9164 2.79175V4.39876C9.94768 4.67329 8.43237 6.36366 8.43237 8.40795C8.43237 10.0954 9.47908 11.6058 11.0591 12.1984L13.7474 13.2066C14.7419 13.5795 15.4008 14.5303 15.4008 15.5925C15.4008 16.9998 14.2599 18.1407 12.8526 18.1407H11.7957C10.7666 18.1407 9.93237 17.3064 9.93237 16.2773C9.93237 15.8631 9.59659 15.5273 9.18237 15.5273C8.76816 15.5273 8.43237 15.8631 8.43237 16.2773C8.43237 18.1348 9.9382 19.6407 11.7957 19.6407H11.9164V21.2083C11.9164 21.6225 12.2522 21.9583 12.6664 21.9583C13.0806 21.9583 13.4164 21.6225 13.4164 21.2083V19.6017C15.3853 19.3274 16.9008 17.6369 16.9008 15.5925C16.9008 13.905 15.8541 12.3946 14.2741 11.8021L11.5858 10.7939C10.5912 10.4209 9.93237 9.47013 9.93237 8.40795C9.93237 7.00063 11.0732 5.85976 12.4806 5.85976H13.5374C14.5665 5.85976 15.4008 6.69401 15.4008 7.72311C15.4008 8.13732 15.7366 8.47311 16.1508 8.47311C16.565 8.47311 16.9008 8.13732 16.9008 7.72311C16.9008 5.86558 15.395 4.35976 13.5374 4.35976H13.4164V2.79175Z"
              fill="currentColor"
            />
          </svg>
```

## File: src/icons/download.svg
```
<svg
              class="fill-current"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6686 16.75C12.4526 16.75 12.2579 16.6587 12.1211 16.5126L7.5115 11.9059C7.21851 11.6131 7.21836 11.1382 7.51116 10.8452C7.80396 10.5523 8.27883 10.5521 8.57182 10.8449L11.9186 14.1896V4C11.9186 3.58579 12.2544 3.25 12.6686 3.25C13.0828 3.25 13.4186 3.58579 13.4186 4V14.1854L16.7615 10.8449C17.0545 10.5521 17.5294 10.5523 17.8222 10.8453C18.115 11.1383 18.1148 11.6131 17.8218 11.9059L13.2469 16.4776C13.1093 16.644 12.9013 16.75 12.6686 16.75ZM5.41663 16C5.41663 15.5858 5.08084 15.25 4.66663 15.25C4.25241 15.25 3.91663 15.5858 3.91663 16V18.5C3.91663 19.7426 4.92399 20.75 6.16663 20.75H19.1675C20.4101 20.75 21.4175 19.7426 21.4175 18.5V16C21.4175 15.5858 21.0817 15.25 20.6675 15.25C20.2533 15.25 19.9175 15.5858 19.9175 16V18.5C19.9175 18.9142 19.5817 19.25 19.1675 19.25H6.16663C5.75241 19.25 5.41663 18.9142 5.41663 18.5V16Z"
                fill="currentColor"
              />
            </svg>
```

## File: src/icons/envelope.svg
```
<svg
                            
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.0415 7.06206V14.375C3.0415 14.6511 3.26536 14.875 3.5415 14.875H16.4582C16.7343 14.875 16.9582 14.6511 16.9582 14.375V7.06245L11.1441 11.1168C10.4568 11.5961 9.54348 11.5961 8.85614 11.1168L3.0415 7.06206ZM16.9582 5.19262C16.9582 5.19341 16.9582 5.1942 16.9582 5.19498V5.20026C16.957 5.22216 16.9458 5.24239 16.9277 5.25501L10.2861 9.88638C10.1143 10.0062 9.88596 10.0062 9.71412 9.88638L3.0723 5.25485C3.05318 5.24151 3.04178 5.21967 3.04177 5.19636C3.04176 5.15695 3.0737 5.125 3.1131 5.125H16.8869C16.925 5.125 16.9562 5.15494 16.9582 5.19262ZM18.4582 5.21428V14.375C18.4582 15.4796 17.5627 16.375 16.4582 16.375H3.5415C2.43693 16.375 1.5415 15.4796 1.5415 14.375V5.19498C1.5415 5.1852 1.54169 5.17546 1.54206 5.16577C1.55834 4.31209 2.25546 3.625 3.1131 3.625H16.8869C17.7546 3.625 18.4582 4.32843 18.4583 5.19622C18.4583 5.20225 18.4582 5.20826 18.4582 5.21428Z"
                                  fill="currentColor"
                                />
                              </svg>
```

## File: src/icons/eye-close.svg
```
<svg
                
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z"
                  />
                </svg>
```

## File: src/icons/eye.svg
```
<svg
                  
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z"
                  />
                </svg>
```

## File: src/icons/file.svg
```
<svg
              class="fill-current"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8335 19.75C19.8335 20.9926 18.8261 22 17.5835 22H7.0835C5.84086 22 4.8335 20.9926 4.8335 19.75V9.62105C4.8335 9.02455 5.07036 8.45247 5.49201 8.03055L10.8597 2.65951C11.2817 2.23725 11.8542 2 12.4512 2H17.5835C18.8261 2 19.8335 3.00736 19.8335 4.25V19.75ZM17.5835 20.5C17.9977 20.5 18.3335 20.1642 18.3335 19.75V4.25C18.3335 3.83579 17.9977 3.5 17.5835 3.5H12.5815L12.5844 7.49913C12.5853 8.7424 11.5776 9.75073 10.3344 9.75073H6.3335V19.75C6.3335 20.1642 6.66928 20.5 7.0835 20.5H17.5835ZM7.39262 8.25073L11.0823 4.55876L11.0844 7.5002C11.0847 7.91462 10.7488 8.25073 10.3344 8.25073H7.39262ZM8.5835 14.5C8.5835 14.0858 8.91928 13.75 9.3335 13.75H15.3335C15.7477 13.75 16.0835 14.0858 16.0835 14.5C16.0835 14.9142 15.7477 15.25 15.3335 15.25H9.3335C8.91928 15.25 8.5835 14.9142 8.5835 14.5ZM8.5835 17.5C8.5835 17.0858 8.91928 16.75 9.3335 16.75H12.3335C12.7477 16.75 13.0835 17.0858 13.0835 17.5C13.0835 17.9142 12.7477 18.25 12.3335 18.25H9.3335C8.91928 18.25 8.5835 17.9142 8.5835 17.5Z"
                fill="currentColor"
              />
            </svg>
```

## File: src/icons/folder.svg
```
<svg
              
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.05 3.9L8.45 4.35L9.05 3.9ZM2.25 2.25H6.5V0.75H2.25V2.25ZM1.5 15V3H0V15H1.5ZM17.75 15.75H2.25V17.25H17.75V15.75ZM18.5 6V15H20V6H18.5ZM17.75 3.75H10.25V5.25H17.75V3.75ZM9.65 3.45L8.3 1.65L7.1 2.55L8.45 4.35L9.65 3.45ZM10.25 3.75C10.0139 3.75 9.79164 3.63885 9.65 3.45L8.45 4.35C8.87492 4.91656 9.5418 5.25 10.25 5.25V3.75ZM20 6C20 4.75736 18.9926 3.75 17.75 3.75V5.25C18.1642 5.25 18.5 5.58579 18.5 6H20ZM17.75 17.25C18.9926 17.25 20 16.2426 20 15H18.5C18.5 15.4142 18.1642 15.75 17.75 15.75V17.25ZM0 15C0 16.2426 1.00736 17.25 2.25 17.25V15.75C1.83579 15.75 1.5 15.4142 1.5 15H0ZM6.5 2.25C6.73607 2.25 6.95836 2.36115 7.1 2.55L8.3 1.65C7.87508 1.08344 7.2082 0.75 6.5 0.75V2.25ZM2.25 0.75C1.00736 0.75 0 1.75736 0 3H1.5C1.5 2.58579 1.83579 2.25 2.25 2.25V0.75Z"
                    fill="currentColor"
                  />
                </svg>
```

## File: src/icons/group.svg
```
<svg
 
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.80443 5.60156C7.59109 5.60156 6.60749 6.58517 6.60749 7.79851C6.60749 9.01185 7.59109 9.99545 8.80443 9.99545C10.0178 9.99545 11.0014 9.01185 11.0014 7.79851C11.0014 6.58517 10.0178 5.60156 8.80443 5.60156ZM5.10749 7.79851C5.10749 5.75674 6.76267 4.10156 8.80443 4.10156C10.8462 4.10156 12.5014 5.75674 12.5014 7.79851C12.5014 9.84027 10.8462 11.4955 8.80443 11.4955C6.76267 11.4955 5.10749 9.84027 5.10749 7.79851ZM4.86252 15.3208C4.08769 16.0881 3.70377 17.0608 3.51705 17.8611C3.48384 18.0034 3.5211 18.1175 3.60712 18.2112C3.70161 18.3141 3.86659 18.3987 4.07591 18.3987H13.4249C13.6343 18.3987 13.7992 18.3141 13.8937 18.2112C13.9797 18.1175 14.017 18.0034 13.9838 17.8611C13.7971 17.0608 13.4132 16.0881 12.6383 15.3208C11.8821 14.572 10.6899 13.955 8.75042 13.955C6.81096 13.955 5.61877 14.572 4.86252 15.3208ZM3.8071 14.2549C4.87163 13.2009 6.45602 12.455 8.75042 12.455C11.0448 12.455 12.6292 13.2009 13.6937 14.2549C14.7397 15.2906 15.2207 16.5607 15.4446 17.5202C15.7658 18.8971 14.6071 19.8987 13.4249 19.8987H4.07591C2.89369 19.8987 1.73504 18.8971 2.05628 17.5202C2.28015 16.5607 2.76117 15.2906 3.8071 14.2549ZM15.3042 11.4955C14.4702 11.4955 13.7006 11.2193 13.0821 10.7533C13.3742 10.3314 13.6054 9.86419 13.7632 9.36432C14.1597 9.75463 14.7039 9.99545 15.3042 9.99545C16.5176 9.99545 17.5012 9.01185 17.5012 7.79851C17.5012 6.58517 16.5176 5.60156 15.3042 5.60156C14.7039 5.60156 14.1597 5.84239 13.7632 6.23271C13.6054 5.73284 13.3741 5.26561 13.082 4.84371C13.7006 4.37777 14.4702 4.10156 15.3042 4.10156C17.346 4.10156 19.0012 5.75674 19.0012 7.79851C19.0012 9.84027 17.346 11.4955 15.3042 11.4955ZM19.9248 19.8987H16.3901C16.7014 19.4736 16.9159 18.969 16.9827 18.3987H19.9248C20.1341 18.3987 20.2991 18.3141 20.3936 18.2112C20.4796 18.1175 20.5169 18.0034 20.4837 17.861C20.2969 17.0607 19.913 16.088 19.1382 15.3208C18.4047 14.5945 17.261 13.9921 15.4231 13.9566C15.2232 13.6945 14.9995 13.437 14.7491 13.1891C14.5144 12.9566 14.262 12.7384 13.9916 12.5362C14.3853 12.4831 14.8044 12.4549 15.2503 12.4549C17.5447 12.4549 19.1291 13.2008 20.1936 14.2549C21.2395 15.2906 21.7206 16.5607 21.9444 17.5202C22.2657 18.8971 21.107 19.8987 19.9248 19.8987Z"
          fill="currentColor"
        />
      </svg>
```

## File: src/icons/horizontal-dots.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/info-error.svg
```
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M20.3499 11.9999C20.3499 16.6115 16.6115 20.3499 11.9999 20.3499C7.38832 20.3499 3.6499 16.6115 3.6499 11.9999C3.6499 7.38832 7.38833 3.6499 11.9999 3.6499C16.6115 3.6499 20.3499 7.38832 20.3499 11.9999ZM11.9999 22.1499C17.6056 22.1499 22.1499 17.6056 22.1499 11.9999C22.1499 6.39421 17.6056 1.8499 11.9999 1.8499C6.39421 1.8499 1.8499 6.39421 1.8499 11.9999C1.8499 17.6056 6.39421 22.1499 11.9999 22.1499ZM13.0008 16.4748C13.0008 15.9225 12.5531 15.4748 12.0008 15.4748L11.9998 15.4748C11.4475 15.4748 10.9998 15.9225 10.9998 16.4748C10.9998 17.0271 11.4475 17.4748 11.9998 17.4748L12.0008 17.4748C12.5531 17.4748 13.0008 17.0271 13.0008 16.4748ZM11.9998 6.62849C12.414 6.62849 12.7498 6.96428 12.7498 7.37849L12.7498 13.055C12.7498 13.4692 12.414 13.805 11.9998 13.805C11.5856 13.805 11.2498 13.4692 11.2498 13.055L11.2498 7.37849C11.2498 6.96428 11.5856 6.62849 11.9998 6.62849Z"
    fill="#F04438"
  />
</svg>
```

## File: src/icons/list.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H18.5001C19.7427 20.75 20.7501 19.7426 20.7501 18.5V5.5C20.7501 4.25736 19.7427 3.25 18.5001 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H18.5001C18.9143 4.75 19.2501 5.08579 19.2501 5.5V18.5C19.2501 18.9142 18.9143 19.25 18.5001 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V5.5ZM6.25005 9.7143C6.25005 9.30008 6.58583 8.9643 7.00005 8.9643L17 8.96429C17.4143 8.96429 17.75 9.30008 17.75 9.71429C17.75 10.1285 17.4143 10.4643 17 10.4643L7.00005 10.4643C6.58583 10.4643 6.25005 10.1285 6.25005 9.7143ZM6.25005 14.2857C6.25005 13.8715 6.58583 13.5357 7.00005 13.5357H17C17.4143 13.5357 17.75 13.8715 17.75 14.2857C17.75 14.6999 17.4143 15.0357 17 15.0357H7.00005C6.58583 15.0357 6.25005 14.6999 6.25005 14.2857Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/lock.svg
```
<svg
                             
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.6252 13.9582C10.6252 13.613 10.3453 13.3332 10.0002 13.3332C9.65498 13.3332 9.37516 13.613 9.37516 13.9582V15.2082C9.37516 15.5533 9.65498 15.8332 10.0002 15.8332C10.3453 15.8332 10.6252 15.5533 10.6252 15.2082V13.9582Z"
                                  fill="#667085"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.0002 1.6665C7.58392 1.6665 5.62516 3.62526 5.62516 6.0415V7.604H4.5835C3.54796 7.604 2.7085 8.44347 2.7085 9.479V16.4578C2.7085 17.4933 3.54796 18.3328 4.5835 18.3328H15.4168C16.4524 18.3328 17.2918 17.4933 17.2918 16.4578V9.479C17.2918 8.44347 16.4524 7.604 15.4168 7.604H14.3752V6.0415C14.3752 3.62526 12.4164 1.6665 10.0002 1.6665ZM13.1252 6.0415V7.604H6.87516V6.0415C6.87516 4.31561 8.27427 2.9165 10.0002 2.9165C11.7261 2.9165 13.1252 4.31561 13.1252 6.0415ZM4.5835 8.854C4.23832 8.854 3.9585 9.13383 3.9585 9.479V16.4578C3.9585 16.8029 4.23832 17.0828 4.5835 17.0828H15.4168C15.762 17.0828 16.0418 16.8029 16.0418 16.4578V9.479C16.0418 9.13383 15.762 8.854 15.4168 8.854H4.5835Z"
                                  fill="currentColor"
                                />
                              </svg>
```

## File: src/icons/mail-line.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286C20.5 6.23039 20.5 6.23218 20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286ZM22 6.25648V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22371 2.00021 6.2135 2.00061 6.20333C2.01781 5.25971 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25648Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/moredot.svg
```
<svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
                    fill="currentColor"
                  />
                </svg>
```

## File: src/icons/page.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.50391 4.25C8.50391 3.83579 8.83969 3.5 9.25391 3.5H15.2777C15.4766 3.5 15.6674 3.57902 15.8081 3.71967L18.2807 6.19234C18.4214 6.333 18.5004 6.52376 18.5004 6.72268V16.75C18.5004 17.1642 18.1646 17.5 17.7504 17.5H16.248V17.4993H14.748V17.5H9.25391C8.83969 17.5 8.50391 17.1642 8.50391 16.75V4.25ZM14.748 19H9.25391C8.01126 19 7.00391 17.9926 7.00391 16.75V6.49854H6.24805C5.83383 6.49854 5.49805 6.83432 5.49805 7.24854V19.75C5.49805 20.1642 5.83383 20.5 6.24805 20.5H13.998C14.4123 20.5 14.748 20.1642 14.748 19.75L14.748 19ZM7.00391 4.99854V4.25C7.00391 3.00736 8.01127 2 9.25391 2H15.2777C15.8745 2 16.4468 2.23705 16.8687 2.659L19.3414 5.13168C19.7634 5.55364 20.0004 6.12594 20.0004 6.72268V16.75C20.0004 17.9926 18.9931 19 17.7504 19H16.248L16.248 19.75C16.248 20.9926 15.2407 22 13.998 22H6.24805C5.00541 22 3.99805 20.9926 3.99805 19.75V7.24854C3.99805 6.00589 5.00541 4.99854 6.24805 4.99854H7.00391Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/paper-plane.svg
```
<svg
                             
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.98481 2.44399C3.11333 1.57147 1.15325 3.46979 1.96543 5.36824L3.82086 9.70527C3.90146 9.89367 3.90146 10.1069 3.82086 10.2953L1.96543 14.6323C1.15326 16.5307 3.11332 18.4291 4.98481 17.5565L16.8184 12.0395C18.5508 11.2319 18.5508 8.76865 16.8184 7.961L4.98481 2.44399ZM3.34453 4.77824C3.0738 4.14543 3.72716 3.51266 4.35099 3.80349L16.1846 9.32051C16.762 9.58973 16.762 10.4108 16.1846 10.68L4.35098 16.197C3.72716 16.4879 3.0738 15.8551 3.34453 15.2223L5.19996 10.8853C5.21944 10.8397 5.23735 10.7937 5.2537 10.7473L9.11784 10.7473C9.53206 10.7473 9.86784 10.4115 9.86784 9.99726C9.86784 9.58304 9.53206 9.24726 9.11784 9.24726L5.25157 9.24726C5.2358 9.20287 5.2186 9.15885 5.19996 9.11528L3.34453 4.77824Z"
                                fill="currentColor"
                              />
                            </svg>
```

## File: src/icons/pencil.svg
```
<svg
                  
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.0911 3.53206C16.2124 2.65338 14.7878 2.65338 13.9091 3.53206L5.6074 11.8337C5.29899 12.1421 5.08687 12.5335 4.99684 12.9603L4.26177 16.445C4.20943 16.6931 4.286 16.9508 4.46529 17.1301C4.64458 17.3094 4.90232 17.3859 5.15042 17.3336L8.63507 16.5985C9.06184 16.5085 9.45324 16.2964 9.76165 15.988L18.0633 7.68631C18.942 6.80763 18.942 5.38301 18.0633 4.50433L17.0911 3.53206ZM14.9697 4.59272C15.2626 4.29982 15.7375 4.29982 16.0304 4.59272L17.0027 5.56499C17.2956 5.85788 17.2956 6.33276 17.0027 6.62565L16.1043 7.52402L14.0714 5.49109L14.9697 4.59272ZM13.0107 6.55175L6.66806 12.8944C6.56526 12.9972 6.49455 13.1277 6.46454 13.2699L5.96704 15.6283L8.32547 15.1308C8.46772 15.1008 8.59819 15.0301 8.70099 14.9273L15.0436 8.58468L13.0107 6.55175Z"
                            fill="currentColor"
                          />
                        </svg>
```

## File: src/icons/pie-chart.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C11.5858 2 11.25 2.33579 11.25 2.75V12C11.25 12.4142 11.5858 12.75 12 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 6.47715 17.5228 2 12 2ZM12.75 11.25V3.53263C13.2645 3.57761 13.7659 3.66843 14.25 3.80098V3.80099C15.6929 4.19606 16.9827 4.96184 18.0104 5.98959C19.0382 7.01734 19.8039 8.30707 20.199 9.75C20.3316 10.2341 20.4224 10.7355 20.4674 11.25H12.75ZM2 12C2 7.25083 5.31065 3.27489 9.75 2.25415V3.80099C6.14748 4.78734 3.5 8.0845 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C15.9155 20.5 19.2127 17.8525 20.199 14.25H21.7459C20.7251 18.6894 16.7492 22 12 22C6.47715 22 2 17.5229 2 12Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/plug-in.svg
```
<svg
               
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 2.75C14 2.33579 14.3358 2 14.75 2C15.1642 2 15.5 2.33579 15.5 2.75V5.73291L17.75 5.73291H19C19.4142 5.73291 19.75 6.0687 19.75 6.48291C19.75 6.89712 19.4142 7.23291 19 7.23291H18.5L18.5 12.2329C18.5 15.5691 15.9866 18.3183 12.75 18.6901V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V18.6901C8.01342 18.3183 5.5 15.5691 5.5 12.2329L5.5 7.23291H5C4.58579 7.23291 4.25 6.89712 4.25 6.48291C4.25 6.0687 4.58579 5.73291 5 5.73291L6.25 5.73291L8.5 5.73291L8.5 2.75C8.5 2.33579 8.83579 2 9.25 2C9.66421 2 10 2.33579 10 2.75L10 5.73291L14 5.73291V2.75ZM7 7.23291L7 12.2329C7 14.9943 9.23858 17.2329 12 17.2329C14.7614 17.2329 17 14.9943 17 12.2329L17 7.23291L7 7.23291Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/plus.svg
```
<svg
      class="fill-current"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.25012 3C5.25012 2.58579 5.58591 2.25 6.00012 2.25C6.41433 2.25 6.75012 2.58579 6.75012 3V5.25012L9.00034 5.25012C9.41455 5.25012 9.75034 5.58591 9.75034 6.00012C9.75034 6.41433 9.41455 6.75012 9.00034 6.75012H6.75012V9.00034C6.75012 9.41455 6.41433 9.75034 6.00012 9.75034C5.58591 9.75034 5.25012 9.41455 5.25012 9.00034L5.25012 6.75012H3C2.58579 6.75012 2.25 6.41433 2.25 6.00012C2.25 5.58591 2.58579 5.25012 3 5.25012H5.25012V3Z"
        fill=""
      />
    </svg>
```

## File: src/icons/shooting-star.svg
```
<svg
           
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3662 1.11216C20.6592 0.8193 21.134 0.819349 21.4269 1.11227C21.7198 1.4052 21.7197 1.88007 21.4268 2.17293L17.0308 6.56803C16.7379 6.8609 16.263 6.86085 15.9701 6.56792C15.6773 6.275 15.6773 5.80013 15.9702 5.50726L20.3662 1.11216ZM16.6592 2.696C16.952 2.40308 16.952 1.9282 16.659 1.63534C16.3661 1.34248 15.8913 1.34253 15.5984 1.63545L14.0987 3.13545C13.8058 3.42837 13.8059 3.90325 14.0988 4.19611C14.3917 4.48897 14.8666 4.48892 15.1595 4.196L16.6592 2.696ZM11.8343 3.45488C11.7079 3.19888 11.4472 3.0368 11.1617 3.0368C10.8762 3.0368 10.6155 3.19888 10.4892 3.45488L8.06431 8.36817L2.64217 9.15605C2.35966 9.19711 2.12495 9.39499 2.03673 9.6665C1.94851 9.93801 2.02208 10.2361 2.22651 10.4353L6.15001 14.2598L5.2238 19.66C5.17554 19.9414 5.29121 20.2258 5.52216 20.3936C5.75312 20.5614 6.05932 20.5835 6.31201 20.4506L11.1617 17.901L16.0114 20.4506C16.2641 20.5835 16.5703 20.5614 16.8013 20.3936C17.0322 20.2258 17.1479 19.9414 17.0996 19.66L16.1734 14.2598L20.0969 10.4353C20.3014 10.2361 20.3749 9.93801 20.2867 9.6665C20.1985 9.39499 19.9638 9.19711 19.6813 9.15605L14.2591 8.36817L11.8343 3.45488ZM9.23491 9.3856L11.1617 5.48147L13.0885 9.3856C13.1978 9.60696 13.4089 9.76039 13.6532 9.79588L17.9617 10.4219L14.8441 13.4609C14.6673 13.6332 14.5866 13.8814 14.6284 14.1247L15.3643 18.4158L11.5107 16.3898C11.2922 16.275 11.0312 16.275 10.8127 16.3898L6.9591 18.4158L7.69508 14.1247C7.7368 13.8814 7.65614 13.6332 7.47938 13.4609L4.36174 10.4219L8.67021 9.79588C8.91449 9.76039 9.12567 9.60696 9.23491 9.3856ZM21.6514 5.12825C21.9443 5.42111 21.9444 5.89598 21.6515 6.18891L20.1518 7.68891C19.8589 7.98183 19.3841 7.98188 19.0912 7.68901C18.7982 7.39615 18.7982 6.92128 19.091 6.62836L20.5907 5.12836C20.8836 4.83543 21.3585 4.83538 21.6514 5.12825Z"
              fill="currentColor"
            />
          </svg>
```

## File: src/icons/table.svg
```
<svg
               
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.25 5.5C3.25 4.25736 4.25736 3.25 5.5 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5ZM5.5 4.75C5.08579 4.75 4.75 5.08579 4.75 5.5V8.58325L19.25 8.58325V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H5.5ZM19.25 10.0833H15.416V13.9165H19.25V10.0833ZM13.916 10.0833L10.083 10.0833V13.9165L13.916 13.9165V10.0833ZM8.58301 10.0833H4.75V13.9165H8.58301V10.0833ZM4.75 18.5V15.4165H8.58301V19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5ZM10.083 19.25V15.4165L13.916 15.4165V19.25H10.083ZM15.416 19.25V15.4165H19.25V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15.416Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/task-icon.svg
```
<svg
                
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.75586 5.50098C7.75586 5.08676 8.09165 4.75098 8.50586 4.75098H18.4985C18.9127 4.75098 19.2485 5.08676 19.2485 5.50098L19.2485 15.4956C19.2485 15.9098 18.9127 16.2456 18.4985 16.2456H8.50586C8.09165 16.2456 7.75586 15.9098 7.75586 15.4956V5.50098ZM8.50586 3.25098C7.26322 3.25098 6.25586 4.25834 6.25586 5.50098V6.26318H5.50195C4.25931 6.26318 3.25195 7.27054 3.25195 8.51318V18.4995C3.25195 19.7422 4.25931 20.7495 5.50195 20.7495H15.4883C16.7309 20.7495 17.7383 19.7421 17.7383 18.4995L17.7383 17.7456H18.4985C19.7411 17.7456 20.7485 16.7382 20.7485 15.4956L20.7485 5.50097C20.7485 4.25833 19.7411 3.25098 18.4985 3.25098H8.50586ZM16.2383 17.7456H8.50586C7.26322 17.7456 6.25586 16.7382 6.25586 15.4956V7.76318H5.50195C5.08774 7.76318 4.75195 8.09897 4.75195 8.51318V18.4995C4.75195 18.9137 5.08774 19.2495 5.50195 19.2495H15.4883C15.9025 19.2495 16.2383 18.9137 16.2383 18.4995L16.2383 17.7456Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/time.svg
```
<svg
                            
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.04175 9.99984C3.04175 6.15686 6.1571 3.0415 10.0001 3.0415C13.8431 3.0415 16.9584 6.15686 16.9584 9.99984C16.9584 13.8428 13.8431 16.9582 10.0001 16.9582C6.1571 16.9582 3.04175 13.8428 3.04175 9.99984ZM10.0001 1.5415C5.32867 1.5415 1.54175 5.32843 1.54175 9.99984C1.54175 14.6712 5.32867 18.4582 10.0001 18.4582C14.6715 18.4582 18.4584 14.6712 18.4584 9.99984C18.4584 5.32843 14.6715 1.5415 10.0001 1.5415ZM9.99998 10.7498C9.58577 10.7498 9.24998 10.4141 9.24998 9.99984V5.4165C9.24998 5.00229 9.58577 4.6665 9.99998 4.6665C10.4142 4.6665 10.75 5.00229 10.75 5.4165V9.24984H13.3334C13.7476 9.24984 14.0834 9.58562 14.0834 9.99984C14.0834 10.4141 13.7476 10.7498 13.3334 10.7498H10.0001H9.99998Z"
                              fill="currentColor"
                            />
                          </svg>
```

## File: src/icons/trash.svg
```
<svg width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
              fill="currentColor"
            />
          </svg>
```

## File: src/icons/user-circle.svg
```
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z" fill="currentColor"/>
</svg>
```

## File: src/icons/user-line.svg
```
<svg
                            
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z"
                                  fill="currentColor"
                                />
                              </svg>
```

## File: src/icons/videos.svg
```
<svg
         
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70825 5.93126L6.70825 18.0687C6.70825 19.2416 7.9937 19.9607 8.99315 19.347L18.8765 13.2783C19.83 12.6928 19.83 11.3072 18.8765 10.7217L8.99315 4.65301C7.9937 4.03931 6.70825 4.75844 6.70825 5.93126Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
```

## File: src/mockData/mockCallData.ts
```typescript
import { CallRecord, CallType, CallStatus, SentimentCategory } from '../types/callRecord';

// Mock data array of call records
const mockCallData: CallRecord[] = [
  {
    id: 'call-001',
    clientName: 'Emma Johnson',
    clientId: '1',
    callType: 'Intake',
    dateTime: '2025-04-05T10:30:00Z',
    duration: 420, // 7 minutes
    status: 'Completed',
    sentimentScore: 0.82,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-001.mp3',
    notes: 'Client was very responsive. Completed full intake assessment. Ready to proceed with initial treatment plan.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-05T10:30:00Z',
    updatedAt: '2025-04-05T10:37:00Z'
  },
  {
    id: 'call-002',
    clientName: 'Liam Wilson',
    clientId: '2',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-04T14:15:00Z',
    duration: 385, // 6.4 minutes
    status: 'Completed',
    sentimentScore: 0.65,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-002.mp3',
    notes: 'Verified insurance coverage details. Client had some questions about deductible. Explained co-pay structure.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-04T14:15:00Z',
    updatedAt: '2025-04-04T14:21:25Z'
  },
  {
    id: 'call-003',
    clientName: 'Olivia Brown',
    clientId: '3',
    callType: 'Reminder',
    dateTime: '2025-04-04T16:00:00Z',
    duration: 180, // 3 minutes
    status: 'Completed',
    sentimentScore: 0.9,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-003.mp3',
    notes: 'Confirmed appointment for next Tuesday. Client appreciated the reminder and is looking forward to the session.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T16:00:00Z',
    updatedAt: '2025-04-04T16:03:00Z'
  },
  {
    id: 'call-004',
    clientName: 'Noah Davis',
    clientId: '4',
    callType: 'Follow-up',
    dateTime: '2025-04-05T09:00:00Z',
    duration: 325, // 5.4 minutes
    status: 'Completed',
    sentimentScore: 0.3,
    sentimentCategory: 'Negative',
    recordingUrl: '/recordings/call-004.mp3',
    notes: 'Client expressed frustration with insurance process. Resolved misunderstanding about coverage and assured client of support.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-05T09:00:00Z',
    updatedAt: '2025-04-05T09:05:25Z'
  },
  {
    id: 'call-005',
    clientName: 'Sophia Miller',
    clientId: '5',
    callType: 'Intake',
    dateTime: '2025-04-03T11:30:00Z',
    duration: 450, // 7.5 minutes
    status: 'Completed',
    sentimentScore: 0.75,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-005.mp3',
    notes: 'Completed comprehensive intake. Client provided detailed health history and asked good questions about the therapy process.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-03T11:30:00Z',
    updatedAt: '2025-04-03T11:37:30Z'
  },
  {
    id: 'call-006',
    clientName: 'James Taylor',
    clientId: '6',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-05T13:00:00Z',
    duration: 0, // 0 minutes (scheduled)
    status: 'Scheduled',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T10:15:00Z',
    updatedAt: '2025-04-04T10:15:00Z'
  },
  {
    id: 'call-007',
    clientName: 'Charlotte Anderson',
    clientId: '7',
    callType: 'Reminder',
    dateTime: '2025-04-05T15:45:00Z',
    duration: 0, // 0 minutes (scheduled)
    status: 'Scheduled',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-04T09:30:00Z',
    updatedAt: '2025-04-04T09:30:00Z'
  },
  {
    id: 'call-008',
    clientName: 'Mason Thompson',
    clientId: '8',
    callType: 'Follow-up',
    dateTime: '2025-04-02T10:00:00Z',
    duration: 240, // 4 minutes
    status: 'Completed',
    sentimentScore: 0.72,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-008.mp3',
    notes: 'Client reported good progress with treatment plan. Discussed adjustments to exercises and set next milestone goals.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-02T10:00:00Z',
    updatedAt: '2025-04-02T10:04:00Z'
  },
  {
    id: 'call-009',
    clientName: 'Ava Martin',
    clientId: '9',
    callType: 'Intake',
    dateTime: '2025-04-04T12:30:00Z',
    duration: 410, // 6.8 minutes
    status: 'Completed',
    sentimentScore: 0.68,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-009.mp3',
    notes: 'Completed initial assessment. Client has anxiety concerns and is interested in CBT approach. Recommended twice-weekly sessions initially.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T12:30:00Z',
    updatedAt: '2025-04-04T12:36:50Z'
  },
  {
    id: 'call-010',
    clientName: 'William Robinson',
    clientId: '10',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-03T09:30:00Z',
    duration: 300, // 5 minutes
    status: 'Failed',
    sentimentScore: 0.2,
    sentimentCategory: 'Negative',
    notes: 'Call dropped multiple times. Unable to verify all insurance details. Will need to reschedule.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-03T09:30:00Z',
    updatedAt: '2025-04-03T09:35:00Z'
  },
  {
    id: 'call-011',
    clientName: 'Harper Lee',
    clientId: '11',
    callType: 'Reminder',
    dateTime: '2025-04-04T11:00:00Z',
    duration: 150, // 2.5 minutes
    status: 'Completed',
    sentimentScore: 0.85,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-011.mp3',
    notes: 'Reminder for tomorrow\'s appointment. Client confirmed attendance and asked about parking options.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-04T11:00:00Z',
    updatedAt: '2025-04-04T11:02:30Z'
  },
  {
    id: 'call-012',
    clientName: 'Elijah Garcia',
    clientId: '12',
    callType: 'Follow-up',
    dateTime: '2025-04-05T14:30:00Z',
    duration: 0, // 0 minutes (in progress)
    status: 'In Progress',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-05T14:30:00Z',
    updatedAt: '2025-04-05T14:30:00Z'
  },
  {
    id: 'call-013',
    clientName: 'Mia Lewis',
    clientId: '13',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-02T13:15:00Z',
    duration: 360, // 6 minutes
    status: 'Completed',
    sentimentScore: 0.62,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-013.mp3',
    notes: 'Verified coverage for specialized therapy services. Explained out-of-network benefits and reimbursement process.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-02T13:15:00Z',
    updatedAt: '2025-04-02T13:21:00Z'
  },
  {
    id: 'call-014',
    clientName: 'Benjamin Clark',
    clientId: '14',
    callType: 'Intake',
    dateTime: '2025-04-01T09:00:00Z',
    duration: 435, // 7.25 minutes
    status: 'Completed',
    sentimentScore: 0.78,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-014.mp3',
    notes: 'Completed detailed intake assessment. Client seeking help with work-related stress. Recommended stress management program.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-01T09:00:00Z',
    updatedAt: '2025-04-01T09:07:15Z'
  },
  {
    id: 'call-015',
    clientName: 'Abigail Walker',
    clientId: '15',
    callType: 'Reminder',
    dateTime: '2025-04-03T15:30:00Z',
    duration: 120, // 2 minutes
    status: 'Canceled',
    sentimentScore: 0.4,
    sentimentCategory: 'Negative',
    notes: 'Client canceled upcoming appointment due to scheduling conflict. Will call back to reschedule.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-03T15:30:00Z',
    updatedAt: '2025-04-03T15:32:00Z'
  }
];

export default mockCallData;
```

## File: src/pages/AuthPages/AuthPageLayout.tsx
```typescript
import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <img
                  width={231}
                  height={48}
                  src="/images/logo/auth-logo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                Free and Open-Source Tailwind CSS Admin Dashboard Template
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
```

## File: src/pages/Calls/CallsDashboard.tsx
```typescript
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
```

## File: src/pages/Clients/ClientsPatients.tsx
```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { PlusIcon } from '../../icons';
import ClientsTable from '../../components/clients/ClientsTable';
import { AddClientModal } from '../../components/clients/AddClientModal';
import { getAllClients, searchClients } from '../../services/clientService';
import { Client } from '../../types/client';

// Custom debounce function to avoid lodash dependency
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

export default function ClientsPatients() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Use our custom debounce hook
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Fetch clients when search term changes
  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await searchClients(debouncedSearchTerm);
        setClients(data);
        setError(null);
      } catch (err) {
        setError('Failed to load clients');
        console.error('Error fetching clients:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRetry = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllClients();
      setClients(data);
      setError(null);
    } catch (err) {
      setError('Failed to load clients');
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddClient = () => {
    setIsAddModalOpen(true);
  };

  const handleClientAdded = useCallback(async () => {
    setIsAddModalOpen(false);
    await handleRetry();
  }, [handleRetry]);

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Clients/Patients - YUNA Dashboard</title>
      </Helmet>

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-gray-900 dark:text-white">
            Clients and Patients
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search clients..."
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
            <button
              onClick={handleAddClient}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 dark:hover:bg-brand-400"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Client</span>
            </button>
          </div>
        </div>

        <ClientsTable 
          clients={clients} 
          loading={loading} 
          error={error} 
          onRetry={handleRetry} 
          searchQuery={searchTerm}
          onAddClient={handleAddClient}
        />
        
        <AddClientModal 
          isOpen={isAddModalOpen} 
          onClose={handleCloseModal} 
          onClientAdded={handleClientAdded}
        />
      </div>
    </>
  );
}
```

## File: src/services/callService.ts
```typescript
import mockCallData from '../mockData/mockCallData';
import { CallRecord, CallType, CallStatus } from '../types/callRecord';

// Helper function to randomly delay between min and max milliseconds
const randomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Call service with simulated API functions
const callService = {
  // Get all calls with optional filtering
  getCalls(filters?: { searchTerm?: string; status?: string; callType?: string }): Promise<CallRecord[]> {
    return new Promise((resolve) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        let filteredCalls = [...mockCallData];
        
        // Apply filters if provided
        if (filters) {
          // Filter by search term
          if (filters.searchTerm) {
            const searchTerm = filters.searchTerm.toLowerCase();
            filteredCalls = filteredCalls.filter(
              (call) => call.clientName.toLowerCase().includes(searchTerm)
            );
          }
          
          // Filter by status
          if (filters.status) {
            filteredCalls = filteredCalls.filter(
              (call) => call.status === filters.status
            );
          }
          
          // Filter by call type
          if (filters.callType) {
            filteredCalls = filteredCalls.filter(
              (call) => call.callType === filters.callType
            );
          }
        }
        
        // Sort by date (newest first)
        filteredCalls.sort((a, b) => 
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
        );
        
        resolve(filteredCalls);
      }, randomDelay(500, 1500));
    });
  },

  // Get call details by ID
  getCallDetails(callId: string): Promise<{ callRecord: CallRecord | null; notes: string }> {
    return new Promise((resolve) => {
      // Simulate API delay (700-1200ms)
      setTimeout(() => {
        const call = mockCallData.find((c) => c.id === callId);
        
        if (call) {
          // Expand the notes with more detailed content for the modal view
          const detailedNotes = call.notes 
            ? call.notes + '\n\nAdditional AI-generated insights: Client tone of voice indicated ' +
              (call.sentimentCategory === 'Positive' 
                ? 'optimism and engagement throughout the call.' 
                : call.sentimentCategory === 'Neutral'
                  ? 'factual and straightforward communication style.'
                  : 'some concerns that may need follow-up attention.')
            : 'No notes available for this call.';
          
          resolve({
            callRecord: call,
            notes: detailedNotes
          });
        } else {
          resolve({
            callRecord: null,
            notes: 'Call record not found.'
          });
        }
      }, randomDelay(700, 1200));
    });
  },

  // Initiate a new AI call
  initiateAICall(clientId: string, callType: string): Promise<{ success: boolean; message: string; callId?: string }> {
    return new Promise((resolve) => {
      // Simulate API delay (800-1500ms)
      setTimeout(() => {
        // Simulate 90% success rate
        const isSuccess = Math.random() < 0.9;
        
        if (isSuccess) {
          const newCallId = `call-${Math.random().toString(36).substring(2, 8)}`;
          
          resolve({
            success: true,
            message: `AI call successfully initiated with client ${clientId} for ${callType}.`,
            callId: newCallId
          });
        } else {
          resolve({
            success: false,
            message: 'Unable to initiate call. Please try again or contact support.'
          });
        }
      }, randomDelay(800, 1500));
    });
  },

  // Get call statistics
  getCallStats(): Promise<{ 
    total: number; 
    completedToday: number; 
    scheduled: number;
    sentimentBreakdown: { positive: number; neutral: number; negative: number };
  }> {
    return new Promise((resolve) => {
      // Simulate API delay (600-1000ms)
      setTimeout(() => {
        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        
        // Count calls by status and date
        const total = mockCallData.length;
        
        const completedToday = mockCallData.filter(
          call => call.status === 'Completed' && 
                 call.dateTime.startsWith(today)
        ).length;
        
        const scheduled = mockCallData.filter(
          call => call.status === 'Scheduled'
        ).length;
        
        // Count calls by sentiment
        const sentimentBreakdown = {
          positive: mockCallData.filter(call => call.sentimentCategory === 'Positive').length,
          neutral: mockCallData.filter(call => call.sentimentCategory === 'Neutral').length,
          negative: mockCallData.filter(call => call.sentimentCategory === 'Negative').length
        };
        
        resolve({
          total,
          completedToday,
          scheduled,
          sentimentBreakdown
        });
      }, randomDelay(600, 1000));
    });
  }
};

export default callService;
```

## File: src/services/clientService.ts
```typescript
import { Client } from '../types/client';

// Mock data array of clients/patients
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    avatar: '/images/user/user-17.jpg',
    status: 'Active',
    completion: 75,
    timeline: {
      days: 12,
      averageDays: 15,
    },
    insurance: {
      status: 'Verified',
      verificationDate: '2025-03-15T10:30:00Z',
    },
    provider: {
      type: 'Family Support',
      patientType: 'Client',
      specialtyFocus: 'Early Intervention'
    },
    lastUpdated: '2025-04-02T09:15:00Z',
  },
  {
    id: '2',
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
    avatar: '/images/user/user-18.jpg',
    status: 'Pending',
    completion: 30,
    timeline: {
      days: 5,
      averageDays: 15,
    },
    insurance: {
      status: 'Pending',
    },
    provider: {
      type: 'Therapy Group',
      patientType: 'Patient',
      specialtyFocus: 'Cognitive Behavioral'
    },
    lastUpdated: '2025-04-01T14:20:00Z',
  },
  {
    id: '3',
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    avatar: '/images/user/user-19.jpg',
    status: 'At Risk',
    completion: 15,
    timeline: {
      days: 28,
      averageDays: 15,
    },
    insurance: {
      status: 'Failed',
    },
    provider: {
      type: 'Medical Care',
      patientType: 'Patient',
    },
    lastUpdated: '2025-03-29T11:45:00Z',
  },
  {
    id: '4',
    name: 'Noah Davis',
    email: 'noah.davis@example.com',
    status: 'Completed',
    completion: 100,
    timeline: {
      days: 14,
      averageDays: 15,
    },
    insurance: {
      status: 'Verified',
      verificationDate: '2025-03-10T08:20:00Z',
    },
    provider: {
      type: 'Specialist',
      patientType: 'Patient',
      specialtyFocus: 'Pediatric'
    },
    lastUpdated: '2025-03-28T16:30:00Z',
  },
  {
    id: '5',
    name: 'Sophia Miller',
    email: 'sophia.miller@example.com',
    avatar: '/images/user/user-20.jpg',
    status: 'On Hold',
    completion: 50,
    timeline: {
      days: 10,
      averageDays: 15,
    },
    insurance: {
      status: 'Pending',
    },
    provider: {
      type: 'Family Support',
      patientType: 'Family',
      specialtyFocus: 'Group Therapy'
    },
    lastUpdated: '2025-03-27T13:10:00Z',
  },
  {
    id: '6',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    status: 'Active',
    completion: 85,
    timeline: {
      days: 8,
      averageDays: 15,
    },
    insurance: {
      status: 'Verified',
      verificationDate: '2025-03-22T09:45:00Z',
    },
    provider: {
      type: 'Therapy Group',
      patientType: 'Group',
      specialtyFocus: 'Addiction Recovery'
    },
    lastUpdated: '2025-03-25T10:20:00Z',
  },
];

// Client service with simulated API functions
const clientService = {
  // Get all clients with optional filtering
  getClients(searchQuery = ''): Promise<Client[]> {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        if (!searchQuery) {
          resolve(mockClients);
        } else {
          const lowercasedQuery = searchQuery.toLowerCase();
          const filteredClients = mockClients.filter(
            (client) =>
              client.name.toLowerCase().includes(lowercasedQuery) ||
              client.email.toLowerCase().includes(lowercasedQuery)
          );
          resolve(filteredClients);
        }
      }, 500); // 500ms delay to simulate network request
    });
  },

  // Get a specific client by ID
  getClientById(id: string): Promise<Client | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const client = mockClients.find((c) => c.id === id);
        resolve(client);
      }, 300);
    });
  },

  // Add a new client (in a real app, this would send a POST request)
  addClient(client: Omit<Client, 'id'>): Promise<Client> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newClient = {
          ...client,
          id: Math.random().toString(36).substring(2, 9), // Generate a random ID
          lastUpdated: new Date().toISOString(),
        };
        // In a real app, this would make a POST request and update the database
        // Here we're just returning the new client as if it was saved
        resolve(newClient as Client);
      }, 700);
    });
  },

  // Update a client (in a real app, this would send a PUT request)
  updateClient(id: string, updates: Partial<Client>): Promise<Client | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const clientIndex = mockClients.findIndex((c) => c.id === id);
        if (clientIndex !== -1) {
          const updatedClient = {
            ...mockClients[clientIndex],
            ...updates,
            lastUpdated: new Date().toISOString(),
          };
          // In a real app, this would make a PUT request and update the database
          resolve(updatedClient);
        } else {
          resolve(undefined);
        }
      }, 700);
    });
  },
};

// Export individual functions for direct import
export const getAllClients = (): Promise<Client[]> => {
  return clientService.getClients();
};

export const searchClients = (query: string): Promise<Client[]> => {
  return clientService.getClients(query);
};

export const addClient = (client: Partial<Client>): Promise<Client> => {
  return clientService.addClient(client as Omit<Client, 'id'>);
};

export const updateClient = (id: string, updates: Partial<Client>): Promise<Client | undefined> => {
  return clientService.updateClient(id, updates);
};

export const getClientById = (id: string): Promise<Client | undefined> => {
  return clientService.getClientById(id);
};

// Export the entire service as default for backward compatibility
export { clientService as default };
```

## File: src/svg.d.ts
```typescript
declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
```

## File: src/types/callRecord.ts
```typescript
// Define call type options
export type CallType = 'Intake' | 'Eligibility & Benefits' | 'Reminder' | 'Follow-up';

// Define call status options
export type CallStatus = 'Completed' | 'Scheduled' | 'In Progress' | 'Failed' | 'Canceled';

// Define sentiment categories
export type SentimentCategory = 'Positive' | 'Neutral' | 'Negative';

// Main interface for call record data
export interface CallRecord {
  id: string;
  clientName: string;
  clientId: string;
  callType: CallType;
  dateTime: string; // ISO date string
  duration: number; // Duration in seconds
  status: CallStatus;
  sentimentScore: number; // Score from 0 to 1
  sentimentCategory: SentimentCategory;
  recordingUrl?: string; // Optional URL to recording
  notes?: string; // Optional call notes/transcript
  agentId?: string; // Optional ID of AI agent that made the call
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
```

## File: src/types/client.ts
```typescript
// Define status options for clients/patients
export type ClientStatus = 'Active' | 'Pending' | 'At Risk' | 'On Hold' | 'Completed';

// Define insurance verification status options
export type InsuranceStatus = 'Verified' | 'Pending' | 'Failed';

// Define provider types
export type ProviderType = 'Family Support' | 'Therapy Group' | 'Medical Care' | 'Specialist';

// Define patient/client types
export type PatientType = 'Patient' | 'Client' | 'Family' | 'Group';

// Main interface for client/patient data
export interface Client {
  id: string;
  name: string;
  email: string;
  avatar?: string; // Optional avatar image URL
  status: ClientStatus;
  completion: number; // Percentage from 0-100
  timeline: {
    days: number;
    averageDays: number;
  };
  insurance: {
    status: InsuranceStatus;
    verificationDate?: string; // Optional date when verified
  };
  provider: {
    type: ProviderType;
    patientType: PatientType;
    specialtyFocus?: string; // Optional specialty focus area
  };
  lastUpdated: string; // ISO date string
  tags?: string[]; // Optional tags for the client
}
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: src/components/auth/SignUpForm.tsx
```typescript
import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign up!
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="21"
                  className="fill-current"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
                </svg>
                Sign up with X
              </button>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                  Or
                </span>
              </div>
            </div>
            <form>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* <!-- First Name --> */}
                  <div className="sm:col-span-1">
                    <Label>
                      First Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                    />
                  </div>
                  {/* <!-- Last Name --> */}
                  <div className="sm:col-span-1">
                    <Label>
                      Last Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                {/* <!-- Email --> */}
                <div>
                  <Label>
                    Email<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                {/* <!-- Password --> */}
                <div>
                  <Label>
                    Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <!-- Checkbox --> */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    By creating an account means you agree to the{" "}
                    <span className="text-gray-800 dark:text-white/90">
                      Terms and Conditions,
                    </span>{" "}
                    and our{" "}
                    <span className="text-gray-800 dark:text-white">
                      Privacy Policy
                    </span>
                  </p>
                </div>
                {/* <!-- Button --> */}
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Already have an account? {""}
                <Link
                  to="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/charts/bar/BarChartOne.tsx
```typescript
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function BarChartOne() {
  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };
  const series = [
    {
      name: "Sales",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];
  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartOne" className="min-w-[1000px]">
        <Chart options={options} series={series} type="bar" height={180} />
      </div>
    </div>
  );
}
```

## File: src/components/charts/line/LineChartOne.tsx
```typescript
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function LineChartOne() {
  const options: ApexOptions = {
    legend: {
      show: false, // Hide legend
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#9CB9FF"], // Define line colors
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line", // Set the chart type to 'line'
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: "straight", // Define the line style (straight, smooth, or step)
      width: [2, 2], // Line width for each dataset
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Size of the marker points
      strokeColors: "#fff", // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        format: "dd MMM yyyy", // Format for x-axis tooltip
      },
    },
    xaxis: {
      type: "category", // Category-based x-axis
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: false, // Disable tooltip for x-axis points
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", // Adjust font size for y-axis labels
          colors: ["#6B7280"], // Color of the labels
        },
      },
      title: {
        text: "", // Remove y-axis title
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: "Revenue",
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];
  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartEight" className="min-w-[1000px]">
        <Chart options={options} series={series} type="area" height={310} />
      </div>
    </div>
  );
}
```

## File: src/components/common/ChartTab.tsx
```typescript
import { useState } from "react";

const ChartTab: React.FC = () => {
  const [selected, setSelected] = useState<
    "optionOne" | "optionTwo" | "optionThree"
  >("optionOne");

  const getButtonClass = (option: "optionOne" | "optionTwo" | "optionThree") =>
    selected === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
      <button
        onClick={() => setSelected("optionOne")}
        className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionOne"
        )}`}
      >
        Monthly
      </button>

      <button
        onClick={() => setSelected("optionTwo")}
        className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionTwo"
        )}`}
      >
        Quarterly
      </button>

      <button
        onClick={() => setSelected("optionThree")}
        className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${getButtonClass(
          "optionThree"
        )}`}
      >
        Annually
      </button>
    </div>
  );
};

export default ChartTab;
```

## File: src/components/common/ComponentCard.tsx
```typescript
interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 py-5">
        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
```

## File: src/components/common/GridShape.tsx
```typescript
export default function GridShape() {
  return (
    <>
      <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
        <img src="/images/shape/grid-01.svg" alt="grid" />
      </div>
      <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
        <img src="/images/shape/grid-01.svg" alt="grid" />
      </div>
    </>
  );
}
```

## File: src/components/common/PageBreadCrumb.tsx
```typescript
import { Link } from "react-router";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2
        className="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              to="/"
            >
              Home
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
```

## File: src/components/common/PageMeta.tsx
```typescript
import { HelmetProvider, Helmet } from "react-helmet-async";

const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
```

## File: src/components/ecommerce/CountryMap.tsx
```typescript
// react plugin for creating vector maps
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

// Define the component props
interface CountryMapProps {
  mapColor?: string;
}

const CountryMap: React.FC<CountryMapProps> = ({ mapColor }) => {
  return (
    <VectorMap
      map={worldMill}
      backgroundColor="transparent"
      markerStyle={{
        initial: {
          fill: "#465FFF",
          r: 4, // Custom radius for markers
        } as any, // Type assertion to bypass strict CSS property checks
      }}
      markersSelectable={true}
      markers={[
        {
          latLng: [37.2580397, -104.657039],
          name: "United States",
          style: {
            fill: "#465FFF",
            borderWidth: 1,
            borderColor: "white",
            stroke: "#383f47",
          },
        },
        {
          latLng: [20.7504374, 73.7276105],
          name: "India",
          style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" },
        },
        {
          latLng: [53.613, -11.6368],
          name: "United Kingdom",
          style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" },
        },
        {
          latLng: [-25.0304388, 115.2092761],
          name: "Sweden",
          style: {
            fill: "#465FFF",
            borderWidth: 1,
            borderColor: "white",
            strokeOpacity: 0,
          },
        },
      ]}
      zoomOnScroll={false}
      zoomMax={12}
      zoomMin={1}
      zoomAnimate={true}
      zoomStep={1.5}
      regionStyle={{
        initial: {
          fill: mapColor || "#D0D5DD",
          fillOpacity: 1,
          fontFamily: "Outfit",
          stroke: "none",
          strokeWidth: 0,
          strokeOpacity: 0,
        },
        hover: {
          fillOpacity: 0.7,
          cursor: "pointer",
          fill: "#465fff",
          stroke: "none",
        },
        selected: {
          fill: "#465FFF",
        },
        selectedHover: {},
      }}
      regionLabelStyle={{
        initial: {
          fill: "#35373e",
          fontWeight: 500,
          fontSize: "13px",
          stroke: "none",
        },
        hover: {},
        selected: {},
        selectedHover: {},
      }}
    />
  );
};

export default CountryMap;
```

## File: src/components/form/form-elements/FileInputExample.tsx
```typescript
import ComponentCard from "../../common/ComponentCard";
import FileInput from "../input/FileInput";
import Label from "../Label";

export default function FileInputExample() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <ComponentCard title="File Input">
      <div>
        <Label>Upload file</Label>
        <FileInput onChange={handleFileChange} className="custom-class" />
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/InputGroup.tsx
```typescript
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

export default function InputGroup() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };
  return (
    <ComponentCard title="Input Group">
      <div className="space-y-6">
        <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
        </div>{" "}
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="end"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/InputStates.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";
export default function InputStates() {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const handleEmailTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailTwo(value);
    validateEmail(value);
  };
  return (
    <ComponentCard
      title="Input States"
      desc="Validation styles for error, success and disabled states on form controls."
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            hint={error ? "This is an invalid email address." : ""}
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={emailTwo}
            success={!error}
            onChange={handleEmailTwoChange}
            placeholder="Enter your email"
            hint={!error ? "This is an success message." : ""}
          />
        </div>

        {/* Disabled Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="text"
            value="disabled@example.com"
            disabled={true}
            placeholder="Disabled email"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/RadioButtons.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Radio from "../input/Radio";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState<string>("option2");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <ComponentCard title="Radio Buttons">
      <div className="flex flex-wrap items-center gap-8">
        <Radio
          id="radio1"
          name="group1"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
          label="Default"
        />
        <Radio
          id="radio2"
          name="group1"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
          label="Selected"
        />
        <Radio
          id="radio3"
          name="group1"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
          label="Disabled"
          disabled={true}
        />
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/ToggleSwitch.tsx
```typescript
import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };
  return (
    <ComponentCard title="Toggle switch input">
      <div className="flex gap-4">
        <Switch
          label="Default"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Checked"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="Disabled" disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label="Default"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="Checked"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="Disabled" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/Form.tsx
```typescript
import { FC, ReactNode, FormEvent } from "react";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
}

const Form: FC<FormProps> = ({ onSubmit, children, className }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        onSubmit(event);
      }}
      className={` ${className}`} // Default spacing between form fields
    >
      {children}
    </form>
  );
};

export default Form;
```

## File: src/components/form/input/Radio.tsx
```typescript
interface RadioProps {
  id: string; // Unique ID for the radio button
  name: string; // Radio group name
  value: string; // Value of the radio button
  checked: boolean; // Whether the radio button is checked
  label: string; // Label for the radio button
  onChange: (value: string) => void; // Handler for value change
  className?: string; // Optional additional classes
  disabled?: boolean; // Optional disabled state for the radio button
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <label
      htmlFor={id}
      className={`relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium ${
        disabled
          ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
          : "text-gray-700 dark:text-gray-400"
      } ${className}`}
    >
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={() => !disabled && onChange(value)} // Prevent onChange when disabled
        className="sr-only"
        disabled={disabled} // Disable input
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] ${
          checked
            ? "border-brand-500 bg-brand-500"
            : "bg-transparent border-gray-300 dark:border-gray-700"
        } ${
          disabled
            ? "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700"
            : ""
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full bg-white ${
            checked ? "block" : "hidden"
          }`}
        ></span>
      </span>
      {label}
    </label>
  );
};

export default Radio;
```

## File: src/components/form/input/RadioSm.tsx
```typescript
interface RadioProps {
  id: string; // Unique ID for the radio button
  name: string; // Group name for the radio button
  value: string; // Value of the radio button
  checked: boolean; // Whether the radio button is checked
  label: string; // Label text for the radio button
  onChange: (value: string) => void; // Handler for when the radio button is toggled
  className?: string; // Optional custom classes for styling
}

const RadioSm: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  className = "",
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer select-none items-center text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      <span className="relative">
        {/* Hidden Input */}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="sr-only"
        />
        {/* Styled Radio Circle */}
        <span
          className={`mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${
            checked
              ? "border-brand-500 bg-brand-500"
              : "bg-transparent border-gray-300 dark:border-gray-700"
          }`}
        >
          {/* Inner Dot */}
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              checked ? "bg-white" : "bg-white dark:bg-[#1e2636]"
            }`}
          ></span>
        </span>
      </span>
      {label}
    </label>
  );
};

export default RadioSm;
```

## File: src/components/form/switch/Switch.tsx
```typescript
import { useState } from "react";

interface SwitchProps {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: "blue" | "gray"; // Added prop to toggle color theme
}

const Switch: React.FC<SwitchProps> = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
  color = "blue", // Default to blue color
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  const switchColors =
    color === "blue"
      ? {
          background: isChecked
            ? "bg-brand-500 "
            : "bg-gray-200 dark:bg-white/10", // Blue version
          knob: isChecked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        }
      : {
          background: isChecked
            ? "bg-gray-800 dark:bg-white/10"
            : "bg-gray-200 dark:bg-white/10", // Gray version
          knob: isChecked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        };

  return (
    <label
      className={`flex cursor-pointer select-none items-center gap-3 text-sm font-medium ${
        disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-400"
      }`}
      onClick={handleToggle} // Toggle when the label itself is clicked
    >
      <div className="relative">
        <div
          className={`block transition duration-150 ease-linear h-6 w-11 rounded-full ${
            disabled
              ? "bg-gray-100 pointer-events-none dark:bg-gray-800"
              : switchColors.background
          }`}
        ></div>
        <div
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow-theme-sm duration-150 ease-linear transform ${switchColors.knob}`}
        ></div>
      </div>
      {label}
    </label>
  );
};

export default Switch;
```

## File: src/components/tables/BasicTables/BasicTableOne.tsx
```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    projectName: "Technology",
    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "24.9K",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    projectName: "Blog Writing",
    team: {
      images: ["/images/user/user-27.jpg"],
    },
    budget: "12.7K",
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    projectName: "Social Media",
    team: {
      images: [
        "/images/user/user-28.jpg",
        "/images/user/user-29.jpg",
        "/images/user/user-30.jpg",
      ],
    },
    budget: "2.8K",
    status: "Cancel",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    projectName: "Website",
    team: {
      images: [
        "/images/user/user-31.jpg",
        "/images/user/user-32.jpg",
        "/images/user/user-33.jpg",
      ],
    },
    budget: "4.5K",
    status: "Active",
  },
];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Project Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Team
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Budget
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.projectName}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order.team.images.map((teamImage, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                      >
                        <img
                          width={24}
                          height={24}
                          src={teamImage}
                          alt={`Team member ${index + 1}`}
                          className="w-full size-6"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.budget}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
```

## File: src/components/ui/alert/Alert.tsx
```typescript
import { Link } from "react-router";

interface AlertProps {
  variant: "success" | "error" | "warning" | "info"; // Alert type
  title: string; // Title of the alert
  message: string; // Message of the alert
  showLink?: boolean; // Whether to show the "Learn More" link
  linkHref?: string; // Link URL
  linkText?: string; // Link text
}

const Alert: React.FC<AlertProps> = ({
  variant,
  title,
  message,
  showLink = false,
  linkHref = "#",
  linkText = "Learn more",
}) => {
  // Tailwind classes for each variant
  const variantClasses = {
    success: {
      container:
        "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
      icon: "text-success-500",
    },
    error: {
      container:
        "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
      icon: "text-error-500",
    },
    warning: {
      container:
        "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
      icon: "text-warning-500",
    },
    info: {
      container:
        "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
      icon: "text-blue-light-500",
    },
  };

  // Icon for each variant
  const icons = {
    success: (
      <svg
        className="fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.70186 12.0001C3.70186 7.41711 7.41711 3.70186 12.0001 3.70186C16.5831 3.70186 20.2984 7.41711 20.2984 12.0001C20.2984 16.5831 16.5831 20.2984 12.0001 20.2984C7.41711 20.2984 3.70186 16.5831 3.70186 12.0001ZM12.0001 1.90186C6.423 1.90186 1.90186 6.423 1.90186 12.0001C1.90186 17.5772 6.423 22.0984 12.0001 22.0984C17.5772 22.0984 22.0984 17.5772 22.0984 12.0001C22.0984 6.423 17.5772 1.90186 12.0001 1.90186ZM15.6197 10.7395C15.9712 10.388 15.9712 9.81819 15.6197 9.46672C15.2683 9.11525 14.6984 9.11525 14.347 9.46672L11.1894 12.6243L9.6533 11.0883C9.30183 10.7368 8.73198 10.7368 8.38051 11.0883C8.02904 11.4397 8.02904 12.0096 8.38051 12.3611L10.553 14.5335C10.7217 14.7023 10.9507 14.7971 11.1894 14.7971C11.428 14.7971 11.657 14.7023 11.8257 14.5335L15.6197 10.7395Z"
        />
      </svg>
    ),
    error: (
      <svg
        className="fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3499 12.0004C20.3499 16.612 16.6115 20.3504 11.9999 20.3504C7.38832 20.3504 3.6499 16.612 3.6499 12.0004C3.6499 7.38881 7.38833 3.65039 11.9999 3.65039C16.6115 3.65039 20.3499 7.38881 20.3499 12.0004ZM11.9999 22.1504C17.6056 22.1504 22.1499 17.6061 22.1499 12.0004C22.1499 6.3947 17.6056 1.85039 11.9999 1.85039C6.39421 1.85039 1.8499 6.3947 1.8499 12.0004C1.8499 17.6061 6.39421 22.1504 11.9999 22.1504ZM13.0008 16.4753C13.0008 15.923 12.5531 15.4753 12.0008 15.4753L11.9998 15.4753C11.4475 15.4753 10.9998 15.923 10.9998 16.4753C10.9998 17.0276 11.4475 17.4753 11.9998 17.4753L12.0008 17.4753C12.5531 17.4753 13.0008 17.0276 13.0008 16.4753ZM11.9998 6.62898C12.414 6.62898 12.7498 6.96476 12.7498 7.37898L12.7498 13.0555C12.7498 13.4697 12.414 13.8055 11.9998 13.8055C11.5856 13.8055 11.2498 13.4697 11.2498 13.0555L11.2498 7.37898C11.2498 6.96476 11.5856 6.62898 11.9998 6.62898Z"
          fill="#F04438"
        />
      </svg>
    ),
    warning: (
      <svg
        className="fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z"
          fill=""
        />
      </svg>
    ),
    info: (
      <svg
        className="fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.6501 11.9996C3.6501 7.38803 7.38852 3.64961 12.0001 3.64961C16.6117 3.64961 20.3501 7.38803 20.3501 11.9996C20.3501 16.6112 16.6117 20.3496 12.0001 20.3496C7.38852 20.3496 3.6501 16.6112 3.6501 11.9996ZM12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM10.9992 7.52468C10.9992 8.07697 11.4469 8.52468 11.9992 8.52468H12.0002C12.5525 8.52468 13.0002 8.07697 13.0002 7.52468C13.0002 6.9724 12.5525 6.52468 12.0002 6.52468H11.9992C11.4469 6.52468 10.9992 6.9724 10.9992 7.52468ZM12.0002 17.371C11.586 17.371 11.2502 17.0352 11.2502 16.621V10.9445C11.2502 10.5303 11.586 10.1945 12.0002 10.1945C12.4144 10.1945 12.7502 10.5303 12.7502 10.9445V16.621C12.7502 17.0352 12.4144 17.371 12.0002 17.371Z"
          fill=""
        />
      </svg>
    ),
  };

  return (
    <div
      className={`rounded-xl border p-4 ${variantClasses[variant].container}`}
    >
      <div className="flex items-start gap-3">
        <div className={`-mt-0.5 ${variantClasses[variant].icon}`}>
          {icons[variant]}
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            {title}
          </h4>

          <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>

          {showLink && (
            <Link
              to={linkHref}
              className="inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400"
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
```

## File: src/components/ui/avatar/Avatar.tsx
```typescript
interface AvatarProps {
  src: string; // URL of the avatar image
  alt?: string; // Alt text for the avatar
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"; // Avatar size
  status?: "online" | "offline" | "busy" | "none"; // Status indicator
}

const sizeClasses = {
  xsmall: "h-6 w-6 max-w-6",
  small: "h-8 w-8 max-w-8",
  medium: "h-10 w-10 max-w-10",
  large: "h-12 w-12 max-w-12",
  xlarge: "h-14 w-14 max-w-14",
  xxlarge: "h-16 w-16 max-w-16",
};

const statusSizeClasses = {
  xsmall: "h-1.5 w-1.5 max-w-1.5",
  small: "h-2 w-2 max-w-2",
  medium: "h-2.5 w-2.5 max-w-2.5",
  large: "h-3 w-3 max-w-3",
  xlarge: "h-3.5 w-3.5 max-w-3.5",
  xxlarge: "h-4 w-4 max-w-4",
};

const statusColorClasses = {
  online: "bg-success-500",
  offline: "bg-error-400",
  busy: "bg-warning-500",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
  status = "none",
}) => {
  return (
    <div className={`relative  rounded-full ${sizeClasses[size]}`}>
      {/* Avatar Image */}
      <img src={src} alt={alt} className="object-cover rounded-full" />

      {/* Status Indicator */}
      {status !== "none" && (
        <span
          className={`absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900 ${
            statusSizeClasses[size]
          } ${statusColorClasses[status] || ""}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
```

## File: src/components/ui/badge/Badge.tsx
```typescript
type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface BadgeProps {
  variant?: BadgeVariant; // Light or solid variant
  size?: BadgeSize; // Badge size
  color?: BadgeColor; // Badge color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Badge content
}

const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium";

  // Define size styles
  const sizeStyles = {
    sm: "text-theme-xs", // Smaller padding and font size
    md: "text-sm", // Default padding and font size
  };

  // Define color styles for variants
  const variants = {
    light: {
      primary:
        "bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400",
      success:
        "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
      error:
        "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
      warning:
        "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
      info: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
      light: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
      dark: "bg-gray-500 text-white dark:bg-white/5 dark:text-white",
    },
    solid: {
      primary: "bg-brand-500 text-white dark:text-white",
      success: "bg-success-500 text-white dark:text-white",
      error: "bg-error-500 text-white dark:text-white",
      warning: "bg-warning-500 text-white dark:text-white",
      info: "bg-blue-light-500 text-white dark:text-white",
      light: "bg-gray-400 dark:bg-white/5 text-white dark:text-white/80",
      dark: "bg-gray-700 text-white dark:text-white",
    },
  };

  // Get styles based on size and color variant
  const sizeClass = sizeStyles[size];
  const colorStyles = variants[variant][color];

  return (
    <span className={`${baseStyles} ${sizeClass} ${colorStyles}`}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </span>
  );
};

export default Badge;
```

## File: src/components/ui/dropdown/Dropdown.tsx
```typescript
import type React from "react";
import { useEffect, useRef } from "react";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".dropdown-toggle")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`absolute z-40  right-0 mt-2  rounded-xl border border-gray-200 bg-white  shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${className}`}
    >
      {children}
    </div>
  );
};
```

## File: src/components/ui/dropdown/DropdownItem.tsx
```typescript
import type React from "react";
import { Link } from "react-router";

interface DropdownItemProps {
  tag?: "a" | "button";
  to?: string;
  onClick?: () => void;
  onItemClick?: () => void;
  baseClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  tag = "button",
  to,
  onClick,
  onItemClick,
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  className = "",
  children,
}) => {
  const combinedClasses = `${baseClassName} ${className}`.trim();

  const handleClick = (event: React.MouseEvent) => {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
  };

  if (tag === "a" && to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={combinedClasses}>
      {children}
    </button>
  );
};
```

## File: src/components/ui/images/ResponsiveImage.tsx
```typescript
export default function ResponsiveImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src="/images/grid-image/image-01.png"
          alt="Cover"
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
```

## File: src/components/ui/images/ThreeColumnImageGrid.tsx
```typescript
export default function ThreeColumnImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <div>
        <img
          src="/images/grid-image/image-04.png"
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>

      <div>
        <img
          src="/images/grid-image/image-05.png"
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>

      <div>
        <img
          src="/images/grid-image/image-06.png"
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
```

## File: src/components/ui/images/TwoColumnImageGrid.tsx
```typescript
export default function TwoColumnImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <img
          src="/images/grid-image/image-02.png"
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>

      <div>
        <img
          src="/images/grid-image/image-03.png"
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
```

## File: src/components/ui/modal/index.tsx
```typescript
import { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean; // New prop to control close button visibility
  isFullscreen?: boolean; // Default to false for backwards compatibility
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true, // Default to true for backwards compatibility
  isFullscreen = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contentClasses = isFullscreen
    ? "w-full h-full"
    : "relative w-full rounded-3xl bg-white  dark:bg-gray-900";

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999">
      {!isFullscreen && (
        <div
          className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
          onClick={onClose}
        ></div>
      )}
      <div
        ref={modalRef}
        className={`${contentClasses}  ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
```

## File: src/components/ui/table/index.tsx
```typescript
import { ReactNode } from "react";

// Props for Table
interface TableProps {
  children: ReactNode; // Table content (thead, tbody, etc.)
  className?: string; // Optional className for styling
}

// Props for TableHeader
interface TableHeaderProps {
  children: ReactNode; // Header row(s)
  className?: string; // Optional className for styling
}

// Props for TableBody
interface TableBodyProps {
  children: ReactNode; // Body row(s)
  className?: string; // Optional className for styling
}

// Props for TableRow
interface TableRowProps {
  children: ReactNode; // Cells (th or td)
  className?: string; // Optional className for styling
}

// Props for TableCell
interface TableCellProps {
  children: ReactNode; // Cell content
  isHeader?: boolean; // If true, renders as <th>, otherwise <td>
  className?: string; // Optional className for styling
}

// Table Component
const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={`min-w-full  ${className}`}>{children}</table>;
};

// TableHeader Component
const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

// TableBody Component
const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

// TableRow Component
const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  className,
}) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={` ${className}`}>{children}</CellTag>;
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
```

## File: src/components/ui/videos/AspectRatioVideo.tsx
```typescript
type AspectRatioVideoProps = {
  videoUrl: string; // URL of the video
  aspectRatio?: string; // Aspect ratio in the format "width/height", default is "16/9"
  title?: string; // Video title, default is "Embedded Video"
};

const AspectRatioVideo: React.FC<AspectRatioVideoProps> = ({
  videoUrl,
  aspectRatio = "video", // Default aspect ratio
  title = "Embedded Video",
}) => {
  return (
    <div className={`aspect-${aspectRatio} overflow-hidden rounded-lg`}>
      <iframe
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default AspectRatioVideo;
```

## File: src/components/ui/videos/OneIsToOne.tsx
```typescript
export default function OneIsToOne() {
  return (
    <div className="overflow-hidden rounded-lg aspect-square">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
```

## File: src/context/SidebarContext.tsx
```typescript
import { createContext, useContext, useState, useEffect } from "react";

type SidebarContextType = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: string | null;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsHovered: (isHovered: boolean) => void;
  setActiveItem: (item: string | null) => void;
  toggleSubmenu: (item: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const toggleSubmenu = (item: string) => {
    setOpenSubmenu((prev) => (prev === item ? null : item));
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded: isMobile ? false : isExpanded,
        isMobileOpen,
        isHovered,
        activeItem,
        openSubmenu,
        toggleSidebar,
        toggleMobileSidebar,
        setIsHovered,
        setActiveItem,
        toggleSubmenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
```

## File: src/icons/alert.svg
```
<svg
  className="size-5"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z"
    fill="#F79009"
  />
</svg>
```

## File: src/icons/angle-down.svg
```
<svg
                   
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                          fill="currentColor"
                        />
                      </svg>
```

## File: src/icons/angle-up.svg
```
<svg
                      className="w-2 h-[1.5px]"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                          fill="currentColor"
                        />
                      </svg>
```

## File: src/icons/bolt.svg
```
<svg className="size-6"
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.814 4.75L4.78516 16.0352H11.1859L11.1859 23.25L19.2148 11.9648L12.814 11.9648V4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
```

## File: src/icons/calendar.svg
```
<svg  className="size-6" width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z"
                  fill="currentColor"
                />
              </svg>
```

## File: src/icons/check-circle.svg
```
<svg
  className="size-5"
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 22 22"
  fill="none"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2.70186 11.0001C2.70186 6.41711 6.41711 2.70186 11.0001 2.70186C15.5831 2.70186 19.2984 6.41711 19.2984 11.0001C19.2984 15.5831 15.5831 19.2984 11.0001 19.2984C6.41711 19.2984 2.70186 15.5831 2.70186 11.0001ZM11.0001 0.901855C5.423 0.901855 0.901855 5.423 0.901855 11.0001C0.901855 16.5772 5.423 21.0984 11.0001 21.0984C16.5772 21.0984 21.0984 16.5772 21.0984 11.0001C21.0984 5.423 16.5772 0.901855 11.0001 0.901855ZM14.6197 9.73951C14.9712 9.38804 14.9712 8.81819 14.6197 8.46672C14.2683 8.11525 13.6984 8.11525 13.347 8.46672L10.1894 11.6243L8.6533 10.0883C8.30183 9.7368 7.73198 9.7368 7.38051 10.0883C7.02904 10.4397 7.02904 11.0096 7.38051 11.3611L9.55295 13.5335C9.72174 13.7023 9.95065 13.7971 10.1894 13.7971C10.428 13.7971 10.657 13.7023 10.8257 13.5335L14.6197 9.73951Z"
    fill="#12B76A"
  />
</svg>
```

## File: src/icons/close.svg
```
<svg
      className="size-6
      "
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z"
        fill="currentColor"
      />
    </svg>
```

## File: src/icons/grid.svg
```
<svg
        
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z"
                fill="currentColor"
              />
            </svg>
```

## File: src/icons/index.ts
```typescript
import { ReactComponent as PlusIcon } from "./plus.svg?react";
import { ReactComponent as CloseIcon } from "./close.svg?react";
import { ReactComponent as BoxIcon } from "./box.svg?react";
import { ReactComponent as CheckCircleIcon } from "./check-circle.svg?react";
import { ReactComponent as AlertIcon } from "./alert.svg?react";
import { ReactComponent as InfoIcon } from "./info.svg?react";
import { ReactComponent as ErrorIcon } from "./info-error.svg?react";
import { ReactComponent as BoltIcon } from "./bolt.svg?react";
import { ReactComponent as ArrowUpIcon } from "./arrow-up.svg?react";
import { ReactComponent as ArrowDownIcon } from "./arrow-down.svg?react";
import { ReactComponent as FolderIcon } from "./folder.svg?react";
import { ReactComponent as VideoIcon } from "./videos.svg?react";
import { ReactComponent as AudioIcon } from "./audio.svg?react";
import { ReactComponent as GridIcon } from "./grid.svg?react";
import { ReactComponent as FileIcon } from "./file.svg?react";
import { ReactComponent as DownloadIcon } from "./download.svg?react";
import { ReactComponent as ArrowRightIcon } from "./arrow-right.svg?react";
import { ReactComponent as GroupIcon } from "./group.svg?react";
import { ReactComponent as BoxIconLine } from "./box-line.svg?react";
import { ReactComponent as ShootingStarIcon } from "./shooting-star.svg?react";
import { ReactComponent as DollarLineIcon } from "./dollar-line.svg?react";
import { ReactComponent as TrashBinIcon } from "./trash.svg?react";
import { ReactComponent as AngleUpIcon } from "./angle-up.svg?react";
import { ReactComponent as AngleDownIcon } from "./angle-down.svg?react";
import { ReactComponent as PencilIcon } from "./pencil.svg?react";
import { ReactComponent as CheckLineIcon } from "./check-line.svg?react";
import { ReactComponent as CloseLineIcon } from "./close-line.svg?react";
import { ReactComponent as ChevronDownIcon } from "./chevron-down.svg?react";
import { ReactComponent as ChevronUpIcon } from "./chevron-up.svg?react";
import { ReactComponent as PaperPlaneIcon } from "./paper-plane.svg?react";
import { ReactComponent as LockIcon } from "./lock.svg?react";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg?react";
import { ReactComponent as UserIcon } from "./user-line.svg?react";
import { ReactComponent as CalenderIcon } from "./calender-line.svg?react";
import { ReactComponent as EyeIcon } from "./eye.svg?react";
import { ReactComponent as EyeCloseIcon } from "./eye-close.svg?react";
import { ReactComponent as TimeIcon } from "./time.svg?react";
import { ReactComponent as CopyIcon } from "./copy.svg?react";
import { ReactComponent as ChevronLeftIcon } from "./chevron-left.svg?react";
import { ReactComponent as UserCircleIcon } from "./user-circle.svg?react";
import { ReactComponent as TaskIcon } from "./task-icon.svg?react";
import { ReactComponent as ListIcon } from "./list.svg?react";
import { ReactComponent as TableIcon } from "./table.svg?react";
import { ReactComponent as PageIcon } from "./page.svg?react";
import { ReactComponent as PieChartIcon } from "./pie-chart.svg?react";
import { ReactComponent as BoxCubeIcon } from "./box-cube.svg?react";
import { ReactComponent as PlugInIcon } from "./plug-in.svg?react";
import { ReactComponent as DocsIcon } from "./docs.svg?react";
import { ReactComponent as MailIcon } from "./mail-line.svg?react";
import { ReactComponent as HorizontaLDots } from "./horizontal-dots.svg?react";
import { ReactComponent as ChatIcon } from "./chat.svg?react";
import { ReactComponent as MoreDotIcon } from "./moredot.svg?react";
import { ReactComponent as AlertHexaIcon } from "./alert-hexa.svg?react";
import { ReactComponent as ErrorHexaIcon } from "./info-hexa.svg?react";

export {
  ErrorHexaIcon,
  AlertHexaIcon,
  MoreDotIcon,
  DownloadIcon,
  FileIcon,
  GridIcon,
  AudioIcon,
  VideoIcon,
  BoltIcon,
  PlusIcon,
  BoxIcon,
  CloseIcon,
  CheckCircleIcon,
  AlertIcon,
  InfoIcon,
  ErrorIcon,
  ArrowUpIcon,
  FolderIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  GroupIcon,
  BoxIconLine,
  ShootingStarIcon,
  DollarLineIcon,
  TrashBinIcon,
  AngleUpIcon,
  AngleDownIcon,
  PencilIcon,
  CheckLineIcon,
  CloseLineIcon,
  ChevronDownIcon,
  PaperPlaneIcon,
  EnvelopeIcon,
  LockIcon,
  UserIcon,
  CalenderIcon,
  EyeIcon,
  EyeCloseIcon,
  TimeIcon,
  CopyIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  TaskIcon,
  ListIcon,
  TableIcon,
  PageIcon,
  PieChartIcon,
  BoxCubeIcon,
  PlugInIcon,
  DocsIcon,
  MailIcon,
  HorizontaLDots,
  ChevronUpIcon,
  ChatIcon,
};
```

## File: src/icons/info-hexa.svg
```
<svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M8.12454 4.53906L15.8736 4.53906C16.1416 4.53906 16.3892 4.68201 16.5231 4.91406L20.3977 11.625C20.5317 11.857 20.5317 12.1429 20.3977 12.375L16.5231 19.0859C16.3892 19.3179 16.1416 19.4609 15.8736 19.4609H8.12454C7.85659 19.4609 7.609 19.3179 7.47502 19.0859L3.60048 12.375C3.46651 12.1429 3.46651 11.857 3.60048 11.625L7.47502 4.91406C7.609 4.68201 7.85659 4.53906 8.12454 4.53906ZM15.8736 3.03906H8.12454C7.3207 3.03906 6.57791 3.46791 6.17599 4.16406L2.30144 10.875C1.89952 11.5711 1.89952 12.4288 2.30144 13.125L6.17599 19.8359C6.57791 20.532 7.32069 20.9609 8.12454 20.9609H15.8736C16.6775 20.9609 17.4203 20.532 17.8222 19.8359L21.6967 13.125C22.0987 12.4288 22.0987 11.5711 21.6967 10.875L17.8222 4.16406C17.4203 3.46791 16.6775 3.03906 15.8736 3.03906ZM12.0007 7.81075C12.4149 7.81075 12.7507 8.14653 12.7507 8.56075V12.7803C12.7507 13.1945 12.4149 13.5303 12.0007 13.5303C11.5865 13.5303 11.2507 13.1945 11.2507 12.7803V8.56075C11.2507 8.14653 11.5865 7.81075 12.0007 7.81075ZM10.9998 15.3303C10.9998 14.778 11.4475 14.3303 11.9998 14.3303H12.0005C12.5528 14.3303 13.0005 14.778 13.0005 15.3303C13.0005 15.8826 12.5528 16.3303 12.0005 16.3303H11.9998C11.4475 16.3303 10.9998 15.8826 10.9998 15.3303Z" fill="#D92D20"/>
</svg>
```

## File: src/icons/info.svg
```
<svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.6501 11.9996C3.6501 7.38803 7.38852 3.64961 12.0001 3.64961C16.6117 3.64961 20.3501 7.38803 20.3501 11.9996C20.3501 16.6112 16.6117 20.3496 12.0001 20.3496C7.38852 20.3496 3.6501 16.6112 3.6501 11.9996ZM12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM10.9992 7.52468C10.9992 8.07697 11.4469 8.52468 11.9992 8.52468H12.0002C12.5525 8.52468 13.0002 8.07697 13.0002 7.52468C13.0002 6.9724 12.5525 6.52468 12.0002 6.52468H11.9992C11.4469 6.52468 10.9992 6.9724 10.9992 7.52468ZM12.0002 17.371C11.586 17.371 11.2502 17.0352 11.2502 16.621V10.9445C11.2502 10.5303 11.586 10.1945 12.0002 10.1945C12.4144 10.1945 12.7502 10.5303 12.7502 10.9445V16.621C12.7502 17.0352 12.4144 17.371 12.0002 17.371Z" fill="#0BA5EC"/>
</svg>
```

## File: src/pages/Dashboard/Home.tsx
```typescript
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
```

## File: src/pages/OtherPage/NotFound.tsx
```typescript
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="React.js 404 Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js 404 Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
        <GridShape />
        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
          <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
            ERROR
          </h1>

          <img src="/images/error/404.svg" alt="404" className="dark:hidden" />
          <img
            src="/images/error/404-dark.svg"
            alt="404"
            className="hidden dark:block"
          />

          <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            We can’t seem to find the page you are looking for!
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Back to Home Page
          </Link>
        </div>
        {/* <!-- Footer --> */}
        <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
          &copy; {new Date().getFullYear()} - YUNA Dashboard
        </p>
      </div>
    </>
  );
}
```

## File: src/pages/UiElements/Videos.tsx
```typescript
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FourIsToThree from "../../components/ui/videos/FourIsToThree";
import OneIsToOne from "../../components/ui/videos/OneIsToOne";
import SixteenIsToNine from "../../components/ui/videos/SixteenIsToNine";
import TwentyOneIsToNine from "../../components/ui/videos/TwentyOneIsToNine";

export default function Videos() {
  return (
    <>
      <PageMeta
        title="React.js Videos Tabs | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Videos page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Videos" />
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 16:9">
            <SixteenIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 4:3">
            <FourIsToThree />
          </ComponentCard>
        </div>
        <div className="space-y-5 sm:space-y-6">
          <ComponentCard title="Video Ratio 21:9">
            <TwentyOneIsToNine />
          </ComponentCard>
          <ComponentCard title="Video Ratio 1:1">
            <OneIsToOne />
          </ComponentCard>
        </div>
      </div>
    </>
  );
}
```

## File: src/components/common/ThemeToggleButton.tsx
```typescript
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      <svg
        className="hidden dark:block"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="dark:hidden"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
```

## File: src/components/ecommerce/DemographicCard.tsx
```typescript
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customers Demographic
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Number of customer based on country
          </p>
        </div>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl dark:border-gray-800 sm:px-6">
        <div
          id="mapOne"
          className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
        >
          <CountryMap />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src="./images/country/country-01.svg" alt="usa" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                USA
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                2,379 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              79%
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src="./images/country/country-02.svg" alt="france" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                France
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                589 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
              23%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/ecommerce/EcommerceMetrics.tsx
```typescript
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            New Inquiries
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Scheduled Appointments
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
```

## File: src/components/ecommerce/MonthlySalesChart.tsx
```typescript
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import { useState } from "react";

export default function MonthlySalesChart() {
  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };
  const series = [
    {
      name: "Sales",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Monthly Inquiries
        </h3>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          <Chart options={options} series={series} type="bar" height={180} />
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/ecommerce/MonthlyTarget.tsx
```typescript
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";

export default function MonthlyTarget() {
  const series = [75.55];
  const options: ApexOptions = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1D2939",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#465FFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Monthly Admissions Goal
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              Target you’ve set for each month
            </p>
          </div>
          <div className="relative inline-block">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
            </button>
            <Dropdown
              isOpen={isOpen}
              onClose={closeDropdown}
              className="w-40 p-2"
            >
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                View More
              </DropdownItem>
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                Delete
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div className="relative ">
          <div className="max-h-[330px]" id="chartDarkStyle">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={330}
            />
          </div>

          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
            +10%
          </span>
        </div>
        <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
          You earn $3287 today, it's higher than last month. Keep up your good
          work!
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Target
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            $20K
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"
                fill="#D92D20"
              />
            </svg>
          </p>
        </div>

        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Revenue
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            $20K
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                fill="#039855"
              />
            </svg>
          </p>
        </div>

        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Today
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            $20K
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                fill="#039855"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/ecommerce/StatisticsChart.tsx
```typescript
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

export default function StatisticsChart() {
  const options: ApexOptions = {
    legend: {
      show: false, // Hide legend
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#9CB9FF"], // Define line colors
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line", // Set the chart type to 'line'
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: "straight", // Define the line style (straight, smooth, or step)
      width: [2, 2], // Line width for each dataset
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Size of the marker points
      strokeColors: "#fff", // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        format: "dd MMM yyyy", // Format for x-axis tooltip
      },
    },
    xaxis: {
      type: "category", // Category-based x-axis
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: false, // Disable tooltip for x-axis points
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", // Adjust font size for y-axis labels
          colors: ["#6B7280"], // Color of the labels
        },
      },
      title: {
        text: "", // Remove y-axis title
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: "Revenue",
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Funnel Progress
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab />
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
```

## File: src/components/form/form-elements/DropZone.tsx
```typescript
import ComponentCard from "../../common/ComponentCard";
import { useDropzone } from "react-dropzone";
// import Dropzone from "react-dropzone";

const DropzoneComponent: React.FC = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    // Handle file uploads here
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });
  return (
    <ComponentCard title="Dropzone">
      <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
        <form
          {...getRootProps()}
          className={`dropzone rounded-xl   border-dashed border-gray-300 p-7 lg:p-10
        ${
          isDragActive
            ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
            : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
        }
      `}
          id="demo-upload"
        >
          {/* Hidden Input */}
          <input {...getInputProps()} />

          <div className="dz-message flex flex-col items-center m-0!">
            {/* Icon Container */}
            <div className="mb-[22px] flex justify-center">
              <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                <svg
                  className="fill-current"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                  />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
              {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
            </h4>

            <span className=" text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
              Drag and drop your PNG, JPG, WebP, SVG images here or browse
            </span>

            <span className="font-medium underline text-theme-sm text-brand-500">
              Browse File
            </span>
          </div>
        </form>
      </div>
    </ComponentCard>
  );
};

export default DropzoneComponent;
```

## File: src/components/form/form-elements/SelectInputs.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const multiOptions = [
    { value: "1", text: "Option 1", selected: false },
    { value: "2", text: "Option 2", selected: false },
    { value: "3", text: "Option 3", selected: false },
    { value: "4", text: "Option 4", selected: false },
    { value: "5", text: "Option 5", selected: false },
  ];
  return (
    <ComponentCard title="Select Inputs">
      <div className="space-y-6">
        <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select Option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label="Multiple Select Options"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/TextAreaInput.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <ComponentCard title="Textarea input field">
      <div className="space-y-6">
        {/* Default TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        {/* Disabled TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea rows={6} disabled />
        </div>

        {/* Error TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="Please enter a valid message."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/group-input/PhoneInput.tsx
```typescript
import { useState } from "react";

interface CountryCode {
  code: string;
  label: string;
}

interface PhoneInputProps {
  countries: CountryCode[];
  placeholder?: string;
  onChange?: (phoneNumber: string) => void;
  selectPosition?: "start" | "end"; // New prop for dropdown position
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  countries,
  placeholder = "+1 (555) 000-0000",
  onChange,
  selectPosition = "start", // Default position is 'start'
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [phoneNumber, setPhoneNumber] = useState<string>("+1");

  const countryCodes: Record<string, string> = countries.reduce(
    (acc, { code, label }) => ({ ...acc, [code]: label }),
    {}
  );

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    setPhoneNumber(countryCodes[newCountry]);
    if (onChange) {
      onChange(countryCodes[newCountry]);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    if (onChange) {
      onChange(newPhoneNumber);
    }
  };

  return (
    <div className="relative flex">
      {/* Dropdown position: Start */}
      {selectPosition === "start" && (
        <div className="absolute">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="appearance-none bg-none rounded-l-lg border-0 border-r border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
          >
            {countries.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
              >
                {country.code}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none bg-none right-3 dark:text-gray-400">
            <svg
              className="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Input field */}
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        className={`dark:bg-dark-900 h-11 w-full ${
          selectPosition === "start" ? "pl-[84px]" : "pr-[84px]"
        } rounded-lg border border-gray-300 bg-transparent py-3 px-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`}
      />

      {/* Dropdown position: End */}
      {selectPosition === "end" && (
        <div className="absolute right-0">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="appearance-none bg-none rounded-r-lg border-0 border-l border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
          >
            {countries.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
              >
                {country.code}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none right-3 dark:text-gray-400">
            <svg
              className="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
```

## File: src/components/form/input/Checkbox.tsx
```typescript
import type React from "react";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  className?: string;
  id?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  id,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 group cursor-pointer ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      }`}
    >
      <div className="relative w-5 h-5">
        <input
          id={id}
          type="checkbox"
          className={`w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          ${className}`}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {checked && (
          <svg
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {disabled && (
          <svg
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="#E4E7EC"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
```

## File: src/components/form/input/FileInput.tsx
```typescript
import { FC } from "react";

interface FileInputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FC<FileInputProps> = ({ className, onChange }) => {
  return (
    <input
      type="file"
      className={`focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${className}`}
      onChange={onChange}
    />
  );
};

export default FileInput;
```

## File: src/components/form/input/InputField.tsx
```typescript
import type React from "react";
import type { FC } from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
}) => {
  let inputClasses = ` h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
  } else if (error) {
    inputClasses += `  border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else if (success) {
    inputClasses += `  border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800`;
  }

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={inputClasses}
      />

      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
```

## File: src/components/form/input/TextArea.tsx
```typescript
import React from "react";

interface TextareaProps {
  placeholder?: string; // Placeholder text
  rows?: number; // Number of rows
  value?: string; // Current value
  onChange?: (value: string) => void; // Change handler
  className?: string; // Additional CSS classes
  disabled?: boolean; // Disabled state
  error?: boolean; // Error state
  hint?: string; // Hint text to display
}

const TextArea: React.FC<TextareaProps> = ({
  placeholder = "Enter your message", // Default placeholder
  rows = 3, // Default number of rows
  value = "", // Default value
  onChange, // Callback for changes
  className = "", // Additional custom styles
  disabled = false, // Disabled state
  error = false, // Error state
  hint = "", // Default hint text
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  let textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden ${className} `;

  if (disabled) {
    textareaClasses += ` bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed opacity40 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    textareaClasses += ` bg-transparent  border-gray-300 focus:border-error-300 focus:ring-3 focus:ring-error-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800`;
  } else {
    textareaClasses += ` bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={textareaClasses}
      />
      {hint && (
        <p
          className={`mt-2 text-sm ${
            error ? "text-error-500" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default TextArea;
```

## File: src/components/form/Label.tsx
```typescript
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        twMerge(
          "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
          className,
        ),
      )}
    >
      {children}
    </label>
  );
};

export default Label;
```

## File: src/components/form/MultiSelect.tsx
```typescript
import type React from "react";
import { useState } from "react";

interface Option {
  value: string;
  text: string;
}

interface MultiSelectProps {
  label: string;
  options: Option[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  disabled?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  defaultSelected = [],
  onChange,
  disabled = false,
}) => {
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue: string) => {
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((value) => value !== optionValue)
      : [...selectedOptions, optionValue];

    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const removeOption = (value: string) => {
    const newSelectedOptions = selectedOptions.filter((opt) => opt !== value);
    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const selectedValuesText = selectedOptions.map(
    (value) => options.find((option) => option.value === value)?.text || ""
  );

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
        {label}
      </label>

      <div className="relative z-20 inline-block w-full">
        <div className="relative flex flex-col items-center">
          <div onClick={toggleDropdown} className="w-full">
            <div className="mb-2 flex h-11 rounded-lg border border-gray-300 py-1.5 pl-3 pr-3 shadow-theme-xs outline-hidden transition focus:border-brand-300 focus:shadow-focus-ring dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-300">
              <div className="flex flex-wrap flex-auto gap-2">
                {selectedValuesText.length > 0 ? (
                  selectedValuesText.map((text, index) => (
                    <div
                      key={index}
                      className="group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pl-2.5 pr-2 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"
                    >
                      <span className="flex-initial max-w-full">{text}</span>
                      <div className="flex flex-row-reverse flex-auto">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            removeOption(selectedOptions[index]);
                          }}
                          className="pl-2 text-gray-500 cursor-pointer group-hover:text-gray-400 dark:text-gray-400"
                        >
                          <svg
                            className="fill-current"
                            role="button"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <input
                    placeholder="Select option"
                    className="w-full h-full p-1 pr-2 text-sm bg-transparent border-0 outline-hidden appearance-none placeholder:text-gray-800 focus:border-0 focus:outline-hidden focus:ring-0 dark:placeholder:text-white/90"
                    readOnly
                    value="Select option"
                  />
                )}
              </div>
              <div className="flex items-center py-1 pl-1 pr-1 w-7">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-5 h-5 text-gray-700 outline-hidden cursor-pointer focus:outline-hidden dark:text-gray-400"
                >
                  <svg
                    className={`stroke-current ${isOpen ? "rotate-180" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div
              className="absolute left-0 z-40 w-full overflow-y-auto bg-white rounded-lg shadow-sm top-full max-h-select dark:bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`hover:bg-primary/5 w-full cursor-pointer rounded-t border-b border-gray-200 dark:border-gray-800`}
                    onClick={() => handleSelect(option.value)}
                  >
                    <div
                      className={`relative flex w-full items-center p-2 pl-2 ${
                        selectedOptions.includes(option.value)
                          ? "bg-primary/10"
                          : ""
                      }`}
                    >
                      <div className="mx-2 leading-6 text-gray-800 dark:text-white/90">
                        {option.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
```

## File: src/components/form/Select.tsx
```typescript
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
}) => {
  // Manage the selected value
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value); // Trigger parent handler
  };

  return (
    <select
      className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
        selectedValue
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
      } ${className}`}
      value={selectedValue}
      onChange={handleChange}
    >
      {/* Placeholder option */}
      <option
        value=""
        disabled
        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
      >
        {placeholder}
      </option>
      {/* Map over options */}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
```

## File: src/components/header/NotificationDropdown.tsx
```typescript
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Link } from "react-router";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Notification
          </h5>
          <button
            onClick={toggleDropdown}
            className="text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {/* Example notification items */}
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-02.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block  text-theme-sm text-gray-500 dark:text-gray-400 space-x-1">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Terry Franci
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-03.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-04.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              to="/"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-05.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
              onItemClick={closeDropdown}
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-02.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Terry Franci
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>5 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-03.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Alena Franci
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>8 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-04.jpg"
                  alt="User"
                  className="w-full overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block  space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Jocelyn Kenter
                  </span>
                  <span> requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>15 min ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
            >
              <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                <img
                  width={40}
                  height={40}
                  src="/images/user/user-05.jpg"
                  alt="User"
                  className="overflow-hidden rounded-full"
                />
                <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
              </span>

              <span className="block">
                <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Brandon Philips
                  </span>
                  <span>requests permission to change</span>
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    Project - Nganter App
                  </span>
                </span>

                <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                  <span>Project</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>1 hr ago</span>
                </span>
              </span>
            </DropdownItem>
          </li>
          {/* Add more items as needed */}
        </ul>
        <Link
          to="/"
          className="block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          View All Notifications
        </Link>
      </Dropdown>
    </div>
  );
}
```

## File: src/components/ui/button/Button.tsx
```typescript
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: (e?: MouseEvent) => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
    outline:
      "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
```

## File: src/components/ui/videos/FourIsToThree.tsx
```typescript
export default function FourIsToThree() {
  return (
    <div className="aspect-4/3 overflow-hidden rounded-lg">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
```

## File: src/components/ui/videos/SixteenIsToNine.tsx
```typescript
export default function SixteenIsToNine() {
  return (
    <div className="aspect-4/3 overflow-hidden rounded-lg">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
```

## File: src/components/ui/videos/TwentyOneIsToNine.tsx
```typescript
export default function TwentyOneIsToNine() {
  return (
    <div className="aspect-21/9 overflow-hidden rounded-lg">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
```

## File: src/components/UserProfile/UserAddressCard.tsx
```typescript
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  United States.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  City/State
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Phoenix, Arizona, United States.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Postal Code
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  ERT 2489
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  TAX ID
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  AS4568384
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Address
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Country</Label>
                  <Input type="text" value="United States" />
                </div>

                <div>
                  <Label>City/State</Label>
                  <Input type="text" value="Arizona, United States." />
                </div>

                <div>
                  <Label>Postal Code</Label>
                  <Input type="text" value="ERT 2489" />
                </div>

                <div>
                  <Label>TAX ID</Label>
                  <Input type="text" value="AS4568384" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
```

## File: src/components/UserProfile/UserMetaCard.tsx
```typescript
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <img src="/images/user/owner.jpg" alt="user" />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Musharof Chowdhury
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team Manager
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Arizona, United States
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <a
                href="https://www.facebook.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6666 11.2503H13.7499L14.5833 7.91699H11.6666V6.25033C11.6666 5.39251 11.6666 4.58366 13.3333 4.58366H14.5833V1.78374C14.3118 1.7477 13.2858 1.66699 12.2023 1.66699C9.94025 1.66699 8.33325 3.04771 8.33325 5.58342V7.91699H5.83325V11.2503H8.33325V18.3337H11.6666V11.2503Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="https://x.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1708 1.875H17.9274L11.9049 8.75833L18.9899 18.125H13.4424L9.09742 12.4442L4.12578 18.125H1.36745L7.80912 10.7625L1.01245 1.875H6.70078L10.6283 7.0675L15.1708 1.875ZM14.2033 16.475H15.7308L5.87078 3.43833H4.23162L14.2033 16.475Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/pimjo"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z"
                    fill=""
                  />
                </svg>
              </a>

              <a
                href="https://instagram.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8567 1.66699C11.7946 1.66854 12.2698 1.67351 12.6805 1.68573L12.8422 1.69102C13.0291 1.69766 13.2134 1.70599 13.4357 1.71641C14.3224 1.75738 14.9273 1.89766 15.4586 2.10391C16.0078 2.31572 16.4717 2.60183 16.9349 3.06503C17.3974 3.52822 17.6836 3.99349 17.8961 4.54141C18.1016 5.07197 18.2419 5.67753 18.2836 6.56433C18.2935 6.78655 18.3015 6.97088 18.3081 7.15775L18.3133 7.31949C18.3255 7.73011 18.3311 8.20543 18.3328 9.1433L18.3335 9.76463C18.3336 9.84055 18.3336 9.91888 18.3336 9.99972L18.3335 10.2348L18.333 10.8562C18.3314 11.794 18.3265 12.2694 18.3142 12.68L18.3089 12.8417C18.3023 13.0286 18.294 13.213 18.2836 13.4351C18.2426 14.322 18.1016 14.9268 17.8961 15.458C17.6842 16.0074 17.3974 16.4713 16.9349 16.9345C16.4717 17.397 16.0057 17.6831 15.4586 17.8955C14.9273 18.1011 14.3224 18.2414 13.4357 18.2831C13.2134 18.293 13.0291 18.3011 12.8422 18.3076L12.6805 18.3128C12.2698 18.3251 11.7946 18.3306 10.8567 18.3324L10.2353 18.333C10.1594 18.333 10.0811 18.333 10.0002 18.333H9.76516L9.14375 18.3325C8.20591 18.331 7.7306 18.326 7.31997 18.3137L7.15824 18.3085C6.97136 18.3018 6.78703 18.2935 6.56481 18.2831C5.67801 18.2421 5.07384 18.1011 4.5419 17.8955C3.99328 17.6838 3.5287 17.397 3.06551 16.9345C2.60231 16.4713 2.3169 16.0053 2.1044 15.458C1.89815 14.9268 1.75856 14.322 1.7169 13.4351C1.707 13.213 1.69892 13.0286 1.69238 12.8417L1.68714 12.68C1.67495 12.2694 1.66939 11.794 1.66759 10.8562L1.66748 9.1433C1.66903 8.20543 1.67399 7.73011 1.68621 7.31949L1.69151 7.15775C1.69815 6.97088 1.70648 6.78655 1.7169 6.56433C1.75786 5.67683 1.89815 5.07266 2.1044 4.54141C2.3162 3.9928 2.60231 3.52822 3.06551 3.06503C3.5287 2.60183 3.99398 2.31641 4.5419 2.10391C5.07315 1.89766 5.67731 1.75808 6.56481 1.71641C6.78703 1.70652 6.97136 1.69844 7.15824 1.6919L7.31997 1.68666C7.7306 1.67446 8.20591 1.6689 9.14375 1.6671L10.8567 1.66699ZM10.0002 5.83308C7.69781 5.83308 5.83356 7.69935 5.83356 9.99972C5.83356 12.3021 7.69984 14.1664 10.0002 14.1664C12.3027 14.1664 14.1669 12.3001 14.1669 9.99972C14.1669 7.69732 12.3006 5.83308 10.0002 5.83308ZM10.0002 7.49974C11.381 7.49974 12.5002 8.61863 12.5002 9.99972C12.5002 11.3805 11.3813 12.4997 10.0002 12.4997C8.6195 12.4997 7.50023 11.3809 7.50023 9.99972C7.50023 8.61897 8.61908 7.49974 10.0002 7.49974ZM14.3752 4.58308C13.8008 4.58308 13.3336 5.04967 13.3336 5.62403C13.3336 6.19841 13.8002 6.66572 14.3752 6.66572C14.9496 6.66572 15.4169 6.19913 15.4169 5.62403C15.4169 5.04967 14.9488 4.58236 14.3752 4.58308Z"
                    fill=""
                  />
                </svg>
              </a>
            </div>
          </div>
          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      value="https://www.facebook.com/PimjoHQ"
                    />
                  </div>

                  <div>
                    <Label>X.com</Label>
                    <Input type="text" value="https://x.com/PimjoHQ" />
                  </div>

                  <div>
                    <Label>Linkedin</Label>
                    <Input
                      type="text"
                      value="https://www.linkedin.com/company/pimjo"
                    />
                  </div>

                  <div>
                    <Label>Instagram</Label>
                    <Input type="text" value="https://instagram.com/PimjoHQ" />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>First Name</Label>
                    <Input type="text" value="Musharof" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" value="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" value="randomuser@pimjo.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Phone</Label>
                    <Input type="text" value="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label>Bio</Label>
                    <Input type="text" value="Team Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
```

## File: src/layout/AppLayout.tsx
```typescript
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
```

## File: src/pages/AuthPages/SignIn.tsx
```typescript
import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
```

## File: src/pages/AuthPages/SignUp.tsx
```typescript
import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="React.js SignUp Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js SignUp Tables Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
```

## File: src/pages/Blank.tsx
```typescript
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Blank() {
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Blank Page" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Card Title Here
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Start putting content on grids or panels, you can also use different
            combinations of grids.Please check out the dashboard and other pages
          </p>
        </div>
      </div>
    </div>
  );
}
```

## File: src/pages/Forms/FormElements.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
import RadioButtons from "../../components/form/form-elements/RadioButtons";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import InputStates from "../../components/form/form-elements/InputStates";
import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
```

## File: src/pages/Tables/BasicTables.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
```

## File: src/pages/UiElements/Avatars.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Avatar from "../../components/ui/avatar/Avatar";
import PageMeta from "../../components/common/PageMeta";

export default function Avatars() {
  return (
    <>
      <PageMeta
        title="React.js Avatars Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Avatars Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Avatars" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Default Avatar">
          {/* Default Avatar (No Status) */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Avatar src="/images/user/user-01.jpg" size="xsmall" />
            <Avatar src="/images/user/user-01.jpg" size="small" />
            <Avatar src="/images/user/user-01.jpg" size="medium" />
            <Avatar src="/images/user/user-01.jpg" size="large" />
            <Avatar src="/images/user/user-01.jpg" size="xlarge" />
            <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
          </div>
        </ComponentCard>
        <ComponentCard title="Avatar with online indicator">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Avatar
              src="/images/user/user-01.jpg"
              size="xsmall"
              status="online"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="small"
              status="online"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="medium"
              status="online"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="large"
              status="online"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xlarge"
              status="online"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xxlarge"
              status="online"
            />
          </div>
        </ComponentCard>
        <ComponentCard title="Avatar with Offline indicator">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Avatar
              src="/images/user/user-01.jpg"
              size="xsmall"
              status="offline"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="small"
              status="offline"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="medium"
              status="offline"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="large"
              status="offline"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xlarge"
              status="offline"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xxlarge"
              status="offline"
            />
          </div>
        </ComponentCard>{" "}
        <ComponentCard title="Avatar with busy indicator">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Avatar
              src="/images/user/user-01.jpg"
              size="xsmall"
              status="busy"
            />
            <Avatar src="/images/user/user-01.jpg" size="small" status="busy" />
            <Avatar
              src="/images/user/user-01.jpg"
              size="medium"
              status="busy"
            />
            <Avatar src="/images/user/user-01.jpg" size="large" status="busy" />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xlarge"
              status="busy"
            />
            <Avatar
              src="/images/user/user-01.jpg"
              size="xxlarge"
              status="busy"
            />
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
```

## File: src/pages/UiElements/Badges.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Badge from "../../components/ui/badge/Badge";
import { PlusIcon } from "../../icons";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";

export default function Badges() {
  return (
    <div>
      <PageMeta
        title="React.js Badges Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Badges Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Badges" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="With Light Background">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="light" color="primary">
              Primary
            </Badge>
            <Badge variant="light" color="success">
              Success
            </Badge>{" "}
            <Badge variant="light" color="error">
              Error
            </Badge>{" "}
            <Badge variant="light" color="warning">
              Warning
            </Badge>{" "}
            <Badge variant="light" color="info">
              Info
            </Badge>
            <Badge variant="light" color="light">
              Light
            </Badge>
            <Badge variant="light" color="dark">
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="With Solid Background">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="solid" color="primary">
              Primary
            </Badge>
            <Badge variant="solid" color="success">
              Success
            </Badge>{" "}
            <Badge variant="solid" color="error">
              Error
            </Badge>{" "}
            <Badge variant="solid" color="warning">
              Warning
            </Badge>{" "}
            <Badge variant="solid" color="info">
              Info
            </Badge>
            <Badge variant="solid" color="light">
              Light
            </Badge>
            <Badge variant="solid" color="dark">
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Light Background with Left Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" startIcon={<PlusIcon />}>
              Primary
            </Badge>
            <Badge variant="light" color="success" startIcon={<PlusIcon />}>
              Success
            </Badge>{" "}
            <Badge variant="light" color="error" startIcon={<PlusIcon />}>
              Error
            </Badge>{" "}
            <Badge variant="light" color="warning" startIcon={<PlusIcon />}>
              Warning
            </Badge>{" "}
            <Badge variant="light" color="info" startIcon={<PlusIcon />}>
              Info
            </Badge>
            <Badge variant="light" color="light" startIcon={<PlusIcon />}>
              Light
            </Badge>
            <Badge variant="light" color="dark" startIcon={<PlusIcon />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Solid Background with Left Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" startIcon={<PlusIcon />}>
              Primary
            </Badge>
            <Badge variant="solid" color="success" startIcon={<PlusIcon />}>
              Success
            </Badge>{" "}
            <Badge variant="solid" color="error" startIcon={<PlusIcon />}>
              Error
            </Badge>{" "}
            <Badge variant="solid" color="warning" startIcon={<PlusIcon />}>
              Warning
            </Badge>{" "}
            <Badge variant="solid" color="info" startIcon={<PlusIcon />}>
              Info
            </Badge>
            <Badge variant="solid" color="light" startIcon={<PlusIcon />}>
              Light
            </Badge>
            <Badge variant="solid" color="dark" startIcon={<PlusIcon />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Light Background with Right Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" endIcon={<PlusIcon />}>
              Primary
            </Badge>
            <Badge variant="light" color="success" endIcon={<PlusIcon />}>
              Success
            </Badge>{" "}
            <Badge variant="light" color="error" endIcon={<PlusIcon />}>
              Error
            </Badge>{" "}
            <Badge variant="light" color="warning" endIcon={<PlusIcon />}>
              Warning
            </Badge>{" "}
            <Badge variant="light" color="info" endIcon={<PlusIcon />}>
              Info
            </Badge>
            <Badge variant="light" color="light" endIcon={<PlusIcon />}>
              Light
            </Badge>
            <Badge variant="light" color="dark" endIcon={<PlusIcon />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Solid Background with Right Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" endIcon={<PlusIcon />}>
              Primary
            </Badge>
            <Badge variant="solid" color="success" endIcon={<PlusIcon />}>
              Success
            </Badge>{" "}
            <Badge variant="solid" color="error" endIcon={<PlusIcon />}>
              Error
            </Badge>{" "}
            <Badge variant="solid" color="warning" endIcon={<PlusIcon />}>
              Warning
            </Badge>{" "}
            <Badge variant="solid" color="info" endIcon={<PlusIcon />}>
              Info
            </Badge>
            <Badge variant="solid" color="light" endIcon={<PlusIcon />}>
              Light
            </Badge>
            <Badge variant="solid" color="dark" endIcon={<PlusIcon />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
```

## File: src/pages/UiElements/Images.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

export default function Images() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Images page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive image">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </>
  );
}
```

## File: src/pages/UserProfiles.tsx
```typescript
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
```

## File: src/components/form/form-elements/CheckboxComponents.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Checkbox from "../input/Checkbox";

export default function CheckboxComponents() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);
  const [isCheckedDisabled, setIsCheckedDisabled] = useState(false);
  return (
    <ComponentCard title="Checkbox">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Checkbox checked={isChecked} onChange={setIsChecked} />
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            Default
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isCheckedTwo}
            onChange={setIsCheckedTwo}
            label="Checked"
          />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isCheckedDisabled}
            onChange={setIsCheckedDisabled}
            disabled
            label="Disabled"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/form/form-elements/DefaultInputs.tsx
```typescript
import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import DatePicker from "../date-picker.tsx";

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <ComponentCard title="Default Inputs">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Input</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="inputTwo">Input with Placeholder</Label>
          <Input type="text" id="inputTwo" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Password Input</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </button>
          </div>
        </div>

        <div>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>

        <div>
          <Label htmlFor="tm">Time Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="tm">Input with Payment</Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Card number"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.25" cy="10" r="5.625" fill="#E80B26" />
                <circle cx="13.75" cy="10" r="5.625" fill="#F59D31" />
                <path
                  d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"
                  fill="#FC6020"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
```

## File: src/components/header/Header.tsx
```typescript
import { useState } from "react";
import { ThemeToggleButton } from "../common/ThemeToggleButton";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router";

// Define the interface for the props
interface HeaderProps {
  onClick?: () => void; // Optional function that takes no arguments and returns void
  onToggle: () => void;
}
const Header: React.FC<HeaderProps> = ({ onClick, onToggle }) => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="block w-10 h-10 text-gray-500 lg:hidden dark:text-gray-400"
            onClick={onToggle}
          >
            {/* Hamburger Icon */}
            <svg
              className={`block`}
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill="currentColor"
              />
            </svg>
            {/* Cross Icon */}
          </button>
          <button
            onClick={onClick}
            className="items-center justify-center hidden w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
          >
            <svg
              className="hidden fill-current lg:block"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                fill=""
              />
            </svg>
          </button>

          <Link to="/" className="lg:hidden">
            <img
              className="dark:hidden"
              src="./images/logo/logo.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="./images/logo/logo-dark.svg"
              alt="Logo"
            />
          </Link>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div className="hidden lg:block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2">
                  <svg
                    className="fill-gray-500 dark:fill-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                      fill=""
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search or type command..."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />

                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* <!-- Dark Mode Toggler --> */}
            <ThemeToggleButton />
            {/* <!-- Dark Mode Toggler --> */}
            <NotificationDropdown />
            {/* <!-- Notification Menu Area --> */}
          </div>
          {/* <!-- User Area --> */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
```

## File: src/components/header/UserDropdown.tsx
```typescript
import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { Link } from "react-router";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="/images/user/owner.jpg" alt="User" />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">Musharof</span>
        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div>
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            Musharof Chowdhury
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            randomuser@pimjo.com
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
                  fill=""
                />
              </svg>
              Edit profile
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z"
                  fill=""
                />
              </svg>
              Account settings
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.0991 7.52507C11.0991 8.02213 11.5021 8.42507 11.9991 8.42507H12.0001C12.4972 8.42507 12.9001 8.02213 12.9001 7.52507C12.9001 7.02802 12.4972 6.62507 12.0001 6.62507H11.9991C11.5021 6.62507 11.0991 7.02802 11.0991 7.52507ZM12.0001 17.3714C11.5859 17.3714 11.2501 17.0356 11.2501 16.6214V10.9449C11.2501 10.5307 11.5859 10.1949 12.0001 10.1949C12.4143 10.1949 12.7501 10.5307 12.7501 10.9449V16.6214C12.7501 17.0356 12.4143 17.3714 12.0001 17.3714Z"
                  fill=""
                />
              </svg>
              Support
            </DropdownItem>
          </li>
        </ul>
        <Link
          to="/signin"
          className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          <svg
            className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
              fill=""
            />
          </svg>
          Sign out
        </Link>
      </Dropdown>
    </div>
  );
}
```

## File: src/components/UserProfile/UserInfoCard.tsx
```typescript
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                First Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Musharof
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Last Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Chowdhury
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                randomuser@pimjo.com
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                +09 363 398 46
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Bio
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Team Manager
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      value="https://www.facebook.com/PimjoHQ"
                    />
                  </div>

                  <div>
                    <Label>X.com</Label>
                    <Input type="text" value="https://x.com/PimjoHQ" />
                  </div>

                  <div>
                    <Label>Linkedin</Label>
                    <Input
                      type="text"
                      value="https://www.linkedin.com/company/pimjo"
                    />
                  </div>

                  <div>
                    <Label>Instagram</Label>
                    <Input type="text" value="https://instagram.com/PimjoHQ" />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>First Name</Label>
                    <Input type="text" value="Musharof" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" value="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" value="randomuser@pimjo.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Phone</Label>
                    <Input type="text" value="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label>Bio</Label>
                    <Input type="text" value="Team Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
```

## File: src/layout/Backdrop.tsx
```typescript
import { useSidebar } from "../context/SidebarContext";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
      onClick={toggleMobileSidebar}
    />
  );
};

export default Backdrop;
```

## File: src/layout/SidebarWidget.tsx
```typescript
export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        #1 YUNA Dashboard Solution
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Leading React Dashboard Template with 400+ UI Component and Pages.
      </p>
      <a
        href="https://yuna-dashboard.com/pricing"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Purchase Plan
      </a>
    </div>
  );
}
```

## File: src/pages/Charts/BarChart.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="React.js Chart Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
```

## File: src/pages/Charts/LineChart.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function LineChart() {
  return (
    <>
      <PageMeta
        title="React.js Chart Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
```

## File: src/layout/AppSidebar.tsx
```typescript
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

// Assume these icons are imported from an icon library
import {
  BoxCubeIcon,
  CalenderIcon,
  ChatIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
  GroupIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: <GroupIcon />,
    name: "Clients/Patients",
    path: "/clients",
  },
  {
    icon: <ListIcon />,
    name: "Onboarding Hub",
    path: "/onboarding",
  },
  {
    icon: <ChatIcon />,
    name: "AI Calls",
    path: "/calls",
  },
  {
    icon: <CalenderIcon />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <UserCircleIcon />,
    name: "User Profile",
    path: "/profile",
  },
  {
    name: "Forms",
    icon: <ListIcon />,
    subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  },
  {
    name: "Tables",
    icon: <TableIcon />,
    subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  },
  {
    name: "Pages",
    icon: <PageIcon />,
    subItems: [
      { name: "Blank Page", path: "/blank", pro: false },
      { name: "404 Error", path: "/error-404", pro: false },
    ],
  },
];

const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
  {
    icon: <BoxCubeIcon />,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts", pro: false },
      { name: "Avatar", path: "/avatars", pro: false },
      { name: "Badge", path: "/badge", pro: false },
      { name: "Buttons", path: "/buttons", pro: false },
      { name: "Images", path: "/images", pro: false },
      { name: "Videos", path: "/videos", pro: false },
    ],
  },
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => location.pathname === path;
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size  ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="YUNA Dashboard Logo"
                width={150}
                height={40}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="YUNA Dashboard Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              alt="YUNA Dashboard Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
```

## File: src/layout/AppHeader.tsx
```typescript
import { useEffect, useRef, useState } from "react";

import { Link } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import NotificationDropdown from "../components/header/NotificationDropdown";
import UserDropdown from "../components/header/UserDropdown";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {/* Cross Icon */}
          </button>

          <Link to="/" className="lg:hidden">
            <img
              className="dark:hidden"
              src="./images/logo/logo.svg"
              alt="YUNA Dashboard Logo"
            />
            <img
              className="hidden dark:block"
              src="./images/logo/logo-dark.svg"
              alt="YUNA Dashboard Logo"
            />
          </Link>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                  <svg
                    className="fill-gray-500 dark:fill-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                      fill=""
                    />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search or type command..."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />

                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* <!-- Dark Mode Toggler --> */}
            <ThemeToggleButton />
            {/* <!-- Dark Mode Toggler --> */}
            <NotificationDropdown />
            {/* <!-- Notification Menu Area --> */}
          </div>
          {/* <!-- User Area --> */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
```

## File: src/index.css
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap")
layer(base);

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme {
  --font-*: initial;
  --font-outfit: Outfit, sans-serif;

  --breakpoint-*: initial;
  --breakpoint-2xsm: 375px;
  --breakpoint-xsm: 425px;
  --breakpoint-3xl: 2000px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  --text-title-2xl: 72px;
  --text-title-2xl--line-height: 90px;
  --text-title-xl: 60px;
  --text-title-xl--line-height: 72px;
  --text-title-lg: 48px;
  --text-title-lg--line-height: 60px;
  --text-title-md: 36px;
  --text-title-md--line-height: 44px;
  --text-title-sm: 30px;
  --text-title-sm--line-height: 38px;
  --text-theme-xl: 20px;
  --text-theme-xl--line-height: 30px;
  --text-theme-sm: 14px;
  --text-theme-sm--line-height: 20px;
  --text-theme-xs: 12px;
  --text-theme-xs--line-height: 18px;

  --color-current: currentColor;
  --color-transparent: transparent;
  --color-white: #ffffff;
  --color-black: #101828;

  --color-brand-25: #f2f7ff;
  --color-brand-50: #ecf3ff;
  --color-brand-100: #dde9ff;
  --color-brand-200: #c2d6ff;
  --color-brand-300: #9cb9ff;
  --color-brand-400: #7592ff;
  --color-brand-500: #465fff;
  --color-brand-600: #3641f5;
  --color-brand-700: #2a31d8;
  --color-brand-800: #252dae;
  --color-brand-900: #262e89;
  --color-brand-950: #161950;

  --color-blue-light-25: #f5fbff;
  --color-blue-light-50: #f0f9ff;
  --color-blue-light-100: #e0f2fe;
  --color-blue-light-200: #b9e6fe;
  --color-blue-light-300: #7cd4fd;
  --color-blue-light-400: #36bffa;
  --color-blue-light-500: #0ba5ec;
  --color-blue-light-600: #0086c9;
  --color-blue-light-700: #026aa2;
  --color-blue-light-800: #065986;
  --color-blue-light-900: #0b4a6f;
  --color-blue-light-950: #062c41;

  --color-gray-25: #fcfcfd;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f2f4f7;
  --color-gray-200: #e4e7ec;
  --color-gray-300: #d0d5dd;
  --color-gray-400: #98a2b3;
  --color-gray-500: #667085;
  --color-gray-600: #475467;
  --color-gray-700: #344054;
  --color-gray-800: #1d2939;
  --color-gray-900: #101828;
  --color-gray-950: #0c111d;
  --color-gray-dark: #1a2231;

  --color-orange-25: #fffaf5;
  --color-orange-50: #fff6ed;
  --color-orange-100: #ffead5;
  --color-orange-200: #fddcab;
  --color-orange-300: #feb273;
  --color-orange-400: #fd853a;
  --color-orange-500: #fb6514;
  --color-orange-600: #ec4a0a;
  --color-orange-700: #c4320a;
  --color-orange-800: #9c2a10;
  --color-orange-900: #7e2410;
  --color-orange-950: #511c10;

  --color-success-25: #f6fef9;
  --color-success-50: #ecfdf3;
  --color-success-100: #d1fadf;
  --color-success-200: #a6f4c5;
  --color-success-300: #6ce9a6;
  --color-success-400: #32d583;
  --color-success-500: #12b76a;
  --color-success-600: #039855;
  --color-success-700: #027a48;
  --color-success-800: #05603a;
  --color-success-900: #054f31;
  --color-success-950: #053321;

  --color-error-25: #fffbfa;
  --color-error-50: #fef3f2;
  --color-error-100: #fee4e2;
  --color-error-200: #fecdca;
  --color-error-300: #fda29b;
  --color-error-400: #f97066;
  --color-error-500: #f04438;
  --color-error-600: #d92d20;
  --color-error-700: #b42318;
  --color-error-800: #912018;
  --color-error-900: #7a271a;
  --color-error-950: #55160c;

  --color-warning-25: #fffcf5;
  --color-warning-50: #fffaeb;
  --color-warning-100: #fef0c7;
  --color-warning-200: #fedf89;
  --color-warning-300: #fec84b;
  --color-warning-400: #fdb022;
  --color-warning-500: #f79009;
  --color-warning-600: #dc6803;
  --color-warning-700: #b54708;
  --color-warning-800: #93370d;
  --color-warning-900: #7a2e0e;
  --color-warning-950: #4e1d09;

  --color-theme-pink-500: #ee46bc;

  --color-theme-purple-500: #7a5af8;

  --shadow-theme-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  --shadow-theme-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  --shadow-theme-sm: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
    0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  --shadow-theme-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  --shadow-theme-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  --shadow-datepicker: -5px 0 0 #262d3c, 5px 0 0 #262d3c;
  --shadow-focus-ring: 0px 0px 0px 4px rgba(70, 95, 255, 0.12);
  --shadow-slider-navigation: 0px 1px 2px 0px rgba(16, 24, 40, 0.1),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);
  --shadow-tooltip: 0px 4px 6px -2px rgba(16, 24, 40, 0.05),
    -8px 0px 20px 8px rgba(16, 24, 40, 0.05);

  --drop-shadow-4xl: 0 35px 35px rgba(0, 0, 0, 0.25),
    0 45px 65px rgba(0, 0, 0, 0.15);

  --z-index-1: 1;
  --z-index-9: 9;
  --z-index-99: 99;
  --z-index-999: 999;
  --z-index-9999: 9999;
  --z-index-99999: 99999;
  --z-index-999999: 999999;
}

/*
  The default border color has changed to `currentColor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
  body {
    @apply relative font-normal font-outfit z-1 bg-gray-50;
  }
}

@utility menu-item {
  @apply relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm;
}

@utility menu-item-active {
  @apply bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400;
}

@utility menu-item-inactive {
  @apply text-gray-700 hover:bg-gray-100 group-hover:text-gray-700 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300;
}

@utility menu-item-icon {
  @apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400;
}

@utility menu-item-icon-active {
  @apply text-brand-500 dark:text-brand-400;
}

@utility menu-item-icon-size {
  & svg {
    @apply size-6!;
  }
}

@utility menu-item-icon-inactive {
  @apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300;
}

@utility menu-item-arrow {
  @apply relative;
}

@utility menu-item-arrow-active {
  @apply rotate-180 text-brand-500 dark:text-brand-400;
}

@utility menu-item-arrow-inactive {
  @apply text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300;
}

@utility menu-dropdown-item {
  @apply relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-theme-sm font-medium;
}

@utility menu-dropdown-item-active {
  @apply bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400;
}

@utility menu-dropdown-item-inactive {
  @apply text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5;
}

@utility menu-dropdown-badge {
  @apply block rounded-full px-2.5 py-0.5 text-xs font-medium uppercase text-brand-500 dark:text-brand-400;
}

@utility menu-dropdown-badge-active {
  @apply bg-brand-100 dark:bg-brand-500/20;
}

@utility menu-dropdown-badge-inactive {
  @apply bg-brand-50 group-hover:bg-brand-100 dark:bg-brand-500/15 dark:group-hover:bg-brand-500/20;
}
@utility no-scrollbar {
  /* Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
@utility custom-scrollbar {
  &::-webkit-scrollbar {
    @apply size-1.5;
  }

  &::-webkit-scrollbar-track {
    @apply rounded-full;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-gray-200 rounded-full dark:bg-gray-700;
  }
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #344054;
}

@layer utilities {
  /* For Remove Date Icon */
  input[type="date"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
}

.tableCheckbox:checked ~ span span {
  @apply opacity-100;
}
.tableCheckbox:checked ~ span {
  @apply border-brand-500 bg-brand-500;
}

/* third-party libraries CSS */
.apexcharts-legend-text {
  @apply text-gray-700! dark:text-gray-400!;
}

.apexcharts-text {
  @apply fill-gray-700! dark:fill-gray-400!;
}

.apexcharts-tooltip.apexcharts-theme-light {
  @apply gap-1 rounded-lg! border-gray-200! p-3 shadow-theme-sm! dark:border-gray-800! dark:bg-gray-900!;
}

.apexcharts-tooltip-marker {
  margin-right: 6px;
  height: 6px;
  width: 6px;
}
.apexcharts-legend-text {
  @apply pl-5! text-gray-700! dark:text-gray-400!;
}
.apexcharts-tooltip-series-group {
  @apply p-0!;
}
.apexcharts-tooltip-y-group {
  @apply p-0!;
}
.apexcharts-tooltip-title {
  @apply mb-0! border-b-0! bg-transparent! p-0! text-[10px]! leading-4! text-gray-800! dark:text-white/90!;
}
.apexcharts-tooltip-text {
  @apply text-theme-xs! text-gray-700! dark:text-white/90!;
}
.apexcharts-tooltip-text-y-value {
  @apply font-medium!;
}

.apexcharts-gridline {
  @apply stroke-gray-100! dark:stroke-gray-800!;
}
#chartTwo .apexcharts-datalabels-group {
  @apply -translate-y-24!;
}
#chartTwo .apexcharts-datalabels-group .apexcharts-text {
  @apply fill-gray-800! font-semibold! dark:fill-white/90!;
}

#chartDarkStyle .apexcharts-datalabels-group .apexcharts-text {
  @apply fill-gray-800! font-semibold! dark:fill-white/90!;
}

#chartSixteen .apexcharts-legend {
  @apply p-0! pl-6!;
}

.jvectormap-container {
  @apply bg-gray-50! dark:bg-gray-900!;
}
.jvectormap-region.jvectormap-element {
  @apply fill-gray-300! hover:fill-brand-500! dark:fill-gray-700! dark:hover:fill-brand-500!;
}
.jvectormap-marker.jvectormap-element {
  @apply stroke-gray-200! dark:stroke-gray-800!;
}
.jvectormap-tip {
  @apply bg-brand-500! border-none! px-2! py-1!;
}
.jvectormap-zoomin,
.jvectormap-zoomout {
  @apply hidden!;
}

.stocks-slider-outer .swiper-button-next:after,
.stocks-slider-outer .swiper-button-prev:after {
  @apply hidden;
}

.stocks-slider-outer .swiper-button-next,
.stocks-slider-outer .swiper-button-prev {
  @apply static! mt-0 h-8 w-9 rounded-full border dark:hover:bg-white/[0.05] border-gray-200 text-gray-700! transition hover:bg-gray-100 dark:border-white/[0.03] dark:bg-gray-800 dark:text-gray-400!  dark:hover:text-white/90!;
}

.stocks-slider-outer .swiper-button-next.swiper-button-disabled,
.stocks-slider-outer .swiper-button-prev.swiper-button-disabled {
  @apply bg-white opacity-50 dark:bg-gray-900;
}

.stocks-slider-outer .swiper-button-next svg,
.stocks-slider-outer .swiper-button-prev svg {
  @apply h-auto! w-auto!;
}

.flatpickr-wrapper {
  @apply w-full;
}
.flatpickr-calendar {
  @apply mt-2 bg-white! rounded-xl! p-5! border! border-gray-200! text-gray-500! dark:bg-gray-dark! dark:text-gray-400! dark:shadow-theme-xl! 2xsm:w-auto!;
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  @apply stroke-brand-500;
}
.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  @apply hidden;
}

.flatpickr-current-month {
  @apply p-0!;
}
.flatpickr-current-month .cur-month,
.flatpickr-current-month input.cur-year {
  @apply h-auto! pt-0! text-lg! font-medium! text-gray-800! dark:text-white/90!;
}

.flatpickr-prev-month,
.flatpickr-next-month {
  @apply p-0!;
}

.flatpickr-weekdays {
  @apply h-auto mt-6 mb-4 bg-transparent!;
}

.flatpickr-weekday {
  @apply text-theme-sm! font-medium! text-gray-500! dark:text-gray-400! bg-transparent!;
}

.flatpickr-day {
  @apply flex! items-center! text-theme-sm! font-medium! text-gray-800! dark:text-white/90! dark:hover:border-gray-300! dark:hover:bg-gray-900!;
}
.flatpickr-day.nextMonthDay,
.flatpickr-day.prevMonthDay {
  @apply text-gray-400!;
}

.flatpickr-months > .flatpickr-month {
  background: none !important;
}
.flatpickr-month .flatpickr-current-month .flatpickr-monthDropdown-months {
  background: none !important;
  appearance: none;
  background-image: none !important;
  font-weight: 500;
}
.flatpickr-month
  .flatpickr-current-month
  .flatpickr-monthDropdown-months:focus {
  outline: none !important;
  border: 0 !important;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  @apply top-7! dark:fill-white! dark:text-white! bg-transparent!;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  @apply left-7!;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  @apply right-7!;
}
.flatpickr-days {
  @apply border-0!;
}
span.flatpickr-weekday,
.flatpickr-months .flatpickr-month {
  @apply dark:fill-white! dark:text-white! bg-none!;
}
.flatpickr-innerContainer {
  @apply border-b-0!;
}
.flatpickr-months .flatpickr-month {
  @apply bg-none!;
}
.flatpickr-day.inRange {
  box-shadow: -5px 0 0 #f9fafb, 5px 0 0 #f9fafb !important;
  @apply dark:shadow-datepicker!;
}
.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  @apply border-gray-50! bg-gray-50! dark:border-0! dark:border-white/5! dark:bg-white/5!;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.selected,
.flatpickr-day.endRange {
  @apply text-white! dark:text-white!;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: #465fff;
  @apply border-brand-500! bg-brand-500! hover:border-brand-500! hover:bg-brand-500!;
}
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n + 1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n + 1)) {
  box-shadow: -10px 0 0 #465fff;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg,
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  @apply hover:fill-none!;
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: none !important;
}

.flatpickr-calendar.static {
  @apply right-0;
}

.fc .fc-view-harness {
  @apply max-w-full overflow-x-auto custom-scrollbar;
}
.fc-dayGridMonth-view.fc-view.fc-daygrid {
  @apply min-w-[718px];
}
.fc .fc-scrollgrid-section > * {
  border-right-width: 0;
  border-bottom-width: 0;
}
.fc .fc-scrollgrid {
  border-left-width: 0;
}
.fc .fc-toolbar.fc-header-toolbar {
  @apply flex-col gap-4 px-6 pt-6 sm:flex-row;
}
.fc-button-group {
  @apply gap-2;
}
.fc-button-group .fc-button {
  @apply flex h-10 w-10 items-center justify-center rounded-lg! border border-gray-200 bg-transparent hover:border-gray-200 hover:bg-gray-50 focus:shadow-none active:border-gray-200! active:bg-transparent! active:shadow-none! dark:border-gray-800 dark:hover:border-gray-800 dark:hover:bg-gray-900 dark:active:border-gray-800!;
}

.fc-button-group .fc-button.fc-prev-button:before {
  @apply inline-block mt-1;
  content: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.0068 6L9.75684 12.25L16.0068 18.5' stroke='%23344054' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.fc-button-group .fc-button.fc-next-button:before {
  @apply inline-block mt-1;
  content: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.50684 19L15.7568 12.75L9.50684 6.5' stroke='%23344054' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.dark .fc-button-group .fc-button.fc-prev-button:before {
  content: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.0068 6L9.75684 12.25L16.0068 18.5' stroke='%2398A2B3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.dark .fc-button-group .fc-button.fc-next-button:before {
  content: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.50684 19L15.7568 12.75L9.50684 6.5' stroke='%2398A2B3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.fc-button-group .fc-button .fc-icon {
  @apply hidden;
}
.fc-addEventButton-button {
  @apply rounded-lg! border-0! bg-brand-500! px-4! py-2.5! text-sm! font-medium! hover:bg-brand-600! focus:shadow-none!;
}
.fc-toolbar-title {
  @apply text-lg! font-medium! text-gray-800 dark:text-white/90;
}
.fc-header-toolbar.fc-toolbar .fc-toolbar-chunk:last-child {
  @apply rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900;
}
.fc-header-toolbar.fc-toolbar .fc-toolbar-chunk:last-child .fc-button {
  @apply h-auto! w-auto! rounded-md border-0! bg-transparent px-5! py-2! text-sm font-medium text-gray-500 hover:text-gray-700 focus:shadow-none! dark:text-gray-400;
}
.fc-header-toolbar.fc-toolbar
  .fc-toolbar-chunk:last-child
  .fc-button.fc-button-active {
  @apply text-gray-900 bg-white dark:bg-gray-800 dark:text-white;
}
.fc-theme-standard th {
  @apply border-x-0! border-t border-gray-200! bg-gray-50 text-left! dark:border-gray-800! dark:bg-gray-900;
}
.fc-theme-standard td,
.fc-theme-standard .fc-scrollgrid {
  @apply border-gray-200! dark:border-gray-800!;
}
.fc .fc-col-header-cell-cushion {
  @apply px-5! py-4! text-sm font-medium uppercase text-gray-400;
}
.fc .fc-daygrid-day.fc-day-today {
  @apply bg-transparent;
}
.fc .fc-daygrid-day {
  @apply p-2;
}
.fc .fc-daygrid-day.fc-day-today .fc-scrollgrid-sync-inner {
  @apply rounded-sm bg-gray-100 dark:bg-white/[0.03];
}
.fc .fc-daygrid-day-number {
  @apply p-3! text-sm font-medium text-gray-700 dark:text-gray-400;
}
.fc .fc-daygrid-day-top {
  @apply flex-row!;
}
.fc .fc-day-other .fc-daygrid-day-top {
  opacity: 1;
}
.fc .fc-day-other .fc-daygrid-day-top .fc-daygrid-day-number {
  @apply text-gray-400 dark:text-white/30;
}
.event-fc-color {
  @apply rounded-lg py-2.5 pl-4 pr-3;
}
.event-fc-color .fc-event-title {
  @apply p-0 text-sm font-normal text-gray-700;
}
.fc-daygrid-event-dot {
  @apply w-1 h-5 ml-0 mr-3 border-none rounded-sm;
}
.fc-event {
  @apply focus:shadow-none;
}
.fc-daygrid-event.fc-event-start {
  @apply ml-3!;
}
.event-fc-color.fc-bg-success {
  @apply border-success-50 bg-success-50;
}
.event-fc-color.fc-bg-danger {
  @apply border-error-50 bg-error-50;
}
.event-fc-color.fc-bg-primary {
  @apply border-brand-50 bg-brand-50;
}
.event-fc-color.fc-bg-warning {
  @apply border-orange-50 bg-orange-50;
}
.event-fc-color.fc-bg-success .fc-daygrid-event-dot {
  @apply bg-success-500;
}
.event-fc-color.fc-bg-danger .fc-daygrid-event-dot {
  @apply bg-error-500;
}
.event-fc-color.fc-bg-primary .fc-daygrid-event-dot {
  @apply bg-brand-500;
}
.event-fc-color.fc-bg-warning .fc-daygrid-event-dot {
  @apply bg-orange-500;
}
.fc-direction-ltr .fc-timegrid-slot-label-frame {
  @apply px-3 py-1.5 text-left text-sm font-medium text-gray-500 dark:text-gray-400;
}
.fc .fc-timegrid-axis-cushion {
  @apply text-sm font-medium text-gray-500 dark:text-gray-400;
}

.input-date-icon::-webkit-inner-spin-button,
.input-date-icon::-webkit-calendar-picker-indicator {
  opacity: 0;
  -webkit-appearance: none;
}

.swiper-button-prev svg,
.swiper-button-next svg {
  @apply h-auto! w-auto!;
}

.carouselTwo .swiper-button-next:after,
.carouselTwo .swiper-button-prev:after,
.carouselFour .swiper-button-next:after,
.carouselFour .swiper-button-prev:after {
  @apply hidden;
}
.carouselTwo .swiper-button-next.swiper-button-disabled,
.carouselTwo .swiper-button-prev.swiper-button-disabled,
.carouselFour .swiper-button-next.swiper-button-disabled,
.carouselFour .swiper-button-prev.swiper-button-disabled {
  @apply bg-white/60 opacity-100!;
}
.carouselTwo .swiper-button-next,
.carouselTwo .swiper-button-prev,
.carouselFour .swiper-button-next,
.carouselFour .swiper-button-prev {
  @apply h-10 w-10 rounded-full border-[0.5px] border-white/10 bg-white/90 text-gray-700! shadow-slider-navigation backdrop-blur-[10px];
}

.carouselTwo .swiper-button-prev,
.carouselFour .swiper-button-prev {
  @apply left-3! sm:left-4!;
}

.carouselTwo .swiper-button-next,
.carouselFour .swiper-button-next {
  @apply right-3! sm:right-4!;
}

.carouselThree .swiper-pagination,
.carouselFour .swiper-pagination {
  @apply bottom-3! left-1/2! inline-flex w-auto! -translate-x-1/2 items-center gap-1.5 rounded-[40px] border-[0.5px] border-white/10 bg-white/60 px-2 py-1.5 shadow-slider-navigation backdrop-blur-[10px] sm:bottom-5!;
}

.carouselThree .swiper-pagination-bullet,
.carouselFour .swiper-pagination-bullet {
  @apply m-0! h-2.5 w-2.5 bg-white opacity-100 shadow-theme-xs duration-200 ease-in-out;
}

.carouselThree .swiper-pagination-bullet-active,
.carouselFour .swiper-pagination-bullet-active {
  @apply w-6.5 rounded-xl;
}

.form-check-input:checked ~ span {
  @apply border-[6px] border-brand-500 bg-brand-500 dark:border-brand-500;
}

.taskCheckbox:checked ~ .box span {
  @apply opacity-100 bg-brand-500;
}
.taskCheckbox:checked ~ p {
  @apply text-gray-400 line-through;
}
.taskCheckbox:checked ~ .box {
  @apply border-brand-500 bg-brand-500 dark:border-brand-500;
}

.task {
  transition: all 0.2s ease; /* Smooth transition for visual effects */
}

.task {
  border-radius: 0.75rem;
  box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
    0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  opacity: 0.8;
  cursor: grabbing; /* Changes the cursor to indicate dragging */
}

.custom-calendar .fc-h-event {
  background-color: transparent;
  border: none;
  color: black;
}
.fc.fc-media-screen {
  @apply min-h-screen;
}

.simplebar-scrollbar::before {
  @apply bg-gray-200! rounded-full! dark:bg-gray-700! opacity-100!;
}

.dark .simplebar-scrollbar::before {
  @apply bg-gray-700!;
}

.simplebar-scrollbar.simplebar-visible:before {
  @apply opacity-100;
}
```

## File: src/main.tsx
```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
);
```

## File: src/pages/UiElements/Alerts.tsx
```typescript
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Alert from "../../components/ui/alert/Alert";
import PageMeta from "../../components/common/PageMeta";

export default function Alerts() {
  return (
    <>
      <PageMeta
        title="React.js Alerts Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Alerts Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Alerts" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Success Alert">
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title="Warning Alert">
          <Alert
            variant="warning"
            title="Warning Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="warning"
            title="Warning Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Error Alert">
          <Alert
            variant="error"
            title="Error Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="error"
            title="Error Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Info Alert">
          <Alert
            variant="info"
            title="Info Message"
            message="Be cautious when performing this action."
            showLink={true}
            linkHref="/"
            linkText="Learn more"
          />
          <Alert
            variant="info"
            title="Info Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </>
  );
}
```

## File: src/pages/UiElements/Buttons.tsx
```typescript
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon } from "../../icons";

export default function Buttons() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Dashboard | YUNA Dashboard - React.js Admin Dashboard Template"
        description="This is React.js Buttons Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title="Primary Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Button Text
            </Button>
            <Button size="md" variant="primary">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Secondary Button">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Button Text
            </Button>
            <Button size="md" variant="outline">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
```

## File: src/pages/Calendar.tsx
```typescript
import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import { Modal } from "../components/ui/modal";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string;
  };
}

const Calendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLevel, setEventLevel] = useState("");
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const calendarsEvents = {
    Danger: "danger",
    Success: "success",
    Primary: "primary",
    Warning: "warning",
  };

  useEffect(() => {
    // Initialize with some events
    setEvents([
      {
        id: "1",
        title: "Event Conf.",
        start: new Date().toISOString().split("T")[0],
        extendedProps: { calendar: "Danger" },
      },
      {
        id: "2",
        title: "Meeting",
        start: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        extendedProps: { calendar: "Success" },
      },
      {
        id: "3",
        title: "Workshop",
        start: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        end: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        extendedProps: { calendar: "Primary" },
      },
    ]);
  }, []);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    resetModalFields();
    setEventStartDate(selectInfo.startStr);
    setEventEndDate(selectInfo.endStr || selectInfo.startStr);
    openModal();
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    setSelectedEvent(event as unknown as CalendarEvent);
    setEventTitle(event.title);
    setEventStartDate(event.start?.toISOString().split("T")[0] || "");
    setEventEndDate(event.end?.toISOString().split("T")[0] || "");
    setEventLevel(event.extendedProps.calendar);
    openModal();
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      // Update existing event
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: { calendar: eventLevel },
              }
            : event
        )
      );
    } else {
      // Add new event
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: eventTitle,
        start: eventStartDate,
        end: eventEndDate,
        allDay: true,
        extendedProps: { calendar: eventLevel },
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    closeModal();
    resetModalFields();
  };

  const resetModalFields = () => {
    setEventTitle("");
    setEventStartDate("");
    setEventEndDate("");
    setEventLevel("");
    setSelectedEvent(null);
  };

  return (
    <>
      <PageMeta
        title="React.js Calendar Dashboard | YUNA Dashboard - Next.js Admin Dashboard Template"
        description="This is React.js Calendar Dashboard page for YUNA Dashboard - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="rounded-2xl border  border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="custom-calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next addEventButton",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            customButtons={{
              addEventButton: {
                text: "Add Event +",
                click: openModal,
              },
            }}
          />
        </div>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] p-6 lg:p-10"
        >
          <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            <div>
              <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                {selectedEvent ? "Edit Event" : "Add Event"}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Plan your next big moment: schedule or edit an event to stay on
                track
              </p>
            </div>
            <div className="mt-8">
              <div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Event Title
                  </label>
                  <input
                    id="event-title"
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                  Event Color
                </label>
                <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                  {Object.entries(calendarsEvents).map(([key, value]) => (
                    <div key={key} className="n-chk">
                      <div
                        className={`form-check form-check-${value} form-check-inline`}
                      >
                        <label
                          className="flex items-center text-sm text-gray-700 form-check-label dark:text-gray-400"
                          htmlFor={`modal${key}`}
                        >
                          <span className="relative">
                            <input
                              className="sr-only form-check-input"
                              type="radio"
                              name="event-level"
                              value={key}
                              id={`modal${key}`}
                              checked={eventLevel === key}
                              onChange={() => setEventLevel(key)}
                            />
                            <span className="flex items-center justify-center w-5 h-5 mr-2 border border-gray-300 rounded-full box dark:border-gray-700">
                              <span
                                className={`h-2 w-2 rounded-full bg-white ${
                                  eventLevel === key ? "block" : "hidden"
                                }`}
                              ></span>
                            </span>
                          </span>
                          {key}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Enter Start Date
                </label>
                <div className="relative">
                  <input
                    id="event-start-date"
                    type="date"
                    value={eventStartDate}
                    onChange={(e) => setEventStartDate(e.target.value)}
                    className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Enter End Date
                </label>
                <div className="relative">
                  <input
                    id="event-end-date"
                    type="date"
                    value={eventEndDate}
                    onChange={(e) => setEventEndDate(e.target.value)}
                    className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
              <button
                onClick={closeModal}
                type="button"
                className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
              >
                Close
              </button>
              <button
                onClick={handleAddOrUpdateEvent}
                type="button"
                className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
              >
                {selectedEvent ? "Update Changes" : "Add Event"}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

const renderEventContent = (eventInfo: any) => {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`;
  return (
    <div
      className={`event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm`}
    >
      <div className="fc-daygrid-event-dot"></div>
      <div className="fc-event-time">{eventInfo.timeText}</div>
      <div className="fc-event-title">{eventInfo.event.title}</div>
    </div>
  );
};

export default Calendar;
```

## File: package.json
```json
{
  "name": "yuna-dashboard",
  "private": true,
  "version": "2.0.2",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fullcalendar/core": "^6.1.15",
    "@fullcalendar/daygrid": "^6.1.15",
    "@fullcalendar/interaction": "^6.1.15",
    "@fullcalendar/list": "^6.1.15",
    "@fullcalendar/react": "^6.1.15",
    "@fullcalendar/timegrid": "^6.1.15",
    "@react-jvectormap/core": "^1.0.4",
    "@react-jvectormap/world": "^1.1.2",
    "apexcharts": "^4.1.0",
    "clsx": "^2.1.1",
    "flatpickr": "^4.6.13",
    "react": "^19.0.0",
    "react-apexcharts": "^1.7.0",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-dom": "^19.0.0",
    "react-dropzone": "^14.3.5",
    "react-helmet-async": "^2.0.5",
    "react-router": "^7.1.5",
    "swiper": "^11.2.3",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@tailwindcss/postcss": "^4.0.8",
    "@types/react": "^19.0.12",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.19.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "postcss": "^8.5.2",
    "tailwindcss": "^4.0.8",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.22.0",
    "vite": "^6.1.0",
    "vite-plugin-svgr": "^4.3.0"
  },
  "overrides": {
    "react-helmet-async": {
      "react": "^16.8.0 || ^17 || ^18 || ^19"
    },
    "@react-jvectormap/core": {
      "react": "^16.8.0 || ^17 || ^18 || ^19",
      "react-dom": "^16.8.0 || ^17 || ^18 || ^19"
    },
    "@react-jvectormap/world": {
      "react": "^16.8.0 || ^17 || ^18 || ^19",
      "react-dom": "^16.8.0 || ^17 || ^18 || ^19"
    }
  }
}
```

## File: src/App.tsx
```typescript
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import ClientsPatients from "./pages/Clients/ClientsPatients";
import CallsDashboard from "./pages/Calls/CallsDashboard";
import OnboardingDashboard from "./pages/Onboarding/OnboardingDashboard";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/clients" element={<ClientsPatients />} />
            <Route path="/onboarding" element={<OnboardingDashboard />} />
            <Route path="/calls" element={<CallsDashboard />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
```
