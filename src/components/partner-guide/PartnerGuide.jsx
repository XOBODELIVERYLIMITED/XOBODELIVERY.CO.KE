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
        "Registered M-Pesa phone number",
        "Valid email address",
        "Identification document (ID)",
        "Driving license"
      ]
    },
    {
      category: "Vehicle Details",
      icon: <FaCar />,
      items: [
        "Vehicle photo (full photo)",
        "Vehicle registration number (number plate)",
        "Logbook photo/sales agreement",
        "Insurance photo",
        "KRA Pin certificate"
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
        "KRA Pin certificate",
        "Tax compliance certificate",
        "Company profile and overview"
      ]
    },
    {
      category: "Fleet Information",
      icon: <FaTruck />,
      items: [
        "Vehicle fleet list and photos",
        "All vehicle logbooks/registration",
        "Comprehensive insurance coverage",
        "Driver employment contracts",
        "Safety protocols documentation"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Initial Application",
      description: "Contact XOBO and express your interest in becoming a delivery partner",
      details: [
        "Call +254 799 396 000 or +254 739 396 000",
        "Email your interest to info@xobo.co.ke",
        "Visit our office at Longonot Place, Kijabe Street, Nairobi",
        "Fill out the online application form"
      ]
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit all required documents for verification",
      details: [
        "Send documents via WhatsApp to +254 799 396 000",
        "Email scanned copies to info@xobo.co.ke",
        "Ensure all documents are clear and valid",
        "Include both personal and vehicle documentation"
      ]
    },
    {
      step: 3,
      title: "Verification Process",
      description: "XOBO team reviews and verifies your documents",
      details: [
        "Document authenticity verification",
        "Background checks completion",
        "Vehicle inspection scheduling",
        "Reference checks (if applicable)"
      ]
    },
    {
      step: 4,
      title: "Onboarding & Training",
      description: "Complete orientation and training program",
      details: [
        "Attend brief orientation session",
        "Driver app training and setup",
        "Safety protocols briefing",
        "Customer service standards training"
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
        "Valid motorcycle license",
        "Motorcycle insurance",
        "Good condition bike",
        "Safety helmet and gear"
      ]
    },
    {
      type: "Car/MPV",
      icon: <FaCar />,
      capacity: "10-50kg",
      earnings: "KES 2,000 - 4,000/day",
      requirements: [
        "Valid driving license",
        "Comprehensive insurance",
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
        "Commercial driving license",
        "Commercial vehicle insurance",
        "Loading/offloading capability",
        "Cargo securing equipment"
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Earnings",
      description: "Earn attractive daily rates with performance bonuses and incentives"
    },
    {
      icon: <FaClock />,
      title: "Flexible Hours",
      description: "Work according to your schedule with 24/7 delivery opportunities"
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance protection for goods in transit"
    },
    {
      icon: <FaGraduationCap />,
      title: "Training & Development",
      description: "Ongoing training programs to improve your skills and earnings"
    },
    {
      icon: <FaMobile />,
      title: "Easy-to-Use App",
      description: "User-friendly driver app for order management and tracking"
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      description: "Work with Kenya's fastest growing delivery service"
    }
  ];

  return (
    <div className="partner-guide">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Become a XOBO Delivery Partner</h1>
            <p>Join Kenya's fastest growing delivery network and start earning today</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>200+</strong>
                <span>Active Partners</span>
              </div>
              <div className="stat">
                <strong>15,000+</strong>
                <span>Deliveries Completed</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Earning Opportunities</span>
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
            <p className="section-subtitle">Simple 4-step process to become a XOBO partner</p>
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
            <p className="section-subtitle">We welcome both individual drivers and fleet companies</p>
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
                <p>Perfect for individual drivers who own their vehicles and want to earn extra income</p>
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
                <p>Ideal for companies with multiple vehicles looking to expand their delivery services</p>
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
            <span className="section-tag">Earning Potential</span>
            <h2 className="section-title">Vehicle Types & Expected Earnings</h2>
            <p className="section-subtitle">Choose the vehicle category that matches your setup</p>
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
                  <span className="earnings-note">Average daily potential</span>
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
            <p className="section-subtitle">Enjoy these exclusive benefits as a XOBO delivery partner</p>
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
            <p className="section-subtitle">Get the support you need to succeed as a XOBO partner</p>
          </div>

          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">
                <FaPhoneAlt />
              </div>
              <h3>Application Support</h3>
              <p>Need help with your application? Call us directly</p>
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
              <p>Visit us for in-person consultation</p>
              <div className="support-details">
                <span>Monday - Friday: 8am - 6pm</span>
                <span>Longonot Place, Kijabe Street</span>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <FaClipboardList />
              </div>
              <h3>Online Application</h3>
              <p>Start your application process online</p>
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
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does the application process take?</h4>
              <p>The typical application process takes 3-7 business days from document submission to approval, depending on verification requirements.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need my own vehicle?</h4>
              <p>Yes, you need to own or have legal access to a registered vehicle with valid insurance and documentation.</p>
            </div>
            <div className="faq-item">
              <h4>How are payments processed?</h4>
              <p>Payments are processed directly to your registered M-Pesa account on a regular schedule based on completed deliveries.</p>
            </div>
            <div className="faq-item">
              <h4>What support is available for partners?</h4>
              <p>We provide 24/7 technical support, regular training updates, and dedicated partner support team assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of successful delivery partners earning with XOBO</p>
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