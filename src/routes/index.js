const express = require('express')
const app = express()
const userRouter = require("./user/index");

app.use('/api/v1',userRouter)

module.exports = app