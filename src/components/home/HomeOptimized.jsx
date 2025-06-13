import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaShippingFast, 
  FaTruckMoving, 
  FaBuilding,
  FaBoxOpen,
  FaStar
} from 'react-icons/fa';
import { Button, Card, Section } from '../ui';
import { EXTERNAL_URLS, COMPANY_STATS, SERVICES } from '../../config/constants';
import './home-optimized.css';

const Home = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [customerSlideIndex, setCustomerSlideIndex] = useState(0);

  // Auto-scroll for service highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for customer logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerSlideIndex(prev => (prev + 1) % 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const serviceHighlights = [
    {
      icon: 'fast',
      title: 'Same Day Delivery',
      description: 'Swift and reliable deliveries across Nairobi, ensuring your packages reach their destination within hours',
      features: ['Express pickup service', 'Guaranteed delivery times', 'Priority handling']
    },
    {
      icon: 'track',
      title: 'Live GPS Tracking',
      description: 'Stay informed with real-time updates on your delivery status and location',
      features: ['Real-time location updates', 'Delivery status notifications', 'Accurate ETAs']
    },
    {
      icon: 'vehicles',
      title: 'Multiple Vehicle Types',
      description: 'From small parcels to large cargo, we have the perfect vehicle for your delivery needs',
      features: ['Motorcycles for quick deliveries', 'Vans for medium cargo', 'Trucks for bulk shipments']
    },
    {
      icon: 'reduce',
      title: 'Competitive Rates',
      description: 'Transparent pricing with no hidden fees, optimized for cost-effectiveness',
      features: ['Clear pricing structure', 'Volume discounts', 'Flexible payment options']
    }
  ];

  const customerLogos = [
    'AAR company.png',
    'caraandgeneral.png',
    'davis company.png',
    'kenyascouts logo.png',
    'lesaffre company.jpg',
    'premierfoods comapny.png',
    'safaricom-sacco-ltd-018641f4.PNG',
    'shopit company.png',
    'storymohja company.webp',
    'twiga company.png',
    'urhome company.jpeg',
    'visionplus company.webp'
  ];

  return (
    <div className="home-optimized">
      {/* Hero Section */}
      <Section className="hero-section bg-light">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Simple <span className="text-accent">·</span> Fast <span className="text-accent">·</span> Reliable
            </h1>
            <h2 className="hero-subtitle">On-demand delivery platform</h2>
            <p className="hero-description">
              XOBO Delivery Limited offers immediate pick and delivery services across Kenya. 
              We connect businesses with reliable couriers for fast, secure deliveries.
            </p>
            <div className="hero-actions">
              <Button 
                size="lg" 
                as="a" 
                href={EXTERNAL_URLS.businessPortal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Transport Now
              </Button>
              <a 
                href={EXTERNAL_URLS.helpGuide}
                target="_blank" 
                rel="noopener noreferrer" 
                className="help-link"
              >
                📚 Need help getting started? View our step-by-step guide
              </a>
            </div>
          </div>
          
          <div className="hero-media">
            <div className="video-container">
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/Oe0Tme-yRBU?si=1Y6TpTYw71Lano8J"
                title="XOBO Delivery Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Service Highlights */}
      <Section>
        <Section.Header
          overline="Why Choose XOBO"
          title="Redefining Delivery Excellence"
          subtitle="Experience seamless logistics solutions tailored to your needs"
        />
        
        <div className="service-carousel">
          <button
            className="carousel-arrow carousel-arrow--prev"
            onClick={() => setActiveServiceIndex(prev => prev === 0 ? serviceHighlights.length - 1 : prev - 1)}
            aria-label="Previous service"
          >
            <FaArrowRight />
          </button>
          
          <div className="carousel-track" style={{ transform: `translateX(-${activeServiceIndex * 100}%)` }}>
            {serviceHighlights.map((service, index) => (
              <Card key={index} variant="service" className="service-highlight-card">
                <Card.Icon>
                  <img 
                    src={`${process.env.PUBLIC_URL}/ICONS/${service.icon}.png`} 
                    alt={service.title}
                  />
                </Card.Icon>
                <Card.Body>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="card__feature-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          <button
            className="carousel-arrow carousel-arrow--next"
            onClick={() => setActiveServiceIndex(prev => (prev + 1) % serviceHighlights.length)}
            aria-label="Next service"
          >
            <FaArrowRight />
          </button>
        </div>
      </Section>

      {/* Company Stats */}
      <Section background="primary" className="stats-section text-white">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{COMPANY_STATS.activeRiders}</h3>
            <p>Active Riders</p>
          </div>
          <div className="stat-item">
            <h3>{COMPANY_STATS.deliveries}</h3>
            <p>Deliveries</p>
          </div>
          <div className="stat-item">
            <h3>{COMPANY_STATS.businessClients}</h3>
            <p>Business Clients</p>
          </div>
          <div className="stat-item">
            <h3>{COMPANY_STATS.onTimeRate}</h3>
            <p>On-time Deliveries</p>
          </div>
        </div>
      </Section>

      {/* Business Features */}
      <Section>
        <div className="features-content">
          <div className="features-image">
            <img 
              loading="lazy"
              src={`${process.env.PUBLIC_URL}/media/XDL-CLIENT.png`}
              alt="XOBO Client Interface"
            />
          </div>
          
          <div className="features-text">
            <span className="overline">Business Solutions</span>
            <h2>Seamlessly streamline your orders</h2>
            <p>
              Wave goodbye to long customer and driver chats. Our platform automates the entire 
              delivery process, from order placement to delivery confirmation, giving you more 
              time to focus on growing your business.
            </p>
            <ul className="feature-list">
              <li>Automated dispatch system</li>
              <li>Real-time delivery updates</li>
              <li>Customer notification system</li>
              <li>Proof of delivery confirmations</li>
            </ul>
            <Link to="/services" className="link--with-arrow">
              Learn more
            </Link>
          </div>
        </div>
      </Section>

      {/* Service Types */}
      <Section background="light">
        <Section.Header
          overline="Our Services"
          title="Comprehensive Delivery Solutions"
          subtitle="Choose the service that best fits your business needs"
        />
        
        <div className="grid grid-cols-3">
          <Card variant="service">
            <Card.Icon><FaBoxOpen /></Card.Icon>
            <Card.Body>
              <h3>Express Delivery</h3>
              <p>Same-day delivery service for urgent packages. We pick up and deliver within hours.</p>
              <Link to="/services/express" className="card__link">
                Learn more <FaArrowRight />
              </Link>
            </Card.Body>
          </Card>
          
          <Card variant="service">
            <Card.Icon><FaTruckMoving /></Card.Icon>
            <Card.Body>
              <h3>Scheduled Delivery</h3>
              <p>Plan your deliveries in advance with our scheduled service. Perfect for regular shipments.</p>
              <Link to="/services/scheduled" className="card__link">
                Learn more <FaArrowRight />
              </Link>
            </Card.Body>
          </Card>
          
          <Card variant="service">
            <Card.Icon><FaBuilding /></Card.Icon>
            <Card.Body>
              <h3>Business Solutions</h3>
              <p>Customized delivery solutions for businesses with high volume shipping needs.</p>
              <Link to="/services/business" className="card__link">
                Learn more <FaArrowRight />
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Customer Logos */}
      <Section>
        <Section.Header
          overline="Trusted By"
          title="Our Customers"
          subtitle="We're proud to serve businesses across Kenya with reliable delivery solutions"
        />
        
        <div className="customer-carousel">
          <div 
            className="customer-track"
            style={{ transform: `translateX(-${customerSlideIndex * 220}px)` }}
          >
            {[...customerLogos, ...customerLogos].map((logo, index) => (
              <div key={index} className="customer-logo">
                <img 
                  src={`${process.env.PUBLIC_URL}/media/${logo}`}
                  alt="Customer Logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="cta-section text-white text-center">
        <h2>Ready to experience the XOBO difference?</h2>
        <p>Join thousands of satisfied customers who trust us with their deliveries</p>
        <div className="cta-actions">
          <Button 
            variant="accent" 
            size="lg"
            as="a"
            href={EXTERNAL_URLS.businessPortal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Delivering
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            as={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home; 