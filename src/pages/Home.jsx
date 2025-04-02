import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const [weather, setWeather] = useState(null);

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
    fetch('https://shiny-frangollo-a8d3d8.netlify.app/.netlify/functions/api/weather')
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="home-container">
      <div className="row">
        <div className="col-md-6 text-section">
          <h1 className="mt-5">Welcome to My Portfolio</h1>
          <p>This is the home page of my personal portfolio site.</p>
          <div className="button-group">
            <a href="/about" className={`btn ${darkMode ? 'dark-mode' : ''}`}>About Me</a>
            <a href="/projects" className={`btn ${darkMode ? 'dark-mode' : ''}`}>Projects</a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="btn btn-toggle"
            style={{
              backgroundColor: darkMode ? '#ffffff' : '#333',
              color: darkMode ? '#333' : '#ffffff'
            }}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
        <div className="col-md-6 image-section">
          <img src="./Face.jpg" alt="Profile" className="profile-image" />
        </div>
      </div>
      {weather ? (
        <div className="weather-box" 
        style={{
          backgroundColor: darkMode ? '#ffffff' : '#333',
          color: darkMode ? '#333' : '#ffffff'
        }}>
          <h2>Weather in {weather.city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Home;