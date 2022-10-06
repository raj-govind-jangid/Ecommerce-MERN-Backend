const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT || 5000
var cors = require('cors')

// create express app
const app = express();

app.get("/",(req,res)=>{
    return res.status(200).json({
        status: true,
        message: "Ecommerce Server"
    });
})

app.use(cors())
require('./src/db/db')

const mainRouter = require('./src/routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(mainRouter);

app.listen(port,()=>{
    console.log(`listening ${port}`)
})