const express = require('express');
const router = express.Router();
const busController = require('../controller/bus-controller');

// Handle GET requests to fetch all buses
router.get('/', busController.getAllBuses);

// Handle POST requests to add a new bus
router.post('/', busController.addBus);

// Handle DELETE requests to delete a specific bus
router.delete('/:id', busController.deleteBus);

// Handle PUT requests to update a specific bus
router.put('/:id', busController.updateBus);

// Add a new route for fetching a bus by ID
router.get('/:id', busController.getBusById);


module.exports = router;

