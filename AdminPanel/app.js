const express = require("express")
const db = require('./config/db');
const router = require("./router/admin")
const cookieParser = require('cookie-parser');
const app = express();

const port = 5700;

app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/admin',router)

app.listen(port, () => {
    console.log("Port Run ON :" ,  port );
})

