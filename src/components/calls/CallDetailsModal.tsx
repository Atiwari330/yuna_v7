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
