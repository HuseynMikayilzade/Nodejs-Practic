const express = require('express');
const {getProducts, deleteProduct, create, update, getProduct} = require('../controllers/product');
const router = express.Router();


router.delete('/delete/:id',deleteProduct);
router.get('/getproducts',getProducts);
router.post('/create',create);
router.put('/update/:id',update);
router.get('/detail/:id',getProduct);
module.exports = router;