const express = require("express");
const session = require("express-session");
const passport = require("./Middelware/localAuth")
require("./Config/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", require("./Router/userrouter"));
app.use("/blog", require("./Router/blogrouter"));

app.listen(5500, () => console.log("Server running on 5500"));
