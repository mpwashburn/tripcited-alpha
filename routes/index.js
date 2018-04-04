const express = require('express');
const router = express.Router();
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

router.get('/',ensureGuest, (req, res) => {
  res.render('index/landing');
});

router.get('/style-guide', (req, res) => {
  res.render('index/style-guide');
});

router.get('/dashboard',ensureAuthenticated, (req, res) => {
  res.render('index/dashboard');
});

router.get('/settings', (req, res) => {
  res.render('index/settings');
});

router.get('/sign-in', (req, res) => {
  res.render('index/sign-in');
});

router.get('/register', (req, res) => {
  res.render('index/register');
});

module.exports = router;
