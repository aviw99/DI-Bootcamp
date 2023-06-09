const express = require('express');
const router = express.Router();

const {
    _getAllProducts,
    _getProduct,
    _getProductName,
    _insertProduct,
    _deleteProduct,
    _updateProduct,
    _getAllProductsEjs
} = require('../controllers/products.js');

router.get('/products', _getAllProducts);
router.get('/products/:id', _getProduct);
router.get('/search', _getProductName);
router.post('/products', _insertProduct);
router.delete('/products/:id', _deleteProduct);
router.put('/products/:id', _updateProduct);

router.get('/ejs/products', _getAllProductsEjs);

module.exports = {
    router
}