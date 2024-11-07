import React from "react";
import "../css/ChatbotDemo.css";

const ChatbotDemo = () => {
  return (
    <div className="chatbot-demo-container">
      <div className="title-container">
        <h1>Ready to Revolutionize Your Customer Experience?</h1>
      </div>
      <div className="chatbot-content">
        <div className="iframe-container">
          {/* Placeholder for iframe or chatbot UI */}
        </div>
        <div className="chatbot-info">
          <h2>Interactive AI Solutions</h2>
          <p>
            Discover the power of advanced AI with our smart chatbot technology.
            Our platform uses state-of-the-art Retriever-Answer Generator (RAG)
            technology to understand and respond to customer inquiries with
            unprecedented accuracy and context awareness.
          </p>
          <p>
            From automating customer support to providing instant, accurate
            answers around the clock, our chatbot enhances your capabilities and
            transforms user interactions. Dive into a demo now and see how we
            can help you boost engagement and streamline communications.
          </p>
          <button onClick={() => alert("Learn more...")}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDemo;
