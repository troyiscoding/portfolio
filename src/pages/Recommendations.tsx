import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/personalReference1.png';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="personalReference1" className="profile-pic" />
          <div>
            <h3>Personal Reference 1</h3>
            <p>Former Employer</p>
            <p className="date">January 1, 2026</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Recommendations pending"</p>

        </div>
      </div>
    </div>
  );
};

export default Recommendations;
