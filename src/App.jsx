import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import Landing from "./components/Landing";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <OurProducts />
      {/* <OurServices /> */}
      <Footer />
    </div>
  );
}

export default App;
