import React from 'react';
import { FaShippingFast, FaTruckMoving, FaWarehouse, FaUsers, FaChartLine, FaMobile, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './services.css';

function Services() {
  const deliveryServices = [
    {
      icon: <FaShippingFast />,
      title: "Express Delivery",
      description: "Same-day delivery services across Kenya with real-time tracking and delivery confirmation.",
    },
    {
      icon: <FaTruckMoving />,
      title: "Scheduled Delivery",
      description: "Plan your deliveries ahead of time with our flexible scheduling options.",
    },
    {
      icon: <FaWarehouse />,
      title: "Bulk Shipping",
      description: "Efficient solutions for high-volume shipping needs with dedicated fleet options.",
    }
  ];

  const businessSolutions = [
    {
      icon: <FaUsers />,
      title: "Business Integration",
      description: "Seamlessly integrate XOBO delivery services with your existing business systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Comprehensive delivery analytics to optimize your logistics operations.",
    },
    {
      icon: <FaMobile />,
      title: "Custom API Solutions",
      description: "Custom API integration for your website or app to provide delivery services to your customers.",
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
            <p>Fast, reliable, and secure delivery solutions for businesses and individuals across Kenya</p>
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
            <h2 className="section-title">On-demand delivery for your business</h2>
            <p className="section-subtitle">
              XOBO Delivery provides businesses with reliable, fast, and secure delivery services across Kenya.
              Our technology-driven approach ensures that your deliveries reach their destination on time, every time.
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
            <p className="section-subtitle">Choose from our range of delivery services to meet your specific needs</p>
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
            <p className="section-subtitle">Tailored logistics solutions to help your business grow</p>
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
          <div className="cta-container">
            <h2>Ready to simplify your deliveries?</h2>
            <p>Join hundreds of businesses that trust XOBO for their delivery needs</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target='_blank' rel="noreferrer" className="cta-primary">
                Start Delivering
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

export default Services;
