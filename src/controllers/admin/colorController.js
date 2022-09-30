const express = require('express')
const app = express()
const Color = require('../../models/color');

exports.createColor = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ "status":false, "message": formatError(errors.array()) });
        }
        else{
            let size = {
                "name":req.body.name,
                "status":req.body.status
            }
            let newSize = new Color(size)
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

exports.editColor = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({"status": false,"message": formatError(errors.array()) });
        }
        else{
            let updateSize = {
                "name": req.body.name,
                "colorCode": req.body.colorCode,
                "status": req.body.status,
            }
            await Size.findByIdAndUpdate(req.params.colorId,updateSize).then(data=>{
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

exports.deleteColor = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({"status": false,"message": formatError(errors.array()) });
        }
        else{
            await Category.findByIdAndDelete(req.body.colorId).then(data=>{
                res.status(200).json({"status":true,"message":"Deleted Successfully"})
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