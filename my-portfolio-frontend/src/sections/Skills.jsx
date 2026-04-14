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
    <section id="skills" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">Skills</h2>
          <p className="text-gray-500 text-[14px] md:text-base">Technologies I use regularly</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg py-5 px-3 flex flex-col items-center gap-2 hover:border-cyan-500/40 transition cursor-default">
              <span className={`text-2xl md:text-3xl ${skill.color}`}>
                {skill.icon}
              </span>
              <span className="text-gray-300 text-[13px] md:text-[14px] font-medium">
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
