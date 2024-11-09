import React from 'react';
import './Portfolio.css';

// Import project images
import projectOneImage from './lhapp.JPG';
import projectTwoImage from './tpslogo.jpg';

// Project data array
const projects = [
  {
    name: 'Low Histamine App',
    description: 'I created this app in React to assist those with highly sensitive food allergens to create a customizable, personal compatibility list for a diagnostic and therapeutic elimination diet during histaminosis. This app is designed for those with Mast Cell Activation Syndrome (MCAS), Mastocytosis, and histamine intolerance.  This app is currently functional, but is still undergoing testing and development of quality of life features.',
    imageUrl: projectOneImage,
    liveLink: 'https://mattsch92.github.io/LHapp/',
    codeLink: 'https://github.com/MattSch92/LHapp.git'
  },
  {
    name: 'Lenny\'s Greenhouses',
    description: 'An (unfortunately) fictional greenhouse showcasing HTML, CSS, and JavaScript.  Back end features in development.',
    imageUrl: projectTwoImage,
    liveLink: 'https://mattsch92.github.io/LennysGreenhouses/',
    codeLink: 'https://github.com/MattSch92/LennysGreenhouses.git'
  }
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button>View Live</button>
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <button>View Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
