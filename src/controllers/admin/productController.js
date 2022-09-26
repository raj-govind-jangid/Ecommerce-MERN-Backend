const express = require('express')
const app = express()
const Product = require('../../models/product');
const { validationResult } = require('express-validator');
const { formatError } = require('../../helper/format');
const Color = require('../../models/color');
const Size = require('../../models/size');
const { default: mongoose } = require('mongoose');

exports.listProduct = async (req,res)=>{
    try{
        let productlist = await Product.aggregate([
            {
                $lookup: {
                    from:"colors",
                    localField:"color",
                    foreignField:"_id",
                    as:"color",
                }   
            },
            {
                $lookup: {
                    from:"sizes",
                    localField:"size",
                    foreignField:"_id",
                    as:"size",
                }
            }
        ])
        res.status(200).json({"status":true,productlist});
    }
    catch(err){
        console.log("error => ",err)
        res.status(400).json({"status":false,"message":"DataBase Error"})
    }
}

exports.createProduct = async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: formatError(errors.array()) });
        }
        else{
            let colorArr = req.body.color;
            let colorObjectId = []
            for( let x of colorArr){
                let newColor = new Color({
                    "name":x.name,
                    "colorCode":x.colorCode,
                })
                await newColor.save().then((data)=>{
                    colorObjectId.push(data._id);
                })
            }

            let sizeArr = req.body.size;
            let sizeObjectId = []
            for( let x of sizeArr){
                let newSize = new Size({
                    "name":x.name,
                })
                await newSize.save().then((data)=>{
                    sizeObjectId.push(data._id);
                })
            }

            let productObj = {
                "name": req.body.name,
                "price": parseFloat(req.body.price),
                "shortDescription": req.body.shortDescription,
                "longDescription": req.body.longDescription,
                "status": req.body.status,
                "color":colorObjectId,
                "size":sizeObjectId,
            }

            let newProduct = new Product(productObj);
            let result = await newProduct.save();
            return res.status(200).json({"status": true, result});
        }
    }
    catch(err){
        console.log("error => ",err)
        res.status(400).json({"status":false,"message":"DataBase Error"})
    }
}

exports.showProduct = async (req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(422).json({"status":false,"message":"Invalid Id"});
        }
        let productShow = await Product.aggregate([
            {
                $match: {_id: mongoose.Types.ObjectId(req.params.id)}
            },
            {
                $lookup: {
                    from:"colors",
                    localField:"color",
                    foreignField:"_id",
                    as:"color",
                }   
            },
            {
                $lookup: {
                    from:"sizes",
                    localField:"size",
                    foreignField:"_id",
                    as:"size",
                }
            }
        ])
        if(productShow.length == 0){
            productShow = {}
        }
        else{
            productShow = productShow[0]
        }
        res.status(200).json({"status":true,productShow});
    }
    catch(err){
        console.log("error => ",err)
        res.status(400).json({"status":false,"message":"DataBase Error"})
    }
}

exports.editProduct = async (req,res)=>{
    // try{
    //     if(req.params.hasOwnProperty("id") && req.body.hasOwnProperty("name") && req.body.hasOwnProperty("status")){
    //         let updateCategory = {
    //             "name": req.body.name,
    //             "status": req.body.status,
    //         }
    //         await Category.findByIdAndUpdate(req.params.id,updateCategory).then(data=>{
    //             res.status(200).json({"status":true,"message":"Update Successfully"})
    //         })
    //         .catch((error)=>{
    //             res.status(400).json({"status":false,"message":error});
    //         })
    //     }
    //     else{
    //         res.status(422).json({"status":false,"message":"Validation Error"})
    //     }
    // }
    // catch(err){
    //     res.status(400).json({"status":false,"message":err})
    // }
}

exports.deleteProduct = async (req,res)=>{
    // try{
    //     if(req.params.hasOwnProperty("id")){
    //         await Category.findByIdAndDelete(req.params.id).then(data=>{
    //             res.status(200).json({"status":true,"message":"Deleted Successfully"})
    //         })
    //         .catch((error)=>{
    //             res.status(400).json({"status":false,"message":error});
    //         })
    //     }
    //     else{
    //         res.status(422).json({"status":false,"message":"Validation Error"})
    //     }
    // }
    // catch(err){
    //     res.status(400).json({"status":false,"message":err})
    // }
}