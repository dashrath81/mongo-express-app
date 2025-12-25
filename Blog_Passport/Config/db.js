const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog_passport")
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));
