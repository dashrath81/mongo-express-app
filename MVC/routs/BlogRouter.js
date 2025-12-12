const express = require('express');
const Auth = require('../middelwer/B-Auth');
const {
    createBlog,
    getAllBlogs,
    editPage,
    updateBlog,
    deleteBlog
} = require('../controller/BlogController');

const router = express.Router();

// UI page
router.get("/", getAllBlogs);

// Create Blog
router.post("/add", createBlog);

// Edit Page
router.get("/edit/:id", editPage);

// Update Blog
router.post("/update/:id", updateBlog);

// Delete Blog
router.post("/delete/:id", deleteBlog);

router.get("/",Auth,createBlog);

module.exports = router;
