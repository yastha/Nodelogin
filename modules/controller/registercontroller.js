const mongoose = require('mongoose');
const User = require('../models/registermodel');
const bcrypt = require('bcrypt');
const SALT_VA1 = 10;
//Use promise in moongoose

mongoose.Promise = Promise;

   
exports.registerUser = (req, res, next) => {
    if (User.findOne({ email: req.body.email }).then((data) =>{
    
        if (data) {
            return res.status(409).json({
                code: 409,
                status: 'Conflit error',
                message: 'The user name already exists.',
                errMsg: err.toString()});
                n
        }
        else {
            bcrypt.hash(req.body.password, SALT_VA1, (err, hash) => {

                //Inserting data into the collection
                User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    username: req.body.username,
                    password: hash,
                    created_at: req.body.created_at,
                    is_deleted: req.body.is_deleted
                }).then((data) => {
                    res.json({ message: "You are loged in" });
                }).catch((err) => {
                    next(err);
                    //    return res.status(500).json({
                    //     code: 500,
                    //     status: 'error',
                    //     message: 'Please try again. You cant be registered',
                    //     errMsg: err.toString()});
                });
        
            });
        }
        }));
    }
    //Use express Validator here
