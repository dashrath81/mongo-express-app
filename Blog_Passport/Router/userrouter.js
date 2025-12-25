const express = require("express");
const passport = require("passport");
const { register, loginFail, logout } = require("../Controller/usercontroller");

const router = express.Router();

router.get("/register", (req, res) => res.render("register"));
router.post("/register", register);

router.get("/login", (req, res) => res.render("login"));

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/blog",
        failureRedirect: "/user/fail"
    })
);

router.get("/fail", loginFail);
router.get("/logout", logout);

module.exports = router;
