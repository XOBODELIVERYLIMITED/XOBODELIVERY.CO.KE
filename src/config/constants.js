// Application Constants
export const APP_CONFIG = {
  name: 'XOBO Delivery',
  version: process.env.REACT_APP_VERSION || '1.0.0',
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  baseUrl: process.env.PUBLIC_URL || '',
};

// Contact Information
export const CONTACT_INFO = {
  phone: process.env.REACT_APP_COMPANY_PHONE || '+254799396000',
  email: process.env.REACT_APP_COMPANY_EMAIL || 'info@xobo.co.ke',
  whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER || '254799396000',
  address: {
    street: 'Longonot Place, Kijabe Street',
    city: 'Nairobi',
    country: 'Kenya',
    coordinates: {
      lat: -1.275245,
      lng: 36.816728
    }
  }
};

// Business URLs
export const EXTERNAL_URLS = {
  businessPortal: process.env.REACT_APP_BUSINESS_PORTAL_URL || 'https://biz.xobo.co.ke/',
  helpGuide: process.env.REACT_APP_HELP_GUIDE_URL || 'https://scribehow.com/viewer/Creating_An_Account_And_Managing_Your_Profile__bnodEkxRRriykctCzB8j7w',
  whatsappChat: `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}`,
  googleMaps: 'https://maps.google.com/maps?ll=-1.275245,36.816728&z=16&t=m&hl=en&gl=KE&mapclient=embed&cid=15865747215889747888'
};

// API Configuration
export const API_CONFIG = {
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  web3FormsAccessKey: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || '3b3b723b-5b0c-4168-9679-6acc5dfe3940',
  web3FormsEndpoint: 'https://api.web3forms.com/submit'
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Services', path: '/services', internal: true },
  { name: 'Client Guide', path: '/client-guide', internal: true },
  { name: 'Company Info', path: '/company-info', internal: true },
  { name: 'Contact', path: '/contact', internal: true },
  { name: 'FAQs', path: '/faq', internal: true },
  { name: 'Help', path: EXTERNAL_URLS.helpGuide, internal: false }
];

// Service Types
export const SERVICES = {
  express: {
    name: 'Express Delivery',
    path: '/services/express',
    description: 'Same-day delivery service for urgent packages',
    icon: 'FaShippingFast',
    baseRate: 350
  },
  scheduled: {
    name: 'Scheduled Delivery',
    path: '/services/scheduled',
    description: 'Plan your deliveries in advance',
    icon: 'FaTruckMoving',
    baseRate: 200
  },
  business: {
    name: 'Business Solutions',
    path: '/services/business',
    description: 'Customized delivery solutions for businesses',
    icon: 'FaBuilding',
    baseRate: 500
  }
};

// Company Statistics
export const COMPANY_STATS = {
  activeRiders: '200+',
  deliveries: '15,000+',
  businessClients: '20+',
  onTimeRate: '98%',
  countiesCovered: 47
};

// Operating Hours
export const OPERATING_HOURS = {
  weekdays: { start: '08:00', end: '20:00', label: 'Monday - Friday' },
  saturday: { start: '09:00', end: '18:00', label: 'Saturday' },
  sunday: { start: '10:00', end: '16:00', label: 'Sunday' }
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: process.env.REACT_APP_FACEBOOK_URL || '',
  twitter: process.env.REACT_APP_TWITTER_URL || '',
  linkedin: process.env.REACT_APP_LINKEDIN_URL || '',
  instagram: process.env.REACT_APP_INSTAGRAM_URL || ''
};

// Form Validation Rules
export const VALIDATION_RULES = {
  phone: {
    minLength: 10,
    maxLength: 12,
    pattern: /^\d{10,12}$/
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  name: {
    minLength: 2,
    maxLength: 50
  },
  message: {
    minLength: 10,
    maxLength: 1000
  }
};

// Rate Limiting
export const RATE_LIMITS = {
  formSubmission: 10000, // 10 seconds between submissions
  apiCalls: 1000 // 1 second between API calls
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'XOBO Delivery - Simple · Fast · Reliable',
  titleTemplate: '%s | XOBO Delivery',
  description: 'XOBO Delivery Limited offers fast, reliable delivery services across Kenya. Express delivery, scheduled shipping, and business solutions with real-time tracking.',
  keywords: [
    'delivery service Kenya',
    'courier Nairobi',
    'express delivery',
    'scheduled delivery',
    'business shipping',
    'logistics Kenya',
    'same-day delivery',
    'XOBO Delivery'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xobodeliverylimited.github.io/XOBODELIVERY.CO.KE/',
    siteName: 'XOBO Delivery',
    images: [
      {
        url: '/media/XDL-CLIENT.png',
        width: 1200,
        height: 630,
        alt: 'XOBO Delivery Services'
      }
    ]
  }
};

// Animation Constants
export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8
  },
  easing: 'ease-in-out',
  carousel: {
    autoScrollInterval: 2000,
    transitionDuration: 500
  }
};

// Error Messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Phone number should be between 10 and 12 digits',
  submissionError: 'Failed to send message. Please try again.',
  rateLimit: 'Please wait before submitting again',
  networkError: 'Network error. Please check your connection.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Message sent successfully!',
  subscribed: 'Successfully subscribed to our newsletter!'
}; 