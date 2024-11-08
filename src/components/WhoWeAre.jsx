import React, { useState } from "react";
import "../css/WhoWeAre.css"; // Ensure this path is correct

const WhoWeAre = () => {
  const [activeValue, setActiveValue] = useState(null);

  const toggleValue = (index) => {
    setActiveValue(activeValue === index ? null : index);
  };

  const coreValues = [
    {
      name: "Synergy",
      description: "Combining diverse talents to achieve greater goals.",
      imageUrl: "synergy.jpg",
    },
    {
      name: "Yield to Learning",
      description: "Embracing continuous improvement and innovation.",
      imageUrl: "learning.jpg",
    },
    {
      name: "Nimbleness",
      description: "Quickly and efficiently adapting to change.",
      imageUrl: "nimbleness.jpg",
    },
    {
      name: "Accountability",
      description:
        "Upholding our commitments and taking responsibility for our actions.",
      imageUrl: "accountability.jpg",
    },
    {
      name: "People First",
      description:
        "Prioritizing the well-being and growth of every team member.",
      imageUrl: "people-first.jpg",
    },
    {
      name: "Service Orientation",
      description: "Dedication to customer satisfaction and excellence.",
      imageUrl: "service-orient.jpg",
    },
    {
      name: "Ethics",
      description:
        "Maintaining the highest standards of integrity in everything we do.",
      imageUrl: "ethics.jpg",
    },
  ];

  return (
    <div className="who-we-are-container">
      <div className="banner">
        <h1>Empowering Innovation</h1>
        <p>Leading the Future with Technology and Vision</p>
      </div>
      <div className="directors-section">
        <div
          className="directors-photo"
          style={{ backgroundImage: "url(directors.jpg)" }}
        >
          <div className="photo-overlay">
            <div className="overlay-text">
              <h3>Here's Our Team of Founders</h3>
              <p>
                "At Sucetas, we are committed to redefining industry standards
                through pioneering AI solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="core-values">
        <h2>Our Synapse Core Values</h2>
        <p>
          Just like synapses in the brain create connections, our core values
          connect us to our clients and their needs.
        </p>
        {coreValues.map((value, index) => (
          <div key={index} className="value-entry">
            <div className="value-title" onClick={() => toggleValue(index)}>
              {value.name}
              <span className="toggle-icon">
                {activeValue === index ? "-" : "+"}
              </span>
            </div>
            {activeValue === index && (
              <div className="value-details">
                <p className="value-description">{value.description}</p>
                <img
                  src={value.imageUrl}
                  alt={value.name}
                  className="value-image"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
