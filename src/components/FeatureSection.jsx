import React from "react";
import "../css/OurProducts.css"; // Ensure you link to your updated CSS file

const FeatureSection = ({
  title,
  description,
  image,
  altText,
  overlayPosition,
  comingSoon,
  briefDescription,
  link,
}) => {
  return (
    <div
      className={`dunefox-section ${overlayPosition} ${
        comingSoon ? "coming-soon" : ""
      }`}
    >
      <div className="dunefox-content">
        <div className="text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="brief-description">{briefDescription}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Explore
          </a>
        </div>
        <div className="image-content">
          <img src={image} alt={altText} className="feature-image" />
          {comingSoon && <div className="coming-soon-badge">Coming Soon</div>}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
