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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-cyan-400 bg-cyan-500/10"
        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block w-full py-3 px-4 rounded-xl transition-all duration-200 text-sm font-medium ${
      isActive
        ? "text-cyan-400 bg-cyan-500/10"
        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
    }`;

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-[70px] bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold text-gray-100 hover:text-cyan-400 transition-colors"
          >
            Divyanshu<span className="text-cyan-400">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={linkClasses}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <NavLink to="/resume">
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200">
                Resume
              </button>
            </NavLink>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-black border-r border-gray-800 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-8">
              <NavLink
                to="/"
                className="text-xl font-bold text-gray-100"
                onClick={toggleMenu}
              >
                Divyanshu<span className="text-cyan-400">.</span>
              </NavLink>
              <button
                className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
                onClick={toggleMenu}
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      className={mobileLinkClasses}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <NavLink to="/resume" onClick={toggleMenu}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                    Download Resume
                  </button>
                </NavLink>
              </div>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
};

export default Navbar;
