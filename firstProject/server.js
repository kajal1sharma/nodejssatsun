const express = require('express');
const app = express();
app.get("/home",(req, res)=>{
    res.send("this is our express js app")
})

app.get('/about',(req, res)=>{
    res.send("<h1>This is about page</h1>")
})

app.get("/",(req, res)=>{
    res.send("This is an error page")
})


app.listen(3000,()=>{
    console.log("app listening on port 3000")
})