import React, { useState, useEffect } from "react";

const education = [
  "Bachelor of Computer Science, Dalhousie University (Expected 2026)",
  "Relevant coursework: Data Structures, Algorithms, Network Security, Software Development",
];

const experience = [
  "Software Engineer Co-op Student at HB Studios (Fall 2023)",
  "Process Improvement Co-op Student at Nova Scotia Health Authority (Fall 2024)",
];

const skills = [
  {
    category: "Programming Languages",
    skill: "Java, JavaScript, Python, C, C#",
  },
  { category: "Web Development", skill: "HTML, CSS, JavaScript, React" },
  { category: "Game Development", skill: "Unity" },
  {
    category: "Cyber Security",
    skill:
      "Network Security, OSINT reconnaissance, Firewall Implementation, Kali Linux",
  },
];

function About() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredSkills = skills.filter(
    (skill) =>
      skill.skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(skill.category))
  );

  return (
    <div
      className={`bg-linear-to-r from-cyan-500 to-blue-500 text-xl pl-3 pr-3 pt-4 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="grid grid-cols-8">
        <div className="col-span-6 text-section">
          <h1 className={`mt-5 ${darkMode ? "dark-mode" : ""}`}>About Me</h1>
          <p>
            I am a 3rd year Computer Science student at Dalhousie University. I
            am interested in Software Development, Game Development, and Cyber
            Security.
          </p>
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
        <div className="col-span-2">
          <img src="./Face.jpg" alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="grid grid-row-3 gap-4 pb-4">
        <div class="card w-200 bg-base-100 card-lg shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Education</h2>
            <ul className="list">
              {education.map((item, index) => (
                <li
                  key={index}
                  className={`list-item ${darkMode ? "dark-mode" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="card w-200 bg-base-100 card-lg shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Experience</h2>
            <ul className="list">
              {experience.map((item, index) => (
                <li
                  key={index}
                  className={`list-item ${darkMode ? "dark-mode" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card w-200 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <div className="">
              <h2 className={`${darkMode ? "dark-mode" : ""} card-title`}>
                Skills
              </h2>

              <input
                type="text-gray-50"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <div className="category-filters ">
                {[
                  "Programming Languages",
                  "Web Development",
                  "Game Development",
                  "Cyber Security",
                ].map((category) => (
                  <li key={category}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="category-label">{category}</span>
                    </label>
                  </li>
                ))}
              </div>
              <ul className="list">
                {filteredSkills.map((item, index) => (
                  <li
                    key={index}
                    className={`list-item ${darkMode ? "dark-mode" : ""}`}
                  >
                    <strong>{item.category}:</strong> {item.skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
