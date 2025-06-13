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
        These Terms of Service ("Terms") govern your use of XOBO Delivery services, website, and mobile applications (collectively, the "Service"). By using our Service, you agree to these Terms. Please read them carefully.
        
        XOBO Delivery ("XOBO", "we", "us", or "our") provides a platform connecting users with delivery services. These Terms constitute a legally binding agreement between you and XOBO governing your access to and use of the Service.
      `
    },
    {
      id: 'account',
      title: 'Account Registration',
      content: `
        To use our Service, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.
        
        You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify XOBO immediately of any unauthorized use of your account.
        
        XOBO reserves the right to refuse service, terminate accounts, or cancel orders at our discretion.
      `
    },
    {
      id: 'service-usage',
      title: 'Service Usage',
      content: `
        The Service allows you to request and schedule deliveries of items. You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
        
        • Use the Service for any illegal purpose
        • Violate any laws in your jurisdiction
        • Submit false or misleading information
        • Attempt to circumvent any security features
        • Interfere with the proper operation of the Service
        • Ship prohibited items (including but not limited to illegal substances, dangerous goods, or hazardous materials)
      `
    },
    {
      id: 'payments',
      title: 'Payments and Fees',
      content: `
        You agree to pay all fees associated with the Service. XOBO uses various payment processors to facilitate payment for our services. By providing a payment method, you represent that you are authorized to use the payment method you provide.
        
        Fees for the Service will be displayed before you confirm your delivery request. XOBO reserves the right to change our fees at any time, upon notice through the Service.
        
        All payments are final and non-refundable unless otherwise determined by XOBO at our sole discretion or as required by law.
      `
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `
        To the maximum extent permitted by law, XOBO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        
        • Your use or inability to use the Service
        • Any conduct or content of any third party on the Service
        • Any content obtained from the Service
        • Unauthorized access, use, or alteration of your transmissions or content
        
        XOBO's total liability for any claims arising under these Terms shall not exceed the amounts paid by you to XOBO in the three (3) months preceding the event giving rise to the liability.
      `
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `
        XOBO reserves the right to modify these Terms at any time. We will provide notice of significant changes through the Service or by other means. Your continued use of the Service after such modifications constitute your acceptance of the revised Terms.
        
        If you do not agree to the new Terms, you must stop using the Service.
      `
    }
  ];

  // Key principles highlighted in the page
  const principles = [
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "We implement robust security measures to protect your personal information and transactions."
    },
    {
      icon: <FaFileAlt />,
      title: "Transparency",
      description: "Clear and straightforward terms that are easy to understand with no hidden conditions."
    },
    {
      icon: <FaUserLock />,
      title: "Privacy",
      description: "Your privacy is important to us. We only collect data necessary to provide our services."
    },
    {
      icon: <FaHandshake />,
      title: "Fairness",
      description: "We strive for fair and balanced terms that protect both our users and our business."
    }
  ];

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <h1>Terms of Service</h1>
            <p>Our comprehensive terms and conditions for using XOBO Delivery services</p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary">
                <FaEnvelope className="button-icon" /> Contact Legal Team
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

      {/* Table of Contents */}
      <section className="terms-toc">
        <div className="container">
          <div className="toc-container">
            <h2>Contents</h2>
            <p className="toc-description">Click on any section below to quickly jump to it on this page:</p>
            <ul className="toc-list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="principles-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Principles</span>
            <h2 className="section-title">Our Terms Are Built On These Principles</h2>
            <p className="section-subtitle">We believe in creating fair and transparent terms that protect all parties</p>
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
      <section className="terms-cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Have Questions About Our Terms?</h2>
            <p>Our team is ready to help clarify any points or address any concerns you might have</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">
                Contact Us
              </Link>
              <Link to="/faq" className="cta-secondary">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
