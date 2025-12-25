const User = require("../Model/usermodel");

exports.register = async (req, res) => {
    await User.create(req.body);
    res.redirect("/user/login");
};

exports.loginFail = (req, res) => {
    res.send("Login Failed");
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect("/user/login");
    });
};
