const express = require("express");
const multer = require("multer");
const { addMovie, editMovie, deleteMovie, getMovie } = require("../Controller/movieController");
const router = express.Router();


// multer setup
const upload = multer({ dest: "uploads/" }); 

router.post("/add", addMovie);
router.get("/all", getMovie);
router.patch("/:id", editMovie);
router.delete("/:id", deleteMovie);

module.exports = router;