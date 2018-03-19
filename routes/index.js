const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index/landing');
});

router.get('/settings', (req, res) => {
  res.render('index/settings');
});

router.get('/sign-in', (req, res) => {
  res.render('index/sign-in');
});

module.exports = router;
