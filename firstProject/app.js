const http = require("http");

const server = http.createServer((req,res)=>{

    res.write("<h1>this is app.js file</h1>")
    res.write("<h1>the request has been processed</h1>")
    res.write("<h1>the nodemon package has been installed</h1>")
    res.end("<h2>the is end Line</h2>");

})


server.listen(4000,'127.0.0.1',()=>{
    console.log("server is listening on port 4000")
})