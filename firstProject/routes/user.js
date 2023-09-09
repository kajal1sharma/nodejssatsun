const express = require('express');
const router =express.Router();

router.get("/signin",(req,res)=>{
    // let username= req.query.username;
    // let password =req.query.password;
    // console.log(username, password);
})
router.post("/signin",(req, res)=>{

    
    console.log(req.body.username)
    res.send("user has to signin");
})

router.get("/signup",(req, res)=>{
    res.send("user has to sign up")
})

module.exports= router;