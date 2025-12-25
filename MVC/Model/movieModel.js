const mongoos = require('mongoose')

const MovieSchema = mongoos.Schema({
    Moviename: {
        type: String
    },
    Director: {
        type: String
    },
    Image: {
        type: String
    }
})

const movieModel = mongoos.model('Movie', MovieSchema)

module.exports = movieModel