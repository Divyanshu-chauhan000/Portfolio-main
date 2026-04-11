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
    `block py-2 px-3 lg:px-4 rounded-full transition-all duration-200 font-medium ${
      isActive
        ? "text-cyan-300 border border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
        : "text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block w-full py-3 px-4 rounded-xl transition-all duration-200 text-sm font-medium ${
      isActive
        ? "text-cyan-300 bg-cyan-500/10 border border-cyan-400"
        : "text-gray-200 hover:text-cyan-300 hover:bg-white/5"
    }`;

  return (
    <div>
      <nav className="flex items-center bg-black/90 backdrop-blur-sm border-b border-cyan-700 shadow-lg shadow-cyan-500/20 fixed top-0 left-0 h-[70px] w-full z-50">
        <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-lg sm:text-xl text-gray-200 font-bold tracking-wide transition-colors">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-300" : "text-gray-200"
              }
            >
              Divyanshu
            </NavLink>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-3 lg:gap-4 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.name} className="shadow-lg rounded-full">
                  <NavLink to={item.to} className={linkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <NavLink to="/resume">
              <button  className="hidden sm:block text-gray-200 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-gray-600 hover:border-cyan-400 hover:text-white hover:shadow-cyan-500/20 transition-all">
              Resume
            </button>
            </NavLink>
            <button
              className="md:hidden text-gray-200 text-2xl p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={toggleMenu}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 max-w-full bg-black/95 border-r border-cyan-700 shadow-2xl backdrop-blur-sm p-6 pt-8">
            <div className="flex items-center justify-between mb-8">
              <NavLink
                to="/"
                className="text-xl font-bold tracking-wide text-gray-100"
                onClick={toggleMenu}
              >
                Divyanshu
              </NavLink>
              <button
                className="text-gray-200 text-2xl p-2"
                onClick={toggleMenu}
              >
                <HiX />
              </button>
            </div>
            <nav>
              <ul className="space-y-3">
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
            </nav>
          </aside>
        </>
      )}
    </div>
  );
};

export default Navbar;
