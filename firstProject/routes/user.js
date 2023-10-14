const express = require('express');
const router =express.Router();
const bb= require('../utils/busboyutil')
const usercollection = require('../model/user').module;

router.post("/login",bb,(req,res)=>{

    // console.log("form body");
    // let data = require("../data").product;
    // res.render('index',{heading:"Amazon website",data:data, size:data.length})
    


    // let username= req.query.username;
    // let password =req.query.password;
    // console.log(username, password);
})
router.get("/signin",async (req, res)=>{

    let arr=await usercollection.find();
    
    console.log(arr)
    // usercollection.insertOne({username:"abc",password:"13123"})
    // let arr= usercollection.findOne({username:"kajal"})
    //console.log(arr);
    ///console.log(req.body)
    //console.log(req.body.username)
    res.send("user has to signin");
})

router.get("/signup",(req, res)=>{


    let obj ={
        username:"neeta",
        password:"1232"
    }

    let userobj=new usercollection(obj);
    userobj.save();
    res.send("user has to sign up")
})

module.exports= router;