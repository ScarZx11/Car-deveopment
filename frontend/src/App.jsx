import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Footer';
import Footer from './Components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import AddCar from './pages/AddCar';
import    Docs  from './pages/Docs';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/api/docs" element={<Docs />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
