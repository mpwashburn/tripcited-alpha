const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');
const User = mongoose.model('users');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');


// Trips Index
router.get('/', (req, res) => {
  Trip.find({visiblity:'public'})
  .then(trips => {
    res.render('trips/index', {
      trips:trips
    });
  });
});

// Add a Trip
router.get('/add',ensureAuthenticated, (req, res) => {
  res.render('trips/add');
});

// Edit a Trip
router.get('/edit',ensureAuthenticated, (req, res) => {
  res.render('trips/edit');
});

// Show One Trip
router.get('/show', (req, res) => {
  res.render('trips/show');
});

// Process New Trip Itinerary

router.post('/', (req, res) => {
  const newTrip = {
    title: req.body.title,
    destination: req.body.destination,
    dates: req.body.dates,
    description: req.body.description,
    visiblity: req.body.visiblity,
    user: req.user.id
  }
  // Create Trip
  new Trip(newTrip)
  .save()
  .then(trip => {
    res.redirect(`/trips/show/${trip.id}`);
  });
});

module.exports = router;
