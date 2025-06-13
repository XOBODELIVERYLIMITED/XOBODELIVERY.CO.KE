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
        At XOBO Delivery, we collect information to provide you with reliable delivery services and improve your experience:
        
        • Personal Information: Name, phone number, email address, and delivery addresses
        • Account Information: Username, password, preferences, and delivery history
        • Location Data: Pickup and delivery addresses, and real-time location for tracking (with your consent)
        • Payment Information: Payment method details and transaction history
        • Communication Data: Messages, support tickets, and feedback you provide
        • Device Information: Device type, operating system, and app usage data
        • Cookies and Similar Technologies: To enhance website functionality and user experience
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      content: `
        We use your personal information for legitimate business purposes:
        
        • Processing and fulfilling your delivery requests
        • Communicating about your deliveries and account
        • Processing payments and maintaining financial records
        • Providing customer support and resolving issues
        • Improving our services and developing new features
        • Ensuring security and preventing fraud
        • Complying with legal obligations and regulations
        • Sending important updates about our services (with your consent for marketing)
      `
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: `
        We share your information only when necessary and with your consent:
        
        • Delivery Partners: Limited information necessary to complete your delivery
        • Payment Processors: Secure payment processing through trusted partners
        • Service Providers: Third-party services that help us operate our platform
        • Legal Requirements: When required by law or to protect our rights and safety
        • Business Transfers: In case of merger, acquisition, or sale of our business
        • With Your Consent: Other purposes you specifically agree to
        
        We never sell your personal information to third parties for marketing purposes.
      `
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `
        We implement comprehensive security measures to protect your information:
        
        • Encryption: All sensitive data is encrypted in transit and at rest
        • Access Controls: Strict employee access controls and authentication systems
        • Regular Audits: Security assessments and vulnerability testing
        • Secure Infrastructure: Protected servers and secure cloud storage
        • Incident Response: Procedures for handling potential security breaches
        • Third-Party Security: Rigorous vetting of all service providers
        • Data Minimization: We only collect and retain necessary information
      `
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      content: `
        You have important rights regarding your personal information:
        
        • Right to Access: Request copies of your personal data
        • Right to Rectification: Correct inaccurate or incomplete information
        • Right to Erasure: Request deletion of your personal data
        • Right to Restrict Processing: Limit how we use your data
        • Right to Data Portability: Receive your data in a portable format
        • Right to Object: Opt-out of certain data processing activities
        • Right to Withdraw Consent: Cancel consent for optional data processing
        • Right to Complain: File complaints with data protection authorities
      `
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking',
      content: `
        We use cookies and similar technologies to enhance your experience:
        
        • Essential Cookies: Required for basic website functionality
        • Analytics Cookies: Help us understand how you use our services
        • Functional Cookies: Remember your preferences and settings
        • Marketing Cookies: Deliver relevant content and advertisements (with consent)
        • Third-Party Cookies: From trusted partners for analytics and advertising
        
        You can control cookie settings through your browser preferences.
      `
    }
  ];

  const privacyPrinciples = [
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "We implement industry-leading security measures to protect your personal information."
    },
    {
      icon: <FaUserShield />,
      title: "Your Control",
      description: "You have full control over your data and can access, modify, or delete it anytime."
    },
    {
      icon: <FaLock />,
      title: "Data Protection",
      description: "We comply with international data protection standards and regulations."
    },
    {
      icon: <FaEye />,
      title: "Transparency",
      description: "We're transparent about what data we collect and how we use it."
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
            <p>How we collect, use, and protect your personal information</p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary">
                <FaEnvelope className="button-icon" /> Contact Privacy Team
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
                <span>Data Protection</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Secure Processing</span>
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
                At XOBO Delivery Limited, we are committed to protecting your privacy and personal information. 
                This privacy policy explains how we collect, use, share, and protect your information when you use our delivery services.
                We believe in transparency and want you to understand your rights and how we handle your data.
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
            <p className="section-subtitle">The core principles that guide how we handle your personal information</p>
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
            <p className="toc-description">Navigate to any section for detailed information:</p>
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
              <h2>Questions About Your Privacy?</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal data, 
                please contact our Privacy Team.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Privacy Office Hours</h4>
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
            <h2>Ready to Use Our Services?</h2>
            <p>Start using XOBO Delivery with confidence in your privacy protection</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Start Delivery
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Privacy Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
