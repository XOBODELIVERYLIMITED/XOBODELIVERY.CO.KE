import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

// Page Components
import Home from './components/home/Home';
import Services from './components/xdlservices/Services';
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
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>XOBO Delivery - Fast and Reliable Delivery Services in Kenya</title>
          <meta name="description" content="XOBO Delivery provides fast and reliable delivery services across Kenya" />
          
          {/* Security Headers */}
          <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://maps.googleapis.com https://api.web3forms.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com; connect-src 'self' https://api.web3forms.com; frame-src 'self' https://www.google.com/maps/; object-src 'none';" />
          <meta http-equiv="X-Content-Type-Options" content="nosniff" />
          <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
          <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
          <meta http-equiv="Permissions-Policy" content="geolocation=(self), camera=(), microphone=()" />
        </Helmet>
        
        {/* <h1>App</h1> */}
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;