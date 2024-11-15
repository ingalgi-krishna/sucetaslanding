import React, { useState } from "react";
import "../css/LetsConnect.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(null); // To display status messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Clear the form after success
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error sending message. Please check your connection.");
    }
  };

  return (
    <div className="get-in-touch-container">
      <h2 className="title">
        Ready to reach out? Drop us a line and let’s start something great
        together.
      </h2>
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
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
        <div className="contact-info">
          <h2>Connect With Us</h2>
          <p>Explore collaboration or just say hello:</p>
          <div className="info-section">
            <h3>New Projects</h3>
            <a href="mailto:contact@sucetastech.com">contact@sucetastech.com</a>
          </div>
          <div className="info-section">
            <h3>Support</h3>
            <a href="mailto:support@sucetastech.com">support@sucetastech.com</a>
          </div>
          <div className="info-section">
            <h3>Career Opportunities</h3>
            <a href="mailto:careers@sucetastech.com">careers@sucetastech.com</a>
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
