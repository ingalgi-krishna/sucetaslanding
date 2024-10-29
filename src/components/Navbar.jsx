import React, { useState } from "react";
import "../css/Navbar.css"; // Ensure the CSS path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu specifically (used when clicking on nav items)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Sucetas
        </a>
        {/* Toggle menu icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <span className="icon-close">&#10005;</span>
          ) : (
            <span className="icon-menu">&#9776;</span>
          )}
        </div>
        {/* Navbar menu */}
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link" onClick={closeMenu}>
                Our Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={closeMenu}>
                <b>Let's Talk</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
