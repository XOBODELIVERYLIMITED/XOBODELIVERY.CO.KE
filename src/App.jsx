import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

// Page Components
import Home from './components/home/Home';
import Services from './components/xdlservices/Services';
import Express from './components/services/express/Express';
import Scheduled from './components/services/scheduled/Scheduled';
import Business from './components/services/business/Business';
import Drivers from './components/drivers/Drivers';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import FAQ from './components/faq/FAQ';
import Privacy from './components/privacy/Privacy';
import Mistake from './components/mistake/Mistake';
import Terms from './components/terms/Terms';

// Layout Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Layout wrapper
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>XOBO Delivery - Fast and Reliable Delivery Services in Kenya</title>
          <meta name="description" content="XOBO Delivery provides fast and reliable delivery services across Kenya" />
          
          {/* Security Headers */}
          <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob: ; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; media-src *; font-src *; connect-src *; frame-src *;" />
          <meta http-equiv="X-Content-Type-Options" content="nosniff" />
          <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
          <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
          <meta http-equiv="Permissions-Policy" content="geolocation=(self), camera=(), microphone=()" />
        </Helmet>
        
        {/* <h1>App</h1> */}        <Routes>
          <Route path="/" 
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
            path="/terms" 
            element={
              <MainLayout>
                <Terms />
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
        </Routes>      </div>
    </Router>
  );
}

export default App;