import React from 'react';
import { Link } from 'react-router-dom';
import carImage from '../assets/gaadi.webp'; 

const Home = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      <img 
        src={carImage} 
        alt="Car Management"
        className="mx-auto mb-6 w-3/4 sm:w-2/3 h-auto object-cover rounded-xl shadow-2xl"
      />
      <h1 className="text-5xl font-extrabold text-white tracking-wide mb-4">Welcome to Car Management</h1>
      <p className="mt-4 text-white text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
        Manage your cars effortlessly with our advanced and user-friendly platform that helps you keep track of everything.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white mb-4">Toyota</h2>
          <p className="text-gray-200 text-lg">Innovative, reliable cars that set the industry standard for performance and safety.</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white mb-4">BMW</h2>
          <p className="text-gray-100 text-lg">Luxury and performance collide with precision engineering and sleek design.</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white mb-4">Ford</h2>
          <p className="text-gray-100 text-lg">Built for durability and toughness, Ford vehicles are built to last for generations.</p>
        </div>
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white mb-4">Tesla</h2>
          <p className="text-gray-100 text-lg">Leading the way in electric vehicles with futuristic designs and unmatched performance.</p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl max-w-4xl mx-auto transform transition duration-500 hover:scale-105">
        <h3 className="text-3xl font-bold text-white mb-6 text-shadow-md animate__animated animate__fadeIn animate__delay-1s">Car Management Simplified</h3>
        <p className="text-gray-300 text-lg sm:text-xl animate__animated animate__fadeIn animate__delay-2s">
          Our platform helps you manage your vehicles with ease. From tracking maintenance schedules to listing your cars for sale, everything is done in a seamless, efficient manner. You can keep a log of all the essential information about your car and access it whenever you need.
        </p>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto transform transition duration-500 hover:scale-105">
        <h3 className="text-3xl font-bold text-white mb-6 text-shadow-md animate__animated animate__fadeIn animate__delay-1s">Projects by Sanskar</h3>
        <ul className="list-disc pl-6 text-white text-lg sm:text-xl animate__animated animate__fadeIn animate__delay-2s">
          <li className="mb-2">Car Inventory Management System</li>
          <li className="mb-2">Vehicle Tracking and Analytics Dashboard</li>
          <li className="mb-2">Car Rental Service App</li>
        </ul>
      </div>

      <div className="mt-8">
        <Link to="/login" className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-3 px-6 rounded-full text-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
