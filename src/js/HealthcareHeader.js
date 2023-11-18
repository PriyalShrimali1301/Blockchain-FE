import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './HealthcareHeader.css'
const HealthcareHeader = () => {
const navigate= useNavigate();
const handleSignOut = () => {
    // Handle signing out logic
    navigate('/');
    };  
  return (
    <div className="healthcare-header">
      <div className="left-options1">
        <NavLink to="/healthcare" activeClassName="active">Confirm Appointments</NavLink>
        <NavLink to="/transfertests" activeClassName="active">Transfer Tests</NavLink>
      </div>
      <div className="right-options1">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default HealthcareHeader;
