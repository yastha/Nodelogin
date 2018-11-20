const mongoose = require('mongoose');
const user = require('../models/registermodel');
const bcrypt = require('bcrypt');
const SALT_VA1 = 10;
//Use promise in moongoose

exports.Promise = Promise;

exports.registerUser = (req, res) => {

    //Use express Validator here


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
            res.json({ message: "Your data is posted" });
        }).catch((err) => {
            return console.error(err);
        });

    });
};