import React from "react";
import "../css/AboutUs.css"; // Ensure the CSS file path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="banner">
        <h1>Welcome to Our World of Innovation</h1>
        <p>Join us on a journey of technological discovery and innovation.</p>
      </div>
      <div className="vision-section">
        <img src="dunefox.jpg" alt="Vision" className="vision-image" />
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            We aim to revolutionize the way businesses interact with technology,
            creating seamless, intuitive and empowering experiences.
          </p>
        </div>
      </div>
      <div className="details-section">
        <h2>What We Dream, What We Offer</h2>
        <p>
          As a tech startup, we are committed to pushing the boundaries of
          what's possible, crafting solutions that anticipate the future needs
          of our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
