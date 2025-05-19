import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTruck, FaChartLine, FaBusinessTime } from 'react-icons/fa';
import './scheduled.css';

function Scheduled() {
  return (
    <div className="scheduled-page">
      {/* Hero Section */}      <section className="scheduled-hero">
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="scheduled-hero-content">
            <h1>Scheduled Delivery Service</h1>
            <p>Plan your deliveries in advance with our reliable scheduled service</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="scheduled-benefits">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Benefits</span>
            <h2 className="section-title">Why Choose Scheduled Delivery</h2>
            <p className="section-subtitle">Perfect for businesses with regular shipping needs</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaCalendarAlt />
              </div>
              <h3>Flexible Scheduling</h3>
              <p>Choose your preferred delivery dates and times</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaTruck />
              </div>
              <h3>Dedicated Fleet</h3>
              <p>Access to our fleet of vehicles for your specific needs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaChartLine />
              </div>
              <h3>Cost Effective</h3>
              <p>Better rates for scheduled and regular deliveries</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBusinessTime />
              </div>
              <h3>Business Focused</h3>
              <p>Tailored solutions for business operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="scheduled-features">
        <div className="container">
          <div className="features-container">
            <div className="features-content">
              <span className="section-tag">Features</span>
              <h2 className="section-title">Advanced Scheduling Features</h2>
              <ul className="features-list">
                <li>Schedule deliveries up to 30 days in advance</li>
                <li>Set recurring delivery schedules</li>
                <li>Bulk booking options available</li>
                <li>Real-time delivery tracking</li>
                <li>Automated delivery notifications</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
            <div className="features-image">
              <img 
                src={process.env.PUBLIC_URL + '/SERVICES/XDL-SERVICES.png'} 
                alt="Scheduled Delivery Features" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="scheduled-cta">
        <div className="container">
          <div className="cta-container">
            <h2>Start Planning Your Deliveries</h2>
            <p>Optimize your logistics with our scheduled delivery service</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noreferrer" className="cta-primary">
                Schedule Now
              </a>
              <Link to="/contact" className="cta-secondary">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scheduled;
