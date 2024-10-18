import React from "react";
import "../css/OurProducts.css"; // Ensure you have the CSS for Our Products section

const OurProducts = () => {
  return (
    <section className="products-section">
      <h3>Our Products</h3>
      <div className="product-badges">
        {/* Dunefox Badge */}
        <div className="product-badge">
          <a
            href="https://dunefox.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="logo.png"
              alt="Dunefox Logo"
              className="product-logo-center"
            />
            <span className="product-name">Dunefox</span>
          </a>
          <p>Driving success with smart, scalable software solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
