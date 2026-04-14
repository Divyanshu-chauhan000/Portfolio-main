import React from "react";
import { NavLink } from "react-router-dom";

const skills = ["JavaScript", "React.js", "Node.js", "MongoDB", "React Native", "Git & Github"];

const About = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-4 text-sm font-medium text-cyan-400">
              Get to know me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
              Crafting modern <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                web experiences
              </span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              I am a MERN Stack Developer with experience in building full-stack web applications and cross-platform mobile apps using React Native. I focus on writing clean, maintainable code and building scalable backend systems with efficient APIs.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Along with web and mobile development, I have experience integrating AI-based features into applications, making them smarter and more interactive. I continuously learn and improve my skills to build real-world, production-ready applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="/resume"
                className="px-6 sm:px-8 py-3 rounded-xl bg-[#020617] border border-gray-700 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Download Resume
              </a>
              <NavLink to="/projects">
                <button className="px-6 sm:px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm sm:text-base">
                  View Projects
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-[#020617] border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-gray-300 font-medium mb-2 group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  {skill}
                </div>
                <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
