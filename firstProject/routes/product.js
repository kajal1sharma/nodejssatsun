const express = require('express');
const router =express.Router();

router.get("/productInfo",(req, res)=>{
    res.send("getting all info of the products");
})

router.get("/deleteProduct",(req, res)=>{
    res.send("product has to be deleted")
})

module.exports= router;