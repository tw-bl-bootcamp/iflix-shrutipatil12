
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
});

var user = mongoose.model('users', userSchema);

class UserModel {
    login(loginData, callback) {
        user.findOne({ "email": loginData.email,"password":loginData.password }, (err, data) => {
            if (err) {
                console.log("Error login",loginData);
                return callback(err);
            }
            if(data!=null){
            //    return callback(null,"Invalid User")
            // }
            // else{
            return callback(null,data)
            }
        })
    }
}

var userModule=new UserModel();
module.exports=userModule;