const express = require('express');
const router = express.Router();
// const path = require('path');


router.use(["/login.html","/login"],(req,res)=>{
    res.render("auth/login")
})
router.use(["/register.html","/register"],(req,res)=>{
    res.render("auth/register")
})

module.exports = router;