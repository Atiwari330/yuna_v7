// Import mock data arrays
import mockTherapists from '../mockData/mockTherapistData';
import mockPatientsForMatching from '../mockData/mockPatientMatchingData';
import mockMatchResults from '../mockData/mockMatchResultsData';

// Import types
import { TherapistProfile } from '../types/therapist';
import { PatientProfileForMatching, MatchResult } from '../types/matching';

// Helper function to randomly delay between min and max milliseconds
const randomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Helper function to simulate random errors (10% chance)
const shouldSimulateError = (): boolean => {
  return Math.random() < 0.1;
};

// Therapist matching service
const therapistMatchingService = {
  // Get matching metrics (patient counts, therapist counts, etc.)
  getMatchingMetrics(): Promise<{
    patientsAwaitingMatch: number;
    availableTherapists: number;
    successfulMatchesLast30Days: number;
  }> {
    return new Promise((resolve) => {
      // Simulate API delay (400-800ms)
      setTimeout(() => {
        // Count patients awaiting match
        const patientsAwaitingMatch = mockPatientsForMatching.filter(
          (patient) => patient.status === 'NeedsMatch' || patient.status === 'ReviewingMatches'
        ).length;

        // Count available therapists
        const availableTherapists = mockTherapists.filter(
          (therapist) => therapist.availabilityStatus === 'AcceptingNew'
        ).length;

        // Hardcoded value for successful matches in last 30 days
        // In a real implementation, this would be calculated based on match dates
        const successfulMatchesLast30Days = 12;

        resolve({
          patientsAwaitingMatch,
          availableTherapists,
          successfulMatchesLast30Days,
        });
      }, randomDelay(400, 800));
    });
  },

  // Get therapist profiles with optional filtering
  getTherapistProfiles(filters?: { searchTerm?: string }): Promise<TherapistProfile[]> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        // Simulate random error (10% chance)
        if (shouldSimulateError()) {
          reject(new Error('Failed to fetch therapist profiles. Please try again.'));
          return;
        }

        let filteredTherapists = [...mockTherapists];

        // Apply search filter if provided
        if (filters?.searchTerm) {
          const searchTerm = filters.searchTerm.toLowerCase();
          filteredTherapists = filteredTherapists.filter((therapist) =>
            therapist.name.toLowerCase().includes(searchTerm)
          );
        }

        // Sort by name alphabetically
        filteredTherapists.sort((a, b) => a.name.localeCompare(b.name));

        resolve(filteredTherapists);
      }, randomDelay(500, 1500));
    });
  },

  // Get patients awaiting match with optional filtering
  getPatientsAwaitingMatch(filters?: { searchTerm?: string }): Promise<PatientProfileForMatching[]> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        // Simulate random error (10% chance)
        if (shouldSimulateError()) {
          reject(new Error('Failed to fetch patients awaiting match. Please try again.'));
          return;
        }

        let filteredPatients = [...mockPatientsForMatching];

        // Apply search filter if provided
        if (filters?.searchTerm) {
          const searchTerm = filters.searchTerm.toLowerCase();
          filteredPatients = filteredPatients.filter((patient) =>
            patient.name.toLowerCase().includes(searchTerm)
          );
        }

        // Sort by date added to queue (newest first)
        filteredPatients.sort((a, b) =>
          new Date(b.dateAddedToQueue).getTime() - new Date(a.dateAddedToQueue).getTime()
        );

        resolve(filteredPatients);
      }, randomDelay(500, 1500));
    });
  },

  // Get match results with optional filtering
  getMatchResults(filters?: { searchTerm?: string }): Promise<MatchResult[]> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        // Simulate random error (10% chance)
        if (shouldSimulateError()) {
          reject(new Error('Failed to fetch match results. Please try again.'));
          return;
        }

        let filteredResults = [...mockMatchResults];

        // Apply search filter if provided
        if (filters?.searchTerm) {
          const searchTerm = filters.searchTerm.toLowerCase();
          filteredResults = filteredResults.filter(
            (result) =>
              result.patientName.toLowerCase().includes(searchTerm) ||
              result.therapistName.toLowerCase().includes(searchTerm)
          );
        }

        // Sort by match date (newest first)
        filteredResults.sort((a, b) =>
          new Date(b.matchDate).getTime() - new Date(a.matchDate).getTime()
        );

        resolve(filteredResults);
      }, randomDelay(500, 1500));
    });
  },
};

export default therapistMatchingService;
