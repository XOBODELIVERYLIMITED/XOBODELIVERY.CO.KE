// FAQItem.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Calculate content height when component mounts or content changes
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [answer, isOpen]);

  // Handle both click and touch events for better mobile compatibility
  const toggleAnswer = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setIsOpen(prevOpen => {
      const newOpen = !prevOpen;
      
      // Recalculate height when opening
      if (newOpen && contentRef.current) {
        setTimeout(() => {
          const height = contentRef.current.scrollHeight;
          setContentHeight(height);
        }, 10);
      }
      
      return newOpen;
    });
  };

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAnswer(e);
    }
  };

  const safeQuestion = question || 'No question provided';
  const safeAnswer = answer || 'No answer provided';

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div 
        className="faq-question" 
        onClick={toggleAnswer}
        onTouchEnd={toggleAnswer}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${safeQuestion.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3>{safeQuestion}</h3>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <FaChevronDown />
        </span>
      </div>
      <div 
        className="faq-answer"
        id={`faq-answer-${safeQuestion.replace(/\s+/g, '-').toLowerCase()}`}
        style={{ 
          maxHeight: isOpen ? `${Math.max(contentHeight + 40, 100)}px` : '0px',
          transition: 'max-height 0.3s ease-out'
        }}
      >
        <div ref={contentRef} className="faq-answer-content">
          {safeAnswer.includes('<a ') ? (
            // Render HTML content for answers containing links
            <div dangerouslySetInnerHTML={{ __html: safeAnswer }} />
          ) : (
            // Render plain text content with line breaks
            safeAnswer.split('\n').map((line, index) => (
              <p key={index}>{line || '\u00A0'}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
