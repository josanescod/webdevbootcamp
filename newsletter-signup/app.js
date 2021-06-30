const express = require("express");
require("dotenv").config();
const path = require('path');
const https = require("https");

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));//POST
app.get("/", function(req, res){       
         
        res.sendFile(__dirname + "/signup.html");
    });

app.post("/",function(req,res){
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    console.log(firstname,lastname,email);
})

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
})