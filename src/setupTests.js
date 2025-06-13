// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock environment variables for testing
process.env.REACT_APP_ENVIRONMENT = 'test';
process.env.REACT_APP_VERSION = '1.0.0';
process.env.REACT_APP_COMPANY_PHONE = '+254799396000';
process.env.REACT_APP_COMPANY_EMAIL = 'info@xobo.co.ke';
process.env.REACT_APP_WHATSAPP_NUMBER = '254799396000';
process.env.REACT_APP_BUSINESS_PORTAL_URL = 'https://biz.xobo.co.ke/';
process.env.REACT_APP_WEB3FORMS_ACCESS_KEY = 'test-access-key';
process.env.REACT_APP_GOOGLE_MAPS_API_KEY = 'test-maps-key';

// Mock fetch globally
global.fetch = jest.fn();

// Mock window.location
delete window.location;
window.location = {
  href: 'http://localhost:3000',
  protocol: 'http:',
  hostname: 'localhost',
  hash: ''
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo
window.scrollTo = jest.fn();

// Mock console methods to avoid noise in tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeEach(() => {
  // Reset mocks
  jest.clearAllMocks();
  global.fetch.mockClear();
  
  // Mock console to reduce noise, but allow specific messages
  console.error = jest.fn((message) => {
    if (typeof message === 'string' && message.includes('Warning: ReactDOM.render')) {
      return;
    }
    originalConsoleError(message);
  });
  
  console.warn = jest.fn((message) => {
    if (typeof message === 'string' && message.includes('Security Event:')) {
      return; // Allow security event warnings in tests
    }
    originalConsoleWarn(message);
  });
});

afterEach(() => {
  // Restore console methods
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

// Custom test utilities
export const createMockFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return formData;
};

export const mockSuccessfulFormSubmission = () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true, message: 'Form submitted successfully' })
  });
};

export const mockFailedFormSubmission = (error = 'Network error') => {
  global.fetch.mockRejectedValueOnce(new Error(error));
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock; 