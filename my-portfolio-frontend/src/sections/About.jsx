import React from "react";

const About = () => {
  return (
    // section wrapper
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-24 bg-black overflow-hidden"
    >
      {/* Background Blur Shapes */}
      <div className="absolute -top-32 -left-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-40 -right-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* left content ----> */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm font-medium rounded-full bg-gray-100 text-gray-700">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4 sm:mb-6 leading-tight">
              Crafting modern <br /> <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">web experiences</span>
            </h2>
            <p className="text-gray-500 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              I am a MERN Stack Developer with experience in building full-stack web applications and cross-platform mobile apps using React Native.
            </p>
            <p className="text-gray-500 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
             I focus on writing clean, maintainable code and building scalable backend systems with efficient APIs.
Along with web and mobile development, I have experience integrating AI-based features into applications, making them smarter and more interactive.
            </p>
            <p className="text-gray-500 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              I am continuously learning and improving my skills to build real-world, production-ready applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                   <a href="/resume" className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#0202617] border border-gray-800 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:translate-y-1 hover:border-cyan-400 transition text-sm sm:text-base text-center">Download Resume</a>
                   <a href="/projects" className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border text-gray-800 bg-gray-200 font-medium hover:bg-black hover:text-gray-200 transition text-sm sm:text-base text-center">View Projects</a>
            </div>
          </div>
          {/* Right content -----> */}  
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-8 md:mt-0">
               {
               ["JavaScript",
               "React.js",
               "Node.js",
               "MongoDB", 
               "React Native",
               "Git & Github", 
              
              ].map((skill,index) => (
                <div key={index} className="group p-3 sm:p-5 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition">
                      <div className="text-gray-900 font-semibold mb-1 group hover:text-purple-600 transition text-sm sm:text-base">{skill}</div>
                      <div className="h-1 w-12 sm:w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
               ))}
          </div>
         </div>
      </div>
    </section>
  );
};

export default About;
