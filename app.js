const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Load User Model
require('./models/User');

// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

// Load Keys
const keys = require('./config/keys');

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => {
  res.send('it works');
});

// Use Routes
app.use('/auth', auth);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});

