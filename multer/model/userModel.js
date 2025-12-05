const mongoose = require('mongoose');

const usermodel = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    Image: {
        type: String
    }
})

const user = mongoose.model('User', usermodel);

module.exports = user;

