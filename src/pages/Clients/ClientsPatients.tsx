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
