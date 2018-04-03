const express = require('express');
const router = express.Router();
const passport = require('passport');

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

module.exports = router;
