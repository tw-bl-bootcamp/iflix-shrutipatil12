var express=require('express');
var route=express.Router();
var user=require('../Controller/UserController');
var movieController=require('../Controller/movies');
route.post('/login',user.login);
route.get('/movieShows',movieController.movieShow);
module.exports = route;