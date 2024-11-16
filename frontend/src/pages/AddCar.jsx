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
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Tags (comma-separated)</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Images (max 10)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full"
            onChange={handleImageUpload}
          />
          {images.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">{images.length} images selected.</p>
          )}
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
