import React, { useState } from "react";
import "../css/Footer.css"; // Verify this path matches your CSS file location

const Footer = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [subscriptionMessage, setSubscriptionMessage] = useState(null); // State for feedback message

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Validate email format using regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle subscription on button click
  const handleSubscribe = async () => {
    if (!email) {
      setSubscriptionMessage("Please enter an email.");
      return;
    }

    if (!isValidEmail(email)) {
      setSubscriptionMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSubscriptionMessage("Subscribed successfully!");
        setEmail(""); // Clear email input
      } else {
        setSubscriptionMessage(data.message || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubscriptionMessage("Error subscribing. Please try again later.");
    }
  };

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
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSubscribe}>Subscribe Now</button>
            {subscriptionMessage && (
              <p className="subscription-message">{subscriptionMessage}</p>
            )}
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service Areas</h4>
            <a href="/what-we-do/chatbot">Chatbot</a>
            <a href="/what-we-do/whatsapp-bot">Whatsapp Bot</a>
            <a href="/what-we-do/callbot">Callbot</a>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/who-we-are">Who We Are</a>
            <a href="/what-we-do">Our Business</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Let's Connect</a>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/sucetas/">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com/sucetas">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.facebook.com/sucetas">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.youtube.com/@Sucetas">
              <i className="fab fa-youtube"></i> Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-policies">
          <div className="policy-links">
            <a href="/terms-and-conditions" rel="noopener noreferrer">
              Terms & Conditions
            </a>
            <span className="separator">|</span>
            <a href="/privacy-policy" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </div>
          <div className="company-info">
            <p>
              <span>© 2024 Sucetas Technologies.</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
