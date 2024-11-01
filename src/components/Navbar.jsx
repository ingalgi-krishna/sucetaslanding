import React, { useState } from "react";
import "../css/Navbar.css"; // Ensure the CSS path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    products: false,
    solutions: false,
    resources: false,
  });

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown menus
  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Close the menu specifically (used when clicking on nav items)
  const closeMenu = () => {
    setIsOpen(false);
    setDropdown({
      products: false,
      solutions: false,
      resources: false,
    });
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
                Who we are
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#products"
                className="nav-link"
                onClick={() => toggleDropdown("products")}
              >
                Products &#9662;
              </a>
              {dropdown.products && (
                <div className="dropdown-content">
                  <a href="#dunefox" onClick={closeMenu}>
                    Dunefox
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                href="#solutions"
                className="nav-link"
                onClick={() => toggleDropdown("solutions")}
              >
                Solutions &#9662;
              </a>
              {dropdown.solutions && (
                <div className="dropdown-content">
                  <a href="#solution1" onClick={closeMenu}>
                    Solution 1
                  </a>
                  <a href="#solution2" onClick={closeMenu}>
                    Solution 2
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                href="#resources"
                className="nav-link"
                onClick={() => toggleDropdown("resources")}
              >
                Resources &#9662;
              </a>
              {dropdown.resources && (
                <div className="dropdown-content">
                  <a href="#docs" onClick={closeMenu}>
                    Docs
                  </a>
                  <a href="#blogs" onClick={closeMenu}>
                    Blogs
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>
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
