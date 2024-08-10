const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
app.use(express.urlencoded({extended: false})); 

app.use(express.static(path.join(__dirname,"assets")));

//======= app.use("/checkout.html" || "/checkout") yazdiqda islemir ========//

app.use(["/checkout.html", "/checkout"],(req,res)=>{
    res.sendFile(path.join(__dirname,"views/checkout.html"))
})
app.use(["/detail.html" , "/detail"],(req,res)=>{
    res.sendFile(path.join(__dirname,"views/detail.html"))
})
app.use(["/shop.html" , "/shop"],(req,res)=>{
    res.sendFile(path.join(__dirname,"views/shop.html"))
})
app.use(["/contact.html" , "/contact"],(req,res)=>{
    res.sendFile(path.join(__dirname,"views/contact.html"))
})
app.use(["/cart.html" , "/cart"],(req,res)=>{
    res.sendFile(path.join(__dirname,"views/cart.html"))
})
app.post('/sendmessage',(req,res)=>{
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
app.use("/" ||"/index.html" || "/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"))
})
app.listen(4000,()=>{
    console.log("no problem")
})