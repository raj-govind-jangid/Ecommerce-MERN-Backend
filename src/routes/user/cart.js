const express = require('express')
const app = express()
const userMiddleware = require('../../middleware/user')

app.post('/user/cart',userMiddleware,(req,res)=>{
    console.log("cart")
    res.status(200).json({"status":"cart"})
})
app.post('/user/cartAll',userMiddleware,(req,res)=>{
    console.log("cartAll")
    res.status(200).json({"status":"cartAll"})
})

module.exports = app