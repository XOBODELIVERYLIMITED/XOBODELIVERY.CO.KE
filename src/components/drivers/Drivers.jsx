import React, { useState, useEffect } from 'react';
import { FaCar, FaMoneyBillWave, FaClock, FaShieldAlt, FaIdCard, FaFileAlt, FaCarAlt, FaChartLine, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { optimizeTouchTargets } from '../../utils/mobileOptimization';
import './drivers.css';

function Drivers() {
  const [activeTab, setActiveTab] = useState('individual');
  
  // Handle mobile optimization for driver tabs
  useEffect(() => {
    // Optimize touch targets specifically for driver tabs on mobile
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        optimizeTouchTargets();
        // Ensure driver tabs are properly interactive on mobile
        const driverTabs = document.querySelectorAll('.driver-tabs .tab');
        driverTabs.forEach(tab => {
          tab.style.touchAction = 'manipulation';
          tab.style.webkitTapHighlightColor = 'rgba(22, 35, 77, 0.2)';
          tab.style.cursor = 'pointer';
          tab.style.pointerEvents = 'auto';
          tab.style.zIndex = '100';
          tab.style.position = 'relative';
        });
      }, 100);
    }
  }, [activeTab]); // Re-run when active tab changes

  const driverBenefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Earnings",
      description: "Earn competitive rates with transparent payments and regular payouts."
    },
    {
      icon: <FaClock />,
      title: "Flexible Schedule",
      description: "Work on your own schedule. Choose when and how much you work."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Features",
      description: "App features designed to keep you safe on the road."
    },
    {
      icon: <FaChartLine />,
      title: "Growth Opportunities",
      description: "Advancement opportunities and increased earnings based on performance."
    }
  ];

  const individualRequirements = [
    {
      category: "Personal Details",
      icon: <FaIdCard />,
      items: [
        "Full names",
        "Profile photo",
        "M-Pesa number",
        "Email address",
        "ID document",
        "Driving license"
      ]
    },
    {
      category: "Vehicle Details",
      icon: <FaCar />,
      items: [
        "Vehicle photo",
        "Registration number",
        "Logbook/sales agreement",
        "Insurance",
        "KRA Pin"
      ]
    }
  ];

  const fleetRequirements = [
    {
      category: "Company Documents",
      icon: <FaFileAlt />,
      items: [
        "Certificate of incorporation",
        "Business permit",
        "KRA Pin",
        "Tax compliance",
        "Company profile"
      ]
    },
    {
      category: "Fleet Information",
      icon: <FaTruck />,
      items: [
        "Vehicle fleet list",
        "Vehicle logbooks",
        "Insurance coverage",
        "Driver contracts",
        "Safety protocols"
      ]
    }
  ];

  const driverRequirements = [
    {
      icon: <FaIdCard />,
      title: "Valid ID",
      description: "Government-issued ID (National ID, Passport)"
    },
    {
      icon: <FaFileAlt />,
      title: "Driver's License",
      description: "Valid Kenyan license for your vehicle class"
    },
    {
      icon: <FaCarAlt />,
      title: "Vehicle Requirements",
      description: "Well-maintained vehicle meeting our safety standards"
    },
    {
      icon: <FaShieldAlt />,
      title: "Background Check",
      description: "Standard background check for safety and security"
    }
  ];

  const applicationSteps = [
    {
      step: "Step 1",
      title: "Apply Online",
      description: "Fill out our simple online application form."
    },
    {
      step: "Step 2",
      title: "Document Verification",
      description: "Submit required documents for verification."
    },
    {
      step: "Step 3",
      title: "Background Check",
      description: "We conduct a thorough background check."
    },
    {
      step: "Step 4",
      title: "Training",
      description: "Complete brief training on app and procedures."
    },
    {
      step: "Step 5",
      title: "Start Earning",
      description: "Begin accepting delivery requests."
    }
  ];

  const driverTestimonials = [
    {
      name: "John Kamau",
      position: "Driver since 2021",
      image: `${process.env.PUBLIC_URL}/media/driver1.jpg`,
      quote: "Joining XOBO gave me flexibility to earn while having time for family. The app is easy to use with helpful support."
    },
    {
      name: "Mary Otieno",
      position: "Driver since 2022",
      image: `${process.env.PUBLIC_URL}/media/driver2.jpg`,
      quote: "Started part-time, now full-time. Consistent earnings with flexible schedule to pursue other interests."
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
            <p>Join our team and enjoy flexible earning opportunities</p>
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
              Earn income on your own terms. Full-time or part-time,
              our platform offers flexibility and support to succeed.
            </p>
          </div>
          <div className="intro-cards">
            <div className="intro-card">
              <div className="intro-card-icon">
                <FaClock />
              </div>
              <div className="intro-card-content">
                <h3>Flexible Schedule</h3>
                <p>Work when you want, where you want. Set your own schedule and work at your own pace.</p>
              </div>
            </div>
            <div className="intro-card">
              <div className="intro-card-icon">
                <FaShieldAlt />
              </div>
              <div className="intro-card-content">
                <h3>24/7 Driver Support</h3>
                <p>Get help whenever you need it with our round-the-clock driver support team.</p>
              </div>
            </div>
            <div className="intro-card">
              <div className="intro-card-icon">
                <FaChartLine />
              </div>
              <div className="intro-card-content">
                <h3>Growth Opportunities</h3>
                <p>Expand your earning potential with performance-based incentives and bonuses.</p>
              </div>
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
            <p className="section-subtitle">Benefits when you join our driver network</p>
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

      {/* Driver Types */}
      <section className="driver-types-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Partnership Options</span>
            <h2 className="section-title">Choose Your Driver Type</h2>
            <p className="section-subtitle">Individual drivers and fleet companies welcome</p>
          </div>

          <div className="driver-tabs">
            <button 
              className={`tab ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => setActiveTab('individual')}
              onTouchEnd={(e) => {
                e.preventDefault();
                setActiveTab('individual');
              }}
              type="button"
              aria-pressed={activeTab === 'individual'}
              role="tab"
            >
              <FaCar className="tab-icon" />
              Individual Driver
            </button>
            <button 
              className={`tab ${activeTab === 'company' ? 'active' : ''}`}
              onClick={() => setActiveTab('company')}
              onTouchEnd={(e) => {
                e.preventDefault();
                setActiveTab('company');
              }}
              type="button"
              aria-pressed={activeTab === 'company'}
              role="tab"
            >
              <FaTruck className="tab-icon" />
              Fleet Company
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'individual' && (
              <div className="requirements-section individual">
                <h3>Individual Driver Requirements</h3>
                <p>For individual drivers with own vehicles seeking extra income</p>
                <div className="requirements-grid">
                  {individualRequirements.map((req, index) => (
                    <div className="requirement-card" key={index}>
                      <div className="requirement-header">
                        <div className="requirement-icon">{req.icon}</div>
                        <h4>{req.category}</h4>
                      </div>
                      <ul className="requirement-list">
                        {req.items.map((item, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="check-icon" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'company' && (
              <div className="requirements-section company">
                <h3>Fleet Company Requirements</h3>
                <p>For companies with multiple vehicles expanding delivery services</p>
                <div className="requirements-grid">
                  {fleetRequirements.map((req, index) => (
                    <div className="requirement-card" key={index}>
                      <div className="requirement-header">
                        <div className="requirement-icon">{req.icon}</div>
                        <h4>{req.category}</h4>
                      </div>
                      <ul className="requirement-list">
                        {req.items.map((item, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="check-icon" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section general">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">What You'll Need</h2>
            <p className="section-subtitle">Basic requirements to become a delivery partner</p>
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
            <p className="section-subtitle">Simple steps to start earning with XOBO</p>
          </div>
          <div className="timeline">
            {applicationSteps.map((step, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <div className="timeline-marker"></div>
                  <div className="timeline-year">{step.step}</div>
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
            <p className="section-subtitle">What our delivery partners say</p>
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
      <section className="cta-section" id="apply">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Team?</h2>
            <p>Apply now and start earning with Kenya's fastest growing delivery service</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.xobbo.driver&pcampaignid=web_share" target="_blank" rel="noreferrer" className="cta-primary">
                <FaCar className="button-icon" /> Apply as Driver
              </a>
              <Link to="/contact" className="cta-secondary">
                <FaIdCard className="button-icon" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drivers;