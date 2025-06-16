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
  const [customerSlideIndex, setCustomerSlideIndex] = useState(0);
  const totalCards = 4;
  const totalCustomerLogos = 12;

  useEffect(() => {
    const carousel = document.querySelector('.highlight-carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  // Slide-based auto-scroll for customers with 2-second intervals
  useEffect(() => {
    const customerInterval = setInterval(() => {
      setCustomerSlideIndex((prev) => prev + 1);
    }, 2000); // 2 seconds per slide

    return () => clearInterval(customerInterval);
  }, []);

  // Update customer carousel transform with seamless infinite scroll
  useEffect(() => {
    const customerCarousel = document.querySelector('.customers-carousel');
    if (customerCarousel) {
      const slideWidth = 220; // Logo width including gap
      
      // When we reach the first duplicate logo (position 12), show it normally
      // But immediately after showing it, invisibly reset to position 0 (same logo)
      if (customerSlideIndex === totalCustomerLogos) {
        // Show the duplicate first logo normally
        const translateX = customerSlideIndex * slideWidth;
        customerCarousel.style.transition = 'transform 0.5s ease-in-out';
        customerCarousel.style.transform = `translateX(-${translateX}px)`;
        
        // After the transition completes, invisibly reset to position 0
        setTimeout(() => {
          customerCarousel.style.transition = 'none';
          setCustomerSlideIndex(0);
          customerCarousel.style.transform = 'translateX(0px)';
          
          // Re-enable transitions for next movement
          setTimeout(() => {
            customerCarousel.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      } else {
        // Normal movement for all other positions
        const translateX = customerSlideIndex * slideWidth;
        customerCarousel.style.transition = 'transform 0.5s ease-in-out';
        customerCarousel.style.transform = `translateX(-${translateX}px)`;
      }
    }
  }, [customerSlideIndex, totalCustomerLogos]);

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

  const handleCustomerSlide = (direction) => {
    if (direction === 'next') {
      setCustomerSlideIndex((prev) => prev + 1);
    } else {
      setCustomerSlideIndex((prev) => {
        if (prev <= 0) {
          // Jump to the last logo in the original set
          return totalCustomerLogos - 1;
        }
        return prev - 1;
      });
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
            Quick pick and delivery across Kenya. Connecting businesses with reliable couriers.
          </p>

          <div className="transport-button">
            <a href="https://biz.xobo.co.ke/" target="_blank" rel="noopener noreferrer" className="login-btn">
              Transport Now
            </a>
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
            <h2 className="section-title">Delivery Excellence</h2>
            <p className="section-subtitle">Seamless logistics solutions tailored to your needs</p>
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
                  <p>Swift deliveries across Nairobi within hours</p>
                  <ul className="feature-list">
                    <li>Express pickup</li>
                    <li>Guaranteed delivery</li>
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
                  <p>Real-time updates on delivery status</p>
                  <ul className="feature-list">
                    <li>Live location updates</li>
                    <li>Status notifications</li>
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
                  <p>Perfect vehicle for every delivery need</p>
                  <ul className="feature-list">
                    <li>Motorcycles for speed</li>
                    <li>Vans for medium cargo</li>
                    <li>Trucks for bulk</li>
                  </ul>
                </div>
              </div>

              <div className="highlight-card">
                <div className="card-icon-wrapper">
                  <img src={`${process.env.PUBLIC_URL}/ICONS/Reduce.png`} alt="Cost Effective" className="highlight-icon" />
                </div>
                <div className="card-content">
                  <h3>Competitive Rates</h3>
                  <p>Transparent pricing with no hidden fees</p>
                  <ul className="feature-list">
                    <li>Clear pricing</li>
                    <li>Volume discounts</li>
                    <li>Flexible payments</li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="nav-button next" onClick={() => handleSlide('next')}>
              <FaArrowRight className="arrow-icon" />
            </button>
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
              <h3>15,000+</h3>
              <p>Deliveries</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
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
                src={`${process.env.PUBLIC_URL}/media/XOBO-CUSTOMER.png?v=${Date.now()}`}
                alt="XOBO Client Interface" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)' }}
                onLoad={() => console.log('XOBO-CUSTOMER.png loaded successfully')}
                onError={(e) => console.error('Failed to load XOBO-CUSTOMER.png:', e.target.src)}
              />
            </div>

            <div className="feature-content">
              <span className="section-tag">Business Solutions</span>
              <h2 className="section-title">
                Streamline your orders
              </h2>

              <p className="section-description">
                Our platform automates the entire delivery process, giving you more time to focus on your business.
              </p>
              
              <ul className="feature-list">
                <li>Automated dispatch</li>
                <li>Real-time updates</li>
                <li>Customer notifications</li>
                <li>Delivery confirmations</li>
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
            <h2 className="section-title">Grow with XOBO</h2>
            <p className="section-subtitle">See how our solutions transform your delivery operations</p>
          </div>

          <div className="benefits-container">
            <div className="benefits-list">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaShippingFast />
                </div>
                <div className="benefit-content">
              <h3>Fast & flexible</h3>
                  <p>On-demand, same-day or advance orders. Delivery options tailored to your schedule.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaChartLine />
            </div>
            <div className="benefit-content">
              <h3>Reduce costs</h3>
                  <p>No need to manage your own fleet. Pay only for deliveries you need, cutting costs by up to 30%.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaFileAlt />
            </div>
            <div className="benefit-content">
              <h3>Live tracking</h3>
                  <p>Track orders in real time with accurate ETAs and status updates.</p>
            </div>
          </div>

              <div className="benefit-card">
            <div className="benefit-icon">
                  <FaTruckMoving />
            </div>
            <div className="benefit-content">
              <h3>Multiple vehicles</h3>
              <p>Options for all needs: motorcycles, cars, vans and trucks for any size delivery.</p>
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
            <h2 className="section-title">Delivery Solutions</h2>
            <p className="section-subtitle">Choose the service that fits your needs</p>
          </div>

          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
                <FaBoxOpen />
              </div>
              <h3>Express Delivery</h3>
              <p>Same-day service for urgent packages. Pick up and delivery within hours.</p>
              <Link to="/services/express" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaTruckMoving />
              </div>
              <h3>Scheduled Delivery</h3>
              <p>Plan deliveries in advance. Perfect for regular shipments.</p>
              <Link to="/services/scheduled" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Business Solutions</h3>
              <p>Custom delivery solutions for high volume shipping needs.</p>
              <Link to="/services/business" className="service-link">
                Learn more <FaArrowRight className="arrow-icon-small" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="customers-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Trusted By</span>
            <h2 className="section-title">Our Customers</h2>
            <p className="section-subtitle">We are proud to serve businesses across Kenya with reliable delivery solutions</p>
          </div>

          <div className="customers-carousel-container">
            <button className="customer-nav-button prev" onClick={() => handleCustomerSlide('prev')}>
              <FaArrowRight className="arrow-icon-left" />
            </button>

            <div className="customers-carousel-wrapper">
              <div className="customers-carousel">
                {/* First set of logos */}
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/AAR company.png`} 
                    alt="AAR Healthcare" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/caraandgeneral.png`} 
                    alt="Car and General" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/davis company.png`} 
                    alt="Davis & Shirtliff" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/kenyascouts logo.png`} 
                    alt="Kenya Scouts Association" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/lesaffre company.jpg`} 
                    alt="Lesaffre" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/premierfoods comapny.png`} 
                    alt="Premier Foods" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/safaricom-sacco-ltd-018641f4.PNG`} 
                    alt="Safaricom Sacco" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/shopit company.png`} 
                    alt="Shopit" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/storymohja company.webp`} 
                    alt="Storymoja" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/twiga company.png`} 
                    alt="Twiga Foods" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/urhome company.jpeg`} 
                    alt="UrHome" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/visionplus company.webp`} 
                    alt="Vision Plus" 
                    loading="lazy"
                  />
                </div>

                {/* Duplicate set for seamless infinite loop */}
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/AAR company.png`} 
                    alt="AAR Healthcare" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/caraandgeneral.png`} 
                    alt="Car and General" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/davis company.png`} 
                    alt="Davis & Shirtliff" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/kenyascouts logo.png`} 
                    alt="Kenya Scouts Association" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/lesaffre company.jpg`} 
                    alt="Lesaffre" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/premierfoods comapny.png`} 
                    alt="Premier Foods" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/safaricom-sacco-ltd-018641f4.PNG`} 
                    alt="Safaricom Sacco" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/shopit company.png`} 
                    alt="Shopit" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/storymohja company.webp`} 
                    alt="Storymoja" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/twiga company.png`} 
                    alt="Twiga Foods" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/urhome company.jpeg`} 
                    alt="UrHome" 
                    loading="lazy"
                  />
                </div>
                <div className="customer-logo">
                  <img 
                    src={`${process.env.PUBLIC_URL}/media/visionplus company.webp`} 
                    alt="Vision Plus" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <button className="customer-nav-button next" onClick={() => handleCustomerSlide('next')}>
              <FaArrowRight className="arrow-icon" />
            </button>
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
            <h2>Ready to transform your deliveries?</h2>
            <p>Join hundreds of businesses trusting XOBO</p>
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