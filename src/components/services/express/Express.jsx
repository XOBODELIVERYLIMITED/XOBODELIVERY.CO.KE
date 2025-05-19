import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaClock, FaMapMarkedAlt, FaBox } from 'react-icons/fa';
import './express.css';

function Express() {
  return (
    <div className="express-page">
      {/* Hero Section */}      <section className="express-hero">
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="express-hero-content">
            <h1>Express Delivery Service</h1>
            <p>Same-day delivery service for your urgent packages</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="express-features">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Features</span>
            <h2 className="section-title">Why Choose Express Delivery</h2>
            <p className="section-subtitle">Experience lightning-fast deliveries with premium handling</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShippingFast />
              </div>
              <h3>Same Day Delivery</h3>
              <p>Get your packages delivered within hours of pickup</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>Priority Handling</h3>
              <p>Your packages get priority treatment and faster processing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaMapMarkedAlt />
              </div>
              <h3>Real-time Tracking</h3>
              <p>Track your delivery in real-time with accurate ETAs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBox />
              </div>
              <h3>Secure Packaging</h3>
              <p>Professional handling with secure packaging options</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="express-process">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Process</span>
            <h2 className="section-title">How Express Delivery Works</h2>
            <p className="section-subtitle">Simple steps to get your package delivered fast</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Book Online</h3>
              <p>Place your order through our website or mobile app</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Package Pickup</h3>
              <p>Our rider arrives to collect your package</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Express Transit</h3>
              <p>Your package is expedited to its destination</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Swift Delivery</h3>
              <p>Package is delivered with proof of delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="express-cta">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to Send Your Package?</h2>
            <p>Experience the fastest delivery service in Kenya</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noreferrer" className="cta-primary">
                Send Package Now
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

export default Express;
