import SecurityUtils from '../security';

// Mock localStorage for testing
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

describe('SecurityUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
  });

  describe('sanitizeInput', () => {
    test('should sanitize HTML entities', () => {
      expect(SecurityUtils.sanitizeInput('<script>alert("xss")</script>'))
        .toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
    });

    test('should handle empty input', () => {
      expect(SecurityUtils.sanitizeInput('')).toBe('');
    });

    test('should handle non-string input', () => {
      expect(SecurityUtils.sanitizeInput(null)).toBe('');
      expect(SecurityUtils.sanitizeInput(undefined)).toBe('');
      expect(SecurityUtils.sanitizeInput(123)).toBe('');
    });

    test('should sanitize quotes and ampersands', () => {
      expect(SecurityUtils.sanitizeInput('Tom & Jerry "movie"'))
        .toBe('Tom &amp; Jerry &quot;movie&quot;');
    });
  });

  describe('validateEmail', () => {
    test('should validate correct email addresses', () => {
      expect(SecurityUtils.validateEmail('test@example.com')).toBe(true);
      expect(SecurityUtils.validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(SecurityUtils.validateEmail('info@xobo.co.ke')).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      expect(SecurityUtils.validateEmail('invalid-email')).toBe(false);
      expect(SecurityUtils.validateEmail('test@')).toBe(false);
      expect(SecurityUtils.validateEmail('@domain.com')).toBe(false);
      expect(SecurityUtils.validateEmail('')).toBe(false);
      expect(SecurityUtils.validateEmail(null)).toBe(false);
    });

    test('should handle whitespace in emails', () => {
      expect(SecurityUtils.validateEmail('  test@example.com  ')).toBe(true);
    });
  });

  describe('validatePhone', () => {
    test('should validate correct phone numbers', () => {
      expect(SecurityUtils.validatePhone('1234567890')).toBe(true);
      expect(SecurityUtils.validatePhone('123456789012')).toBe(true);
      expect(SecurityUtils.validatePhone('+254799396000')).toBe(true);
    });

    test('should reject invalid phone numbers', () => {
      expect(SecurityUtils.validatePhone('123')).toBe(false);
      expect(SecurityUtils.validatePhone('12345678901234')).toBe(false);
      expect(SecurityUtils.validatePhone('')).toBe(false);
      expect(SecurityUtils.validatePhone(null)).toBe(false);
    });

    test('should handle phone numbers with formatting', () => {
      expect(SecurityUtils.validatePhone('+254-799-396-000')).toBe(true);
      expect(SecurityUtils.validatePhone('(254) 799 396 000')).toBe(true);
    });
  });

  describe('validateName', () => {
    test('should validate correct names', () => {
      expect(SecurityUtils.validateName('John')).toBe(true);
      expect(SecurityUtils.validateName('Mary Jane')).toBe(true);
      expect(SecurityUtils.validateName('O\'Connor')).toBe(true);
    });

    test('should reject invalid names', () => {
      expect(SecurityUtils.validateName('J')).toBe(false); // Too short
      expect(SecurityUtils.validateName('')).toBe(false);
      expect(SecurityUtils.validateName('a'.repeat(51))).toBe(false); // Too long
      expect(SecurityUtils.validateName(null)).toBe(false);
    });

    test('should handle whitespace in names', () => {
      expect(SecurityUtils.validateName('  John  ')).toBe(true);
    });
  });

  describe('validateMessage', () => {
    test('should validate correct messages', () => {
      expect(SecurityUtils.validateMessage('This is a valid message.')).toBe(true);
      expect(SecurityUtils.validateMessage('Hello world!')).toBe(true);
    });

    test('should reject invalid messages', () => {
      expect(SecurityUtils.validateMessage('Short')).toBe(false); // Too short
      expect(SecurityUtils.validateMessage('')).toBe(false);
      expect(SecurityUtils.validateMessage('a'.repeat(1001))).toBe(false); // Too long
      expect(SecurityUtils.validateMessage(null)).toBe(false);
    });
  });

  describe('isRateLimited', () => {
    test('should not rate limit first action', () => {
      localStorageMock.getItem.mockReturnValue(null);
      expect(SecurityUtils.isRateLimited('formSubmission')).toBe(false);
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    test('should rate limit quick successive actions', () => {
      const now = Date.now();
      localStorageMock.getItem.mockReturnValue((now - 5000).toString()); // 5 seconds ago
      expect(SecurityUtils.isRateLimited('formSubmission')).toBe(true);
    });

    test('should allow action after rate limit period', () => {
      const now = Date.now();
      localStorageMock.getItem.mockReturnValue((now - 15000).toString()); // 15 seconds ago
      expect(SecurityUtils.isRateLimited('formSubmission')).toBe(false);
    });
  });

  describe('generateCSRFToken', () => {
    test('should generate a token', () => {
      const token = SecurityUtils.generateCSRFToken();
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(10);
    });

    test('should generate unique tokens', () => {
      const token1 = SecurityUtils.generateCSRFToken();
      const token2 = SecurityUtils.generateCSRFToken();
      expect(token1).not.toBe(token2);
    });
  });

  describe('validateFormData', () => {
    test('should validate correct form data', () => {
      const formData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '1234567890',
        message: 'This is a valid message.'
      };
      const result = SecurityUtils.validateFormData(formData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    test('should return errors for invalid form data', () => {
      const formData = {
        firstName: 'J',
        lastName: '',
        email: 'invalid-email',
        phone: '123',
        message: 'Short'
      };
      const result = SecurityUtils.validateFormData(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.firstName).toBeDefined();
      expect(result.errors.lastName).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.message).toBeDefined();
    });
  });

  describe('containsSecurityThreats', () => {
    test('should detect script tags', () => {
      expect(SecurityUtils.containsSecurityThreats('<script>alert("xss")</script>')).toBe(true);
      expect(SecurityUtils.containsSecurityThreats('<SCRIPT>alert("xss")</SCRIPT>')).toBe(true);
    });

    test('should detect javascript protocol', () => {
      expect(SecurityUtils.containsSecurityThreats('javascript:alert("xss")')).toBe(true);
      expect(SecurityUtils.containsSecurityThreats('JAVASCRIPT:alert("xss")')).toBe(true);
    });

    test('should detect event handlers', () => {
      expect(SecurityUtils.containsSecurityThreats('onclick=alert("xss")')).toBe(true);
      expect(SecurityUtils.containsSecurityThreats('onload =alert("xss")')).toBe(true);
    });

    test('should detect other dangerous elements', () => {
      expect(SecurityUtils.containsSecurityThreats('<iframe src="evil.com">')).toBe(true);
      expect(SecurityUtils.containsSecurityThreats('<object data="evil.swf">')).toBe(true);
      expect(SecurityUtils.containsSecurityThreats('eval(userInput)')).toBe(true);
    });

    test('should not flag safe content', () => {
      expect(SecurityUtils.containsSecurityThreats('Hello world!')).toBe(false);
      expect(SecurityUtils.containsSecurityThreats('This is a normal message.')).toBe(false);
      expect(SecurityUtils.containsSecurityThreats('')).toBe(false);
    });

    test('should handle non-string input', () => {
      expect(SecurityUtils.containsSecurityThreats(null)).toBe(false);
      expect(SecurityUtils.containsSecurityThreats(undefined)).toBe(false);
    });
  });

  describe('isSecureConnection', () => {
    test('should detect HTTPS', () => {
      // Mock window.location
      delete window.location;
      window.location = { protocol: 'https:', hostname: 'example.com' };
      expect(SecurityUtils.isSecureConnection()).toBe(true);
    });

    test('should allow localhost', () => {
      delete window.location;
      window.location = { protocol: 'http:', hostname: 'localhost' };
      expect(SecurityUtils.isSecureConnection()).toBe(true);
    });

    test('should reject insecure connections', () => {
      delete window.location;
      window.location = { protocol: 'http:', hostname: 'example.com' };
      expect(SecurityUtils.isSecureConnection()).toBe(false);
    });
  });
}); 