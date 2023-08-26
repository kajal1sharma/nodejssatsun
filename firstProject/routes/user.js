const express = require('express');
const router =express.Router();

router.get("/signin",(req, res)=>{
    res.send("user has to signin");
})

router.get("/signup",(req, res)=>{
    res.send("user has to sign up")
})

module.exports= router;