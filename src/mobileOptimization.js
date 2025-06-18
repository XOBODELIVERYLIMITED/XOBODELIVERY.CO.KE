// Mobile Optimization Script
import './mobileOptimization.css';

// Function to check if the device is mobile
const isMobileDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent)
  );
};

// Function to check screen size
const isMobileScreenSize = () => {
  return window.innerWidth <= 768;
};

// Apply mobile-specific class to body if on mobile
const applyMobileOptimization = () => {
  if (isMobileDevice() || isMobileScreenSize()) {
    document.body.classList.add('mobile-device');
    
    // Disable hover effects by adding attribute
    document.body.setAttribute('data-mobile', 'true');
    
    // Check if device has orientation for additional mobile detection
    if (window.screen && window.screen.orientation) {
      document.body.classList.add('has-orientation');
    }
  }
};

// Run on load
applyMobileOptimization();

// Run on resize
window.addEventListener('resize', applyMobileOptimization);

export { isMobileDevice, isMobileScreenSize, applyMobileOptimization }; 