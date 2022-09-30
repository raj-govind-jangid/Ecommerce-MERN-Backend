const express = require('express')
const app = express()
const Size = require('../../models/size');

exports.createSize = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({"status": false,"message": formatError(errors.array()) });
        }
        else{
            let size = {
                "name":req.body.name
            }
            let newSize = new Size(size)
            await newSize.save().then((date)=>{
                res.status(200).json({"status":true,"message":"Create Successfully"})
            })
            .catch((err)=>{
                res.status(400).json({"status":false,"message":err.message})
            })
        }
    }
    catch(err){
        res.status(400).json({"status":false,"message":err.message})
    }
}

exports.editSize = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({"status": false,"message": formatError(errors.array()) });
        }
        else{
            let updateSize = {
                "name": req.body.name,
                "status": req.body.status,
            }
            await Size.findByIdAndUpdate(req.params.id,updateSize).then(data=>{
                res.status(200).json({"status":true,"message":"Update Successfully"})
            })
            .catch((err)=>{
                res.status(400).json({"status":false,"message":err.message});
            })
        }
    }
    catch(err){
        res.status(400).json({"status":false,"message":err.message})
    }
}

exports.deleteSize = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({"status": false,"message": formatError(errors.array()) });
        }
        else{
        if(req.body.hasOwnProperty("productId") && req.body.hasOwnProperty("sizeId")){
            await Category.findByIdAndDelete(req.body.sizeId).then(data=>{
                res.status(200).json({"status":true,"message":"Deleted Successfully"})
            })
            .catch((error)=>{
                res.status(400).json({"status":false,"message":error});
            })
        }
        else{
            res.status(422).json({"status":false,"message":"Validation Error"})
        }
        }
    }    
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}