import React from 'react';
import { FaFileAlt, FaCheckCircle, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import './help.css';

function Help() {
  return (
    <div className="help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="container">
          <div className="help-hero-content">
            <h1>Getting Started Guide</h1>
            <p>Follow these simple steps to start using XOBO Delivery services</p>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="help-guide-section">
        <div className="container">
          <div className="guide-container">
            <div className="guide-intro">
              <FaFileAlt className="guide-icon" />
              <h2>Step-by-Step Guide</h2>
              <p>Welcome to XOBO Delivery! This guide will help you understand how to use our services effectively.</p>
            </div>

            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Create an Account</h3>
                  <p>Register for a free account on our platform to access all delivery services.</p>
                  <div className="step-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>You'll need a valid email address and phone number for verification.</p>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Request a Delivery</h3>
                  <p>Enter pickup and delivery locations, package details, and preferred delivery time.</p>
                  <div className="step-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>Providing accurate package dimensions helps us assign the right vehicle.</p>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Track Your Delivery</h3>
                  <p>Use our real-time tracking system to monitor your package's journey.</p>
                  <div className="step-tip">
                    <FaCheckCircle className="tip-icon" />
                    <p>You'll receive SMS updates and can track progress through our web interface.</p>
                  </div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Delivery Confirmation</h3>
                  <p>Once delivered, you'll receive a confirmation and can rate your experience.</p>
                  <div className="step-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>Your feedback helps us improve our service quality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="help-cta">
              <h3>Need Additional Help?</h3>
              <p>Our support team is available to assist you with any questions.</p>
              <div className="help-buttons">
                <a href="/contact" className="help-button primary">Contact Support</a>
                <a href="/faq" className="help-button secondary">View FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help; 