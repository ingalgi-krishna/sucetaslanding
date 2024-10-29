import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import OurProducts from "./components/OurProducts";
// import OurServices from "./components/OurServices";
import Landing from "./components/Landing";
import Footer from "./components/Footer"; // Import the Footer component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCarousel from "./components/new";
import OurServices from "./components/OurServices";
import AIPage from "./components/AI";
import Carousel from "./components/Carousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Carousel />
      {/* <OurProducts /> */}
      {/* <OurServices /> */}
      {/* <ServiceCarousel /> */}
      {/* <AIPage /> */}
      <Footer />
    </div>
  );
}

export default App;
