import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  // Close menu when clicking on a nav item
  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Sucetas
        </Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <span className="icon-close">&#10005;</span>
          ) : (
            <span className="icon-menu">&#9776;</span>
          )}
        </div>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/what-we-do" className="nav-link" onClick={closeMenu}>
                What we do
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/who-we-are" className="nav-link" onClick={closeMenu}>
                Who we are
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                Resources &#9662;
              </span>
              {dropdown && (
                <div className="dropdown-content">
                  <Link to="/resources/insights" onClick={closeMenu}>
                    Insights
                  </Link>
                  <Link to="/resources/blogs" onClick={closeMenu}>
                    Blogs
                  </Link>
                  <Link to="/resources/media-room" onClick={closeMenu}>
                    Media Room
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link" onClick={closeMenu}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                Let's Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
