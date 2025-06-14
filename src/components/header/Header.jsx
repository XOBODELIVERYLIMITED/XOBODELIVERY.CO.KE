// Header.jsx

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToTop } from '../common/ScrollToTop';
import "./header.css";

const navLinks = [
  {
    name: 'Services',
    link: '/services',
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

  useEffect(() => {
    const body = document.body;
    if (isNavVisible) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
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

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img 
              loading='lazy'
              src={process.env.PUBLIC_URL + '/media/Header-Logo2.jpeg'} alt="XOBO Logo" 
            />
          </Link>
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
          className={`nav-btn ${isNavVisible ? "nav-close-btn" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
