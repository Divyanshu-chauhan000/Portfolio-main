import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-28">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
