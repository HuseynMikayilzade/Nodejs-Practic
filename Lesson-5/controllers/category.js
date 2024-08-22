const Category = require('../models/category');

exports.getCategory = async(req,res)=>{
    const category = await Category.findById({_id:req.params.id});
    res.send(category);
}

exports.getCategories = async(req,res)=>{
    const categories = await Category.find();
    res.send(categories); 
}

exports.create = async(req,res)=>{
    const category = new Category(req.body);
    const newCategory = await category.save();
    console.log("new category created:",newCategory);
    res.send(newCategory);
}

exports.deleteCategory = async(req,res)=>{
    const category =await Category.findByIdAndDelete({_id:req.params.id});
    res.send(category);
}

exports.update = async(req,res)=>{
    const category = await Category.findByIdAndUpdate({_id:req.params.id},req.body);
    res.send(category);
}