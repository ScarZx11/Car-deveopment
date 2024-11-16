import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Replace with your API call
    const mockCars = [
      { id: 1, title: 'Tesla Model S', description: 'Electric car', tags: ['Tesla', 'Electric'] },
      { id: 2, title: 'Ford Mustang', description: 'Muscle car', tags: ['Ford', 'Muscle'] },
    ];
    setCars(mockCars);
  }, []);

  const filteredCars = cars.filter((car) =>
    [car.title, car.description, ...car.tags].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cars</h1>
      <input
        type="text"
        placeholder="Search cars..."
        className="border p-2 w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold">{car.title}</h3>
            <p>{car.description}</p>
            <Link to={`/cars/${car.id}`} className="text-blue-500 hover:underline mt-2 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
