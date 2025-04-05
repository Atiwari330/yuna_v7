// Define call type options
export type CallType = 'Intake' | 'Eligibility & Benefits' | 'Reminder' | 'Follow-up';

// Define call status options
export type CallStatus = 'Completed' | 'Scheduled' | 'In Progress' | 'Failed' | 'Canceled';

// Define sentiment categories
export type SentimentCategory = 'Positive' | 'Neutral' | 'Negative';

// Main interface for call record data
export interface CallRecord {
  id: string;
  clientName: string;
  clientId: string;
  callType: CallType;
  dateTime: string; // ISO date string
  duration: number; // Duration in seconds
  status: CallStatus;
  sentimentScore: number; // Score from 0 to 1
  sentimentCategory: SentimentCategory;
  recordingUrl?: string; // Optional URL to recording
  notes?: string; // Optional call notes/transcript
  agentId?: string; // Optional ID of AI agent that made the call
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
