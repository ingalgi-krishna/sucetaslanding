import React from "react";
import "../css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer-bottom">
        <p className="footer-company">
          Sucetas Technologies Private Limited &copy; {new Date().getFullYear()}
        </p>
        <p className="footer-cin">CIN: U58200PN2024PTC234661</p>
        <p className="footer-contact">
          Email:{" "}
          <a href="mailto:contact@sucetas.com" className="footer-email">
            contact@sucetas.com
          </a>{" "}
          | Phone: +91-8329687438
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
