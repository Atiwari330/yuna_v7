import { PatientProfileForMatching, PatientMatchingStatus } from '../types/matching';

// Mock data array of patients awaiting matching
const mockPatientsForMatching: PatientProfileForMatching[] = [
  {
    id: '101',
    name: 'Alex Rivera',
    avatar: '/images/user/user-01.jpg',
    keyPreferences: ['Spanish Speaking', 'CBT', 'Depression', 'Young Adult'],
    dateAddedToQueue: '2025-04-01T09:30:00Z',
    status: 'NeedsMatch'
  },
  {
    id: '102',
    name: 'Taylor Morgan',
    keyPreferences: ['LGBTQ+ Friendly', 'Anxiety', 'Trauma-Informed'],
    dateAddedToQueue: '2025-04-02T14:15:00Z',
    status: 'ReviewingMatches'
  },
  {
    id: '103',
    name: 'Sam Washington',
    avatar: '/images/user/user-02.jpg',
    keyPreferences: ['Evening Availability', 'Addiction Recovery', 'Male Therapist'],
    dateAddedToQueue: '2025-03-28T10:45:00Z',
    status: 'NeedsMatch'
  },
  {
    id: '104',
    name: 'Jordan Lee',
    avatar: '/images/user/user-03.jpg',
    keyPreferences: ['Asian American', 'Cultural Identity', 'Depression', 'Family Issues'],
    dateAddedToQueue: '2025-04-03T16:20:00Z',
    status: 'MatchProposed'
  },
  {
    id: '105',
    name: 'Casey Kim',
    keyPreferences: ['Adolescent', 'ADHD', 'School Issues', 'Female Therapist'],
    dateAddedToQueue: '2025-03-30T13:10:00Z',
    status: 'ReviewingMatches'
  },
  {
    id: '106',
    name: 'Morgan Smith',
    avatar: '/images/user/user-04.jpg',
    keyPreferences: ['Trauma Recovery', 'EMDR', 'Complex PTSD'],
    dateAddedToQueue: '2025-04-05T11:30:00Z',
    status: 'NeedsMatch'
  },
  {
    id: '107',
    name: 'Jamie Wilson',
    keyPreferences: ['Elderly Care', 'Grief', 'Loss', 'In-Home Sessions'],
    dateAddedToQueue: '2025-03-25T09:15:00Z',
    status: 'MatchProposed'
  },
  {
    id: '108',
    name: 'Riley Johnson',
    avatar: '/images/user/user-05.jpg',
    keyPreferences: ['Eating Disorders', 'Young Adult', 'CBT Specialist'],
    dateAddedToQueue: '2025-04-04T15:45:00Z',
    status: 'NeedsMatch'
  }
];

export default mockPatientsForMatching;
