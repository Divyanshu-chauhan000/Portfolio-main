import React from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";

const Footer = () => {
  const [link, setLink] = useState([
    {
      item: "Home",
    },
    {
      item: "About",
    },
    {
      item: "Skills",
    },
    {
      item: "Projects",
    },
    {
      item: "Contact",
    },
  ]);

  return (
    <section id="footer" className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Left section */}
        <div className="text-gray-200 text-center md:text-left">
          <a href="#">
            <h1 className="text-lg sm:text-xl font-bold">Divyanshu</h1>
          </a>
          <p className="py-2 sm:py-4 text-sm sm:text-base">Crafting clean, scalable web experiences</p>
        </div>
        {/* Right section */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-around items-center gap-4 sm:gap-6">
          {/* footer-links */}

          <div className="text-white gap-3 sm:gap-4 flex flex-wrap justify-center text-sm sm:text-base">
            {link.map((val, index) => (
              <a href={`#${val.item.toLowerCase()}`} key={index} className="hover:text-cyan-400 transition">{val.item}</a>
            ))}
          </div>

          {/* footer social media links */}

          <div className="flex gap-3 sm:gap-4 text-gray-200 text-lg sm:text-xl">
            <a
              href=""
              className="hover:bg-green-400 rounded-full p-1 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href=""
              className="hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full p-1 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="hover:bg-[#0a66c2] rounded-full p-1 transition duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href=""
              className="hover:bg-[#2b3137] rounded-full p-1 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
