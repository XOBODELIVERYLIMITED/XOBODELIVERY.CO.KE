import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Utility function for smooth scroll to top
export const scrollToTop = (behavior = 'auto') => {
  try {
    if (window.scrollTo) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior
      });
    } else {
      // Fallback for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  } catch (error) {
    console.warn('ScrollToTop failed:', error);
    try {
      window.scrollTo(0, 0);
    } catch (fallbackError) {
      console.warn('Fallback scroll failed:', fallbackError);
    }
  }
};

// React component for automatic scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure the DOM has updated before scrolling
    const timer = setTimeout(() => {
      scrollToTop('auto');
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 