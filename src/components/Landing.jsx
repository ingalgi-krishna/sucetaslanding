import React, { useRef } from "react";
import "../css/Landing.css";
import Carousel from "./Carousel";
import GetInTouch from "./LetsConnectHome";
import IntroVideo from "./IntroVideo";
import ChatbotDemo from "./ChatbotDemo";
import SmartphoneDemo from "./SmartphoneDemo";
import FAQ from "./FAQ";
import BlogPreview from "./BlogPreviewHome";
import Partners from "./Partner";
const Landing = () => {
  const carouselRef = useRef(null);

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header className="header">
        <div className="content-wrapper">
          <div className="headline-section">
            <h1 className="headline">
              Revolutionize Your Business <br />
              with <span className="highlight-ai">Intelligent AI</span>{" "}
              Solutions
            </h1>
          </div>

          <div className="subheadline-section">
            <p className="subheadline">
              Drive growth, streamline operations, and enhance customer
              interactions.
              <br />
              Empower your business with cutting-edge AI solutions.
            </p>
            <button className="cta-button" onClick={scrollToCarousel}>
              See what we offer
            </button>
          </div>
        </div>
      </header>
      {/* <IntroVideo /> */}
      {/* <ChatbotDemo /> */}
      {/* <SmartphoneDemo /> */}
      <Carousel />
      <Partners />
      <FAQ />
      <BlogPreview />
      <GetInTouch />
    </div>
  );
};

export default Landing;
