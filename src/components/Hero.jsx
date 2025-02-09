import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Snowflakes animation */}
      <div className="snowflakes">
      <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
      </div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative lg:w-8/12 w-full text-center text-white px-4 sm:px-10 py-6 sm:py-10 mx-auto h-auto max-h-[90vh] overflow-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">Hello, I'm</h2>
        <div className="waviy text-red-300 text-7xl sm:text-8xl lg:text-8xl mb-8" style={{ letterSpacing: '5px' }}>
          <span style={{ '--i': 1 }}>L</span>
          <span style={{ '--i': 2 }}>i</span>
          <span style={{ '--i': 3 }}>n</span>
          <span style={{ '--i': 4 }}>h</span>
          <span style={{ marginLeft: '25px' }}> </span>
          <span style={{ '--i': 6 }}>L</span>
          <span style={{ '--i': 7 }}>e</span>
        </div>

        <p className="text-lg sm:text-md md:text-lg text-red-100 py-3 tracking-wide mb-3">
          I'm a passionate UX/UI and Web Developer
        </p>
        <p className="text-base sm:text-sm md:text-lg text-red-100 tracking-wide mb-4">
          I specialize in creating user-centered designs and building responsive, functional websites. With a strong foundation in both design and development, I aim to create seamless digital experiences that delight users and achieve business goals.
        </p>

        <div className="flex justify-center space-x-4">
          {/* "Let's Collaborate" Button */}
          <a href="#contact" className="inline-block">
            <button className="bg-red-200 text-black py-2 px-6 rounded-lg hover:bg-gray-200 transition-all">
              Let's Collaborate
            </button>
          </a>

          {/* "Download Resume" Button */}
          <a
            href="../LinhLe-Resume.pdf" 
            download="LinhLe-Resume.pdf"  
            className="inline-block"
          >
            <button className="bg-red-200 text-black py-2 px-6 rounded-lg hover:bg-gray-200 transition-all">
              Download Resume
            </button>
          </a>
        </div>

        {/* Social Media Icons (GitHub, Instagram, LinkedIn) */}
        <div className="flex space-x-4 mt-6 justify-center">
          {/* Social Media Links */}
        </div>
      </div>
    </>
  );
};

export default Hero;