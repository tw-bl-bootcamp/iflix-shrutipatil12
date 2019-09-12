const userModel = require('../model/userModel');

exports.login = (data, callback) => {
    console.log("user in service");
    
    userModel.login(data, (err, result) => {
        if (err) {
            console.log("error in service", err);
            return callback(err);
        }
        return callback(null, result);
    })
}