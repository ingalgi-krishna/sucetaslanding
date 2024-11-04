import React from "react";
import "../css/ChatbotDemo.css";

const ChatbotDemo = () => {
  return (
    <div className="chatbot-demo-container">
      <div className="chatbot-banner">
        <h1>Explore Our Chatbot</h1>
        <p>
          Experience interactive chatbot solutions tailored for your business.
        </p>
      </div>
      <div className="chatbot-content">
        <div className="iframe-container">
          <div className="placeholder-iframe">
            Chatbot Interface Coming Soon
          </div>
        </div>
        <div className="chatbot-info">
          <h2>Interactive AI Solutions</h2>
          <p>
            Dive into our smart chatbot technology that enhances customer
            support, boosts engagement, and automates responses efficiently.
          </p>
          <button onClick={() => alert("Learn more...")}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDemo;
