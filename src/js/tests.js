// MakeAppointment.js
import React, { useState } from 'react';
import './makeAppointment.css'; // Import your styles
import PatientHeader from './patientHeader';
import hospital from '../hospital.jpg';
import { Link } from 'react-router-dom';

const demoProviders = [
  { name: 'Dr. Smith', address: 'Gynae' },
  { name: 'Dr. Johnson', address: 'Ultrasound' },
  { name: 'Dr. Williams', address: 'Urology' },
  // Add more providers as needed
];

const Tests = () => {
  const [selectedProviders, setSelectedProviders] = useState([]);

  const handleCheckboxChange = (providerAddress) => {
    // Toggle the selected state of the provider
    setSelectedProviders((prevSelectedProviders) => {
      if (prevSelectedProviders.includes(providerAddress)) {
        return prevSelectedProviders.filter((address) => address !== providerAddress);
      } else {
        return [...prevSelectedProviders, providerAddress];
      }
    });
  };

  const handleBookAppointment = () => {
    // Handle booking the appointment with selected providers' name and address
    console.log("Book an appointment with:", selectedProviders);
  };

  return (
    <div>
      <PatientHeader />
      <div className="image-container">
        <img
          src={hospital}
          alt="Your Alt Text"
          className="cover-image"
        />
        <div className="appointment-container">
          <h2>Tests</h2>
          <div className="providers-list">
            {demoProviders.map((provider) => (
              <div key={provider.address} className="provider-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProviders.includes(provider.address)}
                    onChange={() => handleCheckboxChange(provider.address)}
                  />
                  {provider.name} - {provider.address}
                </label>
              </div>
            ))}
          </div>
          <button className="book-appointment-button" onClick={handleBookAppointment}>
            Send Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tests;
