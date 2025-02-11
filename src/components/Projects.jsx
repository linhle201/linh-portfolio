import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const Projects = () => {
  const { projectId } = useParams(); // Get the projectId from the URL

  // Static list of projects
  const projects = [
    { 
      id: 1, 
      title: "Project Banh Mi A&B", 
      videoUrl: "../PJ-banhmiA&B/banhmianb.mp4", 
      githubUrl: "https://www.banhmianb.com/", // External URL
      description: "Design and develop a modern website for Banh Mi A&B, a Vietnamese restaurant."
    },
    { 
      id: 2, 
      title: "Project Tracking Halifax Buses", 
      videoUrl: "../PJ-bus/bus.mp4", 
      githubUrl: "/buses", 
      description: "A project to track real-time bus locations and schedules in Halifax."
    },
    { 
      id: 3, 
      title: "Project WordPress Theme", 
      videoUrl: "../Pj-wordpress/wpPage.mp4", 
      githubUrl: "/projects/3",  // Internal route
      description: "A custom WordPress theme tailored for magazine-style websites."
    },
  { 
    id: 4, 
    title: "Project Restaurant Dashboard", 
    videoUrl: "../PJ-restaurantDashBoard/dashBoard.mp4", 
    githubUrl: "https://github.com/linhle201/Restaurant-Dashboard",
    description: "I developed a dashboard for managing restaurant operations, featuring real-time data visualization and analytics. The dashboard helps restaurant owners track key metrics like sales, inventory, and customer trends, enabling data-driven decision-making."
  },
  { 
    id: 5, 
    title: "Project Plantopia Forum", 
    videoUrl: "../PJ-plantopiaForum/plantopiaForum.mp4", 
    githubUrl: "https://github.com/linhle201/PlantopiaForum",
    description: "Created a community forum for plant enthusiasts to connect, share tips, advice, and photos about their plant collections. The platform fosters a space for plant lovers to interact, exchange knowledge, and support each other in their gardening journeys"
  },
  { 
    id: 6, 
    title: "Project Three In A Row", 
    videoUrl: "../PJ-gameThreeinarow/threeInARow.mp4", 
    githubUrl: "https://github.com/linhle201/GameThreeInARow",
    description: "A classic Tic-Tac-Toe game using JavaScript, featuring an interactive and responsive interface. The game is designed for both desktop and mobile users, offering a smooth and engaging experience for players."
  },
  { 
    id: 7, 
    title: "Project Java Running Shapes", 
    videoUrl: "../PJ-shape/shape.mp4", 
    githubUrl: "https://github.com/linhle201/Shapes-Java",
    description: "Built a Java-based application that generates animated geometric shapes, which run and interact with the user. The app provides an engaging, dynamic experience, showcasing real-time visual changes based on user input."
  },
  { 
    id: 8, 
    title: "Project Fullstack App", 
    videoUrl: "../PJ-myApp/fullstackApp.mp4", 
    githubUrl: "https://github.com/linhle201/My-Fullstack-App",
    description: "Developed a full-stack web application that connects the frontend with a backend server, utilizing MongoDB for data storage. The app features user authentication, data management, and validation, with secure routing and APIs to efficiently handle user data."
  },
  { 
    id: 9, 
    title: "Project Redesign NSCC Website", 
    videoUrl: "../PJ-nscc/nscc.mp4", 
    githubUrl: "/nscc",  
    description: "This redesign of the Nova Scotia Community College website, focusing on improving user experience and accessibility. The new design features an intuitive interface, streamlined navigation, and enhanced accessibility for all users, ensuring a more inclusive and engaging online experience."
  },
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
          <h3 className="text-xl text-red-300 font-semibold">
                {/* Handle internal vs external link */}
                {project.githubUrl.startsWith('http') ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                ) : (
                  <Link to={project.githubUrl} className="hover:underline">
                    {project.title}
                  </Link>
                )}
              </h3>
            <p className="text-sm text-white mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

export default Projects;