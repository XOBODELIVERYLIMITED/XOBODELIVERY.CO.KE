import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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