const mongoose = require('mongoose');

//Define the product schema.
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product name.'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters.']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price of the product.'],
        maxLength: [5, 'Product price cannot exceed 5 digits.'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter the prodct description.']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select a category for the product.'],
        enum: {
            values: [
                'Accessories',
                'Beauty/Health',
                'Books',
                'Cameras',
                'Clothes/Shoes',
                'Electronics',
                'Food',
                'Headphones',
                'Home',
                'Laptops',
                'Outdoor',
                'Sports'
            ],
            message: 'Select the category for the product.'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter the correct product seller.']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter the stock number for the product.'],
        maxLength: [5, 'Product stock number cannot exceed 5 digits.'],
        default: 0
    },
    reviewNum: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);