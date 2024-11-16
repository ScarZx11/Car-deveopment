import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl font-semibold">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-300">Car Manager</Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/login" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Login</Link>
          <Link to="/register" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Register</Link>
          <Link to="/add-car" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Add Car</Link>
          <Link to="/api/docs" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">Documentation</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
