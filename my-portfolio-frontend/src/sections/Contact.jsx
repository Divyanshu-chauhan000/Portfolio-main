import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload krne se rokta ha
    const dataset = {
      name,
      email,
      message,
    };
    try {
      const res = await axios.post(
        `https://portfolio-68re.onrender.com/contact-details`,
        dataset,
      );
      alert(res.data);
    } catch (error) {
      console.log(error, "form handleSubmit is raising a problem");
    }
  };
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Builting Connection section ---> */}
        <div className="text-gray-100 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl">
            Let's build an awesome <br className="hidden sm:block" /> project
            together!
          </h3>
          <div className="flex flex-col py-6 sm:py-8 gap-4 sm:gap-3">
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Contact</h4>
              <p className="text-xs sm:text-sm">(+91) 9720619887</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Location</h4>
              <p className="text-xs sm:text-sm tracking-wide">
                Dhampur-246761, Bijnor
              </p>
              <p className="text-xs sm:text-sm tracking-wide">
                Uttar Pradesh - India
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">
                Availabilty
              </h4>
              <p className="text-xs sm:text-sm tracking-wide">
                Monday - Friday
              </p>
              <p className="text-xs sm:text-sm tracking-wide">9AM - 5PM</p>
            </div>
            <div>
              <p>
                "Open to internships, freelance projects, and full-time
                opportunities."
              </p>
            </div>
          </div>
        </div>
        {/* get in touch section */}
        <div>
          <h2 className="text-lg sm:text-xl text-gray-200 font-semibold text-center md:text-left">
            Get In Touch for Opportunities
          </h2>
          <div className="py-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-200 text-sm sm:text-base block mb-1"
                >
                  Full name
                </label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  placeholder="Enter your full name"
                  className="bg-gray-800 text-white rounded-md p-2 px-3 w-full text-sm sm:text-base border border-gray-600 placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-200 text-sm sm:text-base block mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  className="bg-gray-800 text-white rounded-md p-2 px-3 w-full text-sm sm:text-base border border-gray-600 placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-gray-200 text-sm sm:text-base block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Tell me about your project or opportunity"
                  className="bg-gray-800 text-white rounded-md p-2 px-3 w-full h-24 sm:h-32 text-sm sm:text-base border border-gray-600 placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#020617] border border-gray-800 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:translate-y-1 hover:border-cyan-400 transition text-sm sm:text-base"
              >
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
