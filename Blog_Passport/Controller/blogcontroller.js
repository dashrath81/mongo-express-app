const blogmodel = require("../Model/blogmodel");
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
    upload(req, res, async err => {
        if (err) return res.send(err);

        await blogmodel.create({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: req.body.date,
            Image: req.file ? req.file.filename : null
        });

        res.redirect("/blog");
    });
};

// GET BLOGS
const getAllBlogs = async (req, res) => {
    const blogs = await blogmodel.find();
    res.render("blog", { blogs });
};

// EDIT PAGE
const editPage = async (req, res) => {
    const blog = await blogmodel.findById(req.params.id);
    res.render("edit", { blog });
};

// UPDATE
const updateBlog = (req, res) => {
    upload(req, res, async err => {
        if (err) return res.send(err);

        let data = {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            date: req.body.date
        };

        if (req.file) data.Image = req.file.filename;

        await blogmodel.findByIdAndUpdate(req.params.id, data);
        res.redirect("/blog");
    });
};

// DELETE
const deleteBlog = async (req, res) => {
    await blogmodel.findByIdAndDelete(req.params.id);
    res.redirect("/blog");
};

module.exports = {
    createBlog,
    getAllBlogs,
    editPage,
    updateBlog,
    deleteBlog
};
