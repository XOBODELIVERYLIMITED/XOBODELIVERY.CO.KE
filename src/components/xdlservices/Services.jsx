import React from 'react';
import { FaShippingFast, FaTruckMoving, FaWarehouse, FaUsers, FaChartLine, FaMobile, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './services.css';

function Services() {
  const deliveryServices = [
    {
      icon: <FaShippingFast />,
      title: "Express Delivery",
      description: "Same-day delivery with real-time tracking and confirmation.",
    },
    {
      icon: <FaTruckMoving />,
      title: "Scheduled Delivery",
      description: "Plan deliveries ahead with flexible scheduling options.",
    },
    {
      icon: <FaWarehouse />,
      title: "Bulk Shipping",
      description: "Efficient solutions for high-volume shipping needs.",
    }
  ];

  const businessSolutions = [
    {
      icon: <FaUsers />,
      title: "Business Integration",
      description: "Seamlessly integrate delivery with your existing systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to optimize logistics operations.",
    },
    {
      icon: <FaMobile />,
      title: "Custom API Solutions",
      description: "API integration for your website or app.",
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>Our Delivery Services</h1>
            <p>Fast, reliable delivery solutions across Kenya</p>
            <div className="hero-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="hero-button primary">
                <FaShippingFast className="button-icon" /> Start Delivering
              </a>
              <Link to="/contact" className="hero-button secondary">
                <FaEnvelope className="button-icon" /> Get Quote
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>3</strong>
                <span>Service Types</span>
              </div>
              <div className="stat">
                <strong>47</strong>
                <span>Counties Served</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="service-intro">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">On-demand delivery</h2>
            <p className="section-subtitle">
              Reliable, fast, and secure delivery services across Kenya.
              Technology-driven approach ensures on-time deliveries.
            </p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target='_blank' rel="noreferrer" className="cta-primary">
              Deliver Now
              </a>
              <Link to="/contact" className="cta-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Services Section */}
      <section className="service-options">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Delivery Options</span>
            <h2 className="section-title">Delivery Services</h2>
            <p className="section-subtitle">Choose services that meet your specific needs</p>
          </div>

          <div className="services-grid">
            {deliveryServices.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="business-solutions">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">For Businesses</span>
            <h2 className="section-title">Business Solutions</h2>
            <p className="section-subtitle">Logistics solutions to help your business grow</p>
      </div>

          <div className="services-grid">
            {businessSolutions.map((solution, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
            <h2>Ready to simplify deliveries?</h2>
            <p>Join businesses that trust XOBO</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target='_blank' rel="noreferrer" className="cta-primary">
                Start Delivering
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Us
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
