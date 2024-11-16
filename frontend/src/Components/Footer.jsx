import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-300">Car Manager</Link>
        </h1>

        <div className="space-x-6">
          <Link to="/login" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Login</Link>
          <Link to="/register" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Register</Link>
          <Link to="/add-car" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Add Car</Link>
          <Link to="/api/docs" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Documentation</Link>
        </div>

        <div>
          {account ? (
            <button className="text-lg font-medium text-yellow-400">
              Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
