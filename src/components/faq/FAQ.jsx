// FAQ.jsx
import React from 'react';
import FAQPage from './FAQPage';
import { FaQuestionCircle, FaShippingFast, FaTruck, FaHeadset, FaRegLightbulb } from 'react-icons/fa';
import './faq.css'; 

const FAQ = () => {
  const faqs = [
    // Client System FAQs (biz.xobo.co.ke)
    {
      "id": 1,
      "question": "How do I create an account on biz.xobo.co.ke?",
      "answer": "Creating an account is simple! Navigate to https://biz.xobo.co.ke/login and click on 'Do not have an account'. Fill in your signup details including your name, email, phone number, and create a secure password. Once you've completed the signup form, you can proceed to login using your email and password.",
      "category": "account"
    },

    {
      "id": 2,
      "question": "What happens after I create my account?",
      "answer": "After successful login, you'll be directed to your personalized landing page dashboard. This is your control center where you can manage all your delivery orders, view your order history, track ongoing deliveries, and access all platform features.",
      "category": "account"
    },

    {
      "id": 3,
      "question": "How do I place an order on the new system?",
      "answer": "Placing an order is straightforward:\n1. From your dashboard, enter your pickup location in the designated field.\n2. Enter your drop-off location.\n3. If you need multiple destinations, use the 'Add Destination' feature to include additional locations.\n4. Review your order details and confirm. The system will calculate pricing based on your agreed rates and selected vehicle type.\nNote: XOBO offers flexible pricing based on negotiable agreements tailored to each client's specific needs and delivery requirements.",
      "category": "order"
    },

    {
      "id": 4,
      "question": "Can I add multiple destinations to a single order?",
      "answer": "Yes! Our new system supports multiple destinations. After entering your initial pickup and drop-off locations, you can use the 'Add Destination' feature to include additional stops. This is perfect for businesses that need to deliver to multiple locations or individuals with several errands.",
      "category": "order"
    },

    {
      "id": 5,
      "question": "How do I manage my profile and account settings?",
      "answer": "You can manage your profile by accessing the settings section from your dashboard. Here you can update your personal information, change your password, manage payment methods, view your delivery history, and adjust notification preferences.",
      "category": "account"
    },

    {
      "id": 6,
      "question": "What information do I need to provide when placing an order?",
      "answer": "When placing an order, you'll need to provide: pickup location, drop-off location(s), package details (size, weight, type), receiver information (name and phone number), any special delivery instructions, and your preferred delivery time (instant or scheduled).",
      "category": "order"
    },

    {
      "id": 7,
      "question": "Can I schedule deliveries for later?",
      "answer": "Absolutely! Our system allows you to choose between instant delivery or schedule your delivery for a specific date and time that's convenient for you. This feature is perfect for planning ahead or ensuring deliveries arrive at optimal times.",
      "category": "order"
    },

    {
      "id": 8,
      "question": "How do I track my orders?",
      "answer": "Once your order is confirmed, you can track it in real-time through your dashboard. You'll see the driver's location, estimated arrival time, and delivery status updates. You'll also receive notifications via SMS and email at key delivery milestones.",
      "category": "delivery"
    },

    // Partners FAQs
    {
      "id": 9,
      "question": "How can I become a delivery partner with XOBO?",
      "answer": "To become a delivery partner, you can apply as either an individual driver or a company/fleet owner. Contact us at 0799 396000 or 0739 396000 with your required documents. We'll help you through the onboarding process, verify your documents, and ensure a smooth collaboration. Once approved, you'll attend our brief orientation session to get started.",
      "category": "partners"
    },

    {
      "id": 10,
      "question": "What documents do I need as an individual driver?",
      "answer": "For individual driver accounts, you need:\nPersonal Details:\n1. Full names\n2. Profile photo\n3. Registered M-Pesa phone number\n4. Valid email address\n5. Identification document (ID)\n6. Driving license\nVehicle Details:\n1. Vehicle photo (full photo)\n2. Vehicle registration number (number plate)\n3. Logbook photo/sales agreement\n4. Insurance photo\n5. KRA Pin certificate",
      "category": "partners"
    },

    {
      "id": 11,
      "question": "What documents do companies/fleet owners need to provide?",
      "answer": "For company/fleet owner accounts, you need:\nContact Person Details:\n1. Contact person's full names\n2. Profile photo\n3. Registered M-Pesa phone number\n4. Driving license\n5. Identification document (ID)\nCompany Details:\n1. Company names\n2. Company email address\n3. Certificate of incorporation\n4. CR12\n5. Company KRA Pin certificate\nVehicle Details: Same as individual drivers for each vehicle",
      "category": "partners"
    },

    {
      "id": 12,
      "question": "What are the vehicle safety requirements for partners?",
      "answer": "All partner vehicles must have the following safety equipment:\n1. Fire extinguisher\n2. First aid kit\n3. Reverse beep system\n4. Wheel choke\n5. XOBO sticker on the windscreen\nAdditionally, vehicles must always be clean before and during loading to maintain professionalism and safety standards.",
      "category": "partners"
    },

    {
      "id": 13,
      "question": "What safety gear must drivers wear while on duty?",
      "answer": "Drivers must always wear appropriate safety gear while on duty, including:\n1. Safety boots\n2. Reflector vest, or branded XOBO overall/dustcoat\n3. Food handlers certificates (where necessary for food deliveries)\nThis ensures health and safety compliance at all times.",
      "category": "partners"
    },

    {
      "id": 14,
      "question": "How do I submit my partner application documents?",
      "answer": "Send all required documents to our partner onboarding team via WhatsApp or call at: 0799 396000 or 0739 396000. Our team will review your documents, verify them, and guide you through the next steps of the onboarding process to ensure efficient partnership setup.",
      "category": "partners"
    },

    {
      "id": 15,
      "question": "What vehicle documents are required for all partners?",
      "answer": "All partners (individual and company) must provide:\n1. Vehicle photo (full photo showing the entire vehicle)\n2. Vehicle registration number (number plate)\n3. Logbook photo or sales agreement\n4. Current insurance photo\n5. KRA Pin certificate\nThese documents are essential for verification and compliance.",
      "category": "partners"
    },

    {
      "id": 16,
      "question": "How do partner drivers receive and accept orders?",
      "answer": "Partners receive order notifications through our driver app. When an order matches your location and vehicle type, you'll get an instant notification with pickup and delivery details. You can accept or decline orders based on your availability and preferences.",
      "category": "partners"
    },

    {
      "id": 17,
      "question": "How are partner drivers paid?",
      "answer": "Partners are paid weekly through mobile money (M-Pesa) using the registered M-Pesa phone number provided during onboarding. Earnings are calculated based on completed deliveries, distance covered, and vehicle type. We offer competitive rates with bonuses for high-performing drivers and peak-time deliveries.",
      "category": "partners"
    },

    {
      "id": 18,
      "question": "What support is provided to partner drivers?",
      "answer": "We provide comprehensive support including:\n1. 24/7 technical support\n2. Driver training programs\n3. Vehicle maintenance partnerships\n4. Insurance guidance\n5. Performance analytics\n6. Safety equipment guidance\n7. Dedicated partner success managers\nAll designed to help you maximize your earnings and maintain compliance.",
      "category": "partners"
    },

    {
      "id": 19,
      "question": "Can partners work flexible hours?",
      "answer": "Yes! One of the key benefits of being a XOBO partner is complete flexibility. You can work when you want, choose your operating areas, and take breaks as needed. Whether you want to work part-time or full-time, the choice is yours, as long as you maintain our safety and professionalism standards.",
      "category": "partners"
    },

    {
      "id": 20,
      "question": "What types of vehicles can partners use?",
      "answer": "We accept various vehicle types to match different delivery needs:\n1. Motorbikes for quick urban deliveries\n2. Cars and vans for medium packages\n3. Trucks (3-tonne to 14-tonne) for large freight\nEach vehicle type has different earning potentials and delivery requirements, and all must meet our safety equipment standards.",
      "category": "partners"
    },

    // Existing FAQs (updated)
    {
      "id": 21,
      "question": "Can I choose a specific type of vehicle for my delivery?",
      "answer": "Certainly! Our platform allows you to select the type of vehicle you prefer for your delivery. After entering the pickup and drop-off locations, you'll have the option to choose from a range of vehicle types based on your needs. Whether you require a motorbike for quick deliveries or a larger vehicle for bulk shipments, simply select your preferred vehicle type during the ordering process.",
      "category": "order"
    },

    {
      "id": 22,
      "question": "Can I track the status of my delivery based on the vehicle type?",
      "answer": "Yes, our advanced tracking system provides real-time updates on the status and location of your delivery, including details about the vehicle assigned to your shipment. Whether it's a motorbike zipping through city streets or a heavy-duty lorry navigating highways, you can monitor the progress of your delivery every step of the way.",
      "category": "delivery"
    },

    {
      "id": 23,
      "question": "How can I modify or cancel an order?",
      "answer": "After placing an order, you can manage it through the 'My Orders' section in your dashboard settings. Here, you can modify or cancel ongoing orders, and you'll be prompted to provide a reason for cancellation. Your feedback will be received by our representatives and appropriate action will be taken.",
      "category": "delivery"
    },

    { 
      "id": 24, 
      "question": 'How do I submit ride feedback?', 
      "answer": 'Upon completing, modifying, or canceling an order, our platform will prompt you to provide feedback. Your feedback is valuable to us and will be reviewed by our representatives for further action and service improvement.', 
      "category": 'delivery' 
    },

    { 
      "id": 25, 
      "question": 'How can I receive confirmation receipts for my order?', 
      "answer": 'Upon successfully completing an order, a confirmation email will be sent directly to the email address registered on our platform. This email will contain details of the locations, package information, delivery timeline, and the total cost.', 
      "category": 'delivery' 
    },
    
    { 
      "id": 26, 
      "question": 'Is my delivery insured in case of anything?', 
      "answer": 'Rest assured, all goods delivered through XOBO are insured, providing coverage in case of any damages during transit. Our comprehensive insurance policy protects both customers and partners.', 
      "category": 'delivery' 
    },

    { 
      "id": 27, 
      "question": 'What types of vehicles do you use for delivery?', 
      "answer": 'We utilize a diverse fleet of vehicles to cater to a wide range of delivery needs. Our fleet includes motorbikes, minivans, vans, pickups, 3-tonne lorries, 5-tonne lorries, 7-tonne lorries, 10-tonne lorries, and 14-tonne lorries. Each vehicle type is suited for different package sizes and delivery requirements.', 
      "category": 'delivery' 
    },
    
    { 
      "id": 28, 
      "question": 'What types of goods do you deliver?', 
      "answer": 'From everyday essentials to specialty items, we deliver a diverse range of goods to cater to all your needs. With exemption to alcoholic beverages, we may have restrictions on the delivery of certain other items based on legal, safety, or ethical considerations. Our goal is to ensure the integrity of our delivery services while upholding the highest standards of customer satisfaction and regulatory compliance.', 
      "category": 'order' 
    },

    {
      "id": 29,
      "question": "How can I make payments?",
      "answer": "XOBO operates on a convenient monthly invoicing system for both corporate and retail clients:\n1. Corporate Clients: Receive detailed monthly invoices for all deliveries with flexible payment terms.\n2. Retail Clients: Monthly consolidated billing for all your delivery services.\n3. Pay on delivery option available for specific arrangements.\n4. Mobile money payments (M-Pesa, Airtel Money) for immediate settlements.\n5. Bank transfers and other corporate payment methods accepted.\nNo wallet loading required - we handle all billing through our streamlined monthly invoicing process.",
      "category": "payments"
    },

    {
      "id": 30,
      "question": "What is the difference between corporate and retail delivery services?",
      "answer": "XOBO serves both corporate and retail clients with tailored solutions:\nCorporate Services:\n• Bulk delivery solutions for businesses\n• Dedicated account management\n• Flexible payment terms and credit facilities\n• Volume-based pricing discounts\n• Priority support and custom logistics solutions\nRetail Services:\n• Individual and small business deliveries\n• Standard delivery options\n• Competitive retail pricing\n• Easy online booking and tracking\nBoth services include monthly invoicing, comprehensive insurance, and our full fleet of vehicles.",
      "category": "payments"
    },

    {
      "id": 31,
      "question": "How does the monthly invoicing system work?",
      "answer": "Our monthly invoicing system is designed for convenience and transparency:\n1. All deliveries are tracked and recorded in real-time throughout the month.\n2. At month-end, you receive a detailed invoice showing all delivery services used.\n3. Invoices include pickup/drop-off details, vehicle types, distances, and costs.\n4. Corporate clients receive invoices with flexible payment terms (typically 30 days).\n5. Retail clients receive consolidated monthly statements.\n6. Digital invoices are sent via email with optional hard copies available.\n7. Multiple payment methods accepted for settling monthly invoices.",
      "category": "payments"
    },

    {
      "id": 32,
      "question": "Do I need to pay upfront or load money into a wallet?",
      "answer": "No upfront payments or wallet loading required! XOBO operates on a post-service billing model:\n• Use our delivery services throughout the month\n• Receive a consolidated monthly invoice\n• Pay conveniently at month-end\n• No need to estimate usage or pre-load funds\n• Credit facilities available for qualified corporate clients\nThis system provides better cash flow management and eliminates the hassle of constantly topping up wallets or making advance payments.",
      "category": "payments"
    },

    {
      "id": 33,
      "question": "How do I set up a corporate account with credit facilities?",
      "answer": "Setting up a corporate account with XOBO is straightforward:\n1. Contact our corporate sales team at 0799 396000 or 0739 396000.\n2. Provide your company registration documents and KRA PIN certificate.\n3. Submit your company's financial information for credit assessment.\n4. Our team will evaluate and approve appropriate credit limits.\n5. Sign the corporate service agreement with agreed payment terms.\n6. Start using our services immediately with monthly billing.\nCorporate accounts enjoy volume discounts, dedicated support, priority service, and flexible payment terms of up to 30 days.",
      "category": "payments"
    },

    {
      "id": 34,
      "question": "How does XOBO's pricing work?",
      "answer": "XOBO offers flexible pricing tailored to meet diverse client needs:\n• Our prices are negotiable based on mutual understanding and agreement\n• Different clients have customized pricing modules depending on their specific requirements\n• Volume-based discounts available for high-frequency users\n• Corporate clients enjoy preferential rates based on delivery volumes and contract terms\n• Retail clients receive competitive standard rates with potential for negotiation\n• Pricing factors include: delivery frequency, distances, vehicle types, and service levels\n• Special rates for long-term partnerships and bulk service agreements\nContact our sales team at 0799 396000 or 0739 396000 to discuss a pricing structure that works best for your specific delivery needs.",
      "category": "payments"
    },

    {
      "id": 35,
      "question": "Can I get a custom quote for my delivery needs?",
      "answer": "Absolutely! XOBO specializes in creating customized pricing solutions:\n• Every client's delivery needs are unique, and our pricing reflects that\n• We work with you to understand your specific requirements and volume expectations\n• Custom pricing modules are developed based on factors like delivery frequency, routes, vehicle preferences, and service levels\n• Both one-time projects and ongoing delivery partnerships can be quoted individually\n• Our sales team will assess your needs and propose a pricing structure that offers the best value\n• Flexible terms and conditions can be negotiated to suit your business model\nReach out to our team at 0799 396000 or 0739 396000 for a personalized quote discussion.",
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
