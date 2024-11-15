import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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

  const services = [
    {
      image: "QA-chatbot-min.jpg",
      title: "Q/A Chatbot for Websites",
      description:
        "Enhance site engagement with our smart Q/A chatbot solutions.",
      link: "/qa-chatbot",
    },
    {
      image: "chatbot-website-min.jpg",
      title: "Chatbot Solutions",
      description: "Transform customer interactions with AI-driven chatbots.",
      link: "/chatbot-solutions",
    },
    {
      image: "whatsapp-appointment-min.jpg",
      title: "Appointment Bookings",
      description:
        "Streamline scheduling with our advanced booking solutions available on WhatsApp.",
      link: "/appointment-bookings",
    },
    {
      image: "product-promotion-min.jpg",
      title: "Product Promotion and Leads",
      description: "Drive sales and generate leads with targeted campaigns.",
      link: "/product-promotion",
    },
    {
      image: "information-awareness-min.jpg",
      title: "Information Awareness and Alerts",
      description: "Keep clients informed with automated alerts and updates.",
      link: "/information-alerts",
    },
    {
      image: "business-analytics-min.jpg",
      title: "Business Analytics",
      description:
        "Leverage data to gain strategic insights and drive informed decision-making.",
      link: "/business-analytics",
    },
    {
      image: "growth-min.jpg",
      title: "Business Growth",
      description: "Insights to fuel your business growth and efficiency.",
      link: "/business-growth",
    },
  ];

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
              <div key={index} className="badge-wrapper">
                <div className="badge">
                  <div className="badge-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="badge-image"
                    />
                  </div>
                  <div className="badge-title">
                    <h3>{service.title}</h3>
                  </div>
                  <div className="badge-description">
                    <p>{service.description}</p>
                  </div>
                  <div className="badge-link">
                    <a href={service.link} className="discover-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

// Custom Previous Arrow
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
};

export default Carousel;
