import React, { useState, useEffect } from 'react';

function Projects() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    fetch('https://shiny-frangollo-a8d3d8.netlify.app/.netlify/functions/api/projects')
      .then((response) => {
        console.log('Response:', response); // Log the response
        return response.json();
      })
      .then((data) => {
        console.log('Data:', data); // Log the parsed data
        setProjects(data);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-linear-to-r from-cyan-500 to-blue-500 pr-4 pl-4 pt-3 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="row">
        <div className="">
          <h1 className="text-5xl"><b>Projects</b></h1>
          <p className="text-xl">Here are some of the projects I have worked on:</p>
          <button
            onClick={toggleDarkMode}
            className="btn btn-toggle"
            style={{
              
            }}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
      
      <div className='grid grid-row-3 gap-4 pt-5 pb-4'>
      {projects.map((project, index) => (
        <div key={index} className='projects-section' 
        style={{
          
          
        }}>
          <div className="card w-350 bg-blue-900 card-lg shadow-sm">
            <div className="card-body">
              <h2 className='card-title'>{project.title}</h2>
              <h5>{project.duration} | {project.type}</h5>
              <h5>Author: {project.author}</h5>
              <ul>
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Projects;