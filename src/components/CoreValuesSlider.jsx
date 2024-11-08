// CoreValuesSlider.jsx
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../css/CoreValuesSlider.css"; // Ensure this path is correct for your project

const coreValues = [
  {
    name: "Innovation",
    description: "Pioneering new solutions with bold creativity.",
  },
  {
    name: "Integrity",
    description: "Upholding the highest standards of honesty and transparency.",
  },
  {
    name: "Collaboration",
    description: "Achieving together what we cannot alone.",
  },
  {
    name: "Excellence",
    description: "Committing to only the best outcomes in all our endeavors.",
  },
  {
    name: "Impact",
    description: "Focused on making a significant positive difference.",
  },
];

const CoreValuesSlider = () => {
  return (
    <div className="core-values-slider">
      <AwesomeSlider>
        {coreValues.map((value, index) => (
          <div key={index} className="slide">
            <h2>{value.name}</h2>
            <p>{value.description}</p>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default CoreValuesSlider;
