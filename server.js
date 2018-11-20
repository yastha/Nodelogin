const mongoose = require('mongoose'),
    express = require('express'),
    route = require('./route/route.js'),
    parser = require('body-parser'),
    app = express(),
    dbconfig = require('./modules/config/config.js');

    
app.use(parser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url,{
    useNewUrlParser:true
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log('Data base connection failed...exiting now');
    process.exit();
});

app.use('/api/', route);
app.listen(8000);
