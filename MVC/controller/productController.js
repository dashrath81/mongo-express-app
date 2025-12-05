const productmodel = require('../Model/productModel');

const createProduct = async (req, res) => {
    const data = await productmodel.create(req.body);
    res.send(data);
}
const getAllProducts = async (req, res) => {
    const data = await productmodel.find().populate('categoryid');
    res.send(data);
}
const updateProduct = async (req, res) => {
    const data = await productmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(data);
}
const deleteProduct = async (req, res) => {
    const data = await productmodel.findByIdAndDelete(req.params.id);
    res.send(data);
}
module.exports = { createProduct, getAllProducts , updateProduct, deleteProduct};