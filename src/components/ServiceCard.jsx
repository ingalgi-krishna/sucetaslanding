import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ image, title, description, link }) => (
  <div className="badge-wrapper">
    <div className="badge">
      <div className="badge-image-container">
        <img src={image} alt={title} className="badge-image" loading="lazy" />
      </div>
      <div className="badge-title">
        <h3>{title}</h3>
      </div>
      <div className="badge-description">
        <p>{description}</p>
      </div>
      <div className="badge-link">
        <a href={link} className="discover-link">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(ServiceCard);
