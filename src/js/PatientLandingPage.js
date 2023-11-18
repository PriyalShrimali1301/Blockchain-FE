// PatientHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PatientLandingPage.css'
import hospital from '../hospital.jpg'
import PatientHeader from './patientHeader';



const PatientLandingPage = () => {
  return (
    <div>
      <PatientHeader />
      <div className="image-container">
        <img
          src={hospital}
          alt="Your Alt Text"
          className="cover-image"
        />
      </div>
      <div className="overlay-table">
        <table>
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Category</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {/* Populate the table rows with existing test results */}
            <tr>
              <td>Test 1</td>
              <td>Category A</td>
              <td>Token123</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        </div>
      </div>
    
  );
};

export default PatientLandingPage;
