import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaCreditCard, 
  FaEye, 
  FaCheckCircle,
  FaMobile,
  FaDesktop,
  FaClipboardList,
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaPhoneAlt
} from 'react-icons/fa';
import './client-guide.css';

function ClientGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const systemSteps = [
    {
      id: 0,
      title: "Create Your Account",
      icon: <FaUser />,
      description: "Get started with XOBO's delivery platform",
      details: [
        "Visit biz.xobo.co.ke and click 'Sign Up'",
        "Fill in your name, email, and phone number",
        "Create a secure password",
        "Verify your phone number with OTP",
        "Complete your profile setup"
      ],
      tips: [
        "Use a business email for corporate accounts",
        "Keep your phone number updated for delivery notifications",
        "Choose a strong password for account security"
      ]
    },
    {
      id: 1,
      title: "Navigate Your Dashboard",
      icon: <FaDesktop />,
      description: "Understanding your XOBO business dashboard",
      details: [
        "Access your main dashboard after login",
        "View your delivery history and statistics",
        "Manage your saved addresses and contacts",
        "Update your profile and payment methods",
        "Access customer support and help resources"
      ],
      tips: [
        "Bookmark your dashboard for quick access",
        "Save frequently used addresses",
        "Check delivery analytics to optimize your shipping"
      ]
    },
    {
      id: 2,
      title: "Place Your Order",
      icon: <FaClipboardList />,
      description: "Step-by-step order placement process",
      details: [
        "Enter your pickup location in the designated field",
        "Add your drop-off location(s)",
        "Use 'Add Destination' for multiple stops",
        "Select appropriate vehicle type for your package",
        "Add package details (size, weight, special instructions)",
        "Choose delivery time (ASAP or scheduled)",
        "Review order details and confirm"
      ],
      tips: [
        "Be accurate with addresses to avoid delays",
        "Provide recipient contact information",
        "Include any special delivery instructions"
      ]
    },
    {
      id: 3,
      title: "Track Your Delivery",
      icon: <FaEye />,
      description: "Real-time tracking and monitoring",
      details: [
        "Receive SMS and email notifications",
        "Monitor real-time GPS location updates",
        "View estimated arrival times",
        "Communicate with your assigned driver",
        "Get delivery confirmation with proof"
      ],
      tips: [
        "Keep your phone accessible for driver communication",
        "Track multiple orders from your dashboard",
        "Screenshot delivery confirmations for records"
      ]
    }
  ];

  const accountTypes = [
    {
      type: "Individual Account",
      icon: <FaUser />,
      features: [
        "Personal delivery orders",
        "Basic tracking and notifications",
        "Standard customer support",
        "Pay-per-delivery pricing"
      ],
      bestFor: "Personal use, occasional deliveries"
    },
    {
      type: "Business Account",
      icon: <FaHandshake />,
      features: [
        "Bulk delivery management",
        "Custom pricing agreements",
        "Priority customer support",
        "Detailed analytics and reporting",
        "API integration options",
        "Dedicated account manager"
      ],
      bestFor: "E-commerce stores, restaurants, retail businesses"
    }
  ];

  const vehicleGuide = [
    {
      vehicle: "Motorcycle",
      capacity: "Up to 10kg",
      bestFor: "Documents, small packages, urgent deliveries",
      coverage: "All areas within Nairobi and major towns"
    },
    {
      vehicle: "Car/MPV",
      capacity: "10-50kg",
      bestFor: "Medium packages, multiple stops, fragile items",
      coverage: "Urban and suburban areas"
    },
    {
      vehicle: "Van",
      capacity: "50-300kg",
      bestFor: "E-commerce deliveries, furniture, bulk items",
      coverage: "All covered counties"
    },
    {
      vehicle: "Pickup/Small Truck",
      capacity: "300kg-1 ton",
      bestFor: "Construction materials, wholesale goods",
      coverage: "Major routes and towns"
    },
    {
      vehicle: "Large Trucks (3-14 ton)",
      capacity: "1-14 tons",
      bestFor: "Industrial cargo, wholesale distribution",
      coverage: "Inter-county and major highways"
    }
  ];

  return (
    <div className="client-guide">
      {/* Hero Section */}
      <section className="guide-hero">
        <div className="container">
          <div className="hero-content">
            <h1>How to Use XOBO Delivery System</h1>
            <p>Complete guide to using our biz.xobo.co.ke platform for all your delivery needs</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>47</strong>
                <span>Counties Covered</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>On-time Delivery</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="step-by-step">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Step by Step</span>
            <h2 className="section-title">Getting Started with XOBO</h2>
            <p className="section-subtitle">Follow these simple steps to start using our delivery platform</p>
          </div>

          <div className="steps-container">
            <div className="steps-navigation">
              {systemSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`step-nav ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-nav-icon">{step.icon}</div>
                  <div className="step-nav-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="step-content">
              <div className="step-header">
                <div className="step-icon">{systemSteps[activeStep].icon}</div>
                <div>
                  <h3>{systemSteps[activeStep].title}</h3>
                  <p>{systemSteps[activeStep].description}</p>
                </div>
              </div>

              <div className="step-details">
                <h4>How to proceed:</h4>
                <ol>
                  {systemSteps[activeStep].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ol>

                <div className="step-tips">
                  <h4>💡 Pro Tips:</h4>
                  <ul>
                    {systemSteps[activeStep].tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="account-types">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Account Options</span>
            <h2 className="section-title">Choose Your Account Type</h2>
            <p className="section-subtitle">Select the account type that best fits your delivery needs</p>
          </div>

          <div className="account-cards">
            {accountTypes.map((account, index) => (
              <div className="account-card" key={index}>
                <div className="account-header">
                  <div className="account-icon">{account.icon}</div>
                  <h3>{account.type}</h3>
                </div>
                <div className="account-features">
                  {account.features.map((feature, idx) => (
                    <div className="feature" key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="account-best-for">
                  <strong>Best for:</strong> {account.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Selection Guide */}
      <section className="vehicle-guide">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Vehicle Selection</span>
            <h2 className="section-title">Choosing the Right Vehicle</h2>
            <p className="section-subtitle">Select the appropriate vehicle based on your package size and delivery requirements</p>
          </div>

          <div className="vehicle-grid">
            {vehicleGuide.map((vehicle, index) => (
              <div className="vehicle-card" key={index}>
                <div className="vehicle-header">
                  <FaTruck className="vehicle-icon" />
                  <h3>{vehicle.vehicle}</h3>
                </div>
                <div className="vehicle-details">
                  <div className="detail-item">
                    <strong>Capacity:</strong> {vehicle.capacity}
                  </div>
                  <div className="detail-item">
                    <strong>Best for:</strong> {vehicle.bestFor}
                  </div>
                  <div className="detail-item">
                    <strong>Coverage:</strong> {vehicle.coverage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="support-info">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Need Help?</span>
            <h2 className="section-title">Customer Support</h2>
            <p className="section-subtitle">We're here to help you succeed with your deliveries</p>
          </div>

          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">
                <FaPhoneAlt />
              </div>
              <h3>Call Support</h3>
              <p>Speak directly with our support team</p>
              <div className="support-details">
                <a href="tel:+254799396000">+254 799 396 000</a>
                <a href="tel:+254739396000">+254 739 396 000</a>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <FaClock />
              </div>
              <h3>Business Hours</h3>
              <p>Monday to Friday: 8am - 6pm</p>
              <div className="support-details">
                <span>24/7 Emergency Support Available</span>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <FaClipboardList />
              </div>
              <h3>Help Resources</h3>
              <p>Access our comprehensive FAQ and guides</p>
              <div className="support-details">
                <Link to="/faq">View FAQ</Link>
                <a href="https://scribehow.com/viewer/Creating_An_Account_And_Managing_Your_Profile__bnodEkxRRriykctCzB8j7w" target="_blank" rel="noopener noreferrer">
                  Step-by-step Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="guide-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Using XOBO?</h2>
            <p>Join thousands of satisfied customers who trust us with their deliveries</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Access Platform
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientGuide; 