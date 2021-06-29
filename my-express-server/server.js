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

app.get("/contact/oldcontact",(req,res)=>{
    res.send("Contact me at: old@gmail.com");
});

app.get("/contact",(req,res)=>{
    res.send("Contact me at: name@gmail.com");
});

app.get("/about",(req,res)=>{
    res.send("SysAdmin and Backend developer");
});

app.get("/hobbies",(req,res)=>{
    res.send("<ul><li>Coffee</li><li>Beer</li><li>Coding</li><li>Linux</li></ul>")
})


app.listen(process.env.PORT,()=>{
    console.log(`app listening at http://localhost:${process.env.PORT}`);
});