const blogmodel = require('../Model/BlogModel');
const multer = require("multer");

// MULTER SETUP
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>
        cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage }).single("image");  

// CREATE BLOG
const createBlog = (req, res) => {
    upload(req, res, async function (err) {
        if (err) return res.send(err);

        const blog = await blogmodel.create({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: req.body.date,
            Image: req.file ? req.file.filename : null
        });

        res.redirect("/blog");   
    });
};

// GET ALL BLOGS (UI)
const getAllBlogs = async (req, res) => {
    const blogs = await blogmodel.find();
    res.render("blog", { blogs });   
};

// SHOW EDIT PAGE
const editPage = async (req, res) => {
    const blog = await blogmodel.findById(req.params.id);
    res.render("edit", { blog });
};

// UPDATE BLOG
const updateBlog = (req, res) => {
    upload(req, res, async function (err) {
        if (err) return res.send(err);

        let updateData = {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: req.body.date
        };

        if (req.file) {
            updateData.Image = req.file.filename;
        }

        await blogmodel.findByIdAndUpdate(req.params.id, updateData);
        res.redirect("/blog");
    });
};

// DELETE BLOG
const deleteBlog = async (req, res) => {
    await blogmodel.findByIdAndDelete(req.params.id);
    res.redirect("/blog");
};

module.exports = { createBlog, getAllBlogs, editPage, updateBlog, deleteBlog };
