import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    if (e.target.files.length > 10) {
      alert('You can upload up to a maximum of 10 images.');
      return;
    }
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carData = {
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()), 
      images
    };

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    carData.tags.forEach(tag => formData.append('tags[]', tag)); // Append tags as array
    images.forEach(image => formData.append('images', image)); // Append images

    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://localhost:5000/api/cars', formData);

      if (response.status === 200) {
        alert('Car added successfully!');
        setTitle('');
        setDescription('');
        setTags('');
        setImages([]);
      }
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError('Error adding car. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900">
      <div className="w-full max-w-xl bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">Add a New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter car title"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">Description</label>
            <textarea
              className="w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter car description"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. SUV, Tesla, Electric"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">Images (max 10)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              onChange={handleImageUpload}
            />
            {images.length > 0 && (
              <p className="mt-2 text-sm text-green-400">{images.length} images selected.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Adding Car...' : 'Add Car'}
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddCar;
