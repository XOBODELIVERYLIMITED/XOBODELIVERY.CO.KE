// FAQ.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FAQPage from './FAQPage';
import { FaQuestionCircle, FaShippingFast, FaTruck, FaHeadset, FaRegLightbulb } from 'react-icons/fa';
import './faq.css'; 

const FAQ = () => {
  const faqs = [
    // Client System FAQs (biz.xobo.co.ke)
    {
      "id": 1,
      "question": "How do I create an account?",
      "answer": "Go to <a href='https://biz.xobo.co.ke/login' target='_blank' rel='noopener noreferrer' style='color: #16234d; font-weight: 600; text-decoration: underline;'>biz.xobo.co.ke/login</a> and click 'Do not have an account'. Fill in your details and create a password. Then login with your email and password.",
      "category": "account"
    },

    {
      "id": 2,
      "question": "What happens after creating my account?",
      "answer": "You'll access your dashboard where you can manage orders, view history, track deliveries, and use platform features.",
      "category": "account"
    },

    {
      "id": 3,
      "question": "Is there a guide for the platform?",
      "answer": "Yes! We have a visual training guide at: <a href='https://scribehow.com/viewer/Creating_An_Account_And_Managing_Your_Profile__bnodEkxRRriykctCzB8j7w' target='_blank' rel='noopener noreferrer' style='color: #16234d; font-weight: 600; text-decoration: underline;'>Visual Training Guide</a> with screenshots and instructions to help you get started.",
      "category": "account"
    },

    {
      "id": 4,
      "question": "How do I place an order?",
      "answer": "1. Enter pickup location\n2. Enter drop-off location\n3. Add additional destinations if needed\n4. Review and confirm\nPricing is based on agreed rates and vehicle type.",
      "category": "order"
    },

    {
      "id": 5,
      "question": "Can I add multiple destinations?",
      "answer": "Yes! Use the 'Add Destination' feature to include additional stops in a single order.",
      "category": "order"
    },

    {
      "id": 6,
      "question": "How do I manage my profile?",
      "answer": "Access settings from your dashboard to update personal info, change password, manage payment methods, view history, and adjust notifications.",
      "category": "account"
    },

    {
      "id": 7,
      "question": "What information is needed for an order?",
      "answer": "Pickup and drop-off locations, package details, receiver information, special instructions, and preferred delivery time.",
      "category": "order"
    },

    {
      "id": 8,
      "question": "Can I schedule deliveries?",
      "answer": "Yes! Choose between instant delivery or schedule for a specific date and time.",
      "category": "order"
    },

    {
      "id": 9,
      "question": "How do I track orders?",
      "answer": "Track in real-time through your dashboard. View driver location, ETA, and status updates. You'll also receive SMS and email notifications.",
      "category": "delivery"
    },

    // Partners FAQs
    {
      "id": 10,
      "question": "How can I become a delivery partner?",
      "answer": "Apply as individual driver or company/fleet. Contact us at <a href='tel:+254799396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0799 396000</a> or <a href='tel:+254739396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0739 396000</a> with required documents. We'll verify documents and guide you through onboarding.",
      "category": "partners"
    },

    {
      "id": 11,
      "question": "What documents do individual drivers need?",
      "answer": "Personal: Full name, photo, M-Pesa number, email, ID, driving license\nVehicle: Photo, registration number, logbook/agreement, insurance, KRA Pin",
      "category": "partners"
    },

    {
      "id": 12,
      "question": "What documents do fleet owners need?",
      "answer": "Contact Person: Full name, photo, M-Pesa number, driving license, ID\nCompany: Name, email, certificate of incorporation, CR12, KRA Pin\nVehicle: Same documents as individual drivers for each vehicle",
      "category": "partners"
    },

    {
      "id": 13,
      "question": "What are the vehicle safety requirements?",
      "answer": "Required: Fire extinguisher, first aid kit, reverse beep system, wheel choke, XOBO sticker. Vehicles must be clean before and during loading.",
      "category": "partners"
    },

    {
      "id": 14,
      "question": "What safety gear must drivers wear?",
      "answer": "Safety boots, reflector vest or XOBO uniform, and food handler certificates where applicable.",
      "category": "partners"
    },

    {
      "id": 15,
      "question": "How do I submit partner application documents?",
      "answer": "Send documents via WhatsApp or call <a href='tel:+254799396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0799 396000</a> or <a href='tel:+254739396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0739 396000</a>. Our team will review and guide you through the next steps.",
      "category": "partners"
    },

    {
      "id": 16,
      "question": "What vehicle documents are required?",
      "answer": "Vehicle photo, registration number, logbook/sales agreement, current insurance, and KRA Pin certificate.",
      "category": "partners"
    },

    {
      "id": 17,
      "question": "How do drivers receive orders?",
      "answer": "Through our driver app. You'll get notifications with pickup and delivery details which you can accept or decline.",
      "category": "partners"
    },

    {
      "id": 18,
      "question": "How are partners paid?",
      "answer": "Weekly through M-Pesa based on completed deliveries, distance, and vehicle type. We offer competitive rates with performance bonuses.",
      "category": "partners"
    },

    {
      "id": 19,
      "question": "What support is provided to partners?",
      "answer": "24/7 technical support, training, vehicle maintenance partnerships, insurance guidance, performance analytics, and dedicated success managers.",
      "category": "partners"
    },

    {
      "id": 20,
      "question": "Can partners work flexible hours?",
      "answer": "Yes! Work when you want and choose your operating areas while maintaining our safety standards.",
      "category": "partners"
    },

    {
      "id": 21,
      "question": "What types of vehicles can partners use?",
      "answer": "Motorbikes, cars, vans, and trucks (3-14 tonne). Each has different earning potential and must meet safety standards.",
      "category": "partners"
    },

    // Existing FAQs (updated)
    {
      "id": 22,
      "question": "Can I choose a specific vehicle type?",
      "answer": "Yes! Select your preferred vehicle type during the ordering process based on your needs.",
      "category": "order"
    },

    {
      "id": 23,
      "question": "Can I track deliveries by vehicle type?",
      "answer": "Yes, our system provides real-time updates including details about the assigned vehicle.",
      "category": "delivery"
    },

    {
      "id": 24,
      "question": "How can I modify or cancel an order?",
      "answer": "Go to 'My Orders' in dashboard settings to modify or cancel orders. Provide a reason for cancellation for our review.",
      "category": "delivery"
    },

    { 
      "id": 25, 
      "question": "How do I submit feedback?", 
      "answer": "After completing, modifying, or canceling an order, you'll be prompted to provide feedback.", 
      "category": "delivery" 
    },

    { 
      "id": 26, 
      "question": "How do I receive order confirmations?", 
      "answer": "A confirmation email with all details is sent to your registered email address upon order completion.", 
      "category": "delivery" 
    },
    
    { 
      "id": 27, 
      "question": "Is my delivery insured?", 
      "answer": "Yes, all goods are insured against damage during transit.", 
      "category": "delivery" 
    },

    { 
      "id": 28, 
      "question": "What vehicles do you use?", 
      "answer": "We have motorbikes, minivans, vans, pickups, and lorries (3-14 tonne) for different package sizes.", 
      "category": "delivery" 
    },
    
    { 
      "id": 29, 
      "question": "What goods do you deliver?", 
      "answer": "Most items except alcoholic beverages and some restricted goods based on legal, safety, or ethical considerations.", 
      "category": "order" 
    },

    {
      "id": 30,
      "question": "How do I make payments?",
      "answer": "Monthly invoicing for corporate and retail clients. Corporate clients get flexible terms. Mobile money and bank transfers accepted. No wallet loading required.",
      "category": "payments"
    },

    {
      "id": 31,
      "question": "Corporate vs. retail services?",
      "answer": "Corporate: Bulk solutions, account management, flexible terms, volume discounts\nRetail: Individual deliveries, standard options, competitive pricing\nBoth include monthly invoicing and insurance.",
      "category": "payments"
    },

    {
      "id": 32,
      "question": "How does monthly invoicing work?",
      "answer": "Deliveries tracked in real-time, month-end detailed invoice with all services, digital invoices via email, multiple payment methods accepted.",
      "category": "payments"
    },

    {
      "id": 33,
      "question": "Do I pay upfront or load a wallet?",
      "answer": "No. Use services throughout the month and receive a consolidated invoice. Pay at month-end with no pre-loading required.",
      "category": "payments"
    },

    {
      "id": 34,
      "question": "How do I set up a corporate account?",
      "answer": "Contact our team at <a href='tel:+254799396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0799 396000</a> or <a href='tel:+254739396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0739 396000</a>, provide company documents and financial information, sign service agreement with agreed terms.",
      "category": "payments"
    },

    {
      "id": 35,
      "question": "How does pricing work?",
      "answer": "Flexible pricing based on mutual agreement. Custom pricing available based on delivery frequency, distances, vehicle types, and service levels.",
      "category": "payments"
    },

    {
      "id": 36,
      "question": "Can I get a custom quote?",
      "answer": "Yes! Contact our team at <a href='tel:+254799396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0799 396000</a> or <a href='tel:+254739396000' style='color: #16234d; font-weight: 600; text-decoration: underline;'>0739 396000</a> for personalized pricing based on your specific delivery needs.",
      "category": "payments"
    },
  ];

  const highlightFeatures = [
    {
      icon: <FaShippingFast />,
      title: "Quick Responses",
      description: "Immediate answers to delivery questions"
    },
    {
      icon: <FaTruck />,
      title: "Delivery Knowledge",
      description: "Complete info about our services"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Always ready to help"
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <div className="faq-icon-wrapper">
              <FaQuestionCircle className="faq-icon" />
            </div>
            <h1>Frequently Asked Questions</h1>
            <p>Find answers about our delivery services and process</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>500+</strong>
                <span>Questions Answered</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Issues Resolved</span>
              </div>
              <div className="stat">
                <strong>&lt;24h</strong>
                <span>Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="faq-stats-section">
        <div className="container">
          <div className="faq-stats-grid">
            <div className="faq-stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Questions Resolved</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{width: "98%"}}></div>
              </div>
            </div>
            <div className="faq-stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Monthly Inquiries</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{width: "85%"}}></div>
              </div>
            </div>
            <div className="faq-stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{width: "100%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="faq-features-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-tag-container">
              <div className="section-tag">WHY OUR FAQ</div>
            </div>
            <h2 className="section-title">Answers You Can Trust</h2>
            <p className="section-subtitle">Accurate and helpful information at your fingertips</p>
          </div>
          <div className="faq-features-grid">
            {highlightFeatures.map((feature, index) => (
              <div className="faq-feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories and Questions */}
      <section className="faq-content-section">
        <div className="container">
          <div className="section-intro">
            <div className="section-tag-container">
              <div className="section-tag">Knowledge Base</div>
            </div>
            <h2 className="section-title">Find Your Answers</h2>
            <p className="section-subtitle">Browse questions by category</p>
          </div>
          <div className="faq-wrapper">
            <FAQPage faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Help Section with Illustration */}
      <section className="help-section">
        <div className="container">
          <div className="help-card">
            <div className="help-content">
              <div className="help-icon">
                <FaRegLightbulb />
              </div>
              <h2>Still have questions?</h2>
              <p>Our support team is ready to help with any questions about our services.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="help-illustration">
              <img 
                src={`${process.env.PUBLIC_URL}/media/help-illustration.svg`} 
                alt="Customer Support"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
