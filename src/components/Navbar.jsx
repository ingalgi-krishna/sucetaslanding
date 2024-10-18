import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Sucetas
        </a>

        {/* Navbar menu */}
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li className="navbar-item">
              <a href="#products" className="navbar-link" onClick={toggleMenu}>
                Our Products
              </a>
            </li>
            <li className="navbar-item">
              <a href="#services" className="navbar-link" onClick={toggleMenu}>
                Our Services
              </a>
            </li>
          </ul>
          <hr />
        </div>

        {/* Hamburger / Cross icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <span className="cross-icon">&#10005;</span> // Cross icon
          ) : (
            <span className="hamburger-icon">&#9776;</span> // Hamburger icon
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
