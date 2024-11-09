import React from "react";
import "../css/WhatWeDo.css"; // Ensure the CSS file path is correct
import WebChatbot from "./WebChatbot";

const DunefoxProduct = () => {
  return (
    <div className="dunefox-product-page">
      <div className="dunefox-banner">
        <h1 className="banner-headline">
          {" "}
          Looking to Extend Your Business Reach and Engagement?
        </h1>
        <p className="banner-subtitle">Then it's Time to go AI</p>
      </div>
      <h1 className="main-title"> Dunefox, That's it! </h1>
      <div className="content-section">
        <div className="service-grid">
          <div
            className="service"
            onClick={() =>
              (window.location.href = "https://example.com/web-chatbots")
            }
          >
            <i className="fa fa-comments" aria-hidden="true"></i>{" "}
            {/* Icon for Web Chatbots */}
            Web Chatbots
          </div>
          <div
            className="service"
            onClick={() =>
              (window.location.href = "https://example.com/whatsapp-chatbots")
            }
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
            {/* Icon for WhatsApp Chatbots */}
            WhatsApp Chatbots
          </div>
          <div
            className="service coming-soon"
            onClick={() => console.log("Call Bots - Coming soon")}
          >
            <i className="fa fa-phone" aria-hidden="true"></i>{" "}
            {/* Icon for Call Bots */}
            Call Bot <span className="coming-soon-badge"></span>
          </div>
          <div
            className="service"
            onClick={() =>
              (window.location.href = "https://example.com/analytics-insights")
            }
          >
            <i className="fa fa-chart-line" aria-hidden="true"></i>{" "}
            {/* Icon for Analytics & Insights */}
            Analytics & Insights
          </div>
        </div>
        <div className="product-details">
          <p className="product-description">
            Explore Dunefox, your gateway to advancing business AI solutions.
            Drive engagement, extend your reach, and harness the power of
            intelligent chatbots and analytics.
          </p>
          <button
            className="learn-more-btn"
            onClick={() => console.log("Navigate to learn more about Dunefox")}
          >
            Try Dunefox
          </button>
        </div>
      </div>
      <WebChatbot />
    </div>
  );
};

export default DunefoxProduct;
