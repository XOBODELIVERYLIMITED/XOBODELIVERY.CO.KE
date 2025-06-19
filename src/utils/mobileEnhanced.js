/**
 * Enhanced Mobile Optimization Utilities
 * Provides mobile-specific functionality without breaking interactions
 */

import { BREAKPOINTS } from '../config/constants';

class MobileEnhanced {
  constructor() {
    this.isMobile = false;
    this.isTablet = false;
    this.isTouch = false;
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    
    this.init();
  }

  init() {
    this.detectDevice();
    this.setupViewportFix();
    this.setupResizeHandler();
    this.setupTouchOptimizations();
    this.addDeviceClasses();
    this.setupInteractionOptimizations();
  }

  detectDevice() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    
    this.isMobile = this.screenWidth <= BREAKPOINTS.TABLET_SM;
    this.isTablet = this.screenWidth > BREAKPOINTS.TABLET_SM && this.screenWidth <= BREAKPOINTS.TABLET_LG;
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  addDeviceClasses() {
    const body = document.body;
    const html = document.documentElement;
    
    // Remove existing classes
    body.classList.remove('is-mobile', 'is-tablet', 'is-desktop', 'is-touch', 'no-touch');
    html.classList.remove('is-mobile', 'is-tablet', 'is-desktop', 'is-touch', 'no-touch');
    
    // Add device classes
    if (this.isMobile) {
      body.classList.add('is-mobile');
      html.classList.add('is-mobile');
    } else if (this.isTablet) {
      body.classList.add('is-tablet');
      html.classList.add('is-tablet');
    } else {
      body.classList.add('is-desktop');
      html.classList.add('is-desktop');
    }
    
    // Add touch classes
    if (this.isTouch) {
      body.classList.add('is-touch');
      html.classList.add('is-touch');
    } else {
      body.classList.add('no-touch');
      html.classList.add('no-touch');
    }
  }

  setupViewportFix() {
    // Fix for iOS Safari viewport height issue
    if (this.isMobile) {
      const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setViewportHeight();
      window.addEventListener('resize', setViewportHeight);
      window.addEventListener('orientationchange', () => {
        setTimeout(setViewportHeight, 100);
      });
    }
  }

  setupResizeHandler() {
    let resizeTimeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.detectDevice();
        this.addDeviceClasses();
        this.emit('deviceChange', {
          isMobile: this.isMobile,
          isTablet: this.isTablet,
          isTouch: this.isTouch,
          screenWidth: this.screenWidth,
          screenHeight: this.screenHeight
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
  }

  setupTouchOptimizations() {
    if (this.isTouch) {
      // Prevent double-tap zoom on buttons and links
      const preventDoubleTapZoom = (e) => {
        if (e.target.matches('button, a, .clickable, [role="button"]')) {
          e.preventDefault();
          e.target.click();
        }
      };

      // Only add if not already added
      if (!document.body.hasAttribute('data-touch-optimized')) {
        document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });
        document.body.setAttribute('data-touch-optimized', 'true');
      }

      // Improve scroll performance on touch devices
      document.body.style.webkitOverflowScrolling = 'touch';
    }
  }

  setupInteractionOptimizations() {
    if (this.isMobile) {
      // Optimize form inputs for mobile
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        // Prevent zoom on focus for iOS
        if (input.type !== 'range' && input.type !== 'file') {
          if (parseFloat(getComputedStyle(input).fontSize) < 16) {
            input.style.fontSize = '16px';
          }
        }
        
        // Add better touch targets
        const computedStyle = getComputedStyle(input);
        const height = parseFloat(computedStyle.height);
        if (height < 44) {
          input.style.minHeight = '44px';
          input.style.padding = '0.75rem';
        }
      });

      // Optimize buttons and clickable elements
      const clickables = document.querySelectorAll('button, a, [role="button"], .clickable');
      clickables.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.height < 44 || rect.width < 44) {
          element.style.minHeight = '44px';
          element.style.minWidth = '44px';
          element.style.display = 'inline-flex';
          element.style.alignItems = 'center';
          element.style.justifyContent = 'center';
        }
      });
    }
  }

  // Enhanced carousel functionality for mobile
  setupMobileCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel || !this.isMobile) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
      
      // Add visual feedback during drag
      carousel.style.transform = `translateX(-${diffX}px)`;
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      
      const diffX = startX - currentX;
      const threshold = 50;
      
      if (Math.abs(diffX) > threshold) {
        // Trigger next/prev based on swipe direction
        const event = new CustomEvent('carouselSwipe', {
          detail: { direction: diffX > 0 ? 'next' : 'prev' }
        });
        carousel.dispatchEvent(event);
      }
      
      // Reset transform
      carousel.style.transform = '';
    };

    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd);
  }

  // Enhanced navigation for mobile
  setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle, .mobile-menu-toggle');
    const nav = document.querySelector('.nav-menu, .navigation-menu');
    
    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Fix common mobile layout issues
  fixMobileLayout() {
    if (!this.isMobile) return;

    // Fix horizontal overflow
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    // Fix images that might break layout
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.style.maxWidth) {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
      }
    });

    // Fix tables on mobile
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      if (!table.closest('.table-responsive')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }

  // Event emitter functionality
  emit(eventName, data) {
    const event = new CustomEvent(`mobile:${eventName}`, { detail: data });
    document.dispatchEvent(event);
  }

  on(eventName, callback) {
    document.addEventListener(`mobile:${eventName}`, callback);
  }

  off(eventName, callback) {
    document.removeEventListener(`mobile:${eventName}`, callback);
  }

  // Public API methods
  getDeviceInfo() {
    return {
      isMobile: this.isMobile,
      isTablet: this.isTablet,
      isTouch: this.isTouch,
      screenWidth: this.screenWidth,
      screenHeight: this.screenHeight
    };
  }

  isSmallScreen() {
    return this.screenWidth <= BREAKPOINTS.MOBILE_LG;
  }

  isMediumScreen() {
    return this.screenWidth > BREAKPOINTS.MOBILE_LG && this.screenWidth <= BREAKPOINTS.TABLET_LG;
  }

  isLargeScreen() {
    return this.screenWidth > BREAKPOINTS.DESKTOP_SM;
  }

  // Utility to check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Smooth scroll with mobile optimization
  smoothScrollTo(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = this.isMobile ? 500 : 800; // Faster on mobile
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
}

// Create singleton instance
const mobileEnhanced = new MobileEnhanced();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    mobileEnhanced.fixMobileLayout();
    mobileEnhanced.setupMobileNavigation();
  });
} else {
  mobileEnhanced.fixMobileLayout();
  mobileEnhanced.setupMobileNavigation();
}

export default mobileEnhanced; 