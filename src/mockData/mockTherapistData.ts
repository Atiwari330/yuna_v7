import { TherapistProfile, TherapistAvailabilityStatus } from '../types/therapist';

// Mock data array of therapist profiles
const mockTherapists: TherapistProfile[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    avatar: '/images/user/therapist-01.jpg',
    credentials: 'PhD',
    specialties: ['Cognitive Behavioral Therapy', 'Anxiety Disorders', 'Depression'],
    patientPreferences: {
      ageGroups: ['Adults', 'Adolescents'],
      issues: ['Anxiety', 'Depression', 'Trauma', 'Life Transitions'],
      excludedIssues: ['Substance Abuse', 'Eating Disorders'],
      genders: ['Female', 'Non-Binary'],
      languages: ['English', 'Mandarin']
    },
    availabilityStatus: 'AcceptingNew',
    lastUpdated: '2025-03-15T14:30:00Z'
  },
  {
    id: '2',
    name: 'Michael Rodriguez, LCSW',
    avatar: '/images/user/therapist-02.jpg',
    credentials: 'LCSW',
    specialties: ['Family Therapy', 'Trauma-Informed Care', 'Cultural Issues'],
    patientPreferences: {
      ageGroups: ['Adults', 'Families', 'Children'],
      issues: ['Family Conflict', 'Cultural Identity', 'Grief', 'PTSD'],
      excludedIssues: ['Severe Mental Illness'],
      genders: ['All'],
      languages: ['English', 'Spanish']
    },
    availabilityStatus: 'AcceptingNew',
    lastUpdated: '2025-03-18T09:45:00Z'
  },
  {
    id: '3',
    name: 'Dr. James Wilson',
    credentials: 'PsyD',
    specialties: ['Psychodynamic Therapy', 'Personality Disorders', 'Psychoanalysis'],
    patientPreferences: {
      ageGroups: ['Adults', 'Seniors'],
      issues: ['Personality Disorders', 'Depression', 'Relationship Issues'],
      excludedIssues: ['Child Abuse', 'Active Addiction'],
      genders: ['All'],
      languages: ['English']
    },
    availabilityStatus: 'Full',
    lastUpdated: '2025-03-10T16:20:00Z'
  },
  {
    id: '4',
    name: 'Aisha Patel, LMFT',
    avatar: '/images/user/therapist-03.jpg',
    credentials: 'LMFT',
    specialties: ['Couples Therapy', 'Multicultural Counseling', 'LGBTQ+ Issues'],
    patientPreferences: {
      ageGroups: ['Adults', 'Couples'],
      issues: ['Relationship Issues', 'Sexual Identity', 'Cultural Adjustment'],
      excludedIssues: [],
      genders: ['All'],
      languages: ['English', 'Hindi', 'Gujarati']
    },
    availabilityStatus: 'AcceptingNew',
    lastUpdated: '2025-03-22T11:15:00Z'
  },
  {
    id: '5',
    name: 'Robert Kim, LMSW',
    credentials: 'LMSW',
    specialties: ['Substance Abuse', 'Recovery', 'Mindfulness'],
    patientPreferences: {
      ageGroups: ['Adults', 'Young Adults'],
      issues: ['Substance Abuse', 'Addiction', 'Recovery', 'Anxiety'],
      excludedIssues: [],
      genders: ['Male'],
      languages: ['English', 'Korean']
    },
    availabilityStatus: 'Waitlist',
    lastUpdated: '2025-03-05T10:30:00Z'
  },
  {
    id: '6',
    name: 'Dr. Emily Johnson',
    avatar: '/images/user/therapist-04.jpg',
    credentials: 'PhD',
    specialties: ['Child Psychology', 'Play Therapy', 'Developmental Disorders'],
    patientPreferences: {
      ageGroups: ['Children', 'Adolescents'],
      issues: ['ADHD', 'Autism Spectrum', 'Behavioral Issues', 'Anxiety'],
      excludedIssues: [],
      genders: ['All'],
      languages: ['English']
    },
    availabilityStatus: 'AcceptingNew',
    lastUpdated: '2025-03-25T13:40:00Z'
  },
  {
    id: '7',
    name: 'David Nguyen, LPC',
    avatar: '/images/user/therapist-05.jpg',
    credentials: 'LPC',
    specialties: ['Grief Counseling', 'Depression', 'Existential Therapy'],
    patientPreferences: {
      ageGroups: ['Adults', 'Seniors'],
      issues: ['Grief', 'Loss', 'Existential Crises', 'Life Transitions'],
      excludedIssues: ['Active Addiction', 'Violence'],
      genders: ['All'],
      languages: ['English', 'Vietnamese']
    },
    availabilityStatus: 'Full',
    lastUpdated: '2025-03-12T15:20:00Z'
  },
  {
    id: '8',
    name: 'Sophia Martinez, LCSW',
    credentials: 'LCSW',
    specialties: ['Trauma Recovery', 'EMDR', 'Crisis Intervention'],
    patientPreferences: {
      ageGroups: ['Adults', 'Adolescents'],
      issues: ['Trauma', 'PTSD', 'Abuse Survivors', 'Anxiety'],
      excludedIssues: [],
      genders: ['Female'],
      languages: ['English', 'Spanish']
    },
    availabilityStatus: 'AcceptingNew',
    lastUpdated: '2025-03-28T09:10:00Z'
  }
];

export default mockTherapists;
