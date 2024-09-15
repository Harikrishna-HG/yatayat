const Bus = require('../models/bus-model');

// Fetch all buses
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find({});
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch buses' });
  }
};

// Fetch a bus by ID
const getBusById = async (req, res) => {
  try {
    const busId = req.params.id;
    const bus = await Bus.findById(busId);

    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the bus' });
  }
};

// Add a new bus
const addBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add bus' });
  }
};

// Delete a bus by ID
const deleteBus = async (req, res) => {
  try {
    const busId = req.params.id;
    await Bus.findByIdAndDelete(busId);
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete bus' });
  }
};

// Update a bus by ID
const updateBus = async (req, res) => {
  try {
    const busId = req.params.id;
    const updatedBus = await Bus.findByIdAndUpdate(busId, req.body, { new: true });
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update bus' });
  }
};

module.exports = {
  getAllBuses,
  addBus,
  deleteBus,
  updateBus,
  getBusById
};

