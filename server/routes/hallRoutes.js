const express = require('express');
const { authenticateHallManager } = require('../middlewares/auth.js');
const {
    createHall,
    updateHall,
    deleteHall,
    getAllHalls,
    getSingleHall,
    getHallAmenities,
    getHallBookings,
    searchHalls,
    checkAvailability,
    getHallReviews,
    postReview,
    getTopRatedHalls,
    getOwnedHalls
} = require('../controllers/hallController.js');

const router = express.Router();

// Core Routes
router.get('/', getAllHalls);                           // Public - Get all halls
router.get('/:id', getSingleHall);                      // Public - Get single hall
router.post('/', authenticateHallManager, createHall);  // Hall Manager - Create hall
router.put('/:id', authenticateHallManager, updateHall); // Hall Manager - Update hall
router.delete('/:id', authenticateHallManager, deleteHall); // Hall Manager - Delete hall
router.get('/:id/amenities', getHallAmenities);         // Public - Get amenities of a hall
router.get('/:id/bookings', authenticateHallManager, getHallBookings); // Protected - Bookings for hall

// Advanced 
router.get('/search/query', searchHalls);               // Public - Search halls
router.get('/:id/availability', checkAvailability);     // Public - Check hall availability
router.get('/:id/reviews', getHallReviews);             // Public - Get all reviews for a hall
router.post('/:id/review', postReview);                 // Protected (user) - Add review for hall
router.get('/top-rated/all', getTopRatedHalls);         // Public - Get top-rated halls
router.get('/owned/list', authenticateHallManager, getOwnedHalls); // Hall Manager - Own halls


module.exports = router;
