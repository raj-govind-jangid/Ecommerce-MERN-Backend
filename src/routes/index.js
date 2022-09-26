const express = require('express')
const app = express()

const userRouter = require("./user/index");
const adminRouter = require("./admin/index");

app.use('/api/v1',userRouter)
app.use('/api/v2',adminRouter)

module.exports = app