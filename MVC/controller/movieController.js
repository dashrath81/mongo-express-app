const MovieModel = require("../Model/movieModel");

const addMovie = async (req, res) => {
    const data = await MovieModel.create(req.body);
    res.send(data);
};

const getMovie = async (req, res) => {
    const data = await MovieModel.find();
    res.send(data);
};

const deleteMovie = async (req, res) => {
    const data = await MovieModel.findByIdAndDelete(req.params.id);
    res.send("Book Deleted");
};

const editMovie = async (req, res) => {
    const id = req.params.id;
    const data = await MovieModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};
    

module.exports = { addMovie, editMovie, deleteMovie, getMovie };