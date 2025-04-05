import mockCallData from '../mockData/mockCallData';
import { CallRecord, CallType, CallStatus } from '../types/callRecord';

// Helper function to randomly delay between min and max milliseconds
const randomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Call service with simulated API functions
const callService = {
  // Get all calls with optional filtering
  getCalls(filters?: { searchTerm?: string; status?: string; callType?: string }): Promise<CallRecord[]> {
    return new Promise((resolve) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        let filteredCalls = [...mockCallData];
        
        // Apply filters if provided
        if (filters) {
          // Filter by search term
          if (filters.searchTerm) {
            const searchTerm = filters.searchTerm.toLowerCase();
            filteredCalls = filteredCalls.filter(
              (call) => call.clientName.toLowerCase().includes(searchTerm)
            );
          }
          
          // Filter by status
          if (filters.status) {
            filteredCalls = filteredCalls.filter(
              (call) => call.status === filters.status
            );
          }
          
          // Filter by call type
          if (filters.callType) {
            filteredCalls = filteredCalls.filter(
              (call) => call.callType === filters.callType
            );
          }
        }
        
        // Sort by date (newest first)
        filteredCalls.sort((a, b) => 
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
        );
        
        resolve(filteredCalls);
      }, randomDelay(500, 1500));
    });
  },

  // Get call details by ID
  getCallDetails(callId: string): Promise<{ callRecord: CallRecord | null; notes: string }> {
    return new Promise((resolve) => {
      // Simulate API delay (700-1200ms)
      setTimeout(() => {
        const call = mockCallData.find((c) => c.id === callId);
        
        if (call) {
          // Expand the notes with more detailed content for the modal view
          const detailedNotes = call.notes 
            ? call.notes + '\n\nAdditional AI-generated insights: Client tone of voice indicated ' +
              (call.sentimentCategory === 'Positive' 
                ? 'optimism and engagement throughout the call.' 
                : call.sentimentCategory === 'Neutral'
                  ? 'factual and straightforward communication style.'
                  : 'some concerns that may need follow-up attention.')
            : 'No notes available for this call.';
          
          resolve({
            callRecord: call,
            notes: detailedNotes
          });
        } else {
          resolve({
            callRecord: null,
            notes: 'Call record not found.'
          });
        }
      }, randomDelay(700, 1200));
    });
  },

  // Initiate a new AI call
  initiateAICall(clientId: string, callType: string): Promise<{ success: boolean; message: string; callId?: string }> {
    return new Promise((resolve) => {
      // Simulate API delay (800-1500ms)
      setTimeout(() => {
        // Simulate 90% success rate
        const isSuccess = Math.random() < 0.9;
        
        if (isSuccess) {
          const newCallId = `call-${Math.random().toString(36).substring(2, 8)}`;
          
          resolve({
            success: true,
            message: `AI call successfully initiated with client ${clientId} for ${callType}.`,
            callId: newCallId
          });
        } else {
          resolve({
            success: false,
            message: 'Unable to initiate call. Please try again or contact support.'
          });
        }
      }, randomDelay(800, 1500));
    });
  },

  // Get call statistics
  getCallStats(): Promise<{ 
    total: number; 
    completedToday: number; 
    scheduled: number;
    sentimentBreakdown: { positive: number; neutral: number; negative: number };
  }> {
    return new Promise((resolve) => {
      // Simulate API delay (600-1000ms)
      setTimeout(() => {
        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        
        // Count calls by status and date
        const total = mockCallData.length;
        
        const completedToday = mockCallData.filter(
          call => call.status === 'Completed' && 
                 call.dateTime.startsWith(today)
        ).length;
        
        const scheduled = mockCallData.filter(
          call => call.status === 'Scheduled'
        ).length;
        
        // Count calls by sentiment
        const sentimentBreakdown = {
          positive: mockCallData.filter(call => call.sentimentCategory === 'Positive').length,
          neutral: mockCallData.filter(call => call.sentimentCategory === 'Neutral').length,
          negative: mockCallData.filter(call => call.sentimentCategory === 'Negative').length
        };
        
        resolve({
          total,
          completedToday,
          scheduled,
          sentimentBreakdown
        });
      }, randomDelay(600, 1000));
    });
  }
};

export default callService;
