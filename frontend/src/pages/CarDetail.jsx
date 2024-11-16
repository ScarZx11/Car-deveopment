import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Replace with API call to fetch car details
    const mockCar = {
      id,
      title: 'Tesla Model S',
      description: 'Electric car with excellent performance',
      tags: ['Tesla', 'Electric', 'Luxury'],
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ],
    };
    setCar(mockCar);
  }, [id]);

  const handleDelete = () => {
    // API call to delete car
    console.log('Car deleted:', id);
    navigate('/cars');
  };

  if (!car) {
    return <p className="text-center mt-10">Loading car details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded p-6">
      <h2 className="text-3xl font-bold mb-4">{car.title}</h2>
      <p className="mb-4 text-gray-600">{car.description}</p>
      <div className="mb-4">
        <h3 className="font-semibold">Tags:</h3>
        <ul className="list-disc list-inside">
          {car.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Images:</h3>
        <div className="grid grid-cols-2 gap-2">
          {car.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Car ${index + 1}`}
              className="w-full rounded shadow-md"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => navigate(`/add-car?id=${id}`)}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Edit Car
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Delete Car
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
