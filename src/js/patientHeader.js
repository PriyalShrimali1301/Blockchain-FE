// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './PatientHeader.css'
// const PatientHeader = () => {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     // Handle signing out logic
//     navigate('/');
//   };

//   return (
//     <div className="patient-header">
//       <div className="left-options">
//         <NavLink to="/makeappointment" activeClassName="active">
//           Make an Appointment
//         </NavLink>
//         <NavLink to="/tests" activeClassName="active">
//           Tests
//         </NavLink>
//       </div>
//       <div className="right-options">
//         <button onClick={handleSignOut}>Sign Out</button>
//       </div>
//     </div>
//   );
// };

// PatientHeader.js
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { contract } from '../App'; // Import the contract instance

import './PatientHeader.css';

const PatientHeader = () => {
  const navigate = useNavigate();
  const [latestPatient, setLatestPatient] = useState('');

  const handleSignOut = () => {
    // Handle signing out logic
    navigate('/');
  };

  useEffect(() => {
    const fetchLatestPatient = async () => {
      try {
        // Call the getAllPatients function from the smart contract
        const patientList = await contract.methods.getAllPatients().call();

        // Get the latest patient name (assuming patientList is ordered by appointment creation)
        const latestPatientName = patientList.length > 0 ? patientList[patientList.length - 1].name : '';

        // Update the state with the latest patient name
        setLatestPatient(latestPatientName);
      } catch (error) {
        console.error('Error fetching latest patient:', error);
      }
    };

    fetchLatestPatient();
  }, []);

  return (
    <div className="patient-header">
      <div className="left-options">
        <p>Hi, {latestPatient}</p>
        <NavLink to="/makeappointment" activeClassName="active">
          Make an Appointment
        </NavLink>
        <NavLink to="/tests" activeClassName="active">
          Tests
        </NavLink>
      </div>
      <div className="right-options">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default PatientHeader;
