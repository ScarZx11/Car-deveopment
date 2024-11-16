import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to Car Management</h1>
      <p className="mt-4 text-gray-600">Manage your cars effortlessly!</p>
      <div className="mt-6">
        <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
