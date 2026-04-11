import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-28">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
