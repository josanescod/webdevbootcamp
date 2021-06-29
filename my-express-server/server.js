const express = require("express");
require("dotenv").config();
const app = express();


app.get("/",(req,res)=>{
    
    res.send("<h1>My first node app</h1>");
});

app.get("/portfolio",(req,res)=>{
    res.send(`<h2 style="color:red">There are some of my projects</h2>
<h3 style="color:green">Web app 1</h3>`);
});

app.get("/contact",(req,res)=>{
    res.send("Contact me at: name@gmail.com");
});


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});