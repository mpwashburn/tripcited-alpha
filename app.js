const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Load Routes
const auth = require('./routes/auth');


const app = express();

app.get('/', (req, res) => {
  res.send('it works');
});

// Use Routes

app.use('/auth', auth);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});

