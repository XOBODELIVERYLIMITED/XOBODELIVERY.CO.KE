import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <Link to="/services">All Services</Link>
              <Link to="/services/express">Express Delivery</Link>
              <Link to="/services/scheduled">Scheduled Delivery</Link>
              <Link to="/services/business">Business Solutions</Link>
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer">Transport Platform</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/drivers">Join as Driver</Link>
              <Link to="/faq">FAQ</Link>
              <a href="https://scribehow.com/viewer/Creating_An_Account_And_Managing_Your_Profile__bnodEkxRRriykctCzB8j7w" target="_blank" rel="noopener noreferrer">Help Guide</a>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-column">
              <h4>Policies</h4>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/privacy-policy">Driver Privacy</Link>
            </div>

            <div className="footer-column">
              <h4>Follow</h4>
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
          <p>
            <a 
              href="http://www.linkedin.com/in/victor-shammah-8949211b2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-credit"
            >
              Developer: Victor Shammah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
