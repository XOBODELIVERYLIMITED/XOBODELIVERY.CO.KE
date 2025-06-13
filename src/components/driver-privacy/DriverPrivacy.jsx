import React from 'react';
import { FaTruck, FaShieldAlt, FaUserCheck, FaFileContract, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './driver-privacy.css';

function DriverPrivacy() {
  const privacySections = [
    {
      id: 'driver-information',
      title: 'Driver Information We Collect',
      content: `
        As a delivery partner with XOBO Delivery, we collect specific information necessary to ensure safe, reliable, and legal delivery services:
        
        • Personal identification (Full name, ID number, driver's license)
        • Contact information (Phone number, email address, emergency contact)
        • Vehicle details (License plate, insurance, vehicle type and capacity)
        • Banking information for payment processing
        • Background check results and criminal record verification
        • Location data during active delivery sessions
        • Performance metrics and delivery completion rates
      `
    },
    {
      id: 'data-usage',
      title: 'How We Use Driver Data',
      content: `
        Your information is used solely for legitimate business purposes related to delivery operations:
        
        • Verifying your identity and eligibility to provide delivery services
        • Processing payments and maintaining financial records
        • Tracking delivery performance and providing feedback
        • Ensuring customer safety and service quality
        • Complying with legal requirements and regulations
        • Providing support and resolving disputes
        • Improving our platform and delivery processes
        • Communicating important updates and opportunities
      `
    },
    {
      id: 'location-tracking',
      title: 'Location Data and Tracking',
      content: `
        Location tracking is essential for delivery operations and safety:
        
        • Real-time location is tracked only during active delivery sessions
        • Location data helps optimize delivery routes and reduce travel time
        • Customers can track their deliveries for transparency and peace of mind
        • Location history helps resolve delivery disputes and verify completion
        • Data is anonymized after delivery completion for analytics purposes
        • You can disable location sharing when not actively delivering
        • Emergency location sharing for driver safety and support
      `
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      content: `
        We limit information sharing to essential business operations:
        
        • Customer information: Only delivery-relevant details (name, address, contact)
        • Insurance companies: Necessary information for coverage and claims
        • Law enforcement: When required by legal obligation or court order
        • Payment processors: Banking details for payment transactions
        • Background check providers: For verification and safety purposes
        • Emergency services: In case of accidents or safety incidents
        • We never sell personal information to third parties for marketing
      `
    },
    {
      id: 'driver-rights',
      title: 'Your Rights as a Driver Partner',
      content: `
        As a XOBO Delivery driver, you have specific rights regarding your personal data:
        
        • Right to access: Request copies of your personal data we hold
        • Right to rectification: Correct inaccurate or incomplete information
        • Right to erasure: Request deletion of your data when legally permissible
        • Right to portability: Receive your data in a structured, machine-readable format
        • Right to object: Opt-out of certain data processing activities
        • Right to restrict processing: Limit how we use your data in specific circumstances
        • Right to withdraw consent: Cancel consent for optional data processing
      `
    },
    {
      id: 'data-security',
      title: 'Data Security Measures',
      content: `
        We implement comprehensive security measures to protect driver information:
        
        • End-to-end encryption for sensitive data transmission
        • Secure servers with regular security updates and monitoring
        • Access controls limiting staff access to necessary information only
        • Regular security audits and vulnerability assessments
        • Secure backup systems with encryption and redundancy
        • Two-factor authentication for driver account access
        • Incident response procedures for potential data breaches
        • Compliance with international data protection standards
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
      <section className="driver-privacy-hero">
        <div className="driver-privacy-hero-overlay"></div>
        <div className="container">
          <div className="driver-privacy-hero-content">
            <FaTruck className="hero-icon" />
            <h1>Driver Privacy Policy</h1>
            <p>Protecting the privacy and data of our delivery partners</p>
            <div className="hero-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="hero-button primary">
                <FaTruck className="button-icon" /> Become a Driver
              </a>
              <Link to="/contact" className="hero-button secondary">
                <FaEnvelope className="button-icon" /> Contact Privacy Team
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>200+</strong>
                <span>Active Drivers</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Data Protected</span>
              </div>
              <div className="stat">
                <strong>GDPR</strong>
                <span>Compliant</span>
              </div>
            </div>
            <small>Last updated: December 20, 2024</small>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="driver-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="section-intro">
              <span className="section-tag">For Our Drivers</span>
              <h2 className="section-title">Your Privacy Matters</h2>
              <p className="section-description">
                As a valued delivery partner with XOBO Delivery Limited, your privacy and data security are our top priorities. 
                This policy explains how we collect, use, and protect your personal information as a driver on our platform.
                We believe in transparency and want you to understand exactly how your data helps us provide safe, 
                efficient delivery services while protecting your privacy rights.
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

      {/* Table of Contents */}
      <section className="driver-toc">
        <div className="container">
          <div className="toc-container">
            <h2>Policy Contents</h2>
            <p className="toc-description">Jump to any section for specific information:</p>
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
      <section className="driver-privacy-content">
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
      <section className="driver-contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Questions About Driver Privacy?</h2>
              <p>
                If you have any questions about this Driver Privacy Policy or how we handle your data, 
                please don't hesitate to contact our Privacy Team.
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
                  <FaMapMarkerAlt className="contact-icon" />
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
      <section className="driver-cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to Join XOBO as a Driver?</h2>
            <p>Start your journey as a delivery partner with full confidence in your privacy protection</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Become a Driver
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

export default DriverPrivacy; 