const express = require('express');
const connectdb = require('./config/connectdb')
const app = express();
const cors = require('cors');
//start middlware
app.use(cors());
app.use(express.json());
//end middlware


//start router
const productRoute = require('./routers/product');
const categoryRoute = require('./routers/category');
app.use('/category',categoryRoute);
app.use('/product',productRoute);
//end router



//start server
app.get('/', (req, res) => {
    res.send("Start..")
})
connectdb();
app.listen("3000", () => {
    console.log("Ok")
})