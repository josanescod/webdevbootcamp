const express = require("express");
require("dotenv").config();

const app = express();

app.get("/",(req,res)=>{
    
    res.send("calculator app");
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening at http://localhost:${process.env.PORT}`);
})