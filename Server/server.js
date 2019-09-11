const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var db = require('/Users/shrutidhananjaypatil/Desktop/iflix-shrutipatil12/Server/config/dbConfig.js');
require('dotenv').config;
const app = express();

app.use(bodyParser.json());
var expressValidator = require('express-validator');
app.use(expressValidator());
app.use(bodyParser.urlencoded({
    extended: true
}));
var server = app.listen(3000, () => {
    console.log("server listening to port 3000");
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