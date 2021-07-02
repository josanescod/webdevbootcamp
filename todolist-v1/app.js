const express = require("express");
const app = express();
require('dotenv').config()
let newtask = ["Buy Food","Cook Food","Eat Food"];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));//POST

app.get("/", function (req, res) {
   
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options);    
    res.render("list", { 
        kindOfDay: day,
        tasklist: newtask
    });
});

app.post("/",(req,res)=>{
    let item = req.body.newtask;  
    if (item === "clean"){
        newtask = [];
    } else {
        newtask.push(item) ;
    }
    
    res.redirect("/");
})


app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
})

