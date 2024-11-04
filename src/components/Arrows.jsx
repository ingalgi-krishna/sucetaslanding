import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button className="slick-prev" onClick={onClick}>
      Previous
    </button>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button className="slick-next" onClick={onClick}>
      Next
    </button>
  );
};

// Main Carousel Component
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img src="path/to/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="path/to/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="path/to/image3.jpg" alt="Image 3" />
        </div>
        {/* Add more slides as necessary */}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
