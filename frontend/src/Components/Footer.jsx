import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Car Manager</Link>
        </h1>
        <div>
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
          <Link to="/register" className="mx-2 hover:underline">Register</Link>
          <Link to="/add-car" className="mx-2 hover:underline">Add Car</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
