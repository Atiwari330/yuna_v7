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
