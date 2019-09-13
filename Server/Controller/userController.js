const userService = require('../service/userService');
exports.login = (request, response) => {
    try {
        let responseResult = {};
        let loginCredentials = {
            email: request.body.email,
            password: request.body.password
        }

        request.checkBody('email').isEmail()
        request.checkBody('password').isLength({ min: 8
        })

        let errors = request.validationErrors();

        if (errors) {
            responseResult.success = false;
            responseResult.message = "Enter valid login credentials";
            response.status(422).send(responseResult);
        } else {
            userService.login(loginCredentials, (err, data) => {
                console.log("data in login ctrl", loginCredentials);

                if (err) {
                    responseResult.success = false;
                    responseResult.message = "Unauthorized User";
                    responseResult.data = data;
                    response.status(400).send(responseResult);
                } else {
                    responseResult.success = true;
                    responseResult.message = "Login Successfully";
                    responseResult.data = data;
                    response.status(200).send(responseResult);
                }
            })
        }
    } catch (err) {
        console.log("Error in catch block", err);

        response.send(err);
    }
}