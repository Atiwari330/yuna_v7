import { FC, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';
import { LandingPage } from '../../types/landingPage';
import Alert from '../ui/alert/Alert';
import Button from '../ui/button/Button';
import Badge from '../ui/badge/Badge';
import { ChevronUpIcon, PageIcon, EyeIcon, CopyIcon, PencilIcon, CheckLineIcon } from '../../icons';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../ui/modal';

interface LandingPagesTableProps {
  pages: LandingPage[];
  loading: boolean;
  error: string | null;
  onRetry?: () => void;
}

const LandingPagesTable: FC<LandingPagesTableProps> = ({
  pages,
  loading,
  error,
  onRetry,
}) => {
  // State for copied URL indicator
  const [copiedUrlId, setCopiedUrlId] = useState<string | null>(null);
  
  // Modal for edit requests
  const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal();
  const [selectedPage, setSelectedPage] = useState<LandingPage | null>(null);

  // Format conversion rate as percentage
  const formatConversionRate = (rate: number): string => {
    return (rate * 100).toFixed(1) + '%';
  };

  // Get badge color based on status
  const getStatusColor = (status: string): 'success' | 'warning' => {
    return status === 'Active' ? 'success' : 'warning';
  };

  // Handle view page in new tab
  const handleViewPage = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle copying URL to clipboard
  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrlId(id);
    setTimeout(() => setCopiedUrlId(null), 1500);
  };

  // Handle opening edit modal
  const handleRequestEdit = (page: LandingPage) => {
    setSelectedPage(page);
    openEditModal();
  };

  if (error) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <Alert 
          variant="error"
          title="Error Loading Landing Pages"
          message={error}
          showLink={false}
        />
        <div className="flex justify-center mt-4">
          <Button className="flex items-center" onClick={onRetry}>
            <ChevronUpIcon className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        {/* Skeleton loader for table */}
        <div className="animate-pulse p-6 space-y-4">
          <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                Preview
              </TableCell>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                Landing Page & Source
              </TableCell>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                Status
              </TableCell>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                Performance (Last 30d)
              </TableCell>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                URL
              </TableCell>
              <TableCell isHeader={true} className="py-3 px-4 font-medium text-gray-500 text-left dark:text-gray-400">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.length === 0 ? (
              <TableRow>
                <TableCell className="py-4 px-4 text-center text-gray-500 dark:text-gray-400">
                  <div className="w-full text-center col-span-6">No landing pages found</div>
                </TableCell>
              </TableRow>
            ) : (
              pages.map(page => (
                <TableRow key={page.id}>
                  {/* Preview Column */}
                  <TableCell className="py-3 px-4">
                    {page.thumbnailUrl ? (
                      <img 
                        src={page.thumbnailUrl} 
                        alt={`${page.name} preview`} 
                        className="w-16 h-10 object-cover rounded" 
                      />
                    ) : (
                      <div className="w-16 h-10 bg-gray-100 rounded flex items-center justify-center dark:bg-gray-800">
                        <PageIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </TableCell>
                  
                  {/* Landing Page & Source Column */}
                  <TableCell className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 dark:text-white">{page.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{page.referralSourceOrCampaign}</span>
                    </div>
                  </TableCell>
                  
                  {/* Status Column */}
                  <TableCell className="py-3 px-4">
                    <Badge color={getStatusColor(page.status)}>
                      {page.status}
                    </Badge>
                  </TableCell>
                  
                  {/* Performance Column */}
                  <TableCell className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-sm">Views: {page.performance.viewsLast30Days.toLocaleString()}</span>
                      <span className="text-sm">Submissions: {page.performance.submissionsLast30Days.toLocaleString()}</span>
                      <span className="text-sm">Conv: {formatConversionRate(page.performance.conversionRate)}</span>
                    </div>
                  </TableCell>
                  
                  {/* URL Column */}
                  <TableCell className="py-3 px-4">
                    <a 
                      href={page.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 underline truncate block max-w-[200px]"
                    >
                      {page.url}
                    </a>
                  </TableCell>
                  
                  {/* Actions Column */}
                  <TableCell className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {/* View Page Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewPage(page.url)}
                        className="p-1.5 relative group"
                      >
                        <EyeIcon className="w-4 h-4" />
                        <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                          View Page
                        </span>
                      </Button>
                      
                      {/* Copy URL Button */}
                      <div className="relative">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyUrl(page.id, page.url)}
                          className="p-1.5 relative group"
                        >
                          {copiedUrlId === page.id ? (
                            <CheckLineIcon className="w-4 h-4 text-success-500" />
                          ) : (
                            <CopyIcon className="w-4 h-4" />
                          )}
                          <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                            Copy URL
                          </span>
                        </Button>
                        {copiedUrlId === page.id && (
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
                            Copied!
                          </span>
                        )}
                      </div>
                      
                      {/* Request Edit Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleRequestEdit(page)}
                        className="p-1.5 relative group"
                      >
                        <PencilIcon className="w-4 h-4" />
                        <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                          Request Edit
                        </span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Edit Request Modal */}
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <div className="p-6 max-w-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Request Edit for {selectedPage?.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            To request edits to this landing page, please contact the YUNA support team at <a href="mailto:support@yuna.health" className="text-brand-500 hover:underline">support@yuna.health</a> with the page name and desired changes.
          </p>
          <div className="flex justify-end">
            <Button variant="outline" onClick={closeEditModal}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPagesTable;
