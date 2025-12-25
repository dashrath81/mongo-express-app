const express = require('express');
const { createProduct, getAllProducts,updateProduct,deleteProduct } = require('../controller/productController');

const router = express.Router();
router.post('/add', createProduct);
router.get('/all', getAllProducts);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;