import { VALIDATION_RULES, ERROR_MESSAGES, RATE_LIMITS } from '../config/constants';

/**
 * Validation utilities
 */
export const validateEmail = (email) => {
  if (!email) return ERROR_MESSAGES.required;
  if (!VALIDATION_RULES.email.pattern.test(email)) {
    return ERROR_MESSAGES.invalidEmail;
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone) return ERROR_MESSAGES.required;
  const cleanPhone = phone.replace(/\D/g, '');
  if (!VALIDATION_RULES.phone.pattern.test(cleanPhone)) {
    return ERROR_MESSAGES.invalidPhone;
  }
  return null;
};

export const validateName = (name, fieldName = 'Name') => {
  if (!name) return `${fieldName} is required`;
  if (name.length < VALIDATION_RULES.name.minLength) {
    return `${fieldName} must be at least ${VALIDATION_RULES.name.minLength} characters`;
  }
  if (name.length > VALIDATION_RULES.name.maxLength) {
    return `${fieldName} must be less than ${VALIDATION_RULES.name.maxLength} characters`;
  }
  return null;
};

export const validateMessage = (message) => {
  if (!message) return ERROR_MESSAGES.required;
  if (message.length < VALIDATION_RULES.message.minLength) {
    return `Message must be at least ${VALIDATION_RULES.message.minLength} characters`;
  }
  if (message.length > VALIDATION_RULES.message.maxLength) {
    return `Message must be less than ${VALIDATION_RULES.message.maxLength} characters`;
  }
  return null;
};

/**
 * Form validation helper
 */
export const validateForm = (formData, rules = {}) => {
  const errors = {};
  let isValid = true;

  // Validate each field based on provided rules
  Object.keys(rules).forEach(field => {
    const value = formData.get ? formData.get(field) : formData[field];
    const rule = rules[field];
    let error = null;

    switch (rule.type) {
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'name':
        error = validateName(value, rule.label);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      case 'required':
        error = value ? null : `${rule.label || field} is required`;
        break;
      default:
        break;
    }

    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
};

/**
 * Rate limiting utilities
 */
export const checkRateLimit = (key, limit = RATE_LIMITS.formSubmission) => {
  const now = Date.now();
  const lastTime = localStorage.getItem(`rateLimit_${key}`);
  
  if (lastTime && now - parseInt(lastTime) < limit) {
    return false;
  }
  
  localStorage.setItem(`rateLimit_${key}`, now.toString());
  return true;
};

/**
 * URL and navigation utilities
 */
export const isExternalUrl = (url) => {
  return url && (url.startsWith('http://') || url.startsWith('https://'));
};

export const generateWhatsAppUrl = (phone, message = '') => {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMessage}`;
};

export const generateMailtoUrl = (email, subject = '', body = '') => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const queryString = params.toString();
  return `mailto:${email}${queryString ? '?' + queryString : ''}`;
};

/**
 * Formatting utilities
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  
  // Format Kenyan phone numbers
  if (cleaned.startsWith('254')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
};

export const formatCurrency = (amount, currency = 'KES') => {
  if (typeof amount !== 'number') return amount;
  
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };
  
  return new Intl.DateTimeFormat('en-KE', defaultOptions).format(new Date(date));
};

/**
 * Delivery cost calculation
 */
export const calculateDeliveryEstimate = (packageType, weight, distance) => {
  const baseRates = {
    standard: 200,
    express: 350,
    business: 500
  };
  
  const baseRate = baseRates[packageType] || baseRates.standard;
  const weightCost = Math.max(0, weight - 1) * 50; // First kg free
  const distanceCost = Math.max(0, distance - 5) * 20; // First 5km included
  
  return baseRate + weightCost + distanceCost;
};

/**
 * Image optimization utilities
 */
export const getOptimizedImageUrl = (imagePath, width, height, quality = 85) => {
  // If using a CDN or image optimization service, format the URL accordingly
  // For now, return the original path
  return imagePath;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Local storage utilities
 */
export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
    return false;
  }
};

export const getLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Failed to read from localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Failed to remove from localStorage:', error);
    return false;
  }
};

/**
 * Analytics utilities
 */
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  // Facebook Pixel event tracking
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, properties);
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

/**
 * SEO utilities
 */
export const updatePageTitle = (title, siteName = 'XOBO Delivery') => {
  document.title = title ? `${title} | ${siteName}` : siteName;
};

export const updateMetaDescription = (description) => {
  const metaTag = document.querySelector('meta[name="description"]');
  if (metaTag) {
    metaTag.setAttribute('content', description);
  }
};

/**
 * Performance utilities
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Error handling utilities
 */
export const handleApiError = (error) => {
  console.error('API Error:', error);
  
  if (error.response) {
    // Server responded with error status
    return error.response.data?.message || ERROR_MESSAGES.submissionError;
  } else if (error.request) {
    // Network error
    return ERROR_MESSAGES.networkError;
  } else {
    // Other error
    return ERROR_MESSAGES.submissionError;
  }
};

/**
 * Device detection utilities
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
  return window.innerWidth > 1024;
}; 