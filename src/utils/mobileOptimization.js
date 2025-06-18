/**
 * Mobile Optimization Utilities
 * Ensures proper mobile experience across all devices
 */

// Minimum touch target size (44px for iOS, 48px for Android)
const MIN_TOUCH_TARGET = 44;

// Disable animations and hover effects on mobile
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
    
    // Add CSS rules to disable animations and hover effects
    styleElement.textContent = `
      @media (max-width: 768px) {
        *:not(.nav-btn):not(.nav-btn *) {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
        
        a:hover:not(.nav-btn),
        button:hover:not(.nav-btn),
        .btn:hover:not(.nav-btn),
        .button:hover:not(.nav-btn),
        .card:hover,
        .nav-link:hover,
        .dropdown-item:hover,
        .icon:hover:not(.nav-btn *),
        [class*="hover"]:not(.nav-btn),
        [class*="Hover"]:not(.nav-btn) {
          transform: none !important;
          box-shadow: inherit !important;
          background-color: inherit !important;
          color: inherit !important;
          border-color: inherit !important;
          opacity: 1 !important;
          filter: none !important;
        }
        
        /* Preserve nav button functionality */
        .nav-btn {
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .nav-btn:hover {
          transform: scale(1.05) !important;
        }
      }
    `;
    
    // Disable hover by adding a data attribute
    document.documentElement.setAttribute('data-no-hover', 'true');
    
    // Make sure the nav button is still interactive
    const navButton = document.querySelector('.nav-btn');
    if (navButton) {
      navButton.style.transition = 'all 0.3s ease';
      navButton.style.cursor = 'pointer';
    }
  } else {
    // Remove the class if not on mobile
    document.body.classList.remove('mobile-no-animations');
    document.documentElement.removeAttribute('data-no-hover');
    
    // Remove the style element if it exists
    const styleElement = document.getElementById('mobile-optimization-styles');
    if (styleElement) {
      styleElement.textContent = '';
    }
  }
};

// Optimize touch targets for mobile devices
export const optimizeTouchTargets = () => {
  if (window.innerWidth <= 768) {
    const touchElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    
    touchElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(element);
      
      // Ensure minimum touch target size
      if (rect.height < MIN_TOUCH_TARGET) {
        element.style.minHeight = `${MIN_TOUCH_TARGET}px`;
        element.style.display = element.style.display || 'inline-flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
      }
      
      // Ensure proper padding for touch
      const paddingTop = parseInt(computedStyle.paddingTop) || 0;
      const paddingBottom = parseInt(computedStyle.paddingBottom) || 0;
      const totalVerticalPadding = paddingTop + paddingBottom;
      
      if (totalVerticalPadding < 12) {
        element.style.padding = `${Math.max(8, (MIN_TOUCH_TARGET - rect.height) / 2)}px ${computedStyle.paddingLeft || '12px'}`;
      }
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
      if (window.getComputedStyle(input).fontSize === '16px') {
        return;
      }
      input.style.fontSize = '16px';
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
    
    // Add proper alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
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
      
      // Trigger resize event for components that need it
      window.dispatchEvent(new Event('resize'));
    }, 200);
  };
  
  window.addEventListener('orientationchange', handleOrientation);
  if (window.screen && window.screen.orientation) {
    window.screen.orientation.addEventListener('change', handleOrientation);
  }
};

// Main mobile optimization function
export const initializeMobileOptimizations = () => {
  // Run initial optimizations
  fixViewportHeight();
  handleSafeAreaInsets();
  optimizeScrolling();
  handleOrientationChange();
  disableAnimationsAndHoverEffects();
  
  // Run after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeTouchTargets();
      preventInputZoom();
      optimizeImagesForMobile();
      disableAnimationsAndHoverEffects();
    });
  } else {
    optimizeTouchTargets();
    preventInputZoom();
    optimizeImagesForMobile();
    disableAnimationsAndHoverEffects();
  }
  
  // Re-optimize when new content is added
  const observer = new MutationObserver((mutations) => {
    let shouldOptimize = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldOptimize = true;
      }
    });
    
    if (shouldOptimize) {
      setTimeout(() => {
        optimizeTouchTargets();
        optimizeImagesForMobile();
        disableAnimationsAndHoverEffects();
      }, 100);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Handle window resize for responsive breakpoints
  window.addEventListener('resize', () => {
    disableAnimationsAndHoverEffects();
  });
};

export default initializeMobileOptimizations; 