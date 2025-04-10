import { LandingPage, LandingPageStatus, LandingPageStats } from '../types/landingPage';

// Helper function to randomly delay between min and max milliseconds
const randomDelay = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Mock data array of landing pages
const mockLandingPages: LandingPage[] = [
  {
    id: 'lp-001',
    name: 'Free Consultation Landing Page',
    referralSourceOrCampaign: 'Google Ads - Search',
    url: 'https://yuna.health/free-consultation',
    status: 'Active',
    createdAt: '2025-03-10T10:15:00Z',
    performance: {
      viewsLast30Days: 3245,
      submissionsLast30Days: 187,
      totalViews: 5890,
      totalSubmissions: 342,
      conversionRate: 0.058
    },
    description: 'Main landing page for Google Ads search campaigns focused on free consultation offers.',
    thumbnailUrl: '/images/landing-pages/free-consultation-thumb.jpg'
  },
  {
    id: 'lp-002',
    name: 'Mental Health Assessment',
    referralSourceOrCampaign: 'Facebook Ads',
    url: 'https://yuna.health/assessment',
    status: 'Active',
    createdAt: '2025-02-15T14:30:00Z',
    performance: {
      viewsLast30Days: 4678,
      submissionsLast30Days: 356,
      totalViews: 9820,
      totalSubmissions: 745,
      conversionRate: 0.076
    },
    description: 'Landing page for Facebook ad campaigns focusing on mental health assessments.',
    thumbnailUrl: '/images/landing-pages/mental-health-assessment-thumb.jpg'
  },
  {
    id: 'lp-003',
    name: 'Family Support Program',
    referralSourceOrCampaign: 'Email Newsletter',
    url: 'https://yuna.health/family-support',
    status: 'Inactive',
    createdAt: '2025-03-05T09:45:00Z',
    performance: {
      viewsLast30Days: 865,
      submissionsLast30Days: 42,
      totalViews: 3420,
      totalSubmissions: 186,
      conversionRate: 0.049
    },
    description: 'Family support program landing page promoted in monthly client newsletters.'
  },
  {
    id: 'lp-004',
    name: 'Therapy Session Bundle',
    referralSourceOrCampaign: 'Instagram Ads',
    url: 'https://yuna.health/therapy-bundle',
    status: 'Active',
    createdAt: '2025-03-22T16:15:00Z',
    performance: {
      viewsLast30Days: 2876,
      submissionsLast30Days: 203,
      totalViews: 3120,
      totalSubmissions: 224,
      conversionRate: 0.071
    },
    thumbnailUrl: '/images/landing-pages/therapy-bundle-thumb.jpg'
  },
  {
    id: 'lp-005',
    name: 'Corporate Wellness Program',
    referralSourceOrCampaign: 'LinkedIn Ads',
    url: 'https://yuna.health/corporate-wellness',
    status: 'Active',
    createdAt: '2025-01-18T11:30:00Z',
    performance: {
      viewsLast30Days: 1256,
      submissionsLast30Days: 98,
      totalViews: 5460,
      totalSubmissions: 420,
      conversionRate: 0.078
    },
    description: 'Landing page targeting HR managers for corporate wellness programs.'
  },
  {
    id: 'lp-006',
    name: 'Virtual Therapy Sessions',
    referralSourceOrCampaign: 'Google Ads - Display',
    url: 'https://yuna.health/virtual-therapy',
    status: 'Active',
    createdAt: '2025-03-30T08:45:00Z',
    performance: {
      viewsLast30Days: 3678,
      submissionsLast30Days: 245,
      totalViews: 4120,
      totalSubmissions: 278,
      conversionRate: 0.067
    },
    thumbnailUrl: '/images/landing-pages/virtual-therapy-thumb.jpg'
  },
  {
    id: 'lp-007',
    name: 'Teen Counseling Services',
    referralSourceOrCampaign: 'School Partnerships',
    url: 'https://yuna.health/teen-counseling',
    status: 'Active',
    createdAt: '2025-02-28T13:20:00Z',
    performance: {
      viewsLast30Days: 1845,
      submissionsLast30Days: 132,
      totalViews: 3560,
      totalSubmissions: 245,
      conversionRate: 0.072
    }
  },
  {
    id: 'lp-008',
    name: 'Anxiety & Depression Support',
    referralSourceOrCampaign: 'TikTok Ads',
    url: 'https://yuna.health/anxiety-depression-support',
    status: 'Inactive',
    createdAt: '2025-02-10T15:10:00Z',
    performance: {
      viewsLast30Days: 987,
      submissionsLast30Days: 54,
      totalViews: 4320,
      totalSubmissions: 312,
      conversionRate: 0.055
    },
    description: 'Specialized landing page for anxiety and depression support services.',
    thumbnailUrl: '/images/landing-pages/anxiety-depression-thumb.jpg'
  }
];

// Landing page service with simulated API functions
const landingPageService = {
  // Get all landing pages with optional filtering
  getLandingPages(filters?: { searchTerm?: string; statusFilter?: string }): Promise<LandingPage[]> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (500-1500ms)
      setTimeout(() => {
        // Simulate 10% chance of error
        if (Math.random() < 0.1) {
          reject(new Error('Failed to fetch landing pages. Please try again.'));
          return;
        }

        let filteredPages = [...mockLandingPages];
        
        // Apply filters if provided
        if (filters) {
          // Filter by search term (match name or referral source)
          if (filters.searchTerm) {
            const searchTerm = filters.searchTerm.toLowerCase();
            filteredPages = filteredPages.filter(
              (page) => 
                page.name.toLowerCase().includes(searchTerm) ||
                page.referralSourceOrCampaign.toLowerCase().includes(searchTerm)
            );
          }
          
          // Filter by status
          if (filters.statusFilter) {
            filteredPages = filteredPages.filter(
              (page) => page.status === filters.statusFilter
            );
          }
        }
        
        // Sort by createdAt (newest first)
        filteredPages.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        
        resolve(filteredPages);
      }, randomDelay(500, 1500));
    });
  },

  // Get landing page statistics
  getLandingPageStats(): Promise<LandingPageStats> {
    return new Promise((resolve, reject) => {
      // Simulate API delay (400-1000ms)
      setTimeout(() => {
        // Simulate 10% chance of error
        if (Math.random() < 0.1) {
          reject(new Error('Failed to fetch landing page statistics. Please try again.'));
          return;
        }

        // Count active pages
        const totalActivePages = mockLandingPages.filter(
          page => page.status === 'Active'
        ).length;
        
        // Calculate aggregate view and submission stats
        const totalViewsLast30Days = mockLandingPages.reduce(
          (sum, page) => sum + page.performance.viewsLast30Days, 0
        );
        
        const totalSubmissionsLast30Days = mockLandingPages.reduce(
          (sum, page) => sum + page.performance.submissionsLast30Days, 0
        );
        
        // Calculate overall conversion rate
        const overallConversionRate = totalViewsLast30Days > 0 
          ? totalSubmissionsLast30Days / totalViewsLast30Days 
          : 0;
        
        resolve({
          totalActivePages,
          totalViewsLast30Days,
          totalSubmissionsLast30Days,
          overallConversionRate
        });
      }, randomDelay(400, 1000));
    });
  }
};

export default landingPageService;
