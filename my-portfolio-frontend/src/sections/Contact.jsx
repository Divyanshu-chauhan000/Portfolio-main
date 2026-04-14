import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const dataset = { name, email, message };
    try {
      const res = await axios.post(
        `https://portfolio-68re.onrender.com/contact-details`,
        dataset
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      alert(res.data);
    } catch (error) {
      setStatus("error");
      console.log(error, "form handleSubmit is raising a problem");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's work together to build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              Let's build something <span className="text-cyan-400">great</span> together
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 9720619887</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">chauhandivyanshu2026@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">Dhampur-246761, Bijnor</p>
                  <p className="text-gray-400 text-sm">Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Availability</h4>
                  <p className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-400 text-sm italic">
                "Open to internships, freelance projects, and full-time opportunities."
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-[#020617] border border-gray-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-100 mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-gray-300 text-sm block mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder:text-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-300 text-sm block mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder:text-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-300 text-sm block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder:text-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#020617] border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
