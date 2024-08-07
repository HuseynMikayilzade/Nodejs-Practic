const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname,"assets")));
app.use("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/about.html"))
})
app.use("/blog",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/blog.html"))
})
app.use("/services",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/services.html"))
})
app.use("/gallery",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/gallery.html"))
})
app.use("/projects",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/projects.html"))
})
app.use("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/contact.html"))
})
app.use("/" || "index",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"))
})

app.listen(3000,()=>{
    console.log("Listening on port 3000 :)")
})