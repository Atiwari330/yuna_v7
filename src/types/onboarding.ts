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
