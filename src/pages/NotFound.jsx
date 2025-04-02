import React, { useEffect } from 'react';
import './NotFound.css';

function NotFound() {
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  return (
    <div className="container" id='notFound'>
      <div className="row">
        <div className="col-md-12 text-section">
          <h1 className="mt-5">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="btn btn-home">Go to Home</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;