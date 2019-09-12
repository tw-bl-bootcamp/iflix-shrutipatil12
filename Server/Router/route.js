var express=require('express');
var route=express.Router();
var controller=require('../Controller/UserController');
route.post('/login',controller.login);

module.exports = route;