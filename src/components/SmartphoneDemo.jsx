import React from "react";
import "../css/SmartphoneDemo.css"; // Ensure this path is correct

const SmartphoneDemo = () => {
  return (
    <div className="smartphone-demo-container">
      <div className="smartphone-content">
        <div className="smartphone-info">
          <h2>Interactive Chatbot Demo</h2>
          <p>
            Dive into the future of customer engagement with our advanced AI
            chatbot. Experience real-time interactions on your mobile device and
            see how it can transform your customer service operations.
          </p>
          <button onClick={() => alert("Demo launching soon!")}>
            Try the Demo
          </button>
        </div>
        <div className="smartphone-frame">
          <div className="iphone-frame">
            <video
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            >
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneDemo;
