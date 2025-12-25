const categorymodel = require('../Model/cetegoryModel');

const createCategory = async (req, res) => {
    const data = await categorymodel.create(req.body);
    res.send(data);
}
const getAllCategory = async (req, res) => {
    const data = await categorymodel.find();
    res.send(data);
}
const updateCategory = async (req, res) => {
    const data = await categorymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(data);
}
const deleteCategory = async (req, res) => {
    const data = await categorymodel.findByIdAndDelete(req.params.id);
    res.send(data);
}

module.exports = { createCategory, getAllCategory, updateCategory, deleteCategory };
