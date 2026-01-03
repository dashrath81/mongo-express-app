const express = require("express")
const Adminmodel = require("../model/admin");
const jwt = require('jsonwebtoken');


// SHOW PAGES
const showRegister = (req, res) => {
    res.render("register");
};

const showLogin = (req, res) => {
    res.render("login");
};

const Register = async (req, res) => {
     try {
        const { name, email, password } = req.body;
        await Adminmodel.create({
            name,
            email,
            password
        });

        res.redirect("/admin/login");

    } catch (error) {
        res.status(500).send(error.message);
    }
     
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        const user = await Adminmodel.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).send("Invalid email or password");
        }

        // Create JWT payload
        const payload = {
            id: user._id,
            email: user.email
        };

        const token = jwt.sign(payload, "private-key", { expiresIn: "1h" });

        // Set cookie
        res.cookie("token", token, { httpOnly: true });
        res.redirect("/admin/dashboard");
       

    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
    
    
};

const dashboard =(req,res) =>{
    res.render("dashboard",{user:req.user});
}

// Logout
const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/admin/Register");
};



module.exports={showRegister,showLogin,Register,login,dashboard,logout}