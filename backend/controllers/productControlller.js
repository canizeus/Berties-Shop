const Product = require('../models/product');

//Create a new product => /api/v1/product/new
exports.newProduct = async(req, res, next) => {
    
    //Create product from the body request and post to the DB.
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product 
    });
};

//Get all available products.
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will get all available products.'
    });
};