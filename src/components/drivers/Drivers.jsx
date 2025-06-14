import React from 'react';
import { FaCar, FaMoneyBillWave, FaClock, FaShieldAlt, FaIdCard, FaFileAlt, FaCarAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './drivers.css';

function Drivers() {
  const driverBenefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Earnings",
      description: "Earn competitive rates with transparent payment structures and regular payouts."
    },
    {
      icon: <FaClock />,
      title: "Flexible Schedule",
      description: "Work on your own schedule. Choose when and how much you want to work."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Features",
      description: "Our app includes features designed to keep you safe while on the road."
    },
    {
      icon: <FaChartLine />,
      title: "Growth Opportunities",
      description: "Opportunities for advancement and increased earnings based on performance."
    }
  ];

  const driverRequirements = [
    {
      icon: <FaIdCard />,
      title: "Valid ID",
      description: "Government-issued identification card (National ID, Passport)"
    },
    {
      icon: <FaFileAlt />,
      title: "Driver's License",
      description: "Valid Kenyan driver's license appropriate for your vehicle class"
    },
    {
      icon: <FaCarAlt />,
      title: "Vehicle Requirements",
      description: "A well-maintained vehicle that meets our safety standards (if using your own)"
    },
    {
      icon: <FaShieldAlt />,
      title: "Background Check",
      description: "Pass our standard background check for safety and security"
    }
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill out our simple online application form with your details."
    },
    {
      number: "02",
      title: "Document Verification",
      description: "Submit required documents for verification."
    },
    {
      number: "03",
      title: "Background Check",
      description: "We conduct a thorough background check for everyone's safety."
    },
    {
      number: "04",
      title: "Training",
      description: "Complete our brief training on using the driver app and procedures."
    },
    {
      number: "05",
      title: "Start Earning",
      description: "Begin accepting delivery requests and earning money."
    }
  ];

  const driverTestimonials = [
    {
      name: "John Kamau",
      position: "Driver since 2021",
      image: `${process.env.PUBLIC_URL}/media/driver1.jpg`,
      quote: "Joining XOBO as a driver has given me the flexibility to earn a good income while still having time for my family. The app is easy to use and the support team is always helpful."
    },
    {
      name: "Mary Otieno",
      position: "Driver since 2022",
      image: `${process.env.PUBLIC_URL}/media/driver2.jpg`,
      quote: "I started driving for XOBO part-time and now I'm doing it full-time. The earnings are consistent and the flexible schedule allows me to pursue my other interests."
    }
  ];

  return (
    <div className="drivers-page">
      {/* Hero Section */}
      <section className="drivers-hero">
        <div className="drivers-hero-overlay"></div>
        <div className="container">
          <div className="drivers-hero-content">
            <h1>Drive With XOBO</h1>
            <p>Join our growing team of delivery partners and enjoy flexible earning opportunities</p>
            <a href="https://play.google.com/store/apps/details?id=com.xobbo.driver&pcampaignid=web_share" target="_blank" rel="noreferrer" className="hero-button primary">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="drivers-intro">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Why Drive with Us</span>
            <h2 className="section-title">Flexible Work, Reliable Income</h2>
            <p className="section-description">
              XOBO provides drivers with a platform to earn income on their own terms. Whether you're
              looking for full-time work or just want to earn extra income in your spare time,
              our platform offers the flexibility and support you need to succeed.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <div className="stat-number">600+</div>
              <div className="stat-label">Active Drivers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">47</div>
              <div className="stat-label">Counties Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Driver Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Benefits</span>
            <h2 className="section-title">Why Choose XOBO</h2>
            <p className="section-subtitle">Enjoy these benefits when you join our driver network</p>
          </div>
          <div className="benefits-grid">
            {driverBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">What You'll Need</h2>
            <p className="section-subtitle">Basic requirements to become a XOBO delivery partner</p>
          </div>
          <div className="requirements-grid">
            {driverRequirements.map((requirement, index) => (
              <div className="requirement-card" key={index}>
                <div className="requirement-icon">{requirement.icon}</div>
                <h3>{requirement.title}</h3>
                <p>{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">How to Apply</h2>
            <p className="section-subtitle">Follow these simple steps to start earning with XOBO</p>
          </div>
          <div className="application-process">
            {applicationSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="driver-testimonials">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Driver Stories</span>
            <h2 className="section-title">Hear From Our Drivers</h2>
            <p className="section-subtitle">What our delivery partners say about working with XOBO</p>
          </div>
          <div className="testimonials-grid">
            {driverTestimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-image">
                  <div className="image-fallback" style={{display: 'flex'}}>
                    <FaCar />
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="drivers-cta-section" id="apply">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to Join Our Team?</h2>
            <p>Apply now and start earning with Kenya's fastest growing delivery service</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.xobbo.driver&pcampaignid=web_share" target="_blank" rel="noreferrer" className="hero-button primary">
                Apply as Driver
              </a>
              <Link to="/contact" className="hero-button secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drivers;