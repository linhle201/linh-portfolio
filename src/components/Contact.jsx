import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-screen-xl mx-auto bg-black bg-opacity-60 p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-12 mt-12" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}>
          Get In Touch
        </h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

          {/* Left Column: Introduction */}
          <div className="flex flex-col justify-center items-center bg-red-100 p-6 rounded-lg shadow-lg space-y-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="text-sm text-gray-900 ">
              Have any questions or want to collaborate? Reach out to me through the contact methods below.
            </p>
          </div>

          {/* Right Column: Contact Methods */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="flex items-center justify-start bg-red-200 p-4 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out transform hover:scale-105">
              <FaEnvelope className="text-black text-3xl mr-4" />
              <div>
                <p className="text-sm">Email</p>
                <a href="mailto:your.email@example.com" className=" hover:underline">
                  lethimylinh.2001@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center justify-start bg-red-200 p-4 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out transform hover:scale-105">
              <FaPhone className="text-black text-sm mr-4" />
              <div>
                <p className="text-sm">Phone</p>
                <a href="tel:+1234567890" className=" hover:underline">
                  +1 (647) 225-3139
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;