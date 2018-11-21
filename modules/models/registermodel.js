const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining the Schema
let userSchema = new Schema({
    firstName: {
        type: String,
        index: { unique: true, dropDups: true },
        unique:true
       // required: [true,  'Firstname cannot be left blank']
    },
    lastName: String,
    email :{
        type: String,
        index: { unique: true, dropDups: true }
    },
    username:{
          type: String
    },
    password: String,
    required: [true,  'Password cannot be left blank'],
    updated_at:{
        type:Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

});

//To use created schema -> convert schema into Model
let User = mongoose.model('Users', userSchema);

module.exports = User;