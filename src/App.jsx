import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import './styles/standardized-components.css';
import './styles/mobile-fixes.css';
import './styles/responsive-system.css';
import setupViewportHeightFix from './utils/viewportFix';
import setupResponsiveHelper from './utils/responsiveHelper';
import initializeMobileOptimizations from './utils/mobileOptimization';
import { initializeErrorFiltering } from './utils/errorFilter';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorBoundary from "./components/common/ErrorBoundary";
// Theme components available for future use
// import { ThemeProvider } from './context/ThemeContext';
// import ThemeToggle from './components/common/ThemeToggle';

// Lazy-loaded components for better performance
const Home = lazy(() => import("./components/home/Home"));
const Services = lazy(() => import("./components/xdlservices/Services"));
const Express = lazy(() => import("./components/services/express/Express"));
const Scheduled = lazy(() => import("./components/services/scheduled/Scheduled"));
const Business = lazy(() => import("./components/services/business/Business"));
const Drivers = lazy(() => import("./components/drivers/Drivers"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const FAQ = lazy(() => import("./components/faq/FAQ"));
const Privacy = lazy(() => import("./components/privacy/Privacy"));
const Terms = lazy(() => import("./components/terms/Terms"));
const ClientGuide = lazy(() => import("./components/client-guide/ClientGuide"));
const CompanyInfo = lazy(() => import("./components/company-info/CompanyInfo"));
const Account = lazy(() => import("./components/account/Account"));
const TrackingDemo = lazy(() => import("./components/tracking/TrackingDemo"));
const Partners = lazy(() => import("./components/partners/Partners"));
const Help = lazy(() => import("./components/help/Help"));
const DriverPrivacy = lazy(() => import("./components/driver-privacy/DriverPrivacy"));
const Mistake = lazy(() => import("./components/mistake/Mistake"));

// Layout wrapper
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    // Initialize error filtering for external services
    initializeErrorFiltering();
    
    // Fix for 100vh issue on mobile browsers
    setupViewportHeightFix();
    
    // Setup responsive helper
    setupResponsiveHelper();
    
    // Initialize comprehensive mobile optimizations
    initializeMobileOptimizations();
  }, []);

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ErrorBoundary>
          <div className="App">
            <ScrollToTop />
            <Helmet>
              <base href={process.env.PUBLIC_URL + '/'} />
              <meta charSet="utf-8" />
              <title>
                XOBO Delivery - Fast and Reliable Delivery Services in Kenya
              </title>
              <meta
                name="description"
                content="XOBO Delivery provides fast and reliable delivery services across Kenya"
              />

              {/* Security Headers */}
              <meta
                http-equiv="Content-Security-Policy"
                content="default-src 'self'; script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://api.web3forms.com https://www.google.com https://www.youtube.com https://youtube.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.web3forms.com https://maps.googleapis.com; frame-src 'self' https://www.google.com https://www.youtube.com https://youtube.com; media-src 'self' https://www.youtube.com https://youtube.com https://*.googlevideo.com;"
              />
              <meta http-equiv="X-Content-Type-Options" content="nosniff" />
              <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
              <meta
                http-equiv="Referrer-Policy"
                content="strict-origin-when-cross-origin"
              />
              <meta
                http-equiv="Permissions-Policy"
                content="geolocation=(self), camera=(), microphone=()"
              />
            </Helmet>
            <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <MainLayout>
                      <Home />
                    </MainLayout>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <MainLayout>
                      <Services />
                    </MainLayout>
                  }
                />
                <Route
                  path="/services/express"
                  element={
                    <MainLayout>
                      <Express />
                    </MainLayout>
                  }
                />
                <Route
                  path="/services/scheduled"
                  element={
                    <MainLayout>
                      <Scheduled />
                    </MainLayout>
                  }
                />
                <Route
                  path="/services/business"
                  element={
                    <MainLayout>
                      <Business />
                    </MainLayout>
                  }
                />
                <Route
                  path="/drivers"
                  element={
                    <MainLayout>
                      <Drivers />
                    </MainLayout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <MainLayout>
                      <About />
                    </MainLayout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <MainLayout>
                      <Contact />
                    </MainLayout>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <MainLayout>
                      <FAQ />
                    </MainLayout>
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={
                    <MainLayout>
                      <Privacy />
                    </MainLayout>
                  }
                />
                <Route
                  path="/driver-privacy"
                  element={
                    <MainLayout>
                      <DriverPrivacy />
                    </MainLayout>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <MainLayout>
                      <Terms />
                    </MainLayout>
                  }
                />
                <Route
                  path="/client-guide"
                  element={
                    <MainLayout>
                      <ClientGuide />
                    </MainLayout>
                  }
                />
                <Route
                  path="/company-info"
                  element={
                    <MainLayout>
                      <CompanyInfo />
                    </MainLayout>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/tracking"
                  element={
                    <MainLayout>
                      <TrackingDemo />
                    </MainLayout>
                  }
                />
                <Route
                  path="/tracking-demo"
                  element={
                    <MainLayout>
                      <TrackingDemo />
                    </MainLayout>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <MainLayout>
                      <Account />
                    </MainLayout>
                  }
                />
                <Route
                  path="/partners"
                  element={
                    <MainLayout>
                      <Partners />
                    </MainLayout>
                  }
                />
                <Route
                  path="/help"
                  element={
                    <MainLayout>
                      <Help />
                    </MainLayout>
                  }
                />
                <Route
                  path="/*"
                  element={
                    <MainLayout>
                      <Mistake />
                    </MainLayout>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
