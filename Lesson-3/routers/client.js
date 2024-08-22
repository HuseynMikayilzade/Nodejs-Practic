const express = require('express');
const router = express.Router();
// const path = require('path');

const data = {
    title:"Multi shop"
}
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
router.use("/" ||"/index.html" || "/index",(req,res)=>{
    res.render("client/index",data)
})

module.exports = router;