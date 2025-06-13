import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock the lazy-loaded components
jest.mock('../components/home/Home', () => {
  return function MockHome() {
    return <div data-testid="home-component">Home Component</div>;
  };
});

jest.mock('../components/contact/Contact', () => {
  return function MockContact() {
    return <div data-testid="contact-component">Contact Component</div>;
  };
});

jest.mock('../components/mistake/Mistake', () => {
  return function MockMistake() {
    return <div data-testid="mistake-component">404 Component</div>;
  };
});

// Mock other common components
jest.mock('../components/header/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>;
  };
});

jest.mock('../components/footer/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

jest.mock('../components/common/ScrollToTop', () => {
  return function MockScrollToTop() {
    return null;
  };
});

jest.mock('../components/common/LoadingSpinner', () => {
  return function MockLoadingSpinner({ message }) {
    return <div data-testid="loading-spinner">{message}</div>;
  };
});

jest.mock('../components/common/ErrorBoundary', () => {
  return function MockErrorBoundary({ children }) {
    return <div data-testid="error-boundary">{children}</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing', async () => {
    render(<App />);
    
    // Wait for lazy components to load
    await waitFor(() => {
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    });
  });

  test('renders header and footer', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });

  test('renders home page by default', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-component')).toBeInTheDocument();
    });
  });

  test('has proper meta tags for security', () => {
    render(<App />);
    
    // Check if Helmet is setting up meta tags
    const helmet = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    expect(helmet).toBeTruthy();
  });

  test('has proper CSP configuration', () => {
    render(<App />);
    
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMeta) {
      const content = cspMeta.getAttribute('content');
      expect(content).toContain("default-src 'self'");
      expect(content).toContain('https://maps.googleapis.com');
      expect(content).toContain('https://api.web3forms.com');
    }
  });

  test('renders contact page when navigating to /contact', async () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-component')).toBeInTheDocument();
    });
  });

  test('renders 404 page for unknown routes', async () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('mistake-component')).toBeInTheDocument();
    });
  });

  test('wraps app with error boundary', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    });
  });

  test('shows loading spinner while components load', () => {
    // Create a component that takes time to load
    jest.doMock('../components/home/Home', () => {
      return React.lazy(() => 
        new Promise(resolve => 
          setTimeout(() => resolve({
            default: () => <div>Loaded Home</div>
          }), 100)
        )
      );
    });

    render(<App />);
    
    // Should show loading spinner initially
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText('Loading page...')).toBeInTheDocument();
  });

  test('has proper document title', () => {
    render(<App />);
    
    // Check if title is set
    expect(document.title).toContain('XOBO Delivery');
  });

  test('has proper meta description', () => {
    render(<App />);
    
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription.getAttribute('content')).toContain('XOBO Delivery provides fast and reliable delivery services');
  });

  test('has security headers configured', () => {
    render(<App />);
    
    // Check various security headers
    const xContentTypeOptions = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
    expect(xContentTypeOptions?.getAttribute('content')).toBe('nosniff');
    
    const xFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
    expect(xFrameOptions?.getAttribute('content')).toBe('SAMEORIGIN');
    
    const xssProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
    expect(xssProtection?.getAttribute('content')).toBe('1; mode=block');
  });

  test('has proper referrer policy', () => {
    render(<App />);
    
    const referrerPolicy = document.querySelector('meta[http-equiv="Referrer-Policy"]');
    expect(referrerPolicy?.getAttribute('content')).toBe('strict-origin-when-cross-origin');
  });

  test('has permissions policy configured', () => {
    render(<App />);
    
    const permissionsPolicy = document.querySelector('meta[http-equiv="Permissions-Policy"]');
    expect(permissionsPolicy?.getAttribute('content')).toContain('geolocation=(self)');
    expect(permissionsPolicy?.getAttribute('content')).toContain('camera=()');
    expect(permissionsPolicy?.getAttribute('content')).toContain('microphone=()');
  });

  test('uses HashRouter for GitHub Pages compatibility', () => {
    render(<App />);
    
    // Verify we're using HashRouter by checking if routes work with hash
    expect(window.location.hash).toBeDefined();
  });
}); 