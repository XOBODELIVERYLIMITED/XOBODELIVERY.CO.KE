/**
 * Responsive design helper utilities
 */

// Check if the device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Check if the device is a small mobile
export const isSmallMobile = () => {
  return window.innerWidth <= 576;
};

// Check if the device is a tablet
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

// Check if the device is a desktop
export const isDesktop = () => {
  return window.innerWidth > 1024;
};

// Check if the device has touch capabilities
export const isTouchDevice = () => {
  return ('ontouchstart' in window) || 
    (navigator.maxTouchPoints > 0) || 
    (navigator.msMaxTouchPoints > 0);
};

// Add responsive classes to the body element
export const addResponsiveClasses = () => {
  const body = document.body;
  
  // Remove existing classes
  body.classList.remove('is-mobile', 'is-small-mobile', 'is-tablet', 'is-desktop', 'is-touch');
  
  // Add new classes
  if (isMobile()) body.classList.add('is-mobile');
  if (isSmallMobile()) body.classList.add('is-small-mobile');
  if (isTablet()) body.classList.add('is-tablet');
  if (isDesktop()) body.classList.add('is-desktop');
  if (isTouchDevice()) body.classList.add('is-touch');
};

// Setup responsive helper
export const setupResponsiveHelper = () => {
  // Initial call
  addResponsiveClasses();
  
  // Update on resize
  window.addEventListener('resize', addResponsiveClasses);
  
  // Update on orientation change
  window.addEventListener('orientationchange', () => {
    setTimeout(addResponsiveClasses, 100);
  });
};

export default setupResponsiveHelper; 