import React from "react";
import "../css/Landing.css"; // Ensure you have the CSS for Landing section

const Landing = () => {
  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="headline-section">
          <h1 className="headline">
            Revolutionize Your Business <br />
            with <span className="highlight-ai">Intelligent AI</span> Solutions
          </h1>
        </div>

        <div className="subheadline-section">
          <p className="subheadline">
            Drive growth, streamline operations, and enhance customer
            interactions.
            <br />
            Empower your business with cutting-edge AI solutions.
          </p>
          <button className="cta-button">See what we do</button>
        </div>
      </div>
    </header>
  );
};

export default Landing;
