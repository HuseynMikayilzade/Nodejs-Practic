const express = require('express');
const {getCategories, deleteCategory, create, update, getCategory} = require('../controllers/category');
const router = express.Router();


router.get('/getcategories',getCategories);
router.get('/detail/:id',getCategory);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteCategory);

module.exports = router;