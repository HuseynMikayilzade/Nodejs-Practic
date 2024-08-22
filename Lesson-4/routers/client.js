const express = require('express');
const sequelize  = require('../routers/db');
const { SELECT } = require('sequelize/lib/query-types');
const router = express.Router();

router.use(async(req,res,next)=>{
    try {
        const [categories] = await sequelize.query("SELECT * FROM categories");
        res.locals.categories = categories;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
})
router.use(["/checkout.html", "/checkout"],(req,res)=>{
    res.render("client/checkout")
})
router.use(["/detail.html" , "/detail"],(req,res)=>{
    res.render("client/detail")
})
router.use(["/shop.html" , "/shop"],(req,res)=>{
    res.render("client/shop")
})
router.use(["/contact.html" , "/contact"],(req,res)=>{
    res.render("client/contact")
})
router.use(["/cart.html" , "/cart"],(req,res)=>{
    res.render("client/cart")
})
router.post('/sendmessage',(req,res)=>{
    const {name , email , subject , message} = req.body;
    const data = `Name: ${name} \nemail: ${email} \nsubject: ${subject} \nmessage: ${message}\n\n`
    fs.appendFile(path.join(__dirname,"data/mydata.txt"),data,err=>{
        if(err){
            console.error(err)
        }
        console.log('Success');
        res.redirect('/')
    })
})

router.use("/" ||"/index.html" || "/index", async (req,res)=>{
    try {
        const [featuredproducts] = await sequelize.query("SELECT * FROM products where rating > 4");
        const [recentproducts] = await sequelize.query("SELECT * FROM products ORDER BY id DESC");
        const [customservices] = await sequelize.query("SELECT * FROM customservices");
        const [specialoffers] = await sequelize.query("SELECT * FROM specialoffers");
        res.render('client/index', {
             featuredproducts,
             recentproducts,
             customservices,
             specialoffers
            }); 
    } catch (error) {
        console.error(error);
        res.status(500).send('error');
    }
})

module.exports = router;