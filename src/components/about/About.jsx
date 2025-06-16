import React from 'react';
import { FaHistory, FaTrophy, FaUsers, FaHandshake, FaMapMarkerAlt, FaBullseye, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  const companyValues = [
    {
      icon: <FaHandshake />,
      title: "Reliability",
      description: "Dependable and consistent service delivery."
    },
    {
      icon: <FaBullseye />,
      title: "Efficiency",
      description: "Optimized processes for swift, accurate deliveries."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Customer satisfaction at the heart of everything we do."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "XOBO established with vision to revolutionize logistics in Kenya."
    },
    {
      year: "2021",
      title: "Service Expansion",
      description: "Expanded services to major cities across Kenya."
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Launched mobile app and business dashboard."
    },
    {
      year: "2023",
      title: "Fleet Expansion",
      description: "Added more vehicles to support growing demand."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Our Story</h1>
            <p>Building Kenya's most reliable delivery service</p>
            <div className="hero-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="hero-button primary">
                <FaTrophy className="button-icon" /> Start Delivering
              </a>
              <Link to="/contact" className="hero-button secondary">
                <FaEnvelope className="button-icon" /> Contact Us
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>2021</strong>
                <span>Founded</span>
              </div>
              <div className="stat">
                <strong>47</strong>
                <span>Counties Covered</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XOBO Name Story */}
      <section className="name-story-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Identity</span>
            <h2 className="section-title">The Story Behind XOBO</h2>
            <p className="section-subtitle">Every letter in our name represents our commitment to excellence</p>
          </div>
          
          <div className="xobo-letters">
            <div className="letter-card">
              <div className="letter-display">X</div>
              <div className="letter-content">
                <h3>eXceeding Expectations</h3>
                <p>We don't just meet expectations—we aim to beat them. The "X" is a reminder that every delivery is a chance to surprise our customers with service that goes the extra mile.</p>
              </div>
            </div>
            
            <div className="letter-card">
              <div className="letter-display">O</div>
              <div className="letter-content">
                <h3>Optimized Logistics</h3>
                <p>Logistics doesn't have to be complicated. We simplify it with smart systems and a thoughtful approach—so everything gets where it needs to go, without the hassle.</p>
              </div>
            </div>
            
            <div className="letter-card">
              <div className="letter-display">B</div>
              <div className="letter-content">
                <h3>Bridging Distances</h3>
                <p>Behind every package is a person. Whether it's across town or across borders, we help close the distance between businesses and communities, loved ones and goods.</p>
              </div>
            </div>
            
            <div className="letter-card">
              <div className="letter-display">O</div>
              <div className="letter-content">
                <h3>On-Time Delivery</h3>
                <p>Timing is everything—and we treat it that way. That last "O" reflects our promise to be on time, every time, because your trust depends on it.</p>
              </div>
            </div>
          </div>

          <div className="name-story-narrative">
            <div className="story-content">
              <h3>The Story Behind the Name</h3>
              <div className="story-text">
                <p>
                  At XOBO, we're more than just logistics—we're connectors. The "X" in our name stands for the intersection of innovation and reliability. It's where smart technology meets human dedication.
                </p>
                <p>
                  "OBO" speaks to how we do it—with optimized logistics, seamless operations, and a mindset that sees every delivery as an opportunity. Together, XOBO is our promise to deliver more than packages—we deliver peace of mind, right on time.
                </p>
              </div>
            </div>
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
                We aim to bridge businesses and customers through reliable, 
                efficient, and technology-driven delivery services. We deliver on time
                and strive to exceed expectations with every package.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Business Clients</div>
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
            <p className="section-subtitle">Core values that shape our approach</p>
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
            <h2 className="section-title">XOBO Timeline</h2>
            <p className="section-subtitle">Key milestones in our growth</p>
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
                  Located at Longonot Place, Kijabe Street, Nairobi.
                  Visit us to discuss your delivery needs.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4762.7006173560185!2d36.81300297571516!3d-1.2774535356180687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17c6027f0003%3A0xe2f13d478848ccc1!2sXobo%20Delivery%20Limited!5e1!3m2!1sen!2ske!4v1750083195590!5m2!1sen!2ske" 
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
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to experience XOBO?</h2>
            <p>Join thousands of satisfied customers who trust us with their deliveries</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noreferrer" className="cta-primary">
                <FaTrophy className="button-icon" /> Start Delivering
              </a>
              <Link to="/contact" className="cta-secondary">
                <FaEnvelope className="button-icon" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;