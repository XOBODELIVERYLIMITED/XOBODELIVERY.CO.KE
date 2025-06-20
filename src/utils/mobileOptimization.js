/**
 * Mobile Optimization Utilities - REVISED
 * Ensures proper mobile experience while preserving essential touch feedback
 */

// Minimum touch target size (44px for iOS, 48px for Android)
const MIN_TOUCH_TARGET = 44;

// List of interactive elements that should preserve touch feedback
const INTERACTIVE_SELECTORS = [
  '.nav-btn',
  '.nav-button',
  '.customer-nav-button', 
  '.hero-button',
  '.cta-primary',
  '.cta-secondary',
  '.submit-button',
  '.edit-btn',
  '.retry-button',
  '.help-button',
  '.action-btn',
  '.mobile-button',
  '.faq-question',
  '.nav-tab',
  '.category-tab',
  '.step-indicator',
  'button[type="submit"]',
  'button[type="button"]',
  '.driver-tabs .tab'
].join(', ');

// Disable problematic animations while preserving essential touch feedback
export const disableAnimationsAndHoverEffects = () => {
  if (window.innerWidth <= 768) {
    // Add a class to the body to target in CSS
    document.body.classList.add('mobile-no-animations');
    
    // Create a style element if it doesn't exist
    let styleElement = document.getElementById('mobile-optimization-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'mobile-optimization-styles';
      document.head.appendChild(styleElement);
    }
    
    // Add CSS rules to disable problematic animations while preserving touch feedback
    styleElement.textContent = `
      @media (max-width: 768px) {
        /* Disable complex animations but preserve essential touch feedback */
        .card:not(.faq-item),
        .service-card:not(:active),
        .feature-card:not(:active),
        .benefit-card:not(:active) {
          transition: none !important;
          animation: none !important;
        }
        
        /* Preserve essential interactive element transitions */
        ${INTERACTIVE_SELECTORS} {
          transition: all 0.2s ease !important;
          cursor: pointer !important;
          pointer-events: auto !important;
          touch-action: manipulation !important;
        }
        
        /* Add proper mobile touch states */
        ${INTERACTIVE_SELECTORS}:active {
          transform: scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }
        
        /* Disable hover effects but preserve focus and active states */
        ${INTERACTIVE_SELECTORS}:hover {
          transition: none;
        }
        
        /* Ensure FAQ items work properly */
        .faq-question {
          transition: background-color 0.2s ease !important;
          cursor: pointer !important;
          pointer-events: auto !important;
        }
        
        .faq-question:active {
          background-color: rgba(22, 35, 77, 0.05) !important;
        }
        
        .faq-answer {
          transition: max-height 0.3s ease-out !important;
        }
        
        .faq-icon {
          transition: transform 0.3s ease !important;
        }
        
        /* Preserve carousel functionality */
        .nav-button:active,
        .customer-nav-button:active {
          background-color: rgba(22, 35, 77, 0.1) !important;
        }
        
        /* Preserve form button functionality */
        .submit-button:active,
        .hero-button:active,
        .cta-primary:active,
        .cta-secondary:active {
          opacity: 0.8 !important;
        }
      }
    `;
    
    // Add data attribute for CSS targeting
    document.documentElement.setAttribute('data-mobile-optimized', 'true');
  } else {
    // Remove the class if not on mobile
    document.body.classList.remove('mobile-no-animations');
    document.documentElement.removeAttribute('data-mobile-optimized');
    
    // Remove the style element if it exists
    const styleElement = document.getElementById('mobile-optimization-styles');
    if (styleElement) {
      styleElement.remove();
    }
  }
};

