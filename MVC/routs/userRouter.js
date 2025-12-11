const express = require('express');
const {Register, login ,getAllUsers,local , deleteuser, updateuser , sawregister, sawlogin } = require("../controller/userController");
const isAuth = require("../middelwer/Auth");
const passport = require('passport');

const router = express.Router();

router.get('/r_user', sawregister);
router.get('/l_user', sawlogin);
router.post('/register', Register);
router.post('/login', login);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteuser);
router.patch('/update/:id', updateuser);
router.get("/", isAuth, getAllUsers);

router.post('/local',passport.authenticate('local'),local)


module.exports = router;


