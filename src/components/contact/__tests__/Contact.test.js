import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';

// Mock dependencies
jest.mock('../../common/ScrollToTop', () => ({
  scrollToTop: jest.fn()
}));

jest.mock('../../../utils/security', () => ({
  __esModule: true,
  default: {
    validateFormData: jest.fn(),
    containsSecurityThreats: jest.fn(),
    logSecurityEvent: jest.fn(),
    isRateLimited: jest.fn(),
    generateCSRFToken: jest.fn()
  }
}));

jest.mock('../../../config/constants', () => ({
  API_CONFIG: {
    web3FormsAccessKey: 'test-key',
    web3FormsEndpoint: 'https://api.web3forms.com/submit'
  },
  CONTACT_INFO: {
    phone: '+254799396000',
    email: 'info@xobo.co.ke'
  }
}));

// Mock fetch
global.fetch = jest.fn();

describe('Contact Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch.mockClear();
  });

  test('renders contact form correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('displays contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('+254 799 / 739 396 000')).toBeInTheDocument();
    expect(screen.getByText('info@xobo.co.ke')).toBeInTheDocument();
    expect(screen.getByText('Nairobi, Kenya')).toBeInTheDocument();
  });

  test('shows operating hours', () => {
    render(<Contact />);
    
    expect(screen.getByText('Operating Hours')).toBeInTheDocument();
    expect(screen.getByText(/monday - friday/i)).toBeInTheDocument();
    expect(screen.getByText(/saturday/i)).toBeInTheDocument();
    expect(screen.getByText(/sunday/i)).toBeInTheDocument();
  });

  test('handles form input changes', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    
    await user.type(firstNameInput, 'John');
    await user.type(lastNameInput, 'Doe');
    await user.type(emailInput, 'john@example.com');
    
    expect(firstNameInput).toHaveValue('John');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('john@example.com');
  });

  test('validates form before submission', async () => {
    const SecurityUtils = require('../../../utils/security').default;
    SecurityUtils.validateFormData.mockReturnValue({
      isValid: false,
      errors: {
        firstName: 'First name is required',
        email: 'Please enter a valid email address'
      }
    });
    SecurityUtils.containsSecurityThreats.mockReturnValue(false);
    SecurityUtils.isRateLimited.mockReturnValue(false);

    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    expect(SecurityUtils.validateFormData).toHaveBeenCalled();
    expect(screen.getByText('Please correct the errors below')).toBeInTheDocument();
  });

  test('detects security threats in form input', async () => {
    const SecurityUtils = require('../../../utils/security').default;
    SecurityUtils.containsSecurityThreats.mockReturnValue(true);
    SecurityUtils.isRateLimited.mockReturnValue(false);

    const user = userEvent.setup();
    render(<Contact />);
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    await user.type(firstNameInput, '<script>alert("xss")</script>');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    expect(SecurityUtils.logSecurityEvent).toHaveBeenCalledWith(
      'Potential XSS attempt in contact form',
      expect.any(Object)
    );
    expect(screen.getByText('Invalid input detected. Please check your data.')).toBeInTheDocument();
  });

  test('handles rate limiting', async () => {
    const SecurityUtils = require('../../../utils/security').default;
    SecurityUtils.isRateLimited.mockReturnValue(true);

    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    expect(screen.getByText('Please wait before submitting again')).toBeInTheDocument();
  });

  test('submits form successfully', async () => {
    const SecurityUtils = require('../../../utils/security').default;
    SecurityUtils.validateFormData.mockReturnValue({
      isValid: true,
      errors: {}
    });
    SecurityUtils.containsSecurityThreats.mockReturnValue(false);
    SecurityUtils.isRateLimited.mockReturnValue(false);
    SecurityUtils.generateCSRFToken.mockReturnValue('mock-csrf-token');

    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: true })
    });

    const user = userEvent.setup();
    render(<Contact />);
    
    // Fill out form
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message.');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Check that fetch was called
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.web3forms.com/submit',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
      );
    });

    // Check success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument();
    });
  });

  test('handles form submission error', async () => {
    const SecurityUtils = require('../../../utils/security').default;
    SecurityUtils.validateFormData.mockReturnValue({
      isValid: true,
      errors: {}
    });
    SecurityUtils.containsSecurityThreats.mockReturnValue(false);
    SecurityUtils.isRateLimited.mockReturnValue(false);
    SecurityUtils.generateCSRFToken.mockReturnValue('mock-csrf-token');

    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const user = userEvent.setup();
    render(<Contact />);
    
    // Fill out form
    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelName=/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message.');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to send message. Please try again.')).toBeInTheDocument();
    });
    
    expect(SecurityUtils.logSecurityEvent).toHaveBeenCalledWith(
      'Form submission error',
      { error: 'Network error' }
    );
  });

  test('displays form selection dropdown', () => {
    render(<Contact />);
    
    const selectElement = screen.getByDisplayValue('Customer Care');
    expect(selectElement).toBeInTheDocument();
    
    // Check if all options are present
    expect(screen.getByText('Customer Care')).toBeInTheDocument();
    expect(screen.getByText('Delivery Partner')).toBeInTheDocument();
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });

  test('renders testimonials section', () => {
    render(<Contact />);
    
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john smith/i)).toBeInTheDocument();
  });

  test('renders embedded map', () => {
    render(<Contact />);
    
    const mapIframe = screen.getByTitle('XOBO Delivery Office Location');
    expect(mapIframe).toBeInTheDocument();
    expect(mapIframe).toHaveAttribute('src', expect.stringContaining('google.com/maps'));
  });

  test('has proper accessibility attributes', () => {
    render(<Contact />);
    
    const form = screen.getByRole('form', { hidden: true });
    expect(form).toBeInTheDocument();
    
    // Check labels are associated with inputs
    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput).toHaveAttribute('id', 'firstName');
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('id', 'email');
  });
}); 