const express = require("express");
const app = express();
require('dotenv').config()

app.set("view engine","ejs");

app.get("/",function(req,res){

    let today = new Date();
    let currentDay = today.getDay(); 
    let day = "";

    if(currentDay === 6 || currentDay === 0) {
        day = "Weekend";
        res.send("<h1>Yay it's the weekend</h1>");
    }else {
        day = "Weekday";
        res.render("list",{ kindOfDay:day });
    }   

});

app.listen(process.env.PORT,function(){
    console.log(`Server started on port ${process.env.PORT}`);
})

