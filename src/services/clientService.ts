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
