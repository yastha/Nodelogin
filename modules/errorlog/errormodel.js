const config = require("../config/config");
const mongoose = require('mongoose');

//Connect to mongoDb
mongoose.connect(config.database);

//Create Schema and Model
const Schema = mongoose.Schema;
 
const errSchema = new Schema({
    errMsg: String,
    added_on: {type:Date, default: Date.now()}
   
});


const errModel = mongoose.model('errorlog', errSchema);
module.exports = errModel;