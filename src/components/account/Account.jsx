import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes, FaBox, FaHistory } from 'react-icons/fa';
import './account.css';

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254 700 123 456',
    address: '123 Nairobi Street, CBD, Nairobi'
  });

  const [editInfo, setEditInfo] = useState(userInfo);

  const handleEdit = () => {
    setIsEditing(true);
    setEditInfo(userInfo);
  };

  const handleSave = () => {
    setUserInfo(editInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditInfo(userInfo);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const recentOrders = [
    { id: 'XOB001', date: '2023-12-15', status: 'Delivered', amount: 'KSh 850' },
    { id: 'XOB002', date: '2023-12-10', status: 'In Transit', amount: 'KSh 1,200' },
    { id: 'XOB003', date: '2023-12-05', status: 'Delivered', amount: 'KSh 650' }
  ];

  return (
    <div className="account-page">
      {/* Hero Section */}
      <section className="account-hero">
        <div className="container">
          <div className="account-hero-content">
            <h1>My Account</h1>
            <p>Manage your profile and track your deliveries</p>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="account-section">
        <div className="container">
          <div className="account-grid">
            {/* Profile Information */}
            <div className="profile-card">
              <div className="card-header">
                <h3>Profile Information</h3>
                {!isEditing ? (
                  <button 
                    className="edit-btn" 
                    onClick={handleEdit}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleEdit();
                    }}
                    type="button"
                    aria-label="Edit profile information"
                  >
                    <FaEdit /> Edit
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button 
                      className="save-btn" 
                      onClick={handleSave}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        handleSave();
                      }}
                      type="button"
                      aria-label="Save changes"
                    >
                      <FaSave /> Save
                    </button>
                    <button 
                      className="cancel-btn" 
                      onClick={handleCancel}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        handleCancel();
                      }}
                      type="button"
                      aria-label="Cancel editing"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="profile-info">
                <div className="info-field">
                  <FaUser className="field-icon" />
                  <div className="field-content">
                    <label>Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editInfo.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    ) : (
                      <span>{userInfo.name}</span>
                    )}
                  </div>
                </div>

                <div className="info-field">
                  <FaEnvelope className="field-icon" />
                  <div className="field-content">
                    <label>Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editInfo.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    ) : (
                      <span>{userInfo.email}</span>
                    )}
                  </div>
                </div>

                <div className="info-field">
                  <FaPhone className="field-icon" />
                  <div className="field-content">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editInfo.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    ) : (
                      <span>{userInfo.phone}</span>
                    )}
                  </div>
                </div>

                <div className="info-field">
                  <FaMapMarkerAlt className="field-icon" />
                  <div className="field-content">
                    <label>Address</label>
                    {isEditing ? (
                      <textarea
                        value={editInfo.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        rows="3"
                      />
                    ) : (
                      <span>{userInfo.address}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="orders-card">
              <div className="card-header">
                <h3>Recent Orders</h3>
                <a href="#/orders" className="view-all-link">
                  <FaHistory /> View All
                </a>
              </div>

              <div className="orders-list">
                {recentOrders.map(order => (
                  <div key={order.id} className="order-item">
                    <div className="order-info">
                      <div className="order-id">
                        <FaBox className="order-icon" />
                        <span>#{order.id}</span>
                      </div>
                      <div className="order-details">
                        <span className="order-date">{order.date}</span>
                        <span className="order-amount">{order.amount}</span>
                      </div>
                    </div>
                    <div className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>

              <div className="action-buttons">
                <a href="#/services" className="action-btn primary">
                  <FaBox />
                  <span>New Delivery</span>
                </a>
                
                <a href="#/tracking" className="action-btn secondary">
                  <FaHistory />
                  <span>Track Package</span>
                </a>

                <a href="#/contact" className="action-btn secondary">
                  <FaEnvelope />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account; 