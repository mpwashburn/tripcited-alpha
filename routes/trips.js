const express = require('express');
const router = express.Router();

// Trips Index
router.get('/', (req, res) => {
  res.render('trips/index');
});

// Add a Trip
router.get('/add', (req, res) => {
  res.render('trips/add');
});

// Edit a Trip
router.get('/edit', (req, res) => {
  res.render('trips/edit');
});

// Show One Trip
router.get('/show', (req, res) => {
  res.render('trips/show');
});

module.exports = router;
