// FAQList.jsx
import React from 'react';
import FAQItem from './FAQItem';

const FAQList = ({ faqs, category }) => {
  const filteredFaqs = category === 'All' ? faqs : faqs.filter(faq => faq.category === category);

  return (
    <div className="faq-list">
      {filteredFaqs.map(faq => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
