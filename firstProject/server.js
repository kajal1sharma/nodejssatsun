const express = require('express');
const app = express();
const path=require('path')
const userRouter = require('./routes/user');
const productRouter =require("./routes/product");



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"))
app.use("/",express.static(__dirname+"/public"))

// app.use('/',(req, res,next)=>{

//     // console.log(req.query.productId)
//     // console.log(req.query.color)
//     // res.send("abcd")
//     // next();
// })
app.use('/user', userRouter)
app.use("/product",productRouter);
// app.get("/home",(req, res)=>{
//     res.send("this is our express js app")
// })

// app.get('/about',(req, res)=>{
//     res.send("<h1>This is about page</h1>")
// })

// app.get("/",(req, res)=>{
//     res.send("This is an error page")
// })


app.listen(3000,()=>{
    console.log("app listening on port 3000")
})