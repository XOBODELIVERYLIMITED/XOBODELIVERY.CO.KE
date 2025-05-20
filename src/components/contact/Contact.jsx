import React, { useState, useRef } from "react";
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
  FaShieldAlt, 
  FaStar 
} from 'react-icons/fa';
import "./contact.css";

const Contact = () => {
  const [result, setResult] = useState("Send Message");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  
  // Exact coordinates for XOBO Delivery in Nairobi, Kenya
  // These coordinates match the location provided in the Google Maps link
  const companyLocation = { lat: -1.275245099073922, lng: 36.81672807475073 };

  const validateForm = (formData) => {
    const errors = {};
    let formIsValid = true;

    if (!formData.get("First Name")) {
      errors.firstName = "First name is required";
      formIsValid = false;
    }

    if (!formData.get("Last Name")) {
      errors.lastName = "Last name is required";
      formIsValid = false;
    }

    if (!phone || !phone.match(/^\d{10,12}$/)) {
      errors.phone = "Phone number should be between 10 and 12 digits!";
      formIsValid = false;
    }

    if (!formData.get("email")) {
      errors.email = "Email is required";
      formIsValid = false;
    } else {
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.get("email"))) {
        errors.email = "Please enter a valid email address";
        formIsValid = false;
      }
    }

    if (!formData.get("message")) {
      errors.message = "Message is required";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const selectedOption = document.getElementById("form-selection").value;
    formData.append("Form-Selection", selectedOption);    if (validateForm(formData)) {
      setResult("Sending....");
      const accessKey = "3b3b723b-5b0c-4168-9679-6acc5dfe3940";
      formData.append("access_key", accessKey);
      formData.append("phone", phone);

      // Add CSRF token if available
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (csrfToken) {
        formData.append("csrf_token", csrfToken);
      }

      // Add honeypot field to prevent spam
      formData.append("botcheck", "");

      try {
        // Adding rate limiting
        const now = Date.now();
        const lastSubmitTime = localStorage.getItem('lastFormSubmit');
        
        if (lastSubmitTime && now - parseInt(lastSubmitTime) < 10000) { // 10 seconds
          setResult("Please wait before submitting again");
          return;
        }
        
        localStorage.setItem('lastFormSubmit', now.toString());

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }).then((res) => res.json());

        if (res.success) {
          console.log("Success", res);
          setResult("Message Sent Successfully!");

          setTimeout(() => {
            event.target.reset();
            setPhone("");
            setResult("Send Message");
          }, 3000);
        } else {
          console.log("Error", res);
          setResult(res.message || "An error occurred");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setResult("Failed to send message");
      }
    } else {
      setResult("Please fill in all required fields");
    }
  };

  const contactBenefits = [
    {
      icon: <FaCheck />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Communication",
      description: "Your information is protected with end-to-end encryption"
    }
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      position: "Business Owner",
      quote: "The XOBO team was incredibly responsive to my inquiries. Their support team helped me set up my delivery account quickly!",
      rating: 5
    },
    {
      name: "John Smith",
      position: "Restaurant Manager",
      quote: "I contacted XOBO with questions about their delivery service and received detailed information the same day.",
      rating: 5
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section with Animated Elements */}
      <section className="contact-hero">
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>Have questions or need assistance? We're here to help!</p>
            <div className="contact-hero-buttons">
              <a href="tel:+254799396000" className="hero-button primary">
                <FaPhone className="button-icon" /> Call Us Now
              </a>
              <a href="#contact-form" className="hero-button secondary">
                <FaEnvelope className="button-icon" /> Send Message
              </a>
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
              We're always here to help with any questions or feedback you may have
            </p>
          </div>
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels for assistance or inquiries.</p>
              
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
                
                <div className="contact-method">
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
                  <li><span>Saturday:</span> 9:00 AM - 6:00 PM</li>
                  <li><span>Sunday:</span> 10:00 AM - 4:00 PM</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill up the form below, and we'll get back to you as soon as possible.</p>
              </div>
              
              <form onSubmit={onSubmit}>
                <input type="hidden" name="subject" value="New Message from XOBO Website" />

                <div className="form-group">
                  <label htmlFor="form-selection">How can we help?</label>
                  <select name="Form-Selection" id="form-selection">
                    <option value="Customer Care">Customer Care</option>
                    <option value="Delivery Partner">Delivery Partner</option>
                    <option value="Get a Quote">Get a Quote</option>
                  </select>
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

                <div className="form-group">
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

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Hear from people who have contacted us and received outstanding support</p>
          </div>
          
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              XOBO Delivery is conveniently located in Nairobi, Kenya
            </p>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8172470332807!2d36.81421937363526!3d-1.2752359357850815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170e44a13747%3A0xdc0b4b85b24f27b0!2sXobo%20Delivery%20Limited!5e0!3m2!1sen!2ske!4v1714158394906!5m2!1sen!2ske"
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
            <p>Our office is located at the marker shown on the map</p>
            <a 
              href="https://maps.google.com/maps?ll=-1.275245,36.816728&z=16&t=m&hl=en&gl=KE&mapclient=embed&cid=15865747215889747888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              <FaMapMarkerAlt /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from businesses and individuals who have experienced our services
            </p>
          </div>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-text">
                  "{testimonial.quote}"
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
