import React from "react";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Footer from "../sections/Footer";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-28">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
