//Get all available products.
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will get all available products.'
    });
};