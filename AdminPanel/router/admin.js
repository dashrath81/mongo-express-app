const express = require("express")
const { showRegister,showLogin,Register,login,dashboard,logout } = require("../controller/admin")
const isLoggedIn = require('../middelware/isAuth')
const router = express.Router()


// Register routes
router.get("/register", showRegister);
router.post("/register", Register);

// Login routes
router.get("/login", showLogin);
router.post("/login", login);

router.get("/dashboard", isLoggedIn, dashboard);

// Logout
router.get("/logout", logout);

module.exports = router;