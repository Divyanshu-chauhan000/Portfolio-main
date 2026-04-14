import React from "react";
import { NavLink } from "react-router-dom";

const skills = ["JavaScript", "React.js", "Node.js", "MongoDB", "React Native", "Git & Github"];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left - Text */}
          <div className="text-center md:text-left">
            <p className="text-cyan-400 text-sm font-medium mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              MERN Stack <span className="text-cyan-400">Developer</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed text-[14px] md:text-base">
              I'm a developer who loves building full-stack web apps and mobile applications. I work mostly with the MERN stack (MongoDB, Express, React, Node.js) and React Native for mobile apps.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed text-[14px] md:text-base">
              I enjoy writing clean code, building smooth user interfaces, and integrating AI features into apps. Always learning something new and trying to build projects that actually solve real problems.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
              <a href="/resume"
                className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition text-[14px] text-center">
                Download Resume
              </a>
              <NavLink to="/projects">
                <button className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-900 transition text-[14px]">
                  View Projects
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right - Skills Grid */}
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index}
                className="p-4 md:p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-cyan-500/40 transition text-center md:text-left">
                <div className="text-gray-200 font-medium text-[14px] md:text-base">{skill}</div>
                <div className="h-0.5 w-8 bg-cyan-500 rounded mt-2 mx-auto md:mx-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
