const express = require('express')
const app = express()
const adminMiddleware = require('../../middleware/admin')

app.post('/user/product',adminMiddleware,(req,res)=>{
    console.log("product")
    res.status(200).json({"status":"product"})

})
app.post('/user/productAll',adminMiddleware,(req,res)=>{
    console.log("productAll")
    res.status(200).json({"status":"productAll"})
})

module.exports = app