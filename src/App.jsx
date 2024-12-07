import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import MediaPage from "./components/MediaPage";
import Careers from "./components/Careers";
import LetsConnect from "./components/LetsConnect";
import PrivacyPolicy from "./components/Privacy";
import TermsAndConditions from "./components/Terms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/resources/media-room" element={<MediaPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<LetsConnect />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
