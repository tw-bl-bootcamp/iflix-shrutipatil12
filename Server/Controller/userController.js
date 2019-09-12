// const { check, validationResult } = require('express-validator');
const userService = require('../service/userService');
exports.login = (req, res) => {
    let response = {};
    let loginCredentials = {
        email: req.body.email,
        password: req.body.password
    }
 
    req.checkBody('email').isEmail()
    req.checkBody('password').isLength({ min: 8 })

    let errors = req.validationErrors();

    if (errors) {
        response.success = false;
        response.message = "Enter valid login credentials";
        res.status(422).send(response);
    }
    else {
        userService.login(loginCredentials, (err, data) => {
            console.log("data in login ctrl",loginCredentials);
            
            if (err) {
                response.success = false;
                response.message = "Unauthorized User";
                response.data=data;
                res.status(400).send(response);
            }
            else {
                response.success = true;
                response.message = "Login Successfully";
                response.data=data;
                res.status(200).send(response);
            }
        })
    }
}