import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-[60px] bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-lg font-bold text-white">
            Divyanshu<span className="text-cyan-400">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-[14px] font-medium transition ${
                    isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                  }`
                }>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Resume Button */}
          <NavLink to="/resume" className="hidden sm:block">
            <button className="px-4 py-2 text-[13px] font-medium text-gray-300 border border-gray-700 rounded hover:border-gray-500 transition">
              Resume
            </button>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-400 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={24}/> : <HiMenu size={24}/>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col items-center justify-center h-full gap-4" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition text-lg">
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/resume" onClick={() => setIsMenuOpen(false)}>
              <button className="mt-4 px-6 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded hover:border-gray-500 transition">
                Resume
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
