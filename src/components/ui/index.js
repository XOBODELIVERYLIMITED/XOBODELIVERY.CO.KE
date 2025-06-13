// UI Components Index
// This file exports all reusable UI components for easy importing

export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Section } from './Section';

// Re-export specific card components for convenience
export { 
  default as Card,
} from './Card';

// Component collections for specific use cases
export const ServiceComponents = {
  Card,
  Section,
  Button
};

export const LayoutComponents = {
  Section,
  Card
};

export const InteractiveComponents = {
  Button
}; 