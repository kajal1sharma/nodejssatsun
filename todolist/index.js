const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const app = express();

const user=[] 
const todo =[
    {
        taskName:"lets ride a bike"
    },{
        taskName:"lets read a book"
    }
]


app.set('view-engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/todo',(req, res)=>{
    res.json(todo)
})
app.get('/login',(req, res)=>{
    res.render('login.ejs')
})
app.get('/register',(req, res)=>{
    res.render('registration.ejs')
})

app.post('/login',(req, res)=>{
    let password = req.body.password
    let username = req.body.username;

    let result=user.filter(ele=>ele.username===username)

    bcrypt.compare(password, result[0].password)
    .then(function(result) {
        if(result)
        res.redirect('/todo')
        // result == true
    });
    // res.status(200).json({message:"successfully logged in"})
})
app.post('/register',(req, res)=>{

    let password = req.body.password
    let username = req.body.username;

    let hashedpassword =  password+"............"+"hashed"
    user.push({
                username:username,
                password:hashedpassword 
            })
            res.json(user)
    // bcrypt.hash(password, 10)
    // .then(function(hashedPassword) {
    //     // Store hash in your password DB.
    //     user.push({
    //         username:username,
    //         password:hashedPassword
    //     })
    //     res.json(user)
    // })
    // .catch(err=>{
    //     res.json(err)
    // })
    // res.status(200).json({message:"successfully registered in"})
})


app.listen(3000)