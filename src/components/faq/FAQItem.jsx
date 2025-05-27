// FAQItem.jsx
import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <FaChevronDown />
        </span>
      </div>
      <div 
        className="faq-answer"
        style={isOpen ? { maxHeight: contentRef.current?.scrollHeight + 'px' } : { maxHeight: 0 }}
      >
        <div ref={contentRef} className="faq-answer-content">
          {answer.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
