import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className=" p-6 py-10 bg-gradient-to-r from-red-100 to-gray-950 w-full">
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-red-300 animate-fade-in" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>Skills & Technology Experiences</h2>  
        
        <div className=" skills-section text-center">
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 max-w-4xl mx-auto mb-10">

           {/* source for all icons  https://icons8.com/icons/set/react */}
          {/* HTML */}
        <div className="skill-card text-center mt-5 hover:scale-105 transition-all duration-300">
          <img src="/skills/html.svg" alt="HTML Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white"style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>HTML5</p>
        </div>

        {/* CSS */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/css.svg" alt="CSS Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>CSS3</p>
        </div>

        {/* JavaScript */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/JS.png" alt="JS Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>JavaScript</p>
        </div>

        {/* React */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/react.svg" alt="React Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>React</p>
        </div>

        {/* Tailwind */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/tailwind.svg" alt="Tailwind Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>Tailwind</p>
        </div>

        {/* Bootstrap */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/bootstrap.svg" alt="Bootstrap Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>Bootstrap</p>
        </div>

        {/* Figma */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/figma.svg" alt="Figma Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>Figma</p>
        </div>

        {/* Git */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/git.svg" alt="Git Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white">Git</p>
        </div>

        {/* Github */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/github.svg" alt="Github Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white">Github</p>
        </div>

        {/* WordPress */}
        <div className="skill-card text-center  hover:scale-105 transition-all duration-300">
          <img src="/skills/wordpress.svg" alt="WordPress Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-semibold text-red-100 hover:text-white">WordPress</p>
        </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="flex flex-col mt-15 md:flex-row gap-8 mx-auto max-w-6xl">

      {/* Left Column: Web Development Technologies */}
      <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-xl flex-1">
        <h3 className="text-2xl text-red-300 font-semibold mb-6 text-center">Web Development Technologies</h3>
        <div className="space-y-4 text-white">
          {/* Progress bar examples */}
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>Docker</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>Php</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>PHPMyAdmin</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>Java</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-400 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>C#</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-400 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>MongooseDb</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-300 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>Laravel</span>
            <div className="w-2/3 bg-white rounded-full h-2">
              <div className="bg-red-300 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Skills and Experiences */}
      <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-xl flex-1">
        <h2 className="text-2xl text-red-300 font-semibold mb-6 text-center">Skills and Experiences</h2>
        <p className="text-xs sm:text-sm md:text-base text-white" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 6)' }}>
          My expertise lies in UI/UX design, front-end development, and website development, focusing on creating responsive and visually appealing web experiences. I specialize in HTML, CSS, JavaScript, and Figma, building responsive websites with React, Tailwind, and Bootstrap. I'm also proficient in Laravel, PHP, and C#, along with WordPress for full-stack development. With two years of experience at NSCC in Web Programming, I’ve deep-dived into databases like MongoDB, SQLite, SQL, Access, PHPMyAdmin, and Docker, enhancing both my front-end and back-end skills. I bring designs to life with Figma, ensuring user-friendly and visually stunning websites.
        </p>
      </div>    
</div>
    </section>
  );
};

export default Skills;