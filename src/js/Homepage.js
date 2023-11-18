import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import hospital from '../hospital.jpg';
import { web3, contract } from '../App';
import './Homepage.css'
const Homepage = () => {
  const [account, setAccount] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      }
    };

    fetchAccount();
  }, []);

  // const handlePatientRegistration = async () => {
  //   if (web3 && contract) {
  //     try {
  //       // Check if window.ethereum is available
  //       if (window.ethereum) {
  //         // Request accounts from the user using MetaMask
  //         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
  //         // Check if accounts are available
  //         if (accounts.length > 0) {
  //           // Use the first account in the array (you can modify this based on your requirements)
  //           const selectedAccount = accounts[0];
  //           console.log(selectedAccount);
  //           // Call your smart contract function or navigate
  //           // Example: await contract.methods.someFunction().send({ from: selectedAccount });
  //           navigate('/patient');
  //         } else {
  //           console.error('No accounts are available.');
  //         }
  //       } else {
  //         console.error('MetaMask is not available.');
  //       }
  //     } catch (error) {
  //       console.error('Error executing smart contract function:', error);
  //     }
  //   }
  // };
  
  const handlePatientRegistration = async () => {
    if (web3 && contract) {
      try {
        // Request accounts from the user using MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Check if accounts are available
        if (accounts.length > 0) {
          // Use the first account in the array
          const selectedAccount = accounts[0];
          console.log("Selected Account is: ", selectedAccount)
          // Call the registerPatient function on the smart contract
          const receipt=await contract.methods.registerPatient("Adolfos Shrimalis", selectedAccount).send({
            from: selectedAccount,
            gas: 200000 // Adjust gas value based on your contract's requirement
          });
          console.log("Transaction Receipt:", receipt);
          // Redirect to the patient page
          navigate('/patient');
        } else {
          console.error('No accounts are available.');
        }
      } catch (error) {
        console.error('Error executing smart contract function:', error);
      }
    }
  };
  

  const handleHealthcareProviderRegistration =  async() => {
    if (web3 && contract) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const selectedAccount = accounts[0];
        navigate('/healthcare');
      } catch (error) {
        console.error('Error executing smart contract function:', error);
      }
    }
  };

  return (
    <div className="app">
      <header className="header">Decentralized Patient Health Records Management</header>
      <div className="image-container">
        <img src={hospital} alt="Your Alt Text" className="cover-image" />
      </div>
      <div className="button-container">
        <button className="registration-button" onClick={handlePatientRegistration}>
          Patient Registration
        </button>
        <button className="registration-button" onClick={handleHealthcareProviderRegistration}>
          Healthcare Provider Registration
        </button>
      </div>
    </div>
  );
};

export default Homepage;
