import React from 'react';
import { Link } from 'react-router-dom';
import './mistake.css';
// import Header from '../header/Header';

function Mistake() {
  return (
    <div className="mistake-container">
    {/* <Header/> */}
      <div className="background-text">404</div>
      <div className="mistake-content">
        <h1 className="mistake-title">Page not found.</h1>
        <p className="mistake-text">          
         Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.
        </p>
        <Link to="/" className="mistake-link">
          Go back to home
        </Link>
      </div>
    </div>
  );
}

export default Mistake;
