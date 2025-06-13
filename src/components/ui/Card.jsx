import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  padding = 'default',
  shadow = 'sm',
  ...props 
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    `card--shadow-${shadow}`,
    hover && 'card--hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);

const CardIcon = ({ children, className = '' }) => (
  <div className={`card__icon ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Icon = CardIcon;

export default Card; 