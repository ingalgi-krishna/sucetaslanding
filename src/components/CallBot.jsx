import React from "react";
import "../css/Product.css";

const CallBot = () => {
  return (
    <div className="product-section">
      <h1 className="component-title">
        Future of Voice: Introducing Our AI-Powered Call Bot
      </h1>
      <div className="content-image-row">
        <div className="content">
          <h2>Why Use Call Bot</h2>
          <p>
            Our Call Bot solution is currently in development and aims to
            provide businesses with voice-based AI interaction, allowing for
            real-time support and customer engagement over the phone.
          </p>
        </div>
        <div className="image">
          <img src="callbot_image.jpg" alt="Call Bot" />
        </div>
      </div>

      {/* Section 2: How It Works */}
      <div className="content-image-row alternate">
        <div className="image">
          <img src="voice_ai_image.jpg" alt="Voice AI" />
        </div>
        <div className="content">
          <h2>How It Works</h2>
          <p>
            The Call Bot leverages voice recognition and AI to interact with
            users in real-time, providing immediate responses to common
            inquiries and guiding users through voice-driven menus.
          </p>
        </div>
      </div>

      {/* Section 3: Performance Metrics */}
      {/* Section 3: Performance Metrics */}
      <div className="metrics-section">
        <h2>Performance Metrics</h2>
        <div className="metrics-card-container">
          <div className="metric-card">
            <p>75%</p>
            <span>Expected Engagement Rate</span>
          </div>
          <div className="metric-card">
            <p>70%</p>
            <span>Reduction in Wait Time</span>
          </div>
          <div className="metric-card">
            <p>80%</p>
            <span>Routine Call Handling</span>
          </div>
          <div className="metric-card">
            <p>60%</p>
            <span>Cost Efficiency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBot;
