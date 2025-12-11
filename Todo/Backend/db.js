const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDB')  

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Database connected successfully");
});

module.exports = db;
