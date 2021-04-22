const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.get('/signup', async (req, res) => {
  
 // Post.findOne({ call: req.body.call}, (err, user) => {
  //   if (err) {
  //     console.log(err);
  //     res.json(err); 
  //   } else {
  //     if (user == null) {
  //       const user = Post({
  //         call: req.body.call,
  //         password: req.body.password
  //       });
  //       user.save() 
  //         .then((err) => {
  //           if (err) {
  //             console.log(err);
  //             res.json(err);
  //           } else {
  //             console.log(user);
  //             res.json(user);
  //           }
  //         });
  //     } else {
  //       res.json({ message: 'call is not avilable' });
  //     }
  //   }
  // })
});
