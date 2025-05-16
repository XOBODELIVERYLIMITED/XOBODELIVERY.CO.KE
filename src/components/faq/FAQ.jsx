// FAQ.jsx
import React from 'react';
import FAQPage from './FAQPage';
import { FaQuestionCircle, FaShippingFast, FaTruck, FaHeadset, FaRegLightbulb } from 'react-icons/fa';
import './faq.css'; 

const FAQ = () => {
  const faqs = [
    {
      "id": 1,
      "question": "How to place an order?",
      "answer": "You can easily place orders through our app available on the Play Store, App Store, or our web app in just three simple steps. First, create an account, whether it's personal or for your business (Step 1). Then, enter your pick-up location and drop location(s). You can even add extra drop locations if needed. Next, you have the option to choose instant delivery or schedule it for a later date and time at your convenience (Step 2). Finally, provide details such as package/cargo information, receiver details, and any additional notes (Step 3). Review the ride amount for the entire delivery and confirm your order.",
      "category": "order"
    },

    {
      "id": 2,
      "question": "Can I choose a specific type of vehicle for my delivery?",
      "answer": "Certainly! We've made it convenient for you to select the type of vehicle you prefer for your delivery right within our app. After inserting the pick-up and drop-off locations, you'll have the option to choose from a range of vehicle types based on your needs. Whether you require a motorbike for quick deliveries or a larger vehicle for bulk shipments, simply select your preferred vehicle type during the ordering process, and we'll ensure your delivery is handled accordingly.",
      "category": "order"
    },

      {
      "id": 3,
      "question": "Can I track the status of my delivery based on the vehicle type?",
      "answer": "Yes, our advanced tracking system provides real-time updates on the status and location of your delivery, including details about the vehicle assigned to your shipment. Whether it's a motorbike zipping through city streets or a heavy-duty lorry navigating highways, you can monitor the progress of your delivery every step of the way.",
      "category": "delivery"
    },

    {
      "id": 4,
      "question": "How can I Modify or cancel order?",
      "answer": "After placing an order, you can manage it through the \"My Orders\" section in your settings. Here, you can modify or cancel ongoing orders, and you'll be prompted to provide a reason for cancellation. Your feedback will be received by our representatives and appropriate action will be taken.",
      "category": "delivery"
    },

    { 
      "id": 5, 
      "question": 'How do I Submit Ride Feedback', 
      "answer": 'Upon completing, modifying, or canceling an order, our app will prompt you to provide feedback. Your feedback is valuable to us and will be reviewed by our representatives for further action.', 
      "category": 'delivery' 
    },

    { 
      "id": 6, 
      "question": 'How can I receive confirmation receipts for my order?', 
      "answer": 'Upon successfully completing an order, a confirmation email will be sent directly to the email address registered on our platform. This email will contain details of the locations inputted on the platform, the information provided, and the ride amount.', 
      "category": 'delivery' 
    },
    
    { 
      "id": 7, 
      "question": 'Is my Ride insured in case of anything?', 
      "answer": 'Rest assured, all goods delivered through XOBO are insured, providing coverage in case of any damages during transit.', 
      "category": 'delivery' 
    },

    { 
      "id": 8, 
      "question": 'What types of vehicles do you use for delivery?', 
      "answer": 'We utilize a diverse fleet of vehicles to cater to a wide range of delivery needs. Whether it\'s small parcels or large freight, we have the right vehicle for the job. Our fleet includes motorbikes, minivans, vans, pickups, 3-tonne lorries, 5-tonne lorries, 7-tonne lorries, 10-tonne lorries, and 14-tonne lorries. ', 
      "category": 'delivery' 
    },
    
    { 
      "id": 9, 
      "question": 'What types of goods do you deliver?', 
      "answer": 'From everyday essentials to specialty items, we deliver a diverse range of goods to cater to all your needs. With exemption to alcoholic beverages, we may have restrictions on the delivery of certain other items based on legal, safety, or ethical considerations. Our goal is to ensure the integrity of our delivery services while upholding the highest standards of customer satisfaction and regulatory compliance.', 
      "category": 'order' 
    },

    {
      "id": 10,
      "question": "How can I make payments?",
      "answer": "You have multiple options for making payments. Firstly, you can load your virtual wallet by navigating to Settings -> Wallet in the app. Here, you can input your phone number (preferably Mpesa number) and specify the amount you want to add to your wallet. Once confirmed, the specified amount will be deducted directly from your account and credited to your wallet. Alternatively, you can opt for payment on delivery, allowing you to pay when you receive the delivery.",
      "category": "payments"
    },
  ];

  const highlightFeatures = [
    {
      icon: <FaShippingFast />,
      title: "Quick Responses",
      description: "Get immediate answers to your delivery questions"
    },
    {
      icon: <FaTruck />,
      title: "Delivery Knowledge",
      description: "Comprehensive information about our delivery services"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Our support team is always ready to help"
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section with Animation */}
      <section className="faq-hero">
        <div className="animated-bg">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <div className="container">
          <div className="faq-hero-content">
            <div className="faq-icon-wrapper">
              <FaQuestionCircle className="faq-icon" />
            </div>
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our delivery services, order process, and more</p>
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
            <span className="section-tag">Why Our FAQ</span>
            <h2 className="section-title">Answers You Can Trust</h2>
            <p className="section-subtitle">Our comprehensive FAQ section is designed to provide you with accurate and helpful information</p>
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
            <span className="section-tag">Knowledge Base</span>
            <h2 className="section-title">Find Your Answers</h2>
            <p className="section-subtitle">Browse through our most frequently asked questions by category</p>
          </div>
          <div className="faq-wrapper">
            <FAQPage faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Help Section with Illustration */}
      <section className="help-section">
        <div className="container">
          <div className="help-grid">
            <div className="help-content">
              <div className="help-icon">
                <FaRegLightbulb />
              </div>
              <h2>Still have questions?</h2>
              <p>Our customer support team is ready to help you with any questions you might have about our services.</p>
              <div className="cta-buttons">
                <a href="tel:+254799396000" className="cta-primary">Call Us</a>
                <a href="/contact" className="cta-secondary">Contact Us</a>
              </div>
            </div>
            <div className="help-illustration">
              <img 
                src={`${process.env.PUBLIC_URL}/media/help-illustration.svg`} 
                alt="Customer Support"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
