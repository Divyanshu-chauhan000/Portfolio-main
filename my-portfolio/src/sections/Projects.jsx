import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import edubridge from "../assets/images/edubridge.png";
import personalPortfolio from "../assets/images/PersonalPortfolio.png";
import portfoliogenerator from "../assets/images/portfoliogenerator.png";
import sprinkler from "../assets/images/sprinkler.png"

const projects = [
  {
    title: "Edugram-Student Social Media Plateform",
    description:
    "A social media platform designed for students to share posts, connect with peers, and interact in an academic-focused environment. Built using React.js with basic backend integration.",
    tech:[
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    ],
    link:"#",
    image:edubridge
  }, 
  {
    title: "PortFolio - Generator",
    description:
    "A React-based portfolio generator that allows users to quickly create a personal portfolio using reusable components and dynamic data handling.",
    tech:[
    "React.js",
    "JavaScript",
    ],
    link:"#",
    image:portfoliogenerator,
  }, 
  {
    title: "Landing Page",
    description:
    "Responsive and modern landing pages built using HTML and CSS with a focus on layout, typography, and clean UI.",
    tech: ["HTML", "CSS"],
    link: "#",
    image:sprinkler,
  }, 
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website showcasing projects and skills, built using React.js and Tailwind CSS with a modern design.",
    tech: ["React.js", "Tailwind CSS"],
    link: "#",
    image:personalPortfolio,
  }, 
]


const Projects = () => {
  return (
    //Section Wrapper
   <section id='projects' className='relative py-12 sm:py-16 md:py-24 bg-black'>
     <div className='max-w-6xl mx-auto px-4 sm:px-6'>
         {/* Section ki heading ---> */}
         <div className='text-center mb-8 sm:mb-12 md:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent font-bold mb-3 sm:mb-4'>Projects</h2>
            <p className='text-gray-200 max-w-2xl mx-auto text-sm sm:text-base px-4'>
            Real-world projects demonstrating my frontend skills along with basic backend integration.
            </p>
         </div>
         {/* Projects:---- */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {projects.map((project, index)=>(
            <div key={index} className='group flex flex-col h-full rounded-2xl bg-[#020617] border border-gray-500 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300'>
              {/* project preview k liy  imaage lgani ha baad me  */}
              <div className='h-36 sm:h-40 md:h-44 rounded-t-2xl w-full overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
              </div>
              {/* Project ka content: - */}
              <div className='p-4 sm:p-5 md:p-6 flex flex-col h-full'>
                  <h3 className='text-base sm:text-lg md:text-xl font-semibold text-gray-200 mb-2'>{project.title}</h3>
                  <p className='text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed'>{project.description}</p>
                  {/* technology used are  */}
                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5'>
                          {project.tech.map((items , idx) =>(
                            <span key={idx} className='text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700'>{items}</span>
          ))}
                  </div>
                  {/* Links bhi to provide krni ha  */}
                  <a href={project.link} className='mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-500 hover:underline'>View Projects <FiArrowUpRight className='text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1'/> </a>
              </div>
            </div>

          ))}
         </div>
     </div>
   </section>
  )
}

export default Projects;
