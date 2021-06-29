const express = require("express");
require("dotenv").config();
const app = express();


app.get("/",(req,res)=>{
    
    res.send("<h1>node app</h1>");
});

app.get("/hello",(req,res)=>{
    res.send(`<h2 style="color:red">Hello</h2>
<h3 style="color:green">Hello</h3>`);
});

app.get("/goodbye",(req,res)=>{
    res.send("Good bye");
});


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});