const express = require('express');
const db = require('./config/db');
const router= require("./routs/userRouter");
const productRouter= require("./routs/productRouter");
const categoryRouter= require("./routs/cetegoryRouter");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());

app.use('/product', productRouter);
app.use('/user', router);
app.use('/category', categoryRouter);
   
app.listen(5500, () => {
    console.log("Server is running on port 5500");
});