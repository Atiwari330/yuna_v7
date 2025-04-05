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
