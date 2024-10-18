import React from "react";
import "../css/OurServices.css"; // Ensure you have the CSS for Our Services section

const OurServices = () => {
  return (
    <section className="services-section">
      <h3>Our Services</h3>
      <div className="service-badges">
        <div
          className="service-badge"
          style={{ backgroundImage: "url('chatbota.jpg')" }}
        >
          <h4>Chatbot Solutions</h4>
          <p>
            Transform your customer interactions with AI-powered chatbot
            solutions.
          </p>
        </div>
        <div
          className="service-badge"
          style={{ backgroundImage: "url('businessanalyticsa.avif')" }}
        >
          <h4>Business Analytics</h4>
          <p>
            Leverage data analytics to drive actionable insights for your
            business.
          </p>
        </div>
        <div
          className="service-badge"
          style={{ backgroundImage: "url('businessgrowtha.jpg')" }}
        >
          <h4>Business Growth</h4>
          <p>
            Achieve measurable business growth with innovative strategies and
            solutions.
          </p>
        </div>
        <div
          className="service-badge"
          style={{ backgroundImage: "url('appointmenta.jpg')" }}
        >
          <h4>Appointment Bookings</h4>
          <p>
            Simplify your scheduling process with our appointment booking
            solutions.
          </p>
        </div>
        <div
          className="service-badge"
          style={{ backgroundImage: "url('invoicea.jpg')" }}
        >
          <h4>Quotations</h4>
          <p>
            Generate and manage quotes efficiently with our advanced quotation
            tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
