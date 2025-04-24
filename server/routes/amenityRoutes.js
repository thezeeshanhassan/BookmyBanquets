const express = require('express');
const router = express.Router();
const {
  createAmenity,
  getAllAmenities,
  getAmenityById,
  updateAmenity,
  deleteAmenity
} = require('../controllers/amenityControllers');
const { authenticateHallManager } = require('../middlewares/auth');

// Admin-only routes
router.post('/', authenticateHallManager, createAmenity);
router.put('/:id', authenticateHallManager, updateAmenity);
router.delete('/:id', authenticateHallManager, deleteAmenity);

// Public
router.get('/', getAllAmenities);
router.get('/:id', getAmenityById);

module.exports = router;