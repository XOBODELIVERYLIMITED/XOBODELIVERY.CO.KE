import React from 'react';
import { FaShieldAlt, FaFileAlt, FaUserLock, FaHandshake, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './terms.css';

function Terms() {
  // Sections of the terms document
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `
        These Terms of Service ("Terms") govern your use of XOBO Delivery services, website, and mobile applications (collectively, the "Service"). By using our Service, you agree to these Terms.
        
        XOBO Delivery ("XOBO", "we", "us", or "our") provides a platform connecting users with delivery services. These Terms constitute a legally binding agreement between you and XOBO.
      `
    },
    {
      id: 'account',
      title: 'Account Registration',
      content: `
        To use our Service, you must create an account with accurate information and keep it updated.
        
        You are responsible for safeguarding your account credentials and all activities under your account. Notify XOBO immediately of any unauthorized use.
        
        XOBO reserves the right to refuse service, terminate accounts, or cancel orders at our discretion.
      `
    },
    {
      id: 'service-usage',
      title: 'Service Usage',
      content: `
        The Service allows you to request and schedule deliveries. You agree to use the Service only for lawful purposes and not to:
        
        • Use the Service for any illegal purpose
        • Violate any laws in your jurisdiction
        • Submit false or misleading information
        • Attempt to circumvent security features
        • Interfere with the Service operation
        • Ship prohibited items (including illegal substances, dangerous goods, or hazardous materials)
      `
    },
    {
      id: 'payments',
      title: 'Payments and Fees',
      content: `
        You agree to pay all fees associated with the Service. By providing a payment method, you represent that you are authorized to use it.
        
        Fees will be displayed before you confirm your delivery request. XOBO reserves the right to change our fees at any time, upon notice.
        
        All payments are final and non-refundable unless otherwise determined by XOBO or required by law.
      `
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `
        To the maximum extent permitted by law, XOBO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
        
        • Your use or inability to use the Service
        • Any conduct or content of third parties
        • Any content obtained from the Service
        • Unauthorized access or alteration of your transmissions
        
        XOBO's total liability shall not exceed amounts paid by you to XOBO in the three months preceding the event giving rise to the liability.
      `
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `
        XOBO reserves the right to modify these Terms at any time. We will provide notice of significant changes. Your continued use after modifications constitutes acceptance of the revised Terms.
        
        If you do not agree to the new Terms, you must stop using the Service.
      `
    }
  ];

  // Key principles highlighted in the page
  const principles = [
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Robust security measures to protect your information and transactions."
    },
    {
      icon: <FaFileAlt />,
      title: "Transparency",
      description: "Clear terms with no hidden conditions."
    },
    {
      icon: <FaUserLock />,
      title: "Privacy",
      description: "We only collect necessary data to provide services."
    },
    {
      icon: <FaHandshake />,
      title: "Fairness",
      description: "Fair and balanced terms protecting users and business."
    }
  ];

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1>Terms of Service</h1>
            <p>Terms and conditions for XOBO Delivery services</p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary">
                <FaEnvelope className="button-icon" /> Contact Legal
              </Link>
              <a href="tel:+254799396000" className="hero-button secondary">
                <FaPhone className="button-icon" /> Call Us
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>Legal</strong>
                <span>Compliance</span>
              </div>
              <div className="stat">
                <strong>Fair</strong>
                <span>Terms</span>
              </div>
              <div className="stat">
                <strong>Clear</strong>
                <span>Language</span>
              </div>
            </div>
            <p className="last-updated">Last updated: June 1, 2023</p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="principles-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Principles</span>
            <h2 className="section-title">Our Terms Foundation</h2>
            <p className="section-subtitle">Fair and transparent terms that protect all parties</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div className="principle-card" key={index}>
                <div className="principle-icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-container">
            {sections.map((section) => (
              <div className="terms-section" key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                <div className="terms-text">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
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
            <h2>Questions About Our Terms?</h2>
            <p>Our team can clarify any points or concerns</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">
                <FaEnvelope className="button-icon" /> Contact Us
              </Link>
              <Link to="/faq" className="cta-secondary">
                <FaFileAlt className="button-icon" /> View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
