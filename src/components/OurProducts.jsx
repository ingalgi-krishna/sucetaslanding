import React from "react";
import "../css/OurProducts.css"; // Ensure you have the CSS for Our Products section

const OurProducts = () => {
  return (
    <section className="products-section">
      {/* Section Heading */}
      <div className="product-header">
        <h1>Our Product</h1>
        <p>
          Explore Dunefox, our all-in-one AI solution designed to revolutionize
          how businesses interact with customers and grow through data-driven
          insights.
        </p>
      </div>

      <div className="product-details">
        {/* Dunefox Badge */}
        <div className="product-badge">
          <img src="logo.png" alt="Dunefox Logo" className="product-logo" />
          <h2 className="product-name">Dunefox</h2>
          <p className="product-description">
            Dunefox offers advanced AI-powered tools, including chatbots,
            WhatsApp bots, and callbots, along with powerful data analytics to
            help businesses grow efficiently.
          </p>

          {/* Key Features */}
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              <li>AI Chatbot for 24/7 customer engagement</li>
              <li>WhatsApp Chatbot for instant messaging automation</li>
              <li>Callbot to automate voice interactions</li>
              <li>Data insights and analytics to fuel business growth</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="cta">
            <a
              href="https://dunefox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Learn More about Dunefox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
