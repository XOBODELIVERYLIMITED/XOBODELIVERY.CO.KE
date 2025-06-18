import React from 'react';
import { FaHandshake, FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaGift, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './partners.css';

function Partners() {
  const partnerBenefits = [
    {
      icon: <FaChartLine />,
      title: "Increased Revenue",
      description: "Expand your business by offering delivery services to your customers"
    },
    {
      icon: <FaTruck />,
      title: "Professional Fleet",
      description: "Access to our well-maintained vehicles and professional drivers"
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance"
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for all deliveries and packages"
    }
  ];

  const partnerTypes = [
    {
      title: "Retail Partners",
      description: "E-commerce stores, retail shops, and online marketplaces",
      features: ["Integrated API", "Real-time tracking", "Bulk shipping discounts", "Priority support"]
    },
    {
      title: "Driver Partners",
      description: "Independent drivers and fleet owners looking to earn",
      features: ["Flexible schedules", "Competitive rates", "Fuel allowances", "Performance bonuses"]
    },
    {
      title: "Corporate Partners",
      description: "Large businesses requiring regular delivery services",
      features: ["Custom pricing", "Dedicated account manager", "SLA agreements", "Monthly reporting"]
    }
  ];

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="container">
          <div className="partners-hero-content">
            <h1>Partner With XOBO</h1>
            <p>Join Kenya's fastest-growing delivery network and grow your business with us</p>
            <div className="hero-buttons">
              <Link to="/contact" className="cta-primary">
                Become a Partner
              </Link>
              <Link to="/client-guide" className="cta-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Partnership Benefits</span>
            <h2 className="section-title">Why Partner With XOBO?</h2>
            <p className="section-subtitle">We provide everything you need to succeed in the delivery business</p>
          </div>
          <div className="benefits-grid">
            {partnerBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="partner-types-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Partnership Options</span>
            <h2 className="section-title">Choose Your Partnership Model</h2>
            <p className="section-subtitle">We offer flexible partnership options to suit different business needs</p>
          </div>
          <div className="partner-types-grid">
            {partnerTypes.map((type, index) => (
              <div className="partner-type-card" key={index}>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <ul className="features-list">
                  {type.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="partner-btn">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">47</div>
              <div className="stat-label">Counties Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Daily Deliveries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>Partnership Requirements</h2>
              <div className="requirement-list">
                <div className="requirement-item">
                  <FaUsers className="req-icon" />
                  <div>
                    <h4>For Driver Partners</h4>
                    <p>Valid driving license, clean driving record, and own vehicle or willingness to rent</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <FaHandshake className="req-icon" />
                  <div>
                    <h4>For Business Partners</h4>
                    <p>Valid business registration, consistent delivery volume, and commitment to service quality</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <FaShieldAlt className="req-icon" />
                  <div>
                    <h4>For All Partners</h4>
                    <p>Professional conduct, adherence to XOBO standards, and commitment to customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Partnership?</h2>
            <p>Join hundreds of successful partners who are growing their business with XOBO</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">
                <FaPhoneAlt className="button-icon" /> Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners; 