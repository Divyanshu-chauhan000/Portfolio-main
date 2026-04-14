import React from "react";
import { FiExternalLink } from "react-icons/fi";

import recipeApp from '../assets/images/recipeFrame.png'
import guruAi from '../assets/images/guruAI.jpg'
import personalPortfolio from "../assets/images/PersonalPortfolio.png";
import portfoliogenerator from "../assets/images/portfoliogenerator.png";
import sprinkler from "../assets/images/sprinkler.png";

const webProjects = [
  {
    title: "Portfolio Generator",
    description: "A tool that helps you create your own portfolio website quickly using ready-made components.",
    tech: ["React", "JavaScript"],
    link: "https://port-folio-generator.vercel.app/",
    github: "https://github.com/Divyanshu-chauhan000/PortFolio_Generator",
    image: portfoliogenerator,
  },
  {
    title: "Landing Page",
    description: "Modern and responsive landing pages built with HTML and CSS. Clean layout and good typography.",
    tech: ["HTML", "CSS"],
    link: "https://holiday-project-pi.vercel.app/",
    github: "https://github.com/Divyanshu-chauhan000/Holiday-project",
    image: sprinkler,
  },
  {
    title: "Personal Portfolio",
    description: "My own portfolio website built with React and Tailwind CSS. Shows my projects, skills and how to reach me.",
    tech: ["React", "Tailwind"],
    link: "https://portfolio-main-vt9w-quhzyxba5.vercel.app/",
    github: "https://github.com/Divyanshu-chauhan000/Portfolio-main",
    image: personalPortfolio,
  },
];

const appProjects = [
  {
    title: "Recipe App",
    description: "A full app where users can add recipes, browse others' recipes, and leave reviews. Includes auth and database.",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    apk: "https://expo.dev/accounts/dev_code001/projects/frontend/builds/4c4a8fab-1087-4415-b7bb-82e40ee887d7",
    github: "https://github.com/Divyanshu-chauhan000/RecipeApp",
    image: recipeApp,
  },
  {
    title: "AI Image Generator",
    description: "Generate images from text prompts using Hugging Face API. Supports multiple models and aspect ratios.",
    tech: ["React Native", "Node.js", "Hugging Face"],
    apk: "https://expo.dev/accounts/dev_code001/projects/GuruAI/builds/e70ab88f-fb2b-499b-a529-fb01674e94a8",
    github: "https://github.com/Divyanshu-chauhan000/AI_Image_Generator",
    image: guruAi,
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition group">
    <div className="h-40 md:h-48 overflow-hidden">
      <img src={project.image} alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
    </div>
    <div className="p-5">
      <h3 className="text-gray-100 font-semibold text-[15px] md:text-base mb-2">{project.title}</h3>
      <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[11px] md:text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400">{t}</span>
        ))}
      </div>

      <div className="flex gap-4 text-[13px]">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            Demo <FiExternalLink size={12}/>
          </a>
        )}
        {project.apk && (
          <a href={project.apk} target="_blank" rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            APK <FiExternalLink size={12}/>
          </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 flex items-center gap-1">
          GitHub <FiExternalLink size={12}/>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">Projects</h2>
          <p className="text-gray-500 text-[14px] md:text-base">Some of the things I've built</p>
        </div>

        {/* Web Projects */}
        <div className="mb-12">
          <h3 className="text-lg md:text-xl text-gray-300 font-medium mb-6">Web Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {webProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* App Projects */}
        <div>
          <h3 className="text-lg md:text-xl text-gray-300 font-medium mb-6">Mobile Apps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {appProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
