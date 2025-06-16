import React from "react";
import { FaShieldAlt, FaUserShield, FaLock, FaEye, FaFileContract, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './privacy.css';

function Privacy() {
  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: `
        We collect information to provide reliable delivery services:
        
        • Personal Information: Name, phone, email, delivery addresses
        • Account Information: Username, password, preferences, delivery history
        • Location Data: Pickup/delivery addresses, real-time tracking (with consent)
        • Payment Information: Payment details, transaction history
        • Communication Data: Messages, support tickets, feedback
        • Device Information: Device type, operating system, app usage
        • Cookies: To enhance website functionality and user experience
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      content: `
        We use your information for:
        
        • Processing delivery requests
        • Communicating about deliveries and account
        • Processing payments
        • Customer support
        • Service improvements
        • Security and fraud prevention
        • Complying with legal obligations
        • Sending service updates (marketing with consent)
      `
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: `
        We share information only when necessary:
        
        • Delivery Partners: Information needed for delivery
        • Payment Processors: Secure payment processing
        • Service Providers: Third-parties helping operate our platform
        • Legal Requirements: When legally required
        • Business Transfers: In case of merger/acquisition
        • With Your Consent: Purposes you agree to
        
        We never sell your personal information.
      `
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `
        Our security measures include:
        
        • Encryption for all sensitive data
        • Strict access controls
        • Regular security audits
        • Protected infrastructure
        • Incident response procedures
        • Vendor security vetting
        • Data minimization practices
      `
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      content: `
        Your rights include:
        
        • Right to Access: Request data copies
        • Right to Rectification: Correct information
        • Right to Erasure: Request data deletion
        • Right to Restrict Processing: Limit data use
        • Right to Data Portability: Receive portable data
        • Right to Object: Opt-out of processing
        • Right to Withdraw Consent: Cancel consent
        • Right to Complain: File complaints
      `
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking',
      content: `
        We use cookies for:
        
        • Essential functionality
        • Analytics
        • Remembering preferences
        • Marketing (with consent)
        • Third-party analytics
        
        Control settings through your browser.
      `
    }
  ];

  const privacyPrinciples = [
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "Industry-leading security measures to protect your information."
    },
    {
      icon: <FaUserShield />,
      title: "Your Control",
      description: "Access, modify, or delete your data anytime."
    },
    {
      icon: <FaLock />,
      title: "Data Protection",
      description: "Compliance with data protection standards."
    },
    {
      icon: <FaEye />,
      title: "Transparency",
      description: "Clear about what data we collect and how we use it."
    }
  ];

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <FaShieldAlt className="hero-icon" />
            <h1>Privacy Policy</h1>
            <p>How we handle your information</p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary">
                <FaEnvelope className="button-icon" /> Contact Privacy
              </Link>
              <a href="mailto:privacy@xobo.co.ke" className="hero-button secondary">
                <FaShieldAlt className="button-icon" /> Privacy Officer
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>GDPR</strong>
                <span>Compliant</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Protection</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Secure</span>
              </div>
            </div>
            <small>Last updated: December 20, 2024</small>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="privacy-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="section-intro">
              <span className="section-tag">Your Privacy</span>
              <h2 className="section-title">We Respect Your Privacy</h2>
              <p className="section-description">
                We're committed to protecting your privacy. This policy explains how we collect, use, 
                share, and protect your information when using our delivery services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="privacy-principles-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-title">Privacy Principles</h2>
            <p className="section-subtitle">Our core data handling principles</p>
          </div>
          <div className="principles-grid">
            {privacyPrinciples.map((principle, index) => (
              <div className="principle-card" key={index}>
                <div className="principle-icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="privacy-toc">
        <div className="container">
          <div className="toc-container">
            <h2>Policy Contents</h2>
            <p className="toc-description">Jump to any section:</p>
            <ul className="toc-list">
              {privacySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-container">
            {privacySections.map((section, index) => (
              <div className="privacy-section" key={section.id} id={section.id}>
                <div className="section-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="section-content">
                  <h2>{section.title}</h2>
                  <div className="privacy-text">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <div key={idx}>
                        {paragraph.includes('•') ? (
                          <ul>
                            {paragraph.split('•').filter(item => item.trim()).map((item, listIdx) => (
                              <li key={listIdx}>{item.trim()}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="privacy-contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Questions?</h2>
              <p>
                Contact our Privacy Team with any questions about this policy.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="contact-method">
                  <FaFileContract className="contact-icon" />
                  <div>
                    <h4>Privacy Officer</h4>
                    <p>Email: privacy@xobo.co.ke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="privacy-cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to Start?</h2>
            <p>Use XOBO with confidence in your privacy</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Start Delivery
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
