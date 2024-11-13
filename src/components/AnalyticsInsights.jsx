import React from "react";
import "../css/Product.css";

const AnalyticsInsights = () => {
  return (
    <div className="product-section">
      <h1 className="component-title">
        Drive Smart Decisions with Our Analytics & Insights
      </h1>
      <div className="content-image-row">
        <div className="content">
          <h2>Why Use Analytics & Insights</h2>
          <p>
            Our Analytics and Insights platform combines the power of Next.js
            and MongoDB with advanced data visualization to help businesses
            understand their data, identify trends, and make informed decisions.
          </p>
        </div>
        <div className="image">
          <img src="analytics_image.jpg" alt="Analytics and Insights" />
        </div>
      </div>

      {/* Section 2: How It Works */}
      <div className="content-image-row alternate">
        <div className="image">
          <img src="data_visualization_image.jpg" alt="Data Visualization" />
        </div>
        <div className="content">
          <h2>How It Works</h2>
          <p>
            Built with a robust Next.js and MongoDB stack, our analytics
            platform allows businesses to visualize and interpret their data.
            This platform simplifies data-driven decision-making by presenting
            actionable insights directly derived from real-time data.
          </p>
        </div>
      </div>

      {/* Section 3: Performance Metrics */}
      <div className="metrics-section">
        <h2>Performance Metrics</h2>
        <div className="metrics-card-container">
          <div className="metric-card">
            <p>92%</p>
            <span>Customer Satisfaction</span>
          </div>
          <div className="metric-card">
            <p>85%</p>
            <span>Faster Report Generation</span>
          </div>
          <div className="metric-card">
            <p>80%</p>
            <span>Data-driven Decision Increase</span>
          </div>
          <div className="metric-card">
            <p>50%</p>
            <span>Reduction in Report Errors</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsInsights;
