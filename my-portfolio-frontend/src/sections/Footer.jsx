import React from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const footerLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-gray-100 hover:text-cyan-400 transition-colors">
              Divyanshu Chauhan
            </a>
            <p className="text-gray-500 text-sm mt-1">MERN Stack Developer</p>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-3">
           
            <a
              href="https://www.instagram.com/chauhan_divyanshu_000_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-chauhan-bb08a3291/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/Divyanshu-chauhan000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Divyanshu Chauhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
