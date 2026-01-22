const express = require('express');

const { register, login ,verifyToken} = require('../controller/authcontroller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Access to protected route granted",
        userId: req.userId
    });
});

module.exports = router;