// Header.jsx

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToTop } from '../common/ScrollToTop';
import "./header.css";

const navLinks = [
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Drivers',
    link: '/drivers',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'FAQS',
    link: '/faq',
  },
];

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navBtnRef = useRef(null);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Enhanced navigation handler that closes menu and ensures scroll to top
  const handleNavClick = () => {
    setIsNavVisible(false);
    // Small delay to ensure the navigation completes before scroll
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Handle logo click to redirect to landing page, close mobile nav, and scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsNavVisible(false); // Close mobile menu if open
    navigate('/'); // Navigate to landing page
    setTimeout(() => {
      scrollToTop(); // Scroll to top after navigation
    }, 50);
  };

  // Handle keyboard navigation for logo
  const handleLogoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick(e);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isNavVisible) {
      body.classList.add("no-scroll");
      body.classList.add("menu-open");
    } else {
      body.classList.remove("no-scroll");
      body.classList.remove("menu-open");
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavVisible, scrolled]);

  // Ensure the nav button is always clickable
  useEffect(() => {
    if (navBtnRef.current) {
      navBtnRef.current.style.pointerEvents = 'auto';
      navBtnRef.current.style.cursor = 'pointer';
      
      // Force the nav button to be clickable
      const forceClickable = () => {
        if (navBtnRef.current) {
          navBtnRef.current.style.pointerEvents = 'auto';
          navBtnRef.current.style.cursor = 'pointer';
        }
      };
      
      // Run this periodically to ensure the button remains clickable
      const interval = setInterval(forceClickable, 1000);
      
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div 
          className="logo" 
          onClick={handleLogoClick} 
          onTouchEnd={(e) => {
            e.preventDefault();
            handleLogoClick(e);
          }}
          onKeyDown={handleLogoKeyDown}
          role="button" 
          tabIndex="0" 
          aria-label="Go to homepage"
        >
          <img 
            loading='lazy'
            src={process.env.PUBLIC_URL + '/media/Header-Logo2.jpeg'} alt="XOBO Logo" 
          />
        </div>

        <nav className={isNavVisible ? "responsive_nav" : ""}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.link}>
                {link.external ? (
                  <a 
                    href={link.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.link} onClick={handleNavClick}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>

          <a href="https://biz.xobo.co.ke/" target='_blank' rel='noopener noreferrer' className="login-btn-container">
            <button className="login-btn">
              Transport Login
            </button>
          </a>
        </nav>

        <button
          ref={navBtnRef}
          className={`nav-btn ${isNavVisible ? "nav-close-btn" : ""}`}
          onClick={toggleNavbar}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggleNavbar();
          }}
          type="button"
          aria-label="Toggle navigation"
          style={{ pointerEvents: 'auto', cursor: 'pointer' }}
        >
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
