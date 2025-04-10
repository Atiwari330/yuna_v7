// Define therapist availability status options
export type TherapistAvailabilityStatus = 'AcceptingNew' | 'Full' | 'Waitlist';

// Main interface for therapist profile data
export interface TherapistProfile {
  id: string;
  name: string;
  avatar?: string; // Optional avatar image URL
  credentials: string; // e.g., "LCSW", "PhD"
  specialties: string[];
  patientPreferences: {
    ageGroups: string[];
    issues: string[];
    excludedIssues: string[];
    genders: string[];
    languages: string[];
  };
  availabilityStatus: TherapistAvailabilityStatus;
  lastUpdated: string; // ISO date string
}
