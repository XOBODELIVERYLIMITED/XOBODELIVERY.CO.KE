import React from 'react';
import { FaHistory, FaTrophy, FaUsers, FaHandshake, FaMapMarkerAlt, FaBullseye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  const companyValues = [
    {
      icon: <FaHandshake />,
      title: "Reliability",
      description: "We pride ourselves on being dependable and consistent in our service delivery."
    },
    {
      icon: <FaBullseye />,
      title: "Efficiency",
      description: "We optimize our processes to ensure swift and accurate deliveries."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Our customers' satisfaction is at the heart of everything we do."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "XOBO Delivery was established with a vision to revolutionize logistics in Kenya."
    },
    {
      year: "2021",
      title: "Service Expansion",
      description: "Expanded our services to cover all major cities across Kenya."
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Launched our mobile app and business dashboard for seamless service delivery."
    },
    {
      year: "2023",
      title: "Fleet Expansion",
      description: "Added more vehicles to our fleet to support growing demand."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <h1>Our Story</h1>
            <p>The journey of building Kenya's most reliable delivery service</p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="section-intro">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title">Connecting Businesses with Customers</h2>
              <p className="section-description">
                At XOBO Delivery, we aim to be the bridge between businesses and their customers by providing
                reliable, efficient, and technology-driven delivery services. We understand the importance
                of timely deliveries in today's fast-paced world and strive to exceed expectations with
                every package we handle.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Daily Deliveries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">On-Time Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">Counties Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">Our core values shape how we approach every delivery and interaction</p>
          </div>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="history-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">XOBO Through the Years</h2>
            <p className="section-subtitle">The key milestones that shaped our growth</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <div className="timeline-marker"></div>
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="coverage-section">
        <div className="container">
          <div className="coverage-content">
            <div className="coverage-info">
              <div className="section-intro">
                <span className="section-tag">Our Location</span>
                <h2 className="section-title">Where to Find Us</h2>
                <p className="section-description">
                  XOBO Delivery is located at Longonot Place, Kijabe Street in the heart of Nairobi.
                  Visit our office to learn more about our services or to discuss your delivery needs.
                </p>
                <div className="coverage-features">
                  <div className="feature-item">
                    <FaMapMarkerAlt className="feature-icon" />
                    <span>Longonot Place, Kijabe Street, Nairobi</span>
                  </div>
                  <div className="feature-item">
                    <FaTrophy className="feature-icon" />
                    <span>Open Monday to Friday, 8am - 6pm</span>
                  </div>
                  <div className="feature-item">
                    <FaHistory className="feature-icon" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="coverage-map">
              {/* Google Map showing our location */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8179928428985!2d36.82238841526897!3d-1.2836062359877305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d258b9f4c5%3A0x82c5d5e7c9d5ef0c!2sLongonot%20Pl%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1713939474633!5m2!1sen!2ske" 
                  width="100%" 
                  height="400" 
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XOBO Delivery Location"
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to experience the XOBO difference?</h2>
            <p>Join thousands of satisfied customers who trust us with their deliveries</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noreferrer" className="cta-primary">
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

export default About;