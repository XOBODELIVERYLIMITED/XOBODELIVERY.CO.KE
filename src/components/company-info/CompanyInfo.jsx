import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCertificate, 
  FaShieldAlt, 
  FaFileContract, 
  FaUniversity,
  FaAward,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUsers,
  FaTruck,
  FaChartLine,
  FaHandshake,
  FaEye,
  FaHeart,
  FaBullseye,
  FaCheckCircle
} from 'react-icons/fa';
import './company-info.css';

function CompanyInfo() {
  const [activeSection, setActiveSection] = useState('overview');

  const companyStats = [
    { number: "2020", label: "Founded" },
    { number: "47", label: "Counties Covered" },
    { number: "200+", label: "Active Partners" },
    { number: "15,000+", label: "Deliveries Completed" },
    { number: "20+", label: "Business Clients" },
    { number: "98%", label: "On-time Delivery Rate" }
  ];

  const legalDocuments = [
    {
      category: "Business Registration",
      icon: <FaBuilding />,
      documents: [
        "Certificate of Incorporation",
        "Business Registration Certificate", 
        "KRA PIN Certificate",
        "Tax Compliance Certificate"
      ],
      status: "Valid & Up-to-date"
    },
    {
      category: "Operating Licenses",
      icon: <FaCertificate />,
      documents: [
        "Transport Service License",
        "Courier Service Permit",
        "Digital Platform License",
        "County Business Permit"
      ],
      status: "All Active"
    },
    {
      category: "Insurance Coverage",
      icon: <FaShieldAlt />,
      documents: [
        "Public Liability Insurance",
        "Goods in Transit Coverage",
        "Professional Indemnity Insurance",
        "Vehicle Fleet Insurance"
      ],
      status: "Comprehensive Coverage"
    }
  ];

  const companyValues = [
    {
      icon: <FaEye />,
      title: "Our Vision",
      description: "To be Kenya's leading logistics platform, connecting businesses and customers through reliable, technology-driven delivery solutions."
    },
    {
      icon: <FaHeart />,
      title: "Our Mission", 
      description: "To provide fast, reliable, and affordable delivery services that enable businesses to grow and customers to receive their goods efficiently."
    },
    {
      icon: <FaBullseye />,
      title: "Our Goal",
      description: "To revolutionize the logistics industry in Kenya through innovation, technology, and unwavering commitment to customer satisfaction."
    }
  ];

  return (
    <div className="company-info">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="container">
          <div className="hero-content">
            <h1>XOBO Delivery Limited</h1>
            <p>Kenya's Most Trusted & Compliant Delivery Service</p>
            <div className="company-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>Longonot Place, Kijabe Street, Nairobi, Kenya</span>
            </div>
            <div className="hero-stats-grid">
              {companyStats.map((stat, index) => (
                <div className="hero-stat" key={index}>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="info-navigation">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              Company Overview
            </button>
            <button 
              className={`nav-tab ${activeSection === 'legal' ? 'active' : ''}`}
              onClick={() => setActiveSection('legal')}
            >
              Legal & Compliance
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="info-content">
        <div className="container">
          {activeSection === 'overview' && (
            <div className="content-section">
              <div className="section-intro">
                <h2>About XOBO Delivery Limited</h2>
                <p>Established in 2020, XOBO Delivery Limited has emerged as Kenya's fastest-growing logistics platform, connecting businesses with reliable delivery solutions across 47 counties.</p>
              </div>

              <div className="company-values-grid">
                {companyValues.map((value, index) => (
                  <div className="value-card" key={index}>
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="contact-info-section">
                <h3>Contact Information</h3>
                <div className="contact-grid">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <h4>Physical Address</h4>
                      <p>Longonot Place, Kijabe Street<br />Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div>
                      <h4>Phone Numbers</h4>
                      <p>+254 799 396 000<br />+254 739 396 000</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <h4>Email Address</h4>
                      <p>info@xobo.co.ke</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaClock className="contact-icon" />
                    <div>
                      <h4>Business Hours</h4>
                      <p>Monday - Friday: 8am - 6pm<br />24/7 Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'legal' && (
            <div className="content-section">
              <div className="section-intro">
                <h2>Legal Documentation & Compliance</h2>
                <p>XOBO Delivery Limited operates with full legal compliance and maintains all required certifications and licenses for delivery services in Kenya.</p>
              </div>

              <div className="legal-docs-grid">
                {legalDocuments.map((category, index) => (
                  <div className="legal-card" key={index}>
                    <div className="legal-header">
                      <div className="legal-icon">{category.icon}</div>
                      <div>
                        <h3>{category.category}</h3>
                        <span className="status-badge">{category.status}</span>
                      </div>
                    </div>
                    <ul className="documents-list">
                      {category.documents.map((doc, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="check-icon" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="compliance-statement">
                <h3>Compliance Statement</h3>
                <p>XOBO Delivery Limited is fully registered and compliant with all relevant Kenyan laws and regulations governing courier and delivery services. We maintain active licenses with all regulatory bodies and carry comprehensive insurance coverage for all our operations.</p>
                
                <div className="compliance-highlights">
                  <div className="highlight-item">
                    <FaUniversity className="highlight-icon" />
                    <span>Registered with Registrar of Companies</span>
                  </div>
                  <div className="highlight-item">
                    <FaShieldAlt className="highlight-icon" />
                    <span>Comprehensive Insurance Coverage</span>
                  </div>
                  <div className="highlight-item">
                    <FaCertificate className="highlight-icon" />
                    <span>All Operating Licenses Valid</span>
                  </div>
                  <div className="highlight-item">
                    <FaFileContract className="highlight-icon" />
                    <span>Tax Compliant & Up-to-date</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="company-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Trust XOBO for Your Delivery Needs</h2>
            <p>Experience the reliability and professionalism of Kenya's most compliant delivery service</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Start Using XOBO
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

export default CompanyInfo;