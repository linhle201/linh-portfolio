import React, { useRef } from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: "Project Banh Mi A&B", videoUrl: "../PJ-banhmiA&B/banhmianb.mp4" },
    { id: 2, title: "Project Tracking Halifax Buses", videoUrl: "../PJ-bus/bus.mp4" },
    { id: 3, title: "Project WordPress Theme", videoUrl: "../Pj-wordpress/wpPage.mp4" },
    { id: 4, title: "Project Restaurant Dashboard", videoUrl: "../PJ-restaurantDashBoard/dashBoard.mp4" },
    { id: 5, title: "Project Plantopia Forum", videoUrl: "../PJ-plantopiaForum/plantopiaForum.mp4" },
    { id: 6, title: "Project Three In A Row", videoUrl: "../PJ-gameThreeinarow/threeInARow.mp4" },
    { id: 7, title: "Project Java Running Shapes", videoUrl: "../PJ-shape/shape.mp4" },
    { id: 8, title: "Project Fullstack App", videoUrl: "../PJ-myApp/fullstackApp.mp4" },
    { id: 9, title: "Project Redesign NSCC Website", videoUrl: "../PJ-nscc/nscc.mp4" },
  ];

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <section id="projects" className="p-6 py-10 bg-gradient-to-r from-red-100 to-gray-950 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-8" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>My Projects</h2>

      {/* Project Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card bg-black border-4 border-black bg-opacity-70 rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:border-4 hover:border-white"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="video-container relative w-full h-48">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={project.videoUrl}
                className="w-full h-full object-cover"
                muted
                loop
                preload="auto"
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-red-300 font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;