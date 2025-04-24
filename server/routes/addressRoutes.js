const express = require('express');
const router = express.Router();
const { createAddress, updateAddress, deleteAddress, getAddressById, getAllAddresses } = require('../controllers/addressControllers');
const { authenticateUser, authenticateHallManager } = require('../middlewares/auth');

// // Public
router.get('/', getAllAddresses);
router.get('/:id', getAddressById);

// // Private - Hall Manager
router.post('/', authenticateHallManager, createAddress);
router.put('/:id', authenticateHallManager, updateAddress);
router.delete('/:id', authenticateHallManager, deleteAddress);

module.exports = router;
