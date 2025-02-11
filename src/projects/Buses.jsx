import React from 'react';
import { Link } from 'react-router-dom';
const ProjectTrackingHalifaxBuses = () => {
  const project = {
    title: "Project Tracking Halifax Buses",
    videoUrl: "../PJ-bus/bus.mp4",
    githubUrl: "https://github.com/linhle201/Halifax-Buses",
    description: "A project to track real-time bus locations and schedules in Halifax.",
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "API Integration", "Real-time Data"],
  };

  return (
    <section id="project-halifax-buses" className="p-6 py-10 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-8" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
        {project.title}
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="project-details bg-black border-4 border-black bg-opacity-40 rounded-lg overflow-hidden shadow-lg p-6">
          {/* Project Video Section */}
          <div className="mb-6">
            <h3 className="text-2xl text-red-300 font-semibold mt-4">Project Video</h3><br></br>
            <div className="w-full h-85 mb-6">
              <video
                src={project.videoUrl}
                controls
                className="w-full h-full object-contain rounded-lg"
                muted
                loop
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4">Project Description</h3>
            <p className="text-sm text-white mt-2">{project.description}</p>
            <p className="text-sm text-white mt-2">This project is designed to track real-time bus locations and schedules in Halifax, leveraging the Halifax Bus API. Using JavaScript, we fetch live data from the API to display real-time bus locations, arrival times, and routes.</p>
            <p className="text-sm text-white mt-2">The application integrates seamlessly with the API to provide up-to-the-minute updates on bus schedules and locations throughout the city. By utilizing the power of JavaScript, we dynamically update the user interface with bus locations on an interactive map, and the system also includes features like filtering bus routes and viewing detailed schedules for each bus stop.</p>
            <p className="text-sm text-white mt-2">The goal of this project is to provide Halifax residents and visitors with an easy and reliable way to navigate the city's public transportation system. Whether you're heading to work, school, or an event, you can track buses in real-time, view estimated arrival times, and plan your trips with confidence.</p>
          </div>

          {/* Technologies Used */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Technologies Used</h3>
          <ul className="list-disc pl-6 text-white">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-sm">{tech}</li>
            ))}
          </ul>

          <div className="mt-4 flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                <svg
                  className="h-6 w-6 text-red-300 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </button>
            </a>
            <Link to="/#project" className="flex items-center text-red-300 bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" x2="5" y1="19" y2="5"></line>
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
 
  );
};

export default ProjectTrackingHalifaxBuses;