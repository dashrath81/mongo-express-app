const usermodel = require('../Model/userModel')
const nodemailer = require("nodemailer");

const sawregister = (req, res) => {
    res.render("register");
}
const sawlogin = (req, res) => {
    res.render("login");
}
const Register = async (req, res) => {
    const data = await usermodel.create(req.body);
    res.send(data);
}
const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await usermodel.findOne({ username, password });

    if (!user) {
        return res.send("Invalid username or password");
    }
    else if(user.password !== password)
    {
        return res.send("Invalid username or password");
    }
    res.cookie("users", user._id).send("logged in");
};
const getAllUsers = async (req, res) => {
    const data = await usermodel.find();
    res.send(data)
}
const password = async (req, res) => {
    const { id } = req.params;
    const { newpassword } = req.body;
    const data = await usermodel.findByIdAndUpdate(id, { password: newpassword },);
    res.send("password update", data);
};
const local = (req, res) => {
    return res.send("logged in with local strategy")
}

const deleteuser = async (req, res) => {
    const id = req.params.id;
    const data = await usermodel.findByIdAndDelete(id);
    res.send(data);
}

let otp=Math.floor(Math.random()*10000);
const mail=(req,res)=>{
    const trasporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"dashrathsolanki024@gmail.com",
            pass:"oxlqsohktyspqkvq",
        },
    });
    const mailOptions={
        from:"dashrathsolanki024@gmail.com",
        to:req.body.email,
        subject:"OTP for password reset",
        html: `<p>${otp}</p>`,

    }
    trasporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            console.log(error);
        } 
        else {
            console.log(data);
        }
        res.send("otp sent");
    });
}
const updateuser = async (req, res) => {
    const id = req.params.id;
    const data = await usermodel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.send(data);
}

module.exports = { Register, login, getAllUsers, local, mail, deleteuser, updateuser,password, sawregister, sawlogin };