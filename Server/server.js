const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var db = require('./Config/dbConfig');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
var expressValidator = require('express-validator');
app.use(expressValidator());
app.use(bodyParser.urlencoded({
    extended: true
}));


var route = require('./Router/route');
app.use('/', route);

var port=process.env.port;
var server = app.listen(port, () => {
    console.log("server listening to port",port);
})
mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(" DB connected successfully");
    }).catch(err => {
        console.log(" DB could not connect", err);
        process.exit(0);
    })

    module.exports=app;