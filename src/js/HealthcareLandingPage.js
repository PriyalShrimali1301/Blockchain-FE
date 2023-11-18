// HealthcareLandingPage.js

import React, { useState } from 'react';
import './HealthcareLandingPage.css';
import hospital from '../hospital.jpg';
import HealthcareHeader from './HealthcareHeader';

const HealthcareLandingPage = () => {
  const [selectedPatients, setSelectedPatients] = useState([]);

  const demoPatients = [
    { name: 'Rohit Sharma', testName: 'Test 1', token: 'Token123' },
    { name: 'Virat Kohli', testName: 'Test 1', token: 'Token124' },
    { name: 'Surya Kumar Yadav', testName: 'Test 1', token: 'Token125' },
    // Add more patients as needed
  ];

  const handleCheckboxChange = (token) => {
    // Toggle the selection of the patient
    setSelectedPatients((prevSelected) => {
      if (prevSelected.includes(token)) {
        return prevSelected.filter((selectedToken) => selectedToken !== token);
      } else {
        return [...prevSelected, token];
      }
    });
  };

  const handleConfirmAppointments = () => {
    // Handle the logic for confirming appointments with the selected patients
    console.log('Selected Patients:', selectedPatients);
    // Add your logic to confirm appointments with the selected patients
  };

  return (
    <div>
      <HealthcareHeader />
      <div className="image-container">
        <img src={hospital} alt="Your Alt Text" className="cover-image" />
      </div>
      <div className="overlay-table">
        <ul className='over'>
          {demoPatients.map((patient) => (
            <li key={patient.token}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedPatients.includes(patient.token)}
                  onChange={() => handleCheckboxChange(patient.token)}
                />
                <span>{`${patient.name} - ${patient.testName} - ${patient.token}`}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="confirm-button-container">
          <button className="confirm-button" onClick={handleConfirmAppointments} disabled={selectedPatients.length === 0}>
            Confirm Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthcareLandingPage;
