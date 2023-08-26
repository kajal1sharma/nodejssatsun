const http =require("http")
const fs =require('fs');
//console.log(http);
const server =http.createServer((req,res)=>{
    // console.log("some request has come")
    // res.write("hello welcome to our new server")
    console.log(req.url);
    fs.appendFile('log.txt',req.url,(err)=>{
        if(err){
            console.log(err)
        }
    })
    res.setHeader('Content-Type',"text/html")
    console.log(req.method);
    if(req.url==="/home" && req.method==="GET")
{    
    
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>this is my first html page</h1>
        <h2>Home get</h2>
    </body>
    </html>`);
}
if(req.url==="/home" && req.method==="post")
{    
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>this is my first html page</h1>
        <h2>Home post</h2>
    </body>
    </html>`);
}
else if(req.url==="/about" && req.method==='post'){
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>this is my first html page</h1>
        <h2>About</h2>
    </body>
    </html>`);
}
})
//microservices 

server.listen(3000,'127.0.0.1',()=>{
    console.log("hello the server is running on port 80")
})