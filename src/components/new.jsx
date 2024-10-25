import React from "react";
import Slider from "react-slick";
import "../css/new.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const ProductBadge = ({ name, description, link, imageUrl }) => (
  <div className="product-badge">
    <img src={imageUrl} alt={name} className="product-image" />
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link}>Discover More</a>
  </div>
);

const ProductCarousel = () => (
  <Slider {...settings}>
    <ProductBadge
      name="AMD ROCm"
      description="Advance AI Development with AMD ROCm Software"
      link="#rocm"
      imageUrl="dunefox.jpg"
    />
    <ProductBadge
      name="AMD EPYC"
      description="Performance and Efficiency for Enterprise AI"
      link="#epyc"
      imageUrl="dunefox.jpg"
    />
    <ProductBadge
      name="AMD Instinct"
      description="Leadership Inference Performance"
      link="#instinct"
      imageUrl="dunefox.jpg"
    />
    <ProductBadge
      name="AMD ROCm"
      description="Advance AI Development with AMD ROCm Software"
      link="#rocm"
      imageUrl="dunefox.jpg"
    />
    <ProductBadge
      name="AMD EPYC"
      description="Performance and Efficiency for Enterprise AI"
      link="#epyc"
      imageUrl="dunefox.jpg"
    />
    <ProductBadge
      name="AMD Instinct"
      description="Leadership Inference Performance"
      link="#instinct"
      imageUrl="dunefox.jpg"
    />
    {/* Add more badges with images as needed */}
  </Slider>
);

const App = () => (
  <div className="app-container" style={{ display: "flex", width: "100%" }}>
    <div className="text-section" style={{ width: "40%" }}>
      <h1>Advancing Enterprise AI</h1>
      <p>AI Platforms from Cloud to Edge to Endpoints</p>
      <button>Explore AI Solutions</button>
    </div>
    <div className="carousel-section" style={{ width: "60%" }}>
      <ProductCarousel />
    </div>
  </div>
);

export default App;
