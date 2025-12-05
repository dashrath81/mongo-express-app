const usermodel=require('../Model/userModel')

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

    res.cookie("users", user._id).send("logged in");
};


const getAllUsers = async (req, res) => {
    const data = await usermodel.find();
    res.send(data)
}
const deleteuser = async(req,res)=>{
    const id = req.params.id;
    const data = await usermodel.findByIdAndDelete(id);
    res.send(data);
}
const updateuser = async(req,res)=>{
    const id = req.params.id;
    const data = await usermodel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.send(data);
}

module.exports = { Register, login , getAllUsers , deleteuser, updateuser, sawregister, sawlogin };