// src/AboutDropdown.js
import React, { useState } from 'react';
import './About.jsx'; // Import your CSS file for styling

const AboutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="about-dropdown">
      <a href="#" onClick={toggleDropdown} className="dropdown-link">
        About AMAL
      </a>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#about-us" onClick={closeDropdown}>About Us</a>
          <a href="#our-team" onClick={closeDropdown}>Our Team</a>
          <a href="#our-history" onClick={closeDropdown}>Our History</a>
        </div>
      )}
    </div>
  );
};

export default AboutDropdown;