import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaUser, 
  FaComments, 
  FaCheck, 
  FaClock, 
  FaShieldAlt
} from 'react-icons/fa';
import { scrollToTop } from '../common/ScrollToTop';
import SecurityUtils from '../../utils/security';
import { API_CONFIG } from '../../config/constants';
import logger from '../../utils/logger';
import "./contact.css";

const Contact = () => {
  const [result, setResult] = useState("Send Message");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  
  // Exact coordinates for XOBO Delivery in Nairobi, Kenya
  // These coordinates match the location provided in the Google Maps link
  // const companyLocation = { lat: -1.2774535356180687, lng: 36.81300297571516 };

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to top when component mounts (additional safety)
  useEffect(() => {
    scrollToTop();
  }, []);

  const validateForm = (formData) => {
    const formObject = {
      firstName: formData.get("First Name"),
      lastName: formData.get("Last Name"),
      email: formData.get("email"),
      phone: phone,
      message: formData.get("message")
    };

    // Check for security threats in inputs
    const inputs = Object.values(formObject);
    const hasThreats = inputs.some(input => SecurityUtils.containsSecurityThreats(input));
    
    if (hasThreats) {
      SecurityUtils.logSecurityEvent('Potential XSS attempt in contact form', formObject);
      setErrors({ general: 'Invalid input detected. Please check your data.' });
      return false;
    }

    // Use security utility for validation
    const validation = SecurityUtils.validateFormData(formObject);
    setErrors(validation.errors);
    return validation.isValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check rate limiting first
    if (SecurityUtils.isRateLimited('formSubmission')) {
      setResult("Please wait before submitting again");
      return;
    }

    const formData = new FormData(event.target);
    const selectedOption = document.getElementById("form-selection").value;
    
    // Check if user has selected an option
    if (!selectedOption || selectedOption === "") {
      setErrors({ ...errors, selection: "Please select how we can help you" });
      setResult("Please correct the errors below");
      return;
    }
    
    formData.append("Form-Selection", selectedOption);

    if (validateForm(formData)) {
      setResult("Sending....");
      
      // Use configuration constants
      formData.append("access_key", API_CONFIG.web3FormsAccessKey);
      formData.append("phone", phone);

      // Add security measures
      formData.append("csrf_token", SecurityUtils.generateCSRFToken());
      formData.append("botcheck", ""); // Honeypot field
      formData.append("timestamp", Date.now().toString());

      try {
        const res = await fetch(API_CONFIG.web3FormsEndpoint, {
          method: "POST",
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then((res) => res.json());

        if (res.success) {
          logger.success("Message sent successfully", res);
          setResult("Message Sent Successfully!");

          // Scroll to top to show success message
          setTimeout(() => {
            scrollToTop('smooth');
          }, 500);

          setTimeout(() => {
            event.target.reset();
            setPhone("");
            setResult("Send Message");
            setErrors({});
            // Reset the dropdown to default
            document.getElementById("form-selection").value = "";
          }, 3000);
        } else {
          logger.error("Message sending failed", res);
          setResult(res.message || "An error occurred");
        }
      } catch (error) {
        logger.error("Submission error:", error);
        setResult("Failed to send message. Please try again.");
        SecurityUtils.logSecurityEvent('Form submission error', { error: error.message });
      }
    } else {
      setResult("Please correct the errors below");
    }
  };

  const contactBenefits = [
    {
      icon: <FaCheck />,
      title: "Quick Response",
      description: "Response within 24 hours"
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Available around the clock"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Communication",
      description: "End-to-end encryption"
    }
  ];



  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>Questions or need help? We're here for you!</p>
            <div className="contact-hero-buttons">
              <a href="tel:+254799396000" className="hero-button primary">
                <FaPhone className="button-icon" /> Call Us
              </a>
              <button 
                onClick={(e) => handleAnchorClick(e, 'contact-form')} 
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleAnchorClick(e, 'contact-form');
                }}
                className="hero-button secondary"
                type="button"
              >
                <FaEnvelope className="button-icon" /> Message
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>24h</strong>
                <span>Response Time</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
              <div className="stat">
                <strong>99%</strong>
                <span>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            {contactBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact-form">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Here to help with questions or feedback
            </p>
          </div>
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info" id="contact-info">
              <h2>Contact Information</h2>
              <p>Reach out through any of these channels</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <a href="tel:+254799396000">+254 799 / 739 396 000</a>
                  </div>
                </div>
                
                <div className="contact-method" id="email-contact">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <a href="mailto:info@xobo.co.ke">info@xobo.co.ke</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <a 
                      href="https://api.whatsapp.com/send?phone=254799396000" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      +254 799 / 739 396 000
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Visit Us</h3>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="operating-hours">
                <h3>Operating Hours</h3>
                <ul>
                  <li><span>Monday - Friday:</span> 8:00 AM - 8:00 PM</li>
                  <li><span>Saturday:</span> 9:00 AM - 1:00 PM</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>We'll get back to you as soon as possible</p>
              </div>
              
              <form onSubmit={onSubmit}>
                <input type="hidden" name="subject" value="New Message from XOBO Website" />

                {errors.general && (
                  <div className="error-message general-error">
                    {errors.general}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="form-selection">How can we help?</label>
                  <select 
                    name="Form-Selection" 
                    id="form-selection" 
                    defaultValue=""
                    style={{ borderColor: errors.selection ? "var(--accent-color)" : "" }}
                    onChange={() => {
                      if (errors.selection) {
                        setErrors({ ...errors, selection: null });
                      }
                    }}
                  >
                    <option value="" disabled>-Select-</option>
                    <option value="Customer Care">Customer Care</option>
                    <option value="Delivery Partner">Delivery Partner</option>
                    <option value="Get a Quote">Get a Quote</option>
                  </select>
                  {errors.selection && (
                    <p className="error-message">{errors.selection}</p>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <FaUser className="input-icon" /> First Name
                    </label>
                    <input
                      id="firstName"
                      placeholder="First Name"
                      type="text"
                      name="First Name"
                      style={{ borderColor: errors.firstName ? "var(--accent-color)" : "" }}
                    />
                    {errors.firstName && (
                      <p className="error-message">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      <FaUser className="input-icon" /> Last Name
                    </label>
                    <input
                      id="lastName"
                      placeholder="Last Name"
                      type="text"
                      name="Last Name"
                      style={{ borderColor: errors.lastName ? "var(--accent-color)" : "" }}
                    />
                    {errors.lastName && (
                      <p className="error-message">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    <FaPhone className="input-icon" /> Phone Number
                  </label>
                  <PhoneInput
                    className="phone-input"
                    country={"ke"}
                    id="phoneNumber"
                    onlyCountries={["ke"]}
                    placeholder="+254 712 345 678"
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{
                      borderColor: errors.phone ? "var(--accent-color)" : "",
                      width: "100%",
                      height: "48px",
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent",
                    }}
                    required
                  />
                  {errors.phone && (
                    <p className="error-message">{errors.phone}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="input-icon" /> Email
                  </label>
                  <input
                    id="email"
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    style={{ borderColor: errors.email ? "var(--accent-color)" : "" }}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>

                <div className="form-group message-group">
                  <label htmlFor="message">
                    <FaComments className="input-icon" /> Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message here..."
                    name="message"
                    rows="5"
                    style={{ borderColor: errors.message ? "var(--accent-color)" : "" }}
                  ></textarea>
                  {errors.message && (
                    <p className="error-message">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="submit-button">{result}</button>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">LOCATION</span>
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle">
              Located in Nairobi, Kenya
            </p>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4762.7006173560185!2d36.81300297571516!3d-1.2774535356180687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17c6027f0003%3A0xe2f13d478848ccc1!2sXobo%20Delivery%20Limited!5e1!3m2!1sen!2ske!4v1750083195590!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XOBO Delivery Office Location"
            ></iframe>
          </div>
          
          <div className="location-info">
            <p>Our office is at the marker shown on the map</p>
            <a 
              href="https://www.google.com/maps/place/Xobo+Delivery+Limited/@-1.2774535,36.8130030,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17c6027f0003:0xe2f13d478848ccc1!8m2!3d-1.2774535!4d36.8155779!16s%2Fg%2F11qr9w8_6x?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              <FaMapMarkerAlt /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for all your delivery needs</p>
            <div className="cta-buttons">
              <a href="tel:+254799396000" className="cta-primary">
                <FaPhone className="button-icon" /> Call Now
              </a>
              <button 
                onClick={(e) => handleAnchorClick(e, 'contact-form')} 
                className="cta-secondary"
              >
                <FaEnvelope className="button-icon" /> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
