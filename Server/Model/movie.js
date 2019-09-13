var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true

    },
    review: {
        type: Number,
        required: true
    }
})
var movieDatabase = mongoose.model('movies', movieSchema);

class MovieModel {
    movieShow(request, callback) {
        try {
            movieDatabase.find({}, (error, result) => {
                if (error) {
                    console.log("Error movie", loginData);
                    return callback(error);
                }
                if (result == null) {
                    console.log("redasa",result);
                    
                    return callback(null, "Invalid")
                } else {
                    console.log("movies",result);
                    
                    return callback(null, result)
                }
            })
        } catch (error) {
            request.callback(error);
        }
    }
}

var movie = new MovieModel();
module.exports = movie;