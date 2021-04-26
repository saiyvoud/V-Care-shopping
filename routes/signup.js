const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup');
const signinController = require('../controllers/signin');
const deleteController = require('../controllers/deleteuser');
//sign up
router.post('/signup',signupController.singUpNewUser);
router.post('/signin',signinController.signInNewUser);
router.delete('/:userId',deleteController.deleteuser);

module.exports = router;