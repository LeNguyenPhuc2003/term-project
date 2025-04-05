import React, { useState, useEffect } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    fetch(
      "https://shiny-frangollo-a8d3d8.netlify.app/.netlify/functions/api/weather"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className= "bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-8 flex flex-col justify-center items-center text-center text-2xl">
          <h1 className="mt-5">Welcome to My Portfolio</h1>
          <p>This is the home page of my personal portfolio site.</p>
        </div>
        <div className="col-span-4 grid grid-row-2 flex flex-col justify-center items-center text-center">
          <a href="/about" className={`btn ${darkMode ? "dark-mode" : ""}`}>
            About Me
          </a>
          <a href="/contact" className={`btn ${darkMode ? "dark-mode" : ""}`}>
            Contact Me
          </a>
          <a href="/projects" className={`btn ${darkMode ? "dark-mode" : ""}`}>
            Projects
          </a>
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center text-center avatar">
          <div class="mask mask-hexagon w-80">
            <img src="./Face.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="col-span-8 flex flex-col justify-center items-center text-center">
          <button
            onClick={toggleDarkMode}
            className="btn btn-toggle"
            style={{
              backgroundColor: darkMode ? "#ffffff" : "#333",
              color: darkMode ? "#333" : "#ffffff",
            }}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
        <div className="col-span-8 flex flex-col justify-center items-center text-center">
          {weather ? (
            <div class="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://i.ytimg.com/vi/uJ5bQ9tKse8/maxresdefault.jpg"
                  alt="Test image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weather in {weather.city}</h2>
                <p>Temperature: <span className="text-orange-500">{weather.temperature}°C</span> </p>
                <p>Humidity: <span className="text-blue-300">{weather.humidity}%</span></p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
