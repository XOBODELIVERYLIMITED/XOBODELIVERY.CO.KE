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
          <div className="footer-logo">
            <img
              loading="lazy" 
              src={process.env.PUBLIC_URL + '/media/Header-Logo.jpeg'} 
              alt="XOBO Logo" 
            />
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <Link to="/services">Transport</Link>
            </div>

            <div className="footer-column">
              <h4>Policies</h4>
              <Link to="/">Terms of Service</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/">Driver Privacy</Link>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              
              <div className="social-media">
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
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; XOBO {currentYear}. All rights reserved.<br />
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
