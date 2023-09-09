const express = require('express');
const router =express.Router();




router.get("/productpage",(req, res)=>{
    //db
    let data = require('../data')
    res.render('index',{heading:"Amazon website",data:data, size:data.length})
})

router.get("/productInfo",(req, res,next)=>{
   // res.send("getting all info of the products");
    console.log("hello this is req incompleted");
    next();
})

router.get("/productInfo", (req, res)=>{
    next();
    // res.send("hello req is taken care of")
})
router.get("/productInfo/getdetails",(req, res)=>{
    res.send("hi req successfully termminated")
})

router.get("/getAllDetails",(req, res)=>{

    const data= require("../data");
    res.json(data);
})
router.get("/getdetails",(req, res)=>{
    const productId = req.query.productId;
    const color= req.query.color;
    const data = require('../data');
    let result=[]
    console.log(productId ,color)
    data.forEach(element => {
        if(element.productId===Number(productId) && element.color===color ){
            result.push(element)
        }
    });
    res.json([...result]);

})

router.get("/deleteProduct",(req, res)=>{
    res.send("product has to be deleted")
})

module.exports= router;