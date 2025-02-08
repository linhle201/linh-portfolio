import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-9 animate-fade-in"
        style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 10)' }}
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-auto">
        {/* Card 1: Education */}
        <div className="bg-red-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex justify-center">
            <img src="/skills/education.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4" style={{ textShadow: '2px 2px 5px rgba(239, 68, 68, 0.5)' }}>
            Education
          </h3>
          <p className="text-sm sm:text-sm md:text-sm lg:text-base">
            With <span className="font-bold text-red-500">2 years</span> of studying at Nova Scotia Community College - Technology Campus, I have had the privilege to work on a wide range of projects, from personal portfolios to enterprise-level applications. My mission is to bridge the gap between design and development, and I'm constantly learning to stay up-to-date with the latest trends and technologies.
          </p>
        </div>

        {/* Card 2: Experience */}
        <div className="bg-red-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex justify-center">
            <img src="/skills/work.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4" style={{ textShadow: '2px 2px 5px rgba(239, 68, 68, 0.5)' }}>
            Experience
          </h3>
          <p className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-800">
            I began my career as a chef, where I developed a strong passion for creativity and precision. Over time, my interest in technology and web development grew, leading me to transition into the tech industry. I believe that both fields share core principles—creativity, attention to detail, and problem-solving—which have allowed me to seamlessly apply my skills from the kitchen to building impactful digital experiences.
          </p>
        </div>

        {/* Card 3: Hobbies */}
        <div className="bg-red-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex justify-center">
            <img src="/skills/hobbies.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4" style={{ textShadow: '2px 2px 5px rgba(239, 68, 68, 0.5)' }}>
            Hobbies
          </h3>
          <p className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-800">
            I love playing the guitar. I enjoy spending time in creating beautiful, user-friendly websites and applications that deliver seamless experiences to users. With a strong foundation in both frontend and backend technologies, I strive to build not just functional, but also visually appealing digital experiences.
          </p>
        </div>

        {/* Card 4: Target */}
        <div className="bg-red-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
          <div className="mb-4 flex justify-center">
            <img src="/skills/purpose.svg" alt="JS Logo" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4" style={{ textShadow: '2px 2px 5px rgba(239, 68, 68, 0.5)' }}>
            Target
          </h3>
          <p className="text-sm sm:text-sm md:text-sm lg:text-sm text-gray-800">
            Graduated with a degree in Computer Science from ABC University. Took specialized courses in web development, data structures, and algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;