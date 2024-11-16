const Car = require("../models/Car");

// Create Car
const createCar = async (req, res) => {
  const { title, description, tags } = req.body;
  const imagePaths = req.files.map(file => file.path); // Get file paths
  try {
    const car = await Car.create({
      title,
      description,
      images: imagePaths,
      tags: tags.split(","),
      owner: req.user._id,
    });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: "Failed to create car", error });
  }
};

// Get User's Cars
const getUserCars = async (req, res) => {
  try {
    const cars = await Car.find({ owner: req.user._id });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Search Cars
const searchCars = async (req, res) => {
  const { keyword } = req.query;
  const regex = new RegExp(keyword, "i");
  try {
    const cars = await Car.find({
      owner: req.user._id,
      $or: [
        { title: regex },
        { description: regex },
        { tags: regex },
      ],
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Car
const updateCar = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags } = req.body;
  try {
    const car = await Car.findOneAndUpdate(
      { _id: id, owner: req.user._id },
      { title, description, tags: tags.split(",") },
      { new: true }
    );
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete Car
const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    await Car.deleteOne({ _id: id, owner: req.user._id });
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createCar,
  getUserCars,
  searchCars,
  updateCar,
  deleteCar,
};
