import React, { useEffect, useState } from 'react';
import '../css/Loader.css'; // Import the CSS for styling
import V from "../assets/V_letter.png"

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="logo-circle">
          <img src={V} alt="Logo" className="logo-image" />
          <div className="loader-ring"></div> 
        </div>
        <p className="loader-text">Vinayak | Portfolio</p> 
      </div>
    </div>
  );
};

export default Loader;
