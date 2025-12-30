const express = require('express');
const {  registeruser, loginuser } = require('./jwtController');

const router = express.Router();


router.post('/registeruser',registeruser);
router.post('/loginuser',loginuser);

module.exports = router;