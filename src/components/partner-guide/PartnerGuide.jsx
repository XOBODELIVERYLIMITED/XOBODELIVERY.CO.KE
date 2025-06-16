import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCar, 
  FaFileAlt, 
  FaUserCheck, 
  FaMobile,
  FaMoneyBillWave,
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaPhoneAlt,
  FaCheckCircle,
  FaMotorcycle,
  FaTruck,
  FaIdCard,
  FaCamera,
  FaClipboardList,
  FaGraduationCap,
  FaAward
} from 'react-icons/fa';
import './partner-guide.css';

function PartnerGuide() {
  const [activeTab, setActiveTab] = useState('individual');

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
        "Logbook/agreement",
        "Insurance",
        "KRA Pin"
      ]
    }
  ];

  const companyRequirements = [
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
        "Fleet list",
        "Vehicle documentation",
        "Insurance coverage",
        "Driver contracts",
        "Safety protocols"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Application",
      description: "Express interest in becoming a delivery partner",
      details: [
        "Call +254 799 396 000 or +254 739 396 000",
        "Email info@xobo.co.ke",
        "Visit Longonot Place, Kijabe Street, Nairobi",
        "Online application form"
      ]
    },
    {
      step: 2,
      title: "Documents",
      description: "Submit required documents for verification",
      details: [
        "Send via WhatsApp to +254 799 396 000",
        "Email copies to info@xobo.co.ke",
        "Ensure clear and valid documents",
        "Include personal and vehicle documents"
      ]
    },
    {
      step: 3,
      title: "Verification",
      description: "Document review and verification",
      details: [
        "Document verification",
        "Background checks",
        "Vehicle inspection",
        "Reference checks"
      ]
    },
    {
      step: 4,
      title: "Onboarding",
      description: "Orientation and training program",
      details: [
        "Orientation session",
        "App training",
        "Safety protocols",
        "Customer service standards"
      ]
    }
  ];

  const vehicleTypes = [
    {
      type: "Motorcycle",
      icon: <FaMotorcycle />,
      capacity: "Up to 10kg",
      earnings: "KES 1,500 - 3,000/day",
      requirements: [
        "Motorcycle license",
        "Insurance",
        "Good condition bike",
        "Safety gear"
      ]
    },
    {
      type: "Car/MPV",
      icon: <FaCar />,
      capacity: "10-50kg",
      earnings: "KES 2,000 - 4,000/day",
      requirements: [
        "Driving license",
        "Insurance",
        "Well-maintained vehicle",
        "Clean driving record"
      ]
    },
    {
      type: "Van/Pickup",
      icon: <FaTruck />,
      capacity: "50kg-1 ton",
      earnings: "KES 3,000 - 6,000/day",
      requirements: [
        "Commercial license",
        "Commercial insurance",
        "Loading capability",
        "Cargo securing gear"
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Earnings",
      description: "Attractive rates with performance bonuses"
    },
    {
      icon: <FaClock />,
      title: "Flexible Hours",
      description: "Work on your schedule with 24/7 opportunities"
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Coverage",
      description: "Protection for goods in transit"
    },
    {
      icon: <FaGraduationCap />,
      title: "Training & Development",
      description: "Programs to improve skills and earnings"
    },
    {
      icon: <FaMobile />,
      title: "Easy-to-Use App",
      description: "User-friendly order management and tracking"
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      description: "Kenya's fastest growing delivery service"
    }
  ];

  return (
    <div className="partner-guide">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Become a XOBO Delivery Partner</h1>
            <p>Join Kenya's fastest growing delivery network and start earning</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>200+</strong>
                <span>Active Partners</span>
              </div>
              <div className="stat">
                <strong>15,000+</strong>
                <span>Deliveries</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Opportunities</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="https://forms.xobo.co.ke/driver-application" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Download Driver APP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Application Process</span>
            <h2 className="section-title">How to Apply</h2>
            <p className="section-subtitle">Simple 4-step process to join XOBO</p>
          </div>

          <div className="process-steps">
            {applicationSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul>
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="partner-types">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Partnership Options</span>
            <h2 className="section-title">Choose Your Partnership Type</h2>
            <p className="section-subtitle">Individual drivers and fleet companies welcome</p>
          </div>

          <div className="partner-tabs">
            <button 
              className={`tab ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              <FaCar className="tab-icon" />
              Individual Driver
            </button>
            <button 
              className={`tab ${activeTab === 'company' ? 'active' : ''}`}
              onClick={() => setActiveTab('company')}
            >
              <FaTruck className="tab-icon" />
              Fleet Company
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'individual' && (
              <div className="requirements-section">
                <h3>Individual Driver Requirements</h3>
                <p>For individual drivers with own vehicles</p>
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
              <div className="requirements-section">
                <h3>Fleet Company Requirements</h3>
                <p>For companies with multiple vehicles</p>
                <div className="requirements-grid">
                  {companyRequirements.map((req, index) => (
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

      {/* Vehicle Types & Earnings */}
      <section className="vehicle-earnings">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Earnings</span>
            <h2 className="section-title">Vehicle Types & Earnings</h2>
            <p className="section-subtitle">Choose the vehicle that matches your setup</p>
          </div>

          <div className="vehicle-grid">
            {vehicleTypes.map((vehicle, index) => (
              <div className="vehicle-earning-card" key={index}>
                <div className="vehicle-header">
                  <div className="vehicle-icon">{vehicle.icon}</div>
                  <div>
                    <h3>{vehicle.type}</h3>
                    <span className="capacity">{vehicle.capacity}</span>
                  </div>
                </div>
                <div className="earnings-info">
                  <div className="earnings-amount">{vehicle.earnings}</div>
                  <span className="earnings-note">Daily potential</span>
                </div>
                <div className="vehicle-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {vehicle.requirements.map((req, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="partner-benefits">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Why Choose XOBO</span>
            <h2 className="section-title">Partner Benefits</h2>
            <p className="section-subtitle">Exclusive benefits as a XOBO partner</p>
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

      {/* Support & Contact */}
      <section className="partner-support">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Partner Support</span>
            <h2 className="section-title">We're Here to Help</h2>
            <p className="section-subtitle">Support to succeed as a XOBO partner</p>
          </div>

          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">
                <FaPhoneAlt />
              </div>
              <h3>Application Support</h3>
              <p>Need help with your application?</p>
              <div className="support-details">
                <a href="tel:+254799396000">+254 799 396 000</a>
                <a href="tel:+254739396000">+254 739 396 000</a>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <FaClock />
              </div>
              <h3>Office Hours</h3>
              <p>Visit for in-person consultation</p>
              <div className="support-details">
                <span>Monday-Friday: 8am-6pm</span>
                <span>Longonot Place, Kijabe St</span>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <FaClipboardList />
              </div>
              <h3>Online Application</h3>
              <p>Start your application online</p>
              <div className="support-details">
                <a href="https://forms.xobo.co.ke/driver-application" target="_blank" rel="noopener noreferrer">
                  Application Form
                </a>
                <Link to="/faq">View FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="partner-faq">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">FAQ</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does the application take?</h4>
              <p>Typically 3-7 business days from document submission to approval.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need my own vehicle?</h4>
              <p>Yes, you need a registered vehicle with valid insurance and documentation.</p>
            </div>
            <div className="faq-item">
              <h4>How are payments processed?</h4>
              <p>Directly to your M-Pesa account based on completed deliveries.</p>
            </div>
            <div className="faq-item">
              <h4>What support is available?</h4>
              <p>24/7 technical support, regular training updates, and dedicated support team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of successful partners earning with XOBO</p>
            <div className="cta-buttons">
              <a href="https://forms.xobo.co.ke/driver-application" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Download Driver APP
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

export default PartnerGuide; 