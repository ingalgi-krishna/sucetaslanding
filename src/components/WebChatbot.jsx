import React from "react";
import "../css/Product.css"; // Ensure a generic CSS file for consistency

const WebChatbot = () => {
  return (
    <div className="product-section">
      <h1 className="component-title">
        Revolutionize Engagement with Our Web Chatbot
      </h1>

      {/* Section 1: Why Use Web Chatbot */}
      <div className="content-image-row">
        <div className="content">
          <h2>Why Use Web Chatbot</h2>
          <p>
            Our Web Chatbots leverage the power of AllMiniL6v2 embeddings,
            MongoDB Vector Search, Groq, and Gemini models to deliver
            personalized and highly accurate responses to users. These AI-driven
            chatbots are designed to enhance customer engagement, providing
            answers with precision and efficiency.
          </p>
        </div>
        <div className="image">
          <img src="synapse.jpg" alt="Web Chatbot" />
        </div>
      </div>

      {/* Section 2: How It Works */}
      <div className="content-image-row alternate">
        <div className="image">
          <img src="synapse.jpg" alt="Embedding Model" />
        </div>
        <div className="content">
          <h2>How It Works</h2>
          <p>
            Utilizing RAG (Retrieval-Augmented Generation), our Web Chatbot
            combines information retrieval with generation capabilities to fetch
            relevant responses, making customer interactions seamless and
            effective. The MongoDB Vector Search enhances similarity matching,
            while Groq and Gemini ensure responses are both reliable and
            contextual.
          </p>
        </div>
      </div>

      {/* Section 3: Performance Metrics */}
      <div className="metrics-section">
        <h2>Performance Metrics</h2>
        <div className="metrics-card-container">
          <div className="metric-card">
            <p>95%</p>
            <span>User Engagement Rate</span>
          </div>
          <div className="metric-card">
            <p>90%</p>
            <span>Positive Feedback</span>
          </div>
          <div className="metric-card">
            <p>85%</p>
            <span>Reduction in Response Time</span>
          </div>
          <div className="metric-card">
            <p>1M+</p>
            <span>Interactions Handled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebChatbot;