// Optimize touch targets for mobile devices
export const optimizeTouchTargets = () => {
  if (window.innerWidth <= 768) {
    const touchElements = document.querySelectorAll(INTERACTIVE_SELECTORS);
    
    touchElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      // Ensure minimum touch target size
      if (rect.height < MIN_TOUCH_TARGET) {
        element.style.minHeight = `${MIN_TOUCH_TARGET}px`;
        element.style.display = element.style.display || 'inline-flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
      }
      
      if (rect.width < MIN_TOUCH_TARGET) {
        element.style.minWidth = `${MIN_TOUCH_TARGET}px`;
      }
      
      // Ensure proper touch properties
      element.style.touchAction = 'manipulation';
      element.style.webkitTapHighlightColor = 'rgba(22, 35, 77, 0.2)';
      element.style.cursor = 'pointer';
      element.style.pointerEvents = 'auto';
    });
  }
};

// Fix viewport height issues on mobile
export const fixViewportHeight = () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVh, 100);
  });
};

// Prevent zoom on input focus (iOS)
export const preventInputZoom = () => {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      // Set font-size to 16px to prevent zoom
      if (parseFloat(window.getComputedStyle(input).fontSize) < 16) {
        input.style.fontSize = '16px';
      }
    });
  }
};

// Optimize images for mobile
export const optimizeImagesForMobile = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Add loading="lazy" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Ensure images are responsive
    if (!img.style.maxWidth) {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    }
  });
};

// Handle safe area insets for notched phones
export const handleSafeAreaInsets = () => {
  const isNotchedPhone = /iPhone|iPad|iPod/.test(navigator.userAgent) && 
                        window.screen.height >= 812; // iPhone X and newer
  
  if (isNotchedPhone) {
    document.documentElement.style.setProperty('--safe-area-inset-top', 'env(safe-area-inset-top, 0px)');
    document.documentElement.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom, 0px)');
    document.documentElement.style.setProperty('--safe-area-inset-left', 'env(safe-area-inset-left, 0px)');
    document.documentElement.style.setProperty('--safe-area-inset-right', 'env(safe-area-inset-right, 0px)');
    
    // Add class to body for notched phones
    document.body.classList.add('has-notch');
  }
};

// Optimize scrolling performance
export const optimizeScrolling = () => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Optimize scroll performance for mobile
  const scrollableElements = document.querySelectorAll('[data-scroll]');
  scrollableElements.forEach(element => {
    element.style.webkitOverflowScrolling = 'touch';
    element.style.overscrollBehavior = 'contain';
  });
};

// Handle orientation changes
export const handleOrientationChange = () => {
  let orientationTimer;
  
  const handleOrientation = () => {
    clearTimeout(orientationTimer);
    orientationTimer = setTimeout(() => {
      // Re-run optimizations after orientation change
      optimizeTouchTargets();
      fixViewportHeight();
      disableAnimationsAndHoverEffects();
    }, 200);
  };
  
  window.addEventListener('orientationchange', handleOrientation);
  if (window.screen && window.screen.orientation) {
    window.screen.orientation.addEventListener('change', handleOrientation);
  }
};

// Main mobile optimization function - STREAMLINED
export const initializeMobileOptimizations = () => {
  // Run initial optimizations
  fixViewportHeight();
  handleSafeAreaInsets();
  optimizeScrolling();
  handleOrientationChange();
  
  // Apply mobile optimizations
  const applyOptimizations = () => {
    disableAnimationsAndHoverEffects();
    optimizeTouchTargets();
    preventInputZoom();
    optimizeImagesForMobile();
  };
  
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyOptimizations);
  } else {
    applyOptimizations();
  }
  
  // Single resize handler to avoid conflicts
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      disableAnimationsAndHoverEffects();
      optimizeTouchTargets();
    }, 100);
  });
  
  // Simplified mutation observer for dynamic content
  const observer = new MutationObserver((mutations) => {
    const hasNewInteractiveElements = mutations.some(mutation => 
      Array.from(mutation.addedNodes).some(node => 
        node.nodeType === 1 && (
          (node.matches && node.matches(INTERACTIVE_SELECTORS)) ||
          (node.querySelector && node.querySelector(INTERACTIVE_SELECTORS))
        )
      )
    );
    
    if (hasNewInteractiveElements) {
      setTimeout(optimizeTouchTargets, 50);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

export default initializeMobileOptimizations; 