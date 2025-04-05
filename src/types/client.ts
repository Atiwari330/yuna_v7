// Define status options for clients/patients
export type ClientStatus = 'Active' | 'Pending' | 'At Risk' | 'On Hold' | 'Completed';

// Define insurance verification status options
export type InsuranceStatus = 'Verified' | 'Pending' | 'Failed';

// Define provider types
export type ProviderType = 'Family Support' | 'Therapy Group' | 'Medical Care' | 'Specialist';

// Define patient/client types
export type PatientType = 'Patient' | 'Client' | 'Family' | 'Group';

// Main interface for client/patient data
export interface Client {
  id: string;
  name: string;
  email: string;
  avatar?: string; // Optional avatar image URL
  status: ClientStatus;
  completion: number; // Percentage from 0-100
  timeline: {
    days: number;
    averageDays: number;
  };
  insurance: {
    status: InsuranceStatus;
    verificationDate?: string; // Optional date when verified
  };
  provider: {
    type: ProviderType;
    patientType: PatientType;
    specialtyFocus?: string; // Optional specialty focus area
  };
  lastUpdated: string; // ISO date string
  tags?: string[]; // Optional tags for the client
}
