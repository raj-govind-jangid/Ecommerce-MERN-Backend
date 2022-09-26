const express = require('express')
const app = express()
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let jwt = require('jsonwebtoken');
const privateJWTKey = process.env.JWT_SECRET_KEY

exports.login = async (req,res)=>{
    if(req.body.hasOwnProperty("email") && req.body.hasOwnProperty("password")){
        let userData = await User.findOne({'email':req.body.email}).lean();
        if(userData){
            let passwordCheck = await bcrypt.compareSync(req.body.password,userData.password);
            if(passwordCheck){
                let token = jwt.sign({ userId: userData._id, userType: userData.userType }, privateJWTKey);
                res.status(200).json({"status":true,"message":"Login SuccessFully",token})
            }
            else{
                res.status(422).json({"status":false,"message":"Invalid Credentials"})
            }
        }
        else{
            res.status(422).json({"status":false,"message":"Invalid Credentials"})
        }
    }
    else{
        res.status(422).json({"status":false,"message":"Validation Error"})
    }
}

exports.register = async (req,res)=>{
    if(req.body.hasOwnProperty("fullname") && req.body.hasOwnProperty("email") && req.body.hasOwnProperty("password")){
        let userData = await User.findOne({'email':req.body.email}).lean();
        if(userData == null){
            const hash = await bcrypt.hashSync(req.body.password, saltRounds);
            let user = {
                fullname: req.body.fullname,
                email: req.body.email,
                password: hash,
                userType: 1,
            }
            let newUser = new User(user);
            await newUser.save().then((data)=>{
                res.status(201).json({"status":true,"message":"User Registed Sucessfully"})
            })
            .catch((err)=>{
                res.status(400).json({"status":false,"message":err})
            })
        }
        else{
            res.status(422).json({"status":false,"message":"Email Id Already Exists"})    
        }   
    }
    else{
        res.status(422).json({"status":false,"message":"Validation Error"})
    }
}