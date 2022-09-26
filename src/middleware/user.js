const express = require('express')
const app = express()
let jwt = require('jsonwebtoken');
const privateJWTKey = process.env.JWT_SECRET_KEY

app.use((req, res, next) => {
    try{
        if(req.headers.hasOwnProperty("authorization")){
            var decoded = jwt.verify(req.headers.authorization,privateJWTKey)
            next()
        }
        else{
            res.send(401)
        }
    }
    catch(err){
        res.send(401)
    }
})

module.exports = app