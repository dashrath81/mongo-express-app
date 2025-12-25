const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    Image: String
});

module.exports = mongoose.model('blog', blogSchema);
