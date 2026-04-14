import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  { tech: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
  { tech: "React", icon: <FaReact />, color: "text-cyan-400" },
  { tech: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { tech: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { tech: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
  { tech: "C", icon: <SiC />, color: "text-blue-400" },
  { tech: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { tech: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#020617] border border-gray-800 rounded-xl py-5 sm:py-6 px-4 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className={`text-3xl sm:text-4xl ${skill.color}`}>
                {skill.icon}
              </span>
              <span className="font-medium text-gray-300 text-sm sm:text-base">
                {skill.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
