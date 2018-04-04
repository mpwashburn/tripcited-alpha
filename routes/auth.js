const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();

// Load User model
require('../models/User');
const User = mongoose.model('users');

router.get('/google', passport.authenticate('google',
 {scope: ['profile', 'email']}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    req.flash('success_msg', 'You have successfully logged in');
    res.redirect('/trips/add');
  });

router.get('/verify', (req, res) => {
  if(req.user){
    console.log(req.user);
  } else {
    console.log('Not Authorized');
  }
});

router.get('/logout', (req, res) => {
 req.logout();
 res.redirect('/');
});

// Local Strategy

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', (req, res) => {
  let errors =[];

  if(req.body.password != req.body.password2){
    errors.push({text: 'Passwords do not match'});
  }

  if(req.body.password.length < 4){
    errors.push({text: 'Password must be at least 4 characters'})
  }

  if(errors.length > 0){
    res.render('auth/register', {
      errors:errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    User.findOne({email: req.body.email})
      .then(user => {
        if(user){
          req.flash('error_msg', 'Email already registered');
          res.redirect('/sign-in');
        } else{
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
              .then(user => {
                req.flash('success_msg', 'You are now registerd and can login');
                res.redirect('/auth/register');
              })
              .catch(err => {
                console.log(err);
                return;
              });
            });
          });
        }
      });
  }
});


module.exports = router;
