const express = require('express');
const router = express.Router();

const { getProducts, newProduct } = require('../controllers/productControlller');

//Route to fetch products.
router.route('/products').get(getProducts);
//Route to post products.
router.route('/product/new').post(newProduct);

module.exports = router;