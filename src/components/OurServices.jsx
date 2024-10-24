import React from "react";
import "../css/OurServices.css"; // Ensure you have the CSS for Our Services section

const OurServices = () => {
  // Array of services with their details and background images
  const services = [
    {
      image: "chatbot.jpg",
      title: "Chatbot Solutions",
      description:
        "Transform your customer interactions with our AI-powered chatbot solutions. Automate responses, increase engagement, and provide 24/7 support without increasing your workforce.",
    },
    {
      image: "businessanalytics.avif",
      title: "Business Analytics",
      description:
        "Leverage advanced data analytics to drive actionable insights and enhance decision-making. Our tools help you understand market trends, customer behavior, and operational efficiency.",
    },
    {
      image: "businessgrowth.jpg",
      title: "Business Growth",
      description:
        "Accelerate your business growth with our tailored strategies and solutions. From market expansion to increasing operational efficiency, we cover all aspects to ensure sustainable growth.",
    },
    {
      image: "appointment.jpg",
      title: "Appointment Bookings",
      description:
        "Enhance your service accessibility with our seamless appointment booking solutions. Ideal for medical practices, service centers, and consultation businesses, ensuring a smooth scheduling experience.",
    },
    {
      image: "salespromotion.jpg",
      title: "Product Promotion and Leads",
      description:
        "Boost your sales through targeted product promotions and lead generation campaigns designed to attract and convert prospects into loyal customers.",
    },
    {
      image: "informationalerts.jpg",
      title: "Information Awareness and Alerts",
      description:
        "Keep your stakeholders informed with real-time alerts and updates. Our systems ensure that critical information is communicated efficiently to maintain high levels of awareness.",
    },
  ];

  return (
    <section className="services-section">
      <h3>Our Services</h3>
      <div className="service-badges">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-badge"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <button className="know-more-btn">Know more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
