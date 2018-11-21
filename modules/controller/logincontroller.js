const mongoose = require('mongoose');
const User = require('../models/registermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


var signOptions = {
    expiresIn:  "12h",
    algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
   };
let privatekey= '1234';

let mockemail = 'admin';
let mockPassword = 'password'

let token = req.headers['x-access-token'] || req.headers['authorization'];
//To use Promise in Mongoose
mongoose.Promise = Promise;

exports.loginUser = (req, res) => {

    //Use express Validator here
    User.findOne({ email: req.body.email })
        .then((data) => {
            if (!data) {
                return res.status(500).send("Couldnot find the data");
            } else if(data) {
                bcrypt.compare(req.body.password, data.password, (err, result) => {
                    if (result == true) {
                       return res.json({token : jwt.sign({email: data.email,privatekey, _id: user._id}, 'RESTFULAPIs')});
                        
                       // config.secret,{
                        //     expiresIn: '24h'
                        // },
                        
                        // res.json({
                        //     success: true,
                        //     message :'Authentication Successfull',
                        //     token:token
                    }
                        })
                    
                    console.log("Token:" + token )
                        res.json({token:jwt.sign({email: data.email},'RESTFULAPIs')});
                        //res.status(200).send("Hello welcome!!");
                    } else {
                     res.status(500).send('Authentication Failed');
                    }
                })
            }

       // });
//};