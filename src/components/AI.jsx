import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/AI.css"; // Ensure this matches the path of your CSS file

const settings = {
  dots: true, // Shows pagination dots at the bottom of the carousel
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const AIPage = () => {
  const articles = [
    {
      imageUrl: "path/to/image1.jpg",
      title: "Consulting Giants Team With NVIDIA for the Era of AI",
      description:
        "IT giants creating jobs, training over half a million developers to transform India into the IT front office.",
    },
    {
      imageUrl: "path/to/image2.jpg",
      title: "Build Smarter AI Virtual Assistants for Customer Service",
      description:
        "Use an NVIDIA NIM™ Agent Blueprint to transform customer service across every industry.",
    },
    // Additional articles...
  ];

  return (
    <div className="ai-page">
      <div className="left-pane">
        <h1>Artificial Intelligence</h1>
        <p>
          AI is powering change in every industry. From generative AI and speech
          recognition to medical imaging and improved supply chain management,
          AI is providing enterprises the compute power, tools, and algorithms
          their teams need to do their life's work.
        </p>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Data Analytics</a>
            </li>
            <li>
              <a href="#">Machine Learning</a>
            </li>
            <li>
              <a href="#">Predictive Analytics</a>
            </li>
            {/* Additional links */}
          </ul>
        </div>
      </div>
      <div className="right-pane">
        <Slider {...settings}>
          {articles.map((article, index) => (
            <div key={index} className="slide">
              <img src={article.imageUrl} alt={article.title} />
              <div className="slide-info">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AIPage;
