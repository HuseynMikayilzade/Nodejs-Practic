const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    price: Number,
    description: String,
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' },
    active: Boolean
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;