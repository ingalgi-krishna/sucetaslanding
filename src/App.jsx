import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DunefoxPage from "./components/OurProducts";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import PrivacyPolicy from "./components/Privacy";
import TermsAndConditions from "./components/Terms";
import Careers from "./components/Careers";
import GetInTouch from "./components/GetInTouch";
import AboutUs from "./components/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <DunefoxPage />
        <Carousel />
        <AboutUs />
        <GetInTouch />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
