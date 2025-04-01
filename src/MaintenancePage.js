import React from "react";
import "./MaintenancePage.css";
import image from "../src/MPMA.png";

const MaintenancePage = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = tomorrow.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="maintenance-container" style={{ height: "100vh", overflow: "hidden" }}>
      <img 
        src={image} 
        alt="Maintenance" 
        className="maintenance-image" 
        style={{maxHeight: "200px"}} 
      />
      <h1 className="title">Under Maintenance</h1>
      <p className="description">
        We're currently updating our website to bring you an <br/> even better
        experience. Please check back soon!
      </p>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="button-container">
        <button className="report-issue">Report Issue</button>
        <button className="contact-support">Contact Support</button>
      </div>
      <p className="footer-text">
        Expected to be back online:<p style={{fontWeight:'bold'}}>{formattedDate}</p> 
      </p>
    </div>
  );
};

export default MaintenancePage;