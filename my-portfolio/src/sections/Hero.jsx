import React from 'react'
import myPic from '../assets/images/myPic.jpeg'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    // Section wrapper
    <section id='home' className='min-h-screen pt-[70px] bg-black text-white flex items-center'>
    
   {/* center container */}
    <div className='max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0'>
        {/* Left-side content */}
    <div className='text-center md:text-left order-2 md:order-1'>
      <p className='text-xs sm:text-sm text-gray-200 mb-2'>Hi, I am <span className='font-bold'>Divyanshu</span></p>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-700 animate-pulse bg-clip-text text-transparent'>Frontend Developer </h1>
      <span className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-200 font-bold leading-tight mb-6 block'>building modern web Experiences</span>
      <p className='text-gray-400 mb-6 sm:mb-8 mt-4 max-w-lg mx-auto md:mx-0 text-sm sm:text-base'> I specialize in React.js and modern UI development, creating fast, responsive and user-friendly web applications.</p>
   
    {/*  Buttons --> Action  */}
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
      <button className='px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#0202617] border border-gray-800 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:translate-y-1 hover:border-cyan-400 transition text-sm sm:text-base'>View Projects</button>
      <button className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-gray-900 border bg-gray-200 font-medium hover:bg-black hover:text-gray-200 transition text-sm sm:text-base">Contact Me</button>
    </div>

    {/* Social media icons ---> */}
    <div className='flex gap-4 mt-6 sm:mt-8 text-xl justify-center md:justify-start'>
      <a href="" className='hover:bg-green-400 rounded-full p-1 transition duration-300'><FaWhatsapp/></a>
      <a href="" className='hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full p-1 transition duration-300'><FaInstagram/></a>
      <a href="" className='hover:bg-[#0a66c2] rounded-full p-1 transition duration-300'><CiLinkedin/></a>
      <a href="" className='hover:bg-[#2b3137] rounded-full p-1 transition duration-300'><FaGithub/></a>
    </div>
    </div>

      {/* Right-side container */}
    <div className='flex justify-center relative order-1 md:order-2 mb-6 md:mb-0'>
      <div className='absolute left-4 sm:left-10 md:left-20 top-0 sm:top-5 md:top-10'>
        <p className='text-xs sm:text-sm backdrop-blur-md px-2 py-1 rounded-lg border border-gray-700 text-gray-200 animate-slow-bounce'>Modern UI</p>
      </div>
      <div className='absolute right-4 sm:right-10 md:right-20 bottom-0 sm:bottom-5 md:bottom-10'>
        <p className='text-xs sm:text-sm backdrop-blur-md px-2 py-1 rounded-lg border border-gray-700 text-gray-200 animate-slow-bounce'>Responsive</p>
      </div>
      <div className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-xl shadow-cyan-500/20 rounded-full bg-white/5 border border-cyan-400/20'>
       <img className='w-full h-full rounded-full object-cover' src={myPic} alt="Divyanshu profile picture" />
      </div>
    </div>
    </div>

    </section>
  )
}

export default Hero
