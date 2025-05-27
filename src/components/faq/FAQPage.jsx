// FAQPage.jsx
import React, { useState } from 'react';
import FAQList from './FAQList';
import { FaShoppingCart, FaTruck, FaCreditCard, FaUser, FaHandshake } from 'react-icons/fa';

const FAQPage = ({ faqs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Questions', icon: null },
    { id: 'account', label: 'Account & Setup', icon: <FaUser /> },
    { id: 'order', label: 'Order Process', icon: <FaShoppingCart /> },
    { id: 'delivery', label: 'Delivery', icon: <FaTruck /> },
    { id: 'payments', label: 'Payments', icon: <FaCreditCard /> },
    { id: 'partners', label: 'Partners', icon: <FaHandshake /> }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="faq-container">
      <div className="faq-categories">
        {categories.map((category) => (
          <button 
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.icon && <span className="category-icon">{category.icon}</span>}
            {category.label}
          </button>
        ))}
      </div>
      <div className="faq-questions">
        <FAQList faqs={faqs} category={selectedCategory} />
      </div>
    </div>
  );
};

export default FAQPage;
