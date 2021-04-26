const bcrypt = require('bcryptjs');
const Signin = require('../models/Login');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.signInNewUser = (req, res, next) => {
    Signin.find({ call: req.body.call })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: "Auth failed"
                });
            }
            
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(404).json({
                        message: "Auth failed"
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        call: user[0].call,
                        userId: user[0]._id
                    },
                        process.env.JWT_KEY,{
                        expiresIn: "1d"
                    }
                    );
                    return res.status(200).json({
                        message: "Auth Successful..",
                        token: token
                    });
                }
                res.status(404).json({
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
