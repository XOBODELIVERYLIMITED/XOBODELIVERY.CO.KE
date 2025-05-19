import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaChartBar, FaCode, FaShieldAlt, FaTruckMoving, FaClipboardCheck } from 'react-icons/fa';
import './business.css';

function Business() {
  return (
    <div className="business-page">
      {/* Hero Section */}      <section className="business-hero">
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="business-hero-content">
            <h1>Business Solutions</h1>
            <p>Custom delivery solutions to scale your business operations</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="business-solutions">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Solutions</span>
            <h2 className="section-title">Comprehensive Business Services</h2>
            <p className="section-subtitle">Tailored delivery solutions for every business need</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <FaUserTie />
              </div>
              <h3>Dedicated Account Manager</h3>
              <p>Get personalized support from our experienced account managers</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <FaChartBar />
              </div>
              <h3>Analytics Dashboard</h3>
              <p>Comprehensive insights into your delivery operations</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <FaCode />
              </div>
              <h3>API Integration</h3>
              <p>Seamlessly integrate with your existing systems</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure Operations</h3>
              <p>Enhanced security measures for your deliveries</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <FaTruckMoving />
              </div>
              <h3>Fleet Management</h3>
              <p>Efficient management of dedicated delivery fleet</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <FaClipboardCheck />
              </div>
              <h3>Custom Reporting</h3>
              <p>Detailed reports tailored to your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="business-features">
        <div className="container">
          <div className="features-container">
            <div className="features-content">
              <span className="section-tag">Features</span>
              <h2 className="section-title">Enterprise-Grade Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Custom Integration</h3>
                  <p>Integrate our delivery services directly into your website or app</p>
                </div>
                <div className="feature-item">
                  <h3>Volume Discounts</h3>
                  <p>Special rates for high-volume business customers</p>
                </div>
                <div className="feature-item">
                  <h3>Priority Support</h3>
                  <p>24/7 dedicated support for business accounts</p>
                </div>
                <div className="feature-item">
                  <h3>Custom Solutions</h3>
                  <p>Tailored solutions based on your specific requirements</p>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img 
                src={process.env.PUBLIC_URL + '/SERVICES/XDL-BENEFITS.png'} 
                alt="Business Solutions Features" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to Scale Your Business?</h2>
            <p>Let's discuss how we can help optimize your delivery operations</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noreferrer" className="cta-primary">
                Get Started
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Business;
