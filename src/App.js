import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './js/Homepage';
import PatientLandingPage from './js/PatientLandingPage'; // Import the Patient.js component
import HealthcareLandingPage from './js/HealthcareLandingPage'; // Import the Healthcare.js component
import MakeAppointment from './js/makeAppointment';
import Tests from './js/tests';
import TransferTests from './js/transferTests';
import Web3 from 'web3';
const web3 = new Web3('http://127.0.0.1:7545');
const contractABI = require('./PatientHealthRecord.json').abi;
const contractAddress = '0xd1dD264d54941671Dbc4156eA87bfD407548d93a';

const contract = new web3.eth.Contract(contractABI, contractAddress);


const App = () => {
  return (
    <Router>
    <Routes>
    
      <Route path="/" element={<Homepage />} />
      <Route path="/patient" element={<PatientLandingPage />} />
      <Route path="/healthcare" element={<HealthcareLandingPage />} />
      <Route path="/makeappointment" element={<MakeAppointment />} />
      <Route path="/tests" element={<Tests />} />
      
      <Route path="/transfertests" element={<TransferTests />} />
    </Routes>
  </Router>
  );
};

export { web3, contract };
export default App;
