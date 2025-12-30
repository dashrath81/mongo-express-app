const express = require('express');
const jwtModel = require('./jwt');
const jwt = require('jsonwebtoken');



const registeruser = async (req, res) => {
    const { email, password } = req.body;
    const data = await jwtModel.create({
        email,
        password
    });
    res.json(data);
}

const loginuser = async (req, res) => {
    const { email, password } = req.body;

    const user = await jwtModel.findOne({ email, password });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
        email: user.email,
        password:user.password,
        id: user._id
    };

    const token = jwt.sign(payload, "private-key", { expiresIn: "1h" });

    res.json({ token, user });
};


module.exports = {  registeruser,  loginuser };