import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import {  SiC, SiCplusplus } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  {
    tech:"JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    tech:"React.Js",
    icon: <FaReact/> ,
  },
  {
    tech:"Node.Js",
    icon: <FaNodeJs /> ,
  },
  {
    tech:"MongoDB",
    icon: <SiMongodb />,
  },
  {
    tech:"C++",
    icon: <SiCplusplus/> ,
  },
  {
    tech:"C",
    icon: <SiC/> ,
  },
  {
    tech:"Python",
    icon: <FaPython/> ,
  },
  {
    tech:"Github",
    icon: <FaGithub/> ,
  },
  
   
];

const Skills = () => {
  return (
   <section id='skills' className='py-12 sm:py-16 md:py-20 bg-black relative' >
    <div className='max-w-6xl mx-auto px-4 sm:px-6'>
      {/* Heading --->  */}
      <div className='text-center mb-8 sm:mb-10 md:mb-14'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>My Skills</h2>
        <p className='text-gray-200 mt-2 sm:mt-3 text-sm sm:text-base'>Technologies I work with</p>
      </div>

      {/* Skills add krni ha  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4'>
          {skills.map((skill , index )=>(
            <div key={index} className='group bg-[#020617] gap-2 sm:gap-4 border cursor-pointer border-gray-800 rounded-xl py-4 sm:py-6 px-3 sm:px-4 flex items-center justify-center text-gray-200 shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300'>
              <span className='font-medium tracking-wide text-sm sm:text-base'>{skill.tech}</span>
              <span className='text-xl sm:text-2xl text-cyan-400 group-hover:scale-110 transition'>{skill.icon}</span>
            </div>
          ))}
        </div>
    </div>
   </section>
  )
}

export default Skills
