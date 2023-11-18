// MakeAppointment.js
import React, { useState } from 'react';
import './makeAppointment.css'; // Import your styles
import HealthcareHeader from './HealthcareHeader';
import hospital from '../hospital.jpg';
import { Link } from 'react-router-dom';

const demoProviders = [
  { name: 'John Doe', address: 'Urology' },
  { name: 'Jane Doe', address: 'Ultrasound' },
  { name: 'Rohit Sharma', address: 'MRI' },
  // Add more providers as needed
];

const TransferTests = () => {
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

  const handleTransferTests = () => {
    // Handle booking the appointment with selected providers' name and address
    console.log("Book an appointment with:", selectedProviders);
  };

  return (
    <div>
      <HealthcareHeader />
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
          <button className="book-appointment-button" onClick={handleTransferTests}>
            Transfer Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferTests;
