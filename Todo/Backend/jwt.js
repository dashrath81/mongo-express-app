const mongoose = require("mongoose")

const jwtSchema = mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const jwt= mongoose.model("jwtSchema",jwtSchema)

module.exports = jwt;