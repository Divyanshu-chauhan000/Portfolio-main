import React from 'react'
import myPic from '../assets/images/myPic.jpeg'
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id='home' className='min-h-screen pt-[70px] bg-black text-white flex items-center'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0'>
        {/* Left-side content */}
        <div className='text-center md:text-left order-2 md:order-1'>
          <p className='text-sm text-gray-400 mb-3'>Hi, I'm</p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-2'>
            Divyanshu <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Chauhan</span>
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-6'>MERN Stack Developer</p>
          <p className='text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed'>
            Building scalable web applications and cross-platform mobile apps with clean architecture and modern technologies. Integrating AI-powered features to enhance user experience.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
            <NavLink to="/projects">
              <button className='px-6 sm:px-8 py-3 rounded-xl bg-[#020617] border border-gray-700 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base'>
                View Projects
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className='px-6 sm:px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm sm:text-base'>
                Contact Me
              </button>
            </NavLink>
          </div>

          {/* Social media icons */}
          <div className='flex gap-4 mt-8 text-lg justify-center md:justify-start'>
            <a href="https://wa.me/919720619887" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-all duration-300'>
              <FaWhatsapp/>
            </a>
            <a href="https://instagram.com/divyanshu_chauhan_0" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300'>
              <FaInstagram/>
            </a>
            <a href="https://linkedin.com/in/divyanshu-chauhan000" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300'>
              <CiLinkedin/>
            </a>
            <a href="https://github.com/Divyanshu-chauhan000" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300'>
              <FaGithub/>
            </a>
          </div>
        </div>

        {/* Right-side container */}
        <div className='flex justify-center relative order-1 md:order-2'>
          <div className='w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-1 shadow-2xl shadow-cyan-500/10'>
            <img className='w-full h-full rounded-full object-cover' src={myPic} alt="Divyanshu profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
