import React, { useState } from 'react'
import {HiMenu , HiX} from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='flex items-center bg-black/90 backdrop-blur-sm border-b border-cyan-700 shadow-lg shadow-cyan-500/20 fixed top-0 left-0 h-[70px] w-full z-50'>
         <div className='w-full px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-between'>
            <div className='text-lg sm:text-xl text-gray-200 font-bold tracking-wide transition-colors'>
            <a href="#">Divyanshu</a>
            </div>
         
         {/* Desktop Menu */}
         <div className='hidden md:block'>
           <ul className='flex items-center gap-4 lg:gap-6 text-sm font-medium text-white'>
            <li className='home cursor-pointer shadow-lg py-1 px-3 lg:px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20'>Home</li>
            <li className='home cursor-pointer shadow-lg py-2 px-3 lg:px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>About</li>
            <li className='home cursor-pointer shadow-lg py-2 px-3 lg:px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Skills</li>
            <li className='home cursor-pointer shadow-lg py-2 px-3 lg:px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Projects</li>
            <li className='home cursor-pointer shadow-lg py-2 px-3 lg:px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Contact</li>
           </ul>
         </div>

         {/* Resume Button & Mobile Menu Toggle */}
         <div className='flex items-center gap-2 sm:gap-4'>
               <button className='hidden sm:block text-gray-200 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-gray-600 hover:border-cyan-400 hover:text-white hover:shadow-cyan-500/20 transition-all'>Resume</button>
               
               {/* Mobile Menu Button */}
               <button 
                 className='md:hidden text-gray-200 text-2xl p-2'
                 onClick={toggleMenu}
               >
                 {isMenuOpen ? <HiX /> : <HiMenu />}
               </button>
         </div>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
           <div className='md:hidden absolute top-[70px] left-0 w-full bg-black/95 backdrop-blur-sm border-b border-cyan-700'>
             <ul className='flex flex-col items-center gap-4 py-6 text-sm font-medium text-white'>
               <li className='cursor-pointer py-2 px-4 text-gray-200 hover:text-cyan-400 transition-colors'><a href="#home" onClick={toggleMenu}>Home</a></li>
               <li className='cursor-pointer py-2 px-4 text-gray-200 hover:text-cyan-400 transition-colors'><a href="#about" onClick={toggleMenu}>About</a></li>
               <li className='cursor-pointer py-2 px-4 text-gray-200 hover:text-cyan-400 transition-colors'><a href="#skills" onClick={toggleMenu}>Skills</a></li>
               <li className='cursor-pointer py-2 px-4 text-gray-200 hover:text-cyan-400 transition-colors'><a href="#projects" onClick={toggleMenu}>Projects</a></li>
               <li className='cursor-pointer py-2 px-4 text-gray-200 hover:text-cyan-400 transition-colors'><a href="#contact" onClick={toggleMenu}>Contact</a></li>
               <li className='sm:hidden'>
                 <button className='text-gray-200 px-5 py-2 rounded-full text-sm font-semibold border border-gray-600 hover:border-cyan-400 transition-all'>Resume</button>
               </li>
             </ul>
           </div>
         )}
      </nav>
    </div>
  )
}

export default Navbar
