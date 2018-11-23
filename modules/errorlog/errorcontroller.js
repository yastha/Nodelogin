const mongoose = require('mongoose');
const User = require('../errorlog/errormodel');


exports.create = (err, req, res, next) =>{
    let user = new User({
        errMsg : req.body.errMsg
    });
user.save()
.then(data =>
    {
        res.json({message:"success"});
    })
    .catch(err=>{
        res.status(500).json({
            message : "server error",
            errMsg: toString()
        });
    })
    };



exports.getAll = (err, req,res, next)=>{
    User.find().sort({added_on: "desc"})
    .then(user => {
        res.json(user);
    })
    .catch(err=> {
        res.status(500).json({
            message : "server error",
            errMsg: toString()
    });
});
}
