import React, { useState } from "react";
import "../css/LetsConnect.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="get-in-touch-container">
      <h1>
        Ready to reach out? Drop us a line and let’s start something great
        together.
      </h1>{" "}
      <div className="contact">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            We’re eager to hear from you. Let us know how we can collaborate.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Connect With Us</h2>
          <p>Explore collaboration or just say hello:</p>
          <div className="info-section">
            <h3>New Projects</h3>
            <a href="mailto:contact@sucetas.com">contact@sucetas.com</a>
          </div>
          <div className="info-section">
            <h3>Support</h3>
            <a href="mailto:support@sucetas.com">support@sucetas.com</a>
          </div>
          <div className="info-section">
            <h3>Career Opportunities</h3>
            <a href="mailto:careers@sucetas.com">careers@sucetas.com</a>
          </div>
          <div className="info-section">
            <h3>Call Us</h3>
            <a href="tel:+91 8329687438">+91 83296 87438</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
