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
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl pb-4 sm:text-4xl md:text-5xl bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent font-bold mb-4 leading-tight">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A collection of real-world projects demonstrating full-stack development, mobile app development, and scalable application architecture.
          </p>
        </div>

        {/* Web Projects */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            Web Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl bg-[#020617] border border-gray-800 shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((items, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {items}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.LiveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <FiArrowUpRight className="text-base" />
                    </a>
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      <span>GitHub</span>
                      <FiArrowUpRight className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Projects */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            App Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl bg-[#020617] border border-gray-800 shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((items, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {items}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.APK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Download APK</span>
                      <FiArrowUpRight className="text-base" />
                    </a>
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      <span>GitHub</span>
                      <FiArrowUpRight className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
