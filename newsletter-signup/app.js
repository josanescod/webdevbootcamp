const express = require("express");
require("dotenv").config();


const app = express();

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
})