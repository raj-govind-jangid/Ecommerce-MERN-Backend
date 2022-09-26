const express = require('express')
const { createSize, editSize, deleteSize } = require('../../controllers/admin/sizeController')
const app = express()

app.post('/create',createSize)
app.put('/edit/:id',editSize)
app.post('/delete',deleteSize)

module.exports = app