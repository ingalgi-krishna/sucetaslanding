import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar is at the top */}
      <LandingPage /> {/* The landing page content */}
      <Footer /> {/* Footer is at the bottom */}
    </div>
  );
}

export default App;
