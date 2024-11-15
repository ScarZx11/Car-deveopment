const express = require("express");
const {
  createCar,
  getUserCars,
  searchCars,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); // File storage
const router = express.Router();

router.post("/", protect, upload.array("images", 10), createCar);
router.get("/", protect, getUserCars);
router.get("/search", protect, searchCars);
router.put("/:id", protect, updateCar);
router.delete("/:id", protect, deleteCar);

module.exports = router;
