import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel.css";

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 badges per slide
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      {/* Static Left Pane */}
      <div className="left-pane">
        <h1>Advancing Enterprise AI</h1>
        <p>AI Platforms from Cloud to Edge to Endpoints</p>
        <button className="explore-button">Explore AI Solutions</button>
      </div>

      {/* Right Carousel Pane */}
      <div className="right-pane">
        <Slider {...settings}>
          {/* Wrapper for each badge */}
          <div className="badge-wrapper">
            <div className="badge">
              <img
                src="https://via.placeholder.com/150"
                alt="Badge 1"
                className="badge-image"
              />
              <div className="badge-content">
                <h3>AMD EPYC</h3>
                <p>Performance and Efficiency for Enterprise AI</p>
                <a href="/" className="discover-link">
                  Discover EPYC
                </a>
              </div>
            </div>
          </div>

          <div className="badge-wrapper">
            <div className="badge">
              <img
                src="https://via.placeholder.com/150"
                alt="Badge 2"
                className="badge-image"
              />
              <div className="badge-content">
                <h3>AMD Instinct</h3>
                <p>Leadership Inference Performance</p>
                <a href="/" className="discover-link">
                  Discover Instinct
                </a>
              </div>
            </div>
          </div>

          <div className="badge-wrapper">
            <div className="badge">
              <img
                src="https://via.placeholder.com/150"
                alt="Badge 3"
                className="badge-image"
              />
              <div className="badge-content">
                <h3>AMD Pensando</h3>
                <p>Revolutionize Your AI Infrastructure</p>
                <a href="/" className="discover-link">
                  Discover Pensando
                </a>
              </div>
            </div>
          </div>

          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "50px",
        zIndex: 1,
        padding: "10px",
      }}
      onClick={onClick}
    />
  );
};

// Custom Previous Arrow
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-30px",
        zIndex: 1,
        padding: "10px",
      }}
      onClick={onClick}
    />
  );
};

export default App;
