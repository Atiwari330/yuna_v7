import { CallRecord, CallType, CallStatus, SentimentCategory } from '../types/callRecord';

// Mock data array of call records
const mockCallData: CallRecord[] = [
  {
    id: 'call-001',
    clientName: 'Emma Johnson',
    clientId: '1',
    callType: 'Intake',
    dateTime: '2025-04-05T10:30:00Z',
    duration: 420, // 7 minutes
    status: 'Completed',
    sentimentScore: 0.82,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-001.mp3',
    notes: 'Client was very responsive. Completed full intake assessment. Ready to proceed with initial treatment plan.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-05T10:30:00Z',
    updatedAt: '2025-04-05T10:37:00Z'
  },
  {
    id: 'call-002',
    clientName: 'Liam Wilson',
    clientId: '2',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-04T14:15:00Z',
    duration: 385, // 6.4 minutes
    status: 'Completed',
    sentimentScore: 0.65,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-002.mp3',
    notes: 'Verified insurance coverage details. Client had some questions about deductible. Explained co-pay structure.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-04T14:15:00Z',
    updatedAt: '2025-04-04T14:21:25Z'
  },
  {
    id: 'call-003',
    clientName: 'Olivia Brown',
    clientId: '3',
    callType: 'Reminder',
    dateTime: '2025-04-04T16:00:00Z',
    duration: 180, // 3 minutes
    status: 'Completed',
    sentimentScore: 0.9,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-003.mp3',
    notes: 'Confirmed appointment for next Tuesday. Client appreciated the reminder and is looking forward to the session.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T16:00:00Z',
    updatedAt: '2025-04-04T16:03:00Z'
  },
  {
    id: 'call-004',
    clientName: 'Noah Davis',
    clientId: '4',
    callType: 'Follow-up',
    dateTime: '2025-04-05T09:00:00Z',
    duration: 325, // 5.4 minutes
    status: 'Completed',
    sentimentScore: 0.3,
    sentimentCategory: 'Negative',
    recordingUrl: '/recordings/call-004.mp3',
    notes: 'Client expressed frustration with insurance process. Resolved misunderstanding about coverage and assured client of support.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-05T09:00:00Z',
    updatedAt: '2025-04-05T09:05:25Z'
  },
  {
    id: 'call-005',
    clientName: 'Sophia Miller',
    clientId: '5',
    callType: 'Intake',
    dateTime: '2025-04-03T11:30:00Z',
    duration: 450, // 7.5 minutes
    status: 'Completed',
    sentimentScore: 0.75,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-005.mp3',
    notes: 'Completed comprehensive intake. Client provided detailed health history and asked good questions about the therapy process.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-03T11:30:00Z',
    updatedAt: '2025-04-03T11:37:30Z'
  },
  {
    id: 'call-006',
    clientName: 'James Taylor',
    clientId: '6',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-05T13:00:00Z',
    duration: 0, // 0 minutes (scheduled)
    status: 'Scheduled',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T10:15:00Z',
    updatedAt: '2025-04-04T10:15:00Z'
  },
  {
    id: 'call-007',
    clientName: 'Charlotte Anderson',
    clientId: '7',
    callType: 'Reminder',
    dateTime: '2025-04-05T15:45:00Z',
    duration: 0, // 0 minutes (scheduled)
    status: 'Scheduled',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-04T09:30:00Z',
    updatedAt: '2025-04-04T09:30:00Z'
  },
  {
    id: 'call-008',
    clientName: 'Mason Thompson',
    clientId: '8',
    callType: 'Follow-up',
    dateTime: '2025-04-02T10:00:00Z',
    duration: 240, // 4 minutes
    status: 'Completed',
    sentimentScore: 0.72,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-008.mp3',
    notes: 'Client reported good progress with treatment plan. Discussed adjustments to exercises and set next milestone goals.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-02T10:00:00Z',
    updatedAt: '2025-04-02T10:04:00Z'
  },
  {
    id: 'call-009',
    clientName: 'Ava Martin',
    clientId: '9',
    callType: 'Intake',
    dateTime: '2025-04-04T12:30:00Z',
    duration: 410, // 6.8 minutes
    status: 'Completed',
    sentimentScore: 0.68,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-009.mp3',
    notes: 'Completed initial assessment. Client has anxiety concerns and is interested in CBT approach. Recommended twice-weekly sessions initially.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-04T12:30:00Z',
    updatedAt: '2025-04-04T12:36:50Z'
  },
  {
    id: 'call-010',
    clientName: 'William Robinson',
    clientId: '10',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-03T09:30:00Z',
    duration: 300, // 5 minutes
    status: 'Failed',
    sentimentScore: 0.2,
    sentimentCategory: 'Negative',
    notes: 'Call dropped multiple times. Unable to verify all insurance details. Will need to reschedule.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-03T09:30:00Z',
    updatedAt: '2025-04-03T09:35:00Z'
  },
  {
    id: 'call-011',
    clientName: 'Harper Lee',
    clientId: '11',
    callType: 'Reminder',
    dateTime: '2025-04-04T11:00:00Z',
    duration: 150, // 2.5 minutes
    status: 'Completed',
    sentimentScore: 0.85,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-011.mp3',
    notes: 'Reminder for tomorrow\'s appointment. Client confirmed attendance and asked about parking options.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-04T11:00:00Z',
    updatedAt: '2025-04-04T11:02:30Z'
  },
  {
    id: 'call-012',
    clientName: 'Elijah Garcia',
    clientId: '12',
    callType: 'Follow-up',
    dateTime: '2025-04-05T14:30:00Z',
    duration: 0, // 0 minutes (in progress)
    status: 'In Progress',
    sentimentScore: 0.5,
    sentimentCategory: 'Neutral',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-05T14:30:00Z',
    updatedAt: '2025-04-05T14:30:00Z'
  },
  {
    id: 'call-013',
    clientName: 'Mia Lewis',
    clientId: '13',
    callType: 'Eligibility & Benefits',
    dateTime: '2025-04-02T13:15:00Z',
    duration: 360, // 6 minutes
    status: 'Completed',
    sentimentScore: 0.62,
    sentimentCategory: 'Neutral',
    recordingUrl: '/recordings/call-013.mp3',
    notes: 'Verified coverage for specialized therapy services. Explained out-of-network benefits and reimbursement process.',
    agentId: 'agent-yuna-03',
    createdAt: '2025-04-02T13:15:00Z',
    updatedAt: '2025-04-02T13:21:00Z'
  },
  {
    id: 'call-014',
    clientName: 'Benjamin Clark',
    clientId: '14',
    callType: 'Intake',
    dateTime: '2025-04-01T09:00:00Z',
    duration: 435, // 7.25 minutes
    status: 'Completed',
    sentimentScore: 0.78,
    sentimentCategory: 'Positive',
    recordingUrl: '/recordings/call-014.mp3',
    notes: 'Completed detailed intake assessment. Client seeking help with work-related stress. Recommended stress management program.',
    agentId: 'agent-yuna-02',
    createdAt: '2025-04-01T09:00:00Z',
    updatedAt: '2025-04-01T09:07:15Z'
  },
  {
    id: 'call-015',
    clientName: 'Abigail Walker',
    clientId: '15',
    callType: 'Reminder',
    dateTime: '2025-04-03T15:30:00Z',
    duration: 120, // 2 minutes
    status: 'Canceled',
    sentimentScore: 0.4,
    sentimentCategory: 'Negative',
    notes: 'Client canceled upcoming appointment due to scheduling conflict. Will call back to reschedule.',
    agentId: 'agent-yuna-01',
    createdAt: '2025-04-03T15:30:00Z',
    updatedAt: '2025-04-03T15:32:00Z'
  }
];

export default mockCallData;
