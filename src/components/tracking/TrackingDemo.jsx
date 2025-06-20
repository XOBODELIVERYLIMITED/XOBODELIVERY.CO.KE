import React, { useState } from 'react';
import { FaSearch, FaBox, FaTruck, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import './trackingDemo.css';

function TrackingDemo() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      // Demo tracking result
      setTrackingResult({
        number: trackingNumber,
        status: 'In Transit',
        location: 'Nairobi Distribution Center',
        estimatedDelivery: 'Today, 3:00 PM',
        progress: 75
      });
    }
  };

  return (
    <div className="tracking-page">
      {/* Hero Section */}
      <section className="tracking-hero">
        <div className="container">
          <div className="tracking-hero-content">
            <h1>Track Your Package</h1>
            <p>Enter your tracking number to get real-time updates on your delivery</p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="tracking-section">
        <div className="container">
          <div className="tracking-container">
            <form onSubmit={handleTrack} className="tracking-form">
              <div className="input-group">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number (e.g., XOB123456789)"
                  required
                />
                <button 
                  type="submit"
                  onTouchEnd={(e) => {
                    // Don't prevent default here since it's a form submit
                    // The form submission will handle the event
                  }}
                  aria-label="Track package with entered tracking number"
                >
                  <FaSearch /> Track Package
                </button>
              </div>
            </form>

            {trackingResult && (
              <div className="tracking-result">
                <div className="result-header">
                  <h3>Tracking Number: {trackingResult.number}</h3>
                  <span className="status-badge">{trackingResult.status}</span>
                </div>
                
                <div className="tracking-info">
                  <div className="info-card">
                    <FaMapMarkerAlt className="icon" />
                    <div>
                      <h4>Current Location</h4>
                      <p>{trackingResult.location}</p>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <FaTruck className="icon" />
                    <div>
                      <h4>Estimated Delivery</h4>
                      <p>{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                <div className="progress-section">
                  <h4>Delivery Progress</h4>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${trackingResult.progress}%`}}
                    ></div>
                  </div>
                  <div className="progress-steps">
                    <div className="step completed">
                      <FaBox />
                      <span>Package Received</span>
                    </div>
                    <div className="step completed">
                      <FaTruck />
                      <span>In Transit</span>
                    </div>
                    <div className="step">
                      <FaCheckCircle />
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrackingDemo;
