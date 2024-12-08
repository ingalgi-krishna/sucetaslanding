import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CarouselArrows";
import ServiceCard from "./ServiceCard";
import { services } from "./Services";
import "../css/Carousel.css";

const Carousel = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
      useCSS: true,
      useTransform: true,
      lazyLoad: "progressive",
      swipeToSlide: true,
      touchThreshold: 10,
      waitForAnimate: false,
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
    }),
    []
  );

  return (
    <div className="carousel-container">
      <h1 className="services-title">
        Seeking Business Growth? Discover the Insights That Drive Success.
      </h1>
      <div className="solutions">
        <div className="left-pane">
          <h2>Explore Our Solutions</h2>
          <p>
            Empowering businesses through innovative technology solutions from
            AI to data analytics.
          </p>
          <button className="explore-button">Discover all our services</button>
        </div>
        <div className="right-pane">
          <Slider {...settings}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Carousel);
