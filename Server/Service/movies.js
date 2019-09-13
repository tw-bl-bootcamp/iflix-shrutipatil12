const movieModel = require('../Model/movie');

exports.movieShow = (data, callback) => {

    movieModel.movieShow(data, (error, result) => {
        if (error) {
            return callback(error);
        }
        return callback(null, result);
    })
}