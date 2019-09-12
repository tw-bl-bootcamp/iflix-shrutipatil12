
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
<<<<<<< HEAD
            if(data==null){
               return callback(null,"Invalid User")
            }
            else{
=======
            if(data!=null){
            //    return callback(null,"Invalid User")
            // }
            // else{
>>>>>>> 20b9f762dd54c70f2bbd443d2dc1ed3a3814a002
            return callback(null,data)
            }
        })
    }
}

var userModule=new UserModel();
module.exports=userModule;