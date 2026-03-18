import React from "react";
import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Builting Connection section ---> */}
        <div className="text-gray-100 text-center md:text-left">
           <h3 className="text-2xl sm:text-3xl">Let's build an awesome <br className="hidden sm:block" /> project together!</h3>
           <div className="flex flex-col py-6 sm:py-8 gap-4 sm:gap-3">
            <div>
           <h4 className="font-semibold text-sm sm:text-base">Call Us</h4>
           <p className="text-xs sm:text-sm">(+91) 9720619887</p>
            </div>
            <div>
             <h4 className="font-semibold text-sm sm:text-base">Find Us</h4>
             <p className="text-xs sm:text-sm tracking-wide">Dhampur, Bijnor</p>
             <p className="text-xs sm:text-sm tracking-wide">246761, Uttar Pradesh</p>
            </div>
            <div>
               <h4 className="font-semibold text-sm sm:text-base">Visit Us</h4>
               <p className="text-xs sm:text-sm tracking-wide">Monday - Friday</p>
               <p className="text-xs sm:text-sm tracking-wide">9AM - 5PM</p>
            </div>
           </div>
        </div>
        {/* get in touch section */}
        <div>
          <h2 className="text-lg sm:text-xl text-gray-200 font-semibold text-center md:text-left">Get In Touch</h2>
          <div className="py-2">
            <form action="" className="flex flex-col gap-3">
            <div>
              <label htmlFor="name" className="text-gray-200 text-sm sm:text-base block mb-1">Your name</label>
              <input type="text" id="name" placeholder="Enter your name" className="rounded-md p-2 px-3 w-full text-sm sm:text-base" />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-200 text-sm sm:text-base block mb-1">Your Email</label>
              <input type="email" id="email" placeholder="Enter your Email" className="rounded-md p-2 px-3 w-full text-sm sm:text-base" />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-200 text-sm sm:text-base block mb-1">Message</label>
              <textarea id="message" placeholder="Enter your Message" className="rounded-md p-2 px-3 w-full h-24 sm:h-32 text-sm sm:text-base" />
            </div>
            <button type="submit" className="mt-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition text-sm sm:text-base">Send Message</button>
          </form>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Contact;
