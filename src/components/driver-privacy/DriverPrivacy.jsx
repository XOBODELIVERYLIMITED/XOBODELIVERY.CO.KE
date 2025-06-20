import React from 'react';
import { FaTruck, FaShieldAlt, FaUserCheck, FaFileContract, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './driver-privacy.css';

function DriverPrivacy() {
  const privacySections = [
    {
      id: 'driver-information',
      title: 'Driver Information We Collect',
      content: `
        As a delivery partner, we collect:

        • Personal identification (ID, driver's license)
        • Contact information (phone, email, emergency contact)
        • Vehicle details (plate, insurance, type and capacity)
        • Banking information for payments
        • Background check results
        • Location data during deliveries
        • Performance metrics
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Driver Data',
      content: `
        Your information is used for:

        • Identity and eligibility verification
        • Payment processing
        • Delivery tracking and feedback
        • Customer safety and service quality
        • Legal compliance
        • Support and dispute resolution
        • Platform improvements
        • Important communications
      `
    },
    {
      id: 'location-tracking',
      title: 'Location Data and Tracking',
      content: `
        Location tracking usage:

        • Only tracked during active deliveries
        • Optimizes routes and reduces travel time
        • Enables customer tracking for transparency
        • Helps resolve disputes and verify completion
        • Anonymized after delivery for analytics
        • Disabled when not actively delivering
        • Available during emergencies
      `
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      content: `
        We limit information sharing to:

        • Customer information for deliveries
        • Insurance companies for claims
        • Law enforcement when legally required
        • Payment processors for transactions
        • Background check providers for verification
        • Emergency services when needed
        • We never sell personal information
      `
    },
    {
      id: 'driver-rights',
      title: 'Your Rights as a Driver Partner',
      content: `
        Your rights include:

        • Right to Access: Request data copies
        • Right to Rectification: Correct information
        • Right to Erasure: Request data deletion
        • Right to Portability: Receive portable data
        • Right to Object: Opt-out of processing
        • Right to Restrict Processing: Limit data use
        • Right to Withdraw Consent: Cancel consent
      `
    },
    {
      id: 'data-security',
      title: 'Data Security Measures',
      content: `
        Our security measures include:

        • End-to-end encryption
        • Secure servers with regular updates
        • Limited staff access controls
        • Regular security audits
        • Secure backup systems
        • Two-factor authentication
        • Incident response procedures
        • Compliance with data protection standards
      `
    }
  ];

  const driverBenefits = [
    {
      icon: <FaTruck />,
      title: "Transparent Operations",
      description: "Clear information about how your data is used in delivery operations."
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy Protection",
      description: "Robust security measures to protect your personal information."
    },
    {
      icon: <FaUserCheck />,
      title: "Control & Choice",
      description: "You have control over your data and privacy settings."
    },
    {
      icon: <FaFileContract />,
      title: "Legal Compliance",
      description: "We comply with all applicable data protection laws and regulations."
    }
  ];

  return (
    <div className="driver-privacy-page">
      {/* Hero Section */}
      <section className="driver-hero">
        <div className="container">
          <div className="driver-hero-content">
            <div className="driver-hero-icon">
              <FaTruck />
            </div>
            <h1>Driver Privacy Policy</h1>
            <p>Information for XOBO delivery partners</p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary">
                <FaEnvelope className="button-icon" /><span>Contact Privacy</span>
              </Link>
              <a href="mailto:drivers@xobo.co.ke" className="hero-button secondary">
                <FaShieldAlt className="button-icon" /><span>Driver Support</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>Data</strong>
                <span>Protection</span>
              </div>
              <div className="stat">
                <strong>Driver</strong>
                <span>Rights</span>
              </div>
              <div className="stat">
                <strong>Secure</strong>
                <span>Practices</span>
              </div>
            </div>
            <p className="last-updated">Last updated: December 20, 2024</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="driver-intro">
        <div className="container">
          <div className="intro-content">
            <div className="section-intro">
              <span className="section-tag">Driver Privacy</span>
              <h2 className="section-title">Privacy For Our Delivery Partners</h2>
              <p className="section-description">
                This policy explains how we collect and use driver information to operate our delivery 
                platform while respecting your privacy rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Benefits */}
      <section className="driver-benefits-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Your Benefits</span>
            <h2 className="section-title">Privacy Protection for Drivers</h2>
            <p className="section-subtitle">How we ensure your data is protected and your rights are respected</p>
          </div>
          <div className="benefits-grid">
            {driverBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="driver-privacy-content">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Driver Policy</span>
            <h2 className="section-title">Driver Information We Handle</h2>
            <p className="section-subtitle">Key data privacy information for drivers</p>
          </div>
          <div className="privacy-sections">
            {privacySections.map((section, index) => (
              <div className="privacy-section-card" key={section.id} id={section.id}>
                <div className="section-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="section-content">
                  <h3>{section.title}</h3>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start?</h2>
            <p>Drive with confidence in your privacy</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.xobbo.driver&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="cta-primary">
                <FaTruck className="button-icon" /><span>Apply as Driver</span>
              </a>
              <Link to="/contact" className="cta-secondary">
                <FaEnvelope className="button-icon" /><span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DriverPrivacy; 