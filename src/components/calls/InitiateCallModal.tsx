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
