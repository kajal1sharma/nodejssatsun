const express = require('express');
const router =express.Router();

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
router.get("/getdetails",(req, res)=>{
    console.log(req.url);
    res.send("Individual product info")
})

router.get("/deleteProduct",(req, res)=>{
    res.send("product has to be deleted")
})

module.exports= router;