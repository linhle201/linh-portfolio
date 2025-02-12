import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const PuzzleGame = () => {
  const project = {
    title: "Project Three In A Row",
    videoUrl: "../PJ-gameThreeinarow/threeInARow.mp4",  
    githubUrl: "https://github.com/linhle201/GameThreeInARow", 
    description: "A classic Tic-Tac-Toe game using JavaScript, featuring an interactive and responsive interface. The game is designed for both desktop and mobile users, offering a smooth and engaging experience for players.",
    techStack: ["JavaScript", "HTML", "CSS", "DOM Manipulation", "Responsive Design", "Event Handling"],
  };

  const [puzzleData, setPuzzleData] = useState(null);
  const [message, setMessage] = useState("");  // State to store the message to display

  useEffect(() => {
    // Fetch the puzzle data from the API on component mount
    fetch('https://prog2700.onrender.com/threeinarow/random')
      .then(response => response.json())
      .then(json => {
        setPuzzleData(json);
      });
  }, []);

  // Helper function to determine the color based on state
  const getColorFromState = (state) => {
    if (state === 0) return 'rgb(249, 246, 246)'; // White
    if (state === 1) return 'rgb(202, 135, 191)'; // Light pink
    if (state === 2) return 'purple'; // Purple
    return 'rgb(249, 246, 246)'; // Default white if unknown state
  };

  // Function to change the color when a cell is clicked
  const toChangeTheColor = (cell, newCell) => {
    if (cell.canToggle === false && parseInt(cell.currentState) !== 0) {
      setMessage("This cell cannot change color!!!"); // Show message below the table
    } else {
      if (cell.currentState === 0) {
        cell.currentState = 1;
      } else if (cell.currentState === 1) {
        cell.currentState = 2;
      } else {
        cell.currentState = 0;
      }
      newCell.style.backgroundColor = getColorFromState(cell.currentState);
      setMessage(""); // Clear any previous messages when color changes
    }
  };

  // Function to check if the puzzle is solved
  const checkPuzzle = () => {
    let isCorrect = true;
    let isFullfill = true;
    let allCorrect = true;

    puzzleData.rows.forEach((row) => {
      row.forEach((cell) => {
        if (parseInt(cell.currentState) !== parseInt(cell.correctState)) {
          isCorrect = false;
          if (parseInt(cell.currentState) !== 0) {
            allCorrect = false;
          }
        }
        if (parseInt(cell.currentState) === 0 && parseInt(cell.correctState) !== 0) {
          isFullfill = false;
        }
      });
    });

    if (isCorrect && isFullfill) {
      setMessage("You did it!!!"); // Show success message
    } else if (allCorrect && !isFullfill) {
      setMessage("So far so good, but the puzzle is not completed"); // Incomplete puzzle
    } else {
      setMessage("Something is wrong"); // Incorrect solution
    }
  };

  // Function to create the puzzle grid
  const drawPuzzle = () => {
    return (
      <table style={{ width: '50%', margin: 'auto', borderCollapse: 'collapse' }}>
        {puzzleData?.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td
                key={columnIndex}
                onClick={(e) => toChangeTheColor(cell, e.target)}
                style={{
                  backgroundColor: getColorFromState(cell.currentState),
                  width: '50px', // Set width
                  height: '50px', // Set height
                  border: '1px solid #333', // Optional: border to make the cells more visible
                  cursor: 'pointer', // Add a pointer cursor to indicate interactivity
                }}
              />
            ))}
          </tr>
        ))}
      </table>
    );
  };

  return (
    <div id="theGame">
      <section id="project-shapes" className="p-6 py-10 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-300 mb-8" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
          {project.title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="project-details bg-black border-4 border-black bg-opacity-40 rounded-lg overflow-hidden shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl text-red-300 font-semibold mt-4">Project Video</h3>
              <div className="w-full h-60 mb-6">
                <video
                  src={project.videoUrl}
                  controls
                  className="w-full h-full object-contain rounded-lg"
                  muted
                  loop
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-red-300 font-semibold mt-4">Project Description</h3>
              <p className="text-sm text-white mt-2">{project.description}</p>
            </div>

            <h3 className="text-2xl text-red-300 text-center font-semibold mt-4">Start The Game </h3>
            <p className="text-sm text-white mt-2 mb-5">
            Welcome to the "Three-in-a-Row" puzzle game! The objective of the game is to fill a grid with colored cells, following a specific pattern. Each cell can be toggled between three states: empty, light pink, and purple. 
            <br /><br />
            The puzzle grid size changes every time you start a new game, based on the size provided by the API. This makes each puzzle unique, with varying levels of complexity. 
            <br /><br />
            To play, simply click on any cell in the grid. Each click will cycle the state of the cell through the following sequence: 
            <ul>
                <li>Empty → Light Pink → Purple → Empty → ... (and so on)</li>
            </ul>
            <br />
            Your goal is to match the correct solution pattern while following the rule that no row or column can contain three cells of the same color (light pink or purple). This rule will help guide your moves and ensure the puzzle is solvable. 
            <br /><br />
            <strong>Tips:</strong>
            <ul>
                <li>Each puzzle starts with some cells pre-filled, which can serve as clues to help you get started.</li>
                <li>Use logic and pattern recognition to figure out where to place the light pink and purple cells while ensuring no row or column has three of the same color.</li>
                <li>Don't forget to use the "Check Puzzle" button to check your progress! You can click it at any time to verify if your current grid arrangement is correct. It will let you know if you've made any mistakes, and you can adjust accordingly.</li>
            </ul>
            <br />
            Once you've completed the grid and confirmed your solution using the "Check Puzzle" button, you'll know if you've successfully solved the puzzle or if you need to try again. 
            <br /><br />
            <strong class="text-red-300">Good luck and enjoy the challenge!</strong>
        </p>

            {puzzleData ? drawPuzzle() : <p>Loading...</p>}

            {/* Check Puzzle Button */}
            <div className="flex justify-center mt-5">
            <button 
                id="checkBtn" 
                onClick={checkPuzzle} 
                className="bg-black text-red-300 px-4 py-2 text-center align-item-center rounded-lg hover:bg-gray-800 transition duration-300"
            >
                Check Puzzle
            </button>
            </div>
            
            {/* Display the message below the puzzle */}
            <div className="mt-4 text-white text-center">
              {message && <p>{message}</p>}
            </div>

            <h3 className="text-xl text-red-300 font-semibold mt-4">Technologies Used</h3>
            <ul className="list-disc pl-6 text-white">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-sm">{tech}</li>
              ))}
            </ul>

            {/* GitHub and Back to Projects Links */}
            <div className="mt-4 flex gap-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  <svg className="h-6 w-6 text-red-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </button>
              </a>
              <Link to="/#project" className="flex items-center text-red-300 bg-black text-red-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" x2="5" y1="19" y2="5"></line>
                </svg>
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuzzleGame;