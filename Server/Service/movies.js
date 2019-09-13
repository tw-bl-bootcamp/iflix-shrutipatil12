const movieModel = require('../Model/movies');

exports.movieShow = (data, callback) => {

    movieModel.movieShow(data, (error, result) => {
        if (err) {
        
            return callback(error);
        }
        return callback(null, result);
    })
}