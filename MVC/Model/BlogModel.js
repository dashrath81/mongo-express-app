const mongoose = require('mongoose');

const blogSchema =mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
    },
    content:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    Image:{
        type:String,
    }

})
const blogmodel = mongoose.model('blog',blogSchema);

module.exports = blogmodel;          