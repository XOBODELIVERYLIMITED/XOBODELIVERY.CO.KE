// Security utility functions for input validation and sanitization

import { VALIDATION_RULES, RATE_LIMITS } from '../config/constants';

/**
 * Sanitize HTML input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  return VALIDATION_RULES.email.pattern.test(email.trim());
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether phone is valid
 */
export const validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= VALIDATION_RULES.phone.minLength && 
         cleanPhone.length <= VALIDATION_RULES.phone.maxLength;
};

/**
 * Validate name format
 * @param {string} name - Name to validate
 * @returns {boolean} - Whether name is valid
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  const trimmedName = name.trim();
  return trimmedName.length >= VALIDATION_RULES.name.minLength && 
         trimmedName.length <= VALIDATION_RULES.name.maxLength;
};

/**
 * Validate message format
 * @param {string} message - Message to validate
 * @returns {boolean} - Whether message is valid
 */
export const validateMessage = (message) => {
  if (!message || typeof message !== 'string') return false;
  const trimmedMessage = message.trim();
  return trimmedMessage.length >= VALIDATION_RULES.message.minLength && 
         trimmedMessage.length <= VALIDATION_RULES.message.maxLength;
};

/**
 * Check if action is rate limited
 * @param {string} action - Action type (e.g., 'formSubmission', 'apiCall')
 * @param {string} identifier - Unique identifier (e.g., IP, user ID)
 * @returns {boolean} - Whether action is rate limited
 */
export const isRateLimited = (action, identifier = 'default') => {
  const key = `${action}_${identifier}`;
  const now = Date.now();
  const lastActionTime = localStorage.getItem(key);
  
  if (!lastActionTime) {
    localStorage.setItem(key, now.toString());
    return false;
  }
  
  const timeDiff = now - parseInt(lastActionTime);
  const rateLimit = RATE_LIMITS[action] || 1000;
  
  if (timeDiff < rateLimit) {
    return true;
  }
  
  localStorage.setItem(key, now.toString());
  return false;
};

/**
 * Generate a simple CSRF token
 * @returns {string} - CSRF token
 */
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Validate form data comprehensively
 * @param {Object} formData - Form data object
 * @returns {Object} - Validation result with errors
 */
export const validateFormData = (formData) => {
  const errors = {};
  
  // Validate first name
  if (!validateName(formData.firstName)) {
    errors.firstName = 'First name must be between 2 and 50 characters';
  }
  
  // Validate last name
  if (!validateName(formData.lastName)) {
    errors.lastName = 'Last name must be between 2 and 50 characters';
  }
  
  // Validate email
  if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate phone
  if (!validatePhone(formData.phone)) {
    errors.phone = 'Phone number should be between 10 and 12 digits';
  }
  
  // Validate message
  if (!validateMessage(formData.message)) {
    errors.message = 'Message must be between 10 and 1000 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Check if current environment is secure (HTTPS)
 * @returns {boolean} - Whether connection is secure
 */
export const isSecureConnection = () => {
  return window.location.protocol === 'https:' || 
         window.location.hostname === 'localhost' ||
         window.location.hostname === '127.0.0.1';
};

/**
 * Log security events for monitoring
 * @param {string} event - Event type
 * @param {Object} details - Event details
 */
export const logSecurityEvent = (event, details = {}) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Security Event:', event, details);
  }
  
  // In production, this would send to a security monitoring service
  // Example: sendToSecurityService({ event, details, timestamp: Date.now() });
};

/**
 * Check for potential security threats in input
 * @param {string} input - Input to check
 * @returns {boolean} - Whether input contains potential threats
 */
export const containsSecurityThreats = (input) => {
  if (!input || typeof input !== 'string') return false;
  
  const threats = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\s*\(/i,
    /expression\s*\(/i
  ];
  
  return threats.some(threat => threat.test(input));
};

const SecurityUtils = {
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  validateFormData,
  isRateLimited,
  generateCSRFToken,
  isSecureConnection,
  logSecurityEvent,
  containsSecurityThreats
};

export default SecurityUtils; 