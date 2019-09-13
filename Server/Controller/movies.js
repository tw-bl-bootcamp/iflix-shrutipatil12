const movieService = require('../Service/movies');
module.exports.movieShow = (request, response) => {
    var responseResult = {};
    var movieData = {
        title: request.body.title,
        rating: request.body.rating,
        reviwe: request.body.reviwe
    }

    movieService.movieShow(movieData, (error, data) => {
        if (error) {
            responseResult.success = false;
            responseResult.message = "No movies show available";
            responseResult.data = data;
            response.status(400).send(responseResult);
        }
        responseResult.success = true;
        responseResult.message = "movie show";
        responseResult.data = data;
        response.status(200).send(responseResult);
    })
}