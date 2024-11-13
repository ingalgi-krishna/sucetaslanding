import React, { useRef } from "react";
import "../css/WhatWeDo.css"; // Ensure the CSS file path is correct
import WebChatbot from "./WebChatbot";
import WhatsAppBot from "./WhatsAppBot";
import CallBot from "./CallBot";
import AnalyticsInsights from "./AnalyticsInsights";
import MediaPage from "./MediaPage";

const DunefoxProduct = () => {
  // Set up refs for each component section
  const webChatbotRef = useRef(null);
  const whatsappBotRef = useRef(null);
  const callBotRef = useRef(null);
  const analyticsInsightsRef = useRef(null);

  // Function to scroll to the selected component
  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dunefox-product-page">
      <div className="dunefox-banner">
        <h1 className="banner-headline">
          Looking to Extend Your Business Reach and Engagement?
        </h1>
        <p className="banner-subtitle">Then it's Time to go AI</p>
      </div>
      <h1 className="main-title"> Dunefox, That's it! </h1>
      <div className="content-section">
        <div className="service-grid">
          <div
            className="service"
            onClick={() => scrollToComponent(webChatbotRef)}
          >
            <i className="fa fa-comments" aria-hidden="true"></i> Web Chatbots
          </div>
          <div
            className="service"
            onClick={() => scrollToComponent(whatsappBotRef)}
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
            Chatbots
          </div>
          <div
            className="service coming-soon"
            onClick={() => scrollToComponent(callBotRef)}
          >
            <i className="fa fa-phone" aria-hidden="true"></i> Call Bot{" "}
            <span className="coming-soon-badge"></span>
          </div>
          <div
            className="service"
            onClick={() => scrollToComponent(analyticsInsightsRef)}
          >
            <i className="fa fa-chart-line" aria-hidden="true"></i> Analytics &
            Insights
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

      {/* Component Sections with Refs */}
      <div ref={webChatbotRef}>
        <WebChatbot />
      </div>
      <div ref={whatsappBotRef}>
        <WhatsAppBot />
      </div>
      <div ref={callBotRef}>
        <CallBot />
      </div>
      <div ref={analyticsInsightsRef}>
        <AnalyticsInsights />
      </div>
    </div>
  );
};

export default DunefoxProduct;
