const express = require('express');
const app = express();
const path = require('path');
const dbConnection = require("./routers/db")
app.use(express.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname,"assets")));
app.use(express.static(path.join(__dirname,"assets/auth")));
app.set("view engine","ejs");


const clientRouter = require("./routers/client");
const authRouter = require("./routers/auth");
app.use(authRouter);
app.use(clientRouter);



app.listen(4000,()=>{
    console.log("no problem")
})