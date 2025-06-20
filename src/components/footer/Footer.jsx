import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { scrollToTop } from '../common/ScrollToTop';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle navigation with scroll to top
  const handleNavClick = () => {
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <footer className={isMobile ? "mobile-footer mobile-view" : ""}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column services-column">
              <h4>Services</h4>
              <Link to="/services" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>All Services</Link>
              <Link to="/services/express" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Express Delivery</Link>
              <Link to="/services/scheduled" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Scheduled Delivery</Link>
              <Link to="/services/business" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Business Solutions</Link>
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer">Transport Platform</a>
            </div>

            <div className="footer-column company-column">
              <h4>Company</h4>
              <Link to="/about" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>About Us</Link>
              <Link to="/client-guide" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Customer Guide</Link>
              <Link to="/company-info" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Company Info</Link>
              <Link to="/faq" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>FAQ</Link>
              <Link to="/contact" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Contact Us</Link>
            </div>

            <div className="footer-column policies-column">
              <h4>Policies</h4>
              <Link to="/terms" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Terms of Service</Link>
              <Link to="/privacy-policy" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Privacy Policy</Link>
              <Link to="/driver-privacy" onClick={handleNavClick} onTouchEnd={(e) => { e.preventDefault(); handleNavClick(); }}>Driver Privacy</Link>
            </div>

            <div className="footer-column connect-column">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://twitter.com/XoboDelivery_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.facebook.com/XoboDelivery/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/xobo_delivery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@xobodelivery1476" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
              <div className="contact-info">
                <a href="tel:+254799396000" className="phone-link">+254 799 396 000</a>
                <a href="tel:+254739396000" className="phone-link">+254 739 396 000</a>
                <a href="mailto:info@xobo.co.ke" className="email-link">info@xobo.co.ke</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; XOBO {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
