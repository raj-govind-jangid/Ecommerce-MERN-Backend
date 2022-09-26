const express = require('express')
const app = express()
const Category = require('../../models/category');

exports.listCategory = async (req,res)=>{
    try{
        let categorylist = await Category.find().lean();
        res.status(200).json({"status":true,categorylist});
    }
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}

exports.createCategory = async (req,res)=>{
    try{
        if(req.body.hasOwnProperty("name") && req.body.hasOwnProperty("status")){
            let category = {
                "name":req.body.name,
                "status":req.body.status
            }
            let newCategory = new Category(category)
            await newCategory.save().then((date)=>{
                res.status(200).json({"status":true,"message":"Create Successfully"})
            })
            .catch((err)=>{
                res.status(400).json({"status":false,"message":err})
            })
        }
        else{
            res.status(422).json({"status":false,"message":"Validation Error"})
        }
    }
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}

exports.showCategory = async (req,res)=>{
    try{
        if(req.params.hasOwnProperty("id")){
            let getCategory = await Category.findById(req.params.id).lean()
            res.status(200).json({"status":true,getCategory})
        }
        else{
            res.status(422).json({"status":false,"message":"Validation Error"})
        }
    }
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}

exports.editCategory = async (req,res)=>{
    try{
        if(req.params.hasOwnProperty("id") && req.body.hasOwnProperty("name") && req.body.hasOwnProperty("status")){
            let updateCategory = {
                "name": req.body.name,
                "status": req.body.status,
            }
            await Category.findByIdAndUpdate(req.params.id,updateCategory).then(data=>{
                res.status(200).json({"status":true,"message":"Update Successfully"})
            })
            .catch((error)=>{
                res.status(400).json({"status":false,"message":error});
            })
        }
        else{
            res.status(422).json({"status":false,"message":"Validation Error"})
        }
    }
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}

exports.deleteCategory = async (req,res)=>{
    try{
        if(req.params.hasOwnProperty("id")){
            await Category.findByIdAndDelete(req.params.id).then(data=>{
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
    catch(err){
        res.status(400).json({"status":false,"message":err})
    }
}