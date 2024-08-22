const mongoose = require('mongoose');

const CategorySchema =new mongoose.Schema({
    title: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product' 
    }],
})

const Category = mongoose.model('Category',CategorySchema);
module.exports = Category;