import React, { useState } from "react";
import "../css/WhoWeAre.css"; // Make sure the path to your CSS file is correct

const coreValues = [
  {
    name: "Synergy",
    description: "Combining diverse strengths to achieve common goals.",
  },
  {
    name: "Yield to Learning",
    description: "Embracing continuous improvement and innovation.",
  },
  {
    name: "Nimbleness",
    description: "Adapting swiftly to new challenges and changing markets.",
  },
  {
    name: "Accountability",
    description: "Taking responsibility for our actions and outcomes.",
  },
  {
    name: "People First",
    description: "Prioritizing team welfare and a supportive work environment.",
  },
  {
    name: "Service Oriented",
    description: "Committed to excellence in serving our clients.",
  },
  {
    name: "Ethics",
    description: "Upholding the highest standards of integrity.",
  },
];

const WhoWeAre = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="who-we-are-container">
      <div className="who-we-are-banner">
        <h1>Meet Our Team</h1>
        <p>"Empowering change with innovative technology solutions."</p>
      </div>
      <div className="vision-section">
        <img
          src="directors.jpg"
          alt="Leadership Team"
          className="leadership-image"
        />
        <p className="vision-quote">
          "Leading with integrity and innovation in the AI industry."
        </p>
      </div>
      <div className="core-values">
        <h2>Our Synapse of Values</h2>
        <div className="carousel-container">
          {coreValues.map((value, index) => (
            <animated.div
              key={index}
              style={props}
              onClick={() => setActiveIndex(index)}
              className={`value-item ${index === activeIndex ? "active" : ""}`}
            >
              <h3>{value.name}</h3>
              {index === activeIndex && <p>{value.description}</p>}
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
