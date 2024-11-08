import React from "react";
import "../css/WhoWeAre.css"; // Ensure this path is correct
import CoreValuesSlider from "./CoreValuesSlider"; // Import the Value Wheel component

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="banner">
        <h1>Empowering Innovation</h1>
        <p>Leading the Future with Technology and Vision</p>
      </div>
      <div className="directors-section">
        <div
          className="directors-photo"
          style={{
            backgroundImage: "url(directors.jpg)", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="photo-overlay">
            <div className="overlay-text">
              <h3>Here's Our Team of Founders</h3>
              <p>
                "At Sucetas, we are committed to redefining industry standards
                through pioneering AI solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="core-values">
        <h2>Our Core Values</h2>
        <CoreValuesSlider /> {/* Value Wheel Component */}
      </div>
    </div>
  );
};

export default WhoWeAre;
