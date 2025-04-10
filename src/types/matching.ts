// Define patient matching status options
export type PatientMatchingStatus = 'NeedsMatch' | 'ReviewingMatches' | 'MatchProposed';

// Define match result status options
export type MatchResultStatus = 'PendingAcceptance' | 'Active' | 'Rejected' | 'Ended';

// Interface for patient profiles in the matching queue
export interface PatientProfileForMatching {
  id: string;
  name: string;
  avatar?: string; // Optional avatar image URL
  keyPreferences: string[]; // Array of critical needs like language, specialty
  dateAddedToQueue: string; // ISO date string
  status: PatientMatchingStatus;
}

// Interface for match results
export interface MatchResult {
  id: string;
  patientId: string;
  patientName: string;
  therapistId: string;
  therapistName: string;
  matchDate: string; // ISO date string
  matchScore?: number; // Optional compatibility score
  status: MatchResultStatus;
}
