/**
 * Production-Safe Logger Utility
 * Provides environment-aware logging to prevent console output in production
 */

const isDevelopment = process.env.NODE_ENV === 'development';

const logger = {
  // Error logging - always enabled for debugging
  error: (message, ...args) => {
    if (isDevelopment) {
      console.error('🔴 [ERROR]', message, ...args);
    } else {
      // In production, could send to error reporting service
      // Example: sendToErrorService(message, args);
    }
  },

  // Warning logging - development only
  warn: (message, ...args) => {
    if (isDevelopment) {
      console.warn('🟡 [WARN]', message, ...args);
    }
  },

  // Info logging - development only
  log: (message, ...args) => {
    if (isDevelopment) {
      console.log('ℹ️ [INFO]', message, ...args);
    }
  },

  // Debug logging - development only
  debug: (message, ...args) => {
    if (isDevelopment) {
      console.debug('🔍 [DEBUG]', message, ...args);
    }
  },

  // Success logging - development only
  success: (message, ...args) => {
    if (isDevelopment) {
      console.log('✅ [SUCCESS]', message, ...args);
    }
  },

  // Performance logging
  time: (label) => {
    if (isDevelopment) {
      console.time(`⏱️ [PERF] ${label}`);
    }
  },

  timeEnd: (label) => {
    if (isDevelopment) {
      console.timeEnd(`⏱️ [PERF] ${label}`);
    }
  },

  // Group logging for better organization
  group: (label) => {
    if (isDevelopment) {
      console.group(`📁 ${label}`);
    }
  },

  groupEnd: () => {
    if (isDevelopment) {
      console.groupEnd();
    }
  },

  // Network logging
  network: (method, url, response) => {
    if (isDevelopment) {
      console.log(`🌐 [NETWORK] ${method} ${url}`, response);
    }
  },

  // Component lifecycle logging
  component: (componentName, action, data) => {
    if (isDevelopment) {
      console.log(`⚛️ [COMPONENT] ${componentName} - ${action}`, data);
    }
  }
};

// Export individual methods for convenience
export const { error, warn, log, debug, success, time, timeEnd, group, groupEnd, network, component } = logger;

// Export default logger
export default logger; 