import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCarousel from "./components/new";
import AIPage from "./components/AI";
import Carousel from "./components/Carousel";
import PrivacyPolicy from "./components/Privacy";
import TermsAndConditions from "./components/Terms";
import Careers from "./components/Careers";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/careers" element={<Careers />} />

          {/* Uncomment the following lines if these components are ready and need to be routed */}
          {/* <Route path="/our-products" element={<OurProducts />} /> */}
          {/* <Route path="/our-services" element={<OurServices />} /> */}
          {/* <Route path="/ai-page" element={<AIPage />} /> */}
          {/* <Route path="/service-carousel" element={<ServiceCarousel />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
