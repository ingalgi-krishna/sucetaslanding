import React from "react";
import "../css/Footer.css"; // Ensure this is the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-branding">
          <h1>Sucetas</h1>
          <p>
            Stay up-to-date on what we’re doing to uphold our promise to build
            enduring businesses and create lasting value for stakeholders.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service Areas</h4>
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#business">Our Business</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://facebook.com">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-policies">
          <p>
            {" "}
            <span>© 2024 Sucetas Technologies.</span> All rights reserved.
          </p>
          <a href="#terms">Terms & Conditions</a>|
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
