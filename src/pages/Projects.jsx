import React, { useState, useEffect } from 'react';
import './Projects.css';

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
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="row">
        <div className="col-md-12 text-section">
          <h1 className="mt-5">Projects</h1>
          <p>Here are some of the projects I have worked on:</p>
          <button
            onClick={toggleDarkMode}
            className="btn btn-toggle"
            style={{
              backgroundColor: darkMode ? '#ffffff' : '#333',
              color: darkMode ? '#333' : '#ffffff'
            }}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>

      {projects.map((project, index) => (
        <div key={index} className='projects-section' 
        style={{
          backgroundColor: darkMode ? '#ffffff' : '#dfdededa',
          color:'#333'
        }}>
          <div className="row mt-5">
            <div className="col-md-12">
              <h2>{project.title}</h2>
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
  );
}

export default Projects;