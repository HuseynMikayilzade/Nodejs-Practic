const Product = require('../models/product');


exports.getProduct = async(req,res)=>{
    const product = await Product.findById({_id:req.params.id});
    res.send(product);
}

exports.getProducts = async(req,res)=>{
    const products = await Product.find();
    res.send(products); 
}

exports.create = async(req,res)=>{
    const product = new Product(req.body);
    const newProduct = await product.save();
    console.log("new product created:",newProduct);
    res.send(newProduct);
}

exports.deleteProduct = async(req,res)=>{
    const product =await Product.findByIdAndDelete({_id:req.params.id});
    res.json({ success: true, message: 'Product deleted successfully' });
}

exports.update = async(req,res)=>{
    const product = await Product.findByIdAndUpdate({_id:req.params.id},req.body);
    res.send(product);
}