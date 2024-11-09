import React from "react";
import "../css/WebChatbot.css"; // Ensure the CSS file path is correct

const WebChatbot = () => {
  return (
    <div className="web-chatbot-container">
      {/* First Section with Image on the Left and Text on the Right */}
      <div className="section section-left">
        <div className="image-container">
          <img src="chatbot_interactions.jpg" alt="Interactive Chatbot" />
        </div>
        <div className="info-container">
          <h1>Engage Effortlessly with AI</h1>
          <p>Unleashing Dynamic Customer Interactions</p>
          <h2>
            Expand your reach with <span className="highlight">35+</span>{" "}
            Integrated Channels
          </h2>
          <p>
            Experience the future of customer interactions with our cutting-edge
            chatbot technology, designed to engage users and provide dynamic,
            personalized experiences seamlessly.
          </p>
        </div>
      </div>

      {/* Second Section with Text on the Left and Image on the Right */}
      <div className="section section-right">
        <div className="info-container">
          <h1>Personalize at Scale</h1>
          <p>Make Every Customer Interaction Personal</p>
          <h2>
            Deliver tailored experiences with AI that understands individual
            needs.
          </h2>
          <p>
            Boost engagement and satisfaction by providing personalized
            responses, enhancing customer service across all platforms.
          </p>
        </div>
        <div className="image-container">
          <img
            src="chatbot_personalization.jpg"
            alt="Chatbot Personalization"
          />
        </div>
      </div>

      {/* Performance Metrics Banner */}
      <div className="performance-metrics">
        <h1>Performance Metrics</h1>
        <p>
          Personalizing conversations at scale across key messaging channels
        </p>
        <div className="metrics">
          <div className="metric">
            <span className="metric-value">80%</span> queries self-served
          </div>
          <div className="metric">
            <span className="metric-value">30%</span> enhanced lead generation
          </div>
          <div className="metric">
            <span className="metric-value">40%</span> increase in CSAT
          </div>
          <div className="metric">
            <span className="metric-value">20%</span> boost in sales conversions
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebChatbot;
