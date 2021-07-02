const express = require("express");
const app = express();
require('dotenv').config()

app.get("/",function(req,res){

    let today = new Date();
    let currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0) {
        res.send("<h1>Yay it's the weekend</h1>");
    }else {
        res.sendFile(__dirname + "/index.html");
    }
    

});


app.listen(process.env.PORT,function(){
    console.log(`Server started on port ${process.env.PORT}`);
})