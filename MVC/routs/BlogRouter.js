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


    // Create Blog
    router.post("/add", createBlog);

    // Edit Page
    router.get("/edit/:id", editPage);

    // Update Blog
    router.post("/update/:id", updateBlog);

    // Delete Blog
    router.post("/delete/:id", deleteBlog);

    router.get("/",Auth,getAllBlogs);

    module.exports = router;
