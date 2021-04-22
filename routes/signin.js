const express = require('express');
const router = express.Router();
const User = require('../models/Post');
//
router.post('/signin', async (req, res) => {
  User.find({
    call: req.body.call,
    password: req.body.password
  }, (err) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(user);
    }
  });
  user.save()
});

//
module.exports = router;
