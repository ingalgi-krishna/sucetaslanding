import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/new.css"; // Ensure the CSS path is correct

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Displays three badges per slide
  slidesToScroll: 3, // Scrolls three badges at a time
  arrows: true, // Enable navigation arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const ServiceCarousel = () => {
  const services = [
    {
      imageUrl: "dunefox.jpg",
      title: "Global Auto Partners Showcase the Future of AI",
      description:
        "Leading automotive partners are adopting our next-generation AI technologies for their vehicles.",
    },
    {
      imageUrl: "path/to/background.jpg",
      title: "NVIDIA DRIVE Thor Power the Future of Transportation",
      description:
        "Leading companies across the transportation industry count on our technology to advance their vehicles.",
    },
    {
      imageUrl: "path/to/dunefox.jpg",
      title: "Innovative Solutions in Autonomous Driving",
      description:
        "Explore cutting-edge solutions that redefine the future of autonomous vehicle technology.",
    },
    // Additional services...
  ];

  return (
    <div className="services-page">
      <div className="service-details">
        <h1>Automotive</h1>
        <p>
          NVIDIA DRIVE® is an end-to-end platform for the development and
          deployment of software-defined autonomous vehicles.
        </p>
      </div>
      <div className="service-carousel">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-slide">
              <div className="service-badge">
                <img src={service.imageUrl} alt={service.title} />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#!" className="know-more-btn">
                    Know more &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceCarousel;
