import React from 'react';

const Section = ({ 
  children, 
  size = 'default',
  background = 'white',
  className = '',
  ...props 
}) => {
  const sectionClasses = [
    'section',
    size === 'sm' && 'section--sm',
    size === 'lg' && 'section--lg',
    background === 'light' && 'bg-light',
    background === 'primary' && 'bg-primary',
    background === 'gray' && 'bg-gray-100',
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

const SectionHeader = ({ 
  overline, 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  const headerClasses = [
    'section-header',
    !centered && 'text-left',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={headerClasses}>
      {overline && <span className="overline">{overline}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

Section.Header = SectionHeader;

export default Section; 