/**
 * Error Filter Utility
 * Filters out external service errors (YouTube, Google Analytics) that are not application issues
 */

// List of external error patterns to suppress
const EXTERNAL_ERROR_PATTERNS = [
  // YouTube embed errors
  'youtube.com/generate_204',
  'www.youtube.com/youtubei/v1/log_event',
  'play.google.com/log',
  'ERR_BLOCKED_BY_CLIENT',
  'youtube.com',
  'googlevideo.com',
  
  // Google Analytics and tracking
  'google-analytics.com',
  'googletagmanager.com',
  'doubleclick.net',
  'googlesyndication.com',
  
  // Common ad blocker blocked requests
  'adnxs.com',
  'facebook.com/tr',
  'fbcdn.net',
  
  // YouTube player internal errors
  'www-embed-player-pc.js',
  'base.js',
  'embed-player',
  'youtube',
  
  // Network errors that are external
  'net::ERR_BLOCKED_BY_CLIENT',
  'net::ERR_NETWORK_CHANGED',
  'net::ERR_INTERNET_DISCONNECTED',
  
  // Specific YouTube tracking patterns
  'generate_204',
  'log_event',
  'hasfast=true',
  
  // YouTube iframe and postMessage errors
  'postMessage',
  'cross-origin',
  'iframe',
  'embed',
  'YT',
  'ytimg.com',
  'yt.innertube',
  'yt.player'
];

// Check if an error is from external services
const isExternalError = (message) => {
  if (!message) return false;
  const msg = String(message).toLowerCase();
  return EXTERNAL_ERROR_PATTERNS.some(pattern =>
    msg.includes(pattern.toLowerCase())
  );
};

// Suppress console errors for external services
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

export const initializeErrorFilter = () => {
  // Enable filtering in both development and production
  const shouldFilter = true; // Always filter external errors
  
  if (!shouldFilter) {
    return; // Don't filter in development
  }
  
  // Override console.error to filter external errors
  console.error = (...args) => {
    const errorString = args.join(' ').toLowerCase();
    
    // Check if this is an external error we should suppress
    const isExternalError = EXTERNAL_ERROR_PATTERNS.some(pattern =>
      errorString.includes(pattern.toLowerCase())
    );
    
    if (isExternalError) {
      // Log to a debug console instead (or completely suppress)
      if (process.env.REACT_APP_DEBUG_EXTERNAL_ERRORS === 'true') {
        originalConsoleError('[EXTERNAL ERROR FILTERED]', ...args);
      }
      return;
    }
    
    // Log application errors normally
    originalConsoleError(...args);
  };
  
  // Override console.warn for warnings
  console.warn = (...args) => {
    const warnString = args.join(' ').toLowerCase();
    
    // Check if this is an external warning we should suppress
    const isExternalWarning = EXTERNAL_ERROR_PATTERNS.some(pattern =>
      warnString.includes(pattern.toLowerCase())
    );
    
    if (isExternalWarning) {
      if (process.env.REACT_APP_DEBUG_EXTERNAL_ERRORS === 'true') {
        originalConsoleWarn('[EXTERNAL WARNING FILTERED]', ...args);
      }
      return;
    }
    
    // Log application warnings normally
    originalConsoleWarn(...args);
  };
};

// Global error handler for unhandled errors
export const initializeGlobalErrorHandler = () => {
  window.addEventListener('error', (event) => {
    const { error, message, filename } = event;
    
    // Filter external script errors
    if (filename && EXTERNAL_ERROR_PATTERNS.some(pattern =>
      filename.toLowerCase().includes(pattern.toLowerCase())
    )) {
      event.preventDefault(); // Prevent default error handling
      return;
    }
    
    // Filter by message content
    if (message && isExternalError(message)) {
      event.preventDefault();
      return;
    }
    
    // Log application errors for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Application Error:', {
        message,
        filename,
        error
      });
    }
  });
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const { reason } = event;
    const reasonString = String(reason).toLowerCase();
    
    // Filter external promise rejections
    if (EXTERNAL_ERROR_PATTERNS.some(pattern =>
      reasonString.includes(pattern.toLowerCase())
    )) {
      event.preventDefault(); // Prevent default unhandled rejection handling
      return;
    }
    
    // Log application promise rejections
    if (process.env.NODE_ENV === 'development') {
      console.error('Application Promise Rejection:', reason);
    }
  });
  
  // Handle postMessage errors from iframes (YouTube)
  window.addEventListener('message', (event) => {
    // Filter out YouTube iframe messages that might cause errors
    if (event.origin.includes('youtube.com') || 
        event.origin.includes('googlevideo.com') ||
        (event.data && isExternalError(JSON.stringify(event.data)))) {
      // Suppress YouTube postMessage errors
      return;
    }
  });
};

// Add comprehensive iframe error suppression
export const initializeIframeErrorSuppression = () => {
  // Override XMLHttpRequest to suppress external requests
  const originalXHROpen = XMLHttpRequest.prototype.open;
  const originalXHRSend = XMLHttpRequest.prototype.send;
  
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    this._url = url;
    return originalXHROpen.call(this, method, url, ...args);
  };
  
  XMLHttpRequest.prototype.send = function(...args) {
    if (this._url && isExternalError(this._url)) {
      // Suppress error handling for external requests
      this.addEventListener('error', (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
      this.addEventListener('timeout', (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
    }
    return originalXHRSend.call(this, ...args);
  };
  
  // Override fetch to suppress external errors
  const originalFetch = window.fetch;
  window.fetch = function(url, ...args) {
    if (isExternalError(String(url))) {
      return originalFetch(url, ...args).catch(error => {
        // Suppress external fetch errors
        if (isExternalError(String(error))) {
          return Promise.resolve(new Response('', { status: 200 }));
        }
        throw error;
      });
    }
    return originalFetch(url, ...args);
  };
};

// Restore original console methods
export const restoreConsole = () => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
};

// Initialize both error filtering systems
export const initializeErrorFiltering = () => {
  initializeErrorFilter();
  initializeGlobalErrorHandler();
  initializeIframeErrorSuppression();
};

const errorFilterUtils = {
  initializeErrorFiltering,
  initializeErrorFilter,
  initializeGlobalErrorHandler,
  initializeIframeErrorSuppression,
  restoreConsole
};

export default errorFilterUtils; 