const express = require('express')
const { createColor, editColor, deleteColor } = require('../../controllers/admin/colorController')
const { editColorValid, deleteColorValid, createColorValid } = require('../../validations/admin/color')
const app = express()

app.post('/create',...[createColorValid],createColor)
app.put('/edit/:id',...[editColorValid],editColor)
app.post('/delete',...[deleteColorValid],deleteColor)

module.exports = app