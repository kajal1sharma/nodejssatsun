const express = require('express');
const router =express.Router();
const bb= require('../utils/busboyutil')
router.post("/login",bb,(req,res)=>{

    console.log("form body");
    res.send("sent successfullty")
    // let username= req.query.username;
    // let password =req.query.password;
    // console.log(username, password);
})
router.post("/signin",(req, res)=>{

    
    console.log(req.body)
    console.log(req.body.username)
    res.send("user has to signin");
})

router.get("/signup",(req, res)=>{
    res.send("user has to sign up")
})

module.exports= router;