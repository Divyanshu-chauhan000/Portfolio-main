import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import recipeApp from '../assets/images/recipeFrame.png'
import guruAi from '../assets/images/guruAI.jpg'
import personalPortfolio from "../assets/images/PersonalPortfolio.png";
import portfoliogenerator from "../assets/images/portfoliogenerator.png";
import sprinkler from "../assets/images/sprinkler.png";

const projects = [
  // {
  //   title: "Edugram-Student Social Media Plateform",
  //   description:
  //   "A social media platform designed for students to share posts, connect with peers, and interact in an academic-focused environment. Built using React.js with basic backend integration.",
  //   tech:[
  //   "React.js",
  //   "JavaScript",
  //   "Node.js",
  //   "Express.js",
  //   "MongoDB",
  //   "REST APIs",
  //   ],
  //   link:"#",
  //   image:edubridge
  // },
  {
    title: "PortFolio - Generator",
    description:
      "A React-based portfolio generator that allows users to quickly create a personal portfolio using reusable components and dynamic data handling.",
    tech: ["React.js", "JavaScript"],
    LiveDemo: "https://port-folio-generator.vercel.app/",
    Github : "https://github.com/Divyanshu-chauhan000/PortFolio_Generator",
    image: portfoliogenerator,
  },
  {
    title: "Landing Page",
    description:
      "Responsive and modern landing pages built using HTML and CSS with a focus on layout, typography, and clean UI.",
    tech: ["HTML", "CSS"],
    LiveDemo: "https://holiday-project-pi.vercel.app/",
    Github : "https://github.com/Divyanshu-chauhan000/Holiday-project",
    image: sprinkler,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website showcasing projects and skills, built using React.js and Tailwind CSS with a modern design.",
    tech: ["React.js", "Tailwind CSS"],
    LiveDemo: "https://portfolio-main-vt9w-quhzyxba5.vercel.app/",
    Github : "https://github.com/Divyanshu-chauhan000/Portfolio-main/tree/main/my-portfolio",
    image: personalPortfolio,
  },
];

const appProjects = [
  {
    title: "Recipe App",
    description:
      "A full-stack recipe application with a complete backend system where users can create recipes, explore recipes from others, and add reviews/ratings. It includes authentication, database integration, and real-time data handling.",
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT"],
    APK: "https://expo.dev/accounts/dev_code001/projects/frontend/builds/4c4a8fab-1087-4415-b7bb-82e40ee887d7",
    Github : "https://github.com/Divyanshu-chauhan000/RecipeApp",
    image: recipeApp,
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation app built using Hugging Face APIs that allows users to generate images from text prompts. It supports multiple models and customizable aspect ratios.",
    tech: ["React", "Node.js", "Hugging Face API", "JavaScript"],
    APK: "https://expo.dev/accounts/dev_code001/projects/GuruAI/builds/e70ab88f-fb2b-499b-a529-fb01674e94a8",
    Github: "https://github.com/Divyanshu-chauhan000/AI_Image_Generator",
    image: guruAi,
  },
];

const Projects = () => {
  return (
    //Section Wrapper
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section ki heading ---> */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl pb-4 sm:text-4xl md:text-5xl bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent font-bold mb-3 sm:mb-4 leading-tight">
            Projects
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base px-4">
           A collection of real-world projects demonstrating full-stack development, mobile app development, and scalable application architecture.
          </p>
        </div>
        {/*Web Projects:---- */}
        <div className="p-3">
          <h2 className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent text-xl font-bold ">
            Web Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col h-full rounded-2xl bg-[#020617] border border-gray-500 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300"
            >
              {/* project preview k liy  imaage lgani ha baad me  */}
              <div className="h-36 sm:h-40 md:h-44 rounded-t-2xl w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project ka content: - */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* technology used are  */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((items, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {items}
                    </span>
                  ))}
                </div>
                {/* Links bhi to provide krni ha  */}
                <div className="flex justify-between ">
                    <a
                    href={project.LiveDemo}
                    className="mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-500 hover:underline"
                  >
                    Live Demo{" "}
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </a>
                    <a
                    href={project.Github}
                    className="mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-500 hover:underline"
                  >
                    GitHub{" "}
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*App Projects:---- */}
        <div className="p-3 mt-3">
          <h2 className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent text-xl font-bold ">
            App Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {appProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col h-full rounded-2xl bg-[#020617] border border-gray-500 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300"
            >
              {/* project preview k liy  imaage lgani ha baad me  */}
              <div className="h-36 sm:h-40 md:h-44 rounded-t-2xl w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project ka content: - */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* technology used are  */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((items, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {items}
                    </span>
                  ))}
                </div>
                {/* Links bhi to provide krni ha  */}
                <div className="flex justify-between ">
                    <a
                    href={project.APK}
                    className="mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-500 hover:underline"
                  >
                    Download APK{" "}
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </a>
                    <a
                    href={project.Github}
                    className="mt-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-500 hover:underline"
                  >
                    GitHub{" "}
                    <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
