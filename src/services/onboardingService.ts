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
