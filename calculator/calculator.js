const express = require("express");
require("dotenv").config();
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/",(req,res)=>{
    
    //res.send("calculator app");
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening at http://localhost:${process.env.PORT}`);
})