import React from "react";
import "../css/Product.css";

const WhatsAppBot = () => {
  return (
    <div className="product-section">
      <h1 className="component-title">
        Connect Instantly on WhatsApp with Our AI Bot
      </h1>

      {/* Section 1: Why Use WhatsApp Bot */}
      <div className="content-image-row">
        <div className="content">
          <h2>Why Use WhatsApp Bot</h2>
          <p>
            Our WhatsApp Bots bring the same robust capabilities of the Web
            Chatbot to the widely-used WhatsApp platform. Leveraging the
            AllMiniL6v2 model, MongoDB Vector Search, and RAG, our WhatsApp Bot
            engages users right within their favorite messaging app.
          </p>
        </div>
        <div className="image">
          <img src="whatsappbot_image.jpg" alt="WhatsApp Bot" />
        </div>
      </div>

      {/* Section 2: How It Works */}
      <div className="content-image-row alternate">
        <div className="image">
          <img src="whatsapp_platform_image.jpg" alt="WhatsApp Platform" />
        </div>
        <div className="content">
          <h2>How It Works</h2>
          <p>
            By integrating with WhatsApp, our chatbot offers users a
            conversational experience enriched by AI. It leverages RAG and
            similarity matching to deliver real-time responses, directly on
            WhatsApp, allowing businesses to interact with customers where they
            are most active.
          </p>
        </div>
      </div>

      {/* Section 3: Performance Metrics */}
      <div className="metrics-section">
        <h2>Performance Metrics</h2>
        <div className="metrics-card-container">
          <div className="metric-card">
            <p>80%</p>
            <span>User Retention on WhatsApp</span>
          </div>
          <div className="metric-card">
            <p>85%</p>
            <span>Customer Interaction Increase</span>
          </div>
          <div className="metric-card">
            <p>70%</p>
            <span>Time Savings in Service</span>
          </div>
          <div className="metric-card">
            <p>500K+</p>
            <span>Messages Processed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBot;
