const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/multerDemo")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String
});

const User = mongoose.model("User", userSchema);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/upload", express.static("upload")); // serving images

app.get("/", async (req, res) => {
    const data = await User.find();
    res.render("index", { user: data });
});

// Insert User
app.post("/insertData", upload.single("image"), async (req, res) => {
    await User.create({
        username: req.body.username,
        password: req.body.password,
        image: req.file ? req.file.filename : null
    });
    res.redirect("/");
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
