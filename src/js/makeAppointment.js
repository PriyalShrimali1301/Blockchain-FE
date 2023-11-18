// MakeAppointment.js
import React, { useState } from 'react';
import './makeAppointment.css'; // Import your styles
import PatientHeader from './patientHeader';
import hospital from '../hospital.jpg';
import { Link } from 'react-router-dom';

const demoProviders = [
  { name: 'Dr. Smith', address: '0x1234567890abcdef1234567890abcdef12345678' },
  { name: 'Dr. Johnson', address: '0xabcdef1234567890abcdef1234567890abcdef12' },
  { name: 'Dr. Williams', address: '0x7890abcdef1234567890abcdef1234567890abcd' },
  // Add more providers as needed
];

const MakeAppointment = () => {
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
          <h2>Make an Appointment</h2>
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
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
