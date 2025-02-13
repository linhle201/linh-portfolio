import { Link } from 'react-router-dom';

const ProjectAnb = () => {
  const project = {
    title: "Banh Mi A&B Website Project",
    videoUrl: "../PJ-banhmiA&B/banhmianb.mp4",  
    githubUrl: "https://www.banhmianb.com/", 
    description: "Design and develop a modern website for Banh Mi A&B, a Vietnamese restaurant.",
    techStack: ["HTML", "CSS", "Canva", "WIX", "CMS Hosting"],
    webAnB: "../PJ-banhmiA&B/webAnB.PNG",
    menu: "../PJ-banhmiA&B/menu.png",
  };

  return (
    <section id="project-shapes" className="p-6 py-10 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-8" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
        {project.title}
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="project-details bg-black border-4 border-black bg-opacity-40 rounded-lg overflow-hidden shadow-lg p-6">

          {/* Project Video Section */}
          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4 mb-4">Project Video</h3>
            <div className="w-full h-80 mb-6">
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
            <p className="text-sm text-white mt-2">My responsible for designing and developing a modern website for Banh Mi A&B, a Vietnamese restaurant, with the goal of showcasing the restaurant’s vibrant culinary offerings while providing an engaging and user-friendly experience for visitors.</p>
            
          </div>
          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4 ">Website Design and Development</h3>
            <p className="text-sm text-white ">I created the entire website from the ground up using HTML and CSS, ensuring that the website’s structure was clean, responsive, and visually appealing. I integrated interactive design elements to enhance user experience while ensuring fast loading times and mobile optimization. The design choices were influenced by traditional Vietnamese culture, modern aesthetics, and ease of navigation.</p>
            <div className="w-full h-64 mb-4 mt-4 flex justify-center items-center">
            <img
              src={project.webAnB}
              alt="Website"
              className="h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4">Platform & Hosting</h3>
            <p className="text-sm text-white mt-2">To bring the design to life, I utilized Wix as the website-building platform. Wix provided the flexibility to incorporate my custom HTML and CSS code while offering features such as responsive design, eCommerce options (for online orders), and SEO optimization tools. The website was also successfully hosted on a reliable hosting provider, ensuring minimal downtime and fast page loads.</p> 
          </div>

          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4">Restaurant Menu</h3>
            <p className="text-sm text-white mt-2">
                One of the key features of the website was the menu, which was designed to reflect the diverse and flavorful dishes offered at Banh Mi A&B. The menu was created to be visually appealing, easy to navigate, and functional for both desktop and mobile users. I made sure the menu was dynamic, allowing customers to filter options based on preferences such as vegetarian, gluten-free, and spicy.
            </p>
            <div className="w-full h-64 mb-4 mt-4 flex justify-center items-center">
                <img
                src={project.menu}
                alt="Restaurant menu"
                className="h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
            </div>

          <div className="mb-6">
            <h3 className="text-xl text-red-300 font-semibold mt-4">Figma Prototypes</h3>
            <p className="text-sm text-white mt-2">Before diving into the development phase, I used Figma to design interactive prototypes of the website. This allowed me to experiment with layout, color schemes, and overall user flow before moving into full-scale development. The Figma prototypes were shared with the restaurant's owners for feedback, ensuring that the final product matched their vision and business needs.</p>
            <div className="w-full h-64 mb-4 mt-4 flex justify-center items-center">
            <img
              src={project.menu}
              alt="Restaurant menu"
              className="h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          </div>

          

          {/* Technologies Used */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Technologies Used</h3>
          <ul className="list-disc pl-6 text-white">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-sm">{tech}</li>
            ))}
          </ul>

          {/* GitHub Link */}
          <div className="mt-4 flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              <svg  className="h-6 w-6 text-red-300 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                 A&B Website
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

export default ProjectAnb;