import React from "react";
import Navbar from "../components/Navbar";
import Skills from "../sections/Skills";
import Footer from "../sections/Footer";

const SkillsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-28">
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
