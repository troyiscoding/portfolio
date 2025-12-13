import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; // Update with the path to your logo

const NetflixTitle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      // Slight delay before navigation to allow exit animation if needed
      setTimeout(() => {
        navigate('/browse');
      }, 400);
    }, 1500); // 1 second loading

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="netflix-container">
      <div className="content-wrapper">
        <img
          src={logoImage}
          alt="Custom Logo"
          className={`netflix-logo ${loading ? 'loading' : 'finished'}`}
        />
        {loading && (
          <div className="loading-bar-container">
            <div className="loading-bar-progress"></div>
            <div className="loading-text">INITIALIZING...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetflixTitle;
