import React, { useState } from 'react';

const AddCar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    if (e.target.files.length > 10) {
      alert('You can upload a maximum of 10 images.');
      return;
    }
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = { title, description, tags: tags.split(','), images };
    console.log('Car Data:', carData);
    // API call to save car data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Add a New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter car title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter car description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. SUV, Tesla, Electric"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Images (max 10)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleImageUpload}
            />
            {images.length > 0 && (
              <p className="mt-2 text-sm text-green-600">{images.length} images selected.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition duration-200"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
