const express = require("express");
const auth = require("../Middelware/isAuth")
const {
    createBlog,
    getAllBlogs,
    editPage,
    updateBlog,
    deleteBlog
} = require("../Controller/blogcontroller");

const router = express.Router();

router.get("/", auth, getAllBlogs);
router.post("/create", auth, createBlog);
router.get("/edit/:id", auth, editPage);
router.post("/update/:id", auth, updateBlog);
router.get("/delete/:id", auth, deleteBlog);

module.exports = router;
