import React from "react";
import Landing from "./Landing";
import OurProducts from "./OurProducts";
import OurServices from "./OurServices";
import "../css/LandingPage.css"; // Ensure you have any overall styling here

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Landing />
      <OurProducts />
      <OurServices />
    </div>
  );
};

export default LandingPage;
