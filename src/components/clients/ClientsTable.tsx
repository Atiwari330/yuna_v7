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
