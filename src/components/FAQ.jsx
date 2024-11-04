import React, { useState } from "react";
import "../css/FAQ.css";

const faqs = [
  {
    question: "What services does Sucetas offer?",
    answer:
      "Sucetas offers AI-driven solutions including web chatbots, WhatsApp bots, and call bots to enhance customer interactions.",
  },
  {
    question: "How can I integrate Sucetas chatbots into my business?",
    answer:
      "Contact our sales team for guidance or sign up through our website and follow the provided setup instructions.",
  },
  {
    question: "What industries does Sucetas cater to?",
    answer:
      "We serve various industries like retail, healthcare, finance, education, and customer service.",
  },
  {
    question: "Are Sucetas bots compliant with data protection regulations?",
    answer:
      "Yes, our bots comply with GDPR and CCPA, ensuring data is handled securely.",
  },
  {
    question: "Can I customize the AI responses from Sucetas bots?",
    answer:
      "Absolutely! Our bots feature a customizable AI engine to tailor responses to your needs.",
  },
  {
    question:
      "What support options are available if I encounter issues with my bots?",
    answer:
      "Sucetas offers 24/7 support through email, live chat, and phone, along with a comprehensive knowledge base.",
  },
  {
    question: "How does the WhatsApp bot differ from the web chatbot?",
    answer:
      "The WhatsApp bot operates within WhatsApp with features like template messages, while the web chatbot is adaptable to any website.",
  },
  {
    question: "What languages are supported by Sucetas bots?",
    answer:
      "Our bots support multiple languages including English, Spanish, French, German, and Mandarin, with more available upon request.",
  },
  {
    question:
      "Can Sucetas bots handle high volumes of user queries simultaneously?",
    answer:
      "Yes, our bots are designed to scale and can handle thousands of interactions simultaneously without any degradation in service.",
  },
  {
    question: "What metrics can I track with Sucetas analytics dashboard?",
    answer:
      "Track metrics like chatbot performance, user engagement, conversion rates, and more to optimize bot performance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm)
  );

  // Split the FAQs into two columns
  const half = Math.ceil(filteredFaqs.length / 2);
  const firstHalfFaqs = filteredFaqs.slice(0, half);
  const secondHalfFaqs = filteredFaqs.slice(half);

  return (
    <div className="faq-container">
      <div className="faq-banner">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services.</p>
        <input
          type="text"
          placeholder="Search FAQs"
          onChange={handleSearchChange}
        />
      </div>
      <div className="faq-columns">
        <div className="faq-left">
          {firstHalfFaqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleIndex(index)}
            >
              <h3>
                {faq.question}
                <span className="dropdown-arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </h3>
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
        <div className="faq-right">
          {secondHalfFaqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleIndex(index + half)}
            >
              <h3>
                {faq.question}
                <span className="dropdown-arrow">
                  {activeIndex === index + half ? "▲" : "▼"}
                </span>
              </h3>
              {activeIndex === index + half && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
