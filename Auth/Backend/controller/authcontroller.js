const express = require('express');
const User = require('../model/authmodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const register=async (req, res) => {
    const { username, email, password } = req.body;

    const harshedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: harshedPassword
    });
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    });
}

const login=async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({   
            success: false,
            message: "Invalid password"
        });
    }
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({
        success: true,
        message: "Login successful",
        token
    });
}

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

module.exports={register, login,verifyToken};

    
    


