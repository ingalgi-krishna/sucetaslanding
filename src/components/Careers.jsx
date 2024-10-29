import React, { useState } from "react";
import "../css/Careers.css"; // Ensure this path matches your CSS file location

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
    consent: false, // State to handle consent checkbox
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validTypes.includes(file.type)) {
        setFormData((prevState) => ({ ...prevState, resume: file }));
      } else {
        alert("Please upload only PDF or Word documents.");
        e.target.value = null; // Reset the input
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow the drop
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Access files
    if (file) {
      handleFileChange({ target: { files: [file] } }); // Reuse the file change handler
    }
  };

  const handleConsentChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      consent: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the consent to proceed.");
      return;
    }
    console.log(formData);
    alert("Application submitted! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
      consent: false,
    });
  };

  return (
    <div className="careers-container">
      <div className="careers-banner">
        <h1>Embark on Your Journey!</h1>
        <p>
          Delve into a mosaic of opportunities where technology and creativity
          intertwine.
        </p>
      </div>
      <div className="careers-content">
        <div className="careers-text">
          <h2>Join the AI Revolution!</h2>
          <p>
            If you're seeking more than just a routine job—if you aspire to be
            at the forefront of artificial intelligence, pioneering with a team
            that values creativity and ingenuity, you've found your stage. We're
            not just tech enthusiasts; we're visionaries transforming how
            machines learn and interact. Come, be part of shaping the future
            over lively discussions and groundbreaking projects.
          </p>
          <p>
            You can reach us at <span>careers@yourcompany.com</span>
          </p>
        </div>
        <div className="careers-form">
          <h2>Interested to Join Us?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Why would you like to work with us?"
              required
            />
            <div
              className="file-input-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                hidden
              />
              <label htmlFor="resume" className="file-input-label">
                <i className="upload-icon"></i> Upload your Resume
                <p>Drag and drop files here</p>
              </label>
              {formData.resume ? (
                <span className="file-name">{formData.resume.name}</span>
              ) : null}
            </div>
            <div className="consent-checkbox">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={handleConsentChange}
              />
              <label htmlFor="consent">
                By Checking this box, I consent to receive transactional and
                marketing text messages regarding employment opportunities.
              </label>
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
