import React, { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return (
    <div className="flex justify-center pb-9 pt-9 min-h-screen place-items-center" id="notFound">
      <div className="grid grid-cols-1 place-items-center">
        <div className="text-center">
          <h1 className="mt-5 text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-lg">
            Sorry, the page you are looking for does not exist.
          </p>
          <a href="/" className="btn btn-home mt-4">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
