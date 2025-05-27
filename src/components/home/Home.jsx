import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaFileAlt, 
  FaChartLine, 
  FaTruckMoving, 
  FaSearch, 
  FaBoxOpen, 
  FaShippingFast,
  FaBuilding,
  FaStar
} from 'react-icons/fa';

import "./home.css";
  
function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [packageType, setPackageType] = useState('standard');
  const [weight, setWeight] = useState(1);
  const [distance, setDistance] = useState(5);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 4;

  useEffect(() => {
    const carousel = document.querySelector('.highlight-carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    // Tracking logic would go here
    alert(`Tracking number ${trackingNumber} submitted!`);
  };

  const calculateEstimate = () => {
    // Basic calculation example
    const baseRate = packageType === 'standard' ? 200 : packageType === 'express' ? 350 : 500;
    const weightCost = weight * 50;
    const distanceCost = distance * 20;
    const total = baseRate + weightCost + distanceCost;
    setEstimatedCost(total);
  };

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    } else {
      setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    }
  };
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Simple <span className="accent-dot">·</span> Fast <span className="accent-dot">·</span> Reliable
            </h1>

          <h2 className="hero-subtitle">
            On-demand delivery platform
          </h2>

          <p className="hero-description">
            XOBO Delivery Limited offers immediate pick and delivery services across Kenya. 
            We connect businesses with reliable couriers for fast, secure deliveries.
          </p>

          <div className="hero-cta">
            <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">
                Transport Now
            </button>
          </a>
            <Link to="/services" className="secondary-link">
              Explore Services <FaArrowRight className="arrow-icon-small" />
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <div className="video-container">
        <iframe
              loading="lazy"
            src="https://www.youtube.com/embed/Oe0Tme-yRBU?si=1Y6TpTYw71Lano8J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </section>

      {/* Service Highlights Section */}
      <section className="service-highlights">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose XOBO</span>
            <h2 className="section-title">Redefining Delivery Excellence</h2>
            <p className="section-subtitle">Experience seamless logistics solutions tailored to your needs</p>
          </div>
          
          <div className="carousel-container">
            <button className="nav-button prev" onClick={() => handleSlide('prev')}>
              <FaArrowRight className="arrow-icon-left" />
            </button>

            <div className="highlight-carousel">
              <div className="highlight-card">
                <div className="card-icon-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/ICONS/Fast.png`} alt="Fast Delivery" className="highlight-icon" />
                </div>
                <div className="card-content">
                  <h3>Same Day Delivery</h3>
                  <p>Swift and reliable deliveries across Nairobi, ensuring your packages reach their destination within hours</p>
                  <ul className="feature-list">
                    <li>Express pickup service</li>
                    <li>Guaranteed delivery times</li>
                    <li>Priority handling</li>
                  </ul>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="card-icon-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/ICONS/Track.png`} alt="Real-time Tracking" className="highlight-icon" />
                </div>
                <div className="card-content">
                  <h3>Live GPS Tracking</h3>
                  <p>Stay informed with real-time updates on your delivery status and location</p>
                  <ul className="feature-list">
                    <li>Real-time location updates</li>
                    <li>Delivery status notifications</li>
                    <li>Accurate ETAs</li>
                  </ul>
                </div>
              </div>

              <div className="highlight-card">
                <div className="card-icon-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/ICONS/Vehicles.png`} alt="Vehicle Options" className="highlight-icon" />
                </div>
                <div className="card-content">
                  <h3>Multiple Vehicle Types</h3>
                  <p>From small parcels to large cargo, we have the perfect vehicle for your delivery needs</p>
                  <ul className="feature-list">
                    <li>Motorcycles for quick deliveries</li>
                    <li>Vans for medium cargo</li>
                    <li>Trucks for bulk shipments</li>
                  </ul>
                </div>
              </div>

              <div className="highlight-card">
                <div className="card-icon-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/ICONS/Reduce.png`} alt="Cost Effective" className="highlight-icon" />
                </div>
                <div className="card-content">
                  <h3>Competitive Rates</h3>
                  <p>Transparent pricing with no hidden fees, optimized for cost-effectiveness</p>
                  <ul className="feature-list">
                    <li>Clear pricing structure</li>
                    <li>Volume discounts</li>
                    <li>Flexible payment options</li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="nav-button next" onClick={() => handleSlide('next')}>
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>

          <div className="carousel-dots">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`dot ${activeIndex === dot ? 'active' : ''}`}
                onClick={() => setActiveIndex(dot)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Active Riders</p>
            </div>
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Deliveries</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Business Clients</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>On-time Deliveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="feature-container">
            <div className="feature-image">
              <img 
                loading="lazy"
                src={process.env.PUBLIC_URL + '/media/XDL-CLIENT.png'} 
                alt="XOBO Client Interface" 
              />
            </div>

            <div className="feature-content">
              <span className="section-tag">Business Solutions</span>
              <h2 className="section-title">
                Seamlessly streamline your orders
              </h2>

              <p className="section-description">
                Wave goodbye to long customer and driver chats. Our platform automates the entire delivery process, from order placement to delivery confirmation, giving you more time to focus on growing your business.
              </p>
              
              <ul className="feature-list">
                <li><span className="check-icon">✓</span> Automated dispatch system</li>
                <li><span className="check-icon">✓</span> Real-time delivery updates</li>
                <li><span className="check-icon">✓</span> Customer notification system</li>
                <li><span className="check-icon">✓</span> Proof of delivery confirmations</li>
              </ul>
              
              <Link to="/services" className="feature-link">
                <span>Learn more</span>
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Advantages</span>
            <h2 className="section-title">Grow your business with XOBO</h2>
            <p className="section-subtitle">Partner with us and experience how our logistics solutions can transform your delivery operations</p>
          </div>

          <div className="benefits-container">
            <div className="benefits-list">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaShippingFast />
                </div>
                <div className="benefit-content">
              <h3>Fast & flexible delivery</h3>
                  <p>On-demand, same-day or advance orders. We're ready when you are and promise a fast service with delivery options tailored to your schedule.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaChartLine />
            </div>
            <div className="benefit-content">
              <h3>Reduce operational costs</h3>
                  <p>No need to manage your own delivery fleet. Outsource and simply pay for the deliveries you need, cutting overhead costs by up to 30%.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaFileAlt />
            </div>
            <div className="benefit-content">
              <h3>Real-time tracking</h3>
                  <p>In-app tracking allows you and the receiver to track your order in real time during the delivery, with accurate ETAs and status updates.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaTruckMoving />
            </div>
            <div className="benefit-content">
              <h3>Vast array of vehicles</h3>
              <p>Different vehicles to suit any kind of business including trucks, vans, motorcycles and runners for deliveries of anything of any size.</p>
            </div>
          </div>       
      </div>

            <div className="benefits-image">
        <img 
                loading="lazy"
                src={process.env.PUBLIC_URL + '/media/XDL-DELIVERED.png'} 
                alt="XOBO Delivery" 
        />
      </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Delivery Solutions</h2>
            <p className="section-subtitle">Choose the service that best fits your business needs</p>
          </div>

          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
                <FaBoxOpen />
              </div>
              <h3>Express Delivery</h3>
              <p>Same-day delivery service for urgent packages. We pick up and deliver within hours.</p>              <Link to="/services/express" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaTruckMoving />
              </div>
              <h3>Scheduled Delivery</h3>
              <p>Plan your deliveries in advance with our scheduled service. Perfect for regular shipments.</p>
              <Link to="/services/scheduled" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>              <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Business Solutions</h3>
              <p>Customized delivery solutions for businesses with high volume shipping needs.</p>
              <Link to="/services/business" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Client Feedback</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "XOBO has transformed our delivery process. Their reliable service and real-time tracking have improved our customer satisfaction significantly."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">DK</div>
                <div className="testimonial-info">
                  <h4>David Kimani</h4>
                  <p>E-commerce Manager, Nairobi Retail</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "We've been able to cut our delivery costs by 25% while improving delivery times. XOBO provides excellent value and consistent quality."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SW</div>
                <div className="testimonial-info">
                  <h4>Sarah Wanjiru</h4>
                  <p>Operations Director, Mombasa Foods</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "The flexibility of XOBO's service options makes them our go-to delivery partner. Their customer service is exceptional and always responsive."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JO</div>
                <div className="testimonial-info">
                  <h4>James Omondi</h4>
                  <p>CEO, Kisumu Pharmacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <h2>Ready to transform your delivery operations?</h2>
            <p>Join hundreds of businesses that trust XOBO for their delivery needs</p>
            <div className="cta-buttons">
              <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Get Started
              </a>
              <Link to="/contact" className="cta-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  
export default Home;