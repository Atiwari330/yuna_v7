import { MatchResult, MatchResultStatus } from '../types/matching';

// Mock data array of match results
const mockMatchResults: MatchResult[] = [
  {
    id: '201',
    patientId: '110',
    patientName: 'Eliza Thompson',
    therapistId: '1',
    therapistName: 'Dr. Sarah Chen',
    matchDate: '2025-03-20T10:15:00Z',
    matchScore: 0.92,
    status: 'Active'
  },
  {
    id: '202',
    patientId: '111',
    patientName: 'Marcus Johnson',
    therapistId: '4',
    therapistName: 'Aisha Patel, LMFT',
    matchDate: '2025-03-22T14:30:00Z',
    matchScore: 0.88,
    status: 'PendingAcceptance'
  },
  {
    id: '203',
    patientId: '112',
    patientName: 'Sofia Garcia',
    therapistId: '2',
    therapistName: 'Michael Rodriguez, LCSW',
    matchDate: '2025-03-15T09:45:00Z',
    matchScore: 0.95,
    status: 'Active'
  },
  {
    id: '204',
    patientId: '113',
    patientName: 'David Park',
    therapistId: '7',
    therapistName: 'David Nguyen, LPC',
    matchDate: '2025-03-25T11:20:00Z',
    status: 'Rejected'
  },
  {
    id: '205',
    patientId: '114',
    patientName: 'Rachel Kim',
    therapistId: '3',
    therapistName: 'Dr. James Wilson',
    matchDate: '2025-03-10T13:30:00Z',
    matchScore: 0.85,
    status: 'Ended'
  },
  {
    id: '206',
    patientId: '115',
    patientName: 'Omar Hassan',
    therapistId: '6',
    therapistName: 'Dr. Emily Johnson',
    matchDate: '2025-04-01T15:45:00Z',
    matchScore: 0.91,
    status: 'Active'
  },
  {
    id: '207',
    patientId: '107',
    patientName: 'Jamie Wilson',
    therapistId: '5',
    therapistName: 'Robert Kim, LMSW',
    matchDate: '2025-04-03T10:10:00Z',
    matchScore: 0.79,
    status: 'PendingAcceptance'
  },
  {
    id: '208',
    patientId: '104',
    patientName: 'Jordan Lee',
    therapistId: '8',
    therapistName: 'Sophia Martinez, LCSW',
    matchDate: '2025-04-05T16:30:00Z',
    matchScore: 0.93,
    status: 'PendingAcceptance'
  }
];

export default mockMatchResults;
