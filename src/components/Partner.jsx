import React from "react";
import "../css/Partner.css";

const Partners = () => {
  const partners = [
    { name: "Gemini", logo: "Gemini.png" }, // Local path for Gemini logo
    { name: "Groq", logo: "GroqLogo_Black.svg" }, // Local path for Groq logo
    { name: "OpenAI", logo: "OpenAI.png" }, // Local path for OpenAI logo
    { name: "Meta", logo: "Meta.png" }, // Local path for Meta logo
    {
      name: "AWS",
      logo: "AWS.png",
    },
    { name: "MongoDB", logo: "MongoDB.png" }, // Local path for MongoDB logo
  ];

  return (
    <div className="partners-section">
      <h2 className="partners-title">
        The Technology That Powers and Inspires Us
      </h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo-container">
            {partner.link ? (
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="partner-logo"
                />
              </a>
            ) : (
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="partner-logo"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
