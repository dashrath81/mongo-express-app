const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    categoryid: {
        type: mongoose.Schema.Types.String,
        ref: 'category',
    }
    
})
const productmodel = mongoose.model('product', productSchema);

module.exports = productmodel;