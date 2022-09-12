const express = require('express')
const app = express()
const User = require('../../models/user');
const { body, validationResult } = require('express-validator');
const { formatError } = require('../../helper/format');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/user/login',async (req,res)=>{
    let userData = await User.findOne({'email':req.body.email});
    if(userData && req.body.hasOwnProperty("password")){
        let passwordCheck = await bcrypt.compareSync(req.body.password,userData.password);
        if(passwordCheck){
            res.status(200).json({"status":true,"message":"Login SuccessFully"})
        }
        else{
            res.status(200).json({"status":false,"message":"Invalid Credentials"})
        }
    }
    else{
        res.status(200).json({"status":false,"message":"Invalid Credentials"})
    }
})

app.post('/user/register',

    body('email').isEmail(),
    body('password').isLength({ min: 8 }),

    async (req,res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {        
            return res.status(422).json({
                status: false,
                error: formatError(errors.array())
            });
        }

        const hash = await bcrypt.hashSync(req.body.password, saltRounds);

        let user = {
            email: req.body.email,
            password: hash,
        }

        let newUser = new User(user);
        await newUser.save().then((data)=>{
            res.status(201).json({"status":true,"message":"User Registed Sucessfully"})
        })
        .catch((err)=>{
            res.status(400).json({"status":false,"message":err})
        })
})

module.exports = app