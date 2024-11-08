import React, { useState } from "react";
import "../css/CoreValues.css"; // Ensure this path is correct

const coreValues = [
  {
    key: "S",
    name: "Synergy",
    description:
      "Fostering a teamwork environment that emphasizes combined efforts and cooperative success.",
  },
  {
    key: "Y",
    name: "Yield to Learning",
    description:
      "Embracing continuous learning and adaptation to stay ahead in technology.",
  },
  {
    key: "N",
    name: "Nimbleness",
    description:
      "Remaining agile and responsive to the ever-changing market demands.",
  },
  {
    key: "A",
    name: "Accountability",
    description:
      "Upholding our commitments and taking responsibility for our actions.",
  },
  {
    key: "P",
    name: "People First",
    description: "Prioritizing the well-being and growth of every team member.",
  },
  {
    key: "S",
    name: "Service Oriented",
    description:
      "Committing to excellence in service delivery and customer satisfaction.",
  },
  {
    key: "E",
    name: "Ethics",
    description:
      "Adhering to the highest ethical standards and integrity in all our actions.",
  },
];

const CoreValuesSynapse = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="synapse-container">
      <div className="synapse-banner">
        <h1>Our Core SYNAPSE Values</h1>
        <p>
          Just as synapses in the brain connect neurons to enable communication,
          our core values connect us to our clients and their business success.
        </p>
      </div>
      <div className="values-grid">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className={`value-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-front">
              <h2>
                {value.key} - {value.name}
              </h2>
            </div>
            <div className="card-back">
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValuesSynapse;
