import React from 'react';

const ProjectNSCC = () => {
  const project = {
    title: "Project Redesign NSCC Website",
    imageUrls: [
      "../PJ-nscc/final.PNG", // First image
    ],
    cta: "../PJ-nscc/cta.png",
    menu: "../PJ-nscc/menu.png",
    colorPaletteUrl: "../PJ-nscc/paletteColors.PNG",
    githubUrl: "https://github.com/linhle201/NSCC-Redesign-Website",
    figmaUrl: "https://www.figma.com/design/391WRLVGwpVhQooudrnIQa/NSCC-Web-Redesign?node-id=0-1&p=f&t=JLaXdF50MRjETx3z-0",
    description: "This redesign of the Nova Scotia Community College website, focusing on improving user experience and accessibility. The new design features an intuitive interface, streamlined navigation, and enhanced accessibility for all users, ensuring a more inclusive and engaging online experience.",
    details: "The redesign aimed to create a modern, mobile-first website. It was essential to focus on accessibility improvements, such as color contrast, font size adjustments, and keyboard navigation. Additionally, the site’s performance was optimized for faster load times, contributing to a better user experience overall. The new structure of the website ensures easy access to important resources, such as course information, campus events, and student services.",
    research: "For this redesign, we conducted thorough research into color theory, typography, and accessibility standards. We chose a color palette that ensures good contrast for readability and a more accessible experience. For fonts, we selected a combination of modern, sans-serif fonts that are easy to read, both on desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript", "Figma", "Responsive Design"],
  };

  return (
    <section id="project-nscc" className="p-6 py-10 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-8" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
        {project.title}
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="project-details bg-black border-4 border-black bg-opacity-40 rounded-lg overflow-hidden shadow-lg p-6">
          {/* First image (image on right, description on left) */}
          <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="text-left md:w-1/2 pr-6">
                    <p className="text-lg text-white">{project.description}</p>
                </div>
                <div className="md:w-1/2">
                    <img
                    src={project.imageUrls[0]}
                    alt="NSCC Redesign"
                    className="w-full max-w-lg h-80 object-contain rounded-lg"
                    />
                </div>
          </div>

          <h3 className="text-xl text-red-300 font-semibold mt-4">Project Details</h3>
          <p className="text-sm text-white mt-2">{project.details}</p>

          {/* Color Palette */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Color Palette Research</h3>
          <div className="w-full h-64 mb-6">
            <img
              src={project.colorPaletteUrl}
              alt="Color Palette"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <p className="text-sm text-white mb-4">
            The color palette was designed with accessibility in mind. We selected a set of colors that ensure high contrast for readability and a modern look. The palette ensures that content is easy to read and the interface is aesthetically pleasing, enhancing the overall user experience.
          </p>

          {/* Menu Navigation Redesign */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Redesign of Menu Navigation</h3>
          <div className="w-full h-64 mb-6">
            <img
              src={project.menu}
              alt="Redesigned Menu Navigation"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <p className="text-sm text-white mb-4">
            The redesigned menu navigation ensures that users can easily navigate the website. We simplified the layout to improve accessibility and provide a more intuitive experience. The menu structure was optimized for both desktop and mobile users, ensuring easy access to important content.
          </p>

          {/* Call to Action (CTA) Practice */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Call to Action (CTA)</h3>
          <div className="w-full h-64 mb-6">
            <img
              src={project.cta}
              alt="Call to Action"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <p className="text-sm text-white mb-4">
            The CTA buttons were designed to grab attention while maintaining accessibility standards. We ensured the buttons were easily noticeable and aligned with the overall design. They provide clear, actionable steps for users, helping guide them through the site.
          </p>

          {/* Research and Design Choices */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Research and Design Choices</h3>
          <p className="text-sm text-white mt-2">{project.research}</p>

          {/* Technologies Used */}
          <h3 className="text-xl text-red-300 font-semibold mt-4">Technologies Used</h3>
          <ul className="list-disc pl-6 text-white">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-sm">{tech}</li>
            ))}
          </ul>

          <div className="mt-4 flex  gap-4">
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
               
            <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                <svg
                    className="h-6 w-6 text-red-300 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
                 Figma
                </button>
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectNSCC;