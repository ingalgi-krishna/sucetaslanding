import React from "react";
import "../css/OurProducts.css"; // Ensure you link to your updated CSS file

const DunefoxPage = () => {
  return (
    <section className="products-page">
      <div className="products-header">
        <h1>Our Product</h1>
      </div>

      {/* Dunefox Overview */}
      <div className="dunefox-overview">
        <h2 className="dunefox-title">Dunefox</h2>
        <p className="dunefox-description">
          Dunefox is an AI-powered platform designed to transform businesses by
          offering intelligent chatbots, WhatsApp bots, callbots, and advanced
          data insights.
        </p>
      </div>

      {/* Feature 1: AI Chatbot */}
      <div className="dunefox-feature feature-with-overlay">
        <div className="image-wrapper">
          <img src="dunefox.jpg" alt="AI Chatbot" className="feature-image" />
          <div className="text-overlay overlay-top-left">
            <h2>AI Chatbot</h2>
            <p>
              Provide round-the-clock customer service with our intelligent AI
              chatbot.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 2: WhatsApp Chatbot */}
      <div className="dunefox-feature feature-with-overlay">
        <div className="image-wrapper">
          <img
            src="dunefox.jpg"
            alt="WhatsApp Chatbot"
            className="feature-image"
          />
          <div className="text-overlay overlay-bottom-right">
            <h2>WhatsApp Chatbot</h2>
            <p>Instantly engage with customers using WhatsApp automation.</p>
          </div>
        </div>
      </div>

      {/* Feature 3: Callbot (Coming Soon) */}
      <div className="dunefox-feature feature-with-overlay coming-soon">
        <div className="image-wrapper">
          <img src="dunefox.jpg" alt="Callbot" className="feature-image" />
          <div className="text-overlay overlay-top-right">
            <h2>Callbot</h2>
            <p>
              Automated voice-based interactions to streamline customer service.
            </p>
            <div className="coming-soon-badge">Coming Soon</div>
          </div>
        </div>
      </div>

      {/* Feature 4: Data Insights */}
      <div className="dunefox-feature feature-with-overlay">
        <div className="image-wrapper">
          <img
            src="dunefox.jpg"
            alt="Data Insights"
            className="feature-image"
          />
          <div className="text-overlay overlay-bottom-left">
            <h2>Data Insights</h2>
            <p>
              Leverage data-driven insights to make informed business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DunefoxPage;
